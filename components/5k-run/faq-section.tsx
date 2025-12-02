"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: "What time should I report?",
      a: "Please report at 6:00 AM at the venue. The flag-off will be at 6:30 AM sharp. Early arrival is recommended for smooth check-in.",
    },
    {
      q: "Will there be hydration and medical support?",
      a: "Yes! We have multiple water and ORS stations along the route. Our emergency medical team with an ambulance will be on standby throughout the event.",
    },
    {
      q: "Is this run timed? Can I get my timing?",
      a: "Base registration includes a fun-run experience. RFID timing chips are available as an optional add-on for those who want their official timing.",
    },
    {
      q: "Are beginners welcome?",
      a: "This run is designed for all fitness levels—from first-time runners to seasoned athletes. Everyone is welcome to participate at their own pace.",
    },
    {
      q: "What are the age requirements?",
      a: "Participants must be 16 years or above. Children must be accompanied by parents or guardians.",
    },
    {
      q: "Is parking available?",
      a: "Limited parking is available at the venue. We recommend carpooling or using public transportation for a better experience.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-[#0f172a]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">Everything you need to know about the 5K Run</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#EA4A3E]/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-all"
              >
                <h3 className="text-lg font-semibold text-white text-left">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-[#EA4A3E] transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4 border-t border-white/10">
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
