import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "@/lib/prisma"
import { columns } from "./columns"
import { DataTable } from "@/components/admin/data-table"
import { Prisma } from "@prisma/client"

/**
 * ✅ Use Prisma-generated type (null-safe, JSON-safe)
 */
type EventRegistration =
  Prisma.EventRegistrationGetPayload<{}>

export default async function EventRegistrationsPage() {
  noStore()

  try {
    const registrations: EventRegistration[] =
      await prisma.eventRegistration.findMany({
        orderBy: { createdAt: "desc" },
      })

    /**
     * 🔍 Collect unique event names
     */
    const eventNames = Array.from(
      new Set(registrations.flatMap(r => r.events ?? []))
    )

    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Event Registrations
          </h1>
        </div>

        {registrations.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">
              No registrations found.
            </p>
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={registrations}
            filterColumn="fullName"
            filterOptions={{
              key: "events",
              label: "Event",
              values: eventNames,
            }}
            exportFileName="event_registrations"
          />
        )}
      </div>
    )
  } catch (error) {
    console.error("Error fetching event registrations:", error)

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">
          Event Registrations
        </h1>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-red-600 font-semibold mb-2">
            Error loading registrations
          </h2>
          <pre className="text-sm text-gray-600 mt-2">
            {error instanceof Error
              ? error.message
              : "Unknown error"}
          </pre>
        </div>
      </div>
    )
  }
}
