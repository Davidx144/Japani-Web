import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/japan-racer/ui/product-card"
import { ListFilter, Search, SlidersHorizontal } from "lucide-react"

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
  {
    id: "5",
    name: "Performance ECU Tuner",
    imageUrl: "/placeholder.svg?width=300&height=200&text=ECU+Tuner",
    price: "$450.00",
    brand: "Dynojet",
    partNumber: "DJ-PWRCMD",
  },
  {
    id: "6",
    name: "Adjustable Rearsets",
    imageUrl: "/placeholder.svg?width=300&height=200&text=Rearsets",
    price: "$320.00",
    brand: "Vortex",
    partNumber: "VTX-RS57",
  },
]

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight text-japan-black dark:text-japan-white">Product Catalog</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by name or part #" className="pl-9 focus:ring-japan-red" />
          </div>
          <Button
            variant="outline"
            className="border-gray-600 dark:border-gray-700 hover:border-japan-red hover:text-japan-red"
          >
            <ListFilter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-card dark:bg-gray-900/50 rounded-lg border border-gray-700">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-japan-red" />
          <span className="font-semibold text-japan-black dark:text-japan-white">Filter by:</span>
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] focus:ring-japan-red border-gray-600 dark:border-gray-700">
            <SelectValue placeholder="Brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="akrapovic">Akrapovic</SelectItem>
            <SelectItem value="kn">K&N</SelectItem>
            <SelectItem value="yoshimura">Yoshimura</SelectItem>
            <SelectItem value="brembo">Brembo</SelectItem>
            <SelectItem value="dynojet">Dynojet</SelectItem>
            <SelectItem value="vortex">Vortex</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] focus:ring-japan-red border-gray-600 dark:border-gray-700">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="exhaust">Exhaust Systems</SelectItem>
            <SelectItem value="intake">Intake & Filters</SelectItem>
            <SelectItem value="bodywork">Bodywork & Fairings</SelectItem>
            <SelectItem value="brakes">Brakes</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="controls">Controls</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] focus:ring-japan-red border-gray-600 dark:border-gray-700">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="name-asc">Name: A-Z</SelectItem>
            <SelectItem value="name-desc">Name: Z-A</SelectItem>
            <SelectItem value="newest">Newest Arrivals</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="ghost" className="text-muted-foreground hover:text-japan-red">
          Clear Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="destructive">Load More Products</Button>
      </div>
    </div>
  )
}
