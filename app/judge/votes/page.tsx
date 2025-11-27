"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";

export default function JudgeVotesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [votes, setVotes] = useState([]);
  const [votesLoading, setVotesLoading] = useState(true);

  // --- Role Protection ---
  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.role !== "judge") {
      router.replace("/unauthorized");
      return;
    }
  }, [loading, user, router]);

  // --- Load votes after auth check ---
  useEffect(() => {
    if (!loading && user?.role === "judge") {
      setVotesLoading(true);
      fetch("/api/judge/votes", { 
        cache: "no-store",
        credentials: "include" // Ensure cookies are sent
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch votes");
          return res.json();
        })
        .then((data) => setVotes(data))
        .catch((error) => {
          console.error("Error fetching votes:", error);
        })
        .finally(() => setVotesLoading(false));
    }
  }, [loading, user]);

  // Show loading until auth decided
  if (loading) return <p className="p-8 text-lg">Loading...</p>;
  if (!user) return null; // prevents flash redirect

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Judge Dashboard – Award Votes</h1>

      {votesLoading ? (
        <p className="p-4 text-center">Loading votes...</p>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-4">
          {votes.length === 0 ? (
            <p className="p-4 text-center text-gray-500">No votes found.</p>
          ) : (
            <table className="w-full border text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border">Voter Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Phone</th>
                  <th className="p-3 border">Nominee</th>
                  <th className="p-3 border">Category</th>
                  <th className="p-3 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {votes.map((v: any) => (
                  <tr key={v.id}>
                    <td className="p-2 border">{v.voterName}</td>
                    <td className="p-2 border">{v.voterEmail}</td>
                    <td className="p-2 border">{v.voterPhone}</td>
                    <td className="p-2 border">{v.nomineeName}</td>
                    <td className="p-2 border">{v.categoryName}</td>
                    <td className="p-2 border">
                      {new Date(v.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </main>
  );
}