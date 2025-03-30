import { useState, useRef, useEffect } from "react";
import { MessageSquare, Users, HelpCircle, Book, Code, Globe } from "lucide-react";
import { resources } from "@/constants/navigation";
import { NavigationButton } from "./NavigationButton";
import { useIsMobile } from "@/hooks/use-mobile";

export const ResourcesMenu = () => {
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

  const handleItemClick = () => {
    setOpen(false);
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
          {/* Dropdown menu */}
          <div className="fixed top-[var(--header-height)] left-0 z-50 w-screen">
            {/* Full-width backdrop with blur */}
            <div className="absolute inset-0 bg-[var(--black)]/80 backdrop-blur-md w-full h-full" />
            
            {/* Content container */}
            <div className="relative w-full">
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
          </div>
        </>
      )}
    </div>
  );
};