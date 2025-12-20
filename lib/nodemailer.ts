import nodemailer from "nodemailer";
import { ThankYouEmailHandler } from "@/components/emailHandlers/thankYouEmail";

/**
 * 📮 SMTP TRANSPORT
 */
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * 🔍 Verify SMTP only in development
 */
if (process.env.NODE_ENV === "development") {
  transporter.verify((error) => {
    if (error) {
      console.error("❌ SMTP Verification Failed:", error);
    } else {
      console.log("✅ SMTP Server Ready");
    }
  });
}

/**
 * ✅ SEND THANK YOU EMAIL
 */
export async function sendThankYouEmail({
  to,
  name,
  event,
}: {
  to: string;
  name: string;
  event: string;
}) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("EMAIL credentials are missing in environment variables");
  }

  try {
    const htmlContent = ThankYouEmailHandler({
      name,
      event,
    });

    const info = await transporter.sendMail({
      from: `"Bengaluru Fitness Festival" <${process.env.EMAIL_USER}>`,
      to,
      subject: `🎉 Registration Confirmed – ${event}`,
      html: htmlContent,
    });

    return info;
  } catch (err) {
    console.error("❌ Error while sending email:", err);
    throw err;
  }
}
