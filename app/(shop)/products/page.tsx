"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  Heart,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const productImages = [
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const colors = [
  { name: "Light Roast", value: "light", class: "bg-amber-200" },
  { name: "Medium Roast", value: "medium", class: "bg-amber-600" },
  { name: "Dark Roast", value: "dark", class: "bg-amber-900" },
  { name: "Espresso Roast", value: "espresso", class: "bg-stone-800" },
];

const reviews = [
  {
    id: 1,
    author: "Hayra Kui",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b5e8?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    date: "Today",
    content:
      "These coffee beans are absolutely incredible! The rich aroma fills my kitchen every morning, and the flavor is perfectly balanced - smooth yet bold. I've tried many coffee brands, but this one has become my daily essential. Highly recommend for any coffee lover!",
    likes: 360,
  },
  {
    id: 2,
    author: "Hayra Kui",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    date: "Today",
    content:
      "Outstanding quality coffee beans! The packaging keeps them fresh, and you can taste the difference in every cup. The medium roast is my favorite - it has just the right balance of flavor and strength. Perfect for both espresso and drip coffee brewing methods.",
    likes: 360,
  },
];

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  //   const [selectedColor, setSelectedColor] = useState("blue");
  const [quantity, setQuantity] = useState(1);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) => (prev - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Product Section */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={productImages[selectedImage] || "/placeholder.svg"}
                alt="Product image"
                fill
                className="object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50 hover:cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-50 hover:cursor-pointer"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2">
              {productImages.slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-20 overflow-hidden rounded-lg border-2 ${
                    selectedImage === index
                      ? "border-gray-900"
                      : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Premium Arabica Coffee Beans
              </h1>
              <p className="mt-2 text-gray-600">
                Experience the rich, full-bodied flavor of our premium Arabica
                coffee beans, carefully sourced from the finest coffee farms.
                Each batch is expertly roasted to perfection, delivering a
                smooth and aromatic cup that will awaken your senses every
                morning.
              </p>
            </div>

            {/* Rating */}
            {/* <div className="flex items-center gap-4">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
                8k+ Sold
              </span>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  (4.9 from 256 reviews)
                </span>
              </div>
            </div> */}

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">MVR 178.00</span>
              <span className="text-xl text-gray-400 line-through">
                MVR 298.00
              </span>
            </div>

            {/* Color Selection */}
            {/* <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="font-medium">Color:</label>
                <label className="font-medium">Type:</label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`h-10 w-10 rounded-full ${color.class} ${
                        selectedColor === color.value
                          ? "ring-2 ring-gray-900 ring-offset-2"
                          : ""
                      }`}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>
            </div> */}

            {/* Quantity */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <label className="font-medium">Quantity:</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-transparent"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full bg-primary text-white hover:bg-primary"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full rounded-full bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50 h-12 text-base font-medium">
                Add to cart
              </Button>
              <Button className="w-full rounded-full bg-primary hover:bg-primary h-12 text-base font-medium">
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="description"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 data-[state=active]:bg-transparent px-8 py-4"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gray-900 data-[state=active]:bg-transparent px-8 py-4"
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <div className="space-y-8">
                {/* Main Description */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    About Our Premium Arabica Coffee Beans
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Sourced from the finest coffee farms in the highlands of
                    Ethiopia and Colombia, our Premium Arabica Coffee Beans
                    deliver an exceptional coffee experience. Each bean is
                    carefully hand-selected at peak ripeness to ensure maximum
                    flavor development and aromatic intensity.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our master roasters use traditional techniques combined with
                    modern precision to bring out the unique characteristics of
                    each bean. The result is a complex flavor profile with notes
                    of chocolate, caramel, and subtle fruit undertones that will
                    elevate your daily coffee ritual.
                  </p>
                </div>

                {/* Product Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          100% Arabica Beans
                        </p>
                        <p className="text-sm text-gray-600">
                          Premium single-origin and blend options
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Freshly Roasted
                        </p>
                        <p className="text-sm text-gray-600">
                          Roasted to order for maximum freshness
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Ethically Sourced
                        </p>
                        <p className="text-sm text-gray-600">
                          Direct trade with certified farms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">
                          Multiple Roast Levels
                        </p>
                        <p className="text-sm text-gray-600">
                          Light, Medium, Dark, and Espresso roasts available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brewing Instructions */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Brewing Recommendations
                  </h4>
                  <div className="bg-amber-50 rounded-lg p-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          Grind Size
                        </h5>
                        <p className="text-sm text-gray-600">
                          Medium for drip coffee, Fine for espresso, Coarse for
                          French press
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          Water Temperature
                        </h5>
                        <p className="text-sm text-gray-600">
                          195-205°F (90-96°C) for optimal extraction
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">
                          Coffee-to-Water Ratio
                        </h5>
                        <p className="text-sm text-gray-600">
                          1:15 to 1:17 ratio (1g coffee to 15-17g water)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Storage Instructions */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Storage & Freshness
                  </h4>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>
                          Store in a cool, dry place away from direct sunlight
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>
                          Use within 2-4 weeks of roast date for best flavor
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>
                          Keep in original packaging or airtight container
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <span className="text-green-600">✓</span>
                        <span>
                          Grind just before brewing for maximum freshness
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="space-y-6">
                {/* <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Rating & Reviews (389)</h2>
                  <Select defaultValue="4.8">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4.8">4.8</SelectItem>
                      <SelectItem value="4.5">4.5+</SelectItem>
                      <SelectItem value="4.0">4.0+</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
                <p className="text-sm text-gray-500">
                  Showing 4 results from total of 30 reviews
                </p>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="rounded-lg border border-gray-200 p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                          <Image
                            src={review.avatar || "/placeholder.svg"}
                            alt={review.author}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{review.author}</h3>
                              <span className="text-sm text-gray-500">
                                • {review.date}
                              </span>
                            </div>
                            <div className="mt-1 flex items-center gap-2">
                              <div className="flex text-yellow-400 text-sm">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i}>★</span>
                                ))}
                              </div>
                              <span className="text-sm font-medium">
                                ({review.rating})
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">Events:</span>
                      </div>
                      <p className="mt-4 text-gray-600">{review.content}</p>
                      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                        <button className="hover:text-gray-900">Reply</button>
                        <button className="flex items-center gap-1 hover:text-gray-900">
                          <Heart className="h-4 w-4" />
                          {review.likes}
                        </button>
                        <button className="hover:text-gray-900">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
