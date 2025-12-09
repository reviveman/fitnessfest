"use client"

import RegistrationForm from "@/components/registration-form"
import Schedule from "@/components/schedule"

import { motion } from "framer-motion"
import { Users, Trophy, Globe, Dumbbell } from "lucide-react"

export default function CompetitionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Schedule />


 

      {/* Competition Rules */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase text-gray-900 mb-4">Competition Rules</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Familiarize yourself with our guidelines to ensure fair play and safety for all participants.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-gray-200 border rounded-2xl shadow-xl overflow-hidden">
            {[
              {
                title: "Registration Requirements",
                text: "All participants must register 14 days before the event. Valid ID and proof of fitness may be required.",
              },
              {
                title: "Age Categories",
                text: "Age groups: 18-29, 30-39, 40-49, and 50+. Participants must compete in their category.",
              },
              {
                title: "Equipment & Attire",
                text: "Wear athletic attire. Personal equipment must meet safety standards and be approved by judges.",
              },
              {
                title: "Judging & Scoring",
                text: "Certified professionals will judge. Scoring systems vary by event and will be explained before competitions.",
              },
              {
                title: "Health & Safety",
                text: "Waivers must be signed. Medical staff will be present. Participants are encouraged to get a medical check-up.",
              },
              {
                title: "Code of Conduct",
                text: "Respect fellow competitors, judges, and staff. Unsportsmanlike behavior may lead to disqualification.",
              },
            ].map((rule, index) => (
              <details key={index} className="group open:bg-gray-50 px-6 py-5 cursor-pointer">
                <summary className="flex justify-between items-center font-semibold text-gray-900">
                  {rule.title}
                  <span className="ml-4 text-[#EA4A3E] group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-2 text-gray-600">{rule.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {[
              { icon: <Users className="w-10 h-10 text-[#EA4A3E]" />, number: "1,500+", text: "Competitors" },
              { icon: <Trophy className="w-10 h-10 text-[#FFC91F]" />, number: "$70,000", text: "Total Prizes" },
              { icon: <Globe className="w-10 h-10 text-[#70adb0]" />, number: "35", text: "Countries" },
              { icon: <Dumbbell className="w-10 h-10 text-[#55BCC1]" />, number: "6", text: "Competitions" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-10 rounded-2xl shadow-lg"
              >
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-4xl font-extrabold text-gray-900">{stat.number}</h3>
                <p className="text-gray-600 font-medium mt-2">{stat.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  )
}
