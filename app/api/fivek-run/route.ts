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

    // ✅ Save registration
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

    // ✅ Emails
    await sendThankYouEmail(email, fullName);
    await sendThankYouEmail(process.env.EMAIL_USER!, `5K Run: ${fullName}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ 5K Run Registration Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
