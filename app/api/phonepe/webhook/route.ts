import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendThankYouMail } from "@/lib/mail";

function unauthorized() {
  return new NextResponse("Unauthorized", { status: 401 });
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader?.startsWith("Basic ")) return unauthorized();

    const decoded = Buffer.from(
      authHeader.split(" ")[1],
      "base64"
    ).toString("utf-8");

    const [username, password] = decoded.split(":").map(v => v.trim());

    if (
      username !== process.env.PHONEPE_WEBHOOK_USER ||
      password !== process.env.PHONEPE_WEBHOOK_PASS
    ) {
      return unauthorized();
    }

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
