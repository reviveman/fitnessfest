"use client";

import { useState } from "react";
import { events } from "@/data/events"; // Assuming events.js is in the same directory or adjust path
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function Schedule() {
  // Change initial selectedDate to match the format in events.js
  const [selectedDate, setSelectedDate] = useState("March 28, 2026");

  const filteredEvents = events.filter((e) => e.date === selectedDate);

  const router = useRouter();

  return (
   <section className="max-w-6xl mx-auto px-4 py-10 bg-gray-50">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h6 className="text-[#EA4A3E] text-sm font-semibold mb-2">
            SCHEDULE DETAILS
          </h6>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            INFORMATION OF EVENT SCHEDULE!
          </h3>
          <p className="text-gray-600">
            Stay on track with everything happening at the festival! From
            high-energy workout sessions and expert talks to fun challenges and
            wellness workshops — here’s your complete guide to what’s happening,
            when, and where.
          </p>
        </div>

        {/* Circles as Date Filters */}
{/* Circles as Date Filters */}
<div className="mt-10 flex justify-center items-center">
  <div className="relative flex md:inline-block">
    {/* Left Circle */}
    <div
      onClick={() => setSelectedDate("March 28, 2026")}
      className={clsx(
        "cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center z-10 transition-all duration-300",
        selectedDate === "March 28, 2026"
          ? "bg-[#EA4A3E] text-white shadow-lg"
          : "bg-gray-200 text-gray-800 hover:bg-[#55BCC1] hover:text-white"
      )}
    >
      <span className="text-sm sm:text-base md:text-lg font-bold">
        20TH DEC
      </span>
      <span
        className={clsx(
          "text-xs sm:text-sm font-semibold",
          selectedDate === "March 28, 2026" ? "text-white" : "text-[#EA4A3E]"
        )}
      >
        SATURDAY
      </span>
    </div>

    {/* Right Circle */}
    <div
      onClick={() => setSelectedDate("March 29, 2026")}
      className={clsx(
        `cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44
         rounded-full flex flex-col items-center justify-center shadow-lg z-20
         -ml-1 sm:-ml-1 md:ml-0 md:absolute md:left-[80%] md:top-0 transition-all duration-300`,
        selectedDate === "March 29, 2026"
          ? "bg-[#EA4A3E] text-white"
          : "bg-gray-200 text-gray-800 hover:bg-[#55BCC1] hover:text-white"
      )}
    >
      <span className="text-sm sm:text-base md:text-lg font-bold">
        28TH MARCH
      </span>
      <span
        className={clsx(
          "text-xs sm:text-sm font-semibold",
          selectedDate === "March 29, 2026" ? "text-white" : "text-[#EA4A3E]"
        )}
      >
        SUNDAY
      </span>
    </div>
  </div>
</div>

      </div>

{/* Schedule Items Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
  {filteredEvents.length > 0 ? (
    filteredEvents.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transform transition-all duration-300 flex flex-col"
      >
        {/* Event Image */}
        <div className="relative w-full h-40 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3 bg-[#EA4A3E] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            {item.timeRange}
          </div>
        </div>

        {/* Event Details */}
        <div className="flex flex-col flex-grow p-5 text-center">
          <h6 className="text-lg font-bold text-gray-900 mb-2">
            {item.title}
          </h6>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {item.description}
          </p>

          <div className="mt-auto">
            <Button
              className="w-full cursor-pointer bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] text-white font-semibold rounded-full px-6 py-2 transition-all duration-300 hover:shadow-lg hover:from-[#d63b30] hover:to-[#ff6339]"
              onClick={() => router.push(`/event/${item.id}`)}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center text-gray-500 col-span-1 lg:col-span-3 py-10">
      No events found for this date.
    </div>
  )}
</div>

    </section>
  );
}
