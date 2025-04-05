
import { ReactNode } from "react";
import { NavigationButton } from "../NavigationButton";
import { useIsMobile } from "@/hooks/use-mobile";
import { UseNavigationMenuOptions, useNavigationMenu } from "@/hooks/use-navigation-menu";

interface MenuContainerProps {
  title: string;
  children: ReactNode;
  options?: UseNavigationMenuOptions;
}

export const MenuContainer = ({ title, children, options }: MenuContainerProps) => {
  const isMobile = useIsMobile();
  const {
    open,
    isExiting,
    showContent,
    menuRef,
    handleMouseEnter,
    handleMouseLeave,
    handleToggle,
  } = useNavigationMenu(options);

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
        {title}
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
                    {children}
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
