'use client'

import React from "react";
import Link from "next/link";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import type { Product } from "@/lib/data/product-taxonomy";

interface Props {
  product: Product | null;
}

export default function ProductPageClient({ product }: Props) {
  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products" className="text-muted-foreground hover:text-foreground underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="pt-16">
        <ProductPageTemplate product={product} />
      </div>
    </div>
  );
}
