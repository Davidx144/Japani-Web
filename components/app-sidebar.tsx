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

const clientNavItems = [
  { title: "Dashboard", href: "/dashboard/client", icon: Home },
  { title: "Catalog", href: "/dashboard/client/catalog", icon: Search },
  { title: "My Orders", href: "/dashboard/client/orders", icon: ShoppingCart },
  { title: "Shipment Tracking", href: "/dashboard/client/tracking", icon: Package },
  { title: "Returns", href: "/dashboard/client/returns", icon: RotateCcw },
]

const accountNavItems = [
  { title: "Profile", href: "/dashboard/client/profile", icon: UserCircle },
  { title: "Settings", href: "/dashboard/client/settings", icon: Settings },
]

export function AppSidebar() {
  // [^1]
  const pathname = usePathname()
  const { state } = useSidebar() // [^1]

  return (
    <Sidebar collapsible="icon" className="border-r border-gray-700">
      {" "}
      {/* [^1] */}
      <SidebarHeader className="p-4">
        {" "}
        {/* [^1] */}
        {state === "expanded" ? (
          <JapanRacerLogo />
        ) : (
          <div className="flex items-center justify-center">
            <JapanRacerLogo className="text-2xl" />
          </div>
        )}
      </SidebarHeader>
      <Separator className="bg-gray-700" />
      <SidebarContent className="p-4">
        {" "}
        {/* [^1] */}
        <SidebarGroup>
          {" "}
          {/* [^1] */}
          <SidebarGroupLabel className="text-gray-400">Navigation</SidebarGroupLabel> {/* [^1] */}
          <SidebarGroupContent>
            {" "}
            {/* [^1] */}
            <SidebarMenu>
              {" "}
              {/* [^1] */}
              {clientNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {" "}
                  {/* [^1] */}
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className="data-[active=true]:bg-japan-red data-[active=true]:text-white hover:bg-japan-red/90 hover:text-white"
                    tooltip={item.title} // [^1]
                  >
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="my-4 bg-gray-700" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-400">Account</SidebarGroupLabel>
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
                    <Link href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Separator className="bg-gray-700" />
      <SidebarFooter className="p-4">
        {" "}
        {/* [^1] */}
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-japan-red/90 hover:text-white" tooltip="Logout">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
