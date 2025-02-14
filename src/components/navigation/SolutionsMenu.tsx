
import { Globe, Shield, Brain, Code, Building, Network, DollarSign, Wrench } from "lucide-react";
import { solutions } from "@/constants/navigation";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "./NavigationButton";
import { useState } from "react";

export const SolutionsMenu = () => {
  const [open, setOpen] = useState(false);

  const getIcon = (name: string) => {
    const iconMap: Record<string, any> = {
      "Cloud": Globe,
      "Cybersecurity": Shield,
      "Data and Artificial Intelligence": Brain,
      "Digital Engineering": Code,
      "Banking": DollarSign,
      "Healthcare": Building,
      "Technology": Wrench,
      "Infrastructure": Network,
    };
    return iconMap[name] || Globe;
  };

  const handleSenseiClick = () => {
    window.location.href = "https://sensei.group";
  };

  // Split solutions items into 4 columns
  const columns = solutions.reduce((acc: any[], category) => {
    const itemsPerColumn = Math.ceil(category.items.length / 4);
    const columns = [];
    
    for (let i = 0; i < 4; i++) {
      const start = i * itemsPerColumn;
      const end = start + itemsPerColumn;
      const columnItems = category.items.slice(start, end);
      
      if (columnItems.length > 0) {
        columns.push({
          title: i === 0 ? category.title : "",
          items: columnItems,
          showViewAll: i === 0, // Only show "View All" on first column
        });
      }
    }
    
    return [...acc, ...columns];
  }, []);

  return (
    <div onMouseLeave={() => setOpen(false)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <NavigationButton onHoverStart={() => setOpen(true)}>Solutions</NavigationButton>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[1200px] p-6 bg-black border-gray-800"
          sideOffset={8}
        >
          <div className="flex gap-6">
            <div className="flex-1 grid grid-cols-4 gap-8">
              {columns.map((column, idx) => (
                <div key={idx} className="space-y-4">
                  {column.title && (
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                      {column.showViewAll && (
                        <a 
                          href={`/solutions#${column.title.toLowerCase()}`} 
                          className="text-sm text-purple-400 hover:text-purple-300"
                        >
                          View All
                        </a>
                      )}
                    </div>
                  )}
                  <div className="space-y-4">
                    {column.items.map((item: string) => {
                      const Icon = getIcon(item);
                      return (
                        <a href="#" key={item} className="flex items-start space-x-3 group">
                          <Icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                          <div>
                            <div className="text-gray-300 group-hover:text-white font-medium">{item}</div>
                            <div className="text-sm text-gray-500">Solutions for {item}</div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Sensei Column */}
            <div 
              onClick={handleSenseiClick}
              className="w-64 rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/50 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors p-6 flex flex-col"
            >
              <div className="p-3 rounded-lg bg-purple-500/20 self-start mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Execute with Sensei</h3>
              <p className="text-gray-400 text-sm">
                Need expert guidance? Partner with Sensei Group to implement enterprise AI solutions 
                and transform your business.
              </p>
              <div className="mt-auto pt-4">
                <span className="text-purple-400 text-sm hover:text-purple-300 flex items-center">
                  Contact Sensei Group →
                </span>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
