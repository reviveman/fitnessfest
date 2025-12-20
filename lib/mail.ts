import { Resend } from "resend";
import { ThankYouEmailHandler } from "@/components/emailHandlers/thankYouEmail";

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
  await resend.emails.send({
    from: `Fitness Fest <${process.env.MAIL_FROM}>`,
    to,
    subject: `Registration Confirmed – ${event} | Fitness Fest 💪`,
    html: ThankYouEmailHandler({ name, event }),
  });
}
