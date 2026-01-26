import React from "react";
import {
  Wallet,
  Shield,
  Globe,
  RefreshCw,
  Clock,
  Database,
  Settings,
  Users,
  Key,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoSmartWallets = () => {
  return (
    <BlockchainProductLayout
      name="Smart Wallets"
      tagline="ERC-4337 account abstraction wallets"
      description="Next-generation smart contract wallets with account abstraction. Social recovery, session keys, batch transactions, and gasless experiences out of the box."
      icon={Wallet}
      accentColor="#f59e0b"
      features={[
        {
          icon: Wallet,
          title: "Smart Contract Wallets",
          description: "Upgradeable wallets with programmable logic and security.",
        },
        {
          icon: Shield,
          title: "Social Recovery",
          description: "Recover accounts using trusted guardians, not seed phrases.",
        },
        {
          icon: Key,
          title: "Session Keys",
          description: "Temporary permissions for apps without repeated signing.",
        },
        {
          icon: Users,
          title: "Multi-sig Support",
          description: "Require multiple approvals for high-value transactions.",
        },
        {
          icon: RefreshCw,
          title: "Batch Transactions",
          description: "Execute multiple operations in a single transaction.",
        },
        {
          icon: Globe,
          title: "Multi-chain",
          description: "Same wallet address across all EVM chains.",
        },
        {
          icon: Settings,
          title: "Custom Modules",
          description: "Extend functionality with modular security plugins.",
        },
        {
          icon: Clock,
          title: "Time-locked Actions",
          description: "Schedule transactions and set spending limits.",
        },
        {
          icon: Database,
          title: "Transaction History",
          description: "Complete audit trail of all wallet activity.",
        },
      ]}
      useCases={[
        {
          title: "Consumer Wallets",
          description: "User-friendly wallets without seed phrase management.",
        },
        {
          title: "Gaming",
          description: "Session keys for seamless in-game transactions.",
        },
        {
          title: "Enterprise Treasury",
          description: "Multi-sig controls for corporate crypto management.",
        },
        {
          title: "DeFi Power Users",
          description: "Batch operations and automated strategies.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Linea",
      ]}
      codeExample={{
        filename: "smart-wallets.ts",
        code: `import { HanzoSmartWallet } from "@hanzo/blockchain";

const smartWallet = new HanzoSmartWallet({
  apiKey: process.env.HANZO_API_KEY,
});

// Create a new smart wallet
const wallet = await smartWallet.create({
  owner: "0x...", // EOA signer
  chain: "ethereum",
  guardians: ["0x...", "0x..."], // Recovery guardians
  threshold: 2, // Guardians needed for recovery
});

// Create a session key for an app
const session = await wallet.createSessionKey({
  permissions: ["transfer", "approve"],
  allowedContracts: ["0x..."],
  expiresAt: Date.now() + 86400000, // 24 hours
});

// Execute batch transaction
await wallet.executeBatch([
  { to: "0x...", value: "0.1", data: "0x" },
  { to: "0x...", value: "0", data: approveCalldata },
  { to: "0x...", value: "0", data: swapCalldata },
]);`,
      }}
    />
  );
};

export default HanzoSmartWallets;
