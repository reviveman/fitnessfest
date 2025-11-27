// // app/login/head.tsx
// "use client"
// import { useSearchParams } from "next/navigation"

// export default function Head() {
//   const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null
//   const from = params?.get("from") || "/admin/dashboard"
//   const isJudgeLogin = from.startsWith("/judge")

//   return (
//     <>
//       <title>{isJudgeLogin ? "Judge Login" : "Admin Login"}</title>
//       <meta
//         name="description"
//         content={isJudgeLogin ? "Login to Judge Panel" : "Login to Admin Dashboard"}
//       />
//     </>
//   )
// }
