"use client";

import { products } from "@/data/products";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0); // Reset progress when slide changes
    });

    // Progress tracking for autoplay
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 100 / (4000 / 50); // Update every 50ms for smooth animation
      });
    }, 50);

    return () => clearInterval(interval);
  }, [api]);
  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="ml-0 gap-4">
          {products.slice(0, 3).map((product) => (
            <CarouselItem
              className="relative object-cover h-[90vh] pl-0"
              key={product.id}
            >
              <div className="relative h-full w-full rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 px-24 py-24 z-20 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/80 text-white">
                  <h6 className="text-5xl font-semibold mb-5">
                    {product.name}
                  </h6>
                  <p className="text-lg font-medium max-w-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam assumenda eveniet blanditiis asperiores temporibus
                    ipsa? Nam, voluptate ea. Aut cupiditate molestiae soluta
                    atque repellat nemo, rerum impedit iure harum! Aut.
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination with Progress */}
      <div className="absolute bottom-6 right-6 z-30 flex gap-2 items-center">
        {products.slice(0, 3).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`relative overflow-hidden backdrop-blur-sm transition-all duration-300 ease-out ${
              current === index
                ? "w-12 h-2 bg-white/30 rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full"
            }`}
          >
            {current === index && (
              <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-linear rounded-full"
                style={{
                  width: `${progress}%`,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
