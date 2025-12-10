"use client";
import React from "react";

export default function FiveKRunTermsPage() {
  return (
    <div className="mt-50 max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">5K RUN – TERMS & CONDITIONS</h1>

      <div className="space-y-6 text-gray-800 leading-relaxed">

        <h2 className="font-semibold text-lg">1. Eligibility</h2>
        <ul className="list-disc ml-6">
          <li>Participants must be 18+ on event date.</li>
          <li>Under 18 must be accompanied by a guardian.</li>
          <li>Accurate details in registration are mandatory.</li>
        </ul>

        <h2 className="font-semibold text-lg">2. Registration & Fees</h2>
        <ul className="list-disc ml-6">
          <li>Registration fee: ₹1,298 (Inclusive of GST).</li>
          <li>Fee is non-refundable, non-transferable.</li>
          <li>Registration confirmed only after payment.</li>
        </ul>

        <h2 className="font-semibold text-lg">3. Reporting & Timing</h2>
        <ul className="list-disc ml-6">
          <li>Reporting Time: 6:00 AM</li>
          <li>Run Start Time: 6:30 AM</li>
          <li>Participants must follow official route instructions.</li>
        </ul>

        <h2 className="font-semibold text-lg">4. Participant Conduct</h2>
        <ul className="list-disc ml-6">
          <li>Run responsibly without obstructing others.</li>
          <li>Unsafe behavior may result in disqualification.</li>
        </ul>

        <h2 className="font-semibold text-lg">5. Bibs & Timing Chips</h2>
        <ul className="list-disc ml-6">
          <li>Bibs must be worn visibly at all times.</li>
          <li>Lost bibs will not be reissued.</li>
        </ul>

        <h2 className="font-semibold text-lg">6. Event Rules</h2>
        <ul className="list-disc ml-6">
          <li>No motorized assistance, cycles, pets, or unregistered runners.</li>
          <li>Earphones discouraged for safety.</li>
          <li>Organizer’s decision is final.</li>
        </ul>

        <h2 className="font-semibold text-lg">7. Event Cancellation / Changes</h2>
        <p>No refunds in case of postponement/cancellation due to unforeseen events.</p>

        <h2 className="font-semibold text-lg">8. Photography & Media</h2>
        <p>
          Participants grant full rights to use event photos/videos for marketing without compensation.
        </p>

        {/* Medical Declaration */}
        <h2 className="text-2xl font-bold mt-10">MEDICAL & LIABILITY WAIVER</h2>

        <h3 className="font-semibold text-lg">1. Medical Fitness</h3>
        <p>I am physically fit and capable of participating in a 5K run.</p>

        <h3 className="font-semibold text-lg">2. Assumption of Risks</h3>
        <p>Includes dehydration, falls, injuries, cardiac issues, collisions.</p>

        <h3 className="font-semibold text-lg">3. Waiver of Liability</h3>
        <p>Organizers are not responsible for injury, illness, death, or property loss.</p>

        <h3 className="font-semibold text-lg">4. Emergency Medical Consent</h3>
        <p>I authorize emergency medical treatment and accept expenses.</p>

        <h3 className="font-semibold text-lg">5. Compliance</h3>
        <p>I will follow all rules and safety instructions.</p>

        <h3 className="font-semibold text-lg">6. Final Declaration</h3>
        <p>I confirm all information is true and I participate voluntarily.</p>
      </div>
    </div>
  );
}
