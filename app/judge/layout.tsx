"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function JudgeLayout({ children }: { children: React.ReactNode }) {
  const { logout } = useAuth();

  return (
    <div className=" mt-30 min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className=" mt-25 w-64 bg-gray-800 p-5">
        <h2 className="text-xl font-bold mb-6">Judge Panel</h2>

        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="/judge/votes"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Votes
              </Link>
            </li>

            <li>
              <Link
                href="/judge/votes"
                className="block px-4 py-2 rounded hover:bg-gray-700"
              >
                Vote Details
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={logout}
          className="mt-10 w-full py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 bg-white text-black p-8">{children}</main>
    </div>
  );
}
