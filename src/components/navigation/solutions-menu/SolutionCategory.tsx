
import { ChevronRight } from "lucide-react";
import { getIcon } from "@/constants/iconMappings";
import { Link } from "react-router-dom";

interface SolutionCategoryProps {
  title: string;
  items: string[];
  onItemClick: () => void;
}

export const SolutionCategory = ({ title, items, onItemClick }: SolutionCategoryProps) => {
  // Limit to 8 items per category
  const displayItems = items.slice(0, 8);
  const hasMore = items.length > 8;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <Link 
          to="/solutions" 
          className="text-purple-400 hover:text-purple-300 text-sm font-medium"
          onClick={onItemClick}
        >
          View all
        </Link>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {displayItems.map((item: string) => {
          const Icon = getIcon(item);
          const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
          return (
            <Link 
              to={`/solutions/${itemSlug}`} 
              key={item} 
              className="flex items-start space-x-3 group"
              onClick={onItemClick}
            >
              <Icon className="h-5 w-5 text-gray-400 group-hover:text-white mt-1" strokeWidth={1.5} />
              <div>
                <div className="text-gray-300 group-hover:text-white font-medium">{item}</div>
                <div className="text-sm text-gray-500">Solutions for {item}</div>
              </div>
            </Link>
          );
        })}
      </div>
      
      {hasMore && (
        <div className="text-right">
          <Link 
            to="/solutions" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium"
            onClick={onItemClick}
          >
            View more {title.toLowerCase()}
            <ChevronRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      )}
    </div>
  );
};
