"use client" // [^1]

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Package, ShoppingCart, RotateCcw, UserCircle, Settings, Search, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar, // [^1]
} from "@/components/ui/sidebar" // [^1]
import { JapanRacerLogo } from "@/components/japan-racer/logo"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils" // Import cn

const clientNavItems = [
  { title: "Panel de Control", href: "/dashboard/client", icon: Home },
  { title: "Catálogo", href: "/dashboard/client/catalog", icon: Search },
  { title: "Mis Pedidos", href: "/dashboard/client/orders", icon: ShoppingCart },
  { title: "Seguimiento de Envíos", href: "/dashboard/client/tracking", icon: Package },
  { title: "Devoluciones", href: "/dashboard/client/returns", icon: RotateCcw },
]

const accountNavItems = [
  { title: "Perfil", href: "/dashboard/client/profile", icon: UserCircle },
  { title: "Configuración", href: "/dashboard/client/settings", icon: Settings },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { state, isMobile } = useSidebar() // Añadir isMobile

  return (
    // Añadido text-sidebar-foreground y bg-sidebar para consistencia
    <Sidebar collapsible="icon" className="border-r border-gray-700 text-sidebar-foreground bg-sidebar">
      <SidebarHeader 
        className={cn(
          "flex items-center", 
          state === "expanded" ? "p-4 justify-start" : "p-2 justify-center" 
        )}
      >
        {state === "expanded" ? (
          <JapanRacerLogo /> // Logo normal para estado expandido
        ) : (
          // Logo solo ícono y más pequeño para estado colapsado
          <JapanRacerLogo iconOnly={true} iconSize={24} /> 
        )}
      </SidebarHeader>
      <Separator className="bg-gray-700" />
      <SidebarContent 
        className={cn(
          "flex flex-col", // Mantiene la estructura flex vertical
          state === "expanded" ? "p-4" : "py-4 px-0" // Padding condicional
        )}
      >
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {clientNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn(
                      "data-[active=true]:bg-japan-red data-[active=true]:text-white hover:bg-japan-red/90 hover:text-white",
                      state === "expanded" ? "px-3" : "px-0 w-full" 
                    )}
                    tooltip={item.title}
                  >
                    <Link 
                      href={item.href}
                      className={cn(
                        "flex items-center h-full w-full",
                        state === "expanded" ? "gap-3 justify-start" : "justify-center" 
                      )}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {state === "expanded" || isMobile ? ( 
                        <span className="whitespace-normal break-words text-sm leading-snug">
                          {item.title}
                        </span>
                      ) : (
                        <span className="sr-only">{item.title}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="my-4 bg-gray-700" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Cuenta</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className={cn(
                      "data-[active=true]:bg-japan-red data-[active=true]:text-white hover:bg-japan-red/90 hover:text-white",
                      state === "expanded" ? "px-3" : "px-0 w-full" 
                    )}
                    tooltip={item.title}
                  >
                    <Link 
                      href={item.href}
                      className={cn(
                        "flex items-center h-full w-full",
                        state === "expanded" ? "gap-3 justify-start" : "justify-center" 
                      )}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {state === "expanded" || isMobile ? (
                        <span className="whitespace-normal break-words text-sm leading-snug">
                          {item.title}
                        </span>
                      ) : (
                        <span className="sr-only">{item.title}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="my-4 bg-gray-700" />
        <SidebarFooter className={cn(state === "expanded" ? "p-4" : "py-4 px-0")} > {/* Aplicar padding condicional también al footer */}
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton 
                asChild
                className={cn(
                  "hover:bg-japan-red/90 hover:text-white w-full", // w-full ya estaba aquí, lo cual es bueno
                  state === "expanded" ? "px-3" : "px-0" // px-0 cuando colapsado
                )}
              >
                <Link 
                  href="/login"
                  className={cn(
                    "flex items-center h-full w-full",
                    state === "expanded" ? "gap-3 justify-start" : "justify-center"
                  )}
                >
                  <LogOut className="h-5 w-5 flex-shrink-0" />
                  {state === "expanded" || isMobile ? (
                    <span className="whitespace-normal break-words text-sm leading-snug">
                      Cerrar Sesión
                    </span>
                  ) : (
                    <span className="sr-only">Cerrar Sesión</span>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  )
}
