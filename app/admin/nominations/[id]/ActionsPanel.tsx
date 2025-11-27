"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

type Nomination = {
  id: string
  status: string
  adminNotes?: string | null
}

export default function ActionsPanel({ nomination }: { nomination: Nomination }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState(nomination.adminNotes || "")

  async function updateStatus(newStatus: string) {
    setLoading(true)
    await fetch(`/api/nominations/${nomination.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
    setLoading(false)
    router.refresh()
  }

  async function saveNotes() {
    setLoading(true)
    await fetch(`/api/nominations/${nomination.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminNotes: notes }),
    })
    setLoading(false)
    router.refresh()
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-500">Current Status</label>
        <div className="mt-1">
          <Badge>{nomination.status}</Badge>
        </div>
      </div>

      <Separator />

      <div className="space-y-2">
        <Button className="w-full" disabled={loading} onClick={() => updateStatus("APPROVED")}>
          Approve Nomination
        </Button>
        <Button className="w-full" variant="outline" disabled={loading} onClick={() => updateStatus("UNDER_REVIEW")}>
          Mark Under Review
        </Button>
        <Button className="w-full" variant="outline" disabled={loading} onClick={() => updateStatus("SHORTLISTED")}>
          Shortlist
        </Button>
        <Button className="w-full" variant="destructive" disabled={loading} onClick={() => updateStatus("REJECTED")}>
          Reject Nomination
        </Button>
      </div>

      <Separator />

      <div>
        <label className="text-sm font-medium text-gray-500">Admin Notes</label>
        <textarea
          className="mt-1 w-full p-2 border rounded-md"
          rows={3}
          placeholder="Add notes..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <Button size="sm" className="mt-2" onClick={saveNotes} disabled={loading}>
          Save Notes
        </Button>
      </div>
    </div>
  )
}
