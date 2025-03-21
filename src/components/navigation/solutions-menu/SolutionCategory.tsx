
import { getIcon } from "@/constants/iconMappings";
import { Link } from "react-router-dom";

interface SolutionCategoryProps {
  title: string;
  items: string[];
  onItemClick: () => void;
}

export const SolutionCategory = ({ title, items, onItemClick }: SolutionCategoryProps) => {
  // Limit to 4 items per category for better layout
  const displayItems = items.slice(0, 4);

  return (
    <div className="space-y-4">
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
      
      <div className="grid grid-cols-1 gap-5">
        {displayItems.map((item: string, index) => {
          const Icon = getIcon(item);
          const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
          return (
            <Link 
              to={`/solutions/${itemSlug}`} 
              key={item} 
              className="flex items-start space-x-3 group"
              onClick={onItemClick}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-gray-400 group-hover:text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-gray-300 group-hover:text-white font-medium truncate">{item}</div>
                <div className="text-sm text-gray-500 truncate">Solutions for {item.split(' ').slice(0, 3).join(' ')}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
