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

    // ✅ SAVE REGISTRATION
    await prisma.fiveKRunRegistration.create({
      data: {
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
      },
    });

    // ✅ USER THANK YOU EMAIL
    await sendThankYouEmail({
      to: email,
      name: fullName,
      event: "5K Run Registration",
    });

    // ✅ ADMIN NOTIFICATION EMAIL
    await sendThankYouEmail({
      to: process.env.EMAIL_USER!, // admin email
      name: fullName,
      event: "New 5K Run Registration",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ 5K Run Registration Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
