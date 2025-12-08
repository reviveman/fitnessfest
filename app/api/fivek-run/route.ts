import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
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
      paymentScreenshot
    } = data;

    // ⭐ Upload payment screenshot to Cloudinary
    const paymentUrl = paymentScreenshot
      ? (
          await cloudinary.uploader.upload(paymentScreenshot, {
            folder: "fitnessfest/5k-run",
            resource_type: "image",
          })
        ).secure_url
      : null;

    // ⭐ Save to DB
    const saved = await prisma.fiveKRunRegistration.create({
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
        paymentScreenshot: paymentUrl!,
      },
    });

    // ⭐ Send Emails
    await sendThankYouEmail(email, fullName);
    await sendThankYouEmail(process.env.EMAIL_USER!, `5K Run: ${fullName}`);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ 5K Run Registration Error:", err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}
