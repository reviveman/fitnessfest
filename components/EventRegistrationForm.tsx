"use client";

import { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
  entryFee: number; // numeric (0 for FREE)
};

/* ================= COMPONENT ================= */

export default function EventRegistrationForm({
  closeForm,
  eventTitle,
  entryFee,
}: Props) {
  const [paymentStarted, setPaymentStarted] = useState(false);

  const gst = Math.round(entryFee * 0.18);
  const totalAmount = entryFee + gst;
  const isFreeEvent = totalAmount === 0;

  /* ================= VALIDATION ================= */

  const validation = Yup.object({
    fullName: Yup.string().required("Required"),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter 10 digits")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    dob: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    emergencyContact: Yup.string().required("Required"),
    events: Yup.array().min(1, "Event is required"),
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
          events: [eventTitle], // ✅ auto-selected
          idProof: null,
          waiverForm: null,
          eligibilityVideo: null,
          declarationAccepted: false,
        }}
        validationSchema={validation}
        onSubmit={() => {}}
      >
        {({ values }) => (
          <Form className="px-8 py-6 space-y-8 max-h-[65vh] overflow-y-auto">
            {/* PERSONAL INFO */}
            <div>
              <h3 className="font-semibold mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <Field name="fullName" className={inputClass} />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className={labelClass}>Mobile</label>
                  <Field name="mobile" className={inputClass} />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <Field name="email" className={inputClass} />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className={labelClass}>Date of Birth</label>
                  <Field type="date" name="dob" className={inputClass} />
                </div>
              </div>
            </div>

            {/* SELECTED EVENT */}
            <div>
              <h3 className="font-semibold mb-4">Selected Event</h3>
              <div className="p-4 bg-gray-50 border rounded-lg">
                <label className="flex gap-2 items-center">
                  <input type="checkbox" checked disabled />
                  <span className="font-medium">{eventTitle}</span>
                </label>
              </div>
            </div>

            {/* DECLARATION */}
            <div>
              <label className="flex gap-2 items-start">
                <Field type="checkbox" name="declarationAccepted" />
                <span>I accept Terms & Conditions</span>
              </label>
              <ErrorMessage
                name="declarationAccepted"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* PAYMENT / SUBMIT */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              {!isFreeEvent && (
                <>
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
                </>
              )}

              <Button
                type="button"
                disabled={paymentStarted}
                className="mt-4 w-full bg-[#EA4A3E] text-white py-3 rounded-lg"
                onClick={async () => {
                  setPaymentStarted(true);

                  try {
                    /**
                     * 🆓 FREE EVENT
                     */
                    if (isFreeEvent) {
                      const res = await fetch("/api/register-event", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          fullName: values.fullName,
                          mobile: values.mobile,
                          email: values.email,
                          dob: values.dob,
                          gender: values.gender,
                          city: values.city,
                          emergencyContact: values.emergencyContact,
                          events: [eventTitle],
                          declarationAccepted: true,
                        }),
                      });

                      if (!res.ok) throw new Error("Registration failed");

                      window.location.href = "/thankyou";
                      return;
                    }

                    /**
                     * 💰 PAID EVENT
                     */
                    const saveRes = await fetch(
                      "/api/registrations/initiate",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          fullName: values.fullName,
                          mobile: values.mobile,
                          email: values.email,
                          dob: values.dob,
                          gender: values.gender,
                          city: values.city,
                          emergencyContact: values.emergencyContact,
                          eventTitle,
                          amount: totalAmount,
                        }),
                      }
                    );

                    const saveData = await saveRes.json();
                    if (!saveData?.merchantOrderId)
                      throw new Error("Failed to create registration");

                    const payRes = await fetch("/api/phonepe/pay", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        amount: totalAmount,
                        merchantOrderId: saveData.merchantOrderId,
                      }),
                    });

                    const payData = await payRes.json();
                    if (!payData?.redirectUrl)
                      throw new Error("Payment initiation failed");

                    window.location.href = payData.redirectUrl;
                  } catch (err) {
                    console.error(err);
                    alert("Something went wrong. Please try again.");
                    setPaymentStarted(false);
                  }
                }}
              >
                {isFreeEvent
                  ? "Register & Continue"
                  : `Pay ₹${totalAmount} & Continue`}
              </Button>
            </div>
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
