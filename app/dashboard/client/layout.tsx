"use client"; // Required for useContext

import type React from "react"
import { useContext } from "react"; // Import useContext
import Link from "next/link"; // Import Link
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar" // [^4]
import { Search, UserCircle, ShoppingCart } from "lucide-react" // Import ShoppingCart
import { Suspense } from "react"
import { CartContext } from "@/app/context/CartContext"; // Import CartContext

export default function ClientDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    // Changed from 'grid' to 'flex'.
    // The AppSidebar component itself will manage its width (via its internal spacer div),
    // and the main content area will take the remaining space.
    // 'group/sidebar-wrapper' is used by shadcn/ui sidebar for its internal styling logic. [^4]
    <div className="flex min-h-screen w-full group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar">
      <AppSidebar /> {/* [^4] */}
      {/* This div wraps the header and main content.
          'flex-1' allows it to take up remaining horizontal space.
          'min-w-0' is important for flex children that might contain overflowing content,
          ensuring the flex item can shrink properly. */}
      <div className="flex flex-col flex-1 min-w-0">
        <header className="flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 sticky top-0 z-30">
          <div className="md:hidden">
            <SidebarTrigger /> {/* [^4] */}
          </div>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Buscar piezas, pedidos..."
                  className="w-full appearance-none bg-muted pl-9 shadow-none md:w-2/3 lg:w-1/3 focus:ring-japan-red"
                />
              </div>
            </form>
          </div>
          <Link href="/dashboard/client/cart" passHref>
            <Button variant="ghost" size="icon" className="relative rounded-full">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Carrito de Compras</span>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-japan-red rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="rounded-full">
            <UserCircle className="h-6 w-6" />
            <span className="sr-only">Perfil de Usuario</span>
          </Button>
        </header>
        {/* 'flex-1' allows main to take up remaining vertical space within its parent.
            'flex flex-col' to manage its own children if needed. */}
        <main className="flex-1 flex flex-col gap-4 p-4 md:gap-8 md:p-8 bg-muted/40 dark:bg-black">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  )
}
