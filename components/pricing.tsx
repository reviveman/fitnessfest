"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import UserDetailsModal from "@/components/payment/UserDetailsModal";

type Pass = {
  title: string;
  baseAmount: number;
  price: string;
  features: string[];
};

export default function TicketStylePricing() {
  const [open, setOpen] = useState(false);
  const [selectedPass, setSelectedPass] = useState<Pass | null>(null);

  const passes: Pass[] = [
    {
      title: "1-Day Pass",
      baseAmount: 699,
      price: "₹699",
      features: [
        "Full-day entry to Expo Zone",
        "Zumba • HIIT • Yoga • CrossFit",
        "Fitness Challenges",
        "Nutrition Zone",
        "Workshops",
        "Goodie Bag",
        "Certificate",
      ],
    },
    {
      title: "Buddy Pass (5 People)",
      baseAmount: 4999,
      price: "₹4,999",
      features: [
        "All 1-Day Pass Benefits",
        "VIP Entry",
        "Premium Arena",
        "Celebrity Trainers",
        "Premium Kit",
        "Free InBody Test",
        "Event Photos",
      ],
    },
  ];

  return (
    <>
      <section className="bg-[#0f172a] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {passes.map((pass, i) => (
            <div
              key={i}
              className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg flex flex-col"
            >
              <h3 className="text-2xl font-bold">{pass.title}</h3>
              <p className="text-4xl font-extrabold mt-4">{pass.price}</p>

              <ul className="space-y-2 my-6 flex-1">
                {pass.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#EA4A3E]" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="w-full bg-[#EA4A3E] text-white py-3 rounded-lg"
                onClick={() => {
                  setSelectedPass(pass);
                  setOpen(true);
                }}
              >
                Get Now
              </Button>
            </div>
          ))}
        </div>
      </section>

      {selectedPass && (
        <UserDetailsModal
          open={open}
          onClose={() => setOpen(false)}
          passTitle={selectedPass.title}
          baseAmount={selectedPass.baseAmount}
        />
      )}
    </>
  );
}
