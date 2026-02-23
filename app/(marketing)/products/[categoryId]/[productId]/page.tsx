import { allProducts, categories } from "@/lib/data/product-taxonomy";
import ProductPageClient from "./product-client";

export function generateStaticParams() {
  return allProducts.map((p) => ({
    categoryId: p.category,
    productId: p.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ categoryId: string; productId: string }> }) {
  const { categoryId, productId } = await params;
  const product = allProducts.find(p => p.id === productId && p.category === categoryId) || null;

  return <ProductPageClient product={product} />;
}
