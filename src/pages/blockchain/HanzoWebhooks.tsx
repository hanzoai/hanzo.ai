import React from "react";
import {
  Bell,
  Zap,
  Shield,
  Globe,
  RefreshCw,
  Database,
  Clock,
  Settings,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoWebhooks = () => {
  return (
    <BlockchainProductLayout
      name="Webhooks"
      tagline="Real-time blockchain event notifications"
      description="Get instant notifications for on-chain events. Subscribe to transfers, contract events, address activity, and more with reliable webhook delivery."
      icon={Bell}
      accentColor="#f97316"
      features={[
        {
          icon: Bell,
          title: "Event Subscriptions",
          description: "Subscribe to transfers, logs, contract events, and more.",
        },
        {
          icon: Zap,
          title: "Instant Delivery",
          description: "Sub-second event detection and webhook dispatch.",
        },
        {
          icon: Shield,
          title: "Signed Payloads",
          description: "HMAC signatures for webhook authenticity verification.",
        },
        {
          icon: RefreshCw,
          title: "Automatic Retries",
          description: "Failed deliveries retry with exponential backoff.",
        },
        {
          icon: Globe,
          title: "Multi-chain",
          description: "Monitor events across all supported networks.",
        },
        {
          icon: Settings,
          title: "Filters & Conditions",
          description: "Fine-grained filtering by address, topic, or value.",
        },
        {
          icon: Database,
          title: "Event History",
          description: "Query and replay past webhook deliveries.",
        },
        {
          icon: Clock,
          title: "Block Confirmations",
          description: "Configure confirmation count for finality.",
        },
        {
          icon: BarChart3,
          title: "Delivery Analytics",
          description: "Monitor success rates and latency metrics.",
        },
      ]}
      useCases={[
        {
          title: "Payment Processing",
          description: "Instant confirmation of crypto deposits and payments.",
        },
        {
          title: "DeFi Monitoring",
          description: "Track liquidations, swaps, and position changes.",
        },
        {
          title: "NFT Notifications",
          description: "Alert users on sales, bids, and transfers.",
        },
        {
          title: "Security Alerts",
          description: "Monitor for suspicious contract interactions.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Scroll", "Linea",
      ]}
      codeExample={{
        filename: "webhooks.ts",
        code: `import { HanzoWebhooks } from "@hanzo/blockchain";

const webhooks = new HanzoWebhooks({
  apiKey: process.env.HANZO_API_KEY,
});

// Create a webhook subscription
const subscription = await webhooks.create({
  url: "https://api.myapp.com/webhook",
  events: ["transfer", "contract_event"],
  chains: ["ethereum", "polygon"],
  filters: {
    address: "0x...",
    minValue: "1000000000000000000", // 1 ETH
  },
  confirmations: 12,
});

// Verify webhook signature
const isValid = webhooks.verifySignature({
  payload: req.body,
  signature: req.headers["x-hanzo-signature"],
  secret: process.env.WEBHOOK_SECRET,
});`,
      }}
    />
  );
};

export default HanzoWebhooks;
