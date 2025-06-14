"use client";

import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext, CartItem as CartItemType } from '@/app/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Trash2, Plus, Minus, ShoppingCart, AlertTriangle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

// Helper function to parse price string to number
const parsePrice = (price: string): number => {
  const numericString = price.replace(/[^0-9.-]+/g, '');
  return parseFloat(numericString);
};

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const [localQuantities, setLocalQuantities] = useState<Record<string, number>>({});

  useEffect(() => {
    const initialQuantities: Record<string, number> = {};
    cartItems.forEach(item => {
      initialQuantities[item.id] = item.quantity;
    });
    setLocalQuantities(initialQuantities);
  }, [cartItems]);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setLocalQuantities(prev => ({ ...prev, [productId]: newQuantity }));
      updateQuantity(productId, newQuantity);
      toast.info(`Cantidad actualizada para el producto.`);
    } else if (newQuantity === 0) {
      // If user explicitly sets to 0, treat as removal
      removeFromCart(productId);
      toast.success(`Producto eliminado del carrito.`);
    }
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.success(`'${productName}' eliminado del carrito.`);
  };

  const handleIncrementQuantity = (item: CartItemType) => {
    const newQuantity = (localQuantities[item.id] || item.quantity) + 1;
    setLocalQuantities(prev => ({ ...prev, [item.id]: newQuantity }));
    updateQuantity(item.id, newQuantity);
  };

  const handleDecrementQuantity = (item: CartItemType) => {
    const newQuantity = Math.max(1, (localQuantities[item.id] || item.quantity) - 1);
    setLocalQuantities(prev => ({ ...prev, [item.id]: newQuantity }));
    updateQuantity(item.id, newQuantity);
  };


  const cartTotal = cartItems.reduce((total, item) => {
    return total + parsePrice(item.price) * item.quantity;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] text-center p-6">
        <ShoppingCart size={64} className="text-gray-400 mb-6" />
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">Tu carrito está vacío.</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Parece que aún no has añadido nada. ¡Explora nuestros productos!
        </p>
        <Button asChild variant="destructive">
          <Link href="/dashboard/client/catalog">Ir al Catálogo</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-japan-black dark:text-japan-white">Tu Carrito de Compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex flex-col md:flex-row items-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
              <div className="relative w-full md:w-40 h-40 md:h-auto self-stretch">
                <Image
                  src={item.imageUrl || '/placeholder.svg'}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 flex-grow w-full">
                <h2 className="text-xl font-semibold text-japan-black dark:text-japan-white mb-2">{item.name}</h2>
                <p className="text-lg text-japan-red font-semibold mb-4">{item.price}</p>
                <div className="flex items-center space-x-3 mb-4">
                  <Button variant="outline" size="icon" onClick={() => handleDecrementQuantity(item)} disabled={(localQuantities[item.id] || item.quantity) <= 1}>
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={localQuantities[item.id] || item.quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setLocalQuantities(prev => ({ ...prev, [item.id]: val }));
                    }}
                    onBlur={(e) => {
                        const newQuantity = parseInt(e.target.value, 10);
                        if (isNaN(newQuantity) || newQuantity < 1) {
                            // Reset to previous valid quantity or 1 if somehow invalid
                            setLocalQuantities(prev => ({ ...prev, [item.id]: item.quantity }));
                            toast.error("La cantidad debe ser al menos 1.");
                        } else {
                            handleQuantityChange(item.id, newQuantity);
                        }
                    }}
                    className="w-20 text-center dark:bg-gray-700 dark:text-white"
                  />
                  <Button variant="outline" size="icon" onClick={() => handleIncrementQuantity(item)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 md:pt-6 md:pl-0 self-center md:self-end">
                <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id, item.name)} className="text-red-500 hover:text-red-700">
                  <Trash2 className="h-6 w-6" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-japan-black dark:text-japan-white">Resumen del Carrito</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-lg">
                <span className="text-gray-600 dark:text-gray-300">Subtotal:</span>
                <span className="font-semibold dark:text-white">${cartTotal.toFixed(2)}</span>
              </div>
              {/* Placeholder for discounts or shipping */}
              <div className="flex justify-between text-lg border-t pt-4 mt-4">
                <span className="text-xl font-bold text-japan-black dark:text-japan-white">Total del Carrito:</span>
                <span className="text-xl font-bold text-japan-red">${cartTotal.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button
                size="lg"
                className="w-full bg-japan-red hover:bg-japan-red/90 text-white"
                onClick={() => toast.info("Checkout no implementado todavía.")}
              >
                Proceder al Pago
              </Button>
              {cartItems.length > 0 && (
                 <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                        clearCart();
                        toast.info("Todos los productos han sido eliminados del carrito.");
                    }}
                >
                    <Trash2 className="mr-2 h-4 w-4" /> Vaciar Carrito
                </Button>
              )}
            </CardFooter>
          </Card>
          <div className="mt-6 p-4 border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/30 rounded-md flex items-start">
            <AlertTriangle className="h-5 w-5 text-yellow-500 dark:text-yellow-400 mr-3 flex-shrink-0 mt-1" />
            <div>
                <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                    Nota sobre el envío:
                </p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400">
                    Los costos y tiempos de envío se calcularán durante el proceso de pago. Actualmente no están reflejados en el total.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
