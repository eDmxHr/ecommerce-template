"use client";

import Image from "next/image";
import {
  ShoppingCart,
  CreditCard,
  Star,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
  Check,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const productImages = [
    "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mx-auto">
          {/* Left: Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative w-full aspect-square overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100">
              <Image
                src={productImages[selectedImage]}
                alt="Premium Leather Backpack"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Floating badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  Best Seller
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  Free Shipping
                </Badge>
              </div>

              {/* Action buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isLiked ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-primary shadow-lg"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col space-y-8">
            {/* Product Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">
                    PREMIUM COLLECTION
                  </p>
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                    Premium Leather Backpack
                  </h1>
                </div>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.8 (128 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-gray-900">$149.99</div>
                <div className="text-xl text-gray-400 line-through">
                  $199.99
                </div>
                <Badge className="bg-red-100 text-red-800">25% OFF</Badge>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                Handcrafted from full-grain Italian leather, this backpack
                blends timeless design with everyday functionality. Perfect for
                travel, work, or daily commutes.
              </p>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">
                  Quantity:
                </span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 text-center min-w-[60px]">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Product Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Premium Italian leather",
                  "Water-resistant coating",
                  "Multiple compartments",
                  "Padded laptop sleeve",
                  "Adjustable straps",
                  "Lifetime warranty",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-0 bg-green-50">
                <CardContent className="p-4 text-center">
                  <Truck className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-800">
                    Free Shipping
                  </p>
                  <p className="text-xs text-green-600">On orders over $100</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-blue-50">
                <CardContent className="p-4 text-center">
                  <RotateCcw className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-800">
                    Easy Returns
                  </p>
                  <p className="text-xs text-blue-600">30-day return policy</p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-purple-50">
                <CardContent className="p-4 text-center">
                  <Shield className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-purple-800">
                    Secure Payment
                  </p>
                  <p className="text-xs text-purple-600">SSL encrypted</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
