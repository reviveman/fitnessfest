"use client";

import { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

/* ================= TYPES ================= */

interface EventFormValues {
  fullName: string;
  mobile: string;
  email: string;
  dob: string;
  gender: string;
  city: string;
  emergencyContact: string;
  events: string[];
  idProof: File | null;
  waiverForm: File | null;
  eligibilityVideo: File | null;
  declarationAccepted: boolean;
}

type Props = {
  closeForm: () => void;
  eventTitle: string;
  entryFee: number;
};

/* ================= COMPONENT ================= */

export default function EventRegistrationForm({
  closeForm,
  eventTitle,
  entryFee,
}: Props) {
  const router = useRouter();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentStarted, setPaymentStarted] = useState(false);

  const gst = Math.round(entryFee * 0.18);
  const totalAmount = entryFee + gst;

  const EVENT_OPTIONS = [
    "Functional Fitness Challenge – Eliminations",
    "Strength Endurance Circuit",
    "Calisthenics Freestyle",
    "Powerlifting King/Queen",
    "Push-Up/Plank Challenge",
    "Battle of Gyms",
    "Obstacle Course Challenge",
  ];

  const validation = Yup.object({
    fullName: Yup.string().required("Required"),
    mobile: Yup.string().matches(/^[0-9]{10}$/, "Enter 10 digits").required(),
    email: Yup.string().email().required(),
    dob: Yup.string().required(),
    gender: Yup.string().required(),
    city: Yup.string().required(),
    emergencyContact: Yup.string().required(),
    events: Yup.array().min(1, "Select at least one event"),
    idProof: Yup.mixed().required("ID Proof required"),
    waiverForm: Yup.mixed().required("Waiver form required"),
    declarationAccepted: Yup.boolean().oneOf([true], "Required"),
  });

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-[#EA4A3E]";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="bg-white max-w-5xl w-full mx-auto rounded-xl shadow-2xl">
      {/* HEADER */}
      <div className="border-b px-8 py-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Event Registration</h2>
          <p className="text-sm text-gray-600">{eventTitle}</p>
        </div>
        <button onClick={closeForm}>
          <X />
        </button>
      </div>

      <Formik<EventFormValues>
        initialValues={{
          fullName: "",
          mobile: "",
          email: "",
          dob: "",
          gender: "",
          city: "",
          emergencyContact: "",
          events: [],
          idProof: null,
          waiverForm: null,
          eligibilityVideo: null,
          declarationAccepted: false,
        }}
        validationSchema={validation}
        onSubmit={() => {
          alert("Please complete payment first");
        }}
      >
        {({ values, setFieldValue }) => (
          <Form id="event-form" className="px-8 py-6 space-y-8 max-h-[65vh] overflow-y-auto">

            {/* PERSONAL INFO */}
            <div>
              <h3 className="font-semibold mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <Field name="fullName" className={inputClass} />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className={labelClass}>Mobile</label>
                  <Field name="mobile" className={inputClass} />
                  <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <Field name="email" className={inputClass} />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className={labelClass}>Date of Birth</label>
                  <Field type="date" name="dob" className={inputClass} />
                </div>
              </div>
            </div>

            {/* EVENTS */}
            <div>
              <h3 className="font-semibold mb-4">Select Events</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {EVENT_OPTIONS.map((ev) => (
                  <label key={ev} className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      checked={values.events.includes(ev)}
                      onChange={(e) => {
                        const arr = [...values.events];
                        e.target.checked ? arr.push(ev) : arr.splice(arr.indexOf(ev), 1);
                        setFieldValue("events", arr);
                        setShowPayment(arr.length > 0);
                      }}
                    />
                    {ev}
                  </label>
                ))}
              </div>
            </div>

            {/* DECLARATION */}
            <div>
              <label className="flex gap-2 items-start">
                <Field type="checkbox" name="declarationAccepted" />
                <span>I accept Terms & Conditions</span>
              </label>
            </div>

            {/* PAYMENT */}
            {showPayment && (
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="font-semibold mb-4">Payment Summary</h3>

                <div className="flex justify-between">
                  <span>Base Amount</span>
                  <span>₹{entryFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{gst}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>

                <button
                  type="button"
                  disabled={paymentStarted}
                  onClick={async () => {
                    setPaymentStarted(true);

                    const res = await fetch("/api/phonepe/create-payment", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        amount: totalAmount,
                        mobileNumber: values.mobile,
                        merchantTransactionId: "EVT_" + Date.now(),
                        meta: { ...values, eventTitle },
                      }),
                    });

                    const data = await res.json();

                    const url =
                      data?.data?.instrumentResponse?.redirectInfo?.url;

                    if (url) window.location.href = url;
                    else alert("Payment initiation failed");
                  }}
                  className="mt-4 w-full bg-[#EA4A3E] text-white py-3 rounded-lg"
                >
                  Pay ₹{totalAmount} & Continue
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>

      {/* FOOTER */}
      <div className="border-t px-8 py-4 text-sm text-center text-gray-500">
        By submitting, you agree to our{" "}
        <Link href="/competition-terms" className="text-blue-600 underline">
          Terms & Privacy Policy
        </Link>
      </div>
    </div>
  );
}
