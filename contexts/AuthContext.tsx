'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface IAMUser {
  id: string
  email: string
  name?: string
  avatar?: string
}

interface AuthContextType {
  user: IAMUser | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  signup: (email: string, password: string, name?: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  signup: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IAMUser | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const login = useCallback(async (email: string, password: string) => {
    // Redirect to hanzo.id for authentication
    window.location.href = 'https://hanzo.id'
  }, [])

  const logout = useCallback(() => {
    setUser(null)
  }, [])

  const signup = useCallback(async (email: string, password: string, name?: string) => {
    window.location.href = 'https://hanzo.id'
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
