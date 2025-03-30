
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
      <div className="flex items-center justify-center space-x-8">
        <ProductsMenu />
        <SolutionsMenu />
        <ResourcesMenu />
        
        <Link to="/team" className="text-neutral-400 hover:text-[var(--white)] transition-colors">
          Team
        </Link>
      </div>
    </div>
  );
};

export default DesktopNav;
