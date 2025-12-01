"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import VotingCard from "@/components/voting-card"
import { awardCategories } from "@/data/awards"
import { submitVote } from "../actions"
import { useToast } from "@/hooks/use-toast"
import { VoterInfo } from "@/types/voting"


export default function VotePage() {
  const { toast } = useToast()
  const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

 const handleVote = async (voterInfo: VoterInfo) => {
  const category = awardCategories.find((c) => c.id === voterInfo.categoryId)
  const nominee = category?.nominees.find((n) => n.id === voterInfo.nomineeId)

  if (!category || !nominee) {
    toast({
      title: "Error",
      description: "Category or nominee not found.",
      variant: "destructive",
    })
    return
  }

  if (hasVoted[voterInfo.categoryId]) {
    toast({
      title: "Already Voted",
      description: "You have already voted in this category.",
      variant: "destructive",
    })
    return
  }

  setIsSubmitting(true)

  try {
    const result = await submitVote(
      voterInfo,
      nominee.name,
      category.title
    )

    if (result.success) {
      setHasVoted((prev) => ({
        ...prev,
        [voterInfo.categoryId]: true,
      }))

      toast({
        title: "Vote Submitted!",
        description: "Thank you, your vote has been recorded.",
      })

      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }
  } catch (err) {
    toast({
      title: "Error",
      description: "Something went wrong while submitting your vote.",
      variant: "destructive",
    })
  }

  setIsSubmitting(false)
}


  return (
    <main className="bg-white mt-30">

{/* ---------------- HERO SECTION ---------------- */}
<section className="relative w-full min-h-screen overflow-hidden">

  {/* Background Video */}
  <div className="absolute inset-0 w-full h-full">
    <video
      className="w-full h-full object-cover object-center"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/video/awards-vote-banner.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 pt-40 pb-16 md:pt-52">

    {/* TITLE */}
    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl tracking-wide leading-tight">
      <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
        Vote for Your Champions
      </span>
    </h1>

    {/* SUBTITLE */}
    <p className="text-gray-200 text-lg md:text-xl max-w-3xl mt-6 leading-relaxed opacity-90">
      Help us honor the finest fitness professionals who inspire, transform,
      and uplift communities every single day.
    </p>

    {/* DATE */}
    <p className="mt-10 text-sm md:text-base tracking-widest text-gray-300 uppercase">
      Voting closes on{" "}
      <span className="font-bold text-[#EA4A3E] underline decoration-[#EA4A3E]/50">
        Feb 21, 2026
      </span>
    </p>

  </div>

</section>




      {/* ---------------- SUCCESS MESSAGE ---------------- */}
      {showSuccess && (
        <div className="max-w-3xl mx-auto mt-8 bg-green-50 border border-green-300 px-6 py-4 rounded-xl shadow-md">
          <p className="text-green-700 font-medium">Thank you! Your vote has been recorded.</p>
        </div>
      )}

      {/* ---------------- CATEGORY LIST ---------------- */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Choose a Category & Vote
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every category highlights excellence. Pick your favorite nominee and support
            their journey to victory.
          </p>
        </div>

        {awardCategories.map((category) => (
          <div key={category.id} className="space-y-10">

            {/* Category Header */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-gray-200">
              <div className="h-56 w-full relative">
                <img
                  src={category.image}
                  className="h-full w-full object-cover"
                  alt={category.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-6 text-white">
                  <h3 className="text-3xl font-extrabold">{category.title}</h3>
                  <Link
                    href={`/awards/${category.slug}`}
                    className="text-sm opacity-90 underline hover:text-white"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>

            {/* Nominees */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.nominees.map((nominee) => (
                <VotingCard
                  key={nominee.id}
                  nominee={nominee}
                  categoryId={category.id}
                  color={category.color}
                  onVote={handleVote}
                  hasVoted={hasVoted[category.id] || false}
                  isSubmitting={isSubmitting}
                />
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* ---------------- FLOATING CTA (MOBILE) ---------------- */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center md:hidden">
        <Link href="#top">
          <Button className="px-6 py-3 bg-[#EA4A3E] text-white rounded-full shadow-xl">
            Cast Your Vote Now
          </Button>
        </Link>
      </div>
    </main>
  )
}
