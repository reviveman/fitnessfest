"use client";

import { Download, Handshake, Sparkles } from "lucide-react";

export default function OurPartners() {
  return (
    <main className=" mt-16 md:mt-24 min-h-screen bg-gray-50 p-6 md:p-12 lg:p-24 pt-28 md:pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Partners
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Together, We Build the Fitness Movement
          </p>
          <p className="mt-2 text-gray-700 max-w-3xl mx-auto">
            The Bengaluru Fitness Festival (BFF) is made possible with the
            support of visionary partners who share our mission of inspiring
            healthier, stronger, and more balanced lifestyles.
          </p>
        </header>

        {/* Presenting Partner */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm border border-gray-100 p-8 text-center">
          <h2 className="flex items-center justify-center text-2xl font-bold text-indigo-700 mb-4">
            <Sparkles className="h-6 w-6 mr-2 text-indigo-600" />
            Presenting Partner
          </h2>
          <div className="flex justify-center items-center h-32 bg-gray-100 rounded-lg">
            <span className="text-gray-400">✨ Logo Placeholder</span>
          </div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Our presenting partner leads the way in shaping Bengaluru Fitness
            Festival 2025. Their support helps us bring innovation, scale, and
            energy to the event.
          </p>
        </section>

        {/* Powered By */}
        <section className="mb-12 rounded-2xl bg-white shadow-sm border border-gray-100 p-8 text-center">
          <h2 className="flex items-center justify-center text-2xl font-bold text-indigo-700 mb-4">
            ⚡ Powered By
          </h2>
          <div className="flex justify-center items-center h-28 bg-gray-100 rounded-lg">
            <span className="text-gray-400">⚡ Logo Placeholder</span>
          </div>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            The brand powering our festival, fueling the energy and excitement
            across every session, competition, and showcase.
          </p>
        </section>

        {/* Logo Grid Section */}
        {[
          { title: "Associate Partners", icon: "🤝" },
          { title: "Nutrition & Wellness Partners", icon: "🥗" },
          { title: "Knowledge Partners", icon: "📚" },
          { title: "Media & Community Partners", icon: "📣" },
        ].map((section, idx) => (
          <section
            key={idx}
            className="mb-12 rounded-2xl bg-white shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
              {section.icon} {section.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((logo) => (
                <div
                  key={logo}
                  className="flex items-center justify-center h-24 bg-gray-100 rounded-lg"
                >
                  <span className="text-gray-400">Logo {logo}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Become a Partner */}
        <section className="mb-12 rounded-2xl bg-indigo-50 shadow-sm border border-indigo-100 p-8 text-center">
          <h2 className="flex items-center justify-center text-2xl font-bold text-indigo-800 mb-4">
            <Handshake className="h-6 w-6 mr-2 text-indigo-700" />
            Become a Partner
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            We believe partnerships create impact. As a BFF Partner, your brand
            will:
          </p>
          <ul className="text-gray-700 space-y-2 max-w-xl mx-auto text-left list-disc list-inside mb-6">
            <li>
              Connect with thousands of fitness enthusiasts, athletes, trainers,
              and industry professionals.
            </li>
            <li>
              Showcase products/services in a high-energy, interactive
              environment.
            </li>
            <li>
              Gain media visibility across print, digital, and social platforms.
            </li>
            <li>
              Be associated with Bengaluru’s fastest-growing fitness and
              wellness movement.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 transition"
            >
              <Download size={18} /> Download Sponsorship Brochure
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white border px-5 py-3 text-indigo-700 font-medium shadow-sm hover:bg-gray-100 transition"
            >
              Apply to Partner with Us
            </a>
          </div>
        </section>

        {/* Thank You */}
        <footer className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Thank You to Our 2025 Partners
          </p>
          <p className="mt-1 text-gray-700">
            We extend our gratitude to all sponsors, exhibitors, and
            collaborators who make the Bengaluru Fitness Festival possible.
            Together, we’re building a healthier future.
          </p>
        </footer>
      </div>
    </main>
  );
}
