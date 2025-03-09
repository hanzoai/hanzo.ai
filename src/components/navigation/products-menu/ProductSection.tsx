
import SectionHeader from "./SectionHeader";
import ProductVisualization from "./ProductVisualization";
import ProductGrid from "./ProductGrid";
import { ProductItem } from "./types";

interface ProductSectionProps {
  title: string;
  link: string;
  items: ProductItem[];
}

const ProductSection = ({ title, link, items }: ProductSectionProps) => {
  return (
    <div>
      <SectionHeader 
        title={title} 
        link={link} 
        linkText={`View ${title.split(' ')[0]}`} 
      />
      
      <ProductVisualization items={items} />
      
      <ProductGrid items={items} />
    </div>
  );
};

export default ProductSection;
