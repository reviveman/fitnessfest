import { NextRequest, NextResponse } from "next/server";

/**
 * PhonePe redirect handler
 * ❌ Never decide payment result here
 * ✅ Always go to processing
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const merchantOrderId =
      searchParams.get("merchantOrderId") ||
      searchParams.get("merchantOrderId[]");

    console.log("🔁 PhonePe redirect params:", 
      Object.fromEntries(searchParams.entries())
    );

    return NextResponse.redirect(
      new URL(
        merchantOrderId
          ? `/thankyou?status=processing&merchantOrderId=${merchantOrderId}`
          : `/thankyou?status=processing`,
        req.url
      )
    );
  } catch (error) {
    console.error("❌ Redirect error:", error);

    // Still go to processing
    return NextResponse.redirect(
      new URL("/thankyou?status=processing", req.url)
    );
  }
}

/**
 * Optional POST fallback
 */
export async function POST() {
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=processing`,
    { status: 303 }
  );
}
