
import { useState } from "react";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "../NavigationButton";
import ProductSection from "./ProductSection";
import { aiCloudItems, dxPlatformItems } from "./product-data";

export const ProductsMenu = () => {
  const [open, setOpen] = useState(false);
  const [clickedOpen, setClickedOpen] = useState(false);
  
  let closeTimeout: ReturnType<typeof setTimeout> | null = null;

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    if (!clickedOpen) {
      closeTimeout = setTimeout(() => {
        setOpen(false);
      }, 300);
    }
  };

  const handleClick = () => {
    setClickedOpen(!clickedOpen);
    setOpen(!open);
  };

  const handleOutsideClick = () => {
    if (clickedOpen) {
      setClickedOpen(false);
      setOpen(false);
    }
  };

  return (
    <div>
      <Popover 
        open={open || clickedOpen} 
        onOpenChange={(newOpen) => {
          if (!newOpen) {
            setClickedOpen(false);
            setOpen(false);
          }
        }}
      >
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <PopoverTrigger asChild>
            <NavigationButton onClick={handleClick}>Products</NavigationButton>
          </PopoverTrigger>
          
          {open && !clickedOpen && (
            <div 
              className="absolute left-0 w-full h-10 -bottom-10"
              onMouseEnter={handleMouseEnter}
            />
          )}
        </div>
        
        <PopoverContent 
          className="w-[800px] max-w-[90vw] p-6 bg-black border-gray-800"
          sideOffset={8}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onInteractOutside={handleOutsideClick}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Cloud Section */}
            <ProductSection 
              title="AI Cloud" 
              link="/cloud" 
              items={aiCloudItems} 
            />
            
            {/* DX Platform Section */}
            <ProductSection 
              title="DX Platform" 
              link="/platform" 
              items={dxPlatformItems} 
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ProductsMenu;
