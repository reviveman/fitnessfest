"use client"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SareeHeroSection() {
  return (
    <section className=" mt-20 relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
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

      {/* Gradient Background Elements */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-r from-[#d4a574] to-[#EA4A3E] rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Decorative Crown Icon */}
        <div className="mb-6 flex justify-center">
          {/* <div className="text-6xl">👑</div> */}
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance leading-tight">Saree Run 2026</h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-6 text-balance font-light">
          Tradition Meets Fitness • Culture Meets Movement • Women Celebrate Together
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Run, walk, or jog in grace. Celebrate womanhood, embrace cultural pride, and discover the power of solidarity
          in every step. This is not a race—it's a movement.
        </p>

        {/* Key Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 md:mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:border-[#EA4A3E] transition-all duration-300">
            <div className="text-3xl mb-2">📅</div>
            <p className="text-sm text-gray-300">22 Feb 2026</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:border-[#EA4A3E] transition-all duration-300">
            <div className="text-3xl mb-2">🕐</div>
            <p className="text-sm text-gray-300">6:30 AM IST</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:border-[#EA4A3E] transition-all duration-300">
            <div className="text-3xl mb-2">📍</div>
            <p className="text-sm text-gray-300"> KTPO Whitefield</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:border-[#EA4A3E] transition-all duration-300">
            <div className="text-3xl mb-2">🎉</div>
            <p className="text-sm text-gray-300">FREE Entry</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button className="bg-[#EA4A3E] hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
            Register Now
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
