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
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Enter 10 digits")
      .required(),
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
    "w-full px-3 py-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#EA4A3E]";

  return (
    <div className="max-w-2xl mx-auto py-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Registration Form</h1>

      <Formik<EventFormValues>
        initialValues={{
          fullName: "",
          mobile: "",
          email: "",
          dob: "",
          gender: "",
          city: "",
          emergencyContact: "",
          events: [] as string[],
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
        {({ setFieldValue, values }) => (
          <Form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <Field name="fullName" className={inputClass} />
              <ErrorMessage
                name="fullName"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-1 font-medium">Mobile Number</label>
              <Field name="mobile" className={inputClass} />
              <ErrorMessage
                name="mobile"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email ID</label>
              <Field name="email" className={inputClass} />
              <ErrorMessage
                name="email"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* DOB */}
            <div>
              <label className="block mb-1 font-medium">Date of Birth</label>
              <Field type="date" name="dob" className={inputClass} />
              <ErrorMessage
                name="dob"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-1 font-medium">Gender</label>
              <Field as="select" name="gender" className={inputClass}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Field>
              <ErrorMessage
                name="gender"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-1 font-medium">City</label>
              <Field name="city" className={inputClass} />
              <ErrorMessage
                name="city"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* Emergency Contact */}
            <div>
              <label className="block mb-1 font-medium">
                Emergency Contact Name & Number
              </label>
              <Field name="emergencyContact" className={inputClass} />
              <ErrorMessage
                name="emergencyContact"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* Events */}
            <div>
              <label className="block mb-1 font-medium">Select Events</label>

              <div className="space-y-2 mt-2">
                {EVENT_OPTIONS.map((ev) => (
                  <label key={ev} className="flex gap-2 items-center">
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

              <ErrorMessage
                name="events"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* ID Proof */}
            <div>
              <label className="block mb-1 font-medium">ID Proof Upload</label>
              <input
                type="file"
                className="text-white"
                onChange={(e) =>
                  setFieldValue("idProof", e.target.files?.[0])
                }
              />
              <ErrorMessage
                name="idProof"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* Waiver Form */}
            <div>
              <label className="block mb-1 font-medium">
                Fitness Waiver Form (PDF/JPG)
              </label>
              <input
                type="file"
                className="text-white"
                onChange={(e) =>
                  setFieldValue("waiverForm", e.target.files?.[0])
                }
              />
              <ErrorMessage
                name="waiverForm"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* Conditional Video Upload */}
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

            {/* Terms */}
            <div className="mt-4">
              <label className="flex gap-2 items-center">
                <Field type="checkbox" name="declarationAccepted" />
                <span>I accept all Terms & Conditions</span>
              </label>
              <ErrorMessage
                name="declarationAccepted"
                className="text-red-400 text-sm mt-1"
                component="div"
              />
            </div>

            {/* Payment Section */}
            {showPayment && (
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Payment Summary</h3>

                <p>Selected Events: {values.events.length}</p>
                <p>Base Amount: ₹500</p>
                <p>GST (18%): ₹90</p>
                <p className="font-bold">Total: ₹590</p>

                <button className="mt-3 bg-red-500 px-4 py-2 rounded">
                  Pay Now
                </button>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#EA4A3E] text-white py-3 text-lg rounded-lg"
            >
              Submit Registration
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
