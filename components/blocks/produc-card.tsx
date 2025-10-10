"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
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
    <Card className="relative flex-shrink-0 overflow-hidden w-72">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square max-h-72 overflow-hidden">
          {/* Product Image */}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-1">
          <h3 className="line-clamp-2 text-base font-medium leading-snug text-foreground">
            {product.name}
          </h3>
          <p className="text-foreground">
            {product.currency} {product.price}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2" size="lg">
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
