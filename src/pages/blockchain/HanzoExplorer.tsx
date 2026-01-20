import React from "react";
import {
  Search,
  BarChart3,
  Blocks,
  FileCode,
  Eye,
  Globe,
  Bell,
  Download,
  Zap,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoExplorer = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Explorer"
      tagline="Unified blockchain explorer and analytics"
      description="A comprehensive explorer for Lux and integrated chains. Search transactions, decode contract interactions, and analyze on-chain data with powerful analytics tools."
      icon={Search}
      accentColor="#6366f1"
      features={[
        {
          icon: Globe,
          title: "Multi-Chain Support",
          description: "Explore Lux, Ethereum, Polygon, and all integrated chains from one interface.",
        },
        {
          icon: Blocks,
          title: "Block & Transaction Search",
          description: "Search by address, transaction hash, block number, or ENS name.",
        },
        {
          icon: FileCode,
          title: "Contract Verification",
          description: "Verify and publish contract source code. Read and write to contracts.",
        },
        {
          icon: Eye,
          title: "Transaction Decoding",
          description: "Automatic ABI decoding shows human-readable transaction details.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Network stats, gas trends, token metrics, and protocol analytics.",
        },
        {
          icon: Bell,
          title: "Alerts & Notifications",
          description: "Set up alerts for address activity, large transfers, and contract events.",
        },
        {
          icon: Download,
          title: "Data Export",
          description: "Export transaction history, token transfers, and analytics to CSV.",
        },
        {
          icon: Zap,
          title: "API Access",
          description: "Full API access to all explorer data for integration.",
        },
      ]}
      useCases={[
        {
          title: "Developer Debugging",
          description: "Debug failed transactions, trace contract calls, and verify deployments.",
        },
        {
          title: "User Transparency",
          description: "Let users verify their transactions and understand contract interactions.",
        },
        {
          title: "Compliance Reporting",
          description: "Export transaction history for tax reporting and audit requirements.",
        },
        {
          title: "Protocol Monitoring",
          description: "Track protocol metrics, TVL, and user activity across chains.",
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
      ]}
      codeExample={{
        filename: "explorer-api.ts",
        code: `import { HanzoExplorer } from "@hanzo/blockchain";

const explorer = new HanzoExplorer({
  apiKey: process.env.HANZO_API_KEY,
});

// Get transaction details
const tx = await explorer.getTransaction({
  hash: "0x...",
  chainId: 1,
});

console.log(tx.decoded); // Human-readable method call
console.log(tx.gasUsed);
console.log(tx.status);

// Get address history
const history = await explorer.getAddressHistory({
  address: "0x...",
  chainId: 1,
  page: 1,
  limit: 50,
});

// Search across chains
const results = await explorer.search({
  query: "0x...", // Address, tx hash, or ENS
});

// Set up alerts
await explorer.createAlert({
  address: "0x...",
  event: "transfer",
  threshold: "1000000000000000000", // 1 ETH
  webhook: "https://your-app.com/webhook",
});`,
      }}
    />
  );
};

export default HanzoExplorer;
