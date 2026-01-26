import React from "react";
import {
  Server,
  Zap,
  Globe,
  Shield,
  Clock,
  Activity,
  Database,
  Wifi,
  RefreshCw,
  BarChart3,
  Layers,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoChains = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Chains"
      tagline="Multi-chain RPC infrastructure for every network"
      description="Access 100+ blockchain networks through a unified API. High-availability managed nodes with archive data access, WebSocket subscriptions, and enterprise-grade reliability. From Ethereum and Solana to Lux ecosystem chains (Hanzo Network, Zoo Network, Pars Network), EVM L2s, and Cosmos chains."
      icon={Server}
      accentColor="#3b82f6"
      features={[
        {
          icon: Globe,
          title: "100+ Chains Supported",
          description: "Full Lux ecosystem (P/C/A/B/Z/T/K/Q/D chains), EVM L2s, Solana, Cosmos, and more.",
        },
        {
          icon: Database,
          title: "Archive Node Access",
          description: "Query historical blockchain state from genesis. Full archive data included.",
        },
        {
          icon: Wifi,
          title: "WebSocket Streams",
          description: "Real-time subscriptions for blocks, transactions, and contract events.",
        },
        {
          icon: Zap,
          title: "Ultra-Low Latency",
          description: "Global edge distribution with sub-50ms response times worldwide.",
        },
        {
          icon: Shield,
          title: "99.9% Uptime SLA",
          description: "Enterprise reliability with automatic failover across regions.",
        },
        {
          icon: Activity,
          title: "Rate Limiting Built-in",
          description: "Intelligent rate limiting, request queuing, and load balancing.",
        },
        {
          icon: RefreshCw,
          title: "Auto-Scaling",
          description: "Handles traffic spikes automatically without configuration.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Monitor usage, latency metrics, and error rates in real-time.",
        },
        {
          icon: Layers,
          title: "L2 & Rollup Support",
          description: "Native support for Arbitrum, Optimism, Base, zkSync, and more.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Applications",
          description: "Build DEXs, lending protocols, and yield aggregators with reliable chain data.",
        },
        {
          title: "NFT Marketplaces",
          description: "Power NFT minting, trading, and metadata with fast node infrastructure.",
        },
        {
          title: "Multi-chain Wallets",
          description: "Fetch balances and broadcast transactions across 100+ chains.",
        },
        {
          title: "Analytics Platforms",
          description: "Query historical data for portfolio tracking and market intelligence.",
        },
      ]}
      chains={[
        // L1s
        "Ethereum", "Solana", "Bitcoin", "Avalanche", "BNB Chain", "Cosmos",
        // L2s & Rollups
        "Arbitrum", "Optimism", "Base", "Polygon", "zkSync", "Scroll", "Linea", "Blast", "Mode", "Mantle",
        // Lux Ecosystem - Full Chain Support
        "Lux P-Chain", "Lux C-Chain", "Lux A-Chain", "Lux B-Chain", "Lux Z-Chain",
        "Lux T-Chain", "Lux K-Chain", "Lux Q-Chain", "Lux D-Chain (DEX)",
        "Hanzo Network", "Zoo Network", "Pars Network", "Lux Bridge",
        // Other Networks
        "Aptos", "Sui", "Sei", "Berachain", "Monad", "Celestia", "Near",
      ]}
      codeExample={{
        filename: "chains.ts",
        code: `import { HanzoChains } from "@hanzo/blockchain";

const chains = new HanzoChains({
  apiKey: process.env.HANZO_API_KEY,
});

// Get the latest block from Ethereum
const block = await chains.eth.getBlockNumber();

// Subscribe to new blocks on Lux C-Chain
chains.lux.cchain.subscribe("newHeads", (block) => {
  console.log("New block:", block.number);
});

// Multi-chain balance check across Lux ecosystem
const balances = await chains.multiCall([
  { chain: "ethereum", method: "eth_getBalance", params: [address] },
  { chain: "lux-cchain", method: "eth_getBalance", params: [address] },
  { chain: "lux-dchain", method: "eth_getBalance", params: [address] },
  { chain: "hanzo-network", method: "eth_getBalance", params: [address] },
  { chain: "zoo-network", method: "eth_getBalance", params: [address] },
]);

// Access Lux P-Chain for staking info
const validators = await chains.lux.pchain.getValidators();`,
      }}
    />
  );
};

export default HanzoChains;
