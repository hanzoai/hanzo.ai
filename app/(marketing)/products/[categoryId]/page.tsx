import { categories, getProductsByCategory, getMLSubcategories, type ProductCategory } from "@/lib/data/product-taxonomy";
import CategoryPageClient from "./category-client";

export function generateStaticParams() {
  return categories.map((c) => ({
    categoryId: c.id,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  const category = categories.find(c => c.id === categoryId);
  const products = category ? getProductsByCategory(categoryId as ProductCategory) : [];
  const subcategories = categoryId === 'ml' ? getMLSubcategories() : undefined;

  return (
    <CategoryPageClient
      categoryId={categoryId}
      category={category || null}
      products={products}
      subcategories={subcategories}
    />
  );
}
