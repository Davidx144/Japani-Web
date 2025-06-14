import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar" // [^1]
import { Toaster } from "@/components/ui/toaster"
import { cookies } from "next/headers" // [^1]

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Japan Racer",
  description: "Motorcycle Parts & Accessories Platform",
    generator: 'v0.dev'
}

export default async function RootLayout({
  // [^1]
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies() // [^1]
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true" // [^1]

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider defaultOpen={defaultOpen}>
            {" "}
            {/* [^1] */}
            {children}
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
