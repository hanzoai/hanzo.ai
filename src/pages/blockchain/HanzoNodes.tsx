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
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoNodes = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Nodes"
      tagline="Managed RPC endpoints for every chain"
      description="Access blockchain data without running your own infrastructure. High-availability nodes for Lux, Ethereum, Polygon, Avalanche, Solana, and more—with realtime subscriptions and historical queries."
      icon={Server}
      accentColor="#3b82f6"
      features={[
        {
          icon: Globe,
          title: "Multi-Chain Support",
          description: "RPC endpoints for Lux, EVM chains, Solana, Cosmos, and more. One API for all networks.",
        },
        {
          icon: Database,
          title: "Archive Nodes",
          description: "Access historical blockchain state and data from genesis. Full archive node access included.",
        },
        {
          icon: Wifi,
          title: "WebSocket Subscriptions",
          description: "Real-time event subscriptions for new blocks, transactions, and contract events.",
        },
        {
          icon: Zap,
          title: "Ultra-Low Latency",
          description: "Global edge distribution ensures sub-50ms response times from anywhere in the world.",
        },
        {
          icon: Shield,
          title: "99.9% Uptime SLA",
          description: "Enterprise-grade reliability with automatic failover and redundancy across regions.",
        },
        {
          icon: Activity,
          title: "Rate Limiting & Load Balancing",
          description: "Built-in rate limiting, request queuing, and intelligent load balancing.",
        },
        {
          icon: RefreshCw,
          title: "Auto-Scaling",
          description: "Automatically scales to handle traffic spikes without configuration.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Monitor RPC usage, latency metrics, and error rates in real-time.",
        },
        {
          icon: Clock,
          title: "Rollup Support",
          description: "Native support for L2s including Arbitrum, Optimism, Base, zkSync, and more.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Applications",
          description: "Build decentralized exchanges, lending protocols, and yield aggregators with reliable blockchain data access.",
        },
        {
          title: "NFT Marketplaces",
          description: "Power NFT minting, trading, and metadata retrieval with fast, reliable node infrastructure.",
        },
        {
          title: "Wallet Applications",
          description: "Fetch balances, transaction history, and broadcast transactions for multi-chain wallets.",
        },
        {
          title: "Analytics Platforms",
          description: "Query historical data for blockchain analytics, portfolio tracking, and market intelligence.",
        },
      ]}
      chains={[
        "Lux",
        "Ethereum",
        "Polygon",
        "Arbitrum",
        "Optimism",
        "Base",
        "Avalanche",
        "BNB Chain",
        "Solana",
        "Cosmos",
        "zkSync",
        "Scroll",
      ]}
      codeExample={{
        filename: "example.ts",
        code: `import { HanzoNodes } from "@hanzo/blockchain";

const nodes = new HanzoNodes({
  apiKey: process.env.HANZO_API_KEY,
});

// Get the latest block from Ethereum
const block = await nodes.eth.getBlockNumber();

// Subscribe to new blocks on Lux
const subscription = nodes.lux.subscribe("newHeads", (block) => {
  console.log("New block:", block.number);
});

// Call a contract method
const balance = await nodes.eth.call({
  to: "0x...",
  data: "0x70a08231000000000000000000000000...",
});`,
      }}
    />
  );
};

export default HanzoNodes;
