
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeRounding = 'sharp' | 'medium' | 'rounded' | 'pill';
type ThemeSpacing = 'compact' | 'comfortable' | 'spacious';
type ThemeFontFamily = 'system' | 'monospace' | 'serif' | 'sans';
type ThemeGlassOpacity = 'subtle' | 'medium' | 'heavy';
type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  mode: ThemeMode;
  rounding: ThemeRounding;
  spacing: ThemeSpacing;
  fontFamily: ThemeFontFamily;
  glassOpacity: ThemeGlassOpacity;
  setMode: (mode: ThemeMode) => void;
  setRounding: (rounding: ThemeRounding) => void;
  setSpacing: (spacing: ThemeSpacing) => void;
  setFontFamily: (fontFamily: ThemeFontFamily) => void;
  setGlassOpacity: (opacity: ThemeGlassOpacity) => void;
  applyThemeClasses: (baseClasses: string) => string;
  getRoundingClass: () => string;
  getSpacingClass: () => string;
  getFontClass: () => string;
  getGlassClass: () => string;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('dark');
  const [systemIsDark, setSystemIsDark] = useState<boolean>(true);
  const [rounding, setRounding] = useState<ThemeRounding>('rounded');
  const [spacing, setSpacing] = useState<ThemeSpacing>('comfortable');
  const [fontFamily, setFontFamily] = useState<ThemeFontFamily>('system');
  const [glassOpacity, setGlassOpacity] = useState<ThemeGlassOpacity>('medium');
  
  // Detect system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemIsDark(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  // Compute if dark mode should be active
  const isDarkMode = mode === 'system' ? systemIsDark : mode === 'dark';

  useEffect(() => {
    // Apply theme to document root for global access
    document.documentElement.dataset.rounding = rounding;
    document.documentElement.dataset.spacing = spacing;
    document.documentElement.dataset.font = fontFamily;
    document.documentElement.dataset.glass = glassOpacity;
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
  }, [rounding, spacing, fontFamily, glassOpacity, isDarkMode]);

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
    const baseClasses = isDarkMode ? 'backdrop-blur' : 'backdrop-blur bg-white/75 border-white/20';
    
    switch (glassOpacity) {
      case 'subtle': 
        return isDarkMode 
          ? 'bg-white/5 backdrop-blur-sm border-white/10' 
          : 'bg-white/60 backdrop-blur-sm border-black/5';
      case 'medium': 
        return isDarkMode 
          ? 'bg-white/10 backdrop-blur-md border-white/20' 
          : 'bg-white/70 backdrop-blur-md border-black/10';
      case 'heavy': 
        return isDarkMode 
          ? 'bg-white/20 backdrop-blur-lg border-white/30' 
          : 'bg-white/80 backdrop-blur-lg border-black/15';
      default: 
        return isDarkMode 
          ? 'bg-white/10 backdrop-blur-md border-white/20' 
          : 'bg-white/70 backdrop-blur-md border-black/10';
    }
  };

  const applyThemeClasses = (baseClasses: string): string => {
    return `${baseClasses} ${getRoundingClass()} ${getSpacingClass()} ${getFontClass()}`;
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        rounding,
        spacing,
        fontFamily,
        glassOpacity,
        setMode,
        setRounding,
        setSpacing,
        setFontFamily,
        setGlassOpacity,
        applyThemeClasses,
        getRoundingClass,
        getSpacingClass,
        getFontClass,
        getGlassClass,
        isDarkMode
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
