import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendThankYouEmail } from "@/lib/nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // ✅ BASIC VALIDATION
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, and message are required",
        },
        { status: 400 }
      );
    }

    // ✅ SAVE CONTACT
    const contact = await prisma.contactSubmission.create({
      data: {
        type: data.type || "general",
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        message: data.message,
        company: data.company || null,
        website: data.website || null,
        fitnessLevel: data.fitnessLevel || null,
        competitionInterest: data.competitionInterest || null,
        experience: data.experience || null,
        sponsorshipLevel: data.sponsorshipLevel || null,
      },
    });

    // ✅ SEND THANK YOU EMAIL
    await sendThankYouEmail({
      to: data.email,
      name: data.name,
      event: "Contact Form Submission", // ✅ REQUIRED
    });

    return NextResponse.json({ success: true, id: contact.id });
  } catch (error) {
    console.error("❌ Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
