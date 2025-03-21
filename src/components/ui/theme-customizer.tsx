
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Check, Moon, Sun, Monitor } from "lucide-react";
import ThemeSwitcher from "./theme-switcher";

interface ThemeOptionProps<T> {
  value: T;
  currentValue: T;
  label: string;
  onChange: (value: T) => void;
}

function ThemeOption<T>({ value, currentValue, label, onChange }: ThemeOptionProps<T>) {
  const isActive = value === currentValue;
  const { isDarkMode, getRoundingClass } = useTheme();
  
  return (
    <Toggle
      pressed={isActive}
      onPressedChange={() => onChange(value)}
      className={`flex flex-col items-center justify-center p-2 ${getRoundingClass()} ${
        isActive 
          ? isDarkMode ? "bg-purple-900/30 border-purple-500/50" : "bg-purple-500/20 border-purple-500/50" 
          : isDarkMode ? "bg-gray-800/40 hover:bg-gray-800/60" : "bg-gray-200/40 hover:bg-gray-200/60"
      }`}
      aria-label={label}
    >
      <span className="text-xs">{label}</span>
      {isActive && <Check className={`h-3 w-3 mt-1 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} />}
    </Toggle>
  );
}

const ThemeCustomizer: React.FC = () => {
  const { 
    mode, setMode,
    rounding, setRounding,
    spacing, setSpacing,
    fontFamily, setFontFamily,
    glassOpacity, setGlassOpacity,
    typographySize, setTypographySize,
    typographySpacing, setTypographySpacing,
    typographyWeight, setTypographyWeight,
    isDarkMode, getRoundingClass, getGlassClass
  } = useTheme();

  return (
    <div className={`space-y-6 p-4 ${getGlassClass()} ${getRoundingClass()} ${isDarkMode ? "text-white" : "text-gray-800"}`}>
      <div>
        <h3 className="text-sm font-medium mb-3">Theme</h3>
        <ThemeSwitcher />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-3">Corners</h3>
        <div className="grid grid-cols-4 gap-2">
          <ThemeOption value="sharp" currentValue={rounding} onChange={setRounding} label="Sharp" />
          <ThemeOption value="medium" currentValue={rounding} onChange={setRounding} label="Medium" />
          <ThemeOption value="rounded" currentValue={rounding} onChange={setRounding} label="Rounded" />
          <ThemeOption value="pill" currentValue={rounding} onChange={setRounding} label="Pill" />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Spacing</h3>
        <div className="grid grid-cols-3 gap-2">
          <ThemeOption value="compact" currentValue={spacing} onChange={setSpacing} label="Compact" />
          <ThemeOption value="comfortable" currentValue={spacing} onChange={setSpacing} label="Comfortable" />
          <ThemeOption value="spacious" currentValue={spacing} onChange={setSpacing} label="Spacious" />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Font</h3>
        <div className="grid grid-cols-4 gap-2">
          <ThemeOption value="system" currentValue={fontFamily} onChange={setFontFamily} label="System" />
          <ThemeOption value="monospace" currentValue={fontFamily} onChange={setFontFamily} label="Mono" />
          <ThemeOption value="serif" currentValue={fontFamily} onChange={setFontFamily} label="Serif" />
          <ThemeOption value="sans" currentValue={fontFamily} onChange={setFontFamily} label="Sans" />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Glass Effect</h3>
        <div className="grid grid-cols-3 gap-2">
          <ThemeOption value="subtle" currentValue={glassOpacity} onChange={setGlassOpacity} label="Subtle" />
          <ThemeOption value="medium" currentValue={glassOpacity} onChange={setGlassOpacity} label="Medium" />
          <ThemeOption value="heavy" currentValue={glassOpacity} onChange={setGlassOpacity} label="Heavy" />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Text Size</h3>
        <div className="grid grid-cols-3 gap-2">
          <ThemeOption value="small" currentValue={typographySize} onChange={setTypographySize} label="Small" />
          <ThemeOption value="medium" currentValue={typographySize} onChange={setTypographySize} label="Medium" />
          <ThemeOption value="large" currentValue={typographySize} onChange={setTypographySize} label="Large" />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Letter Spacing</h3>
        <div className="grid grid-cols-3 gap-2">
          <ThemeOption value="tight" currentValue={typographySpacing} onChange={setTypographySpacing} label="Tight" />
          <ThemeOption value="normal" currentValue={typographySpacing} onChange={setTypographySpacing} label="Normal" />
          <ThemeOption value="wide" currentValue={typographySpacing} onChange={setTypographySpacing} label="Wide" />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Font Weight</h3>
        <div className="grid grid-cols-3 gap-2">
          <ThemeOption value="light" currentValue={typographyWeight} onChange={setTypographyWeight} label="Light" />
          <ThemeOption value="regular" currentValue={typographyWeight} onChange={setTypographyWeight} label="Regular" />
          <ThemeOption value="heavy" currentValue={typographyWeight} onChange={setTypographyWeight} label="Heavy" />
        </div>
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        className={`w-full mt-4 ${getRoundingClass()} ${
          isDarkMode 
            ? "bg-gray-800/50 hover:bg-gray-700/50 border-gray-700" 
            : "bg-gray-200/50 hover:bg-gray-300/50 border-gray-300"
        }`}
        onClick={() => {
          setRounding('rounded');
          setSpacing('comfortable');
          setFontFamily('system');
          setGlassOpacity('medium');
          setTypographySize('medium');
          setTypographySpacing('normal');
          setTypographyWeight('regular');
          setMode('dark');
        }}
      >
        Reset to Defaults
      </Button>
    </div>
  );
};

export default ThemeCustomizer;
