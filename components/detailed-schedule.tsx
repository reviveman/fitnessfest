"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Dumbbell, Users, Lightbulb } from "lucide-react"
import Link from "next/link"

interface ScheduleItem {
  time: string
  title: string
  details?: string
  category?: string
  icon?: React.ReactNode
}

interface Zone {
  name: string
  color: string
  icon: React.ReactNode
  items: ScheduleItem[]
}

export default function DetailedSchedule() {
  const [activeDay, setActiveDay] = useState("day1")

  const day1: Zone[] = [
    {
      name: "MAIN STAGE",
      color: "bg-[#EA4A3E]",
      icon: <Dumbbell className="w-5 h-5" />,
      items: [
        { time: "11:00 – 11:15 AM", title: "Opening Ceremony", details: "Welcome note, sponsor acknowledgements" },
        {
          time: "11:15 – 12:00 PM",
          title: "HIIT Power Blast",
          details: "High-energy HIIT session to kick off the festival",
        },
        { time: "12:00 – 12:45 PM", title: "Zumba Party", details: "Dance fitness with top instructors" },
        { time: "12:45 – 01:30 PM", title: "Strength & Conditioning", details: "Full-body strength training" },
        { time: "01:30 – 02:30 PM", title: "Lunch Break", details: "Food court & hydration lounge" },
        { time: "02:30 – 03:15 PM", title: "Mobility & Flexibility Flow", details: "Guided stretch + mobility drills" },
        { time: "03:15 – 04:00 PM", title: "Functional Fitness Demo", details: "Trainers showcase dynamic movements" },
        {
          time: "04:00 – 04:45 PM",
          title: "Calisthenics Pro Showcase",
          details: "Freestyle, handstands, muscle-up demo",
        },
        { time: "04:45 – 05:30 PM", title: "Bollywood Dance Workout", details: "High-energy entertainment session" },
        { time: "05:30 – 06:15 PM", title: "Endurance Challenge", details: "Push-ups, squats, burpee challenge" },
        { time: "06:15 – 07:00 PM", title: "Evening Yoga Flow", details: "Relaxation & breathwork" },
        { time: "07:00 – 07:45 PM", title: "Martial Arts Fitness Workshop", details: "Kickboxing, combat cardio" },
        { time: "07:45 – 08:30 PM", title: "DJ Fitness Jam", details: "Cardio beats + movement" },
        {
          time: "08:30 – 09:00 PM",
          title: "Day 1 Closing Announcements",
          details: "Competition updates & Day 2 briefing",
        },
      ],
    },
    {
      name: "COMPETITION ARENA",
      color: "bg-yellow-500",
      icon: <Users className="w-5 h-5" />,
      items: [
        { time: "11:00 AM – 01:00 PM", title: "Functional Fitness Challenge", details: "Eliminations" },
        { time: "01:00 – 01:30 PM", title: "Break", details: "" },
        { time: "01:30 – 03:30 PM", title: "Deadlift Championship", details: "Qualifiers" },
        { time: "03:30 – 04:30 PM", title: "Push-Up & Plank Endurance Battle", details: "" },
        { time: "04:30 – 06:00 PM", title: "Calisthenics Amateur Battles", details: "" },
        { time: "06:00 – 07:00 PM", title: "Strength Endurance Circuit", details: "Qualifiers" },
        { time: "07:00 – 08:00 PM", title: "Powerlifting King/Queen", details: "Heats" },
        { time: "08:00 – 09:00 PM", title: "Battle of Gyms", details: "Team Round" },
      ],
    },
    {
      name: "WELLNESS + TALKS",
      color: "bg-[#55BCC1]",
      icon: <Lightbulb className="w-5 h-5" />,
      items: [
        { time: "11:30 AM – 12:15 PM", title: "Nutrition Essentials", details: "Active Lifestyle" },
        { time: "12:30 – 01:15 PM", title: "Gut Health & Hormone Balance", details: "" },
        { time: "01:30 – 02:15 PM", title: "Mental Fitness", details: "Stress & Focus" },
        { time: "02:30 – 03:15 PM", title: "Recovery Techniques", details: "Ice Bath & Foam Rolling" },
        { time: "03:30 – 04:15 PM", title: "Supplements 101", details: "" },
        { time: "04:30 – 05:15 PM", title: "Women's Fitness & Strength", details: "Training" },
        { time: "05:30 – 06:15 PM", title: "Building a Career in Fitness", details: "" },
        { time: "06:30 – 07:15 PM", title: "Injury Prevention", details: "Training Safety" },
        { time: "07:30 – 08:15 PM", title: "Fitness Entrepreneurship Panel", details: "" },
      ],
    },
  ]

  const day2: Zone[] = [
    {
      name: "MAIN STAGE",
      color: "bg-[#EA4A3E]",
      icon: <Dumbbell className="w-5 h-5" />,
      items: [
        { time: "11:00 – 11:15 AM", title: "Opening Warm-Up", details: "" },
        { time: "11:15 – 12:00 PM", title: "Yoga for Strength & Balance", details: "" },
        { time: "12:00 – 12:45 PM", title: "Functional Full-Body Workout", details: "" },
        { time: "12:45 – 01:30 PM", title: "Zumba & Dance Mix", details: "" },
        { time: "01:30 – 02:30 PM", title: "Lunch Break", details: "" },
        { time: "02:30 – 03:15 PM", title: "Kettlebell Basics Workshop", details: "" },
        { time: "03:15 – 04:00 PM", title: "Core Strength Session", details: "" },
        { time: "04:00 – 04:45 PM", title: "Calisthenics Freestyle Show", details: "" },
        { time: "04:45 – 05:30 PM", title: "Strength Challenge for Public", details: "" },
        { time: "05:30 – 06:15 PM", title: "Evening Stretch Routine", details: "" },
        { time: "06:15 – 07:00 PM", title: "Martial Arts Fitness", details: "" },
        { time: "07:00 – 07:45 PM", title: "Mega Zumba Party", details: "" },
        { time: "07:45 – 08:30 PM", title: "DJ Fitness Finale", details: "" },
        { time: "08:30 – 09:00 PM", title: "Closing Ceremony & Awards", details: "" },
      ],
    },
    {
      name: "COMPETITION ARENA",
      color: "bg-yellow-500",
      icon: <Users className="w-5 h-5" />,
      items: [
        { time: "11:00 AM – 01:00 PM", title: "Functional Fitness Challenge", details: "Finals" },
        { time: "01:00 – 01:30 PM", title: "Break", details: "" },
        { time: "01:30 – 03:00 PM", title: "Deadlift Championship", details: "Finals" },
        { time: "03:00 – 04:00 PM", title: "Push-Up & Plank Endurance Finals", details: "" },
        { time: "04:00 – 05:00 PM", title: "Calisthenics Freestyle Finals", details: "" },
        { time: "05:00 – 06:00 PM", title: "Strength Endurance Circuit", details: "Finals" },
        { time: "06:00 – 07:00 PM", title: "Powerlifting King/Queen", details: "Finals" },
        { time: "07:00 – 08:00 PM", title: "Battle of Gyms", details: "Grand Finale" },
        { time: "08:00 – 09:00 PM", title: "Athlete Felicitations", details: "Awards" },
      ],
    },
    {
      name: "WELLNESS + TALKS",
      color: "bg-[#55BCC1]",
      icon: <Lightbulb className="w-5 h-5" />,
      items: [
        { time: "11:30 AM – 12:15 PM", title: "Diet Myths Busted", details: "" },
        { time: "12:30 – 01:15 PM", title: "Better Sleep, Better Recovery", details: "" },
        { time: "01:30 – 02:15 PM", title: "Fitness for Busy Professionals", details: "" },
        { time: "02:30 – 03:15 PM", title: "Sports Nutrition Basics", details: "" },
        { time: "03:30 – 04:15 PM", title: "Injury Rehab Workshop", details: "" },
        { time: "04:30 – 05:15 PM", title: "Mental Health for Athletes", details: "" },
        { time: "05:30 – 06:15 PM", title: "Building a Fitness Brand", details: "" },
        { time: "06:30 – 07:15 PM", title: "Social Media for Fitness Coaches", details: "" },
        { time: "07:30 – 08:15 PM", title: "Future of Fitness in India", details: "Panel Talk" },
      ],
    },
  ]

  const scheduleData = activeDay === "day1" ? day1 : day2

  return (
    <section className="bg-[#0f172a] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
   

        {/* Day Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveDay("day1")}
            className={`px-8 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 cursor-pointer ${
              activeDay === "day1"
                ? "bg-[#EA4A3E] text-white shadow-lg shadow-red-500/50"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            📅 Day 1 (Saturday)
          </button>
          <button
            onClick={() => setActiveDay("day2")}
            className={`px-8 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-300 cursor-pointer ${
              activeDay === "day2"
                ? "bg-[#EA4A3E] text-white shadow-lg shadow-red-500/50"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            📅 Day 2 (Sunday)
          </button>
        </div>

        {/* Zones Grid */}
        <div className="space-y-8">
          {scheduleData.map((zone) => (
            <div key={zone.name} className="rounded-2xl overflow-hidden border border-gray-700">
              {/* Zone Header */}
              <div className={`${zone.color} px-6 py-4 flex items-center gap-3`}>
                <div className="text-white">{zone.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{zone.name}</h3>
              </div>

              {/* Zone Content */}
              <div className="bg-gray-900/50 backdrop-blur-sm">
                <div className="divide-y divide-gray-800">
                  {zone.items.map((item, idx) => (
                    <div key={idx} className="px-6 py-4 hover:bg-gray-800/50 transition-colors duration-200">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                        {/* Time */}
                        <div className="flex items-start gap-3 flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#EA4A3E] mt-0.5" />
                          <span className="font-bold text-[#EA4A3E] min-w-[140px]">{item.time}</span>
                        </div>

                        {/* Title & Details */}
                        <div className="flex-grow">
                          <h4 className="font-bold text-white text-base md:text-lg mb-1">{item.title}</h4>
                          {item.details && <p className="text-gray-300 text-sm">{item.details}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grand Awards Section */}
        <div className="mt-12 bg-gradient-to-r from-[#EA4A3E] to-orange-600 rounded-2xl p-8 text-center border-2 border-orange-400">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">🏆 GRAND AWARDS CEREMONY</h3>
          <p className="text-lg text-orange-100">Day 2 – 8:30 PM to 9:00 PM</p>
          <p className="text-orange-200 mt-2 text-sm">Celebrate excellence and honor the champions!</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
       <Link href={"/tickets"}>
          <button className="bg-[#EA4A3E] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-red-500/50 cursor-pointer">
            Register Now
          </button>
       </Link>
        </div>
      </div>
    </section>
  )
}
