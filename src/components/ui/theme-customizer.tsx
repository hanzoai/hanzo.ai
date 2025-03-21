
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Check } from "lucide-react";

interface ThemeOptionProps<T> {
  value: T;
  currentValue: T;
  label: string;
  onChange: (value: T) => void;
}

function ThemeOption<T>({ value, currentValue, label, onChange }: ThemeOptionProps<T>) {
  const isActive = value === currentValue;
  
  return (
    <Toggle
      pressed={isActive}
      onPressedChange={() => onChange(value)}
      className={`flex flex-col items-center justify-center p-2 ${
        isActive 
          ? "bg-purple-900/30 border-purple-500/50" 
          : "bg-gray-800/40 hover:bg-gray-800/60"
      }`}
      aria-label={label}
    >
      <span className="text-xs">{label}</span>
      {isActive && <Check className="h-3 w-3 mt-1 text-purple-400" />}
    </Toggle>
  );
}

const ThemeCustomizer: React.FC = () => {
  const { 
    rounding, setRounding,
    spacing, setSpacing,
    fontFamily, setFontFamily,
    glassOpacity, setGlassOpacity
  } = useTheme();

  return (
    <div className="space-y-6 p-4 bg-gray-900/30 border border-gray-800 rounded-xl">
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
      
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full mt-4"
        onClick={() => {
          setRounding('rounded');
          setSpacing('comfortable');
          setFontFamily('system');
          setGlassOpacity('medium');
        }}
      >
        Reset to Defaults
      </Button>
    </div>
  );
};

export default ThemeCustomizer;
