import React from "react";
import {
  Coins,
  Search,
  BarChart3,
  Clock,
  Globe,
  Shield,
  Zap,
  RefreshCw,
  Database,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoTokens = () => {
  return (
    <BlockchainProductLayout
      name="Token API"
      tagline="ERC-20 token data, balances & prices"
      description="Comprehensive token data API for all EVM chains. Get real-time balances, historical prices, token metadata, and ownership across 100+ networks with a single API call."
      icon={Coins}
      accentColor="#22c55e"
      features={[
        {
          icon: Coins,
          title: "Multi-chain Balances",
          description: "Query token balances across all EVM chains in one request.",
        },
        {
          icon: BarChart3,
          title: "Real-time Prices",
          description: "Live token prices from multiple DEXs and aggregators.",
        },
        {
          icon: Database,
          title: "Token Metadata",
          description: "Name, symbol, decimals, logos, and contract info.",
        },
        {
          icon: Clock,
          title: "Historical Data",
          description: "Price history, balance snapshots, and transfer history.",
        },
        {
          icon: Search,
          title: "Token Discovery",
          description: "Search and discover tokens by name, symbol, or address.",
        },
        {
          icon: Shield,
          title: "Spam Detection",
          description: "Automatic filtering of spam tokens and scam contracts.",
        },
        {
          icon: Zap,
          title: "Fast Response",
          description: "Sub-100ms response times with global CDN caching.",
        },
        {
          icon: Globe,
          title: "100+ Chains",
          description: "Support for Ethereum, Polygon, Arbitrum, Base, and more.",
        },
        {
          icon: RefreshCw,
          title: "Webhook Updates",
          description: "Get notified on balance changes and transfers.",
        },
      ]}
      useCases={[
        {
          title: "Portfolio Trackers",
          description: "Build multi-chain portfolio apps with real-time valuations.",
        },
        {
          title: "Wallet Applications",
          description: "Display token balances and transaction history.",
        },
        {
          title: "DeFi Dashboards",
          description: "Track positions, yields, and token performance.",
        },
        {
          title: "Trading Bots",
          description: "Real-time price feeds for automated trading strategies.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "Fantom", "zkSync", "Linea",
      ]}
      codeExample={{
        filename: "tokens.ts",
        code: `import { HanzoTokens } from "@hanzo/blockchain";

const tokens = new HanzoTokens({
  apiKey: process.env.HANZO_API_KEY,
});

// Get all token balances for an address
const balances = await tokens.getBalances({
  address: "0x...",
  chains: ["ethereum", "polygon", "arbitrum"],
  includeSpam: false,
});

// Get token price with history
const price = await tokens.getPrice({
  token: "0x...",
  chain: "ethereum",
  currency: "USD",
  history: "24h",
});

// Search for tokens
const results = await tokens.search({
  query: "USDC",
  chains: ["ethereum", "polygon"],
});`,
      }}
    />
  );
};

export default HanzoTokens;
