import React, { ReactNode } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

interface NavbarContainerProps {
  children: ReactNode;
  isScrolled: boolean;
  themeColor?: string;
}

const NavbarContainer = ({ children, isScrolled, themeColor }: NavbarContainerProps) => {
  const { isDarkMode, getGlassClass } = useTheme();

  // Generate theme-based styling
  const getThemeStyles = () => {
    if (!themeColor) return "";

    const themeClasses: Record<string, string> = {
      indigo: "bg-gradient-to-r from-indigo-950/40 via-black/80 to-indigo-950/40 border-b border-indigo-500/20",
      orange: "bg-gradient-to-r from-orange-950/40 via-black/80 to-orange-950/40 border-b border-orange-500/20",
      emerald: "bg-gradient-to-r from-emerald-950/40 via-black/80 to-emerald-950/40 border-b border-emerald-500/20",
      blue: "bg-gradient-to-r from-blue-950/40 via-black/80 to-blue-950/40 border-b border-blue-500/20",
      violet: "bg-gradient-to-r from-violet-950/40 via-black/80 to-violet-950/40 border-b border-violet-500/20",
      pink: "bg-gradient-to-r from-pink-950/40 via-black/80 to-pink-950/40 border-b border-pink-500/20",
      amber: "bg-gradient-to-r from-amber-950/40 via-black/80 to-amber-950/40 border-b border-amber-500/20",
      green: "bg-gradient-to-r from-green-950/40 via-black/80 to-green-950/40 border-b border-green-500/20",
    };

    return themeClasses[themeColor] || "";
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "backdrop-blur-md shadow-sm" : "backdrop-blur-sm",
        themeColor ? getThemeStyles() : getGlassClass()
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-[var(--header-height)]">
          {children}
        </div>
      </div>
    </nav>
  );
};

export default NavbarContainer;