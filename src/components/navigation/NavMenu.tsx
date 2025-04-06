import { useState, ReactNode, useEffect, useRef } from "react";
import { ChevronDown, Search, MessageSquare } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { utilityNav } from "@/constants/navigation-data";

type NavMenuProps = {
  label: string;
  children: ReactNode;
};

export const NavMenu = ({ label, children }: NavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
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
        className={`${isOpen ? 'text-white' : 'text-neutral-300'} hover:text-white transition-colors inline-flex items-center outline-none focus:outline-none`}
      >
        {label}
        <ChevronDown
          className={`ml-1 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <>
          {/* Desktop: Header-height dropdown with backdrop */}
          {isDesktop ? (
            <div
              className="absolute left-0 w-screen bg-[#000000]/95 backdrop-blur-md z-50 animate-fadeIn shadow-xl"
              style={{
                top: 'var(--header-height)',
                width: '100vw',
                left: '50%',
                transform: 'translateX(-50%)'
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
                {/* Utility nav in top right */}
                <div className="absolute top-4 right-6 flex items-center space-x-6">
                  <a href={utilityNav.search.href} className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                    <Search className="h-4 w-4" />
                    <span>{utilityNav.search.title}</span>
                  </a>
                  <a href={utilityNav.chat.href} className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>{utilityNav.chat.title}</span>
                  </a>
                </div>
                
                <div className="reveal-content mt-2">
                  {childrenWithProps}
                </div>
              </div>
            </div>
          ) : (
            /* Mobile: Full-viewport menu overlay */
            <div
              className="fixed inset-0 left-0 right-0 bg-[#000000]/95 backdrop-blur-md z-50 w-screen transition-opacity duration-300 ease-in-out animate-fadeIn"
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-full flex flex-col">
                  <div className="flex-grow">
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