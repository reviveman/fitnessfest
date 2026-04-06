import type React from "react"
import "./globals.css"
import { Montserrat } from "next/font/google"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { Providers } from "./providers"
import Header from "@/components/navbar"
import Footer from "@/components/footer"

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
  adjustFontFallback: true, // ✅ prevents fetch error
});


export const metadata = {
  title: "Fitness Fest - Event & Conference",
  description: "Celebrating excellence in fitness and wellness",
  icons: {
    icon: "/favicon.ico",               // default browser tab icon
    shortcut: "/favicon-32x32.png",     // fallback
    apple: "/apple-touch-icon.png",     // iOS home screen icon
  },
  manifest: "/site.webmanifest",        // enables PWA support with Android icons
};


// ✅ Add viewport for proper responsive scaling
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        {/* <Header /> */}
        <Providers>{children}</Providers>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
















// import "./globals.css"
// import { Montserrat } from "next/font/google"
// import { Providers } from "./providers"

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "600", "700", "800"],
//   variable: "--font-montserrat",
// })

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={montserrat.variable}>
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   )
// }

