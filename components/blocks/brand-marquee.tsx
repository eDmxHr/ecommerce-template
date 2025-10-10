"use client";
import Image from "next/image";
import {
  Marquee,
  MarqueeFade,
  MarqueeItem,
  MarqueeContent,
} from "../ui/marquee";

export default function BrandMarquee() {
  return (
    <div className="flex size-full items-center justify-center bg-background">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {new Array(10).fill(null).map((_, index) => (
            <MarqueeItem className="h-32 w-32" key={index}>
              <div className="overflow-hidden rounded-lg h-12 border border-muted-foreground/10 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Brand Logo"
                  width={80}
                  height={40}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
