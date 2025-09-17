import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { sendThankYouEmail } from "@/lib/nodemailer"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // ✅ Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, and message are required" },
        { status: 400 },
      )
    }

    // ✅ Save to DB
    const contact = await prisma.contactSubmission.create({
      data: {
        type: data.type || "general",
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
        company: data.company || null,
        website: data.website || null,
        fitnessLevel: data.fitnessLevel || null,
        competitionInterest: data.competitionInterest || null,
        experience: data.experience || null,
        sponsorshipLevel: data.sponsorshipLevel || null,
      },
    })

    // ✅ Send Thank-You Email
    await sendThankYouEmail(data.email, data.name)
    // console.log(data)

    return NextResponse.json({ success: true, id: contact.id })
  } catch (error) {
    console.error("❌ Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
