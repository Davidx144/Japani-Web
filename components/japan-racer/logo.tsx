import { Zap } from "lucide-react" // Using Zap as a placeholder for a racing/speed icon
import Link from "next/link"

export function JapanRacerLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 text-japan-red ${className}`}>
      <Zap size={32} strokeWidth={2.5} />
      <span className="text-2xl font-bold tracking-tighter text-japan-black dark:text-japan-white">
        JAPAN<span className="text-japan-red">RACER</span>
      </span>
    </Link>
  )
}
