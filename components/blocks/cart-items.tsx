"use client";

import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Donut",
    color: "Black",
    price: 19.45,
    quantity: 2,
    image: "/chocolate-donut.png",
  },
  {
    id: "2",
    name: "Pizza",
    color: "Red",
    price: 19,
    quantity: 2,
    image: "/red-striped-donut.jpg",
  },
  {
    id: "3",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "4",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "5",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "6",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "7",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "8",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "5",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "5",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "5",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
  {
    id: "5",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image: "/gold-striped-donut.jpg",
  },
];

export function CartItems() {
  const [items, setItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 border-b pb-4 text-sm text-neutral-500">
        <div className="col-span-5">Product</div>
        <div className="col-span-3 text-center">Quantity</div>
        <div className="col-span-2 text-right">Price</div>
        <div className="col-span-2 text-right">Subtotal</div>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 gap-4 border-b pb-6 last:border-b-0"
          >
            {/* Product Info */}
            <div className="col-span-5 flex gap-4">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="h-24 w-24 rounded-lg bg-neutral-100 object-cover"
              />
              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-neutral-500">Color: {item.color}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-2 flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-700"
                >
                  <X className="h-4 w-4" />
                  Remove
                </button>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="col-span-3 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 px-4 py-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="text-neutral-600 hover:text-neutral-900 hover:cursor-pointer "
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="text-neutral-600 hover:text-neutral-900  hover:cursor-pointer "
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-2 flex items-center justify-end">
              <span className="font-medium">MVR {item.price.toFixed(2)}</span>
            </div>

            {/* Subtotal */}
            <div className="col-span-2 flex items-center justify-end">
              <span className="font-medium">
                MVR {(item.price * item.quantity).toFixed(0)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
