import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const merchantOrderId = req.nextUrl.searchParams.get("merchantOrderId");

  if (!merchantOrderId) {
    return NextResponse.json({ status: "PENDING" });
  }

  /* =====================================================
     🏃‍♂️ CHECK 5K RUN FIRST
  ===================================================== */
  const fivek = await prisma.fiveKRunRegistration.findUnique({
    where: { merchantOrderId },
  });

  if (fivek) {
    return NextResponse.json({
      status: fivek.paymentStatus || "PENDING",
    });
  }

  /* =====================================================
     🎟️ CHECK TICKETS
  ===================================================== */
  const ticket = await prisma.ticketRegistration.findUnique({
    where: { merchantOrderId },
  });

  if (ticket) {
    return NextResponse.json({
      status: ticket.paymentStatus || "PENDING",
    });
  }

  /* =====================================================
     🏆 CHECK EVENTS
  ===================================================== */
  const event = await prisma.eventRegistration.findUnique({
    where: { merchantOrderId },
  });

  const paymentInfo = event?.paymentInfo as any;

  return NextResponse.json({
    status: paymentInfo?.status || "PENDING",
  });
}
