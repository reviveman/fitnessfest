"use client"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function SareeEventDetails() {
  const details = [
    {
      icon: Calendar,
      title: "Date",
      value: "29 March 2026",
      image: "/placeholder.svg?key=event-date-calendar",
    },
    {
      icon: Clock,
      title: "Reporting Time",
      value: "6:00 AM • Flag-off: 6:30 AM",
      image: "/placeholder.svg?key=event-time-morning",
    },
    {
      icon: MapPin,
      title: "Venue",
      value: "Bhoruka Tech Park Ground, Whitefield",
      image: "/placeholder.svg?key=event-venue-whitefield",
    },
    {
      icon: Users,
      title: "Who Can Join",
      value: "Women & Girl Children (All Ages)",
      image: "/placeholder.svg?key=event-women-community",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f172a] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Event Details</h2>
        <p className="text-gray-300 text-center mb-16 text-lg">
          Mark your calendar for an empowering morning celebration
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {details.map((detail, i) => {
            const Icon = detail.icon
            return (
              <div
                key={i}
                className="relative bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-[#EA4A3E] transition-all duration-300 hover:shadow-[0_0_20px_rgba(234,74,62,0.2)] overflow-hidden group"
              >
                {/* <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <Image src={detail.image || "/placeholder.svg"} alt={detail.title} fill className="object-cover" />
                </div> */}

                <div className="relative z-10 flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{detail.title}</p>
                    <p className="text-white text-lg font-semibold">{detail.value}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Event Info Highlight */}
        <div className="mt-16 bg-gradient-to-r from-[#EA4A3E]/10 to-[#d4a574]/10 border border-[#EA4A3E]/30 rounded-xl p-8 backdrop-blur-md">
          <p className="text-xl text-gray-100 text-center">
            <span className="font-bold text-[#EA4A3E]">Participation is FREE</span> — Only mandatory registration
            required. A celebration of women empowerment, cultural pride, and community fitness.
          </p>
        </div>
      </div>
    </section>
  )
}
