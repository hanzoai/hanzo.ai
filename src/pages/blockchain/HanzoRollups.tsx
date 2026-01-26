import React from "react";
import {
  Layers,
  Zap,
  Shield,
  Globe,
  ArrowUpDown,
  RefreshCw,
  Database,
  Lock,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoRollups = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Rollups"
      tagline="L2 scaling infrastructure & rollup services"
      description="Deploy and manage rollup infrastructure. From optimistic to ZK rollups, we handle sequencers, provers, and data availability so you can focus on your application."
      icon={Layers}
      accentColor="#fd4444"
      features={[
        {
          icon: Layers,
          title: "Rollup-as-a-Service",
          description: "Deploy your own L2 or L3 rollup with managed infrastructure.",
        },
        {
          icon: Zap,
          title: "High Throughput",
          description: "Process thousands of transactions per second with low fees.",
        },
        {
          icon: Shield,
          title: "Security Inheritance",
          description: "Inherit Ethereum's security while scaling your application.",
        },
        {
          icon: ArrowUpDown,
          title: "Native Bridging",
          description: "Built-in bridges for seamless L1 ↔ L2 asset transfers.",
        },
        {
          icon: Database,
          title: "Data Availability",
          description: "Multiple DA options: Ethereum, Celestia, EigenDA, or custom.",
        },
        {
          icon: RefreshCw,
          title: "Sequencer Management",
          description: "Managed sequencer infrastructure with decentralization options.",
        },
        {
          icon: Lock,
          title: "Fraud & Validity Proofs",
          description: "Support for both optimistic and ZK proving systems.",
        },
        {
          icon: Globe,
          title: "Interoperability",
          description: "Connect to the broader L2 ecosystem and cross-chain protocols.",
        },
        {
          icon: BarChart3,
          title: "Analytics & Monitoring",
          description: "Real-time metrics for rollup performance and health.",
        },
      ]}
      useCases={[
        {
          title: "Gaming & Social",
          description: "High-frequency, low-cost transactions for gaming economies and social apps.",
        },
        {
          title: "DeFi Scaling",
          description: "Scale DeFi protocols with lower gas costs while maintaining security.",
        },
        {
          title: "Enterprise Chains",
          description: "Private or permissioned rollups with custom governance.",
        },
        {
          title: "App-Specific Chains",
          description: "Dedicated throughput and customization for your application.",
        },
      ]}
      chains={[
        "Arbitrum", "Optimism", "Base", "zkSync Era", "Scroll",
        "Linea", "Polygon zkEVM", "Starknet", "Blast", "Mode",
      ]}
      codeExample={{
        filename: "rollups.ts",
        code: `import { HanzoRollups } from "@hanzo/blockchain";

const rollups = new HanzoRollups({
  apiKey: process.env.HANZO_API_KEY,
});

// Deploy a new app-specific rollup
const rollup = await rollups.deploy({
  name: "my-app-chain",
  type: "optimistic", // or "zk"
  dataAvailability: "ethereum",
  gasToken: "ETH",
});

// Monitor rollup status
const status = await rollup.getStatus();
console.log("TPS:", status.transactionsPerSecond);
console.log("Finality:", status.averageFinalityTime);`,
      }}
    />
  );
};

export default HanzoRollups;
