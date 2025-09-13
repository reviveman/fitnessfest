"use client";

import { Building2, Target, Users, Star, Mail, Phone, Globe } from "lucide-react";

export default function AboutOrganizer() {
  return (
    <main className=" mt-16 md:mt-24 min-h-screen bg-gray-50 p-6 md:p-12 lg:p-24 pt-28 md:pt-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            About the Organizer
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Get to know the visionaries behind the Bengaluru Fitness Festival.
          </p>
        </header>

        {/* Who We Are */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="flex items-center text-2xl font-bold text-indigo-700 mb-4">
            <Users className="h-6 w-6 mr-2 text-indigo-600" />
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Bengaluru Fitness Festival (BFF) is organized by{" "}
            <span className="font-semibold">Maxx Business Media Pvt. Ltd.</span>,
            a leading trade fair organizer and publisher of specialized B2B
            magazines in India. With years of experience in curating successful
            exhibitions, summits, and industry-led events, we have built a strong
            reputation for bringing communities and businesses together on one
            platform.
          </p>
        </section>

        {/* Our Experience */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="flex items-center text-2xl font-bold text-indigo-700 mb-4">
            <Star className="h-6 w-6 mr-2 text-indigo-600" />
            Our Experience
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Organizing world-class exhibitions and conferences across sectors
              like manufacturing, machinery, real estate, rubber, and fitness.
            </li>
            <li>
              Publishing industry-focused magazines that connect businesses with
              their target audiences.
            </li>
            <li>
              Creating knowledge-sharing platforms where experts, innovators,
              and brands collaborate for growth.
            </li>
          </ul>
          <p className="mt-3 text-gray-700">
            Our portfolio includes international trade shows, summits, award
            nights, and niche industry networking events that have attracted
            participants from India and abroad.
          </p>
        </section>

        {/* Why We Created */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="flex items-center text-2xl font-bold text-indigo-700 mb-4">
            <Target className="h-6 w-6 mr-2 text-indigo-600" />
            Why We Created the Bengaluru Fitness Festival
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We believe fitness is not just a trend—it’s a lifestyle movement.
            Bengaluru, being one of India’s most dynamic and health-conscious
            cities, deserves a dedicated festival that unites:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Fitness enthusiasts</li>
            <li>Trainers and coaches</li>
            <li>Nutrition experts</li>
            <li>Wellness brands</li>
            <li>Sports and fitness technology companies</li>
          </ul>
          <p className="mt-3 text-gray-700">
            Through this festival, we aim to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Promote a healthier, active lifestyle.</li>
            <li>
              Provide a platform for brands and professionals to showcase their
              offerings.
            </li>
            <li>
              Build a community-driven experience that inspires, educates, and
              motivates people to embrace fitness.
            </li>
          </ul>
        </section>

        {/* Vision */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="flex items-center text-2xl font-bold text-indigo-700 mb-4">
            <Building2 className="h-6 w-6 mr-2 text-indigo-600" />
            Our Vision for BFF
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              To become India’s largest fitness and wellness festival, hosted
              annually in Bengaluru.
            </li>
            <li>
              To create a 360° platform that blends physical activities, expert
              talks, live demos, and brand showcases.
            </li>
            <li>
              To bridge the gap between fitness professionals, businesses, and
              the community at large.
            </li>
          </ul>
        </section>

        {/* Commitment */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm p-6 md:p-10 border border-gray-100">
          <h2 className="flex items-center text-2xl font-bold text-indigo-700 mb-4">
            <Star className="h-6 w-6 mr-2 text-indigo-600" />
            Organizer’s Commitment
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Professional expertise in event management.</li>
            <li>A strong network across industries.</li>
            <li>
              A commitment to delivering high-quality, safe, and impactful
              experiences.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="rounded-2xl bg-indigo-50 p-6 md:p-10 text-center shadow-sm">
          <h2 className="text-xl font-bold text-indigo-800 mb-3">
            Connect With Us
          </h2>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2 text-indigo-600" />
              <span>Email: pad@maxxmedia.in</span>
            </p>
            <p className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2 text-indigo-600" />
              <span>Phone: +91 91483 19993</span>
            </p>
            <p className="flex items-center justify-center">
              <Globe className="h-5 w-5 mr-2 text-indigo-600" />
              <span>Website: www.maxxmedia.in</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
