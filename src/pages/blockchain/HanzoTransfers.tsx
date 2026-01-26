import React from "react";
import {
  ArrowLeftRight,
  Clock,
  Search,
  Database,
  Globe,
  Bell,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoTransfers = () => {
  return (
    <BlockchainProductLayout
      name="Transfers API"
      tagline="Track token & NFT transfers in real-time"
      description="Monitor and query all token transfers across chains. Get transfer history, pending transactions, and real-time notifications for any address or contract."
      icon={ArrowLeftRight}
      accentColor="#06b6d4"
      features={[
        {
          icon: ArrowLeftRight,
          title: "All Transfer Types",
          description: "Native tokens, ERC-20, ERC-721, and ERC-1155 transfers.",
        },
        {
          icon: Clock,
          title: "Historical Data",
          description: "Query transfer history from genesis to present.",
        },
        {
          icon: Bell,
          title: "Real-time Alerts",
          description: "Webhooks for instant transfer notifications.",
        },
        {
          icon: Search,
          title: "Advanced Filtering",
          description: "Filter by token, address, amount, or time range.",
        },
        {
          icon: Database,
          title: "Decoded Data",
          description: "Human-readable transfer details with token metadata.",
        },
        {
          icon: Globe,
          title: "Multi-chain",
          description: "Unified API for transfers across 100+ chains.",
        },
        {
          icon: Zap,
          title: "Low Latency",
          description: "Sub-second transfer detection and notification.",
        },
        {
          icon: Shield,
          title: "Internal Transfers",
          description: "Track internal transactions and contract interactions.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          description: "Aggregate transfer volume and flow analytics.",
        },
      ]}
      useCases={[
        {
          title: "Transaction Monitoring",
          description: "Track deposits, withdrawals, and suspicious activity.",
        },
        {
          title: "Portfolio Updates",
          description: "Real-time balance updates as transfers happen.",
        },
        {
          title: "Compliance Tools",
          description: "AML monitoring and transaction screening.",
        },
        {
          title: "Notification Services",
          description: "Alert users on incoming transfers and NFT activity.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Scroll", "Linea",
      ]}
      codeExample={{
        filename: "transfers.ts",
        code: `import { HanzoTransfers } from "@hanzo/blockchain";

const transfers = new HanzoTransfers({
  apiKey: process.env.HANZO_API_KEY,
});

// Get transfer history for an address
const history = await transfers.getHistory({
  address: "0x...",
  chains: ["ethereum", "polygon"],
  type: ["native", "erc20"],
  limit: 100,
});

// Subscribe to real-time transfers
transfers.subscribe({
  address: "0x...",
  chains: ["ethereum"],
  onTransfer: (transfer) => {
    console.log(\`\${transfer.from} -> \${transfer.to}: \${transfer.value}\`);
  },
});

// Get pending transfers
const pending = await transfers.getPending({
  address: "0x...",
  chain: "ethereum",
});`,
      }}
    />
  );
};

export default HanzoTransfers;
