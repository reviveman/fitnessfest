import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    const normalizedEmail = email.toLowerCase().trim()

    // 🔁 Prevent duplicate subscription
    const alreadyExists = await prisma.newsLetter.findUnique({
      where: { email: normalizedEmail },
    })

    if (alreadyExists) {
      return NextResponse.json(
        { success: true, message: "Already subscribed" },
        { status: 200 }
      )
    }

    // 💾 Store email in DB
    await prisma.newsLetter.create({
      data: { email: normalizedEmail },
    })

    // ================================
    // ✉️ EMAIL CONFIG (UNCHANGED)
    // ================================

    const EVENT_NAME = "Bengaluru Fitness Fest"
    const EVENT_DATE = "March 28–29, 2026"
    const EVENT_WEBSITE = "https://bengalurufitnessfest.com"
    const EVENT_EMAIL = "info@bengalurufitnessfest.com"

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // ✅ SAME HTML TEMPLATE (UNCHANGED)
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You - ${EVENT_NAME}</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:white;border-radius:12px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.08);">
          
          <tr>
            <td align="center">
              <img src="https://res.cloudinary.com/dlkuk7rok/image/upload/v1758083354/fitness_banner_gax5tv.jpg" alt="Banner" style="width:100%;" />
            </td>
          </tr>

          <tr>
            <td style="padding:40px 30px;text-align:center;">
              <p><strong>Hey ${name?.split(" ")[0] || "there"},</strong></p>
              <p>
                Thank you for your interest in <strong>${EVENT_NAME}</strong><br/>
                <strong>${EVENT_DATE}</strong>
              </p>
              <p>
                Our team will reach out to you soon. Stay tuned for exciting updates!
              </p>
            </td>
          </tr>

          <tr>
            <td style="background:#EA4A3E;padding:20px;text-align:center;color:white;">
              © 2026 ${EVENT_NAME}. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

    await transporter.sendMail({
      from: `"${EVENT_NAME}" <${process.env.EMAIL_USER}>`,
      to: normalizedEmail,
      subject: `🎉 Thank You for Subscribing to ${EVENT_NAME}!`,
      html: htmlTemplate,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
