import React from "react";
import {
  Radio,
  Zap,
  Clock,
  Globe,
  Shield,
  RefreshCw,
  Database,
  Activity,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoWebsockets = () => {
  return (
    <BlockchainProductLayout
      name="Websockets"
      tagline="Live blockchain data streaming"
      description="Real-time bidirectional communication with blockchain networks. Subscribe to blocks, transactions, logs, and pending transactions with persistent WebSocket connections."
      icon={Radio}
      accentColor="#a855f7"
      features={[
        {
          icon: Radio,
          title: "Persistent Connections",
          description: "Long-lived WebSocket connections with automatic reconnection.",
        },
        {
          icon: Zap,
          title: "Real-time Streaming",
          description: "Instant delivery of blocks, transactions, and events.",
        },
        {
          icon: Activity,
          title: "Pending Transactions",
          description: "Subscribe to mempool for pending transaction visibility.",
        },
        {
          icon: Clock,
          title: "Low Latency",
          description: "Sub-100ms latency for time-sensitive applications.",
        },
        {
          icon: Globe,
          title: "Multi-chain Streams",
          description: "Stream from multiple chains on a single connection.",
        },
        {
          icon: Shield,
          title: "Authenticated Sessions",
          description: "Secure connections with API key authentication.",
        },
        {
          icon: RefreshCw,
          title: "Auto-reconnect",
          description: "Automatic reconnection with message replay on disconnect.",
        },
        {
          icon: Database,
          title: "Filtered Subscriptions",
          description: "Subscribe to specific addresses, topics, or event types.",
        },
        {
          icon: BarChart3,
          title: "Connection Metrics",
          description: "Monitor connection health and message throughput.",
        },
      ]}
      useCases={[
        {
          title: "Trading Applications",
          description: "Real-time price feeds and order book updates for DEXs.",
        },
        {
          title: "Mempool Monitoring",
          description: "Track pending transactions for MEV and arbitrage.",
        },
        {
          title: "Live Dashboards",
          description: "Real-time blockchain activity and network stats.",
        },
        {
          title: "Bot Infrastructure",
          description: "High-frequency trading and automated strategies.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Scroll", "Linea",
      ]}
      codeExample={{
        filename: "websockets.ts",
        code: `import { HanzoWebsocket } from "@hanzo/blockchain";

const ws = new HanzoWebsocket({
  apiKey: process.env.HANZO_API_KEY,
});

// Subscribe to new blocks
ws.subscribe("newHeads", { chain: "ethereum" }, (block) => {
  console.log("New block:", block.number);
});

// Subscribe to pending transactions
ws.subscribe("pendingTransactions", { chain: "ethereum" }, (tx) => {
  console.log("Pending:", tx.hash);
});

// Subscribe to contract events
ws.subscribe("logs", {
  chain: "ethereum",
  address: "0x...",
  topics: ["0x..."],
}, (log) => {
  console.log("Event:", log);
});`,
      }}
    />
  );
};

export default HanzoWebsockets;
