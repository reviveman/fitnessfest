"use client";

import React, { useState } from "react";
import { Download, Printer, Shield } from "lucide-react";

// Privacy Policy Page - single-file React component for Next.js
// Suggested path: app/privacy/page.tsx or pages/privacy.tsx

export default function PrivacyPolicyPage() {
  const [ack, setAck] = useState(false);

  function handlePrint() {
    if (typeof window !== "undefined") window.print();
  }

  function handleDownload() {
    const content =
      document.getElementById("privacy-content")?.innerText || "";
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Bengaluru-Fitness-Festival-Privacy-Policy.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="mt-16 md:mt-24 min-h-screen bg-gray-50 p-6 md:p-12 lg:p-24 pt-20 md:pt-28">
      {/* Responsive top spacing so header is visible below fixed navbar */}
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Privacy Policy
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
          <aside className="col-span-1 rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-sm font-semibold text-gray-700">
              Quick links
            </h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#info" className="rounded px-2 py-1 hover:bg-gray-50">
                1. Information We Collect
              </a>
              <a href="#usage" className="rounded px-2 py-1 hover:bg-gray-50">
                2. How We Use Your Information
              </a>
              <a href="#sharing" className="rounded px-2 py-1 hover:bg-gray-50">
                3. Sharing of Information
              </a>
              <a href="#cookies" className="rounded px-2 py-1 hover:bg-gray-50">
                4. Cookies & Tracking
              </a>
              <a href="#security" className="rounded px-2 py-1 hover:bg-gray-50">
                5. Data Security
              </a>
              <a href="#retention" className="rounded px-2 py-1 hover:bg-gray-50">
                6. Data Retention
              </a>
              <a href="#rights" className="rounded px-2 py-1 hover:bg-gray-50">
                7. Your Rights
              </a>
              <a
                href="#thirdparty"
                className="rounded px-2 py-1 hover:bg-gray-50"
              >
                8. Third-Party Links
              </a>
              <a href="#children" className="rounded px-2 py-1 hover:bg-gray-50">
                9. Children’s Privacy
              </a>
              <a href="#updates" className="rounded px-2 py-1 hover:bg-gray-50">
                10. Updates to this Policy
              </a>
              <a href="#contact" className="rounded px-2 py-1 hover:bg-gray-50">
                11. Contact Us
              </a>
            </nav>
          </aside>

          <article
            id="privacy-content"
            className="col-span-1 md:col-span-3 rounded-2xl bg-white p-8 shadow-lg"
          >
            <section id="info" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                1. Information We Collect
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  Personal Information: Name, email address, phone number,
                  company/organization, designation, billing address, and
                  payment details.
                </li>
                <li>
                  Event Registration Details: Preferences, ticket/registration
                  category, and participation history.
                </li>
                <li>
                  Technical Information: IP address, browser type, operating
                  system, device details, and browsing activity through cookies
                  and analytics tools.
                </li>
                <li>
                  Voluntary Information: Feedback, survey responses, or any
                  other details you choose to provide.
                </li>
              </ul>
            </section>

            <section id="usage" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                2. How We Use Your Information
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>
                  Processing event registrations, payments, and confirmations.
                </li>
                <li>
                  Communicating important updates, event information, and
                  promotional offers.
                </li>
                <li>Personalizing your experience on our website.</li>
                <li>
                  Improving our events, website functionality, and user
                  experience.
                </li>
                <li>
                  Complying with legal obligations and ensuring website
                  security.
                </li>
              </ul>
            </section>

            <section id="sharing" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                3. Sharing of Information
              </h2>
              <p className="text-gray-700">
                We do not sell, rent, or trade your personal data. However, we
                may share your information with:
              </p>
              <ul className="list-inside list-disc space-y-2 text-gray-700 mt-2">
                <li>
                  Service Providers: Trusted third-party partners who help us
                  with event management, payment processing, email
                  communication, and website hosting.
                </li>
                <li>
                  Event Partners/Sponsors: Limited details may be shared with
                  our sponsors/partners for networking and engagement purposes,
                  but only with your consent.
                </li>
                <li>
                  Legal Authorities: When required by law, regulation, or to
                  protect our legal rights.
                </li>
              </ul>
            </section>

            <section id="cookies" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                4. Cookies & Tracking Technologies
              </h2>
              <p className="text-gray-700">
                Our website uses cookies and similar technologies to enhance
                browsing, analyze site traffic, and improve user experience. You
                may choose to disable cookies in your browser settings, but this
                may affect certain website functionalities.
              </p>
            </section>

            <section id="security" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                5. Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, misuse, or loss. However, no method of online
                transmission or storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section id="retention" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                6. Data Retention
              </h2>
              <p className="text-gray-700">
                We retain your personal information only for as long as
                necessary to fulfil the purposes outlined in this policy, unless
                a longer retention period is required by law.
              </p>
            </section>

            <section id="rights" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                7. Your Rights
              </h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Access the personal information we hold about you.</li>
                <li>Request corrections or updates to your data.</li>
                <li>
                  Withdraw consent for marketing communications at any time.
                </li>
                <li>
                  Request deletion of your data (subject to legal and
                  contractual obligations).
                </li>
              </ul>
              <p className="mt-2 text-gray-700">
                For requests, please contact us at{" "}
                <a
                  href="mailto:info@fitnessfest.in"
                  className="text-indigo-600"
                >
                  info@fitnessfest.in
                </a>
                .
              </p>
            </section>

            <section id="thirdparty" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                8. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of external
                sites.
              </p>
            </section>

            <section id="children" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                9. Children’s Privacy
              </h2>
              <p className="text-gray-700">
                Our website and events are not directed at individuals under the
                age of 16. We do not knowingly collect personal data from
                children.
              </p>
            </section>

            <section id="updates" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                10. Updates to this Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. Updates will be
                posted on this page with the “Effective Date” revised
                accordingly.
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

            <div className="mt-6 flex items-center justify-between gap-4 border-t pt-6">
              <label className="inline-flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={ack}
                  onChange={(e) => setAck(e.target.checked)}
                  className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700">
                  I have read and understood this Privacy Policy.
                </span>
              </label>

              <button
                disabled={!ack}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ${
                  ack
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => alert("Acknowledged — thank you.")}
              >
                <Shield size={16} /> Acknowledge
              </button>
            </div>
          </article>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Bengaluru Fitness Festival. All rights
            reserved.
          </p>
        </footer>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #privacy-content,
          #privacy-content * {
            visibility: visible;
          }
          #privacy-content {
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
