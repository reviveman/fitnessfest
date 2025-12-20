import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendThankYouMail } from "@/lib/mail";

function unauthorized() {
  return new NextResponse("Unauthorized", { status: 401 });
}

export async function POST(req: Request) {
  try {
    /* ================== BASIC AUTH ================== */
    const authHeader = req.headers.get("authorization");

    if (!authHeader?.startsWith("Basic ")) {
      console.error("❌ Missing auth header");
      return unauthorized();
    }

    const decoded = Buffer.from(
      authHeader.split(" ")[1],
      "base64"
    ).toString("utf-8");

    const [username, password] = decoded.split(":").map(v => v.trim());

    if (
      username.trim() !== process.env.PHONEPE_WEBHOOK_USER?.trim() ||
      password.trim() !== process.env.PHONEPE_WEBHOOK_PASS?.trim()
    ) {
      console.error("❌ Invalid webhook credentials", { username });
      return unauthorized();
    }

    /* ================== BODY ================== */
    const body = await req.json();
    console.log("📩 PHONEPE WEBHOOK HIT:", body);

    /**
     * PhonePe payload structure (IMPORTANT)
     */
    const payload = body?.payload || body;

    const merchantOrderId = payload?.merchantOrderId;
    const state = payload?.state;
    const amount = payload?.amount;

    if (!merchantOrderId || !state) {
      console.error("❌ Invalid webhook payload", payload);
      return NextResponse.json({ success: false }, { status: 400 });
    }

    /* ================== DB ================== */
    const registration = await prisma.eventRegistration.findUnique({
      where: { merchantOrderId },
    });

    if (!registration) {
      console.error("❌ Registration not found:", merchantOrderId);
      return NextResponse.json({ success: false }, { status: 404 });
    }

    const paymentInfo = (registration.paymentInfo as any) || {};

    // 🔒 Idempotency
    if (paymentInfo.status === "SUCCESS") {
      console.log("🔁 Duplicate webhook ignored");
      return NextResponse.json({ success: true });
    }

    /* ================== SUCCESS ================== */
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

    /* ================== FAILED ================== */
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

      console.log("❌ Payment FAILED:", merchantOrderId);
    }

    /**
     * PhonePe REQUIRES 200 OK
     */
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Webhook error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
