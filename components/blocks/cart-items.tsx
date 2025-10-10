"use client";

import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

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
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Pizza",
    color: "Red",
    price: 19,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Pineapple",
    color: "Gold",
    price: 39,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1550828520-4cb496926fc9?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Apple",
    color: "Red",
    price: 25,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "Burger",
    color: "Brown",
    price: 35,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    name: "Salad",
    color: "Green",
    price: 18,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "7",
    name: "Sandwich",
    color: "Multi",
    price: 22,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "8",
    name: "Pasta",
    color: "Yellow",
    price: 28,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "9",
    name: "Avocado",
    color: "Green",
    price: 15,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "10",
    name: "Strawberry",
    color: "Red",
    price: 12,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={96}
                height={96}
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
