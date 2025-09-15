"use client"

import { useState } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faCheck } from "@fortawesome/free-solid-svg-icons"
import { Button } from "@/components/ui/button"
import VoterFormModal from "./voter-form-modal"

interface Nominee {
  id: string
  name: string
  description: string
  votes: number
  image: string
}

interface VotingCardProps {
  nominee: Nominee
  categoryId: string
  color: string
  onVote: (voterInfo: VoterInfo) => Promise<{ success: boolean; id?: string; error?: string } | void>
  hasVoted: boolean
  isSubmitting?: boolean
}

export interface VoterInfo {
  name: string
  email: string
  phone: string
  nomineeId: string
  categoryId: string
}

export default function VotingCard({
  nominee,
  categoryId,
  color,
  onVote,
  hasVoted,
  isSubmitting = false,
}: VotingCardProps) {
  const [isVoting, setIsVoting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [localVotes, setLocalVotes] = useState(nominee.votes)
  const [showVoterForm, setShowVoterForm] = useState(false)

  const votePercentage = Math.min(Math.round((localVotes / 500) * 100), 100)

  const getProgressColor = () => {
    switch (color) {
      case "red":
        return "bg-[#dc5044]"
      case "teal":
        return "bg-[#70adb0]"
      case "yellow":
        return "bg-[#f3c532]"
      default:
        return "bg-pink-500"
    }
  }

  const handleVoteClick = () => {
    if (hasVoted || isSubmitting) return
    setShowVoterForm(true)
  }

  const handleVoterFormSubmit = async (voterInfo: VoterInfo) => {
    setShowVoterForm(false)
    setIsVoting(true)

    try {
      const result = await onVote(voterInfo)

      if (result && result.success) {
        setLocalVotes((prev) => prev + 1)
        setShowConfirmation(true)
        setTimeout(() => setShowConfirmation(false), 3000)
      }
    } catch (error) {
      console.error("Error submitting vote:", error)
    } finally {
      setIsVoting(false)
    }
  }

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
        {/* Header with image + name */}
        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:gap-4">
          <div className="flex justify-center sm:justify-start">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
              <Image
                src={nominee.image || "/placeholder.svg"}
                alt={nominee.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <h3 className="mt-4 sm:mt-0 text-center sm:text-left text-xl font-bold text-gray-800">
            {nominee.name}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            {nominee.description}
          </p>

          {/* Votes Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-xs sm:text-sm mb-1">
              <span className="font-medium text-gray-700">Votes</span>
              <span className="font-medium text-gray-700">{localVotes}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressColor()}`}
                style={{ width: `${votePercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Action */}
          <div className="mt-auto">
            {showConfirmation ? (
              <div className="bg-green-100 text-green-700 p-3 rounded-lg flex items-center justify-center gap-2 animate-pulse">
                <FontAwesomeIcon icon={faCheck} />
                <span className="text-sm sm:text-base">Vote recorded!</span>
              </div>
            ) : (
              <Button
                onClick={handleVoteClick}
                disabled={isVoting || hasVoted || isSubmitting}
                className={`w-full py-3 rounded-xl  cursor-pointer text-sm sm:text-base ${
                  hasVoted || isSubmitting
                    ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                    : "bg-[#EA4A3E] hover:bg-[#EA4A3E]/80 text-700 text-white"
                }`}
              >
                {isVoting || isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </span>
                ) : hasVoted ? (
                  <span className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faCheck} />
                    Already Voted
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    Vote for {nominee.name}
                  </span>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      {showVoterForm && (
        <VoterFormModal
          nominee={nominee}
          categoryId={categoryId}
          onClose={() => setShowVoterForm(false)}
          onSubmit={handleVoterFormSubmit}
        />
      )}
    </>
  )
}
