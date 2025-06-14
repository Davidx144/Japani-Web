import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, MoreHorizontal, PackageSearch, Truck } from "lucide-react"
import Link from "next/link"

const orders = [
  {
    id: "ORD-001",
    date: "2025-05-28",
    customer: "ProRider Shop",
    status: "Shipped",
    total: "$350.75",
    items: 3,
    tracking: "1Z999AA10123456784",
  },
  {
    id: "ORD-002",
    date: "2025-05-25",
    customer: "Speed Demon Garage",
    status: "Processing",
    total: "$1200.00",
    items: 1,
    tracking: null,
  },
  {
    id: "ORD-003",
    date: "2025-05-22",
    customer: "MotoWorks Inc.",
    status: "Delivered",
    total: "$89.50",
    items: 1,
    tracking: "1Z999AA10123456780",
  },
  {
    id: "ORD-004",
    date: "2025-05-20",
    customer: "ProRider Shop",
    status: "Pending Payment",
    total: "$620.00",
    items: 5,
    tracking: null,
  },
  {
    id: "ORD-005",
    date: "2025-05-18",
    customer: "Two Wheels Co.",
    status: "Cancelled",
    total: "$150.25",
    items: 2,
    tracking: null,
  },
]

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case "Shipped":
      return "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30"
    case "Processing":
      return "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30"
    case "Delivered":
      return "bg-green-500/20 text-green-500 hover:bg-green-500/30"
    case "Pending Payment":
      return "bg-orange-500/20 text-orange-500 hover:bg-orange-500/30"
    case "Cancelled":
      return "bg-gray-500/20 text-gray-500 hover:bg-gray-500/30"
    default:
      return "bg-gray-200 text-gray-800"
  }
}

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-japan-black dark:text-japan-white">My Orders</h1>
      <Card className="dark:bg-gray-900/50">
        <CardHeader>
          <CardTitle className="text-japan-black dark:text-japan-white">Order History</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            View and manage all your past and current orders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                <TableHead className="text-japan-black dark:text-japan-white">Order ID</TableHead>
                <TableHead className="text-japan-black dark:text-japan-white">Date</TableHead>
                {/* <TableHead className="text-japan-black dark:text-japan-white">Customer</TableHead> */}
                <TableHead className="text-japan-black dark:text-japan-white">Status</TableHead>
                <TableHead className="text-center text-japan-black dark:text-japan-white">Items</TableHead>
                <TableHead className="text-right text-japan-black dark:text-japan-white">Total</TableHead>
                <TableHead className="text-center text-japan-black dark:text-japan-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="hover:bg-muted/50 dark:hover:bg-gray-800/50">
                  <TableCell className="font-medium text-japan-black dark:text-japan-white">{order.id}</TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">{order.date}</TableCell>
                  {/* <TableCell className="text-gray-600 dark:text-gray-400">{order.customer}</TableCell> */}
                  <TableCell>
                    <Badge variant="outline" className={`border-0 ${getStatusBadgeVariant(order.status)}`}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center text-gray-600 dark:text-gray-400">{order.items}</TableCell>
                  <TableCell className="text-right font-medium text-japan-black dark:text-japan-white">
                    {order.total}
                  </TableCell>
                  <TableCell className="text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="dark:bg-gray-800">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Link href={`/dashboard/client/orders/${order.id}`} className="flex items-center w-full">
                            <PackageSearch className="mr-2 h-4 w-4" /> View Details
                          </Link>
                        </DropdownMenuItem>
                        {order.tracking && (
                          <DropdownMenuItem>
                            <Link
                              href={`/dashboard/client/tracking?orderId=${order.id}`}
                              className="flex items-center w-full"
                            >
                              <Truck className="mr-2 h-4 w-4" /> Track Shipment
                            </Link>
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" /> Download Invoice
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
