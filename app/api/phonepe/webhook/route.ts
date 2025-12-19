import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendThankYouMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      merchantOrderId,
      state, // COMPLETED | FAILED | PENDING
      amount, // usually in paise
    } = body;

    if (!merchantOrderId || !state) {
      console.error("❌ Invalid webhook payload:", body);
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // 🔍 Find registration
    const registration = await prisma.eventRegistration.findUnique({
      where: { merchantOrderId },
    });

    if (!registration) {
      console.error("❌ Registration not found:", merchantOrderId);
      return NextResponse.json({ success: false }, { status: 404 });
    }

    const paymentInfo = (registration.paymentInfo as any) || {};

    // 🔒 Idempotency check
    if (paymentInfo.status === "SUCCESS") {
      console.log("🔁 Duplicate webhook ignored:", merchantOrderId);
      return NextResponse.json({ success: true });
    }

    /**
     * ✅ PAYMENT SUCCESS
     */
    if (state === "COMPLETED") {
      await prisma.eventRegistration.update({
        where: { merchantOrderId },
        data: {
          paymentInfo: {
            ...paymentInfo,
            status: "SUCCESS",
            paidAmount: amount ? amount / 100 : null, // ₹
            paidAt: new Date().toISOString(),
            provider: "PHONEPE",
          },
        },
      });

      // 📧 Send confirmation email
      await sendThankYouMail({
        to: registration.email,
        name: registration.fullName,
        event: registration.events.join(", "),
      });

      console.log("✅ Payment SUCCESS:", merchantOrderId);
    }

    /**
     * ❌ PAYMENT FAILED
     */
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
     * PhonePe expects 200 OK
     */
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ PhonePe webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
