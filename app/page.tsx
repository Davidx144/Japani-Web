import { JapanRacerLogo } from "@/components/japan-racer/logo"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, ShoppingCart, Truck } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-japan-white dark:bg-japan-black">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-gray-800">
        <JapanRacerLogo />
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/dashboard/client"
            className="text-sm font-medium text-japan-black dark:text-japan-white hover:text-japan-red dark:hover:text-japan-red transition-colors"
          >
            Client Portal
          </Link>
          <Button variant="destructive" asChild>
            <Link href="/login">Login / Register</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?width=1920&height=1080&text=Aggressive+Motorcycle+Background')",
          }}
        >
          <div className="container px-4 md:px-6 bg-black/70 py-16 rounded-md">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-japan-white">
                    Performance Parts. <span className="text-japan-red">Aggressive</span> Styling.
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Your B2B source for high-quality motorcycle parts and accessories. Streamlined ordering, real-time
                    tracking, and dedicated support.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="destructive" asChild>
                    <Link href="/dashboard/client">
                      Browse Catalog <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-japan-white border-japan-white hover:bg-japan-red hover:text-japan-white hover:border-japan-red"
                  >
                    Become a Partner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-japan-red px-3 py-1 text-sm font-semibold text-japan-white">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-japan-black dark:text-japan-white">
                  Engineered for Performance and Efficiency
                </h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is designed to empower your business with cutting-edge tools for sales, logistics, and
                  client management.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
              <div className="grid gap-2 p-4 rounded-lg border border-gray-700 hover:shadow-xl transition-shadow bg-white dark:bg-black">
                <ShoppingCart className="h-10 w-10 text-japan-red" />
                <h3 className="text-xl font-bold text-japan-black dark:text-japan-white">B2B E-commerce</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Filterable catalog, easy ordering, and self-service account management for clients.
                </p>
              </div>
              <div className="grid gap-2 p-4 rounded-lg border border-gray-700 hover:shadow-xl transition-shadow bg-white dark:bg-black">
                <Truck className="h-10 w-10 text-japan-red" />
                <h3 className="text-xl font-bold text-japan-black dark:text-japan-white">Real-Time Logistics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Live shipment tracking, delivery confirmations, and efficient route management for messengers.
                </p>
              </div>
              <div className="grid gap-2 p-4 rounded-lg border border-gray-700 hover:shadow-xl transition-shadow bg-white dark:bg-black">
                <ShieldCheck className="h-10 w-10 text-japan-red" />
                <h3 className="text-xl font-bold text-japan-black dark:text-japan-white">ERP Integration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Seamless synchronization with Odoo, SAP, CIBO for inventory and order management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Japan Racer. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 hover:text-japan-red"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 hover:text-japan-red"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
