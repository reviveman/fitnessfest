"use client";

import { Mail, Phone, HelpCircle, ShieldCheck, Users } from "lucide-react";

const team = [
  {
    name: "Name 1",
    role: "Support Manager",
    description:
      "Leads the support operations and ensures smooth coordination between visitors, exhibitors, and partners.",
    image: "/images/support1.jpg", // replace with actual image path
  },
  {
    name: "Name 2",
    role: "Registration & Ticketing Lead",
    description:
      "Handles online registrations, ticket queries, and entry management.",
    image: "/images/support2.jpg",
  },
  {
    name: "Name 3",
    role: "Exhibitor Relations Coordinator",
    description:
      "Works with brands, sponsors, and exhibitors for booth setup, logistics, and support.",
    image: "/images/support3.jpg",
  },
  {
    name: "Name 4",
    role: "Venue & On-Ground Support Lead",
    description:
      "Manages on-site helpdesks, signage, and ensures participants find their way easily.",
    image: "/images/support4.jpg",
  },
  {
    name: "Name 5",
    role: "Safety & Emergency Coordinator",
    description:
      "Coordinates with security, medical partners, and the organizing team to keep the festival safe.",
    image: "/images/support5.jpg",
  },
];

export default function SupportTeam() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12 lg:p-24 pt-28 md:pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Support Team
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Meet the passionate team behind the Bengaluru Fitness Festival.
          </p>
        </header>

        {/* Intro */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="flex items-center text-2xl font-bold text-indigo-700 mb-4">
            <Users className="h-6 w-6 mr-2 text-indigo-600" />
            Meet the People Behind the Festival
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Bengaluru Fitness Festival (BFF) is powered by a passionate
            Support Team dedicated to ensuring that your festival journey is
            smooth, safe, and memorable. From registration to on-ground
            guidance, our team is always ready to help.
          </p>
        </section>

        {/* Team Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
            👥 Our Support Team
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {/* Replace with <Image /> if using next/image */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600">
                    {member.role}
                  </p>
                  <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Support */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="flex items-center text-2xl font-bold text-indigo-700 mb-4">
            <HelpCircle className="h-6 w-6 mr-2 text-indigo-600" />
            How We Support You
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Registration & Ticketing: Seamless booking and entry support.</li>
            <li>On-Ground Help: Crew and helpdesks at key points in the venue.</li>
            <li>Exhibitor Assistance: Dedicated point of contact for smooth setups.</li>
            <li>
              Safety & Emergency: Quick response with medical and security partners.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="rounded-2xl bg-indigo-50 p-6 md:p-10 text-center shadow-sm">
          <h2 className="text-xl font-bold text-indigo-800 mb-3">📞 Get in Touch</h2>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2 text-indigo-600" />
              <span>Email: [Insert Email Address]</span>
            </p>
            <p className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2 text-indigo-600" />
              <span>Phone: [Insert Phone Number]</span>
            </p>
            <p className="text-gray-700">
              🏢 On-Site Helpdesks: Available at entry gates and main activity zones.
            </p>
            <p className="text-gray-700">
              📱 Look for <span className="font-semibold">“BFF Support”</span>{" "}
              badges for quick help.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
