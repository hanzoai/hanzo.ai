
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Moon, Sun, Monitor } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = "" }) => {
  const { mode, setMode, isDarkMode, getRoundingClass, getGlassClass } = useTheme();

  return (
    <div className={`${className}`}>
      <ToggleGroup 
        type="single" 
        value={mode} 
        onValueChange={(value) => {
          if (value) setMode(value as "light" | "dark" | "system");
        }}
        className={`${getGlassClass()} border ${getRoundingClass()} p-1`}
      >
        <ToggleGroupItem 
          value="light" 
          aria-label="Light mode"
          className={`relative ${getRoundingClass()} data-[state=on]:text-yellow-500`}
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
          <Sun className="h-4 w-4" />
        </ToggleGroupItem>
        
        <ToggleGroupItem 
          value="dark" 
          aria-label="Dark mode"
          className={`relative ${getRoundingClass()} data-[state=on]:text-purple-400`}
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
          <Moon className="h-4 w-4" />
        </ToggleGroupItem>
        
        <ToggleGroupItem 
          value="system" 
          aria-label="System preference"
          className={`relative ${getRoundingClass()} data-[state=on]:text-blue-400`}
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
          <Monitor className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ThemeSwitcher;
