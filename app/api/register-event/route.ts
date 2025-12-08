import { NextResponse } from "next/server";
import { sendThankYouEmail } from "@/lib/nodemailer";
import prisma from "@/lib/prisma";

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

    if (!declarationAccepted)
      return NextResponse.json({ error: "Terms not accepted" }, { status: 400 });

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
        idProof,
        waiverForm,
        eligibilityVideo,
        paymentInfo,
        declarationAccepted,  // <-- FIXED
      },
    });

    // ⭐ Send emails
    await sendThankYouEmail(email, fullName);
    await sendThankYouEmail(process.env.EMAIL_USER!, fullName + " (New Registration)");

    return NextResponse.json({
      success: true,
      redirect: "/thankyou?type=visitor",
    });

  } catch (err) {
    console.error("❌ Registration Error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
