"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Trophy } from "lucide-react"
import FiveKRunForm from "@/components/FiveKRunForm"

export default function RegistrationCTA() {
  const [openForm, setOpenForm] = useState(false)

  const raceDetails = {
    title: "5K RUN – Timed Race",
    entryFee: "₹1,298",
    prizes: {
      first: "₹25,000",
      second: "₹15,000", 
      third: "₹10,000"
    }
  }

  return (
    <section
      id="registration"
      className="py-20 px-6 bg-gradient-to-b from-[#0a0f1a] to-[#0f172a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EA4A3E]/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff7b54]/10 rounded-full blur-3xl -ml-48 -mb-48" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-r from-[#EA4A3E]/20 to-[#ff7b54]/20 border border-[#EA4A3E]/40 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#EA4A3E]/30 border border-[#EA4A3E]/50 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-4 h-4 text-[#EA4A3E]" />
              <span className="text-[#EA4A3E] font-bold">Cash Prizes Worth ₹50,000+</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">{raceDetails.title}</h2>
            
            {/* Prize Highlights */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-gradient-to-b from-amber-900/40 to-transparent border border-amber-500/30 rounded-xl p-3">
                <div className="text-xs text-amber-300 mb-1">🥇 1st Prize</div>
                <div className="text-lg font-bold text-white">{raceDetails.prizes.first}</div>
              </div>
              <div className="bg-gradient-to-b from-gray-800/40 to-transparent border border-gray-600/30 rounded-xl p-3">
                <div className="text-xs text-gray-300 mb-1">🥈 2nd Prize</div>
                <div className="text-lg font-bold text-white">{raceDetails.prizes.second}</div>
              </div>
              <div className="bg-gradient-to-b from-amber-800/40 to-transparent border border-amber-700/30 rounded-xl p-3">
                <div className="text-xs text-amber-300 mb-1">🥉 3rd Prize</div>
                <div className="text-lg font-bold text-white">{raceDetails.prizes.third}</div>
              </div>
            </div>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the competitive 5K timed race with cash prizes for top performers in both Male & Female categories.
            </p>

            {/* Terms */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-[#EA4A3E] flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-300">
                  I agree to the terms and conditions, including the waiver.
                </p>
              </div>
            </div>

            {/* Register Button */}
            <Button
              size="lg"
              onClick={() => setOpenForm(true)}
              className="bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] hover:from-[#d63a2e] hover:to-[#ff6b44] text-white px-12 py-7 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0_0_40px_rgba(234,74,62,0.4)]"
            >
              Register Now - {raceDetails.entryFee}
            </Button>

            <div className="mt-6 text-gray-400 text-sm">
              <p>Entry Fee: <span className="text-white font-bold">{raceDetails.entryFee}</span> (Fixed)</p>
              <p className="mt-2">
                Questions? Contact us at{" "}
                <span className="text-[#EA4A3E] font-semibold">info@fitnessfest.in</span> or{" "}
                <span className="text-[#EA4A3E] font-semibold">+91 91483 19993</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5K RUN FORM MODAL */}
      <FiveKRunForm open={openForm} setOpen={setOpenForm} />
    </section>
  )
}