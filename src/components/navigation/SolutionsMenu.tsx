
import { 
  Globe, 
  Shield, 
  Brain, 
  Code, 
  Building2, 
  Network, 
  DollarSign, 
  Wrench,
  Rocket,
  Factory,
  Buildings,
  Car,
  Newspaper,
  Shopping,
  Truck,
  Laptop,
  Plane,
  Bank,
  Heart,
  Leaf,
  GraduationCap,
  LineChart
} from "lucide-react";
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
      // Capabilities
      "Cloud": Globe,
      "Cybersecurity": Shield,
      "Data and Artificial Intelligence": Brain,
      "Digital Engineering and Manufacturing": Code,
      "Emerging Technology": Rocket,
      "Ecosystem Partners": Network,
      "Finance and Risk Management": Bank,
      "Infrastructure and Capital Projects": Building2,
      "Learning": GraduationCap,
      "Marketing and Experience": Newspaper,
      "Metaverse": LineChart,
      "Sales and Commerce": Shopping,
      
      // Industries
      "Aerospace and Defense": Plane,
      "Automotive": Car,
      "Banking": DollarSign,
      "Chemicals": Factory,
      "Communications and Media": Laptop,
      "Consumer Goods and Services": Shopping,
      "Energy": Leaf,
      "Health": Heart,
      "High Tech": Rocket,
      "Industrial": Factory,
      "Insurance": Shield,
      "Life Sciences": Heart,
      "Natural Resources": Leaf,
      "Public Service": Buildings,
      "Private Equity": Bank,
      "Retail": Shopping,
      "Software and Platforms": Code,
      "Travel": Plane,
      "US Federal Government": Buildings,
      "Utilities": Network,
      
      // Default
      "Technology": Wrench,
      "Infrastructure": Network,
    };
    return iconMap[name] || Globe;
  };

  const handleSenseiClick = () => {
    window.location.href = "https://sensei.group";
  };

  const renderSolutionItems = (category: { title: string; items: string[] }) => {
    const displayItems = category.items.slice(0, 6); // Show only first 6 items

    return (
      <div className="grid grid-cols-2 gap-4">
        {displayItems.map((item: string) => {
          const Icon = getIcon(item);
          return (
            <a href="#" key={item} className="flex items-start space-x-3 group">
              <Icon className="h-5 w-5 text-gray-400 group-hover:text-white mt-1" strokeWidth={1.5} />
              <div>
                <div className="text-gray-300 group-hover:text-white font-medium">{item}</div>
                <div className="text-sm text-gray-500">Solutions for {item}</div>
              </div>
            </a>
          );
        })}
      </div>
    );
  };

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
            <div className="flex-1 grid grid-cols-2 gap-12">
              {solutions.map((category, idx) => (
                <div key={idx} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    {category.items.length > 6 && (
                      <a 
                        href="/solutions" 
                        className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2"
                      >
                        View all
                        <Globe className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                  {renderSolutionItems(category)}
                </div>
              ))}
            </div>

            {/* Sensei Column */}
            <div 
              onClick={handleSenseiClick}
              className="w-64 rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/50 border border-purple-500/20 cursor-pointer hover:border-purple-500/40 transition-colors p-6 flex flex-col"
            >
              <div className="p-3 rounded-lg bg-purple-500/20 self-start mb-4">
                <Shield className="h-5 w-5 text-purple-400" strokeWidth={1.5} />
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
