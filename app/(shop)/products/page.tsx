"use client";
import { ProductCard } from "@/components/blocks/product-card";
import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <PageWrapper>
      <main className="p-4 space-y-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-muted-foreground">
            Discover our full range of quality products
          </p>
        </div>

        <div className="grid gap-y-4 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="">
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found matching your criteria
              </p>
              <Button variant="outline" className="mt-4">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
    </PageWrapper>
  );
}
