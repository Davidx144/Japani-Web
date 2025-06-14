import { ProductCard } from "@/components/japan-racer/ui/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpRight, DollarSign, Package, Users } from "lucide-react"
import Link from "next/link"

const sampleProducts = [
  {
    id: "1",
    name: "Aggressor Full Exhaust System",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Exhaust",
    price: "$799.99",
    brand: "Akrapovic",
    partNumber: "AK-XYZ123",
  },
  {
    id: "2",
    name: "Stealth Performance Air Filter",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Air+Filter",
    price: "$89.50",
    brand: "K&N",
    partNumber: "KN-ABC789",
  },
  {
    id: "3",
    name: "Carbon Fiber Fairing Kit",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Fairing+Kit",
    price: "$1250.00",
    brand: "Yoshimura",
    partNumber: "YS-DEF456",
  },
  {
    id: "4",
    name: "Racing Brake Pad Set",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Brake+Pads",
    price: "$120.00",
    brand: "Brembo",
    partNumber: "BR-GHI789",
  },
]

const recentOrders = [
  { id: "ORD-001", date: "2025-05-28", status: "Shipped", total: "$350.75", items: 3 },
  { id: "ORD-002", date: "2025-05-25", status: "Processing", total: "$1200.00", items: 1 },
  { id: "ORD-003", date: "2025-05-22", status: "Delivered", total: "$89.50", items: 1 },
]

export default function ClientDashboardPage() {
  return (
    <div className="space-y-6">
      <section>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-japan-black dark:text-japan-white">Total Orders</CardTitle>
              <Package className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-japan-black dark:text-japan-white">125</div>
              <p className="text-xs text-muted-foreground">+10% from last month</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-japan-black dark:text-japan-white">
                Pending Shipments
              </CardTitle>
              <Package className="h-5 w-5 text-japan-red" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-japan-black dark:text-japan-white">5</div>
              <p className="text-xs text-muted-foreground">Awaiting fulfillment</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-japan-black dark:text-japan-white">
                Account Balance
              </CardTitle>
              <DollarSign className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-japan-black dark:text-japan-white">$2,350.00</div>
              <p className="text-xs text-muted-foreground">Credit available</p>
            </CardContent>
          </Card>
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-japan-black dark:text-japan-white">
                Support Tickets
              </CardTitle>
              <Users className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-japan-black dark:text-japan-white">2 Open</div>
              <p className="text-xs text-muted-foreground">1 resolved this week</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <Card className="dark:bg-gray-900/50">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle className="text-xl font-bold text-japan-black dark:text-japan-white">Recent Orders</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Track your latest purchases and their statuses.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1 bg-japan-red hover:bg-japan-red/90">
              <Link href="/dashboard/client/orders">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                  <TableHead className="text-japan-black dark:text-japan-white">Order ID</TableHead>
                  <TableHead className="text-japan-black dark:text-japan-white">Date</TableHead>
                  <TableHead className="text-japan-black dark:text-japan-white">Status</TableHead>
                  <TableHead className="text-japan-black dark:text-japan-white">Items</TableHead>
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
                          order.status === "Shipped"
                            ? "bg-blue-500/20 text-blue-500"
                            : order.status === "Processing"
                              ? "bg-yellow-500/20 text-yellow-500"
                              : "bg-green-500/20 text-green-500"
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
          <h2 className="text-xl font-bold text-japan-black dark:text-japan-white">Featured Products</h2>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-japan-red text-japan-red hover:bg-japan-red hover:text-white"
          >
            <Link href="/dashboard/client/catalog">
              View Catalog <ArrowUpRight className="ml-1 h-4 w-4" />
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
