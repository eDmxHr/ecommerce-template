"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

type DeliveryOption = "free" | "express" | "pickup";

export function CartSummary() {
  const [deliveryOption, setDeliveryOption] = useState<DeliveryOption>("free");

  const deliveryOptions = [
    { id: "free" as DeliveryOption, label: "Free Delivery", price: 0 },
    { id: "express" as DeliveryOption, label: "Express Delivery", price: 15 },
    { id: "pickup" as DeliveryOption, label: "Pick Up", price: 0 },
  ];

  const subtotal = 232.9;
  const deliveryCost =
    deliveryOptions.find((opt) => opt.id === deliveryOption)?.price || 0;
  const total = subtotal + deliveryCost;

  return (
    <div className="sticky top-8 rounded-lg border border-neutral-200 bg-white p-6">
      <h2 className="mb-6 text-2xl font-bold">Cart summary</h2>

      {/* Delivery Options */}
      <div className="mb-6 space-y-3">
        {deliveryOptions.map((option) => (
          <label
            key={option.id}
            className="flex cursor-pointer items-center justify-between rounded-lg border border-neutral-200 p-4 transition-colors hover:bg-neutral-50"
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="delivery"
                value={option.id}
                checked={deliveryOption === option.id}
                onChange={(e) =>
                  setDeliveryOption(e.target.value as DeliveryOption)
                }
                className="h-5 w-5 border-neutral-300 text-black focus:ring-black"
              />
              <span className="font-medium">{option.label}</span>
            </div>
            <span className="font-medium">
              {option.price === 0
                ? "MVR 0.00"
                : `+MVR ${option.price.toFixed(2)}`}
            </span>
          </label>
        ))}
      </div>

      {/* Subtotal and Total */}
      <div className="space-y-3 border-t border-neutral-200 pt-4">
        <div className="flex items-center justify-between text-neutral-600">
          <span>Subtotal</span>
          <span className="font-medium">MVR {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-xl font-bold">
          <span>Total</span>
          <span>MVR {total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Button className="mt-6 w-full rounded-lg bg-black py-6 text-base font-medium text-white hover:bg-neutral-800">
        Checkout
      </Button>
    </div>
  );
}
