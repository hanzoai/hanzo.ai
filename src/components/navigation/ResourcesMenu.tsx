
import { useState, useRef, useEffect } from "react";
import { MessageSquare, Users, HelpCircle, Book, Code, Globe } from "lucide-react";
import { resources } from "@/constants/navigation";
import { NavigationButton } from "./NavigationButton";
import { useIsMobile } from "@/hooks/use-mobile";

export const ResourcesMenu = () => {
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

  const handleItemClick = () => {
    startExitAnimation();
  };

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
        Resources
      </NavigationButton>
      
      {open && (
        <>
          {/* Full-screen blur backdrop - positioned fixed to cover the entire viewport */}
          <div className={`fixed inset-0 menu-backdrop-overlay ${!isExiting ? 'visible' : ''}`} />
          
          {/* Dropdown menu - only render content after backdrop starts */}
          {(open) && (
            <div className="fixed top-[var(--header-height)] left-0 z-[100] w-screen">
              {/* Full-width backdrop with blur (for the menu area) */}
              <div className="absolute inset-0 bg-[#000000]/90 backdrop-blur-md w-full h-full" />
              
              {/* Content container */}
              {showContent && (
                <div className={`relative w-full menu-content ${isExiting ? 'exiting' : ''}`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {resources.map(category => (
                        <div key={category.title}>
                          <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                          <div className="space-y-4">
                            {category.items.slice(0, 4).map(item => {
                              const Icon = item.name.includes('Forum') ? MessageSquare :
                                        item.name.includes('Community') ? Users :
                                        item.name.includes('Help') ? HelpCircle :
                                        item.name.includes('Documentation') ? Book :
                                        item.name.includes('API') ? Code : Globe;

                              return (
                                <a
                                  key={item.name}
                                  href={item.url}
                                  target={item.url.startsWith('http') ? '_blank' : undefined}
                                  rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                  className="flex items-start space-x-3 group"
                                  onClick={handleItemClick}
                                >
                                  <Icon className="h-5 w-5 text-neutral-400 group-hover:text-white mt-1" />
                                  <div>
                                    <div className="text-neutral-300 group-hover:text-white font-medium">{item.name}</div>
                                    <div className="text-sm text-neutral-500">{item.description}</div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
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
