import { NextResponse } from "next/server";
import { sendThankYouEmail } from "@/lib/nodemailer";
import prisma from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary"; // ⭐ added

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      fullName,
      mobile,
      email,
      dob,
      gender,
      city,
      emergencyContact,
      events,
      idProof,
      waiverForm,
      eligibilityVideo,
      declarationAccepted,
      paymentInfo
    } = data;

    if (!declarationAccepted) {
      return NextResponse.json(
        { error: "Terms not accepted" },
        { status: 400 }
      );
    }

    // ⭐ Cloudinary Upload Helper
    const uploadToCloudinary = async (file: string | null, folder: string) => {
      if (!file) return null;

      const uploaded = await cloudinary.uploader.upload(file, {
        folder,
        resource_type: "auto",
      });

      return uploaded.secure_url;
    };

    // ⭐ Upload files (Base64 → Cloudinary)
    const idProofUrl = await uploadToCloudinary(idProof, "fitnessfest/idproofs");
    const waiverFormUrl = await uploadToCloudinary(
      waiverForm,
      "fitnessfest/waivers"
    );
    const eligibilityVideoUrl = await uploadToCloudinary(
      eligibilityVideo,
      "fitnessfest/videos"
    );

    // ⭐ Store in DB
    const registrant = await prisma.eventRegistration.create({
      data: {
        fullName,
        mobile,
        email,
        dob,
        gender,
        city,
        emergencyContact,
        events,
        idProof: idProofUrl,
        waiverForm: waiverFormUrl,
        eligibilityVideo: eligibilityVideoUrl,
        paymentInfo,
        declarationAccepted,
      },
    });

    // ⭐ Send Email Notifications
    await sendThankYouEmail(email, fullName);
    await sendThankYouEmail(
      process.env.EMAIL_USER!,
      `${fullName} (New Registration)`
    );

    return NextResponse.json({
      success: true,
      redirect: "/thankyou?type=competition",
    });

  } catch (err) {
    console.error("❌ Registration Error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
