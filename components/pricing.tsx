"use client";

import { Check, Ticket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";


export default function TicketStylePricing() {
  const passes = [
    {
      title: "1-Day Pass",
      subtitle: "Single Entry Ticket",
      price: "₹699 + GST",
      oldPrice: "₹999",
      discount: "30% OFF",
      features: [
        "Full-day entry to Expo Zone",
        "Zumba • HIIT • Yoga • CrossFit Demos",
        "Access to all fitness challenges",
        "Healthy Food & Nutrition Zone",
        "Workshops (First-Come-First-Serve)",
        "Event Wristband",
        "Basic Goodie Bag",
        "Digital Participation Certificate",
      ],
    },
    {
      title: "Buddy Pass (5 People)",
      subtitle: "Group Ticket (5 Members)",
      price: "₹4,999 + GST",
      oldPrice: "₹7,500",
      discount: "40% OFF",
      features: [
        "All 1-Day Pass Benefits",
        "VIP entry gate",
        "Premium Workout Arena Access",
        "Celebrity Trainer Masterclasses",
        "Priority workshop seating",
        "Premium Goodie Kit (Bag, Bottle, T-shirt)",
        "Reserved spot – 5K Fun Run / Saree Run",
        "Free InBody Test Worth ₹499",
        "Premium Certificate",
        "Professional Event Photos",
      ],
      featured: true,
    },
  ];

  return (
    <section className="bg-[#0f172a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          FitnessFest Ticket Prices
        </h2>

        <p className="text-gray-300 text-center text-sm md:text-base mb-12">
          21–22 February 2026 • KTPO, Whitefield • 11 AM – 9 PM • Call: 9148319993
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {passes.map((p, i) => (
            <div
              key={i}
              className={`
                relative bg-white text-gray-900 rounded-2xl border shadow-lg p-8 overflow-hidden
                transition-all duration-500 animate-fadeIn
                hover:scale-105 hover:shadow-[0_0_30px_rgba(234,74,62,0.45)]
              `}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54]" />

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold">{p.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{p.subtitle}</p>

              {/* Price */}
              <p className="text-4xl md:text-5xl font-extrabold">{p.price}</p>
              <p className="line-through text-gray-500 text-sm mt-1">{p.oldPrice}</p>

              {/* Discount Badge */}
              <div className="bg-[#EA4A3E] flex justify-between items-center text-white px-4 py-2 rounded-md text-xs font-semibold mt-5 mb-6">
                <span>Discounted Price</span>
                <span className="bg-black/20 px-2 py-1 rounded-md">{p.discount}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {p.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-800">
                    <CheckCircle className="w-5 h-5 text-[#EA4A3E]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button className="w-full bg-[#EA4A3E] hover:bg-orange-600 text-white py-3 rounded-lg text-sm md:text-base font-semibold transition-all duration-300">
                Get Now
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}