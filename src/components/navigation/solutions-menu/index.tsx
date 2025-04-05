
import { useState, useRef, useEffect } from "react";
import { NavigationButton } from "../NavigationButton";
import { SolutionsContent } from "./SolutionsContent";
import { useIsMobile } from "@/hooks/use-mobile";

export const SolutionsMenu = () => {
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
        Solutions
      </NavigationButton>
      
      {open && (
        <>
          {/* Full-screen blur backdrop */}
          <div className="menu-backdrop-overlay" />
          
          {/* Dropdown menu */}
          <div className="fixed top-[var(--header-height)] left-0 z-[100] w-screen">
            {/* Full-width backdrop with blur (for the menu area) */}
            <div className="absolute inset-0 bg-[#000000]/90 backdrop-blur-md w-full h-full" />
            
            {/* Content container */}
            <div className="relative w-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <SolutionsContent onCloseMenu={() => setOpen(false)} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
