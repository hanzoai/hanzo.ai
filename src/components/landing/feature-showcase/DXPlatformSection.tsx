
import React from "react";
import ProductCard from "./ProductCard";
import SectionHeader from "./SectionHeader";
import ViewAllButton from "./ViewAllButton";
import { ProductItem } from "@/components/navigation/products-menu/types";

interface DXPlatformSectionProps {
  products: ProductItem[];
}

const DXPlatformSection: React.FC<DXPlatformSectionProps> = ({ products }) => {
  return (
    <div className="mb-20">
      <SectionHeader
        badge="DX Platform"
        badgeColor="bg-purple-900/30 border border-purple-500/30 text-purple-300"
        title="Developer Experience Tools for AI Engineering"
        description="Supercharge your AI development workflow with purpose-built tools for engineers."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            icon={<product.icon className="h-6 w-6 text-purple-400" />}
            title={product.name}
            description={product.description}
          />
        ))}
      </div>
      
      <ViewAllButton 
        href="/platform"
        text="View all DX Platform tools"
        hoverColor="purple"
      />
    </div>
  );
};

export default DXPlatformSection;
