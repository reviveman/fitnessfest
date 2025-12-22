"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

/**
 * ✅ Row type used everywhere (columns + table + page)
 */
export type EventRegistration = {
  id: string
  merchantOrderId: string
  fullName: string
  mobile: string
  email: string
  events: string[]
  paymentInfo: any | null
  createdAt: Date
}

export const columns: ColumnDef<EventRegistration, unknown>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "mobile",
    header: "Mobile",
  },
  {
    accessorKey: "events",
    header: "Event(s)",
    cell: ({ row }) =>
      row.original.events?.length
        ? row.original.events.join(", ")
        : "—",
  },
  {
    id: "paymentStatus",
    header: "Payment",
    cell: ({ row }) => {
      const payment = row.original.paymentInfo as
        | { status?: string }
        | null

      const status = payment?.status ?? "PENDING"

      const color =
        status === "SUCCESS"
          ? "text-green-600"
          : status === "FAILED"
          ? "text-red-600"
          : "text-yellow-600"

      return (
        <span className={`font-semibold ${color}`}>
          {status}
        </span>
      )
    },
  },
  {
    id: "paidAmount",
    header: "Amount (₹)",
    cell: ({ row }) => {
      const payment = row.original.paymentInfo as
        | { paidAmount?: number }
        | null

      return payment?.paidAmount ?? "—"
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(
            column.getIsSorted() === "asc"
          )
        }
      >
        Date
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleString(),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const reg = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              Actions
            </DropdownMenuLabel>

            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(reg.email)
              }
            >
              Copy Email
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(
                  reg.merchantOrderId
                )
              }
            >
              Copy Order ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              View Details
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
