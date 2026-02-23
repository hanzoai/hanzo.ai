import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductPageTemplate } from "@/components/products/ProductPageTemplate";
import { getProduct } from "@/data/product-taxonomy";

export default function ProductPage() {
  const { categoryId, productId } = useParams<{ categoryId: string; productId: string }>();

  const product = getProduct(productId || '');

  if (!product || product.category !== categoryId) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-16">
        <ProductPageTemplate product={product} />
      </div>
      <Footer />
    </div>
  );
}
