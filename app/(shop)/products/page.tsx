"use client";
import { ProductCard } from "@/components/blocks/product-card";
import Header from "@/components/header";
import PageWrapper from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <PageWrapper>
      <Header
        title="Products"
        description="Browse our collection of products."
      />
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
    </PageWrapper>
  );
}
