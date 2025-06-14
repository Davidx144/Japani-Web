import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCard } from "@/components/japan-racer/ui/product-card"
import { ListFilter, Search, SlidersHorizontal } from "lucide-react"

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
  {
    id: "5",
    name: "Sintonizador ECU de Rendimiento",
    imageUrl: "/placeholder.svg?width=300&height=200&text=ECU+Tuner",
    price: "$450.00",
    brand: "Dynojet",
    partNumber: "DJ-PWRCMD",
  },
  {
    id: "6",
    name: "Estriberas Ajustables",
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
        <h1 className="text-3xl font-bold tracking-tight text-japan-black dark:text-japan-white">Catálogo de Productos</h1>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:flex-initial">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar por nombre o n.º de pieza" className="pl-9 focus:ring-japan-red" />
          </div>
          <Button
            variant="outline"
            className="border-gray-600 dark:border-gray-700 hover:border-japan-red hover:text-japan-red"
          >
            <ListFilter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-card dark:bg-gray-900/50 rounded-lg border border-gray-700">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-5 w-5 text-japan-red" />
          <span className="font-semibold text-japan-black dark:text-japan-white">Filtrar por:</span>
        </div>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] focus:ring-japan-red border-gray-600 dark:border-gray-700">
            <SelectValue placeholder="Marca" />
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
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="exhaust">Sistemas de Escape</SelectItem>
            <SelectItem value="intake">Admisión y Filtros</SelectItem>
            <SelectItem value="bodywork">Carrocería y Carenados</SelectItem>
            <SelectItem value="brakes">Frenos</SelectItem>
            <SelectItem value="electronics">Electrónica</SelectItem>
            <SelectItem value="controls">Controles</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] focus:ring-japan-red border-gray-600 dark:border-gray-700">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-asc">Precio: Menor a Mayor</SelectItem>
            <SelectItem value="price-desc">Precio: Mayor a Menor</SelectItem>
            <SelectItem value="name-asc">Nombre: A-Z</SelectItem>
            <SelectItem value="name-desc">Nombre: Z-A</SelectItem>
            <SelectItem value="newest">Novedades</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="ghost" className="text-muted-foreground hover:text-japan-red">
          Limpiar Filtros
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="destructive">Cargar Más Productos</Button>
      </div>
    </div>
  )
}
