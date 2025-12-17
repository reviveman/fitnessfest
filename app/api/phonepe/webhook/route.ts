import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendThankYouMail } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { merchantOrderId, state, amount } = body;

    if (!merchantOrderId || !state) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // ✅ SIMPLE & SAFE QUERY
    const registration = await prisma.eventRegistration.findUnique({
      where: { merchantOrderId },
    });

    if (!registration) {
      return NextResponse.json({ success: false }, { status: 404 });
    }

    // 🔒 Prevent duplicate processing
    const paymentInfo = (registration.paymentInfo as any) || {};

    if (paymentInfo.status === "SUCCESS") {
      return NextResponse.json({ success: true });
    }

    // ✅ SUCCESS
    if (state === "COMPLETED") {
      await prisma.eventRegistration.update({
        where: { merchantOrderId },
        data: {
          paymentInfo: {
            ...paymentInfo,
            status: "SUCCESS",
            paidAmount: amount,
            paidAt: new Date().toISOString(),
          },
        },
      });

      await sendThankYouMail({
        to: registration.email,
        name: registration.fullName,
        event: registration.events.join(", "),
      });
    }

    // ❌ FAILED
    if (state === "FAILED") {
      await prisma.eventRegistration.update({
        where: { merchantOrderId },
        data: {
          paymentInfo: {
            ...paymentInfo,
            status: "FAILED",
          },
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
