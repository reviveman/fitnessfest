import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const merchantOrderId = "ORD_" + Date.now();

  await prisma.eventRegistration.create({
    data: {
      merchantOrderId, // ✅ now top-level

      fullName: body.fullName,
      mobile: body.mobile,
      email: body.email,
      dob: body.dob,
      gender: body.gender,
      city: body.city,
      emergencyContact: body.emergencyContact,
      events: [body.eventTitle],
      declarationAccepted: true,

      paymentInfo: {
        amount: body.amount,
        status: "PENDING",
        provider: "PHONEPE",
      },
    },
  });

  return NextResponse.json({ merchantOrderId });
}
