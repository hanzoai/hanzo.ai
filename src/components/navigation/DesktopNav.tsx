
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
        
        <Link to="/team" className="text-gray-500 hover:text-white transition-colors">
          Team
        </Link>
        <Link to="/zen" className="text-gray-400 hover:text-white border-b border-gray-800 pb-0.5 transition-colors">
          Principles
        </Link>
        <Link to="/cloud" className="text-gray-500 hover:text-white transition-colors">
          Cloud
        </Link>
      </div>
    </div>
  );
};

export default DesktopNav;
