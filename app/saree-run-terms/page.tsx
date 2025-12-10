"use client";
import React from "react";

export default function SareeRunTermsPage() {
  return (
    <div className="mt-50 max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">SAREE RUN – TERMS & CONDITIONS</h1>

      <div className="space-y-6 text-gray-800 leading-relaxed">

        <h2 className="font-semibold text-lg">1. Eligibility</h2>
        <ul className="list-disc ml-6">
          <li>Open to women of all ages.</li>
          <li>Under 18 must be accompanied by a guardian.</li>
          <li>Participants must wear a saree.</li>
        </ul>

        <h2 className="font-semibold text-lg">2. Registration</h2>
        <ul className="list-disc ml-6">
          <li>Participation is FREE but registration is mandatory.</li>
          <li>Accurate details are required.</li>
          <li>Duplicate or incomplete registrations may be rejected.</li>
        </ul>

        <h2 className="font-semibold text-lg">3. Reporting & Run Details</h2>
        <p>Reporting time will be communicated by organizers.</p>

        <h2 className="font-semibold text-lg">4. Event Rules</h2>
        <ul className="list-disc ml-6">
          <li>Participants must run/walk safely.</li>
          <li>Saree must be worn securely.</li>
          <li>No pets, bicycles, or unregistered persons allowed.</li>
        </ul>

        <h2 className="font-semibold text-lg">5. Safety & Conduct</h2>
        <p>Unsafe behavior may lead to removal from the event.</p>

        <h2 className="font-semibold text-lg">6. Organizer’s Rights</h2>
        <p>Organizers may change route, timing, or cancel the event if required.</p>

        <h2 className="font-semibold text-lg">7. Media & Promotion</h2>
        <p>Participants allow use of photos/videos for promotions.</p>

        <h2 className="font-semibold text-lg">8. Personal Belongings</h2>
        <p>Organizers are not responsible for personal item loss or damage.</p>

        {/* Medical Declaration */}
        <h2 className="text-2xl font-bold mt-10">MEDICAL & LIABILITY WAIVER</h2>

        <h3 className="font-semibold text-lg">1. Medical Fitness</h3>
        <p>I am physically fit to participate in the Saree Run.</p>

        <h3 className="font-semibold text-lg">2. Understanding of Risks</h3>
        <p>Includes tripping, falls, dehydration, collisions, weather issues.</p>

        <h3 className="font-semibold text-lg">3. Liability Waiver</h3>
        <p>
          Organizers are not liable for injury, accident, illness, or property loss.
        </p>

        <h3 className="font-semibold text-lg">4. Emergency Medical Consent</h3>
        <p>I authorize emergency treatment and accept medical expenses.</p>

        <h3 className="font-semibold text-lg">5. Compliance</h3>
        <p>I agree to follow all rules and instructions.</p>

        <h3 className="font-semibold text-lg">6. Declaration</h3>
        <p>All submitted information is true. False information may lead to disqualification.</p>
      </div>
    </div>
  );
}
