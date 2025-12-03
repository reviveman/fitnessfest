"use client"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function SareeDistanceOptions() {
  const distances = [
    {
      distance: "1 KM",
      description: "Perfect Start",
      subtitle: "Leisurely walk or jog",
      perks: ["Great for beginners", "Celebrate at your pace", "Family-friendly", "Low intensity"],
      emoji: "🌸",
      image: "/images/saree.png",
    },
    {
      distance: "3 KM",
      description: "Feel the Flow",
      subtitle: "Comfortable jog",
      perks: ["Balance & endurance", "Feel the community", "Medium intensity", "Achievable challenge"],
      emoji: "🌺",
      featured: true,
      image: "/images/saree.png",
    },
    {
      distance: "5 KM",
      description: "Full Glory",
      subtitle: "Serious runner's choice",
      perks: ["Ultimate challenge", "Personal best moment", "High energy vibes", "Conquer & celebrate"],
      emoji: "✨",
      image: "/images/saree.png",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Choose Your Distance</h2>
        <p className="text-gray-300 text-center mb-16 text-lg">
          Run, walk, or jog—pick what feels right for you. No pressure, only joy.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {distances.map((d, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-105 ${
                d.featured
                  ? "bg-gradient-to-br from-[#EA4A3E]/20 to-[#d4a574]/20 border-[#EA4A3E] shadow-[0_0_30px_rgba(234,74,62,0.3)]"
                  : "bg-white/5 border-white/10 hover:border-[#EA4A3E]"
              }`}
            >
              {d.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-[#EA4A3E] text-white px-4 py-1 rounded-full text-xs font-bold">MOST POPULAR</span>
                </div>
              )}

              <div className="relative h-48 w-full">
                <Image
                  src={d.image || "/placeholder.svg"}
                  alt={`${d.distance} distance saree run`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/80"></div>
              </div>

              <div className="p-8 relative">
                {/* <div className="text-5xl mb-4">{d.emoji}</div> */}
                <h3 className="text-4xl font-bold text-[#EA4A3E] mb-2">{d.distance}</h3>
                <p className="text-white text-lg font-semibold mb-1">{d.description}</p>
                <p className="text-gray-400 text-sm mb-6">{d.subtitle}</p>

                <ul className="space-y-3 mb-8">
                  {d.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-200">
                      <CheckCircle className="w-5 h-5 text-[#EA4A3E] flex-shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    d.featured
                      ? "bg-[#EA4A3E] hover:bg-orange-600 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  Select This Distance
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
