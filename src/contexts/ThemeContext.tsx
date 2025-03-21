
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeRounding = 'sharp' | 'medium' | 'rounded' | 'pill';
type ThemeSpacing = 'compact' | 'comfortable' | 'spacious';
type ThemeFontFamily = 'system' | 'monospace' | 'serif' | 'sans';
type ThemeGlassOpacity = 'subtle' | 'medium' | 'heavy';

interface ThemeContextType {
  rounding: ThemeRounding;
  spacing: ThemeSpacing;
  fontFamily: ThemeFontFamily;
  glassOpacity: ThemeGlassOpacity;
  setRounding: (rounding: ThemeRounding) => void;
  setSpacing: (spacing: ThemeSpacing) => void;
  setFontFamily: (fontFamily: ThemeFontFamily) => void;
  setGlassOpacity: (opacity: ThemeGlassOpacity) => void;
  applyThemeClasses: (baseClasses: string) => string;
  getRoundingClass: () => string;
  getSpacingClass: () => string;
  getFontClass: () => string;
  getGlassClass: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [rounding, setRounding] = useState<ThemeRounding>('rounded');
  const [spacing, setSpacing] = useState<ThemeSpacing>('comfortable');
  const [fontFamily, setFontFamily] = useState<ThemeFontFamily>('system');
  const [glassOpacity, setGlassOpacity] = useState<ThemeGlassOpacity>('medium');

  useEffect(() => {
    // Apply theme to document root for global access
    document.documentElement.dataset.rounding = rounding;
    document.documentElement.dataset.spacing = spacing;
    document.documentElement.dataset.font = fontFamily;
    document.documentElement.dataset.glass = glassOpacity;
  }, [rounding, spacing, fontFamily, glassOpacity]);

  const getRoundingClass = (): string => {
    switch (rounding) {
      case 'sharp': return 'rounded-none';
      case 'medium': return 'rounded-md';
      case 'rounded': return 'rounded-xl';
      case 'pill': return 'rounded-full';
      default: return 'rounded-xl';
    }
  };

  const getSpacingClass = (): string => {
    switch (spacing) {
      case 'compact': return 'p-2 gap-2';
      case 'comfortable': return 'p-4 gap-4';
      case 'spacious': return 'p-6 gap-6';
      default: return 'p-4 gap-4';
    }
  };

  const getFontClass = (): string => {
    switch (fontFamily) {
      case 'system': return 'font-sans';
      case 'monospace': return 'font-mono';
      case 'serif': return 'font-serif';
      case 'sans': return 'font-sans';
      default: return 'font-sans';
    }
  };

  const getGlassClass = (): string => {
    switch (glassOpacity) {
      case 'subtle': return 'bg-white/5 backdrop-blur-sm border-white/10';
      case 'medium': return 'bg-white/10 backdrop-blur-md border-white/20';
      case 'heavy': return 'bg-white/20 backdrop-blur-lg border-white/30';
      default: return 'bg-white/10 backdrop-blur-md border-white/20';
    }
  };

  const applyThemeClasses = (baseClasses: string): string => {
    return `${baseClasses} ${getRoundingClass()} ${getSpacingClass()} ${getFontClass()}`;
  };

  return (
    <ThemeContext.Provider
      value={{
        rounding,
        spacing,
        fontFamily,
        glassOpacity,
        setRounding,
        setSpacing,
        setFontFamily,
        setGlassOpacity,
        applyThemeClasses,
        getRoundingClass,
        getSpacingClass,
        getFontClass,
        getGlassClass
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
