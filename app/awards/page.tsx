"use client"

import { useState } from "react"
import { Users, Mic, Camera, Vote, Award } from "lucide-react"
import VotingCard from "@/components/voting-card"
import { submitVote } from "./actions"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { awardCategories } from "@/data/awards"

interface VoterInfo {
  name: string
  email: string
  phone: string
  categoryId: string
  nomineeId: string
}

export default function AwardsPage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("participate")
  const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({})
  const [showVoteSuccess, setShowVoteSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVote = async (voterInfo: VoterInfo) => {
    const { categoryId } = voterInfo

    if (hasVoted[categoryId]) {
      toast({
        title: "Already Voted",
        description: "You have already voted in this category. One vote per category allowed.",
        variant: "destructive",
      })
      return { success: false, error: "Already voted in this category" }
    }

    const category = awardCategories.find((cat) => cat.id === categoryId)
    const nominee = category?.nominees.find((nom) => nom.id === voterInfo.nomineeId)

    if (!category || !nominee) {
      toast({
        title: "Error",
        description: "Category or nominee not found.",
        variant: "destructive",
      })
      return { success: false, error: "Category or nominee not found" }
    }

    setIsSubmitting(true)

    try {
      const result = await submitVote(voterInfo, nominee.name, category.title)

      if (!result.success) {
        throw new Error(result.error || "Failed to submit vote")
      }

      setHasVoted((prev) => ({
        ...prev,
        [categoryId]: true,
      }))

      toast({
        title: "Vote Submitted!",
        description: `Thank you ${voterInfo.name}, your vote has been recorded.`,
      })

      setShowVoteSuccess(true)
      setTimeout(() => setShowVoteSuccess(false), 5000)

      return { success: true, id: result.id }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit your vote. Please try again.",
        variant: "destructive",
      })
      return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
{/* Hero Section */}
<section
  className="min-h-[85vh] bg-cover bg-center flex items-center relative"
  style={{ backgroundImage: "url('/images/eventum-img1.jpg')" }}
>
  {/* Gradient + Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

  <div className="container mx-auto px-4 relative z-10 text-center pt-25 md:pt-32">
    {/* Heading */}
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight">
      🏆 Bengaluru Fitness <br className="hidden sm:block" /> & Wellness Awards 2026
    </h1>

    {/* Subtext */}
    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
      Celebrate excellence, inspire progress, and honor leaders shaping the future of fitness & wellness.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-8 py-3 rounded-full bg-[#EA4A3E] hover:bg-red-600 text-white font-semibold transition shadow-lg">
        Nominate Now
      </button>
      <button className="px-8 py-3 rounded-full border-2 border-white text-white hover:bg-white hover:text-black font-semibold transition shadow-lg">
        View Awards
      </button>
    </div>
  </div>
</section>



      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Tab Navigation */}
        <div className="flex w-full max-w-xl mx-auto mb-16 bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-lg border">
          <Button
            onClick={() => setActiveTab("participate")}
            variant="ghost"
            className={` cursor-pointer flex-1 rounded-xl py-4 font-bold text-lg transition-all duration-300 ${
              activeTab === "participate"
                ? "bg-[#EA4A3E] text-white shadow-lg scale-105"
                : "text-gray-600 hover:text-[#fa0368] hover:bg-gray-50"
            }`}
          >
            <Award className="mr-2 h-5 w-5" />
            Participate
          </Button>
          <Button
            onClick={() => setActiveTab("vote")}
            variant="ghost"
            className={` cursor-pointer flex-1 rounded-xl py-4 font-bold text-lg transition-all duration-300 ${
              activeTab === "vote"
                ? "bg-[#EA4A3E] text-white shadow-lg scale-105"
                : "text-gray-600 hover:text-[#fa0368] hover:bg-gray-50"
            }`}
          >
            <Vote className="mr-2 h-5 w-5" />
            Vote
          </Button>
        </div>

        {/* Participate Tab */}
        {activeTab === "participate" && (
          <div className="space-y-20">
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-900 mb-6">
                Join Our Awards
              </h2>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Be part of celebrating excellence in the fitness community. Submit your Nomination and shine on stage.
              </p>
            </div>
{/* Awards Categories */}
<div className="space-y-12">
  {/* Section Title */}
  <div className="text-center">
    <h3 className="text-3xl font-bold text-[#EA4A3E] mb-3">Award Categories</h3>
    <div className="w-20 h-1 bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] mx-auto rounded-full"></div>
  </div>

{/* Cards Grid */}
{/* Cards Grid */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  {awardCategories.map((category) => (
    <Link
      key={category.id}
      href={`/awards/${category.slug}`}
      className="group block bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden 
                 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Large Full-Width Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        <div className="absolute bottom-4 left-4 text-white">
          <h4 className="text-2xl font-bold">{category.title}</h4>
          <span className="text-sm opacity-90">{category.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed line-clamp-3">
          {category.shortDescription}
        </p>

        <div className="flex items-center justify-between text-sm font-medium text-gray-500">
          <span>Nominees</span>
          <span className="bg-[#EA4A3E] text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
            {category.nominees.length}
          </span>
        </div>

        <Button
          className="w-full mt-6 bg-gradient-to-r from-[#EA4A3E] to-[#ff7b54] text-white font-semibold rounded-xl 
                     hover:shadow-xl hover:scale-[1.02] transition-all"
        >
          Learn More
        </Button>
      </div>
    </Link>
  ))}
</div>



</div>


          </div>
        )}

{/* Vote Tab */}
{activeTab === "vote" && (
  <div className="space-y-20">
    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-black uppercase text-gray-900 mb-6">
        Vote for Excellence
      </h2>
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Support your favorite nominees and help us recognize excellence. Voting closes on{" "}
        <span className="font-bold text-[#EA4A3E]">Feb 21, 2026</span>.
      </p>
    </div>

    {showVoteSuccess && (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 px-6 py-4 rounded-2xl max-w-4xl mx-auto shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="font-semibold">Thank you! Your vote has been recorded.</p>
        </div>
      </div>
    )}

<div className="space-y-20">
  {awardCategories.map((category) => (
    <div key={category.id} className="space-y-10">
      {/* Category Header Card */}
      <div className="relative bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
        {/* Banner Image */}
        <div className="relative h-55 w-full overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

          {/* Title Overlay */}
          <div className="absolute bottom-4 left-6 text-white">
            <h3 className="text-2xl md:text-3xl font-bold">{category.title}</h3>
            <Link
              href={`/awards/${category.slug}`}
              className="text-sm font-medium text-white/90 hover:text-white underline"
            >
              View Details →
            </Link>
          </div>
        </div>
      </div>

      {/* Nominees Grid */}
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

  </div>
)}

      </div>
    </main>
  )
}
