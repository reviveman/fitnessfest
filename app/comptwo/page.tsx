"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Users, Trophy } from "lucide-react"

type EventCategory = "KEYNOTE" | "PRESENTATION" | "Q&A" | "WORKSHOP" | "COMPETITION" | "TALK" | "ACTIVITY"

interface Event {
  time: string
  title: string
  category: EventCategory
  description?: string
}

interface Session {
  sessionTitle: string
  timeRange: string
  events: Event[]
}

export default function CompetitionsPage() {
  const [activeDay, setActiveDay] = useState<"25" | "26">("25")

  const getCategoryColor = (category: EventCategory): { bg: string; text: string; badge: string } => {
    const colors: Record<EventCategory, { bg: string; text: string; badge: string }> = {
      KEYNOTE: { bg: "bg-blue-100", text: "text-blue-900", badge: "bg-blue-500" },
      PRESENTATION: { bg: "bg-yellow-100", text: "text-yellow-900", badge: "bg-yellow-500" },
      "Q&A": { bg: "bg-green-100", text: "text-green-900", badge: "bg-green-500" },
      WORKSHOP: { bg: "bg-purple-100", text: "text-purple-900", badge: "bg-purple-500" },
      COMPETITION: { bg: "bg-red-100", text: "text-red-900", badge: "bg-red-500" },
      TALK: { bg: "bg-orange-100", text: "text-orange-900", badge: "bg-orange-500" },
      ACTIVITY: { bg: "bg-pink-100", text: "text-pink-900", badge: "bg-pink-500" },
    }
    return colors[category]
  }

  const scheduleData: Record<"25" | "26", Session[]> = {
    "25": [
      {
        sessionTitle: "Morning Energize",
        timeRange: "7:30 AM - 9:15 AM",
        events: [
          {
            time: "7:30 - 8:15",
            title: "Sunrise Yoga",
            category: "ACTIVITY",
            description: "Start your morning with gentle yoga flows and sound healing to refresh your body and mind.",
          },
          {
            time: "8:30 - 9:15",
            title: "Zumba",
            category: "ACTIVITY",
            description: "Get your heart pumping with an energetic Zumba session filled with dance, cardio, and fun.",
          },
        ],
      },
      {
        sessionTitle: "High-Intensity Training",
        timeRange: "9:30 AM - 12:15 PM",
        events: [
          {
            time: "9:30 - 10:15",
            title: "Bootcamp Burnout",
            category: "COMPETITION",
            description: "Push your limits with high-intensity drills that build strength, endurance, and agility.",
          },
          {
            time: "10:30 - 11:15",
            title: "Nutrition for Real Results",
            category: "TALK",
            description:
              "Learn how to fuel your body for performance and recovery with expert-backed nutrition advice.",
          },
          {
            time: "11:30 - 12:15",
            title: "Functional Training for All",
            category: "WORKSHOP",
            description: "Discover exercises that build strength, flexibility, and balance using everyday movements.",
          },
        ],
      },
      {
        sessionTitle: "Afternoon Fitness & Wellness",
        timeRange: "1:30 PM - 4:00 PM",
        events: [
          {
            time: "1:30 - 2:00",
            title: "Fitness Quiz Finals",
            category: "COMPETITION",
            description: "Test your knowledge of health, wellness, and fitness in this interactive quiz competition.",
          },
          {
            time: "2:15 - 3:00",
            title: "Pilates for Posture & Core",
            category: "WORKSHOP",
            description: "Strengthen your core and improve posture with low-impact pilates exercises.",
          },
          {
            time: "3:15 - 4:00",
            title: "Women in Fitness & Wellness",
            category: "KEYNOTE",
            description: "Celebrate women leaders in fitness with inspiring talks and community networking.",
          },
        ],
      },
      {
        sessionTitle: "Evening Competitions & Celebration",
        timeRange: "4:15 PM - 7:00 PM",
        events: [
          {
            time: "4:15 - 5:15",
            title: "Push-Up King & Plank Queen",
            category: "COMPETITION",
            description: "Compete to see who can hold the plank the longest and perform the most push-ups.",
          },
          {
            time: "5:30 - 6:30",
            title: "Afro Dance & Cardio Jam",
            category: "ACTIVITY",
            description: "Join the rhythm with Afro-inspired dance moves that double as a fun cardio workout.",
          },
          {
            time: "6:30 - 7:00",
            title: "Drum Circle",
            category: "ACTIVITY",
            description: "Unite with others in an energizing group drumming experience that boosts positivity.",
          },
        ],
      },
    ],
    "26": [
      {
        sessionTitle: "Sunday Sunrise Sessions",
        timeRange: "7:30 AM - 9:15 AM",
        events: [
          {
            time: "7:30 - 8:15",
            title: "Power Yoga Flow",
            category: "ACTIVITY",
            description: "Dynamic yoga movements to build strength and flexibility.",
          },
          {
            time: "8:30 - 9:15",
            title: "HIIT Cardio Blast",
            category: "COMPETITION",
            description: "High-intensity interval training for maximum calorie burn.",
          },
        ],
      },
      {
        sessionTitle: "Mid-Day Masterclasses",
        timeRange: "10:00 AM - 1:00 PM",
        events: [
          {
            time: "10:00 - 11:00",
            title: "Celebrity Trainer Session",
            category: "KEYNOTE",
            description: "Learn from industry-leading fitness experts and transformation coaches.",
          },
          {
            time: "11:15 - 12:15",
            title: "Advanced CrossFit Workshop",
            category: "WORKSHOP",
            description: "Master advanced CrossFit techniques with certified trainers.",
          },
          {
            time: "12:30 - 1:00",
            title: "Q&A with Fitness Experts",
            category: "Q&A",
            description: "Get your fitness questions answered by industry professionals.",
          },
        ],
      },
    ],
  }

  const sessions = scheduleData[activeDay]

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/fitness-competition-event-with-athletes.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#0f172a]" />

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            <span className="bg-gradient-to-r from-[#EA4A3E] via-[#FFC91F] to-[#EA4A3E] bg-clip-text text-transparent">
              Competition Schedule
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Experience high-energy competitions, workshops, and fitness challenges across two days
          </motion.p>
        </div>
      </section>

      {/* Day Selector */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4 justify-center mb-12">
            {["25", "26"].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day as "25" | "26")}
                className={`px-6 py-3 font-bold text-lg rounded-lg transition-all duration-300 ${
                  activeDay === day
                    ? "bg-[#EA4A3E] text-white shadow-lg shadow-[#EA4A3E]/50 scale-105"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                }`}
              >
                {day === "25" ? "📅 Day One (25 April)" : "📅 Day Two (26 April)"}
              </button>
            ))}
          </div>

          {/* Sessions */}
          <div className="space-y-12">
            {sessions.map((session, sessionIdx) => (
              <motion.div
                key={sessionIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sessionIdx * 0.1 }}
                className="group"
              >
                {/* Session Header */}
                <div className="flex flex-col md:flex-row gap-8 mb-6">
                  {/* Left: Large Session Card */}
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#EA4A3E] to-[#ff7b54] rounded-2xl p-6 text-white h-full flex flex-col justify-between min-h-[200px] shadow-lg hover:shadow-[0_0_30px_rgba(234,74,62,0.4)] transition-all duration-300">
                      <div>
                        <p className="text-sm font-semibold opacity-90 mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {session.timeRange}
                        </p>
                        <h3 className="text-2xl md:text-3xl font-black leading-tight">{session.sessionTitle}</h3>
                      </div>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-sm font-semibold">{session.events.length} Events</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Event Cards (Horizontal Scroll) */}
                  <div className="md:flex-1 overflow-x-auto pb-4 -mb-4">
                    <div className="flex gap-4 min-w-min md:min-w-full">
                      {session.events.map((event, eventIdx) => {
                        const colors = getCategoryColor(event.category)
                        return (
                          <motion.div
                            key={eventIdx}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: eventIdx * 0.1 }}
                            className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(234,74,62,0.3)] transition-all duration-300 hover:scale-105 group/card"
                          >
                            {/* Card Header with Image */}
                            <div
                              className={`h-32 ${colors.bg} relative overflow-hidden`}
                              style={{
                                backgroundImage: `url('/--event-title-tolowercase---replace---s--g-.jpg' ')}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />

                              {/* Decorative Shape */}
                              <div
                                className={`absolute -bottom-8 -right-8 w-24 h-24 opacity-20 ${colors.badge} rounded-full blur-xl`}
                              />

                              {/* Category Badge */}
                              <div className="absolute top-3 right-3">
                                <span
                                  className={`inline-block ${colors.badge} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                                >
                                  {event.category}
                                </span>
                              </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                              <p className="text-[#EA4A3E] font-bold text-sm mb-2 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {event.time}
                              </p>
                              <h4 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{event.title}</h4>
                              {event.description && (
                                <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                              )}
                            </div>

                            {/* Card Footer */}
                            <div className="px-5 py-3 border-t border-gray-200 bg-gray-50">
                              <button className="text-[#EA4A3E] font-semibold text-sm hover:text-[#ff7b54] transition-colors w-full text-left">
                                Learn More →
                              </button>
                            </div>
                          </motion.div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Full-width event for smaller screens */}
                <div className="md:hidden space-y-3">
                  {session.events.map((event, eventIdx) => {
                    const colors = getCategoryColor(event.category)
                    return (
                      <motion.div
                        key={eventIdx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: eventIdx * 0.1 }}
                        className="bg-gray-900 rounded-xl p-4 border border-gray-700"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span
                            className={`inline-block ${colors.badge} text-white text-xs font-bold px-2 py-1 rounded-full`}
                          >
                            {event.category}
                          </span>
                          <span className="text-[#FFC91F] text-sm font-bold">{event.time}</span>
                        </div>
                        <h4 className="text-white font-bold mb-1">{event.title}</h4>
                        {event.description && <p className="text-gray-400 text-sm">{event.description}</p>}
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Trophy, label: "Competitions", value: "6+" },
            { icon: Users, label: "Participants", value: "1500+" },
            { icon: Calendar, label: "Hours of Fun", value: "20+" },
            { icon: Clock, label: "Sessions", value: "15+" },
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700 text-center"
              >
                <Icon className="w-8 h-8 text-[#EA4A3E] mx-auto mb-3" />
                <p className="text-3xl font-black text-[#FFC91F] mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 mb-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Compete?</h2>
          <p className="text-white/90 mb-8 text-lg">Register now and secure your spot at Bengaluru Fitness Fest 2026</p>
          <button className="bg-white text-[#EA4A3E] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
            Register Now
          </button>
        </div>
      </section>
    </div>
  )
}
