
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
  const [isExiting, setIsExiting] = useState(false);
  const isMobile = useIsMobile();
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
      exitTimeoutRef.current = null;
    }
    setIsExiting(false);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      startExitAnimation();
    }, 200);
  };

  const handleToggle = () => {
    if (open) {
      startExitAnimation();
    } else {
      setIsExiting(false);
      setOpen(true);
    }
  };

  const startExitAnimation = () => {
    setIsExiting(true);
    exitTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setIsExiting(false);
    }, 200); // Match this to the CSS animation duration
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && open) {
        startExitAnimation();
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
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, [open]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        startExitAnimation();
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
          {/* Full-screen blur backdrop */}
          <div className={`menu-backdrop-overlay ${!isExiting ? 'visible' : ''}`} />
          
          {/* Dropdown menu */}
          <div className="fixed top-[var(--header-height)] left-0 z-[100] w-screen">
            {/* Full-width backdrop with blur (for the menu area) */}
            <div className="absolute inset-0 bg-[#000000]/90 backdrop-blur-md w-full h-full" />
            
            {/* Content container */}
            <div className={`relative w-full menu-content ${isExiting ? 'exiting' : ''}`}>
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
                      onLinkClick={() => startExitAnimation()}
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
                        onClick={() => startExitAnimation()}
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
                      onLinkClick={() => startExitAnimation()}
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
                          onClick={() => startExitAnimation()}
                        >
                          <a href="https://github.com/hanzoai">View on GitHub</a>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1 bg-transparent border-green-500/30 text-white hover:bg-green-800/30"
                          onClick={() => startExitAnimation()}
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
