"use client"

import type { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export type NominationStatus =
  | "PENDING"
  | "UNDER_REVIEW"
  | "APPROVED"
  | "REJECTED"
  | "SHORTLISTED"

export type NominationRow = {
  id: string
  fullName: string
  email: string
  awardTitle: string
  cityArea: string
  status: NominationStatus
  createdAt: Date
}

export const columns: ColumnDef<NominationRow, unknown>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "awardTitle",
    header: "Award",
  },
  {
    accessorKey: "cityArea",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status

      const color =
        status === "APPROVED"
          ? "bg-green-100 text-green-800"
          : status === "REJECTED"
          ? "bg-red-100 text-red-800"
          : status === "UNDER_REVIEW"
          ? "bg-yellow-100 text-yellow-800"
          : status === "SHORTLISTED"
          ? "bg-blue-100 text-blue-800"
          : "bg-gray-100 text-gray-800"

      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
          {status}
        </span>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleDateString(),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <Link
        href={`/admin/nominations/${row.original.id}`}
        className="text-blue-600 hover:underline"
      >
        View Details
      </Link>
    ),
  },
]
