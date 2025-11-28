// import { NextResponse } from "next/server";
// import { prisma } from "@/lib/prisma";

// export async function GET() {
//   const votes = await prisma.awardVote.findMany({
//     orderBy: { createdAt: "desc" },
//   });

//   return NextResponse.json(votes);
// }


import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyJwt } from "@/lib/jwt";

export async function GET(request: NextRequest) {
  try {
    // 1. Get token
    const token = request.cookies.get("auth_token")?.value;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Decode JWT
    const user = await verifyJwt(token);
    if (!user || user.role !== "judge") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // 3. Judge must have category assigned
    const categories = user.assignedCategories;
    if (!categories || categories.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // 4. Fetch votes ONLY for judge's assigned categories
    const votes = await prisma.awardVote.findMany({
      where: {
        categoryId: { in: categories }
      },
      orderBy: { createdAt: "desc" }
    });

    return NextResponse.json(votes);

  } catch (err) {
    console.error("Judge Votes API Error:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
