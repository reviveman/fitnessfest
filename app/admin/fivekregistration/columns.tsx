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
import { Prisma } from "@prisma/client"

/**
 * ✅ USE PRISMA TYPE (NULL SAFE)
 */
export type FiveKRegistration =
  Prisma.FiveKRunRegistrationGetPayload<{}>

export const columns: ColumnDef<FiveKRegistration>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "tshirt",
    header: "T-Shirt",
  },
  {
    accessorKey: "participatedBefore",
    header: "Participated Before",
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment",
    cell: ({ row }) => {
      const status = row.original.paymentStatus

      const color =
        status === "SUCCESS"
          ? "text-green-600"
          : status === "FAILED"
          ? "text-red-600"
          : "text-yellow-600"

      return <span className={`font-semibold ${color}`}>{status}</span>
    },
  },
  {
    accessorKey: "paidAmount",
    header: "Paid (₹)",
    cell: ({ row }) => row.original.paidAmount ?? "—",
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() =>
          column.toggleSorting(column.getIsSorted() === "asc")
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
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(reg.email)
              }
            >
              Copy Email
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(reg.merchantOrderId)
              }
            >
              Copy Order ID
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>View Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
