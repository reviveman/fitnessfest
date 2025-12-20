import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendThankYouMail({
  to,
  name,
  event,
}: {
  to: string;
  name: string;
  event: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY missing");
  }

  await resend.emails.send({
    from: `Fitness Fest <${process.env.MAIL_FROM}>`,
    to,
    subject: "Registration Confirmed – Fitness Fest 💪",
    html: `
      <h2>Hi ${name},</h2>
      <p>Your registration for <strong>${event}</strong> is confirmed.</p>
      <p><b>Payment successful.</b></p>
      <p>We look forward to seeing you at Fitness Fest 💪</p>
      <br/>
      <p>— Fitness Fest Team</p>
    `,
  });
}
