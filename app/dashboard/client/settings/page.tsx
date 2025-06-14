import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { CreditCard } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-japan-black dark:text-japan-white">Settings</h1>

      <div className="grid gap-6 md:grid-cols-[1fr_280px]">
        <div className="flex flex-col gap-6">
          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Account Security</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Manage your password and two-factor authentication.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="currentPassword" className="text-japan-black dark:text-japan-white">
                  Current Password
                </Label>
                <Input
                  id="currentPassword"
                  type="password"
                  className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="newPassword" className="text-japan-black dark:text-japan-white">
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-japan-black dark:text-japan-white">
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <Label htmlFor="twoFactor" className="flex flex-col gap-1.5">
                  <span className="font-medium text-japan-black dark:text-japan-white">
                    Two-Factor Authentication (2FA)
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Enhance your account security with an extra layer of protection.
                  </span>
                </Label>
                <Switch id="twoFactor" className="data-[state=checked]:bg-japan-red" />
              </div>
            </CardContent>
            <CardContent className="border-t pt-6 dark:border-gray-700">
              <Button variant="destructive">Update Password</Button>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Notification Preferences</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Choose how you want to be notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { id: "orderUpdates", label: "Order Updates", desc: "Get notified about your order status." },
                { id: "shippingUpdates", label: "Shipping Updates", desc: "Receive tracking information." },
                { id: "promotions", label: "Promotions & Offers", desc: "Stay updated on new deals." },
                { id: "newsletter", label: "Newsletter", desc: "Receive our monthly newsletter." },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <Label htmlFor={item.id} className="flex flex-col gap-1.5">
                    <span className="font-medium text-japan-black dark:text-japan-white">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </Label>
                  <Switch
                    id={item.id}
                    defaultChecked={item.id === "orderUpdates" || item.id === "shippingUpdates"}
                    className="data-[state=checked]:bg-japan-red"
                  />
                </div>
              ))}
            </CardContent>
            <CardContent className="border-t pt-6 dark:border-gray-700">
              <Button variant="destructive">Save Notification Settings</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="language" className="text-japan-black dark:text-japan-white">
                  Language
                </Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language" className="focus:ring-japan-red border-gray-600 dark:border-gray-700">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="ja">日本語 (Japanese)</SelectItem>
                    <SelectItem value="es">Español (Spanish)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="currency" className="text-japan-black dark:text-japan-white">
                  Currency
                </Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency" className="focus:ring-japan-red border-gray-600 dark:border-gray-700">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="jpy">JPY (¥)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between pt-2">
                <Label htmlFor="darkMode" className="flex flex-col gap-1.5">
                  <span className="font-medium text-japan-black dark:text-japan-white">Dark Mode</span>
                  <span className="text-xs text-muted-foreground">Toggle dark theme for the interface.</span>
                </Label>
                <Switch id="darkMode" className="data-[state=checked]:bg-japan-red" />
              </div>
            </CardContent>
            <CardContent className="border-t pt-6 dark:border-gray-700">
              <Button variant="destructive" className="w-full">
                Save Preferences
              </Button>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Payment Methods</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Manage your saved payment options.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-gray-600 dark:border-gray-700 hover:border-japan-red hover:text-japan-red"
              >
                <CreditCard className="mr-2 h-4 w-4" /> Add New Payment Method
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
