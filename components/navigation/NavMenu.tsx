'use client'

import { useState, ReactNode, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

type NavMenuProps = {
  label: string;
  children: ReactNode | ((closeMenu: () => void) => ReactNode);
};

export const NavMenu = ({ label, children }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { isDarkMode } = useTheme();
  
  const toggleMenu = () => {
    if (!isDesktop) {
      setIsOpen(!isOpen);
    }
  };
  
  // Add a delay for menu closing to make hover more forgiving
  const closeTimeoutRef = useRef<number | null>(null);
  
  const handleMouseEnter = () => {
    if (isDesktop) {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      closeTimeoutRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 150); // 150ms delay before closing
    }
  };
  
  const closeMenu = () => setIsOpen(false);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Handle click outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isDesktop && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDesktop]);

  // Pass closeMenu function to children if they are a function
  const childrenWithProps = typeof children === "function" 
    ? children(closeMenu) 
    : children;

  return (
    <div 
      className="relative" 
      ref={menuRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Menu trigger button */}
      <button
        onClick={toggleMenu}
        className={cn(
          "inline-flex items-center outline-none focus:outline-none transition-colors text-sm font-medium",
          isOpen
            ? (isDarkMode ? "text-white" : "text-black")
            : (isDarkMode ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black")
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "ml-1 h-4 w-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <>
          {/* Desktop: Full viewport width dropdown with backdrop */}
          {isDesktop ? (
            <div className={cn(
                   "fixed left-0 w-full backdrop-blur-md z-50 border-b shadow-2xl",
                   isDarkMode
                     ? "bg-black/95 border-gray-800/50"
                     : "bg-white/95 border-gray-200"
                 )}
                 style={{
                   top: 'var(--header-height)',
                 }}>
              <div className="py-6">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
                  {childrenWithProps}
                </div>
              </div>
            </div>
          ) : (
            /* Mobile: Full-viewport menu overlay */
            <div
              className={cn(
                "fixed inset-0 left-0 right-0 backdrop-blur-md z-50 w-screen transition-opacity duration-300 ease-in-out",
                isDarkMode ? "bg-black/95" : "bg-white/95"
              )}
              style={{
                top: 'var(--header-height)',
                height: 'calc(100vh - var(--header-height))',
                width: '100vw'
              }}
              onClick={closeMenu}
            >
              <div 
                className="relative w-full h-full overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-4 sm:px-6 lg:px-8 py-6 h-full flex flex-col">
                  <div className="flex-grow overflow-x-hidden">
                    {childrenWithProps}
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NavMenu;