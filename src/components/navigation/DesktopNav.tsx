import React from "react";
import { Link } from "react-router-dom";
import ProductsMenu from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { ResourcesMenu } from "./resources-menu";
import { mainNav } from "@/constants/navigation-data";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

const DesktopNav = () => {
  const { isDarkMode } = useTheme();
  
  // Find direct navigation items (not menu dropdowns)
  const directNavItems = mainNav.filter(item => item.href);
  
  return (
    <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-8 flex-1 w-full">
      <div className="flex items-center justify-center space-x-4 lg:space-x-8 w-full max-w-7xl mx-auto">
        <ProductsMenu />
        <SolutionsMenu />
        <ResourcesMenu />
        
        {/* Render direct navigation items */}
        {directNavItems.map(item => (
          <Link 
            key={item.title}
            to={item.href}
            className={cn(
              "text-neutral-400 hover:text-neutral-100 transition-colors", 
              "text-sm font-medium whitespace-nowrap"
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;