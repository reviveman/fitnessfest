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

  // PREMIUM REWARD STRUCTURE based on event type
  const getEventRewards = (eventTitle: string) => {
    const title = eventTitle.toLowerCase();
    
    if (title.includes("5k run") || title.includes("timed race")) {
      return {
        entryFee: "₹1,298",
        prizes: [
          { position: "1st", amount: "₹25,000", items: "Trophy + Gift Vouchers" },
          { position: "2nd", amount: "₹15,000", items: "Medal + Gift Vouchers" },
          { position: "3rd", amount: "₹10,000", items: "Medal + Gift Vouchers" }
        ],
        goodies: "T-shirt + Bib + Medal + Refreshments",
        notes: "Male & Female categories separately"
      };
    }
    
    if (title.includes("saree run")) {
      return {
        entryFee: "FREE",
        prizes: [
          { position: "Top 3", amount: "Premium Medals", items: "" },
        ],
        goodies: "Participation Certificate + Exclusive Photo Wall",
        notes: "Women Only Event"
      };
    }
    
    if (title.includes("functional fitness")) {
      return {
        entryFee: "₹1,499",
        prizes: [
          { position: "1st", amount: "₹50,000", items: "Trophy + Sponsor Kit" },
          { position: "2nd", amount: "₹30,000", items: "Medal + Kit" },
          { position: "3rd", amount: "₹20,000", items: "Medal + Kit" }
        ],
        goodies: "T-shirt + Medal + Energy Kit + Certificate",
        notes: "All finalists receive goodies"
      };
    }
    
    if (title.includes("strength endurance")) {
      return {
        entryFee: "₹1,299",
        prizes: [
          { position: "1st", amount: "₹30,000", items: "" },
          { position: "2nd", amount: "₹20,000", items: "" },
          { position: "3rd", amount: "₹10,000", items: "" }
        ],
        goodies: "Certificate + Medal",
        notes: ""
      };
    }
    
    if (title.includes("calisthenics")) {
      return {
        entryFee: "₹999",
        prizes: [
          { position: "1st", amount: "₹30,000", items: "Trophy" },
          { position: "2nd", amount: "₹20,000", items: "" },
          { position: "3rd", amount: "₹10,000", items: "" }
        ],
        goodies: "Certificate + Medal",
        notes: ""
      };
    }
    
    if (title.includes("powerlifting")) {
      return {
        entryFee: "₹1,799",
        prizes: [
          { position: "1st", amount: "₹75,000", items: "Trophy + Pro Gear Kit" },
          { position: "2nd", amount: "₹40,000", items: "Medal" },
          { position: "3rd", amount: "₹25,000", items: "Medal" }
        ],
        goodies: "T-shirt + Shaker + Medal + Nutrition Sachet Pack",
        notes: "King & Queen categories separately"
      };
    }
    
    if (title.includes("push-up") || title.includes("plank")) {
      return {
        entryFee: "₹699",
        prizes: [
          { position: "1st", amount: "₹15,000", items: "" },
          { position: "2nd", amount: "₹10,000", items: "" },
          { position: "3rd", amount: "₹5,000", items: "" }
        ],
        goodies: "Certificate + Gym Discount Vouchers",
        notes: ""
      };
    }
    
    if (title.includes("battle of gyms") || title.includes("team")) {
      return {
        entryFee: "₹4,999",
        prizes: [
          { position: "1st", amount: "₹1,00,000", items: "Championship Trophy + Media Coverage" },
          { position: "2nd", amount: "₹50,000", items: "Medal" },
          { position: "3rd", amount: "₹25,000", items: "Medal" }
        ],
        goodies: "Gym name on Main Stage LED Wall + Social Media Features",
        notes: "Per team (5-10 athletes)"
      };
    }
    
    // Default for other events
    return {
      entryFee: "₹1,000",
      prizes: [
        { position: "1st", amount: "₹20,000", items: "Trophy" },
        { position: "2nd", amount: "₹10,000", items: "Medal" },
        { position: "3rd", amount: "₹5,000", items: "Medal" }
      ],
      goodies: "Certificate + Event T-shirt",
      notes: ""
    };
  };

  const eventRewards = getEventRewards(event.title);

  // Calculate total prize pool
  const totalPrizePool = eventRewards.prizes.reduce((total, prize) => {
    const amount = parseInt(prize.amount.replace(/[₹,]/g, '')) || 0;
    return total + amount;
  }, 0);

  // Event detail cards
  const eventCards = [
    {
      id: 1,
      title: "Competition Format",
      content: event.fullDescription?.includes("Competition Format") 
        ? extractSection(event.fullDescription, "Competition Format", "Participation Rules") 
        : "High-intensity challenge with strict standards and certified judging.",
      icon: <Trophy className="w-6 h-6 text-[#EA4A3E]" />,
    },
    {
      id: 2,
      title: "Prize Structure",
      content: `Total prize pool: ₹${totalPrizePool.toLocaleString('en-IN')}. Top 3 winners receive cash prizes with additional awards for excellence.`,
      icon: <Award className="w-6 h-6 text-[#EA4A3E]" />,
    },
    {
      id: 3,
      title: "What's Included",
      content: eventRewards.goodies + ". All participants receive event certificates and professional amenities.",
      icon: <Shield className="w-6 h-6 text-[#EA4A3E]" />,
    },
    {
      id: 4,
      title: "Registration",
      content: `Entry fee: ${eventRewards.entryFee}. Limited slots available. Professional judging and safety measures ensured.`,
      icon: <Target className="w-6 h-6 text-[#EA4A3E]" />,
    },
  ];

  // Helper function to extract sections
  function extractSection(text: string, startKeyword: string, endKeyword: string): string {
    if (!text) return "";
    
    const startIndex = text.indexOf(startKeyword);
    if (startIndex === -1) return "";
    
    let endIndex = text.indexOf(endKeyword, startIndex);
    if (endIndex === -1) endIndex = text.length;
    
    const section = text.substring(startIndex, endIndex);
    return section.replace(/<[^>]*>/g, '').substring(0, 150) + '...';
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section
        className="min-h-[50vh] bg-cover bg-center py-16 flex items-center justify-center text-center relative"
        style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="mt-50 relative z-10 max-w-6xl mx-auto px-4">
          <Badge className="bg-white text-[#EA4A3E] border-none px-6 py-2 mb-4 text-base font-medium">
            Bengaluru Fitness Fest 2026
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {event.title}
          </h1>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Professional fitness competition with premium rewards and certified judging
          </p>
        </div>
      </section>

      {/* Event Info Bar */}
      <section className="bg-white border-b">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4 text-[#EA4A3E]" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4 text-[#EA4A3E]" />
                <span>{event.timeRange}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4 text-[#EA4A3E]" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-4 h-4 text-[#EA4A3E]" />
                <span>500+ Participants</span>
              </div>
            </div>
            
            <Button
              onClick={() => setOpen(true)}
              className="bg-[#EA4A3E] hover:bg-[#D03F34] text-white font-medium px-6 py-3"
            >
              Register Now - {eventRewards.entryFee}
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Image
                src={event.image}
                alt={event.title}
                width={800}
                height={400}
                className="rounded-xl w-full shadow-md"
              />

              {/* Premium Rewards Section - Classic Design */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="border-b pb-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Competition Fees & Rewards
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Premium structure for Bengaluru Fitness Fest 2026
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Entry Fee */}
                  <div className="border rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Entry Fee</h3>
                    <div className="text-3xl font-bold text-[#EA4A3E] mb-2">
                      {eventRewards.entryFee}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{eventRewards.notes}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900">All Participants Receive:</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {eventRewards.goodies.split('+').map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-[#EA4A3E] rounded-full mt-2"></div>
                            {item.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Prize Structure */}
                  <div className="border rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Prize Structure</h3>
                    
                    <div className="space-y-3">
                      {eventRewards.prizes.map((prize, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <div>
                            <span className="font-medium text-gray-900">{prize.position} Place</span>
                            {prize.items && (
                              <p className="text-xs text-gray-500 mt-1">{prize.items}</p>
                            )}
                          </div>
                          <div className="text-lg font-bold text-[#EA4A3E]">
                            {prize.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-900">Total Prize Pool</span>
                        <span className="text-xl font-bold text-[#EA4A3E]">
                          ₹{totalPrizePool.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Card Details Section */}
              <div className="space-y-6">
                <div className="border-b pb-3">
                  <h2 className="text-2xl font-bold text-gray-900">Competition Details</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eventCards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-white border rounded-lg p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-[#EA4A3E]/10 rounded">
                          {card.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Description */}
              <div id="full-description" className="bg-white rounded-xl shadow-md p-8">
                <div className="border-b pb-4 mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Competition Rules & Regulations
                  </h2>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 mb-6">
                    {event.description}
                  </p>

                  {event.fullDescription && (
                    <div
                      className="text-gray-800"
                      dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                {/* Registration Card */}
                <div className="bg-white border rounded-xl shadow-md p-6">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-[#EA4A3E] mb-2">
                      {eventRewards.entryFee}
                    </div>
                    <p className="text-gray-600">Entry Fee</p>
                  </div>

                  <Button
                    onClick={() => setOpen(true)}
                    className="w-full bg-[#EA4A3E] hover:bg-[#D03F34] text-white py-4 text-base font-medium mb-4"
                  >
                    Register Now
                  </Button>

                  <div className="text-center mb-6">
                    <p className="text-sm text-gray-500">
                      Limited slots available
                    </p>
                  </div>
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="max-w-[95vw] max-h-[95vh] w-full overflow-hidden p-0 border-0 bg-transparent">
    <div className="flex items-center justify-center min-h-screen p-4">
      <EventRegistrationForm closeForm={() => setOpen(false)} />
    </div>
  </DialogContent>
</Dialog>

                  <div className="space-y-4 mt-6 pt-6 border-t">
                    <h3 className="font-medium text-gray-900">Event Information</h3>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <Calendar className="w-4 h-4 text-[#EA4A3E]" />
                        <div>
                          <span className="text-sm font-medium text-gray-900">Date</span>
                          <p className="text-xs text-gray-600">{event.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <Clock className="w-4 h-4 text-[#EA4A3E]" />
                        <div>
                          <span className="text-sm font-medium text-gray-900">Time</span>
                          <p className="text-xs text-gray-600">{event.timeRange}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                        <MapPin className="w-4 h-4 text-[#EA4A3E]" />
                        <div>
                          <span className="text-sm font-medium text-gray-900">Venue</span>
                          <p className="text-xs text-gray-600">{event.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white border rounded-xl shadow-md p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Quick Stats</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Prize Pool</span>
                      <span className="font-bold text-[#EA4A3E]">
                        ₹{totalPrizePool.toLocaleString('en-IN')}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Minimum Age</span>
                      <span className="font-medium text-gray-900">18+</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Level</span>
                      <span className="font-medium text-gray-900">
                        {event.title.includes("Amateur") ? "Beginner" : "Professional"}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">Advancement</span>
                      <span className="font-medium text-gray-900">Top 10</span>
                    </div>
                  </div>
                </div>

                {/* Event Benefits */}
                <div className="bg-white border rounded-xl shadow-md p-6">
                  <h3 className="font-medium text-gray-900 mb-4">Event Benefits</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-700">Professional Certified Judging</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-700">On-site Medical Support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-700">Hydration Stations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-700">Professional Photography</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#EA4A3E] rounded-full mt-1.5"></div>
                      <span className="text-sm text-gray-700">Event Certificate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Compete?
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Bengaluru's premier fitness competition. Register now to secure your spot.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setOpen(true)}
              className="bg-[#EA4A3E] hover:bg-[#D03F34] text-white font-medium px-8 py-4"
              size="lg"
            >
              Register Now - {eventRewards.entryFee}
            </Button>
            
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-medium px-8 py-4"
              size="lg"
              onClick={() => {
                const element = document.getElementById('full-description');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Full Details
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded p-4">
              <div className="text-lg font-bold text-white">
                ₹{totalPrizePool.toLocaleString('en-IN')}+
              </div>
              <div className="text-gray-300 text-sm">Prize Pool</div>
            </div>
            <div className="bg-white/10 rounded p-4">
              <div className="text-lg font-bold text-white">500+</div>
              <div className="text-gray-300 text-sm">Athletes</div>
            </div>
            <div className="bg-white/10 rounded p-4">
              <div className="text-lg font-bold text-white">8+</div>
              <div className="text-gray-300 text-sm">Categories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}