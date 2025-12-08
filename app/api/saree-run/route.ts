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
      emergencyContact,
      participatedBefore,
      heardFrom,
      heardFromOther,
      waiver
    } = data;

    // ⭐ FIX -> Always convert heardFrom into an array
    const heardFromArray =
      Array.isArray(heardFrom)
        ? heardFrom
        : heardFrom
        ? [heardFrom]
        : [];

    const saved = await prisma.sareeRunRegistration.create({
      data: {
        fullName,
        age: Number(age),
        gender,
        phone,
        email,
        city,
        emergencyContact,
        participatedBefore,
        heardFrom: heardFromArray,   // ⭐ FIX APPLIED HERE
        heardFromOther: heardFromOther || "",
        waiver: Boolean(waiver)
      },
    });

    // Email Notification
    await sendThankYouEmail(email, fullName);
    await sendThankYouEmail(process.env.EMAIL_USER!, `Saree Run: ${fullName}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Saree Run Registration Error:", err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
