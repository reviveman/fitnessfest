"use client";
import React from "react";

export default function CompetitionTermsPage() {
  return (
    <div className="mt-50 max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        TERMS & CONDITIONS OF PARTICIPATION
      </h1>
      <p className="text-gray-600 mb-6">
        (For All Competitions at Bengaluru Fitness Fest 2026)
      </p>

      <div className="space-y-6 text-gray-800 leading-relaxed">
        <p>
          By registering for any competition at Bengaluru Fitness Fest 2026, you
          acknowledge, accept, and agree to the following:
        </p>

        {/* Section 1 */}
        <h2 className="font-semibold text-lg">1. Eligibility & Participation</h2>
        <ul className="list-disc ml-6">
          <li>Participation is open to individuals who meet the competition criteria.</li>
          <li>Participants must provide accurate registration details.</li>
          <li>Registrations are non-refundable, non-transferable, and final.</li>
        </ul>

        {/* Section 2 */}
        <h2 className="font-semibold text-lg">2. Event Rules</h2>
        <ul className="list-disc ml-6">
          <li>Participants must follow all rules and instructions by officials.</li>
          <li>Judges’ decisions are final and binding.</li>
          <li>Misconduct or cheating results in disqualification.</li>
          <li>Report to competition area 30 minutes before scheduled time.</li>
          <li>Late reporting leads to automatic disqualification.</li>
        </ul>

        {/* Section 3 */}
        <h2 className="font-semibold text-lg">3. Safety & Discipline</h2>
        <ul className="list-disc ml-6">
          <li>Participants must maintain discipline and follow safety protocols.</li>
          <li>Use of drugs, alcohol, or intoxicants is strictly prohibited.</li>
          <li>Organizers are not responsible for personal belongings.</li>
          <li>Only approved equipment may be used.</li>
        </ul>

        {/* Section 4 */}
        <h2 className="font-semibold text-lg">4. Photography, Filming & Media</h2>
        <p>
          By participating, you grant Bengaluru Fitness Fest rights to use photos/videos
          for promotional and marketing purposes without compensation.
        </p>

        {/* Section 5 */}
        <h2 className="font-semibold text-lg">5. Organizer Rights</h2>
        <ul className="list-disc ml-6">
          <li>Modify schedules, formats, or timing.</li>
          <li>Reject entries without explanation.</li>
          <li>Remove participants violating rules.</li>
          <li>Cancel or postpone event due to unforeseen reasons.</li>
        </ul>
        <p>No refunds will be provided in case of cancellation/postponement.</p>

        {/* Medical & Waiver Declaration */}
        <h2 className="text-2xl font-bold mt-10">MEDICAL & WAIVER DECLARATION</h2>

        <h3 className="font-semibold text-lg">1. Health & Fitness Declaration</h3>
        <ul className="list-disc ml-6">
          <li>I certify I am physically and mentally fit to participate.</li>
          <li>I am medically cleared for high-intensity physical activity.</li>
          <li>I understand the physical demands of fitness competitions.</li>
        </ul>

        <h3 className="font-semibold text-lg">2. Assumption of Risk</h3>
        <p>Participants acknowledge risks such as injuries, falls, or medical emergencies.</p>

        <h3 className="font-semibold text-lg">3. Liability Waiver</h3>
        <p>
          You release Bengaluru Fitness Fest 2026, Maxx Business Media Pvt. Ltd.,
          partners, sponsors, volunteers, and judges from all liability.
        </p>

        <h3 className="font-semibold text-lg">4. Emergency Consent</h3>
        <p>You authorize emergency medical assistance and take full responsibility.</p>

        <h3 className="font-semibold text-lg">5. Conduct & Compliance</h3>
        <p>You agree to follow all rules and stop participation if instructed.</p>

        <h3 className="font-semibold text-lg">6. Personal Data Consent</h3>
        <p>Your data may be used for event operations and communication.</p>

        <h3 className="font-semibold text-lg">7. Final Declaration</h3>
        <p>All information provided is true and binding without physical signature.</p>
      </div>
    </div>
  );
}
