import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // Event details (you can pull these from env vars if needed)
    const EVENT_NAME = "Bengaluru Fitness Fest"
    const EVENT_DATE = "December 20–21, 2025"
    const EVENT_WEBSITE = "https://bengalurufitnessfest.com"
    const EVENT_EMAIL = "info@bengalurufitnessfest.com"

    // ✅ Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // ✅ Email HTML template
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
          
          <!-- Banner -->
          <tr>
            <td align="center">
              <img src="https://res.cloudinary.com/dlkuk7rok/image/upload/v1758083354/fitness_banner_gax5tv.jpg" alt="Banner" style="display:block;width:100%;height:auto;border:0;" />
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:40px 30px;">
              <div style="text-align:center;margin-bottom:30px;color:#1e1e1e;line-height:1.6;font-size:16px;">
                <p style="margin-bottom:20px;"><strong>Hey ${name?.split(" ")[0] || "there"},</strong></p>
                <p style="margin-bottom:20px;">
                  Thank you for your interest in <strong style="color:#55BCC1;">${EVENT_NAME}</strong> taking place on <strong style="color:#fdb714;">${EVENT_DATE}</strong>.
                </p>
                <p style="margin-bottom:25px;">
                  Our team will reach out to you soon with more details. Get ready for an exciting celebration of fitness, wellness, and community!
                </p>

                <div style="background:#fff6e0;padding:20px;border-radius:8px;border-left:4px solid #fdb714;margin:25px 0;">
                  <p style="margin:0;color:#1e1e1e;">
                    Meanwhile, visit our <a href="${EVENT_WEBSITE}" style="color:#00214d;text-decoration:none;font-weight:600;">website</a> or follow us on social media for the latest updates:
                  </p>
                </div>

                <!-- Social Icons -->
                <div style="text-align:center;margin:30px 0;">
                  <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                    <tr>
                      <td style="padding:0 8px;">
                        <a href="https://www.facebook.com/BengaluruFitnessFest/" target="_blank" style="display:inline-block;width:50px;height:50px;background:#e6e9ef;border-radius:50%;text-align:center;line-height:50px;text-decoration:none;">
                          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="24" height="24" style="vertical-align:middle;" />
                        </a>
                      </td>
                      <td style="padding:0 8px;">
                        <a href="https://www.youtube.com/@bengalurufitnessfestival" target="_blank" style="display:inline-block;width:50px;height:50px;background:#e6e9ef;border-radius:50%;text-align:center;line-height:50px;text-decoration:none;">
                          <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="24" height="24" style="vertical-align:middle;" />
                        </a>
                      </td>
                      <td style="padding:0 8px;">
                        <a href="https://www.linkedin.com/company/bengaluru-fitness-fest" target="_blank" style="display:inline-block;width:50px;height:50px;background:#e6e9ef;border-radius:50%;text-align:center;line-height:50px;text-decoration:none;">
                          <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="24" height="24" style="vertical-align:middle;" />
                        </a>
                      </td>
                      <td style="padding:0 8px;">
                        <a href="https://www.instagram.com/bengaluru_fitness_fest/" target="_blank" style="display:inline-block;width:50px;height:50px;background:#e6e9ef;border-radius:50%;text-align:center;line-height:50px;text-decoration:none;">
                          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="24" height="24" style="vertical-align:middle;" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </td>
          </tr>

          <!-- Footer Info -->
          <tr>
            <td style="background:#f5f5f5;padding:30px;border-top:1px solid #ddd;">
              <div style="text-align:center;">
                <p style="margin:0 0 10px 0;font-weight:600;color:#1e1e1e;font-size:18px;">Best Regards,</p>
                <p style="margin:0 0 5px 0;font-weight:700;color:#EA4A3E;font-size:20px;">${EVENT_NAME}</p>
                <p style="margin:0 0 20px 0;">
                  <a href="${EVENT_WEBSITE}" style="color:#fdb714;text-decoration:none;font-weight:500;">${EVENT_WEBSITE}</a>
                </p>
                <div style="background:white;padding:15px;border-radius:8px;border:1px solid #ddd;display:inline-block;">
                  <p style="margin:0;color:#666;font-size:14px;">
                    For any queries, reach us at:
                    <a href="mailto:${EVENT_EMAIL}" style="color:#EA4A3E;text-decoration:none;font-weight:600;">${EVENT_EMAIL}</a>
                  </p>
                </div>
              </div>
            </td>
          </tr>

          <!-- Bottom Bar -->
          <tr>
            <td style="background:#EA4A3E;padding:20px;text-align:center;">
              <p style="margin:0;color:#ffffff;font-size:12px;">©️ 2025 ${EVENT_NAME}. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

    // ✅ Send the email
    await transporter.sendMail({
      from: `"${EVENT_NAME}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `🎉 Thank You for Subscribing to ${EVENT_NAME}!`,
      html: htmlTemplate,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Newsletter error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
