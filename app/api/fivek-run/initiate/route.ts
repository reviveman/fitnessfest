import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const merchantOrderId = `RUN5K_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    await prisma.fiveKRunRegistration.create({
      data: {
        merchantOrderId,

        fullName: data.fullName,
        age: Number(data.age),
        gender: data.gender,
        phone: data.phone,
        email: data.email,
        city: data.city,
        emergency: data.emergency,
        tshirt: data.tshirt,
        participatedBefore: data.participatedBefore,
        heardFrom: data.heardFrom,

        paymentStatus: "PENDING",
      },
    });

    return NextResponse.json({ merchantOrderId });
  } catch (err) {
    console.error("❌ 5K Run initiate error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
