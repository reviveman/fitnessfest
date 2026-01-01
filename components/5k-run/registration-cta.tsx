"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Trophy } from "lucide-react";
import FiveKRunForm from "@/components/FiveKRunForm";

export default function RegistrationCTA() {
  const [openForm, setOpenForm] = useState(false);

  const raceDetails = {
    title: "5K RUN – Timed Race",
    // entryFee: "₹1,298",
    entryFee: "₹1",
   
    prizes: {
      first: "₹25,000",
      second: "₹15,000",
      third: "₹10,000",
    },
  };

  return (
    <section
      id="registration"
      className="py-20 px-6 bg-gradient-to-b from-[#0a0f1a] to-[#0f172a]"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#111827] border border-[#EA4A3E]/40 rounded-2xl p-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#EA4A3E]/20 rounded-full px-4 py-2 mb-6">
            <Trophy className="w-4 h-4 text-[#EA4A3E]" />
            <span className="text-[#EA4A3E] font-bold">
              Cash Prizes Worth ₹50,000+
            </span>
          </div>

          <h2 className="text-4xl font-black text-white mb-4">
            {raceDetails.title}
          </h2>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
            {Object.entries(raceDetails.prizes).map(([key, value]) => (
              <div
                key={key}
                className="bg-black/40 border border-gray-700 rounded-xl p-3"
              >
                <div className="text-xs text-gray-400 mb-1">
                  {key.toUpperCase()}
                </div>
                <div className="text-lg font-bold text-white">{value}</div>
              </div>
            ))}
          </div>

          <p className="text-gray-300 mb-6">
            Timed competitive 5K run with separate Male & Female categories.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3 text-left">
              <CheckCircle className="w-5 h-5 text-[#EA4A3E]" />
              <p className="text-sm text-gray-300">
                I agree to the terms, conditions & waiver.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => setOpenForm(true)}
            className="bg-[#EA4A3E] hover:bg-[#d63a2e] text-white px-12 py-6 text-lg font-bold"
          >
            Register Now – {raceDetails.entryFee}
          </Button>

          <FiveKRunForm open={openForm} setOpen={setOpenForm} />
        </div>
      </div>
    </section>
  );
}
