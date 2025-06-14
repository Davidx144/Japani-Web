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
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {clientNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className="data-[active=true]:bg-japan-red data-[active=true]:text-white hover:bg-japan-red/90 hover:text-white"
                    tooltip={item.title}
                  >
                    <Link 
                      href={item.href}
                      className={cn(
                        "flex items-center h-full",
                        state === "expanded" ? "gap-3" : "justify-center w-full"
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
                    className="data-[active=true]:bg-japan-red data-[active=true]:text-white hover:bg-japan-red/90 hover:text-white"
                    tooltip={item.title}
                  >
                    <Link 
                      href={item.href}
                      className={cn(
                        "flex items-center h-full",
                        state === "expanded" ? "gap-3" : "justify-center w-full"
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
        <SidebarFooter className="p-4 mt-auto">
          <SidebarMenu>
            <SidebarMenuItem>
              {/* Envolver el contenido del botón en un Link si es una acción de navegación */}
              <SidebarMenuButton 
                asChild /* Si es un link, usar asChild */
                className="hover:bg-japan-red/90 hover:text-white w-full" /* w-full para que el link ocupe el botón */
              >
                <Link 
                  href="/login" // Asumiendo que cerrar sesión lleva a login
                  className={cn(
                    "flex items-center h-full", // Quitado w-full de aquí si el botón ya lo tiene
                    state === "expanded" ? "gap-3" : "justify-center w-full" // w-full aquí para centrar el ícono si está colapsado
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
