import React from "react";
import { Link } from "react-router-dom";
import ProductsMenu from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { ResourcesMenu } from "./ResourcesMenu";
import { mainNav } from "@/constants/navigation-data";
import { useTheme } from "@/contexts/ThemeContext";

const DesktopNav = () => {
  const { isDarkMode } = useTheme();
  
  // Find direct navigation items (not menu dropdowns)
  const directNavItems = mainNav.filter(item => item.href);
  
  return (
    <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
      <div className="flex items-center justify-center space-x-8">
        <ProductsMenu />
        <SolutionsMenu />
        <ResourcesMenu />
        
        {/* Render direct navigation items */}
        {directNavItems.map(item => (
          <Link 
            key={item.title}
            to={item.href}
            className="text-neutral-400 hover:text-[var(--white)] transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopNav;