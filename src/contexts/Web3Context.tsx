/**
 * Web3Context - RainbowKit + Wagmi Provider
 *
 * Provides Web3 wallet connectivity for:
 * - MetaMask, WalletConnect, Coinbase Wallet, etc.
 * - Multiple chains (Ethereum, Polygon, Arbitrum, etc.)
 * - Lux Network support
 */

import React, { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import {
  mainnet,
  polygon,
  arbitrum,
  optimism,
  base,
  avalanche,
  bsc,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RainbowKitProvider,
  getDefaultConfig,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

// Create query client for TanStack Query
const queryClient = new QueryClient();

// Custom Lux Network chain definition
const luxNetwork = {
  id: 96369,
  name: 'Lux Network',
  nativeCurrency: {
    decimals: 18,
    name: 'LUX',
    symbol: 'LUX',
  },
  rpcUrls: {
    default: {
      http: ['https://api.lux.network/rpc'],
    },
    public: {
      http: ['https://api.lux.network/rpc'],
    },
  },
  blockExplorers: {
    default: { name: 'Lux Explorer', url: 'https://explorer.lux.network' },
  },
  testnet: false,
} as const;

// Custom Lux Testnet chain definition
const luxTestnet = {
  id: 96370,
  name: 'Lux Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'LUX',
    symbol: 'LUX',
  },
  rpcUrls: {
    default: {
      http: ['https://api.testnet.lux.network/rpc'],
    },
    public: {
      http: ['https://api.testnet.lux.network/rpc'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Lux Testnet Explorer',
      url: 'https://explorer.testnet.lux.network',
    },
  },
  testnet: true,
} as const;

// Configure wagmi with RainbowKit
const config = getDefaultConfig({
  appName: 'Hanzo',
  projectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo',
  chains: [
    mainnet,
    polygon,
    arbitrum,
    optimism,
    base,
    avalanche,
    bsc,
    luxNetwork,
    ...(import.meta.env.DEV ? [luxTestnet] : []),
  ],
  transports: {
    [mainnet.id]: http(
      import.meta.env.VITE_RPC_MAINNET || 'https://eth.llamarpc.com'
    ),
    [polygon.id]: http(
      import.meta.env.VITE_RPC_POLYGON || 'https://polygon.llamarpc.com'
    ),
    [arbitrum.id]: http(
      import.meta.env.VITE_RPC_ARBITRUM || 'https://arbitrum.llamarpc.com'
    ),
    [optimism.id]: http(
      import.meta.env.VITE_RPC_OPTIMISM || 'https://optimism.llamarpc.com'
    ),
    [base.id]: http(
      import.meta.env.VITE_RPC_BASE || 'https://base.llamarpc.com'
    ),
    [avalanche.id]: http(
      import.meta.env.VITE_RPC_AVALANCHE || 'https://avalanche.llamarpc.com'
    ),
    [bsc.id]: http(
      import.meta.env.VITE_RPC_BSC || 'https://bsc.llamarpc.com'
    ),
    [luxNetwork.id]: http('https://api.lux.network/rpc'),
    ...(import.meta.env.DEV
      ? { [luxTestnet.id]: http('https://api.testnet.lux.network/rpc') }
      : {}),
  },
  ssr: false,
});

// RainbowKit theme customization (Hanzo brand colors)
const hanzoTheme = darkTheme({
  accentColor: '#fd4444', // Hanzo brand red
  accentColorForeground: 'white',
  borderRadius: 'medium',
  fontStack: 'system',
  overlayBlur: 'small',
});

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={hanzoTheme}
          modalSize="compact"
          appInfo={{
            appName: 'Hanzo',
            learnMoreUrl: 'https://hanzo.ai/docs/web3',
          }}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

// Re-export useful hooks
export { useAccount, useBalance, useDisconnect, useSignMessage } from 'wagmi';
export {
  useConnectModal,
  useAccountModal,
  useChainModal,
  ConnectButton,
} from '@rainbow-me/rainbowkit';
