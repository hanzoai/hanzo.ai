import React from "react";
import {
  Zap,
  Shield,
  Globe,
  RefreshCw,
  Clock,
  Database,
  Settings,
  BarChart3,
  Users,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoGas = () => {
  return (
    <BlockchainProductLayout
      name="Gas Manager"
      tagline="Sponsor gas for your users"
      description="Paymaster-as-a-Service for account abstraction. Sponsor gas fees for your users, set spending policies, and create seamless gasless experiences across chains."
      icon={Zap}
      accentColor="#eab308"
      features={[
        {
          icon: Zap,
          title: "Gas Sponsorship",
          description: "Pay gas fees on behalf of your users for frictionless UX.",
        },
        {
          icon: Shield,
          title: "Spending Policies",
          description: "Set limits per user, per operation, or per time period.",
        },
        {
          icon: Users,
          title: "User Whitelisting",
          description: "Control which users can access sponsored transactions.",
        },
        {
          icon: Globe,
          title: "Multi-chain",
          description: "Sponsor gas across Ethereum, Polygon, Arbitrum, and more.",
        },
        {
          icon: Settings,
          title: "Custom Paymasters",
          description: "Deploy custom paymaster logic for advanced use cases.",
        },
        {
          icon: Database,
          title: "ERC-20 Gas Payment",
          description: "Let users pay gas in stablecoins or your app token.",
        },
        {
          icon: Clock,
          title: "Real-time Balance",
          description: "Monitor sponsor balance and usage in real-time.",
        },
        {
          icon: RefreshCw,
          title: "Auto-refill",
          description: "Automatic balance top-up when running low.",
        },
        {
          icon: BarChart3,
          title: "Usage Analytics",
          description: "Track sponsored gas by user, operation, and chain.",
        },
      ]}
      useCases={[
        {
          title: "Onboarding",
          description: "Remove gas friction for new users entering Web3.",
        },
        {
          title: "Gaming",
          description: "Sponsor in-game transactions for seamless gameplay.",
        },
        {
          title: "NFT Minting",
          description: "Cover gas for NFT drops and collection mints.",
        },
        {
          title: "Enterprise Apps",
          description: "Abstract blockchain complexity for business users.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Linea",
      ]}
      codeExample={{
        filename: "gas-manager.ts",
        code: `import { HanzoGasManager } from "@hanzo/blockchain";

const gasManager = new HanzoGasManager({
  apiKey: process.env.HANZO_API_KEY,
});

// Create a gas policy
const policy = await gasManager.createPolicy({
  name: "new-user-onboarding",
  chains: ["ethereum", "polygon"],
  maxGasPerUser: "0.01",
  maxGasPerOperation: "0.001",
  allowedContracts: ["0x..."],
  expiresAt: "2025-12-31",
});

// Sponsor a UserOperation
const sponsorship = await gasManager.sponsorUserOp({
  chain: "ethereum",
  userOp: userOperation,
  policyId: policy.id,
});

// Check balance and usage
const balance = await gasManager.getBalance({ chain: "ethereum" });
const usage = await gasManager.getUsage({ policyId: policy.id });`,
      }}
    />
  );
};

export default HanzoGas;
