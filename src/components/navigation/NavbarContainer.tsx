
import React, { ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface NavbarContainerProps {
  children: ReactNode;
  isScrolled: boolean;
}

const NavbarContainer = ({ children, isScrolled }: NavbarContainerProps) => {
  const { isDarkMode, getGlassClass } = useTheme();
  
  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur-md shadow-sm" : "backdrop-blur-sm",
        getGlassClass()
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[var(--header-height)]">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavbarContainer;
