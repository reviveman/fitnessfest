"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { awardCategories } from "@/data/awards"

export default function AwardsPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white pt-32 md:pt-40">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src="/images/eventum-img1.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 md:scale-100"
        />

        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 backdrop-blur-[2px]" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
            Bengaluru Fitness <br />
            <span className="text-[#EA4A3E]">Wellness Awards 2026</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed opacity-90">
            Celebrate excellence and honor leaders shaping the future of fitness & wellness.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/register">
              <button className="px-8 py-3 rounded-full bg-[#EA4A3E] hover:bg-red-600 text-white font-semibold transition-all shadow-xl hover:shadow-[#EA4A3E]/40">
                Nominate Now
              </button>
            </Link>

            <Link href="/awards">
              <button className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition-all shadow-xl">
                Vote Now
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* ⭐ PARTICIPATE & CATEGORY SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-20">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-900 mb-6">
            Join Our Awards
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of celebrating excellence. Submit your nomination and shine on stage.
          </p>
        </div>

        {/* Award Categories */}
        <div className="space-y-12">

          {/* Title Hover Underline */}
          <div className="text-center group">
            <h3 className="text-3xl font-bold text-[#EA4A3E] mb-3">
              Award Categories
            </h3>

            <div className="w-24 h-1 bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] mx-auto rounded-full 
              opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300 origin-center" />
          </div>


          {/* CATEGORY CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {awardCategories.map((category) => (
              <Link
                key={category.id}
                href={`/awards/${category.slug}`}
                className="group block bg-white shadow-lg border border-gray-200 overflow-hidden 
                  rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 text-white drop-shadow">
                    <h4 className="text-xl font-bold">{category.title}</h4>
                    <span className="text-sm opacity-80">{category.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-4">
                  <p className="text-gray-700 text-sm line-clamp-3">
                    {category.shortDescription}
                  </p>

                  <div className="flex justify-between items-center text-sm text-gray-600 font-medium">
                    <span>Nominees</span>
                    <span className="bg-[#EA4A3E] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {category.nominees.length}
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <Button className="w-1/2 bg-[#EA4A3E] text-white font-medium rounded-md hover:bg-red-600 transition-all shadow-sm cursor-pointer">
                      Apply
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </main>
  )
}

