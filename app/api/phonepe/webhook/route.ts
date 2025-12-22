


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
   🏃‍♂️ 5K RUN PAYMENT HANDLING
===================================================== */
const fivek = await prisma.fiveKRunRegistration.findUnique({
  where: { merchantOrderId },
});

if (fivek) {
  if (fivek.paymentStatus === "SUCCESS") {
    return NextResponse.json({ success: true });
  }

  if (state === "COMPLETED") {
    await prisma.fiveKRunRegistration.update({
      where: { merchantOrderId },
      data: {
        paymentStatus: "SUCCESS",
        paidAmount: amount ? amount / 100 : 1298,
        paidAt: new Date(),
      },
    });

    await sendThankYouEmail({
      to: fivek.email,
      name: fivek.fullName,
      event: "5K Run – Timed Race",
    });

    console.log("✅ 5K Run payment SUCCESS:", merchantOrderId);
  }

  if (state === "FAILED") {
    await prisma.fiveKRunRegistration.update({
      where: { merchantOrderId },
      data: { paymentStatus: "FAILED" },
    });
  }

  return NextResponse.json({ success: true });
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
