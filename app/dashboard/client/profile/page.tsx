import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { UserCircle, Edit3, MapPin, Building } from "lucide-react"

export default function ProfilePage() {
  // Placeholder data
  const userProfile = {
    name: "Takeshi Yamada",
    email: "takeshi.yamada@client.com",
    company: "Yamada Racing Parts",
    phone: "+81 90-1234-5678",
    avatarUrl: "/placeholder.svg?width=128&height=128&text=TY",
    address: {
      street: "123 Moto Street",
      city: "Tokyo",
      postalCode: "100-0001",
      country: "Japan",
    },
    memberSince: "2023-01-15",
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-japan-black dark:text-japan-white">My Profile</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <Card className="dark:bg-gray-900/50">
            <CardHeader className="items-center text-center">
              <Avatar className="w-32 h-32 mb-4 ring-4 ring-japan-red/50">
                <AvatarImage src={userProfile.avatarUrl || "/placeholder.svg"} alt={userProfile.name} />
                <AvatarFallback className="text-4xl bg-gray-700 text-white">
                  {userProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl text-japan-black dark:text-japan-white">{userProfile.name}</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">{userProfile.company}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <div className="flex items-center">
                <UserCircle className="h-4 w-4 mr-2 text-japan-red" />
                <span>{userProfile.email}</span>
              </div>
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-2 text-japan-red" />
                <span>{userProfile.company}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-japan-red" />
                <span>
                  {userProfile.address.city}, {userProfile.address.country}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full border-gray-600 dark:border-gray-700 hover:border-japan-red hover:text-japan-red"
              >
                <Edit3 className="mr-2 h-4 w-4" /> Edit Avatar
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Account Information</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Manage your personal and company details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="fullName" className="text-japan-black dark:text-japan-white">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    defaultValue={userProfile.name}
                    className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-japan-black dark:text-japan-white">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={userProfile.email}
                    className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="companyName" className="text-japan-black dark:text-japan-white">
                    Company Name
                  </Label>
                  <Input
                    id="companyName"
                    defaultValue={userProfile.company}
                    className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-japan-black dark:text-japan-white">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    defaultValue={userProfile.phone}
                    className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                  />
                </div>
              </div>

              <Separator className="my-4 dark:bg-gray-700" />
              <h3 className="text-lg font-medium text-japan-black dark:text-japan-white">Shipping Address</h3>
              <div className="space-y-1.5">
                <Label htmlFor="street" className="text-japan-black dark:text-japan-white">
                  Street Address
                </Label>
                <Input
                  id="street"
                  defaultValue={userProfile.address.street}
                  className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="city" className="text-japan-black dark:text-japan-white">
                    City
                  </Label>
                  <Input
                    id="city"
                    defaultValue={userProfile.address.city}
                    className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="postalCode" className="text-japan-black dark:text-japan-white">
                    Postal Code
                  </Label>
                  <Input
                    id="postalCode"
                    defaultValue={userProfile.address.postalCode}
                    className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="country" className="text-japan-black dark:text-japan-white">
                    Country
                  </Label>
                  <Input
                    id="country"
                    defaultValue={userProfile.address.country}
                    className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-6 dark:border-gray-700">
              <Button variant="destructive" size="lg">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
