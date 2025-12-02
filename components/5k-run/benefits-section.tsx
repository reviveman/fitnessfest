"use client"

import { Heart, Zap, Award, Gift } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Gift,
      title: "Premium Runner Kit",
      items: ["Dry-Fit T-shirt", "Running Bib Number", "RFID Timing Chip", "Event Wristband"],
    },
    {
      icon: Heart,
      title: "On-Ground Support",
      items: ["Multiple Water Stations", "Medical First-Aid", "Emergency Ambulance", "Professional Volunteers"],
    },
    {
      icon: Award,
      title: "Post-Run Rewards",
      items: ["Finisher Medal", "Finisher Certificate", "Healthy Refreshments", "Partner Discounts"],
    },
    {
      icon: Zap,
      title: "Festival Perks",
      items: ["Free Expo Entry", "Expert Trainer Sessions", "Photo Booth Access", "Social Media Features"],
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#0a0f1a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">What You Get</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every registered participant receives a complete runner experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#EA4A3E] transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,74,62,0.25)] overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EA4A3E]/0 to-[#EA4A3E]/0 group-hover:from-[#EA4A3E]/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative z-10">
                  <div className="mb-4 p-3 bg-[#EA4A3E]/20 rounded-lg w-fit group-hover:bg-[#EA4A3E]/40 transition-all">
                    <Icon className="w-6 h-6 text-[#EA4A3E]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <ul className="space-y-2">
                    {benefit.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-[#EA4A3E] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Why Join */}
        <div className="bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-6">Why Join?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Perfect for all fitness levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Professionally organized & managed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Beautiful scenic 5K route</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span className="text-lg">Strong community & celebration</span>
                </li>
              </ul>
            </div>
            <div
              className="hidden md:block rounded-xl overflow-hidden h-64"
              style={{
                backgroundImage:
                  "url(/images/fivekabout.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
