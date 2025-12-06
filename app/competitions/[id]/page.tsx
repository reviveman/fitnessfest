"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Star, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getEventById } from "@/data/events"
import { EventSpeakersSection } from "@/components/event-speakers-section"
import { EventSponsorsSection } from "@/components/event-sponsors-section"

type Props = {
  params: Promise<{ id: string }>
}

export default function EventDetailPage({ params }: Props) {
  const resolvedParams = use(params)

  // Get event data
  const event = getEventById(resolvedParams.id)

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">

        <div className="container mx-auto px-4 py-16">
          <Link href="/" className="text-[#EA4A3E] hover:text-[#D03F34] flex items-center gap-2 mb-8 font-medium">
            <ArrowLeft size={20} />
            Back to events
          </Link>

          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="w-24 h-24 bg-[#EA4A3E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-[#EA4A3E]" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Event not found</h1>
            <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="bg-[#EA4A3E] hover:bg-[#D03F34] text-white">
              <Link href="/">Browse All Events</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header Banner */}
      <section
        className="min-h-[60vh] bg-cover bg-center py-20 flex items-center relative"
        style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Events</h1> */}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-[#EA4A3E] text-white py-12">
        <div className="container max-w-3xl mx-auto px-4">

          <div className="max-w-4xl">
            <Badge className="bg-[#EA4A3E]/20 text-white border-white mb-4">
              {event.description || "Conference"}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>

            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              Join us for an incredible experience that will transform your perspective and connect you with industry
              leaders.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{event.startDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{event.timeRange || "9:00 AM - 6:00 PM"}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>500+ Attendees</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-14">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* MAIN CONTENT */}
            <div className="lg:col-span-2 space-y-12">

              {/* Event Image */}
              <div className="relative">
                <Image
                  src={event.image || "/placeholder.svg?height=400&width=800"}
                  alt="Event Banner"
                  width={800}
                  height={400}
                  className="rounded-2xl w-full shadow-lg"
                />

                {/* <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Share2 className="w-4 h-4 text-[#EA4A3E]" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                    <Heart className="w-4 h-4 text-[#EA4A3E]" />
                  </Button>
                </div> */}
              </div>

              {/* Event Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Event</h2>

                <p className="text-lg leading-relaxed text-gray-700">{event.description}</p>

                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  
                  <div className="bg-[#EA4A3E]/10 p-6 rounded-xl">
                    <h3 className="font-semibold text-[#EA4A3E] mb-2">What You'll Learn</h3>
                    <ul className="text-sm text-[#EA4A3E]/80 space-y-1">
                      <li>• Industry best practices and trends</li>
                      <li>• Networking with professionals</li>
                      <li>• Hands-on workshops and sessions</li>
                      <li>• Latest tools and technologies</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">Who Should Attend</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Industry professionals</li>
                      <li>• Students and graduates</li>
                      <li>• Entrepreneurs and founders</li>
                      <li>• Anyone interested in the field</li>
                    </ul>
                  </div>

                </div>
              </div>

               {/* sponsors and speakers commented */}

              {/* <div className="bg-white rounded-2xl p-8 shadow-lg">
                <EventSponsorsSection event={event} />
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <EventSpeakersSection event={event} />
              </div> */}

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">

                {/* Pricing Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#EA4A3E]/20">

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-[#EA4A3E] mb-2">
                      {typeof event.price === "number" ? `$${event.price}` : event.price}
                    </div>
                    <p className="text-gray-600">per person</p>
                  </div>

                 <Link href="/register" className="">

                  <Button className="w-full bg-[#EA4A3E] hover:bg-[#D03F34] text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 mb-6 cursor-pointer">
                    Buy Your Ticket
                  </Button>
                 </Link>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Event Details</h3>

                    {event.startDate && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#EA4A3E]" />
                        <div>
                          <span className="font-medium text-gray-900 block">Start Date</span>
                          <span className="text-gray-600 text-sm">{event.startDate}</span>
                        </div>
                      </div>
                    )}

                    {event.endDate && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#EA4A3E]" />
                        <div>
                          <span className="font-medium text-gray-900 block">End Date</span>
                          <span className="text-gray-600 text-sm">{event.endDate}</span>
                        </div>
                      </div>
                    )}

                    {event.timeRange && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 text-[#EA4A3E]" />
                        <div>
                          <span className="font-medium text-gray-900 block">Time</span>
                          <span className="text-gray-600 text-sm">{event.timeRange}</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-[#EA4A3E]" />
                      <div>
                        <span className="font-medium text-gray-900 block">Location</span>
                        <span className="text-gray-600 text-sm">{event.location}</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-gradient-to-br from-[#EA4A3E]/10 to-white rounded-2xl p-6 shadow-lg border border-[#EA4A3E]/20">
                  <h3 className="font-semibold text-gray-900 mb-4">Event Highlights</h3>

                  <div className="grid grid-cols-2 gap-4">

                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EA4A3E]">500+</div>
                      <div className="text-sm text-gray-600">Attendees</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EA4A3E]">20+</div>
                      <div className="text-sm text-gray-600">Speakers</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EA4A3E]">15+</div>
                      <div className="text-sm text-gray-600">Sessions</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EA4A3E]">4.9</div>
                      <div className="text-sm text-gray-600 flex items-center justify-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        Rating
                      </div>
                    </div>

                  </div>
                </div>

                {/* Contact Support */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Have questions about this event? Our team is here to help.
                  </p>

                  <Button
                    variant="outline"
                    className="w-full border-[#EA4A3E] text-[#EA4A3E] hover:bg-[#EA4A3E]/10"
                  >
                    Contact Support
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#EA4A3E] to-[#C23B32] text-white">
        <div className="container mx-auto px-4 text-center">
          
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't miss out on this incredible opportunity to learn, network, and grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
           <Link href={"/register"}>
            <Button className="bg-white text-[#EA4A3E] hover:bg-gray-200 px-8 py-3 font-semibold rounded-full cursor-pointer">
              Get Your Ticket Now
            </Button>
           
           </Link>

           <Link href={"/events"}>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#EA4A3E] px-8 py-3 font-semibold rounded-full cursor-pointer"
            >
              View More Events
            </Button>
           
           </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
