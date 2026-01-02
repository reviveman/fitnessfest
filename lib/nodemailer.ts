import { Resend } from "resend";
import { getEventEmailTemplate } from "@/lib/emails/getEventEmailTemplate";

/* ======================================================
   RESEND CLIENT
====================================================== */

const resend = new Resend(process.env.RESEND_API_KEY);

/* ======================================================
   TYPES
====================================================== */

type SendThankYouEmailProps = {
  to: string;
  name: string;
  event: string;
  registrationId?: string;
  tshirtSize?: string;
};

/* ======================================================
   SEND THANK YOU EMAIL (EVENT-WISE TEMPLATE)
====================================================== */

export async function sendThankYouEmail({
  to,
  name,
  event,
  registrationId,
  tshirtSize,
}: SendThankYouEmailProps) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("❌ RESEND_API_KEY is missing in environment variables");
  }

  if (!process.env.MAIL_FROM) {
    throw new Error("❌ MAIL_FROM is missing in environment variables");
  }

  try {
    // Generate event-wise HTML email
    const htmlContent = getEventEmailTemplate(event, {
      name,
      registrationId,
      tshirtSize,
    });

    // Send email via Resend
    const response = await resend.emails.send({
      from: `Bengaluru Fitness Festival <${process.env.MAIL_FROM}>`,
      to,
      subject: `🎉 Registration Confirmed – ${event}`,
      html: htmlContent,
    });

    return response;
  } catch (error) {
    console.error("❌ Error sending email via Resend:", error);
    throw error;
  }
}
