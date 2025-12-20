import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, mobile, email, passTitle, amount } = await req.json();

    if (!name || !mobile || !email || !passTitle || !amount) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const merchantOrderId = `TICKET_${Date.now()}_${Math.floor(
      Math.random() * 1000
    )}`;

    await prisma.ticketRegistration.create({
      data: {
        merchantOrderId,
        fullName: name,
        mobile,
        email, // ✅ REQUIRED FOR EMAIL
        passTitle,
        amount,
        paymentStatus: "PENDING",
        provider: "PHONEPE",
      },
    });

    return NextResponse.json({ merchantOrderId });
  } catch (err) {
    console.error("❌ Ticket initiate error", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
