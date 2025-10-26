"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  currency: string;
  image: string;
  isNew?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative flex-shrink-0 w-full overflow-hidden border border-border/50 rounded-2xl bg-card hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <h3 className="line-clamp-2 text-lg font-medium leading-snug text-foreground">
            {product.name}
          </h3>
          <p className="text-primary font-semibold text-base">
            {product.currency} {product.price}
          </p>
        </div>
      </CardContent>

      {/* Footer Buttons */}
      <CardFooter className="p-4 pt-0 flex gap-3">
        <Button
          variant="default"
          className="flex-1 gap-2 font-medium rounded-xl text-base"
          size="lg"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          className="flex-1 gap-2 font-medium rounded-xl text-base"
          size="lg"
        >
          <CreditCard className="h-4 w-4" />
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
