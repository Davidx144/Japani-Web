import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FilePlus2, RotateCcw } from "lucide-react"

export default function ReturnsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-japan-black dark:text-japan-white">Request a Return</h1>
        <Button
          variant="outline"
          className="border-gray-600 dark:border-gray-700 hover:border-japan-red hover:text-japan-red"
        >
          <RotateCcw className="mr-2 h-4 w-4" /> View Return History
        </Button>
      </div>

      <Card className="dark:bg-gray-900/50">
        <CardHeader>
          <CardTitle className="text-japan-black dark:text-japan-white">New Return Request</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Please fill out the form below to initiate a return for your order.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="orderId" className="text-japan-black dark:text-japan-white">
                Order ID
              </Label>
              <Input
                id="orderId"
                placeholder="e.g., ORD-001"
                className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="itemSku" className="text-japan-black dark:text-japan-white">
                Product SKU / Part Number
              </Label>
              <Input
                id="itemSku"
                placeholder="e.g., AK-XYZ123"
                className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason" className="text-japan-black dark:text-japan-white">
              Reason for Return
            </Label>
            <Select>
              <SelectTrigger className="focus:ring-japan-red border-gray-600 dark:border-gray-700">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wrong_item">Received wrong item</SelectItem>
                <SelectItem value="damaged">Item arrived damaged</SelectItem>
                <SelectItem value="defective">Item is defective</SelectItem>
                <SelectItem value="no_longer_needed">No longer needed</SelectItem>
                <SelectItem value="ordered_by_mistake">Ordered by mistake</SelectItem>
                <SelectItem value="other">Other (please specify)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="comments" className="text-japan-black dark:text-japan-white">
              Additional Comments (Optional)
            </Label>
            <Textarea
              id="comments"
              placeholder="Provide any additional details about your return request."
              className="min-h-[100px] focus:ring-japan-red border-gray-600 dark:border-gray-700"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="photos" className="text-japan-black dark:text-japan-white">
              Upload Photos (Optional)
            </Label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-500 border-dashed rounded-lg cursor-pointer bg-muted/50 dark:bg-gray-800/50 hover:bg-muted dark:hover:bg-gray-800"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FilePlus2 className="w-8 h-8 mb-2 text-gray-500 dark:text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                </div>
                <Input id="dropzone-file" type="file" className="hidden" multiple />
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <Button variant="destructive" size="lg">
              Submit Return Request
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
