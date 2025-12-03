import React from "react";
import { Link } from "react-router-dom";
import ProductsMenu from "./products-menu";
import { SolutionsMenu } from "./solutions-menu";
import { ResourcesMenu } from "./resources-menu";
import { mainNav } from "@/constants/navigation-data";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  themeColor?: string;
}

const DesktopNav = ({ themeColor }: DesktopNavProps) => {
  const { isDarkMode } = useTheme();

  // Find direct navigation items (not menu dropdowns)
  const directNavItems = mainNav.filter(item => item.href);

  // Get theme-specific text color classes
  const getTextColorClasses = () => {
    if (!themeColor) return "text-neutral-400 hover:text-neutral-100";

    const colorMap: Record<string, string> = {
      indigo: "text-indigo-200 hover:text-indigo-100",
      orange: "text-orange-200 hover:text-orange-100",
      emerald: "text-emerald-200 hover:text-emerald-100",
      blue: "text-blue-200 hover:text-blue-100",
      violet: "text-violet-200 hover:text-violet-100",
      pink: "text-pink-200 hover:text-pink-100",
      amber: "text-amber-200 hover:text-amber-100",
      green: "text-green-200 hover:text-green-100",
    };

    return colorMap[themeColor] || "text-neutral-400 hover:text-neutral-100";
  };

  return (
    <div className="hidden md:flex items-center space-x-8">
      <ProductsMenu themeColor={themeColor} />
      <SolutionsMenu themeColor={themeColor} />
      <ResourcesMenu themeColor={themeColor} />

      {/* Render direct navigation items */}
      {directNavItems.map(item => (
        <Link
          key={item.title}
          to={item.href}
          className={cn(
            getTextColorClasses(),
            "transition-colors text-sm font-medium whitespace-nowrap"
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNav;