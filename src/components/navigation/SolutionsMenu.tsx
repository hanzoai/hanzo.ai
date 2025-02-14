
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

  return (
    <div onMouseLeave={() => setOpen(false)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <NavigationButton onHoverStart={() => setOpen(true)}>Solutions</NavigationButton>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[1000px] p-6 bg-black border-gray-800"
          sideOffset={8}
        >
          <div className="grid grid-cols-4 gap-8">
            {solutions.map(category => (
              <div key={category.title} className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  <a 
                    href={`/solutions#${category.title.toLowerCase()}`} 
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    View All
                  </a>
                </div>
                <div className="space-y-4">
                  {category.items.slice(0, 4).map(item => {
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

            {/* Sensei Block */}
            <div 
              onClick={handleSenseiClick}
              className="col-span-4 mt-6 p-6 rounded-xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-purple-500/20">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Execute with Sensei</h3>
                  <p className="text-gray-400">
                    Need expert guidance? Partner with Sensei Group to implement enterprise AI solutions 
                    and transform your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
