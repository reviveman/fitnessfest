import { NextRequest, NextResponse } from "next/server";

/**
 * PhonePe redirects USER BROWSER here using GET
 * ❌ Do NOT verify payment here
 * ✅ Webhook handles confirmation
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const state = searchParams.get("state");
    const merchantOrderId = searchParams.get("merchantOrderId");

    console.log("🔁 PhonePe redirect (GET):", {
      state,
      merchantOrderId,
    });

    if (!merchantOrderId) {
      return NextResponse.redirect(
        new URL("/thankyou?status=error", req.url)
      );
    }

    if (state === "FAILED") {
      return NextResponse.redirect(
        new URL(
          `/thankyou?status=failed&merchantOrderId=${merchantOrderId}`,
          req.url
        )
      );
    }

    // Always go to processing
    return NextResponse.redirect(
      new URL(
        `/thankyou?status=processing&merchantOrderId=${merchantOrderId}`,
        req.url
      )
    );
  } catch (error) {
    console.error("❌ Status GET error:", error);
    return NextResponse.redirect(
      new URL("/thankyou?status=error", req.url)
    );
  }
}

/**
 * OPTIONAL POST (safe fallback)
 */
export async function POST() {
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=processing`,
    { status: 303 }
  );
}
