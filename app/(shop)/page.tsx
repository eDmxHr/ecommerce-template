import { ProductCard } from "@/components/blocks/produc-card";
import { Section } from "@/components/blocks/section";
import { products } from "@/data/products";
import FeatureCards from "@/components/blocks/feature-section";
import CategoryMarquee from "@/components/blocks/category-marquee";
import { ProductCategoriesGrid } from "@/components/blocks/categories-grid";

export default function Home() {
  return (
    <main className="p-4 space-y-15">
      <ProductCategoriesGrid />

      <Section title="Best Sellers">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Section>

      <FeatureCards />

      <CategoryMarquee />
    </main>
  );
}
