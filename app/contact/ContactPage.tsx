"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "./actions";
import ThankYouPage from "@/components/thankYou/ThankYouPage";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const typeFromUrl = searchParams.get("type")?.toLowerCase() || "visitor";
  const [activeTab, setActiveTab] = useState(typeFromUrl);

  useEffect(() => {
    setActiveTab(typeFromUrl);
  }, [typeFromUrl]);

  // Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),

    fitnessLevel: Yup.string().when([], {
      is: () => activeTab === "exhibitor",
      then: (s) => s.required("Select fitness level"),
    }),
    competitionInterest: Yup.string().when([], {
      is: () => activeTab === "exhibitor",
      then: (s) => s.required("Select competition"),
    }),

    company: Yup.string().when([], {
      is: () => activeTab === "sponsor",
      then: (s) => s.required("Enter company name"),
    }),
    website: Yup.string().when([], {
      is: () => activeTab === "sponsor",
      then: (s) => s.url("Invalid URL").required("Company website required"),
    }),
  });

  // Thank You Page redirect
  if (searchParams.has("type")) {
    return (
      <div className=" mt-10 min-h-screen flex items-center justify-center bg-gray-50">
        <ThankYouPage type={typeFromUrl} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container max-w-7xl mx-auto px-4">
        
        {/* TWO COLUMN LAYOUT */}
        <div className="mt-45 grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* LEFT COLUMN - FORM */}
          <div className="bg-white border border-gray-300 shadow-sm p-8">

            {/* TABS */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
              <TabsList className="flex gap-2 bg-transparent p-0 shadow-none">
                
                <TabsTrigger
                  value="visitor"
                  className="
                    px-6 py-2 text-sm font-semibold border border-black rounded-none
                    data-[state=active]:bg-black data-[state=active]:text-white
                    hover:bg-gray-100
                  "
                >
                  Visitor
                </TabsTrigger>

                <TabsTrigger
                  value="exhibitor"
                  className="
                    px-6 py-2 text-sm font-semibold border border-black rounded-none
                    data-[state=active]:bg-black data-[state=active]:text-white
                    hover:bg-gray-100
                  "
                >
                  Exhibitor
                </TabsTrigger>

                <TabsTrigger
                  value="sponsor"
                  className="
                    px-6 py-2 text-sm font-semibold border border-black rounded-none
                    data-[state=active]:bg-black data-[state=active]:text-white
                    hover:bg-gray-100
                  "
                >
                  Sponsor
                </TabsTrigger>

              </TabsList>

              {/* FORM */}
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                  fitnessLevel: "",
                  competitionInterest: "",
                  experience: "",
                  company: "",
                  website: "",
                  sponsorshipLevel: "",
                }}
                validationSchema={validationSchema}
              onSubmit={async (values) => {
  setIsSubmitting(true);

  const formData = new FormData();
  Object.entries(values).forEach(([key, value]) => {
    formData.append(key, value as string);
  });

  formData.append("type", activeTab);

  try {
    const result = await submitContactForm(formData);

    if (result.success) {
      router.push(`/contact?type=${activeTab}`);
    } else {
      console.error(result.error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  } catch (err) {
    console.error(err);
    toast({
      title: "Server Error",
      description: "Unable to submit your request.",
      variant: "destructive",
    });
  }

  setIsSubmitting(false);
}}

              >
                {({ setFieldValue, errors, touched }) => (
                  <Form className="space-y-6">

                    {/* Visitor */}
                    <TabsContent value="visitor">
                      <p className="text-sm text-gray-600 mb-4">
                        Have a question? We are ready to help.
                      </p>
                    </TabsContent>

                    {/* Exhibitor */}
                    <TabsContent value="exhibitor">
                      <p className="text-sm text-gray-600 mb-4">
                        Want to exhibit? Tell us more.
                      </p>

                      <div>
                        <label className="block font-medium mb-1">Fitness Level</label>
                        <Select onValueChange={(value) => setFieldValue("fitnessLevel", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your fitness level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="elite">Elite</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.fitnessLevel && touched.fitnessLevel && (
                          <p className="text-red-500 text-sm">{errors.fitnessLevel}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-medium mb-1">Competition Interest</label>
                        <Select onValueChange={(value) => setFieldValue("competitionInterest", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select competition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="powerlifting">Powerlifting</SelectItem>
                            <SelectItem value="crossfit">CrossFit</SelectItem>
                            <SelectItem value="marathon">Marathon</SelectItem>
                            <SelectItem value="obstacle">Obstacle Course</SelectItem>
                            <SelectItem value="yoga">Yoga</SelectItem>
                            <SelectItem value="team">Team Challenge</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.competitionInterest && touched.competitionInterest && (
                          <p className="text-red-500 text-sm">{errors.competitionInterest}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-medium mb-1">Experience</label>
                        <Field
                          as={Textarea}
                          name="experience"
                          rows={3}
                          placeholder="Tell us about your previous competition experience"
                        />
                      </div>
                    </TabsContent>

                    {/* Sponsor */}
                    <TabsContent value="sponsor">
                      <p className="text-sm text-gray-600 mb-4">
                        Sponsorship details help us prepare.
                      </p>

                      <div>
                        <label className="block font-medium mb-1">Company Name</label>
                        <Field as={Input} name="company" />
                        {errors.company && touched.company && (
                          <p className="text-red-500 text-sm">{errors.company}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-medium mb-1">Company Website</label>
                        <Field as={Input} name="website" />
                        {errors.website && touched.website && (
                          <p className="text-red-500 text-sm">{errors.website}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-medium mb-1">Sponsorship Level</label>
                        <Select onValueChange={(value) => setFieldValue("sponsorshipLevel", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sponsorship level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="platinum">Platinum</SelectItem>
                            <SelectItem value="gold">Gold</SelectItem>
                            <SelectItem value="silver">Silver</SelectItem>
                            <SelectItem value="bronze">Bronze</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>

                    {/* Common Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-medium mb-1">Full Name</label>
                        <Field as={Input} name="name" />
                        {errors.name && touched.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-medium mb-1">Email Address</label>
                        <Field as={Input} name="email" type="email" />
                        {errors.email && touched.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-medium mb-1">Phone Number</label>
                      <Field as={Input} name="phone" />
                      {errors.phone && touched.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block font-medium mb-1">Message</label>
                      <Field as={Textarea} name="message" rows={5} />
                      {errors.message && touched.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#EA4A3E] hover:bg-[#EA4A3E]/90 text-white px-8 py-3 rounded-none font-semibold cursor-pointer"
                      >
                        {isSubmitting ? "Sending..." : "Submit"}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Tabs>

          </div>

          {/* RIGHT COLUMN - IMAGE */}
          <div className="w-full h-full">
            <img
              src="/images/eventum-img1.jpg"
              className="w-full h-full object-cover rounded-none"
              alt="Contact"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
