import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "@/lib/prisma"
import { columns, EventRegistration } from "./columns"
import { DataTable } from "@/components/admin/data-table"

export default async function EventRegistrationsPage() {
  noStore()

  try {
    /* ================================
       FETCH REGISTRATIONS
    ================================= */
    const registrations: EventRegistration[] =
      await prisma.eventRegistration.findMany({
        orderBy: { createdAt: "desc" },
      })

    /* ================================
       EVENT COUNTS
    ================================= */
    const eventCountMap: Record<string, number> = {}

    registrations.forEach((reg) => {
      reg.events?.forEach((event) => {
        eventCountMap[event] =
          (eventCountMap[event] || 0) + 1
      })
    })

    const eventNames = Object.keys(eventCountMap)

    return (
      <div className="container mx-auto py-10">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Competition Registrations
          </h1>
          <p className="text-sm text-gray-500">
            Total registrations: {registrations.length}
          </p>
        </div>

        {/* EVENT COUNT CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {eventNames.map((event) => (
            <div
              key={event}
              className="bg-white rounded-lg shadow p-4"
            >
              <p className="text-sm text-gray-500 truncate">
                {event}
              </p>
              <p className="text-2xl font-bold text-[#EA4A3E]">
                {eventCountMap[event]}
              </p>
            </div>
          ))}
        </div>

        {/* DATA TABLE */}
        {registrations.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">
              No registrations found.
            </p>
          </div>
        ) : (
          <DataTable<EventRegistration, unknown>
            columns={columns}
            data={registrations}
            filterColumn="fullName"
            filterOptions={{
              key: "events",     // ✅ ARRAY FILTER WORKS
              label: "Event",
              values: eventNames,
            }}
            exportFileName="event_registrations"
          />
        )}
      </div>
    )
  } catch (error) {
    console.error(
      "Error fetching event registrations:",
      error
    )

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold text-red-600">
          Failed to load registrations
        </h1>
      </div>
    )
  }
}
