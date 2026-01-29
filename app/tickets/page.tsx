"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Check } from "lucide-react"
import Pricing from "@/components/pricing"

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <main>

        {/* ================= HERO ================= */}
        <section
          className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

          <div className="relative z-10 max-w-4xl text-center px-6 pt-32">
            <span className="inline-block mt-25  rounded-full border border-red-400/40 bg-red-600/20 px-6 py-2 text-sm font-semibold text-red-300 tracking-wide">
              FITNESS FEST 2026
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Get Your Tickets
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              India’s biggest fitness & wellness expo featuring workouts,
              competitions, experts, nutrition & live challenges.
            </p>
          </div>
        </section>

        {/* ================= PRICING ================= */}
        <section className="relative py-28 bg-gradient-to-br from-red-50 via-white to-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
                Ticket Plans
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Flexible passes designed for visitors, athletes & fitness
                enthusiasts.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="relative z-10">
              <Pricing />
            </div>
          </div>
        </section>

        {/* ================= EVENT DETAILS ================= */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto rounded-[32px] bg-white/70 backdrop-blur-xl shadow-2xl border border-red-100 p-10 md:p-16">
              <div className="grid lg:grid-cols-2 gap-16">

                {/* LEFT */}
                <div>
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-10">
                    Event Details
                  </h3>

                  <div className="space-y-8">

                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                        <Calendar className="w-7 h-7 text-[#EA4A3E]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg">
                          Date
                        </p>
                        <p className="text-gray-600">
                          Saturday & Sunday <br />
                          <span className="font-medium">
                            28 & 29 March 2026
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                        <Clock className="w-7 h-7 text-[#EA4A3E]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg">
                          Time
                        </p>
                        <p className="text-gray-600">
                          11:00 AM – 9:00 PM
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                        <MapPin className="w-7 h-7 text-[#EA4A3E]" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-lg">
                          Venue
                        </p>
                        <p className="text-gray-600">
                          Bhoruka Tech Park Ground
                        </p>
                        <p className="text-gray-600">
                          Whitefield, Bengaluru – 560066
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* RIGHT */}
                <div>
                  <h3 className="text-4xl font-extrabold text-gray-900 mb-10">
                    What You’ll Experience
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      "Full-day Expo Access",
                      "Zumba • HIIT • Yoga",
                      "CrossFit Demonstrations",
                      "Live Fitness Challenges",
                      "Nutrition & Healthy Food Zone",
                      "Expert-led Workshops",
                      "Fitness Goodie Bag",
                      "Digital Certificate",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
                      >
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-gray-700 font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 bg-gradient-to-r from-[#EA4A3E] to-red-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Join Fitness Fest 2026?
            </h2>

            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-12">
              Be part of India’s most energetic fitness gathering.
              Limited passes available — book now.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/competitions">
                <Button className="bg-white text-[#EA4A3E] hover:bg-gray-100 px-10 py-4 rounded-full font-semibold text-lg">
                  View Schedule
                </Button>
              </Link>

              <Link href="/register">
                <Button className="border-2 border-white bg-transparent hover:bg-white hover:text-[#EA4A3E] px-10 py-4 rounded-full font-semibold text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
