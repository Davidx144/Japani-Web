import { Zap } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils" // Asegurarse de que cn esté disponible

interface JapanRacerLogoProps {
  className?: string
  iconOnly?: boolean
  iconSize?: number
  textClassName?: string
}

export function JapanRacerLogo({
  className,
  iconOnly = false,
  iconSize = 32, // Tamaño de ícono por defecto (2rem)
  textClassName = "text-2xl", // Tamaño de texto por defecto
}: JapanRacerLogoProps) {
  return (
    <Link href="/" className={cn("flex items-center text-japan-red", className)}>
      <Zap size={iconSize} strokeWidth={2.5} />
      {!iconOnly && (
        <span
          className={cn(
            "font-bold tracking-tighter text-japan-black dark:text-japan-white ml-2", // Usar ml-2 en el span
            textClassName
          )}
        >
          JAPAN<span className="text-japan-red">RACER</span>
        </span>
      )}
    </Link>
  )
}
