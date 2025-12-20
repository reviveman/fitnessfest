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
      waiver,
    } = data;

    // ⭐ Always convert heardFrom into array
    const heardFromArray = Array.isArray(heardFrom)
      ? heardFrom
      : heardFrom
      ? [heardFrom]
      : [];

    await prisma.sareeRunRegistration.create({
      data: {
        fullName,
        age: Number(age),
        gender,
        phone,
        email,
        city,
        emergencyContact,
        participatedBefore,
        heardFrom: heardFromArray,
        heardFromOther: heardFromOther || "",
        waiver: Boolean(waiver),
      },
    });

    /**
     * 📧 USER THANK YOU EMAIL
     */
    await sendThankYouEmail({
      to: email,
      name: fullName,
      event: "Saree Run",
    });

    /**
     * 📧 ADMIN NOTIFICATION EMAIL
     */
    await sendThankYouEmail({
      to: process.env.EMAIL_USER!,
      name: fullName,
      event: "New Saree Run Registration",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Saree Run Registration Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
