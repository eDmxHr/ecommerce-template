"use client";
import {
  Marquee,
  MarqueeFade,
  MarqueeItem,
  MarqueeContent,
} from "../ui/marquee";

export default function CategoryMarquee() {
  return (
    <div className="flex size-full items-center justify-center bg-background">
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {new Array(10).fill(null).map((_, index) => (
            <MarqueeItem className="h-32 w-32" key={index}>
              <div className="overflow-hidden rounded-lg h-12 border text-center">
                <h1>Category {index + 1}</h1>
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
