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

  // 🔥 POPUP STATE FOR REGISTRATION FORM
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

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Banner */}
      <section
        className="min-h-[60vh] bg-cover bg-center py-20 flex items-center relative"
        style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </section>

      {/* HERO */}
      <section className="bg-[#EA4A3E] text-white py-12">
        <div className="container max-w-3xl mx-auto px-4">
          <Badge className="bg-[#EA4A3E]/20 text-white border-white mb-4">
            {event.description}
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>

          <p className="text-xl text-white/90 mb-6">
            Experience one of Bengaluru’s most exciting competitive fitness events at the 2026 Bengaluru Fitness Festival.
          </p>

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
              <span>500+ Attendees Expected</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="container mx-auto px-14">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* LEFT COLUMN */}
            <div className="lg:col-span-2 space-y-12">
              <Image
                src={event.image}
                alt={event.title}
                width={900}
                height={500}
                className="rounded-2xl w-full shadow-lg"
              />

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About This Event
                </h2>

                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  {event.description}
                </p>

                {event.fullDescription && (
                  <div
                    className="prose prose-lg max-w-none text-gray-800 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: event.fullDescription }}
                  />
                )}
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-10 space-y-6">

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#EA4A3E]/20">

                  {/* PRICE */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-[#EA4A3E] mb-2">
                      {event.price}
                    </div>
                    <p className="text-gray-600">per participant</p>
                  </div>

                  {/* REGISTER NOW BUTTON → opens popup */}
                  <Button
                    onClick={() => setOpen(true)}
                    className="w-full bg-[#EA4A3E] hover:bg-[#D03F34] text-white py-4 text-lg font-semibold rounded-xl"
                  >
                    Register Now
                  </Button>

                  {/* POPUP FORM */}
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

                  </div>
                </div>

                {/* Highlights */}
                <div className="bg-gradient-to-br from-[#EA4A3E]/10 to-white rounded-2xl p-6 shadow-lg border border-[#EA4A3E]/20">
                  <h3 className="font-semibold text-gray-900 mb-4">Event Highlights</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EA4A3E]">500+</div>
                      <div className="text-sm text-gray-600">Athletes</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#EA4A3E]">20+</div>
                      <div className="text-sm text-gray-600">Competitions</div>
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
