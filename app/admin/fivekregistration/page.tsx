import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "@/lib/prisma"
import { columns } from "./columns"
import { DataTable } from "@/components/admin/data-table"
import { Prisma } from "@prisma/client"

/**
 * ✅ USE PRISMA TYPE (MATCHES DB EXACTLY)
 */
type FiveKRegistration =
  Prisma.FiveKRunRegistrationGetPayload<{}>

export default async function FiveKRegistrationsPage() {
  noStore()

  try {
    const registrations: FiveKRegistration[] =
      await prisma.fiveKRunRegistration.findMany({
        orderBy: { createdAt: "desc" },
      })

    const tshirtSizes = Array.from(
      new Set(registrations.map(r => r.tshirt))
    )

    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            5K Run Registrations
          </h1>
        </div>

        {registrations.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">
              No 5K registrations found.
            </p>
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={registrations}
            filterColumn="fullName"
            filterOptions={{
              key: "tshirt",
              label: "T-Shirt Size",
              values: tshirtSizes,
            }}
            exportFileName="fivek_run_registrations"
          />
        )}
      </div>
    )
  } catch (error) {
    console.error("Error fetching 5K registrations:", error)

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">
          5K Run Registrations
        </h1>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-red-600 font-semibold mb-2">
            Error loading registrations
          </h2>
          <pre className="text-sm text-gray-600">
            {error instanceof Error
              ? error.message
              : "Unknown error"}
          </pre>
        </div>
      </div>
    )
  }
}
