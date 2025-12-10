"use client";

import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Refund & Cancellation Policy – Bengaluru Fitness Fest 2026</h1>
      <p className="text-gray-600 mb-6">Last Updated: December 2025</p>

      <p className="mb-6">
        Thank you for registering for the <strong>Bengaluru Fitness Fest 2026</strong>. Please read the following refund
        and cancellation terms carefully before completing your registration or ticket purchase.
      </p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. General Policy</h2>
        <p className="mb-2">
          All registrations, tickets, and competition entries for Bengaluru Fitness Fest 2026 are
          <strong> non-refundable, non-transferable</strong>, and <strong>cannot be modified</strong> once the
          transaction is completed.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Event entry tickets</li>
          <li>5K Run registrations</li>
          <li>Saree Run registrations</li>
          <li>Competition registrations</li>
          <li>Team event registrations</li>
          <li>Merchandise purchases (T-shirts, badges, accessories, etc.)</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. No Refund Policy</h2>
        <p className="mb-2">Refunds will <strong>not</strong> be issued in the following cases:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Change of personal schedule or inability to attend</li>
          <li>Arriving late or missing the event</li>
          <li>Duplicate registrations</li>
          <li>Incorrect category or personal details submitted</li>
          <li>Failure to meet participation criteria or cut-off timings</li>
          <li>Travel issues or weather-related delays</li>
          <li>Personal emergencies</li>
          <li>Visa issues for international participants</li>
          <li>Injuries, illness, or medical unfitness declared by officials</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Event Postponement / Rescheduling</h2>
        <p className="mb-2">The event may be postponed due to unavoidable circumstances such as:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Extreme weather</li>
          <li>Natural disasters</li>
          <li>Government restrictions</li>
          <li>Public safety concerns</li>
          <li>Venue-related issues</li>
          <li>Any force majeure event</li>
        </ul>
        <p className="mt-2">
          Your registration will be automatically transferred to the <strong>new event date</strong>. No refunds will be
          processed.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Event Cancellation</h2>
        <p className="mb-2">If the event is fully cancelled by the organizers:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>A partial refund will be provided after deducting administrative fees</li>
          <li>OR you may transfer your registration to the next edition of the event</li>
        </ul>
        <p className="mt-2">Refund options will be announced depending on the situation.</p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Incorrect or Fraudulent Registrations</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Entries with incorrect or misleading information may be rejected</li>
          <li>Violations of event rules may result in cancellation</li>
          <li>No refund will be issued in such cases</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Team Event Policies (Battle of Gyms)</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Team registration fees are non-refundable</li>
          <li>No partial refunds for member withdrawals</li>
          <li>Substitutions allowed only before the official cut-off date</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Merchandise Policy</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>No refunds or exchanges once merchandise is delivered</li>
          <li>Replacement only for defective or damaged items</li>
          <li>Sizes cannot be changed after purchase</li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Third-Party Payment Gateways</h2>
        <p className="mb-2">Payments are processed through secure third-party gateways.</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Failed transactions may auto-resolve in 3–7 working days</li>
          <li>Contact us with proof of payment if still unresolved</li>
        </ul>
        <p className="mt-2">
          Refunds for failed transactions (not completed registrations) are handled by the payment provider.
        </p>
      </section>

      {/* Section 9 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Refund & Payment Support Contact</h2>
        <p className="mb-2">
          Our support team can assist only with <strong>failed transactions</strong>, not refund requests for confirmed
          registrations.
        </p>
        <p className="mt-3">
          <strong>Maxx Business Media Pvt. Ltd.</strong> <br />
          No. T9, 3rd Floor, Swastik Manandi Arcade, <br />
          SC Road, Seshadripuram, Bengaluru – 560 020 <br />
          📩 Email: <a href="mailto:support@fitnessfest.in" className="text-blue-600">support@fitnessfest.in</a> <br />
          📞 Helpline: +91-91483 19993 <br />
          ⏱ Support Hours: Mon–Sat, 10 AM – 6 PM
        </p>
      </section>
    </div>
  );
}
