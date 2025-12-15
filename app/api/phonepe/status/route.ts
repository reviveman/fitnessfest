import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendThankYouEmail } from "@/lib/nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const merchantTransactionId =
    body?.data?.merchantTransactionId;

  const meta = global.paymentStore?.get(merchantTransactionId);

  if (!meta) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}/payment/failed`,
      302
    );
  }

  // ✅ Save registration
  await prisma.fiveKRunRegistration.create({
    data: {
      fullName: meta.fullName,
      age: Number(meta.age),
      gender: meta.gender,
      phone: meta.phone,
      email: meta.email,
      city: meta.city,
      emergency: meta.emergency,
      tshirt: meta.tshirt,
      participatedBefore: meta.participatedBefore,
      heardFrom: meta.heardFrom,
    },
  });

  // ✅ Cleanup
  global.paymentStore?.delete(merchantTransactionId);

  // ✅ Emails
  await sendThankYouEmail(meta.email, meta.fullName);
  await sendThankYouEmail(
    process.env.EMAIL_USER!,
    `Registration: ${meta.fullName}`
  );

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
    302
  );
}
