import { NextRequest, NextResponse } from "next/server";

/**
 * PhonePe redirects USER BROWSER here using GET
 * ❌ Do NOT verify payment here
 * ✅ Webhook handles confirmation
 */
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const state = searchParams.get("state"); // COMPLETED | FAILED | etc
    const merchantOrderId = searchParams.get("merchantOrderId");

    console.log("🔁 PhonePe redirect (GET):", {
      state,
      merchantOrderId,
    });

    if (state === "FAILED") {
      return NextResponse.redirect(
        new URL("/thankyou?status=error", req.url)
      );
    }

    // Default → processing
    return NextResponse.redirect(
      new URL("/thankyou?status=processing", req.url)
    );
  } catch (error) {
    console.error("❌ Status GET error:", error);
    return NextResponse.redirect(
      new URL("/thankyou?status=error", req.url)
    );
  }
}

/**
 * OPTIONAL:
 * Some PhonePe setups may POST here
 * Keep this for safety
 */
export async function POST(req: Request) {
  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou?status=processing`,
    { status: 303 }
  );
}
