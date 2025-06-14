import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/app/context/CartContext"
import { SidebarProvider } from "@/components/ui/sidebar" // [^1]
import { Toaster } from "@/components/ui/toaster"
import { cookies } from "next/headers" // [^1]

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Corredor de Japón",
  description: "Plataforma de Piezas y Accesorios para Motocicletas",
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
          <CartProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              {" "}
              {/* [^1] */}
              {children}
            </SidebarProvider>
          </CartProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
