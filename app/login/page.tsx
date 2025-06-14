import { JapanRacerLogo } from "@/components/japan-racer/logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-dvh bg-muted/40 dark:bg-black px-4">
      <Card className="w-full max-w-md shadow-2xl dark:bg-gray-900/70">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <JapanRacerLogo />
          </div>
          <CardTitle className="text-3xl font-bold text-japan-black dark:text-japan-white">Welcome Back</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Enter your credentials to access your Japan Racer account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-japan-black dark:text-japan-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-japan-black dark:text-japan-white">
                Password
              </Label>
              <Link href="#" className="text-sm text-japan-red hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full bg-japan-red hover:bg-japan-red/90 text-white" type="submit">
            Login
          </Button>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            {"Don't have an account? "}
            <Link href="#" className="font-semibold text-japan-red hover:underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
