import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendThankYouEmail } from "@/lib/nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      fullName,
      age,
      gender,
      phone,
      email,
      city,
      emergency,
      tshirt,
      participatedBefore,
      heardFrom,
    } = data;

    // ✅ REQUIRED: Generate merchantOrderId
    const merchantOrderId = `RUN5K_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    // ✅ SAVE REGISTRATION
    await prisma.fiveKRunRegistration.create({
      data: {
        merchantOrderId, // 🔥 REQUIRED FIELD

        fullName,
        age: Number(age),
        gender,
        phone,
        email,
        city,
        emergency,
        tshirt,
        participatedBefore,
        heardFrom,

        paymentStatus: "PENDING",
      },
    });

    // ✅ USER THANK YOU EMAIL
    await sendThankYouEmail({
      to: email,
      name: fullName,
      event: "5K Run – Timed Race",
    });

    // ✅ ADMIN NOTIFICATION EMAIL
    await sendThankYouEmail({
      to: process.env.EMAIL_USER!,
      name: fullName,
      event: "New 5K Run Registration",
    });

    // ✅ IMPORTANT: return merchantOrderId
    return NextResponse.json({
      success: true,
      merchantOrderId,
    });

  } catch (err) {
    console.error("❌ 5K Run Registration Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
