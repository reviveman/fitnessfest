"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SareeRunForm from "@/components/saree-run/SareeRunForm"  // ✅ CORRECT IMPORT

export default function SareeHeroSection() {
  const [openForm, setOpenForm] = useState(false)

  return (
    <section className="mt-20 relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/saree.png"
          alt="Women in sarees running together"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-[#0f172a]/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">Saree Run 2026</h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light">
          Tradition Meets Fitness • Women Celebrate Together
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Run, walk, or jog in grace — this is not just a race, it's a movement.
        </p>

        {/* Info Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <BadgeItem emoji="📅" text="29 March 2026" />
          <BadgeItem emoji="🕐" text="6:30 AM IST" />
          <BadgeItem emoji="📍" text="Bhoruka Tech Park Ground" />
          <BadgeItem emoji="🎉" text="FREE Entry" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            className="bg-[#EA4A3E] hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all flex items-center gap-2"
            onClick={() => setOpenForm(true)}   // ✅ OPEN MODAL
          >
            Register Now
            <ArrowRight className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg text-lg font-semibold"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Modal Form */}
      <SareeRunForm open={openForm} setOpen={setOpenForm} />  {/* ✅ MODAL WORKS NOW */}
    </section>
  )
}

function BadgeItem({ emoji, text }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:border-[#EA4A3E] transition-all">
      <div className="text-3xl mb-2">{emoji}</div>
      <p className="text-sm text-gray-300">{text}</p>
    </div>
  )
}
