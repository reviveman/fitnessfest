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
import { Mail, Phone, Award, Dumbbell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "./actions";
import ThankYouPage from "@/components/thankYou/ThankYouPage";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // default to visitor if no ?type provided
  const typeFromUrl = searchParams.get("type")?.toLowerCase() || "visitor";
  const [activeTab, setActiveTab] = useState(typeFromUrl);

  // keep tab in sync with query param
  useEffect(() => {
    setActiveTab(typeFromUrl);
  }, [typeFromUrl]);

const handleSubmit = async (event: React.FormEvent) => {
  event.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("type", activeTab);

    // 🚀 Redirect first (instant feedback to user)
    router.push(`/contact?type=${activeTab}`);

    // Run submission logic in background
    submitContactForm(formData)
      .then((result) => {
        if (!result.success) {
          console.error("Background submission failed:", result.error);
        }
      })
      .catch((err) => {
        console.error("Submission error:", err);
      });
  } catch (error: any) {
    console.error("Contact form submission error:", error);
    toast({
      title: "Error",
      description:
        error.message || "Failed to send your message. Please try again.",
      variant: "destructive",
    });
    setIsSubmitting(false);
  }
};


  // ✅ If redirected with ?type=visitor/exhibitor/sponsor → show Thank You page
  if (searchParams.has("type")) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <ThankYouPage type={typeFromUrl} />
        {/* <div className="mt-6 text-center">
          <Button
            onClick={() => router.push("/contact")}
            className="bg-[#EA4A3E] hover:bg-[#EA4A3E]/90 text-white px-6 py-2 rounded-full"
          >
            Submit Another Response
          </Button>
        </div> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section
        className="min-h-[70vh] bg-cover bg-center py-20 flex items-center relative"
        style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-white text-5xl font-bold mb-4">Contact Us</h1>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
              <TabsList className="grid grid-cols-3 mb-6 bg-gray-100">
                <TabsTrigger
                  value="visitor"
                  className=" cursor-pointer flex items-center gap-2 data-[state=active]:bg-[#EA4A3E] data-[state=active]:text-white"
                >
                  <Mail className="w-4 h-4" />
                  Visitor
                </TabsTrigger>
                <TabsTrigger
                  value="exhibitor"
                  className=" cursor-pointer flex items-center gap-2 data-[state=active]:bg-[#EA4A3E] data-[state=active]:text-white"
                >
                  <Dumbbell className="w-4 h-4" />
                  Exhibitor
                </TabsTrigger>
                <TabsTrigger
                  value="sponsor"
                  className=" cursor-pointer flex items-center gap-2 data-[state=active]:bg-[#EA4A3E] data-[state=active]:text-white"
                >
                  <Award className="w-4 h-4" />
                  Sponsor
                </TabsTrigger>
              </TabsList>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Visitor Tab */}
                <TabsContent value="visitor">
                  <p className="text-sm text-gray-600 mb-4">
                    Have a question about our event? Our team is ready to help you with any general inquiries.
                  </p>
                </TabsContent>

                {/* Exhibitor Tab */}
                <TabsContent value="exhibitor">
                  <p className="text-sm text-gray-600 mb-4">
                    Interested in exhibiting at our event? Tell us about your
                    experience and what you’d like to showcase.
                  </p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fitness Level
                    </label>
                    <Select name="fitnessLevel">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your fitness level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="elite">Elite/Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Competition Interest
                    </label>
                    <Select name="competitionInterest">
                      <SelectTrigger>
                        <SelectValue placeholder="Select competition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="powerlifting">Powerlifting Challenge</SelectItem>
                        <SelectItem value="crossfit">CrossFit Championship</SelectItem>
                        <SelectItem value="marathon">Fitness Marathon</SelectItem>
                        <SelectItem value="obstacle">Obstacle Course</SelectItem>
                        <SelectItem value="yoga">Yoga & Flexibility</SelectItem>
                        <SelectItem value="team">Team Challenge</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Previous Experience
                    </label>
                    <Textarea
                      name="experience"
                      placeholder="Tell us about your previous competition experience"
                      rows={3}
                    />
                  </div>
                </TabsContent>

                {/* Sponsor Tab */}
                <TabsContent value="sponsor">
                  <p className="text-sm text-gray-600 mb-4">
                    Interested in sponsoring our event? Let us know about your
                    company and sponsorship interests.
                  </p>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <Input name="company" placeholder="Your company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Website
                    </label>
                    <Input name="website" placeholder="https://yourcompany.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sponsorship Level
                    </label>
                    <Select name="sponsorshipLevel">
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

                {/* Common fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input name="phone" placeholder="+91 98765 43210" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input name="subject" placeholder="Message subject" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-[#EA4A3E] hover:bg-[#EA4A3E]/90 text-white px-8 py-3 rounded-full font-semibold cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </div>
              </form>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}
