// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";
// import { sendThankYouMail } from "@/lib/mail";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     console.log("📩 PHONEPE WEBHOOK HIT:", body);

//     // PhonePe sends nested payload
//     const payload = body?.payload || body;

//     const merchantOrderId = payload?.merchantOrderId;
//     const state = payload?.state;
//     const amount = payload?.amount;

//     if (!merchantOrderId || !state) {
//       console.error("❌ Invalid webhook payload");
//       return NextResponse.json({ success: false }, { status: 400 });
//     }

//     const registration = await prisma.eventRegistration.findUnique({
//       where: { merchantOrderId },
//     });

//     if (!registration) {
//       console.error("❌ Registration not found:", merchantOrderId);
//       return NextResponse.json({ success: false }, { status: 404 });
//     }

//     const paymentInfo = (registration.paymentInfo as any) || {};

//     // 🔒 Idempotency
//     if (paymentInfo.status === "SUCCESS") {
//       return NextResponse.json({ success: true });
//     }

//     if (state === "COMPLETED") {
//       await prisma.eventRegistration.update({
//         where: { merchantOrderId },
//         data: {
//           paymentInfo: {
//             ...paymentInfo,
//             status: "SUCCESS",
//             paidAmount: amount ? amount / 100 : null,
//             paidAt: new Date().toISOString(),
//             provider: "PHONEPE",
//           },
//         },
//       });

//       await sendThankYouMail({
//         to: registration.email,
//         name: registration.fullName,
//         event: registration.events.join(", "),
//       });

//       console.log("✅ Payment SUCCESS:", merchantOrderId);
//     }

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

//     // PhonePe expects HTTP 200
//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("❌ Webhook error:", err);
//     return NextResponse.json({ success: false }, { status: 500 });
//   }
// }


import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendThankYouEmail } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 PHONEPE WEBHOOK HIT:", body);

    const payload = body?.payload || body;

    const merchantOrderId = payload?.merchantOrderId;
    const state = payload?.state;
    const amount = payload?.amount;

    if (!merchantOrderId || !state) {
      console.error("❌ Invalid webhook payload");
      return NextResponse.json({ success: false }, { status: 400 });
    }

    /* =====================================================
       1️⃣ CHECK TICKET REGISTRATION FIRST
    ===================================================== */
    const ticket = await prisma.ticketRegistration.findUnique({
      where: { merchantOrderId },
    });

    if (ticket) {
      if (ticket.paymentStatus === "SUCCESS") {
        return NextResponse.json({ success: true });
      }

      if (state === "COMPLETED") {
        await prisma.ticketRegistration.update({
          where: { merchantOrderId },
          data: {
            paymentStatus: "SUCCESS",
            paidAmount: amount ? amount / 100 : ticket.amount,
            paidAt: new Date(),
          },
        });

        await sendThankYouEmail({
          to: ticket.email,
          name: ticket.fullName,
          event: ticket.passTitle,
        });

        console.log("✅ Ticket payment SUCCESS:", merchantOrderId);
      }

      if (state === "FAILED") {
        await prisma.ticketRegistration.update({
          where: { merchantOrderId },
          data: { paymentStatus: "FAILED" },
        });
      }

      return NextResponse.json({ success: true });
    }

    /* =====================================================
       2️⃣ FALLBACK → EVENT REGISTRATION
    ===================================================== */
    const registration = await prisma.eventRegistration.findUnique({
      where: { merchantOrderId },
    });

    if (!registration) {
      console.error("❌ No registration found:", merchantOrderId);
      return NextResponse.json({ success: false }, { status: 404 });
    }

    const paymentInfo = (registration.paymentInfo as any) || {};

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

      await sendThankYouEmail({
        to: registration.email,
        name: registration.fullName,
        event: registration.events.join(", "),
      });

      console.log("✅ Event payment SUCCESS:", merchantOrderId);
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
