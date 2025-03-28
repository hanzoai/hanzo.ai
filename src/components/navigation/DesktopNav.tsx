
import React from "react";
import { Link } from "react-router-dom";
import { ProductsMenu } from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { ResourcesMenu } from "./resources-menu";
import { useTheme } from "@/contexts/ThemeContext";

const DesktopNav = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="hidden md:flex items-center justify-center space-x-6 flex-1">
      <div className="flex items-center justify-center space-x-6">
        <ProductsMenu />
        <SolutionsMenu />
        <ResourcesMenu />
        
        <Link to="/team" className={`${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"} transition-colors`}>
          Team
        </Link>
        <Link to="/zen" className={`${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"} transition-colors`}>
          Zen
        </Link>
        <a href="/pricing" className={`${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-gray-900"} transition-colors`}>
          Pricing
        </a>
      </div>
    </div>
  );
};

export default DesktopNav;
