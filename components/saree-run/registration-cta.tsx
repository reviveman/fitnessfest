"use client"
import { Heart, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SareeRegistrationCTA() {
  const steps = [
    {
      num: "1",
      title: "Register",
      description: "Sign up for free on our platform",
      icon: Users,
    },
    {
      num: "2",
      title: "Choose Distance",
      description: "Pick 1 KM, 3 KM, or 5 KM",
      icon: Zap,
    },
    {
      num: "3",
      title: "Show Up & Celebrate",
      description: "Come in your beautiful saree and run with pride",
      icon: Heart,
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a1f3a] to-[#0f172a] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#EA4A3E] to-[#d4a574] rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Ready to Run with Pride?</h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
            Join thousands of women celebrating culture, fitness, and sisterhood. Registration is free and open to all
            women and girl children.
          </p>

          <Button className="bg-[#EA4A3E] hover:bg-orange-600 text-white px-10 py-4 rounded-lg text-xl font-bold transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(234,74,62,0.4)]">
            Register for Saree Run 2026
          </Button>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 my-16">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="text-center">
                <div className="bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl font-bold">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <div className="text-[#EA4A3E] text-2xl">→</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Footer Info */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 text-center">
          <p className="text-gray-300 mb-2">Date: 22 February 2026 | Reporting: 6:00 AM | Flag-off: 6:30 AM</p>
          <p className="text-gray-400 text-sm">KTPO Convention Centre Grounds, Whitefield, Bengaluru</p>
          <p className="text-[#EA4A3E] font-bold mt-4">This is more than a run. This is a celebration of YOU.</p>
        </div>
      </div>
    </section>
  )
}
