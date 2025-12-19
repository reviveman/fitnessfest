"use client"

import { useState } from "react"
import { Trophy, Medal, Gift, Users, Award, Calendar } from "lucide-react"
import FiveKRunForm from "@/components/FiveKRunForm"

export default function RaceDetailsSection() {
  const [openForm, setOpenForm] = useState(false)

  const raceDetails = {
    title: "5K RUN – Timed Race",
    date: "March 28, 2026",
    entryFee: "₹1,298",
    categories: ["Male", "Female"],
    rewards: {
      first: {
        prize: "₹25,000",
        items: ["Trophy", "Gift Vouchers"]
      },
      second: {
        prize: "₹15,000",
        items: ["Medal", "Gift Vouchers"]
      },
      third: {
        prize: "₹10,000",
        items: ["Medal", "Gift Vouchers"]
      }
    },
    goodies: [
      "Premium T-shirt",
      "Running Bib",
      "Finisher Medal",
      "Refreshments",
      "Timing Certificate",
      "Medical Support"
    ]
  }

  return (
    <>
      <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#0a0f1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[#EA4A3E]/20 border border-[#EA4A3E]/40 rounded-full px-6 py-3 mb-6">
              <Calendar className="w-5 h-5 text-[#EA4A3E]" />
              <span className="text-[#EA4A3E] font-bold">{raceDetails.date}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">{raceDetails.title}</h2>
            {/* Entry Fee Button that opens form */}
            <button
              onClick={() => setOpenForm(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] text-white font-bold text-xl px-6 py-3 rounded-lg mt-4 hover:from-[#d63a2e] hover:to-[#ff6b44] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(234,74,62,0.4)]"
            >
              <span>Entry Fee: {raceDetails.entryFee}</span>
              <span className="text-sm font-normal opacity-90">(Fixed)</span>
            </button>
            <p className="text-gray-400 text-sm mt-3">Click to register now</p>
          </div>

          {/* Rewards Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <Trophy className="w-6 h-6 text-[#EA4A3E]" />
              Cash Rewards (Separately for Male & Female)
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* 1st Prize */}
              <div className="bg-gradient-to-br from-amber-900/30 to-transparent border border-amber-500/30 rounded-2xl p-8 text-center hover:border-amber-500 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-300 rounded-full flex items-center justify-center mx-auto text-3xl mb-3">
                    🥇
                  </div>
                  <h4 className="text-xl font-bold text-amber-200 mb-2">1st Prize</h4>
                </div>
                <div className="text-3xl font-black text-white mb-3">{raceDetails.rewards.first.prize}</div>
                <ul className="space-y-2">
                  {raceDetails.rewards.first.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center justify-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2nd Prize */}
              <div className="bg-gradient-to-br from-gray-800/30 to-transparent border border-gray-600/30 rounded-2xl p-8 text-center hover:border-gray-500 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-300 rounded-full flex items-center justify-center mx-auto text-3xl mb-3">
                    🥈
                  </div>
                  <h4 className="text-xl font-bold text-gray-300 mb-2">2nd Prize</h4>
                </div>
                <div className="text-3xl font-black text-white mb-3">{raceDetails.rewards.second.prize}</div>
                <ul className="space-y-2">
                  {raceDetails.rewards.second.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center justify-center gap-2">
                      <Medal className="w-4 h-4 text-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3rd Prize */}
              <div className="bg-gradient-to-br from-amber-800/30 to-transparent border border-amber-700/30 rounded-2xl p-8 text-center hover:border-amber-600 transition-all duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-500 rounded-full flex items-center justify-center mx-auto text-3xl mb-3">
                    🥉
                  </div>
                  <h4 className="text-xl font-bold text-amber-300 mb-2">3rd Prize</h4>
                </div>
                <div className="text-3xl font-black text-white mb-3">{raceDetails.rewards.third.prize}</div>
                <ul className="space-y-2">
                  {raceDetails.rewards.third.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center justify-center gap-2">
                      <Medal className="w-4 h-4 text-amber-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center text-gray-400 text-sm">
              * Cash prizes are awarded separately for Male and Female categories
            </div>
          </div>

          {/* Goodies Section */}
          <div className="bg-gradient-to-r from-[#EA4A3E]/20 to-[#ff7b54]/20 border border-[#EA4A3E]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
              <Gift className="w-6 h-6 text-[#EA4A3E]" />
              Goodies for All Runners
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {raceDetails.goodies.map((goodie, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-[#EA4A3E]/50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#EA4A3E]/20 rounded-lg">
                      {idx % 3 === 0 && <Users className="w-5 h-5 text-[#EA4A3E]" />}
                      {idx % 3 === 1 && <Award className="w-5 h-5 text-[#EA4A3E]" />}
                      {idx % 3 === 2 && <Gift className="w-5 h-5 text-[#EA4A3E]" />}
                    </div>
                    <span className="text-white font-medium">{goodie}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center text-gray-300">
              <p className="text-lg">
                Every registered participant receives all the listed goodies, regardless of finishing position
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5K RUN FORM MODAL */}
      <FiveKRunForm open={openForm} setOpen={setOpenForm} />
    </>
  )
}