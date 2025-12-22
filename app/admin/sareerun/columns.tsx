"use client"

import type { ColumnDef } from "@tanstack/react-table"

/**
 * ✅ Shared row type
 */
export type SareeRunRow = {
  id: string
  fullName: string
  age: number
  gender: string
  phone: string
  email: string
  city: string
  emergencyContact: string
  participatedBefore: string
  heardFrom: string[]
  waiver: boolean
  createdAt: Date
}

export const columns: ColumnDef<SareeRunRow, unknown>[] = [
  { accessorKey: "fullName", header: "Name" },
  { accessorKey: "age", header: "Age" },
  { accessorKey: "gender", header: "Gender" },
  { accessorKey: "phone", header: "Phone" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "city", header: "City" },
  {
    accessorKey: "heardFrom",
    header: "Heard From",
    cell: ({ row }) =>
      row.original.heardFrom.length
        ? row.original.heardFrom.join(", ")
        : "—",
  },
  {
    accessorKey: "participatedBefore",
    header: "Participated Before",
  },
  {
    accessorKey: "waiver",
    header: "Waiver",
    cell: ({ row }) => (row.original.waiver ? "Yes" : "No"),
  },
  {
    accessorKey: "createdAt",
    header: "Registered On",
    cell: ({ row }) =>
      new Date(row.original.createdAt).toLocaleString(),
  },
]
