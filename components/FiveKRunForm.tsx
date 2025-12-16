"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// -------------------------
// ✅ TYPE FORM VALUES
// -------------------------
type FormValues = {
  fullName: string;
  age: string | number;
  gender: string;
  phone: string;
  email: string;
  city: string;
  emergency: string;
  tshirt: string;
  participatedBefore: string;
  heardFrom: string[];
  // paymentScreenshot: File | null;
};

export default function FiveKRunForm({ open, setOpen }: any) {
  const inputClass =
    "w-full bg-[#1e293b] text-white border border-gray-500 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#EA4A3E]";
  const errorClass = "text-red-400 text-sm mt-1";

  // -------------------------
  // ✅ VALIDATION SCHEMA
  // -------------------------
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    age: Yup.number().required("Required").min(10).max(80),
    gender: Yup.string().required("Required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10 digits").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    city: Yup.string(),
    emergency: Yup.string().required("Required"),
    tshirt: Yup.string().required("Required"),
    participatedBefore: Yup.string().required("Required"),
    heardFrom: Yup.array().min(1, "Select at least 1 source"),
    // paymentScreenshot: Yup.mixed().required("Payment screenshot required"),
  });

  // -------------------------
  // ✅ SUBMIT HANDLER
  // -------------------------
const handleSubmit = async (
  values: FormValues,
  { setSubmitting }: any
) => {
  try {
    const res = await fetch("/api/phonepe/pay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: 1298, // 5K Run entry fee
        mobileNumber: values.phone,
        meta: values,
      }),
    });

    const data = await res.json();
    console.log("PhonePe response:", data);

    // ✅ STANDARD CHECKOUT v2
    const redirectUrl = data?.redirectUrl;

    if (redirectUrl) {
      window.location.href = redirectUrl;
    } else {
      console.error("No redirect URL from PhonePe:", data);
      alert("Payment initiation failed");
    }
  } catch (error) {
    console.error("Payment error:", error);
    alert("Something went wrong");
  } finally {
    setSubmitting(false);
  }
};




  // -------------------------
  // ✅ FORM UI
  // -------------------------
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        forceMount
        className="bg-[#0f172a] text-white border border-[#EA4A3E] max-h-[90vh] overflow-y-auto"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl">5K RUN – Registration Form</DialogTitle>
        </DialogHeader>

        {/* 🧱 Fix hydration issues by wrapping Formik */}
        <div className="pt-2">
          <Formik<FormValues>
            initialValues={{
              fullName: "",
              age: "",
              gender: "",
              phone: "",
              email: "",
              city: "",
              emergency: "",
              tshirt: "",
              participatedBefore: "",
              heardFrom: [] as string[],
              // paymentScreenshot: null,
            }}
            validationSchema={validationSchema}
            validateOnChange
            validateOnBlur
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, isSubmitting, values, errors }) => (
              <>
                {/* Debug logs safely wrapped */}
                {(() => {
                  console.log("FORMIK VALUES:", values);
                  console.log("FORMIK ERRORS:", errors);
                  console.log("IS SUBMITTING:", isSubmitting);
                  return null;
                })()}

                <Form className="space-y-6">

                  {/* Full Name */}
                  <div>
                    <label>Full Name</label>
                    <Field name="fullName" className={inputClass} />
                    <ErrorMessage name="fullName" component="div" className={errorClass} />
                  </div>

                  {/* Age */}
                  <div>
                    <label>Age</label>
                    <Field name="age" className={inputClass} />
                    <ErrorMessage name="age" component="div" className={errorClass} />
                  </div>

                  {/* Gender */}
                  <div>
                    <label>Gender</label>
                    <Field as="select" name="gender" className={inputClass}>
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className={errorClass} />
                  </div>

                  {/* Phone */}
                  <div>
                    <label>Phone</label>
                    <Field name="phone" className={inputClass} />
                    <ErrorMessage name="phone" component="div" className={errorClass} />
                  </div>

                  {/* Email */}
                  <div>
                    <label>Email</label>
                    <Field name="email" className={inputClass} />
                    <ErrorMessage name="email" component="div" className={errorClass} />
                  </div>

                  {/* City */}
                  <div>
                    <label>City</label>
                    <Field name="city" className={inputClass} />
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <label>Emergency Contact Name & Number</label>
                    <Field as="textarea" name="emergency" className={inputClass} />
                    <ErrorMessage name="emergency" component="div" className={errorClass} />
                  </div>

                  {/* T-shirt */}
                  <div>
                    <label>T-shirt Size</label>
                    <Field as="select" name="tshirt" className={inputClass}>
                      <option value="">Select</option>
                      <option>XS</option>
                      <option>S</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </Field>
                    <ErrorMessage name="tshirt" component="div" className={errorClass} />
                  </div>

                  {/* ⭐ NEW — participatedBefore */}
                  <div>
                    <label>Have you participated before? *</label>

                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="participatedBefore"
                          value="Yes"
                          checked={values.participatedBefore === "Yes"}
                          onChange={() => setFieldValue("participatedBefore", "Yes")}
                        />
                        Yes
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="participatedBefore"
                          value="No"
                          checked={values.participatedBefore === "No"}
                          onChange={() => setFieldValue("participatedBefore", "No")}
                        />
                        No
                      </label>
                    </div>

                    <ErrorMessage name="participatedBefore" component="div" className={errorClass} />
                  </div>

                  {/* Heard From */}
                  <div>
                    <label>How did you hear about this event? *</label>

                    <div className="flex flex-col gap-2 mt-2">
                      {["Instagram", "Facebook", "Friends / Family", "Gym", "Website"].map((opt) => (
                        <label key={opt} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={opt}
                            checked={values.heardFrom.includes(opt)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFieldValue("heardFrom", [...values.heardFrom, opt]);
                              } else {
                                setFieldValue(
                                  "heardFrom",
                                  values.heardFrom.filter((item) => item !== opt)
                                );
                              }
                            }}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>

                    <ErrorMessage name="heardFrom" component="div" className={errorClass} />
                  </div>

                 
                  <p className="text-gray-400 text-sm text-center mt-4">
  By submitting, you agree to the{" "}
  <a
    href="/5k-run-terms"
    target="_blank"
    className="text-blue-400 underline hover:text-blue-300"
  >
    Terms & Conditions
  </a>{" "}
  of the 5K Run.
</p>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={() =>
                      console.log("%cSUBMIT BUTTON CLICKED", "color: yellow; font-size: 14px;")
                    }
                    className="w-full bg-[#EA4A3E] hover:bg-red-600"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </DialogContent>
    </Dialog>
  );
}
