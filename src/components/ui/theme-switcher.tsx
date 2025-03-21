
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeSwitcherProps {
  className?: string;
  size?: "sm" | "default";
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ 
  className = "",
  size = "default" 
}) => {
  const { mode, setMode, getRoundingClass, getGlassClass } = useTheme();
  
  const iconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  const toggleHeight = size === "sm" ? "h-7" : "h-9";
  const itemHeight = size === "sm" ? "h-5 w-5" : "h-7 w-7";

  return (
    <div className={`${className}`}>
      <ToggleGroup 
        type="single" 
        value={mode} 
        onValueChange={(value) => {
          if (value) setMode(value as "light" | "dark" | "system");
        }}
        className={`${getGlassClass()} border ${getRoundingClass()} p-1 ${toggleHeight}`}
      >
        <ToggleGroupItem 
          value="light" 
          aria-label="Light mode"
          className={`relative ${getRoundingClass()} data-[state=on]:text-yellow-500 ${itemHeight} flex items-center justify-center`}
        >
          {mode === "light" && (
            <motion.div 
              layoutId="theme-switcher-indicator"
              className={`absolute inset-0 ${getRoundingClass()} bg-white/20 -z-10`} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <Sun className={iconSize} />
        </ToggleGroupItem>
        
        <ToggleGroupItem 
          value="dark" 
          aria-label="Dark mode"
          className={`relative ${getRoundingClass()} data-[state=on]:text-purple-400 ${itemHeight} flex items-center justify-center`}
        >
          {mode === "dark" && (
            <motion.div 
              layoutId="theme-switcher-indicator"
              className={`absolute inset-0 ${getRoundingClass()} bg-white/20 -z-10`} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <Moon className={iconSize} />
        </ToggleGroupItem>
        
        <ToggleGroupItem 
          value="system" 
          aria-label="System preference"
          className={`relative ${getRoundingClass()} data-[state=on]:text-blue-400 ${itemHeight} flex items-center justify-center`}
        >
          {mode === "system" && (
            <motion.div 
              layoutId="theme-switcher-indicator"
              className={`absolute inset-0 ${getRoundingClass()} bg-white/20 -z-10`} 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
          <Monitor className={iconSize} />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ThemeSwitcher;
