'use client'

import React from "react";
import Link from "next/link";
import { CategoryPageTemplate } from "@/components/products/CategoryPageTemplate";
import type { CategoryInfo, Product } from "@/lib/data/product-taxonomy";

interface Props {
  categoryId: string;
  category: CategoryInfo | null;
  products: Product[];
  subcategories?: string[];
}

export default function CategoryPageClient({ category, products, subcategories }: Props) {
  if (!category) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link href="/products" className="text-neutral-400 hover:text-white underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-16">
        <CategoryPageTemplate
          category={category}
          products={products}
          subcategories={subcategories}
        />
      </div>
    </div>
  );
}
