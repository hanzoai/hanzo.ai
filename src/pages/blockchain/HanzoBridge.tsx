import React from "react";
import {
  ArrowLeftRight,
  Shield,
  Zap,
  Globe,
  Lock,
  RefreshCw,
  Activity,
  FileCheck,
  Layers,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoBridge = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Bridge"
      tagline="Cross-chain asset transfers, simplified"
      description="Bridge assets between Lux and major blockchain networks securely. Built-in compliance checks, optimized routes, and enterprise-grade reliability."
      icon={ArrowLeftRight}
      accentColor="#06b6d4"
      features={[
        {
          icon: Globe,
          title: "Multi-Chain Bridging",
          description: "Transfer assets between Lux, Ethereum, Polygon, Avalanche, and more.",
        },
        {
          icon: Zap,
          title: "Fast Finality",
          description: "Optimized routes for fastest possible cross-chain settlement.",
        },
        {
          icon: Shield,
          title: "Compliance Checks",
          description: "Built-in screening for sanctioned addresses and suspicious activity.",
        },
        {
          icon: Lock,
          title: "Secure Messaging",
          description: "Verified cross-chain message passing with cryptographic proofs.",
        },
        {
          icon: RefreshCw,
          title: "Automatic Retries",
          description: "Failed transactions automatically retried with gas optimization.",
        },
        {
          icon: Activity,
          title: "Real-Time Tracking",
          description: "Track bridge transactions across chains in real-time.",
        },
        {
          icon: Layers,
          title: "Protocol Integrations",
          description: "Built on Wormhole, LayerZero, and native bridges for best execution.",
        },
        {
          icon: FileCheck,
          title: "Audit Trail",
          description: "Complete history of all bridge transactions for compliance.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Aggregation",
          description: "Access liquidity across chains. Find the best rates and lowest slippage.",
        },
        {
          title: "Portfolio Rebalancing",
          description: "Move assets between chains for yield optimization and risk management.",
        },
        {
          title: "Cross-Chain DAOs",
          description: "Manage treasury assets across multiple chains from a single interface.",
        },
        {
          title: "Exchange Integration",
          description: "Enable deposits and withdrawals from any supported chain.",
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
      ]}
      codeExample={{
        filename: "bridge.ts",
        code: `import { HanzoBridge } from "@hanzo/blockchain";

const bridge = new HanzoBridge({
  apiKey: process.env.HANZO_API_KEY,
});

// Get a quote for bridging
const quote = await bridge.getQuote({
  fromChain: "ethereum",
  toChain: "lux",
  token: "USDC",
  amount: "1000000000", // 1000 USDC
});

console.log(quote.estimatedTime); // "~2 minutes"
console.log(quote.fees); // { bridge: "0.1%", gas: "~$2" }

// Execute the bridge
const tx = await bridge.transfer({
  quoteId: quote.id,
  recipient: "0x...", // Address on destination chain
  wallet: userWallet,
});

// Track progress
bridge.onStatusChange(tx.id, (status) => {
  console.log(status); // "pending" -> "confirming" -> "completed"
});`,
      }}
    />
  );
};

export default HanzoBridge;
