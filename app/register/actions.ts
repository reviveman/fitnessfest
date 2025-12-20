"use server"

import prisma from "@/lib/prisma"
import { sendThankYouEmail } from "@/lib/nodemailer"

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || null
    const message = formData.get("message") as string
    const type = formData.get("type") as string

    if (!name || !email || !message) {
      return {
        success: false,
        error: "Missing required fields. Please fill out all required fields.",
      }
    }

    const submissionData: any = {
      name,
      email,
      phone,
      message,
      type,
    }

    if (type === "exhibitor") {
      submissionData.fitnessLevel =
        (formData.get("fitnessLevel") as string) || null
      submissionData.competitionInterest =
        (formData.get("competitionInterest") as string) || null
      submissionData.experience =
        (formData.get("experience") as string) || null
    } else if (type === "sponsor") {
      submissionData.company = (formData.get("company") as string) || null
      submissionData.website = (formData.get("website") as string) || null
      submissionData.sponsorshipLevel =
        (formData.get("sponsorshipLevel") as string) || null
    }

    // 💾 Save to DB
    const result = await prisma.contactSubmission.create({
      data: submissionData,
    })

    /**
     * 📧 THANK YOU EMAIL TO USER
     */
    try {
      await sendThankYouEmail({
        to: email,
        name,
        event: "Contact Form Submission",
      })
    } catch (emailErr) {
      console.error("❌ Failed to send email:", emailErr)
      return {
        success: true,
        id: result.id,
        emailError: "Saved to DB but failed to send email.",
      }
    }

    return { success: true, id: result.id }

  } catch (error) {
    console.error("❌ Error submitting contact form:", error)
    return {
      success: false,
      error: "Failed to send message. Please try again later.",
    }
  }
}
