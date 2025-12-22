"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/* ================= TYPES ================= */

type FormValues = {
  fullName: string;
  age: number | "";
  gender: string;
  phone: string;
  email: string;
  city: string;
  emergency: string;
  tshirt: string;
  participatedBefore: string;
  heardFrom: string[];
};

export default function FiveKRunForm({ open, setOpen }: any) {
  const inputClass =
    "w-full bg-[#1e293b] text-white border border-gray-600 rounded-md p-2 mt-1";
  const errorClass = "text-red-400 text-sm mt-1";

  /* ================= VALIDATION ================= */

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    age: Yup.number().min(10).max(80).required("Required"),
    gender: Yup.string().required("Required"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Enter 10 digits").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    emergency: Yup.string().required("Required"),
    tshirt: Yup.string().required("Required"),
    participatedBefore: Yup.string().required("Required"),
    heardFrom: Yup.array().min(1, "Select at least one"),
  });

  /* ================= SUBMIT ================= */

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    try {
      // 1️⃣ Save registration
      const saveRes = await fetch("/api/fivek-run/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          amount: 1298,
        }),
      });

      const saveData = await saveRes.json();
      if (!saveData?.merchantOrderId) {
        throw new Error("Registration failed");
      }

      // 2️⃣ Start PhonePe payment
      const payRes = await fetch("/api/phonepe/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 1298,
          //  amount: 1,
          merchantOrderId: saveData.merchantOrderId,
        }),
      });

      const payData = await payRes.json();
      if (payData?.redirectUrl) {
        window.location.href = payData.redirectUrl;
      } else {
        throw new Error("Payment initiation failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  /* ================= UI ================= */

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#0f172a] text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            5K RUN – Registration
          </DialogTitle>
        </DialogHeader>

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
            heardFrom: [],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="space-y-5">

              <div>
                <label>Full Name</label>
                <Field name="fullName" className={inputClass} />
                <ErrorMessage name="fullName" component="div" className={errorClass} />
              </div>

              <div>
                <label>Age</label>
                <Field name="age" className={inputClass} />
                <ErrorMessage name="age" component="div" className={errorClass} />
              </div>

              <div>
                <label>Gender</label>
                <Field as="select" name="gender" className={inputClass}>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Field>
              </div>

              <div>
                <label>Phone</label>
                <Field name="phone" className={inputClass} />
              </div>

              <div>
                <label>Email</label>
                <Field name="email" className={inputClass} />
              </div>

              <div>
                <label>Emergency Contact</label>
                <Field as="textarea" name="emergency" className={inputClass} />
              </div>

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
              </div>

              <div>
                <label>Participated Before?</label>
                <div className="flex gap-4 mt-2">
                  {["Yes", "No"].map((v) => (
                    <label key={v} className="flex gap-2">
                      <input
                        type="radio"
                        checked={values.participatedBefore === v}
                        onChange={() => setFieldValue("participatedBefore", v)}
                      />
                      {v}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label>How did you hear about us?</label>
                {["Instagram", "Facebook", "Gym", "Friends", "Website"].map((opt) => (
                  <label key={opt} className="flex gap-2 mt-1">
                    <input
                      type="checkbox"
                      checked={values.heardFrom.includes(opt)}
                      onChange={(e) =>
                        setFieldValue(
                          "heardFrom",
                          e.target.checked
                            ? [...values.heardFrom, opt]
                            : values.heardFrom.filter((i) => i !== opt)
                        )
                      }
                    />
                    {opt}
                  </label>
                ))}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#EA4A3E]"
              >
                {isSubmitting ? "Processing..." : "Pay ₹1,298 & Continue"}
              </Button>

            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}
