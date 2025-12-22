import { prisma } from "@/lib/prisma"

export default async function NewsletterPage() {
  const newsletters = await prisma.newsLetter.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          📬 Newsletter Subscribers
        </h1>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                  #
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">
                  Subscribed On
                </th>
              </tr>
            </thead>

            <tbody>
              {newsletters.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No newsletter subscribers yet.
                  </td>
                </tr>
              )}

              {newsletters.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
