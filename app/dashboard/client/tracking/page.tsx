import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PackageCheck, PackageX, Truck, MapPin, CalendarDays } from "lucide-react"

export default function TrackingPage() {
  // Placeholder data - in a real app, this would come from an API based on query params or state
  const trackingInfo = {
    orderId: "ORD-001",
    trackingNumber: "1Z999AA10123456784",
    status: "In Transit",
    estimatedDelivery: "2025-06-02",
    currentLocation: "Cityville, ST",
    lastUpdate: "2025-05-30 10:15 AM",
    history: [
      { date: "2025-05-30 10:15 AM", status: "Departed from facility", location: "Cityville, ST" },
      { date: "2025-05-29 08:00 PM", status: "Arrived at facility", location: "Cityville, ST" },
      { date: "2025-05-28 05:30 PM", status: "Package picked up", location: "Originville, ST" },
    ],
  }

  const getStatusIcon = (status: string) => {
    if (status.toLowerCase().includes("delivered")) return <PackageCheck className="h-8 w-8 text-green-500" />
    if (status.toLowerCase().includes("transit") || status.toLowerCase().includes("departed"))
      return <Truck className="h-8 w-8 text-blue-500 animate-pulse" />
    return <PackageX className="h-8 w-8 text-red-500" />
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-japan-black dark:text-japan-white">Shipment Tracking</h1>

      <Card className="dark:bg-gray-900/50">
        <CardHeader>
          <CardTitle className="text-japan-black dark:text-japan-white">Track Your Package</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Enter your order ID or tracking number to see the latest updates.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Order ID or Tracking Number"
            className="flex-grow focus:ring-japan-red border-gray-600 dark:border-gray-700"
            defaultValue={trackingInfo.orderId} // Pre-fill for demo
          />
          <Button variant="destructive">Track</Button>
        </CardContent>
      </Card>

      {trackingInfo && (
        <Card className="dark:bg-gray-900/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-japan-black dark:text-japan-white">
                  Order: {trackingInfo.orderId}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Tracking #: {trackingInfo.trackingNumber}
                </CardDescription>
              </div>
              {getStatusIcon(trackingInfo.status)}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 p-3 bg-muted dark:bg-gray-800 rounded-md">
                <Truck className="h-5 w-5 text-japan-red" />
                <div>
                  <p className="font-semibold text-japan-black dark:text-japan-white">Status</p>
                  <p className="text-gray-600 dark:text-gray-400">{trackingInfo.status}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted dark:bg-gray-800 rounded-md">
                <MapPin className="h-5 w-5 text-japan-red" />
                <div>
                  <p className="font-semibold text-japan-black dark:text-japan-white">Current Location</p>
                  <p className="text-gray-600 dark:text-gray-400">{trackingInfo.currentLocation}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 bg-muted dark:bg-gray-800 rounded-md">
                <CalendarDays className="h-5 w-5 text-japan-red" />
                <div>
                  <p className="font-semibold text-japan-black dark:text-japan-white">Estimated Delivery</p>
                  <p className="text-gray-600 dark:text-gray-400">{trackingInfo.estimatedDelivery}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-japan-black dark:text-japan-white">Tracking History</h3>
              <div className="border rounded-md dark:border-gray-700">
                {trackingInfo.history.map((event, index) => (
                  <div
                    key={index}
                    className={`p-4 flex gap-4 ${
                      index < trackingInfo.history.length - 1 ? "border-b dark:border-gray-700" : ""
                    } ${index === 0 ? "bg-japan-red/10" : ""}`}
                  >
                    <div className="flex flex-col items-center mr-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          index === 0 ? "bg-japan-red ring-4 ring-japan-red/30" : "bg-gray-400 dark:bg-gray-600"
                        }`}
                      />
                      {index < trackingInfo.history.length - 1 && (
                        <div className="w-0.5 flex-grow bg-gray-300 dark:bg-gray-600" />
                      )}
                    </div>
                    <div>
                      <p
                        className={`font-semibold ${index === 0 ? "text-japan-red" : "text-japan-black dark:text-japan-white"}`}
                      >
                        {event.status}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {event.date} - {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-xs text-muted-foreground text-center">Last updated: {trackingInfo.lastUpdate}</div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
