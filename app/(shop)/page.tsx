import { ProductCard } from "@/components/blocks/produc-card";
import { Section } from "@/components/blocks/section";
import { products } from "@/data/products";
import FeatureCards from "@/components/blocks/feature-section";
import CategoryMarquee from "@/components/blocks/category-marquee";
import { ProductCategoriesGrid } from "@/components/blocks/categories-grid";

export default function Home() {
  return (
    <main className="p-4 space-y-15 max-w-4xl mx-auto">
      <ProductCategoriesGrid />

      <Section title="Best Sellers">
        {products.map((product) => (
          <div key={product.id} className="w-72">
            <ProductCard product={product} />
          </div>
        ))}
      </Section>

      <FeatureCards />

      <CategoryMarquee />
    </main>
  );
}
