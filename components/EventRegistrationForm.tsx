"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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

export default function EventRegistrationForm({
  closeForm,
}: {
  closeForm: () => void;
}) {
  const router = useRouter();

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

  const [showPayment, setShowPayment] = useState(false);

  const inputClass =
    "w-full px-3 py-3 rounded-lg bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EA4A3E]";

  return (
    <div className="max-w-3xl mx-auto py-10 text-white overflow-visible">
      <h1 className="text-4xl font-bold mb-8 text-center">Registration Form</h1>

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
        onSubmit={async (values) => {
          const convertFile = (file: File | null) =>
            new Promise((resolve) => {
              if (!file) return resolve(null);
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result);
              reader.readAsDataURL(file);
            });

          const payload = {
            ...values,
            idProof: await convertFile(values.idProof),
            waiverForm: await convertFile(values.waiverForm),
            eligibilityVideo: await convertFile(values.eligibilityVideo),
            paymentInfo: showPayment ? { amount: 500, gst: 90 } : null,
          };

          const res = await fetch("/api/register-event", {
            method: "POST",
            body: JSON.stringify(payload),
          });

          const out = await res.json();

          if (out.success) {
            closeForm();
            router.push(out.redirect);
          }
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="space-y-8">

            {/* --- GRID 2 COLUMN SECTION --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <Field
                  name="fullName"
                  placeholder="Enter your full name"
                  className={inputClass}
                />
                <ErrorMessage name="fullName" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              {/* Mobile */}
              <div>
                <label className="block mb-1 font-medium">Mobile Number</label>
                <Field
                  name="mobile"
                  placeholder="10-digit mobile number"
                  className={inputClass}
                />
                <ErrorMessage name="mobile" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email ID</label>
                <Field
                  name="email"
                  placeholder="Enter your email address"
                  className={inputClass}
                />
                <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              {/* DOB */}
              <div>
                <label className="block mb-1 font-medium">Date of Birth</label>
                <Field type="date" name="dob" className={inputClass} />
                <ErrorMessage name="dob" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              {/* Gender */}
              <div>
                <label className="block mb-1 font-medium">Gender</label>
                <Field as="select" name="gender" className={inputClass}>
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              {/* City */}
              <div>
                <label className="block mb-1 font-medium">City</label>
                <Field
                  name="city"
                  placeholder="Your city"
                  className={inputClass}
                />
                <ErrorMessage name="city" component="div" className="text-red-400 text-sm mt-1" />
              </div>

              {/* Emergency Contact */}
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">
                  Emergency Contact Name & Number
                </label>
                <Field
                  name="emergencyContact"
                  placeholder="Contact name & number"
                  className={inputClass}
                />
                <ErrorMessage name="emergencyContact" component="div" className="text-red-400 text-sm mt-1" />
              </div>
            </div>

            {/* --- EVENT SELECTION --- */}
            <div>
              <label className="block mb-2 font-medium text-lg">
                Select Events
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-gray-900 p-4 rounded-lg">
                {EVENT_OPTIONS.map((ev) => (
                  <label key={ev} className="flex gap-3 items-center">
                    <Field
                      type="checkbox"
                      name="events"
                      value={ev}
                      onChange={(e: any) => {
                        const checked = e.target.checked;
                        const arr = [...values.events];

                        if (checked) arr.push(ev);
                        else arr.splice(arr.indexOf(ev), 1);

                        setFieldValue("events", arr);
                        setShowPayment(arr.length > 0);
                      }}
                    />
                    <span>{ev}</span>
                  </label>
                ))}
              </div>

              <ErrorMessage name="events" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* ID Proof */}
            <div>
              <label className="block mb-1 font-medium">ID Proof Upload</label>
              <input
                type="file"
                className="text-white"
                onChange={(e) => setFieldValue("idProof", e.target.files?.[0])}
              />
              <ErrorMessage name="idProof" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* Waiver Form */}
            <div>
              <label className="block mb-1 font-medium">
                Fitness Waiver Form (PDF/JPG)
              </label>
              <input
                type="file"
                className="text-white"
                onChange={(e) => setFieldValue("waiverForm", e.target.files?.[0])}
              />
              <ErrorMessage name="waiverForm" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* Eligibility Video (Conditional) */}
            {(values.events.includes("Powerlifting King/Queen") ||
              values.events.includes("Calisthenics Freestyle")) && (
              <div>
                <label className="block mb-1 font-medium">
                  Eligibility Video (30–60 sec)
                </label>
                <input
                  type="file"
                  accept="video/*"
                  className="text-white"
                  onChange={(e) =>
                    setFieldValue("eligibilityVideo", e.target.files?.[0])
                  }
                />
              </div>
            )}

            {/* Declaration */}
            <div>
              <label className="flex gap-3 items-center">
                <Field type="checkbox" name="declarationAccepted" />
                <span>I accept all Terms & Conditions</span>
              </label>
              <ErrorMessage name="declarationAccepted" component="div" className="text-red-400 text-sm mt-1" />
            </div>

            {/* Payment Summary */}
            {showPayment && (
              <div className="bg-gray-800 p-5 rounded-lg">
                <h3 className="font-bold text-xl mb-3">Payment Summary</h3>
                <p>Selected Events: {values.events.length}</p>
                <p>Base Amount: ₹500</p>
                <p>GST (18%): ₹90</p>
                <p className="font-bold text-lg mt-2">Total: ₹590</p>

                <button className="mt-4 bg-red-500 px-5 py-2 rounded text-white">
                  Pay Now
                </button>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#EA4A3E] text-white py-4 text-xl rounded-lg"
            >
              Submit Registration
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
