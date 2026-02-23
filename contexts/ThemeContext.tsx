'use client'

import React, { createContext, useContext } from 'react'

interface ThemeContextType {
  isDarkMode: boolean
  mode: string
  toggleDarkMode: () => void
  setMode: (mode: string) => void
  getGlassClass: () => string
  getRoundingClass: () => string
  getButtonClass: () => string
}

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  mode: 'dark',
  toggleDarkMode: () => {},
  setMode: () => {},
  getGlassClass: () => 'bg-black/50 backdrop-blur-lg',
  getRoundingClass: () => 'rounded-lg',
  getButtonClass: () => 'rounded-lg',
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={{
      isDarkMode: true,
      mode: 'dark',
      toggleDarkMode: () => {},
      setMode: () => {},
      getGlassClass: () => 'bg-black/50 backdrop-blur-lg',
      getRoundingClass: () => 'rounded-lg',
      getButtonClass: () => 'rounded-lg',
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
