"use client";

import { useState } from "react";
import { events } from "@/data/events";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState("December 20, 2025");
  const filteredEvents = events.filter((e) => e.date === selectedDate);
  const router = useRouter();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 bg-gray-50">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
        <div>
          <h6 className="text-[#EA4A3E] text-sm font-semibold mb-2">
            SCHEDULE DETAILS
          </h6>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            INFORMATION OF EVENT SCHEDULE!
          </h3>
          <p className="text-gray-600 text-sm md:text-base">
            Stay on track with everything happening at the festival! From
            high-energy workout sessions and expert talks to fun challenges and
            wellness workshops — here’s your complete guide to what’s happening,
            when, and where.
          </p>
        </div>

 {/* Circles as Date Filters */}
        <div className="mt-10 flex justify-center items-center">
          <div className="relative flex md:inline-block">
            {/* Left Circle */}
            <div
              // Change onClick date format to match events.js
              onClick={() => setSelectedDate("November 22, 2025")}
              className={clsx(
                "cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center z-10 transition-all duration-300",
                selectedDate === "November 22, 2025"
                  ? "bg-[#EA4A3E] text-white shadow-lg"
                  : "bg-gray-200 text-gray-800"
              )}
            >
              <span className="text-sm sm:text-base md:text-lg font-bold">
                20 DEC
              </span>
              <span
                className={clsx(
                  "text-xs sm:text-sm font-semibold",
                  selectedDate === "November 22, 2025"
                    ? "text-white"
                    : "text-[#EA4A3E]"
                )}
              >
                SATURDAY
              </span>
            </div>

            {/* Right Circle */}
            <div
              // Change onClick date format to match events.js
              onClick={() => setSelectedDate("December 20, 2025")}
              className={clsx(
                `cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-44 md:h-44
                 rounded-full flex flex-col items-center justify-center shadow-lg z-20
                 -ml-1 sm:-ml-1 md:ml-0 md:absolute md:left-[80%] md:top-0 transition-all duration-300`,
                selectedDate === "December 20, 2025"
                  ? " bg-[#EA4A3E] text-white"
                  : "bg-gray-200 text-gray-800"
              )}
            >
              <span className="text-sm sm:text-base md:text-lg font-bold">
                21 DEC
              </span>
              <span
                className={clsx(
                  "text-xs sm:text-sm font-semibold",
                  selectedDate === "December 20, 2025"
                    ? "text-white"
                    : "text-[#EA4A3E]"
                )}
              >
                SUNDAY
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Items */}
      <div className="space-y-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Mobile layout */}
              <div className="grid grid-cols-1 lg:hidden">
                {/* Time & Location */}
                <div className="bg-[#EA4A3E] text-white p-4 sm:p-6 text-center flex flex-col justify-center">
                  <h6 className="text-xs sm:text-sm mb-1 sm:mb-2">
                    {item.timeRange}
                  </h6>
                  <h6 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h6>
                  <p className="text-xs sm:text-sm mt-2">
                    Location: {item.location}
                  </p>
                </div>

                {/* Description */}
                <div className="p-4 sm:p-6">
                  <h5 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full"
                  />
                </div>

                {/* Button */}
                <div className="flex justify-end px-4 sm:px-6 pb-4">
                  <Button
                    variant="outline"
                    className="border-[#EA4A3E] text-pink-600 hover:bg-orange-500 hover:text-white text-sm sm:text-base"
                    onClick={() => router.push(`/event/${item.id}`)}
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:grid lg:grid-cols-[20%_55%_25%]">
                {/* Time & Location */}
                <div className="bg-[#EA4A3E] text-white p-6 text-center flex flex-col justify-center">
                  <h6 className="text-sm mb-2">{item.timeRange}</h6>
                  <h6 className="text-lg font-semibold">{item.title}</h6>
                  <p className="text-sm mt-2">Location: {item.location}</p>
                </div>

                {/* Description */}
                <div className="p-6 flex flex-col justify-center">
                  <h5 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-base">{item.description}</p>
                </div>

                {/* Image + Button */}
                <div className="p-6 flex flex-col items-center justify-center space-y-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded-full"
                  />
                  <Button
                    variant="outline"
                    className="border-[#EA4A3E] text-pink-600 hover:bg-orange-500 hover:text-white text-base"
                    onClick={() => router.push(`/event/${item.id}`)}
                  >
                    LEARN MORE
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            No events found for this date.
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="flex justify-center mt-10">
        <Button className="bg-[#EA4A3E] hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl text-sm md:text-base">
          VIEW MORE DETAILS
        </Button>
      </div>
    </section>
  );
}
