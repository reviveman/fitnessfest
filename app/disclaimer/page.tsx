"use client";

import React, { useState } from "react";
import { Download, Printer, Info } from "lucide-react";

// Disclaimer Page - single-file React component for Next.js
// Suggested path: app/disclaimer/page.tsx or pages/disclaimer.tsx

export default function DisclaimerPage() {
  const [ack, setAck] = useState(false);

  function handlePrint() {
    if (typeof window !== "undefined") window.print();
  }

  function handleDownload() {
    const content = document.getElementById("disclaimer-content")?.innerText || "";
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Bengaluru-Fitness-Festival-Disclaimer.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <main className=" mt-16 md:mt-24 min-h-screen bg-gray-50 p-6 md:p-12 lg:p-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Disclaimer</h1>
            <p className="mt-1 text-sm text-gray-600">Bengaluru Fitness Festival — Effective Date: 28-03-2026</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100"
              aria-label="Download">
              <Download size={16} /> Download
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
              aria-label="Print">
              <Printer size={16} /> Print
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <aside className="col-span-1 rounded-2xl bg-white p-6 shadow-md">
            <h3 className="mb-4 text-sm font-semibold text-gray-700">Quick links</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#general" className="rounded px-2 py-1 hover:bg-gray-50">1. General Information</a>
              <a href="#health" className="rounded px-2 py-1 hover:bg-gray-50">2. Health & Fitness Disclaimer</a>
              <a href="#professional" className="rounded px-2 py-1 hover:bg-gray-50">3. Professional Advice</a>
              <a href="#external" className="rounded px-2 py-1 hover:bg-gray-50">4. External Links</a>
              <a href="#liability" className="rounded px-2 py-1 hover:bg-gray-50">5. Limitation of Liability</a>
              <a href="#media" className="rounded px-2 py-1 hover:bg-gray-50">6. Photography & Media Consent</a>
              <a href="#changes" className="rounded px-2 py-1 hover:bg-gray-50">7. Changes to this Disclaimer</a>
              <a href="#contact" className="rounded px-2 py-1 hover:bg-gray-50">8. Contact Us</a>
            </nav>

            <div className="mt-6 border-t pt-4 text-xs text-gray-500">
              <p>Prepared by: Maxx Business Media Pvt. Ltd.</p>
              <p className="mt-2">Questions? <a href="mailto:info@fitnessfest.in" className="text-indigo-600">info@fitnessfest.in</a></p>
            </div>
          </aside>

          <article id="disclaimer-content" className="col-span-1 md:col-span-3 rounded-2xl bg-white p-8 shadow-lg">
            <section id="general" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">1. General Information</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>All content on this website and at the Bengaluru Fitness Festival is provided for general informational and educational purposes only.</li>
                <li>While we aim to ensure accuracy, we make no guarantees regarding the completeness, reliability, or suitability of any content, services, or information provided.</li>
                <li>Any reliance you place on such information is strictly at your own risk.</li>
              </ul>
            </section>

            <section id="health" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">2. Health & Fitness Disclaimer</h2>
              <ul className="list-inside list-disc space-y-2 text-gray-700">
                <li>Participation in fitness activities, workshops, or demonstrations at the Bengaluru Fitness Festival is voluntary and undertaken at your own risk.</li>
                <li>Fitness, exercise, and nutrition activities can involve risks of injury or health complications. Please consult your physician before participating in any physical activity.</li>
                <li>BFF, its organizers, staff, sponsors, and partners are not responsible or liable for any injury, illness, accident, or medical condition resulting from participation in the event.</li>
              </ul>
            </section>

            <section id="professional" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">3. Professional Advice</h2>
              <p className="text-gray-700">Any advice, tips, or demonstrations provided during the festival, on our website, or by trainers/speakers are not a substitute for professional medical or fitness advice. Always seek the guidance of qualified healthcare professionals before making health, fitness, or dietary decisions.</p>
            </section>

            <section id="external" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">4. External Links & Third-Party Content</h2>
              <p className="text-gray-700">Our website may contain links to third-party websites or display content from external sources. We do not control or endorse the content, policies, or practices of third-party websites. Accessing such websites is at your own discretion.</p>
            </section>

            <section id="liability" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">5. Limitation of Liability</h2>
              <p className="text-gray-700">To the fullest extent permitted by law, Bengaluru Fitness Festival, its organizers, partners, and affiliates disclaim all liability for any loss, injury, damages, or expenses arising from:</p>
              <ul className="list-inside list-disc space-y-2 text-gray-700 mt-2">
                <li>Use of our website.</li>
                <li>Participation in the festival or related activities.</li>
                <li>Reliance on any information, advice, or materials shared during the event.</li>
              </ul>
            </section>

            <section id="media" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">6. Photography & Media Consent</h2>
              <p className="text-gray-700">By attending the Bengaluru Fitness Festival, you consent to being photographed, filmed, or recorded. These materials may be used for promotional, marketing, or archival purposes without compensation. If you do not wish to appear in such media, please notify our team at the event venue.</p>
            </section>

            <section id="changes" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">7. Changes to this Disclaimer</h2>
              <p className="text-gray-700">We may update this Disclaimer from time to time. Changes will be posted on this page with an updated "Effective Date."</p>
            </section>

            <section id="contact" className="mb-6">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">8. Contact Us</h2>
              <div className="prose max-w-none text-gray-700">
                <p>Bengaluru Fitness Festival</p>
                <p>Email: <a href="mailto:info@fitnessfest.in" className="text-indigo-600">info@fitnessfest.in</a></p>
                <p>Phone: +91 91483 19993</p>
                <p>Address: Maxx Business Media Pvt. Ltd., No.T9, 3rd Floor, Swastik Manandi Arcade, SC Road, Seshadripuram, Bengaluru – 50020</p>
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
                <span className="text-sm text-gray-700">I have read and understood this Disclaimer.</span>
              </label>

              <button
                disabled={!ack}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition ${
                  ack ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                onClick={() => alert("Acknowledged — thank you.")}
              >
                <Info size={16} /> Acknowledge
              </button>
            </div>
          </article>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Bengaluru Fitness Festival. All rights reserved.</p>
        </footer>
      </div>

      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          #disclaimer-content, #disclaimer-content * { visibility: visible; }
          #disclaimer-content { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </main>
  );
}
