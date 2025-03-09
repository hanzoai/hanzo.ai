
import { Link } from "react-router-dom";
import { ProductItem } from "./types";
import { useState } from "react";

interface ProductGridProps {
  items: ProductItem[];
}

const ProductGrid = ({ items }: ProductGridProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[360px] overflow-y-auto pr-2">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-start space-x-3 group"
          onMouseEnter={() => setHoveredItem(item.name)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <item.icon 
            className={`h-6 w-6 mt-1 transition-colors duration-200 ${
              hoveredItem === item.name ? 'text-purple-400' : 'text-gray-400 group-hover:text-white'
            }`} 
          />
          <div className="flex-1">
            <Link to={item.link} className="text-gray-300 group-hover:text-white font-medium">
              {item.name}
            </Link>
            <div className="text-sm text-gray-500">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
