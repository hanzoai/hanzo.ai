
import { useState, useRef, useEffect } from "react";
import { NavigationButton } from "../NavigationButton";
import { SolutionsContent } from "./SolutionsContent";
import { useIsMobile } from "@/hooks/use-mobile";

export const SolutionsMenu = () => {
  const [open, setOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const isMobile = useIsMobile();
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
      exitTimeoutRef.current = null;
    }
    if (contentTimeoutRef.current) {
      clearTimeout(contentTimeoutRef.current);
      contentTimeoutRef.current = null;
    }
    
    setIsExiting(false);
    setOpen(true);
    // Slight delay before showing content to allow blur effect to start first
    contentTimeoutRef.current = setTimeout(() => {
      setShowContent(true);
    }, 50);
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
      // Slight delay before showing content to allow blur effect to start first
      contentTimeoutRef.current = setTimeout(() => {
        setShowContent(true);
      }, 50);
    }
  };

  const startExitAnimation = () => {
    setIsExiting(true);
    setShowContent(false); // Hide content immediately
    exitTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      setIsExiting(false);
    }, 300); // Match this to the total animation duration
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
      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
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
        Solutions
      </NavigationButton>
      
      {open && (
        <>
          {/* Full-screen blur backdrop */}
          <div className={`menu-backdrop-overlay ${!isExiting ? 'visible' : ''}`} />
          
          {/* Dropdown menu - only render content after backdrop starts */}
          {(open) && (
            <div className="fixed top-[var(--header-height)] left-0 z-[100] w-screen">
              {/* Full-width backdrop with blur (for the menu area) */}
              <div className="absolute inset-0 bg-[#000000]/90 backdrop-blur-md w-full h-full" />
              
              {/* Content container */}
              {showContent && (
                <div className={`relative w-full menu-content ${isExiting ? 'exiting' : ''}`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <SolutionsContent onCloseMenu={startExitAnimation} />
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
