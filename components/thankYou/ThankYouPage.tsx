"use client";

import React, { useEffect } from "react";
import Link from "next/link";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const validTypes = ["visitor", "exhibitor", "sponsor"];

const titleMap: Record<string, string> = {
  visitor: "Visitor",
  exhibitor: "Exhibitor",
  sponsor: "Sponsor",
};

const ThankYouPage = ({ type }: { type: string }) => {
  const heading = titleMap[type] || "Registration";

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag && type === "exhibitor") {
      window.gtag("event", "conversion_event_submit_lead_form_1");
    }
  }, [type]);

  if (!type || !validTypes.includes(type)) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-2 text-3xl font-bold text-red-600">
          Invalid Registration Type
        </h1>
        <p className="mb-4 text-gray-700">
          The registration type provided in the URL is not recognized.
        </p>
        <Link
          href="/register"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Go back to registration
        </Link>
      </div>
    );
  }

  const messages: Record<
    string,
    { title: string; bold: string; description: string; date: string }
  > = {
    visitor: {
      title: "Thank You For Registering as a Visitor!",
      bold: "You are now part of the Bengaluru Fitness Festival 2026 community",
      description:
        "We look forward to welcoming you to explore fitness, health, and wellness experiences.",
      date: "21 - 22 February 2026· KARNATAKA TRADE PROMOTION ORGANISATION Centre, Bengaluru",
    },
    exhibitor: {
      title: "Thank You For Registering as an Exhibitor!",
      bold: "You are now part of the Bengaluru Fitness Festival 2026 community",
      description: "Our team will contact you soon with exhibition details.",
      date: "21 - 22 February 2026· KARNATAKA TRADE PROMOTION ORGANISATION Centre, Bengaluru",
    },
    sponsor: {
      title: "Thank You For Registering as a Sponsor!",
      bold: "You are now part of the Bengaluru Fitness Festival 2026 community",
      description: "Our team will contact you soon with sponsorship details.",
      date: "21 - 22 February 2026· KARNATAKA TRADE PROMOTION ORGANISATION Centre, Bengaluru",
    },
  };

  const { title, bold, description, date } = messages[type];

  return (
    <div className="mt-8 flex min-h-[60vh] flex-col items-center justify-start bg-white px-4 py-12 text-center">
      {/* Header Card */}
      <div className="mt-8 w-full max-w-2xl rounded-t-lg bg-[#EA4A3E] py-4 text-2xl font-bold text-white">
        {heading}
      </div>

      {/* Messages */}
      <h3 className="mb-2 pt-10 text-2xl font-bold text-gray-900">{title}</h3>
      <p className="mb-1 text-lg font-semibold text-gray-800">{bold}</p>
      <p className="text-gray-600">{description}</p>
      <p className="mt-2 text-sm text-gray-500">{date}</p>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <Link
          href="/participants"
          className="flex items-center gap-2 font-medium text-[#172554]"
        >
          <div className="rounded-full bg-cyan-100 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 text-cyan-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          See Who's Participating
        </Link>

        <Link
          href="/conference/speakers"
          className="flex items-center gap-2 font-medium text-[#172554]"
        >
          <div className="rounded-full bg-cyan-100 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 text-cyan-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          View All Speakers
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
