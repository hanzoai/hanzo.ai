
import SectionHeader from "./SectionHeader";
import ProductVisualization from "./ProductVisualization";
import ProductGrid from "./ProductGrid";
import { ProductItem } from "./types";

interface ProductSectionProps {
  title: string;
  link: string;
  items: ProductItem[];
  hasMore?: boolean;
  viewAllText?: string;
}

const ProductSection = ({ 
  title, 
  link, 
  items, 
  hasMore = false,
  viewAllText
}: ProductSectionProps) => {
  // Only show up to 8 items
  const limitedItems = items.slice(0, 8);
  
  // Use custom viewAllText if provided, otherwise use default
  const linkText = viewAllText || `View all ${title.split(' ')[0]}`;
  
  return (
    <div>
      <SectionHeader 
        title={title} 
        link={link} 
        linkText={linkText}
      />
      
      <ProductVisualization items={limitedItems} />
      
      <ProductGrid items={limitedItems} />
    </div>
  );
};

export default ProductSection;
