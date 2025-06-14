import { ProductCard } from "@/components/japan-racer/ui/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpRight, DollarSign, Package, Users } from "lucide-react"
import Link from "next/link"

const sampleProducts = [
  {
    id: "1",
    name: "Sistema de Escape Completo Agresor",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Exhaust",
    price: "$799.99",
    brand: "Akrapovic",
    partNumber: "AK-XYZ123",
  },
  {
    id: "2",
    name: "Filtro de Aire de Rendimiento Sigiloso",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Air+Filter",
    price: "$89.50",
    brand: "K&N",
    partNumber: "KN-ABC789",
  },
  {
    id: "3",
    name: "Kit de Carenado de Fibra de Carbono",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Fairing+Kit",
    price: "$1250.00",
    brand: "Yoshimura",
    partNumber: "YS-DEF456",
  },
  {
    id: "4",
    name: "Juego de Pastillas de Freno de Carreras",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Brake+Pads",
    price: "$120.00",
    brand: "Brembo",
    partNumber: "BR-GHI789",
  },
]

const recentOrders = [
  { id: "ORD-001", date: "2025-05-28", status: "Enviado", total: "$350.75", items: 3 },
  { id: "ORD-002", date: "2025-05-25", status: "Procesando", total: "$1200.00", items: 1 },
  { id: "ORD-003", date: "2025-05-22", status: "Entregado", total: "$89.50", items: 1 },
]

export default function ClientDashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-japan-black dark:text-japan-white">Pedidos Totales</CardTitle>
              <Package className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-japan-black dark:text-japan-white">125</div>
              <p className="text-xs text-muted-foreground">+10% desde el mes pasado</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-japan-black dark:text-japan-white">
                Envíos Pendientes
              </CardTitle>
              <Package className="h-5 w-5 text-japan-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-japan-black dark:text-japan-white">5</div>
              <p className="text-xs text-muted-foreground">Esperando cumplimiento</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-japan-black dark:text-japan-white">
                Saldo de Cuenta
              </CardTitle>
              <DollarSign className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-japan-black dark:text-japan-white">$2,350.00</div>
              <p className="text-xs text-muted-foreground">Crédito disponible</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-japan-black dark:text-japan-white">
                Tickets de Soporte
              </CardTitle>
              <Users className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-japan-black dark:text-japan-white">2 Abiertos</div>
              <p className="text-xs text-muted-foreground">1 resuelto esta semana</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <Card className="dark:bg-gray-900/50">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle className="text-xl font-bold text-japan-black dark:text-japan-white">Pedidos Recientes</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Rastree sus últimas compras y sus estados.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1 bg-japan-red hover:bg-japan-red/90">
              <Link href="/dashboard/client/orders">
                Ver Todos
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                  <TableHead className="text-japan-black dark:text-japan-white">ID de Pedido</TableHead>
                  <TableHead className="text-japan-black dark:text-japan-white">Fecha</TableHead>
                  <TableHead className="text-japan-black dark:text-japan-white">Estado</TableHead>
                  <TableHead className="text-japan-black dark:text-japan-white">Artículos</TableHead>
                  <TableHead className="text-right text-japan-black dark:text-japan-white">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id} className="hover:bg-muted/50 dark:hover:bg-gray-800/50">
                    <TableCell className="font-medium text-japan-black dark:text-japan-white">{order.id}</TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">{order.date}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === "Enviado" // Shipped
                            ? "bg-blue-500/20 text-blue-500"
                            : order.status === "Procesando" // Processing
                              ? "bg-yellow-500/20 text-yellow-500"
                              : "bg-green-500/20 text-green-500" // Delivered
                        }`}
                      >
                        {order.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-600 dark:text-gray-400">{order.items}</TableCell>
                    <TableCell className="text-right font-medium text-japan-black dark:text-japan-white">
                      {order.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-japan-black dark:text-japan-white">Productos Destacados</h2>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-japan-red text-japan-red hover:bg-japan-red hover:text-white"
          >
            <Link href="/dashboard/client/catalog">
              Ver Catálogo <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  )
}
