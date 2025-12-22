import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "@/lib/prisma"
import { columns } from "./columns"
import { DataTable } from "@/components/admin/data-table"

type TicketRegistrationData = {
  id: string
  merchantOrderId: string
  fullName: string
  mobile: string
  email: string
  passTitle: string
  amount: number
  paymentStatus: string
  provider: string
  createdAt: Date
  updatedAt: Date
}

export default async function TicketRegistrationsPage() {
  // 🔒 Disable caching (same as reference)
  noStore()

  try {
    const registrations = await prisma.ticketRegistration.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    // 🎟️ Filter options (pass titles)
    const passTitles: string[] = Array.from(
      new Set(registrations.map((r: TicketRegistrationData) => r.passTitle))
    )

    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Ticket Registrations</h1>
        </div>

        {registrations.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-500">No ticket registrations found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <DataTable
              columns={columns}
              data={registrations}
              filterColumn="fullName"
              filterOptions={{
                key: "passTitle",
                label: "Pass",
                values: passTitles,
              }}
              exportFileName="ticket_registrations"
            />
          </div>
        )}
      </div>
    )
  } catch (error) {
    console.error("Error fetching ticket registrations:", error)

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Ticket Registrations</h1>

        <div className="bg-red-50 p-6 rounded-lg shadow border border-red-200">
          <h2 className="text-red-600 font-semibold mb-2">
            Error loading registrations
          </h2>
          <pre className="text-sm text-gray-600 mt-2">
            {error instanceof Error ? error.message : "Unknown error"}
          </pre>
        </div>
      </div>
    )
  }
}
