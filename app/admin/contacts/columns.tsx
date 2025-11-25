"use client"

import type { ColumnDef } from "@tanstack/react-table"
import {
  MoreHorizontal,
  ArrowUpDown,
  Trash,
  Eye,
  CheckCircle,
  Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"

export type Contact = {
  id: string
  name: string
  email: string
  phone: string | null
  message: string
  type: string

  // Exhibitor fields
  fitnessLevel: string | null
  competitionInterest: string | null
  experience: string | null

  // Sponsor fields
  company: string | null
  website: string | null
  sponsorshipLevel: string | null

  createdAt: Date
  updatedAt: Date
}

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      const type = row.getValue("type") as string

      const color =
        type === "visitor"
          ? "bg-blue-100 text-blue-800"
          : type === "exhibitor"
          ? "bg-green-100 text-green-800"
          : type === "sponsor"
          ? "bg-purple-100 text-purple-800"
          : "bg-gray-100 text-gray-800"

      return <Badge className={color}>{type}</Badge>
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"))
      return <div>{formatDistanceToNow(date, { addSuffix: true })}</div>
    },
  },

  // ACTIONS
  {
    id: "actions",
    cell: ({ row }) => {
      const contact = row.original
      const [showDetails, setShowDetails] = useState(false)

      const handleDelete = async () => {
        if (!confirm("Delete this contact?")) return

        try {
          const res = await fetch(`/api/admin/contacts/${contact.id}`, { method: "DELETE" })
          if (!res.ok) throw new Error("Failed")

          toast({ title: "Deleted", description: "Contact removed successfully." })
          window.location.reload()
        } catch {
          toast({
            title: "Error",
            description: "Unable to delete contact.",
            variant: "destructive",
          })
        }
      }

      const markAsResolved = async () => {
        try {
          const res = await fetch(`/api/admin/contacts/${contact.id}/resolve`, {
            method: "PUT",
          })

          if (!res.ok) throw new Error("Failed")

          toast({
            title: "Marked as Resolved",
            description: "This contact is now resolved.",
          })
        } catch {
          toast({
            title: "Error",
            description: "Unable to update contact.",
            variant: "destructive",
          })
        }
      }

      const sendEmail = () => {
        window.open(`mailto:${contact.email}`, "_blank")
      }

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>

              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(contact.id)}>
                Copy ID
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => setShowDetails(true)}>
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </DropdownMenuItem>

              <DropdownMenuItem onClick={sendEmail}>
                <Mail className="mr-2 h-4 w-4" />
                Reply by Email
              </DropdownMenuItem>

              <DropdownMenuItem onClick={markAsResolved}>
                <CheckCircle className="mr-2 h-4 w-4" />
                Mark Resolved
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={handleDelete} className="text-red-600">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* DETAILS MODAL */}
          <Dialog open={showDetails} onOpenChange={setShowDetails}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>Contact Details</DialogTitle>
                <DialogDescription>
                  Submitted {formatDistanceToNow(new Date(contact.createdAt), { addSuffix: true })}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">

                <DetailRow label="Name" value={contact.name} />
                <DetailRow
                  label="Email"
                  value={<a href={`mailto:${contact.email}`} className="text-blue-600">{contact.email}</a>}
                />

                {contact.phone && <DetailRow label="Phone" value={contact.phone} />}
                <DetailRow label="Type" value={contact.type} />

                <DetailRow label="Message" value={contact.message} large />

                {/* Exhibitor fields */}
                {contact.type === "exhibitor" && (
                  <>
                    {contact.fitnessLevel && <DetailRow label="Fitness Level" value={contact.fitnessLevel} />}
                    {contact.competitionInterest && <DetailRow label="Competition" value={contact.competitionInterest} />}
                    {contact.experience && <DetailRow label="Experience" value={contact.experience} large />}
                  </>
                )}

                {/* Sponsor fields */}
                {contact.type === "sponsor" && (
                  <>
                    {contact.company && <DetailRow label="Company" value={contact.company} />}
                    {contact.website && (
                      <DetailRow
                        label="Website"
                        value={<a className="text-blue-600" href={contact.website} target="_blank">{contact.website}</a>}
                      />
                    )}
                    {contact.sponsorshipLevel && (
                      <DetailRow label="Sponsorship Level" value={contact.sponsorshipLevel} />
                    )}
                  </>
                )}
              </div>

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => setShowDetails(false)}>Close</Button>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={sendEmail}>
                    <Mail className="mr-2 h-4 w-4" /> Reply
                  </Button>
                  <Button onClick={markAsResolved}>
                    <CheckCircle className="mr-2 h-4 w-4" /> Mark Resolved
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )
    },
  },
]

function DetailRow({
  label,
  value,
  large,
}: {
  label: string
  value: React.ReactNode
  large?: boolean
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="font-medium">{label}:</div>
      <div className={`col-span-3 ${large ? "whitespace-pre-wrap" : ""}`}>
        {value}
      </div>
    </div>
  )
}
