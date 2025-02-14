
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

  return (
    <div onMouseLeave={() => setOpen(false)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <NavigationButton onHoverStart={() => setOpen(true)}>Solutions</NavigationButton>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[800px] p-6 bg-black border-gray-800"
          sideOffset={8}
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
    </div>
  );
};
