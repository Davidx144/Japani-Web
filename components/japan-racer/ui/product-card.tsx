import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle } from "lucide-react"

type ProductCardProps = {
  id: string
  name: string
  imageUrl: string
  price: string
  brand: string
  partNumber: string
}

export function ProductCard({ name, imageUrl, price, brand, partNumber }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl hover:border-japan-red dark:bg-gray-900/50 dark:hover:border-japan-red">
      <CardHeader className="p-0">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={300}
          height={200}
          className="object-cover w-full aspect-[3/2]"
        />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground">
          {brand} - {partNumber}
        </p>
        <CardTitle className="text-lg leading-tight font-semibold text-japan-black dark:text-japan-white">
          {name}
        </CardTitle>
        <p className="text-xl font-bold text-japan-red">{price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="destructive" className="w-full">
          <PlusCircle className="mr-2 h-4 w-4" /> Añadir al Carrito
        </Button>
      </CardFooter>
    </Card>
  )
}
