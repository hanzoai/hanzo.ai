
import { Brain } from "lucide-react";
import { products } from "@/constants/navigation";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "./NavigationButton";
import { useState } from "react";

export const ProductsMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <NavigationButton>Products</NavigationButton>
      </PopoverTrigger>
      <PopoverContent 
        className="w-[720px] p-6 bg-black border-gray-800"
        sideOffset={8}
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => setOpen(false)}
      >
        <div className="grid grid-cols-3 gap-8">
          {products.map(category => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.items.slice(0, 4).map(item => (
                  <a href="#" key={item} className="flex items-start space-x-3 group">
                    <Brain className="h-6 w-6 text-gray-400 group-hover:text-white mt-1" />
                    <div>
                      <div className="text-gray-300 group-hover:text-white font-medium">{item}</div>
                      <div className="text-sm text-gray-500">Description for {item}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
