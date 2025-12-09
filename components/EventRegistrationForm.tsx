"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

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
    "w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EA4A3E] focus:border-transparent transition-all duration-200";

  const labelClass = "block text-sm font-medium text-gray-700 mb-2";

  return (
    <div className="bg-white max-w-5xl w-full mx-auto rounded-xl shadow-2xl">
      {/* Form Header with Close Button */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-6 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Event Registration</h2>
            <p className="text-gray-600 text-sm mt-1">Fill in your details to register for the competition</p>
          </div>
          <button
            onClick={closeForm}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"
            aria-label="Close form"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Form Content with Scroll */}
      <div className="px-8 py-6 max-h-[60vh] overflow-y-auto">
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
          {({ values, setFieldValue, isSubmitting }) => (
            <Form className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-6">
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                  <p className="text-gray-600 text-sm mt-1">Enter your basic details</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <Field
                      name="fullName"
                      placeholder="John Doe"
                      className={inputClass}
                    />
                    <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className={labelClass}>Mobile Number *</label>
                    <Field
                      name="mobile"
                      placeholder="9876543210"
                      className={inputClass}
                    />
                    <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email ID *</label>
                    <Field
                      name="email"
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* DOB */}
                  <div>
                    <label className={labelClass}>Date of Birth *</label>
                    <Field type="date" name="dob" className={inputClass} />
                    <ErrorMessage name="dob" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className={labelClass}>Gender *</label>
                    <Field as="select" name="gender" className={inputClass}>
                      <option value="">Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* City */}
                  <div>
                    <label className={labelClass}>City *</label>
                    <Field
                      name="city"
                      placeholder="Bengaluru"
                      className={inputClass}
                    />
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Emergency Contact - Full Width */}
                  <div className="md:col-span-2">
                    <label className={labelClass}>Emergency Contact *</label>
                    <Field
                      name="emergencyContact"
                      placeholder="Emergency contact name & number"
                      className={inputClass}
                    />
                    <ErrorMessage name="emergencyContact" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
              </div>

              {/* Event Selection Section */}
              <div className="space-y-4">
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Event Selection</h3>
                  <p className="text-gray-600 text-sm mt-1">Choose the events you want to participate in</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {EVENT_OPTIONS.map((ev) => (
                      <label key={ev} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#EA4A3E] transition-colors cursor-pointer">
                        <Field
                          type="checkbox"
                          name="events"
                          value={ev}
                          className="w-4 h-4 text-[#EA4A3E] focus:ring-[#EA4A3E] border-gray-300 rounded"
                          onChange={(e: any) => {
                            const checked = e.target.checked;
                            const arr = [...values.events];

                            if (checked) arr.push(ev);
                            else arr.splice(arr.indexOf(ev), 1);

                            setFieldValue("events", arr);
                            setShowPayment(arr.length > 0);
                          }}
                        />
                        <span className="text-gray-700 text-sm">{ev}</span>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="events" component="div" className="text-red-500 text-sm mt-2" />
                </div>
              </div>

              {/* Document Upload Section */}
              <div className="space-y-6">
                <div className="pb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Document Upload</h3>
                  <p className="text-gray-600 text-sm mt-1">Upload required documents</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* ID Proof */}
                  <div>
                    <label className={labelClass}>ID Proof *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#EA4A3E] transition-colors">
                      <input
                        type="file"
                        className="hidden"
                        id="idProof"
                        onChange={(e) => setFieldValue("idProof", e.target.files?.[0])}
                      />
                      <label htmlFor="idProof" className="cursor-pointer block">
                        <div className="text-gray-600 mb-2">
                          {values.idProof ? (
                            <span className="text-green-600 font-medium">✓ {values.idProof.name}</span>
                          ) : (
                            "Click to upload ID Proof"
                          )}
                        </div>
                        <div className="text-xs text-gray-500">PNG, JPG, PDF up to 5MB</div>
                      </label>
                    </div>
                    <ErrorMessage name="idProof" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Waiver Form */}
                  <div>
                    <label className={labelClass}>Fitness Waiver Form *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#EA4A3E] transition-colors">
                      <input
                        type="file"
                        className="hidden"
                        id="waiverForm"
                        onChange={(e) => setFieldValue("waiverForm", e.target.files?.[0])}
                      />
                      <label htmlFor="waiverForm" className="cursor-pointer block">
                        <div className="text-gray-600 mb-2">
                          {values.waiverForm ? (
                            <span className="text-green-600 font-medium">✓ {values.waiverForm.name}</span>
                          ) : (
                            "Click to upload Waiver Form"
                          )}
                        </div>
                        <div className="text-xs text-gray-500">PDF, JPG up to 5MB</div>
                      </label>
                    </div>
                    <ErrorMessage name="waiverForm" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Eligibility Video (Conditional) */}
                  {(values.events.includes("Powerlifting King/Queen") ||
                    values.events.includes("Calisthenics Freestyle")) && (
                    <div className="md:col-span-2">
                      <label className={labelClass}>Eligibility Video (30-60 seconds)</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#EA4A3E] transition-colors">
                        <input
                          type="file"
                          accept="video/*"
                          className="hidden"
                          id="eligibilityVideo"
                          onChange={(e) =>
                            setFieldValue("eligibilityVideo", e.target.files?.[0])
                          }
                        />
                        <label htmlFor="eligibilityVideo" className="cursor-pointer block">
                          <div className="text-gray-600 mb-2">
                            {values.eligibilityVideo ? (
                              <span className="text-green-600 font-medium">✓ {values.eligibilityVideo.name}</span>
                            ) : (
                              "Click to upload Eligibility Video"
                            )}
                          </div>
                          <div className="text-xs text-gray-500">MP4, MOV up to 50MB</div>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Declaration */}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <Field 
                    type="checkbox" 
                    name="declarationAccepted" 
                    className="w-5 h-5 mt-0.5 text-[#EA4A3E] focus:ring-[#EA4A3E] border-gray-300 rounded"
                  />
                  <div>
                    <span className="text-gray-900 font-medium">
                      I accept all Terms & Conditions
                    </span>
                    <p className="text-gray-600 text-sm mt-1">
                      By checking this box, I confirm that all information provided is accurate and I agree to abide by the competition rules and regulations.
                    </p>
                  </div>
                </label>
                <ErrorMessage name="declarationAccepted" component="div" className="text-red-500 text-sm mt-2" />
              </div>

              {/* Payment Summary */}
              {showPayment && (
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Selected Events</span>
                      <span className="font-medium text-gray-900">{values.events.length} events</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Base Amount</span>
                      <span className="font-medium text-gray-900">₹500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">GST (18%)</span>
                      <span className="font-medium text-gray-900">₹90</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-[#EA4A3E]">₹590</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    type="button"
                    className="mt-4 w-full bg-[#EA4A3E] hover:bg-[#d43a30] text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>

      {/* Fixed Submit Button at Bottom */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-8 py-4 rounded-b-xl">
        <Button
          type="submit"
          form="event-form"
          className="w-full bg-[#EA4A3E] hover:bg-[#d43a30] text-white font-medium py-3 text-lg rounded-lg transition-colors"
        >
          Submit Registration
        </Button>
        <p className="text-gray-500 text-sm text-center mt-3">
          By submitting, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
}