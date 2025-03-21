
import SectionHeader from "./SectionHeader";
import ProductVisualization from "./ProductVisualization";
import ProductGrid from "./ProductGrid";
import { ProductItem } from "./types";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductSectionProps {
  title: string;
  link: string;
  items: ProductItem[];
  hasMore?: boolean;
}

const ProductSection = ({ title, link, items, hasMore = false }: ProductSectionProps) => {
  return (
    <div>
      <SectionHeader 
        title={title} 
        link={link} 
        linkText={`View ${title.split(' ')[0]}`} 
      />
      
      <ProductVisualization items={items} />
      
      <ProductGrid items={items} />
      
      {hasMore && (
        <div className="mt-4 text-right">
          <Link 
            to={link} 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
          >
            View more {title.split(' ')[0]} products
            <ChevronRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
