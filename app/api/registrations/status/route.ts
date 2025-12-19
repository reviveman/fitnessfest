import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const merchantOrderId = req.nextUrl.searchParams.get("merchantOrderId");

  if (!merchantOrderId) {
    return NextResponse.json({ status: "UNKNOWN" });
  }

  const registration = await prisma.eventRegistration.findUnique({
    where: { merchantOrderId },
  });

  if (!registration || !registration.paymentInfo) {
    return NextResponse.json({ status: "PENDING" });
  }

  // ✅ SAFE CAST
  const paymentInfo = registration.paymentInfo as {
    status?: "PENDING" | "SUCCESS" | "FAILED";
  };

  return NextResponse.json({
    status: paymentInfo.status || "PENDING",
  });
}
