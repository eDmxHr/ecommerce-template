import { ProductCard } from "@/components/blocks/product-card";
import { Section } from "@/components/blocks/section";
import { products } from "@/data/products";
import FeatureCards from "@/components/blocks/feature-section";
import CategoryMarquee from "@/components/blocks/brand-marquee";
import { ProductCategoriesGrid } from "@/components/blocks/categories-grid";
import HeroCarousel from "@/components/blocks/hero-carousel";

export default function Home() {
  return (
    <main className="p-4 space-y-15">
      <HeroCarousel />
      <div className="mx-auto max-w-7xl">
        <ProductCategoriesGrid />
      </div>

      <Section title="Best Sellers">
        <div className="lg:pl-48 flex space-x-4">
          {products.map((product) => (
            <div key={product.id} className="w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-7xl">
        <FeatureCards />
      </div>

      <CategoryMarquee />
    </main>
  );
}
