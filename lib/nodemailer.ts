import nodemailer from "nodemailer"
import { ThankYouEmailHandler } from "@/components/emailHandlers/thankYouEmail"

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Verification Failed:", error)
  } else {
    // console.log("✅ SMTP Server Ready")
  }
})

export async function sendThankYouEmail(to: string, name: string) {
  try {
    // console.log("📨 Sending email to:", to)

    const htmlContent = ThankYouEmailHandler({ name })

    const info = await transporter.sendMail({
      from: `"Bengaluru Fitness Festival" <${process.env.EMAIL_USER}>`,
      to,
      subject: "🎉 Thank You for Contacting Bengaluru Fitness Festival",
      html: htmlContent,
    })

    // console.log("✅ Email sent successfully:", info.messageId)
    return info
  } catch (err) {
    // console.error("❌ Error while sending email:", err)
    throw err
  }
}
