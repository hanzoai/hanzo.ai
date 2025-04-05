import { useState, useRef, useEffect } from "react";
import { NavigationButton } from "../NavigationButton";
import ProductSection from "./ProductSection";
import { aiCloudItems, dxPlatformItems } from "./product-data";
import { Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export const ProductsMenu = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && open) {
        setOpen(false);
      }
    };
    
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    
    if (open) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  return (
    <div 
      className="relative" 
      ref={menuRef} 
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
    >
      <NavigationButton 
        onClick={handleToggle}
        isActive={open}
      >
        Products
      </NavigationButton>
      
      {open && (
        <>
          {/* Dropdown menu */}
          <div className="fixed top-[var(--header-height)] left-0 z-50 w-screen">
            {/* Full-width backdrop with blur */}
            <div className="absolute inset-0 bg-[var(--black)]/80 backdrop-blur-md w-full h-full" />
            
            {/* Content container */}
            <div className="relative w-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* AI Cloud Section */}
                  <div>
                    <ProductSection 
                      title="AI Cloud" 
                      link="/cloud" 
                      items={aiCloudItems}
                      hasMore={aiCloudItems.length > 8}
                      viewAllText="View all Cloud" 
                      onLinkClick={() => setOpen(false)}
                    />
                    
                    {/* AI Cloud Promo */}
                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-b from-purple-900/30 to-blue-900/30 border border-purple-500/20 hover:border-purple-500/40 transition-colors">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="h-5 w-5 text-purple-400" />
                        <h4 className="text-lg font-semibold text-white">Get $5 free</h4>
                      </div>
                      <p className="text-neutral-300 text-sm mb-3">
                        Start building with AI Cloud today and get $5 credit free.
                      </p>
                      <Button 
                        size="sm"
                        className="w-full bg-purple-700 hover:bg-purple-600 text-white border-none"
                        onClick={() => setOpen(false)}
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
                      items={dxPlatformItems}
                      hasMore={dxPlatformItems.length > 8}
                      viewAllText="View all Open Source"
                      onLinkClick={() => setOpen(false)}
                    />
                    
                    {/* DX Platform Promo with link to open source */}
                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-b from-green-900/30 to-teal-900/30 border border-green-500/20 hover:border-green-500/40 transition-colors">
                      <div className="flex items-center space-x-2 mb-2">
                        <Code className="h-5 w-5 text-green-400" />
                        <h4 className="text-lg font-semibold text-white">Always Free & Open Source</h4>
                      </div>
                      <p className="text-neutral-300 text-sm mb-3">
                        Our developer experience platform is free to use and open source forever.
                      </p>
                      <div className="flex space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 bg-transparent border-green-500/30 text-white hover:bg-green-800/30"
                          onClick={() => setOpen(false)}
                        >
                          <a href="https://github.com/hanzoai">View on GitHub</a>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 bg-transparent border-green-500/30 text-white hover:bg-green-800/30"
                          onClick={() => setOpen(false)}
                        >
                          <Link to="/open-source">Open Source</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsMenu;