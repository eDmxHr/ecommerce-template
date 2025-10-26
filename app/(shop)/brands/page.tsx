import Header from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { brands } from "@/data/brands";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <PageWrapper>
      <Header title="Brands" />
      <BentoGrid>
        {brands.map((brand, i) => (
          <BentoGridItem
            key={brand.id}
            className={i === 0 ? "md:row-span-2" : ""}
            header={
              <div className="relative w-full h-full min-h-[20rem] md:min-h-full overflow-hidden rounded-lg">
                <Image
                  src={brand.imageUrl || "/placeholder.svg"}
                  alt={brand.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{brand.name}</h3>
                  <a
                    href={`/brands/${brand.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                  >
                    View all <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            }
          />
        ))}
      </BentoGrid>
    </PageWrapper>
  );
}
