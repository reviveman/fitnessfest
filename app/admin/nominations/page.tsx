export const dynamic = "force-dynamic"

import { unstable_noStore as noStore } from "next/cache"
import { prisma } from "@/lib/prisma"
import { DataTable } from "@/components/admin/data-table"
import { columns, NominationRow } from "./columns"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function NominationsPage() {
  noStore()

  try {
    const nominations = await prisma.nomination.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        fullName: true,
        email: true,
        awardTitle: true,
        status: true,
        createdAt: true,
        cityArea: true,
      },
    })

    const data: NominationRow[] = nominations.map((n) => ({
      id: n.id,
      fullName: n.fullName,
      email: n.email,
      awardTitle: n.awardTitle,
      cityArea: n.cityArea,
      status: n.status,
      createdAt: n.createdAt,
    }))

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Nominations</CardTitle>
            <CardDescription>
              Showing {data.length} nominations
            </CardDescription>
          </CardHeader>

          <CardContent>
            <DataTable<NominationRow, unknown>
              columns={columns}
              data={data}
              filterColumn="fullName"
              filterOptions={{
                key: "status",
                label: "status",
                values: [
                  "PENDING",
                  "UNDER_REVIEW",
                  "SHORTLISTED",
                  "APPROVED",
                  "REJECTED",
                ],
              }}
              exportFileName="nominations"
            />
          </CardContent>
        </Card>
      </div>
    )
  } catch (error) {
    console.error("Error fetching nominations:", error)

    return (
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold text-red-600">
          Error loading nominations
        </h1>
      </div>
    )
  }
} 
