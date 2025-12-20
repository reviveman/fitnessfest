import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const merchantOrderId =
    params.get("merchantOrderId") ||
    params.get("merchantOrderId[]");

  console.log("🔁 PhonePe redirect:", Object.fromEntries(params.entries()));

  return NextResponse.redirect(
    new URL(
      merchantOrderId
        ? `/thankyou?status=processing&merchantOrderId=${merchantOrderId}`
        : `/thankyou?status=processing`,
      req.url
    )
  );
}
