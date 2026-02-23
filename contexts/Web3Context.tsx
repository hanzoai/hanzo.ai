'use client'

import React, { createContext, useContext, ReactNode } from 'react'

interface Web3ContextType {
  isConnected: boolean
  address: string | null
}

const Web3Context = createContext<Web3ContextType>({
  isConnected: false,
  address: null,
})

export const useWeb3 = () => useContext(Web3Context)

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <Web3Context.Provider value={{ isConnected: false, address: null }}>
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Context
