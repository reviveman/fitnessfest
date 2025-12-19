import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      mobile,
      email,
      dob,
      gender,
      city,
      emergencyContact,
      eventTitle,
      amount,
    } = body;

    // ✅ BASIC VALIDATION
    if (
      !fullName ||
      !mobile ||
      !email ||
      !eventTitle ||
      !amount
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ UNIQUE ORDER ID (safe)
    const merchantOrderId = `ORD_${Date.now()}_${Math.floor(
      Math.random() * 1000
    )}`;

    await prisma.eventRegistration.create({
      data: {
        merchantOrderId,

        fullName,
        mobile,
        email,
        dob,
        gender,
        city,
        emergencyContact,
        events: [eventTitle],
        declarationAccepted: true,

        paymentInfo: {
          amount, // store ₹ amount
          status: "PENDING",
          provider: "PHONEPE",
        },
      },
    });

    return NextResponse.json({
      merchantOrderId,
    });
  } catch (error) {
    console.error("❌ Registration initiate error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
