// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { sendThankYouMail } from "@/lib/mail";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const {
//       merchantOrderId,
//       state, // COMPLETED | FAILED | PENDING
//       amount, // usually in paise
//     } = body;

//     if (!merchantOrderId || !state) {
//       console.error("❌ Invalid webhook payload:", body);
//       return NextResponse.json({ success: false }, { status: 400 });
//     }

//     // 🔍 Find registration
//     const registration = await prisma.eventRegistration.findUnique({
//       where: { merchantOrderId },
//     });

//     if (!registration) {
//       console.error("❌ Registration not found:", merchantOrderId);
//       return NextResponse.json({ success: false }, { status: 404 });
//     }

//     const paymentInfo = (registration.paymentInfo as any) || {};

//     // 🔒 Idempotency check
//     if (paymentInfo.status === "SUCCESS") {
//       console.log("🔁 Duplicate webhook ignored:", merchantOrderId);
//       return NextResponse.json({ success: true });
//     }

//     /**
//      * ✅ PAYMENT SUCCESS
//      */
//     if (state === "COMPLETED") {
//       await prisma.eventRegistration.update({
//         where: { merchantOrderId },
//         data: {
//           paymentInfo: {
//             ...paymentInfo,
//             status: "SUCCESS",
//             paidAmount: amount ? amount / 100 : null, // ₹
//             paidAt: new Date().toISOString(),
//             provider: "PHONEPE",
//           },
//         },
//       });

//       // 📧 Send confirmation email
//       await sendThankYouMail({
//         to: registration.email,
//         name: registration.fullName,
//         event: registration.events.join(", "),
//       });

//       console.log("✅ Payment SUCCESS:", merchantOrderId);
//     }

//     /**
//      * ❌ PAYMENT FAILED
//      */
//     if (state === "FAILED") {
//       await prisma.eventRegistration.update({
//         where: { merchantOrderId },
//         data: {
//           paymentInfo: {
//             ...paymentInfo,
//             status: "FAILED",
//             provider: "PHONEPE",
//           },
//         },
//       });

//       console.log("❌ Payment FAILED:", merchantOrderId);
//     }

//     /**
//      * PhonePe expects 200 OK
//      */
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("❌ PhonePe webhook error:", error);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendThankYouMail } from "@/lib/mail";

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": "Basic realm='PhonePe Webhook'",
    },
  });
}

export async function POST(req: Request) {
  try {
    /* 🔐 BASIC AUTH CHECK */
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Basic ")) {
      console.error("❌ Missing auth header");
      return unauthorized();
    }

    const base64 = authHeader.split(" ")[1];
    const decoded = Buffer.from(base64, "base64").toString("utf-8");
    const [username, password] = decoded.split(":");

    if (
      username !== process.env.PHONEPE_WEBHOOK_USER ||
      password !== process.env.PHONEPE_WEBHOOK_PASS
    ) {
      console.error("❌ Invalid webhook credentials");
      return unauthorized();
    }

    /* ✅ AUTH OK */
    const body = await req.json();
    console.log("📩 PHONEPE WEBHOOK HIT:", body);

    const { merchantOrderId, state, amount } = body;

    if (!merchantOrderId || !state) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const registration = await prisma.eventRegistration.findUnique({
      where: { merchantOrderId },
    });

    if (!registration) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    const paymentInfo = (registration.paymentInfo as any) || {};

    // 🔒 Idempotency
    if (paymentInfo.status === "SUCCESS") {
      return NextResponse.json({ success: true });
    }

    if (state === "COMPLETED") {
      await prisma.eventRegistration.update({
        where: { merchantOrderId },
        data: {
          paymentInfo: {
            ...paymentInfo,
            status: "SUCCESS",
            paidAmount: amount ? amount / 100 : null,
            paidAt: new Date().toISOString(),
            provider: "PHONEPE",
          },
        },
      });

      await sendThankYouMail({
        to: registration.email,
        name: registration.fullName,
        event: registration.events.join(", "),
      });

      console.log("✅ Payment SUCCESS:", merchantOrderId);
    }

    if (state === "FAILED") {
      await prisma.eventRegistration.update({
        where: { merchantOrderId },
        data: {
          paymentInfo: {
            ...paymentInfo,
            status: "FAILED",
            provider: "PHONEPE",
          },
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
