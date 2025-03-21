
import { useState } from "react";
import {
  PopoverContent,
  PopoverTrigger,
  Popover
} from "@/components/ui/popover";
import { NavigationButton } from "../NavigationButton";
import ProductSection from "./ProductSection";
import { aiCloudItems, dxPlatformItems } from "./product-data";
import { Zap, Code, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  // Limit to 8 items for each section
  const limitedAICloudItems = aiCloudItems.slice(0, 8);
  const limitedDXPlatformItems = dxPlatformItems.slice(0, 8);

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
            <div>
              <ProductSection 
                title="AI Cloud" 
                link="/cloud" 
                items={limitedAICloudItems}
                hasMore={aiCloudItems.length > 8} 
              />
              
              {/* AI Cloud Promo */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-b from-purple-900/50 to-blue-900/50 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">Get $5 free</h4>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Start building with AI Cloud today and get $5 credit free.
                </p>
                <Button 
                  size="sm"
                  className="w-full bg-purple-700 hover:bg-purple-600 text-white border-none"
                >
                  <a href="https://cloud.hanzo.ai/auth/sign-up">Get Started Today</a>
                </Button>
              </div>
            </div>
            
            {/* DX Platform Section */}
            <div>
              <ProductSection 
                title="DX Platform" 
                link="/platform" 
                items={limitedDXPlatformItems}
                hasMore={dxPlatformItems.length > 8}
              />
              
              {/* DX Platform Promo */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-b from-green-900/50 to-teal-900/50 border border-green-500/20 hover:border-green-500/40 transition-colors">
                <div className="flex items-center space-x-2 mb-2">
                  <Code className="h-5 w-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Always Free & Open Source</h4>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Our developer experience platform is free to use and open source forever.
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full bg-transparent border-green-500/30 text-white hover:bg-green-800/30"
                >
                  <a href="https://github.com/hanzoai">View on GitHub</a>
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ProductsMenu;
