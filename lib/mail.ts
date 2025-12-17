import nodemailer from "nodemailer";

export async function sendThankYouMail({
  to,
  name,
  event,
}: {
  to: string;
  name: string;
  event: string;
}) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Fitness Fest" <${process.env.MAIL_USER}>`,
    to,
    subject: "Registration Confirmed – Fitness Fest 💪",
    html: `
      <h2>Hi ${name},</h2>
      <p>Your registration for <strong>${event}</strong> is confirmed.</p>
      <p>Payment successful. We look forward to seeing you!</p>
      <br/>
      <p>– Fitness Fest Team</p>
    `,
  });
}
