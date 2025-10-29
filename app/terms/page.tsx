"use client";

import React, { useState } from "react";
import { Download, Printer, Check } from "lucide-react";

// Terms & Conditions Page
export default function TermsAndConditionsPage() {
  const [accepted, setAccepted] = useState(false);

  function handlePrint() {
    if (typeof window !== "undefined") window.print();
  }

  function handleDownload() {
    const content =
      document.getElementById("t-and-c-content")?.innerText || "";
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download =
      "Bengaluru-Fitness-Festival-Terms-and-Conditions.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className=" mt-16 md:mt-24 min-h-screen bg-gray-50 p-6 md:p-12 lg:p-24 pt-28 md:pt-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Terms & Conditions
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Bengaluru Fitness Festival — Effective Date: 21-02-2026
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100"
              aria-label="Download"
            >
              <Download size={16} /> Download
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
              aria-label="Print"
            >
              <Printer size={16} /> Print
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar */}
          <aside className="col-span-1 rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-sm font-semibold text-gray-700">
              Quick links
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#acceptance" className="rounded px-2 py-1 hover:bg-gray-50">1. Acceptance of Terms</a>
              <a href="#registration" className="rounded px-2 py-1 hover:bg-gray-50">2. Event Registration & Tickets</a>
              <a href="#payments" className="rounded px-2 py-1 hover:bg-gray-50">3. Payments & Refunds</a>
              <a href="#changes" className="rounded px-2 py-1 hover:bg-gray-50">4. Event Changes & Cancellations</a>
              <a href="#conduct" className="rounded px-2 py-1 hover:bg-gray-50">5. Code of Conduct</a>
              <a href="#ip" className="rounded px-2 py-1 hover:bg-gray-50">6. Intellectual Property</a>
              <a href="#liability" className="rounded px-2 py-1 hover:bg-gray-50">7. Limitation of Liability</a>
              <a href="#privacy" className="rounded px-2 py-1 hover:bg-gray-50">8. Privacy</a>
              <a href="#thirdparty" className="rounded px-2 py-1 hover:bg-gray-50">9. Third-Party Services</a>
              <a href="#law" className="rounded px-2 py-1 hover:bg-gray-50">10. Governing Law & Jurisdiction</a>
              <a href="#contact" className="rounded px-2 py-1 hover:bg-gray-50">11. Contact Us</a>
            </nav>

            <div className="mt-6 border-t pt-4 text-xs text-gray-500">
              <p>Prepared by: Maxx Business Media Pvt. Ltd.</p>
              <p className="mt-2">
                Need changes? Contact:{" "}
                <a
                  href="mailto:info@fitnessfest.in"
                  className="text-indigo-600"
                >
                  info@fitnessfest.in
                </a>
              </p>
            </div>
          </aside>

          {/* Content */}
          <article
            id="t-and-c-content"
            className="col-span-1 md:col-span-3 rounded-2xl bg-white p-8 shadow-lg"
          >
            {/* --- Sections --- */}
            <section id="acceptance" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700">
                By accessing our website, registering for the Bengaluru Fitness
                Festival, purchasing tickets, or engaging with any of our
                services, you acknowledge that you have read, understood, and
                agreed to these Terms & Conditions. If you do not agree, please
                do not use our services.
              </p>
            </section>

            <section id="registration" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                2. Event Registration & Tickets
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  All registrations and ticket purchases are subject to
                  availability and confirmation.
                </li>
                <li>Registration is valid only upon receipt of full payment.</li>
                <li>
                  Tickets/registrations are non-transferable unless specifically
                  stated otherwise.
                </li>
                <li>
                  We reserve the right to refuse registration or entry without
                  providing a reason.
                </li>
              </ul>
            </section>

            <section id="payments" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                3. Payments & Refunds
              </h2>
              <p className="text-gray-700">
                Payments must be made through the approved methods listed on our
                website. All fees are quoted in INR (₹) unless specified
                otherwise.
              </p>
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">Refunds/Cancellations:</span>{" "}
                Unless otherwise stated, tickets/registrations are non-refundable.
                In exceptional cases (such as event cancellation by us), refunds
                will be processed within a reasonable time frame.
              </p>
            </section>

            <section id="changes" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                4. Event Changes & Cancellations
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  We reserve the right to make changes to the event schedule,
                  speakers, venue, or dates due to unforeseen circumstances.
                </li>
                <li>
                  If the event is postponed, your registration will remain valid
                  for the rescheduled date.
                </li>
                <li>
                  In case of cancellation, we will refund the registration fee
                  (excluding any transaction charges).
                </li>
              </ul>
            </section>

            <section id="conduct" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                5. Code of Conduct
              </h2>
              <p className="text-gray-700">
                To ensure a safe and enjoyable experience for all participants:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Respect all attendees, exhibitors, staff, and partners.</li>
                <li>
                  Harassment, discrimination, or disruptive behaviour will not be
                  tolerated.
                </li>
                <li>
                  We reserve the right to remove anyone violating these rules
                  without refund.
                </li>
              </ul>
            </section>

            <section id="ip" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                6. Intellectual Property
              </h2>
              <p className="text-gray-700">
                All content on this website (including logos, designs, graphics,
                text, and media) is the intellectual property of Bengaluru
                Fitness Festival unless otherwise stated. You may not reproduce,
                distribute, or exploit any content without prior written
                consent.
              </p>
            </section>

            <section id="liability" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                Participation in the Bengaluru Fitness Festival is at your own
                risk. We are not responsible for personal injury, loss, theft, or
                damage to property during the event. While we strive to provide
                accurate information, we make no warranties about the
                completeness, accuracy, or reliability of our website content.
              </p>
            </section>

            <section id="privacy" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                8. Privacy
              </h2>
              <p className="text-gray-700">
                Your use of our website and participation in the event is also
                governed by our Privacy Policy. Please review it to understand
                how we collect and use your personal data.
              </p>
            </section>

            <section id="thirdparty" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                9. Third-Party Services
              </h2>
              <p className="text-gray-700">
                Our website may link to third-party websites or services. We are
                not responsible for the content, policies, or practices of those
                external sites.
              </p>
            </section>

            <section id="law" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                10. Governing Law & Jurisdiction
              </h2>
              <p className="text-gray-700">
                These Terms & Conditions are governed by the laws of India. Any
                disputes arising from the Bengaluru Fitness Festival or its
                website shall be subject to the exclusive jurisdiction of the
                courts in Bengaluru, Karnataka.
              </p>
            </section>

            <section id="contact" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                11. Contact Us
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p>Bengaluru Fitness Festival</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@fitnessfest.in"
                    className="text-indigo-600"
                  >
                    info@fitnessfest.in
                  </a>
                </p>
                <p>Phone: +91 91483 19993</p>
                <p>
                  Address: Maxx Business Media Pvt. Ltd., No.T9, 3rd Floor,
                  Swastik Manandi Arcade, SC Road, Seshadripuram, Bengaluru –
                  50020
                </p>
              </div>
            </section>

            {/* Accept Button */}
            <div className="mt-6 flex items-center justify-between gap-4 border-t pt-6">
              <label className="inline-flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">
                  I have read and agree to the Terms & Conditions.
                </span>
              </label>

              <button
                disabled={!accepted}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ${
                  accepted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() =>
                  alert("Thank you — your acceptance has been recorded.")
                }
              >
                <Check size={16} /> Accept & Continue
              </button>
            </div>
          </article>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Bengaluru Fitness Festival. All rights
            reserved.
          </p>
        </footer>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #t-and-c-content,
          #t-and-c-content * {
            visibility: visible;
          }
          #t-and-c-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
