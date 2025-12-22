import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "@/lib/prisma"
import { DataTable } from "@/components/admin/data-table"
import { columns, SareeRunRow } from "./columns"

export default async function SareeRunRegistrationsPage() {
  noStore()

  try {
    const registrations =
      await prisma.sareeRunRegistration.findMany({
        orderBy: { createdAt: "desc" },
      })

    /**
     * ✅ Normalize DB → UI-safe data
     */
    const data: SareeRunRow[] = registrations.map((r) => ({
      id: r.id,
      fullName: r.fullName,
      age: Number(r.age),
      gender: r.gender,
      phone: r.phone,
      email: r.email,
      city: r.city ?? "—",
      emergencyContact: r.emergencyContact,
      participatedBefore: r.participatedBefore,
      heardFrom: r.heardFrom ?? [],
      waiver: r.waiver,
      createdAt: r.createdAt,
    }))

    return (
      <div className="container mx-auto py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">
            Saree Run Registrations
          </h1>
          <p className="text-sm text-gray-500">
            Total registrations: {data.length}
          </p>
        </div>

        <DataTable<SareeRunRow, unknown>
          columns={columns}
          data={data}
          filterColumn="fullName"
          exportFileName="saree_run_registrations"
        />
      </div>
    )
  } catch (error) {
    console.error("Error loading saree run registrations:", error)

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold text-red-600">
          Failed to load Saree Run registrations
        </h1>
      </div>
    )
  }
}
