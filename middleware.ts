import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { verifyJwt } from "@/lib/jwt"
// import { error } from "console"

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const token = request.cookies.get("auth_token")?.value

  // Helper: force login
  const redirectToLogin = () => {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("from", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Helper: verify JWT
  const getPayload = async () => {
    if (!token) return null
    try {
      const payload = await verifyJwt(token)
      console.log("MIDDLEWARE PAYLOAD:", payload)   // <-- IMPORTANT DEBUG
      return payload
    } catch (err) {
      console.log("JWT VERIFY FAILED:", err)
      return null
    }
  }

  // ---------- ADMIN ----------
  if (pathname.startsWith("/admin")) {
    const payload = await getPayload()
    if (!payload) return redirectToLogin()
    if (payload.role !== "admin") {
      console.log(payload)
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }
    
  }

  // ---------- JUDGE ----------
  if (pathname.startsWith("/judge")) {
    const payload = await getPayload()
    if (!payload) return redirectToLogin()
    if (payload.role !== "judge") {
      // console.log(payload);
      // console.log(error);
      
      
      return NextResponse.redirect(new URL("/unauthorized", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/judge/:path*"],
}
