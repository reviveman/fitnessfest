// import { NextRequest, NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export const dynamic = "force-dynamic"; // 🚨 IMPORTANT

// export async function GET(req: NextRequest) {
//   const merchantOrderId = req.nextUrl.searchParams.get("merchantOrderId");

//   if (!merchantOrderId) {
//     return NextResponse.json(
//       { status: "PENDING" },
//       { headers: { "Cache-Control": "no-store" } }
//     );
//   }

//   const registration = await prisma.eventRegistration.findUnique({
//     where: { merchantOrderId },
//   });

//   const paymentInfo = registration?.paymentInfo as any;

//   return NextResponse.json(
//     { status: paymentInfo?.status || "PENDING" },
//     {
//       headers: {
//         "Cache-Control": "no-store, no-cache, must-revalidate",
//       },
//     }
//   );
// }


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const merchantOrderId = req.nextUrl.searchParams.get("merchantOrderId");

  if (!merchantOrderId) {
    return NextResponse.json({ status: "PENDING" });
  }

  // 🎟️ CHECK TICKETS
  const ticket = await prisma.ticketRegistration.findUnique({
    where: { merchantOrderId },
  });

  if (ticket) {
    return NextResponse.json({
      status: ticket.paymentStatus || "PENDING",
    });
  }

  // 🏆 CHECK EVENTS
  const event = await prisma.eventRegistration.findUnique({
    where: { merchantOrderId },
  });

  const paymentInfo = event?.paymentInfo as any;

  return NextResponse.json({
    status: paymentInfo?.status || "PENDING",
  });
}
