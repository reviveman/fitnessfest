"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Target,
  Award,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import EventRegistrationForm from "@/components/EventRegistrationForm";
import { getEventById } from "@/data/events";

type Props = {
  params: Promise<{ id: string }>;
};

export default function EventDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const event = getEventById(resolvedParams.id);

  const [open, setOpen] = useState(false);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <Link
            href="/"
            className="text-[#EA4A3E] hover:text-[#D03F34] flex items-center gap-2 mb-8 font-medium"
          >
            <ArrowLeft size={20} />
            Back to events
          </Link>

          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Event not found
            </h1>
            <p className="text-gray-600 mb-8">
              The event you're looking for doesn't exist or has been removed.
            </p>

            <Button asChild className="bg-[#EA4A3E] hover:bg-[#D03F34] text-white">
              <Link href="/">Browse All Events</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Sample data for the 4 cards (you can customize this)
  const eventStats = [
    {
      id: 1,
      title: "Competition Level",
      description: "Open to all fitness levels",
      icon: <Trophy className="w-8 h-8 text-[#EA4A3E]" />,
      value: "All Levels",
      color: "bg-[#EA4A3E]/10",
    },
    {
      id: 2,
      title: "Target Participants",
      description: "Expected number of athletes",
      icon: <Target className="w-8 h-8 text-[#EA4A3E]" />,
      value: "500+",
      color: "bg-[#EA4A3E]/10",
    },
    {
      id: 3,
      title: "Awards & Prizes",
      description: "Trophies, medals & certificates",
      icon: <Award className="w-8 h-8 text-[#EA4A3E]" />,
      value: "Multiple",
      color: "bg-[#EA4A3E]/10",
    },
    {
      id: 4,
      title: "Safety Standards",
      description: "Certified judges & medical team",
      icon: <Shield className="w-8 h-8 text-[#EA4A3E]" />,
      value: "High",
      color: "bg-[#EA4A3E]/10",
    },
  ];

  // Extract key information from the event for the cards
  const eventCards = [
    {
      id: 1,
      title: "Competition Format",
      content: event.fullDescription?.includes("Competition Format") 
        ? extractSection(event.fullDescription, "Competition Format", "Participation Rules") 
        : "High-intensity functional fitness challenge with timed circuits and standardized movements.",
      icon: "🏆",
      color: "border-l-4 border-[#EA4A3E]",
    },
    {
      id: 2,
      title: "Eligibility & Rules",
      content: event.fullDescription?.includes("Eligibility") 
        ? extractSection(event.fullDescription, "Eligibility", "Equipment Rules") 
        : "Open to men and women 18+. Strict form standards apply with penalties for violations.",
      icon: "📋",
      color: "border-l-4 border-[#EA4A3E]",
    },
    {
      id: 3,
      title: "Scoring System",
      content: event.fullDescription?.includes("Scoring") 
        ? extractSection(event.fullDescription, "Scoring", "Winning") 
        : "Time-based scoring with penalties. Top performers advance to finals based on fastest completion times.",
      icon: "⚡",
      color: "border-l-4 border-[#EA4A3E]",
    },
    {
      id: 4,
      title: "Equipment & Gear",
      content: event.fullDescription?.includes("Equipment") 
        ? extractSection(event.fullDescription, "Equipment", "Safety") 
        : "Sports shoes mandatory. Gloves, knee sleeves, wrist wraps optional. No external support gear.",
      icon: "🛡️",
      color: "border-l-4 border-[#EA4A3E]",
    },
  ];

  // Helper function to extract sections from fullDescription
  function extractSection(text: string, startKeyword: string, endKeyword: string): string {
    if (!text) return "";
    
    const startIndex = text.indexOf(startKeyword);
    if (startIndex === -1) return "";
    
    let endIndex = text.indexOf(endKeyword, startIndex);
    if (endIndex === -1) endIndex = text.length;
    
    const section = text.substring(startIndex, endIndex);
    // Clean HTML tags and limit length
    return section.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section
        className="min-h-[60vh] bg-cover bg-center py-20 flex items-center justify-center text-center relative"
        style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1
          className="
            mt-45 text-4xl md:text-6xl font-extrabold text-white max-w-4xl mx-auto relative z-10
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]
            tracking-wide animate-highlight-title
          "
        >
          {event.title}
        </h1>
      </section>

      {/* HERO */}
      <section className="bg-[#EA4A3E] text-white py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <Badge className="bg-[#EA4A3E]/20 text-white border-white mb-4">
            {event.description}
          </Badge>

          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{event.timeRange}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{event.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>500+ Participants Expected</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4-CARD STATS SECTION */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Competition Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventStats.map((stat) => (
              <div
                key={stat.id}
                className={`${stat.color} rounded-2xl p-6 shadow-lg border border-[#EA4A3E]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {stat.title}
                    </h3>
                    <div className="text-3xl font-bold text-[#EA4A3E] mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WITH 4-CARD LAYOUT */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN - Event Image and Cards */}
            <div className="lg:col-span-2 space-y-12">
              <Image
                src={event.image}
                alt={event.title}
                width={900}
                height={500}
                className="rounded-2xl w-full shadow-lg"
              />

              {/* 4 CARD DETAILS SECTION */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Competition Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eventCards.map((card) => (
                    <div
                      key={card.id}
                      className={`${card.color} bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl">{card.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {card.content}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <Button
                          variant="outline"
                          className="text-[#EA4A3E] border-[#EA4A3E] hover:bg-[#EA4A3E] hover:text-white w-full"
                          onClick={() => {
                            // Scroll to the relevant section in full description
                            const element = document.getElementById('full-description');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FULL DESCRIPTION */}
              <div id="full-description" className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Complete Competition Rules & Regulations
                </h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {event.description}
                </p>

                {/* FULL DESCRIPTION RENDER */}
                {event.fullDescription && (
                  <div
                    className="
                      prose prose-lg max-w-none text-gray-800 whitespace-pre-line
                      [&_h1]:text-[#EA4A3E]
                      [&_h2]:text-[#EA4A3E]
                      [&_h3]:text-[#EA4A3E]
                      [&_h4]:text-[#EA4A3E]
                      [&_strong]:text-[#EA4A3E]
                      [&_em]:text-[#EA4A3E]
                      [&_ul>li]:marker:text-[#EA4A3E]
                      [&_ol>li]:marker:text-[#EA4A3E]
                      [&_li>strong]:text-[#EA4A3E]
                      [&_a]:text-[#EA4A3E]
                      [&_a:hover]:underline
                    "
                    dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                  />
                )}
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-10 space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#EA4A3E]/20">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-[#EA4A3E] mb-2">
                      {event.price}
                    </div>
                    <p className="text-gray-600">per participant</p>
                  </div>

                  <Button
                    onClick={() => setOpen(true)}
                    className="w-full bg-[#EA4A3E] hover:bg-[#D03F34] text-white py-4 text-lg font-semibold rounded-xl mb-4"
                  >
                    Register Now
                  </Button>

                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-500">
                      Limited slots available. Register early to secure your spot!
                    </p>
                  </div>

                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="bg-[#0f172a] text-white max-h-[90vh] overflow-y-auto border border-[#EA4A3E]">
                      <EventRegistrationForm closeForm={() => setOpen(false)} />
                    </DialogContent>
                  </Dialog>

                  <div className="space-y-4 mt-6">
                    <h3 className="font-semibold text-gray-900 text-lg">Event Info</h3>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-[#EA4A3E]" />
                      <div>
                        <span className="font-medium text-gray-900 block">Date</span>
                        <span className="text-gray-600 text-sm">{event.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-5 h-5 text-[#EA4A3E]" />
                      <div>
                        <span className="font-medium text-gray-900 block">Time</span>
                        <span className="text-gray-600 text-sm">{event.timeRange}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-[#EA4A3E]" />
                      <div>
                        <span className="font-medium text-gray-900 block">Location</span>
                        <span className="text-gray-600 text-sm">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Users className="w-5 h-5 text-[#EA4A3E]" />
                      <div>
                        <span className="font-medium text-gray-900 block">Category</span>
                        <span className="text-gray-600 text-sm">
                          {event.title.includes("Men") || event.title.includes("Women") 
                            ? "Gender Specific" 
                            : "Open Category"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Highlights */}
                <div className="bg-gradient-to-br from-[#EA4A3E]/10 to-white rounded-2xl p-6 shadow-lg border border-[#EA4A3E]/20">
                  <h3 className="font-semibold text-gray-900 mb-4">What You Get</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full"></div>
                      <span className="text-gray-700">Professional Judging</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full"></div>
                      <span className="text-gray-700">Certified Medical Support</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full"></div>
                      <span className="text-gray-700">Hydration Stations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full"></div>
                      <span className="text-gray-700">Warm-up Zone Access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full"></div>
                      <span className="text-gray-700">Event Certificate</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Facts */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Facts</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-[#EA4A3E]">18+</div>
                      <div className="text-xs text-gray-600">Minimum Age</div>
                    </div>
                    
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-[#EA4A3E]">RAW</div>
                      <div className="text-xs text-gray-600">Competition Type</div>
                    </div>
                    
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-[#EA4A3E]">Top 10</div>
                      <div className="text-xs text-gray-600">Advance to Finals</div>
                    </div>
                    
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-[#EA4A3E]">5 min</div>
                      <div className="text-xs text-gray-600">Briefing Required</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}