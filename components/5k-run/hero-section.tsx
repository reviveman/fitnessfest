"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const scrollToRegister = () => {
    const element = document.getElementById("registration")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="mt-50 relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/images/fivekrun.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/80 to-[#0f172a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Date Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#EA4A3E]/20 border border-[#EA4A3E] rounded-full">
          <span className="w-2 h-2 bg-[#EA4A3E] rounded-full animate-pulse" />
          <span className="text-sm font-semibold text-[#EA4A3E]">28 March 2026</span>
        </div>

        {/* Main Title */}
        {/* <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight text-balance">
          Bengaluru Fitness Fest
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54]">5K Run</span>
        </h1> */}

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 text-balance">
          Join thousands of fitness enthusiasts in a celebration of wellness, community, and the spirit of running
        </p>

        {/* Quick Info */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-[#EA4A3E] font-bold text-lg">06:30 AM</div>
            <div className="text-xs text-gray-400">Flag-Off Time</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-[#EA4A3E] font-bold text-lg">5 KM</div>
            <div className="text-xs text-gray-400">Run Distance</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
            <div className="text-[#EA4A3E] font-bold text-lg">₹1,298</div>
            <div className="text-xs text-gray-400">All Inclusive</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={scrollToRegister}
            className="bg-[#EA4A3E] hover:bg-[#d63a2e] text-white px-8 py-6 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105"
          >
            Register Now
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white/30 hover:border-[#EA4A3E] text-white px-8 py-6 rounded-lg text-lg font-bold transition-all bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToRegister}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-[#EA4A3E]" />
      </button>
    </section>
  )
}
