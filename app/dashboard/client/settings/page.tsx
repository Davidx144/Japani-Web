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
      <h1 className="text-3xl font-bold tracking-tight text-japan-black dark:text-japan-white">Configuración</h1>

      <div className="grid gap-6 md:grid-cols-[1fr_280px]">
        <div className="flex flex-col gap-6">
          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Seguridad de la Cuenta</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Administre su contraseña y la autenticación de dos factores.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="currentPassword" className="text-japan-black dark:text-japan-white">
                  Contraseña Actual
                </Label>
                <Input
                  id="currentPassword"
                  type="password"
                  className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="newPassword" className="text-japan-black dark:text-japan-white">
                  Nueva Contraseña
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  className="focus:ring-japan-red border-gray-600 dark:border-gray-700"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="confirmPassword" className="text-japan-black dark:text-japan-white">
                  Confirmar Nueva Contraseña
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
                    Autenticación de Dos Factores (2FA)
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Mejore la seguridad de su cuenta con una capa adicional de protección.
                  </span>
                </Label>
                <Switch id="twoFactor" className="data-[state=checked]:bg-japan-red" />
              </div>
            </CardContent>
            <CardContent className="border-t pt-6 dark:border-gray-700">
              <Button variant="destructive">Actualizar Contraseña</Button>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Preferencias de Notificación</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Elija cómo desea ser notificado.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { id: "orderUpdates", label: "Actualizaciones de Pedidos", desc: "Reciba notificaciones sobre el estado de su pedido." },
                { id: "shippingUpdates", label: "Actualizaciones de Envío", desc: "Reciba información de seguimiento." },
                { id: "promotions", label: "Promociones y Ofertas", desc: "Manténgase actualizado sobre nuevas ofertas." },
                { id: "newsletter", label: "Boletín Informativo", desc: "Reciba nuestro boletín mensual." },
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
              <Button variant="destructive">Guardar Configuración de Notificaciones</Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Preferencias</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="language" className="text-japan-black dark:text-japan-white">
                  Idioma
                </Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language" className="focus:ring-japan-red border-gray-600 dark:border-gray-700">
                    <SelectValue placeholder="Seleccionar idioma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">Inglés</SelectItem>
                    <SelectItem value="ja">日本語 (Japonés)</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="currency" className="text-japan-black dark:text-japan-white">
                  Moneda
                </Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency" className="focus:ring-japan-red border-gray-600 dark:border-gray-700">
                    <SelectValue placeholder="Seleccionar moneda" />
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
                  <span className="font-medium text-japan-black dark:text-japan-white">Modo Oscuro</span>
                  <span className="text-xs text-muted-foreground">Alternar tema oscuro para la interfaz.</span>
                </Label>
                <Switch id="darkMode" className="data-[state=checked]:bg-japan-red" />
              </div>
            </CardContent>
            <CardContent className="border-t pt-6 dark:border-gray-700">
              <Button variant="destructive" className="w-full">
                Guardar Preferencias
              </Button>
            </CardContent>
          </Card>

          <Card className="dark:bg-gray-900/50">
            <CardHeader>
              <CardTitle className="text-japan-black dark:text-japan-white">Métodos de Pago</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400">
                Administre sus opciones de pago guardadas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-gray-600 dark:border-gray-700 hover:border-japan-red hover:text-japan-red"
              >
                <CreditCard className="mr-2 h-4 w-4" /> Agregar Nuevo Método de Pago
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
