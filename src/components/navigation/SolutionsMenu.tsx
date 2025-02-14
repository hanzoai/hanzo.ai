
import { Globe, Shield, Brain, Code, Building, Network, DollarSign, Wrench } from "lucide-react";
import { solutions } from "@/constants/navigation";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "./NavigationButton";

export const SolutionsMenu = () => {
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

  return (
    <Popover>
      <PopoverTrigger asChild>
        <NavigationButton>Solutions</NavigationButton>
      </PopoverTrigger>
      <PopoverContent 
        onMouseLeave={(e) => {
          const trigger = document.activeElement as HTMLElement;
          trigger?.blur();
        }}
        className="w-[800px] p-6 bg-black/95 backdrop-blur-xl border-gray-800"
      >
        <div className="grid grid-cols-4 gap-8">
          {solutions.map(category => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.items.slice(0, 4).map(item => {
                  const Icon = getIcon(item);
                  return (
                    <a href="#" key={item} className="flex items-start space-x-3 group">
                      <Icon className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                      <div>
                        <div className="text-gray-300 group-hover:text-white font-medium">{item}</div>
                        <div className="text-sm text-gray-500">Description for {item}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
