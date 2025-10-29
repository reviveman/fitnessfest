"use client"
import RegistrationForm from "@/components/registration-form"
import { motion } from "framer-motion"
import { Users, Trophy, Globe, Dumbbell } from "lucide-react"

export default function CompetitionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="min-h-[80vh] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EA4A3E] to-[#FFC91F]"
          >
            Competitions
          </motion.h1>
          <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Experience the thrill of world-class fitness competitions at the Bengaluru Fitness Festival 2026.
          </p>
        </div>
      </section>

      {/* Competitions Schedule */}
      <section className="py-24 bg-gray-50 relative">
        <div className="container px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black uppercase text-gray-900 mb-4">Competitions Schedule</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendar for these key dates and don&apos;t miss any of the action.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#EA4A3E] to-[#FFC91F] transform -translate-x-1/2"></div>

            {[
              {
                date: "February 21, 2026",
                title: "Ultimate Yoga Flow Contest",
                text: "Celebrate the essence of inner strength, poise, and breath through yogic expression at the signature Yoga Flow Contest.",
              },
              {
                date: "February 21-21, 2026",
                title: "Dance Fit Battle – “Last One Dancing”",
                text: "Unleash your rhythm and energy in a high-energy Zumba and freestyle showdown with incredible vibes and prizes.",
              },
              {
                date: "February 22, 2026",
                title: "Push-Up & Plank King/Queen Challenge",
                text: "No pre-registration, no complex formats — just pure strength, grit, and glory on the mat.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-6 h-6 bg-white border-4 border-[#EA4A3E] rounded-full"></div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-lg max-w-md"
                >
                  <span className="inline-block bg-gradient-to-r from-[#EA4A3E] to-[#FFC91F] text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-24 bg-gray-50">
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
      </section>
    </main>
  )
}
