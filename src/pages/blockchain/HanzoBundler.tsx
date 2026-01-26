import React from "react";
import {
  Layers,
  Zap,
  Shield,
  Globe,
  RefreshCw,
  Clock,
  Database,
  Settings,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoBundler = () => {
  return (
    <BlockchainProductLayout
      name="Bundler API"
      tagline="ERC-4337 UserOperation bundling service"
      description="Production-grade bundler for account abstraction. Submit, simulate, and track UserOperations across all ERC-4337 compatible chains with reliable transaction inclusion."
      icon={Layers}
      accentColor="#14b8a6"
      features={[
        {
          icon: Layers,
          title: "UserOp Bundling",
          description: "Efficiently bundle multiple UserOperations into single transactions.",
        },
        {
          icon: Zap,
          title: "Fast Inclusion",
          description: "Priority transaction submission for quick block inclusion.",
        },
        {
          icon: Shield,
          title: "Simulation",
          description: "Pre-flight simulation to validate operations before submission.",
        },
        {
          icon: Globe,
          title: "Multi-chain Support",
          description: "ERC-4337 bundling across Ethereum, Polygon, Arbitrum, and more.",
        },
        {
          icon: RefreshCw,
          title: "Auto-retry",
          description: "Automatic retry with gas price adjustment for stuck operations.",
        },
        {
          icon: Clock,
          title: "Status Tracking",
          description: "Real-time status updates from submission to confirmation.",
        },
        {
          icon: Database,
          title: "Operation History",
          description: "Query past UserOperations and their execution results.",
        },
        {
          icon: Settings,
          title: "Custom Mempools",
          description: "Support for alternative mempools and private submission.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          description: "Track success rates, gas usage, and operation metrics.",
        },
      ]}
      useCases={[
        {
          title: "Smart Wallet Apps",
          description: "Power account abstraction wallets with reliable bundling.",
        },
        {
          title: "Gasless Transactions",
          description: "Enable sponsored transactions with paymaster integration.",
        },
        {
          title: "Batch Operations",
          description: "Execute multiple actions in a single user signature.",
        },
        {
          title: "Session Keys",
          description: "Support for temporary permissions and automated actions.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Linea",
      ]}
      codeExample={{
        filename: "bundler.ts",
        code: `import { HanzoBundler } from "@hanzo/blockchain";

const bundler = new HanzoBundler({
  apiKey: process.env.HANZO_API_KEY,
});

// Submit a UserOperation
const result = await bundler.sendUserOperation({
  chain: "ethereum",
  userOp: {
    sender: "0x...",
    nonce: "0x0",
    initCode: "0x",
    callData: "0x...",
    callGasLimit: "0x...",
    verificationGasLimit: "0x...",
    preVerificationGas: "0x...",
    maxFeePerGas: "0x...",
    maxPriorityFeePerGas: "0x...",
    paymasterAndData: "0x",
    signature: "0x...",
  },
  entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
});

// Track operation status
const status = await bundler.getUserOperationReceipt({
  chain: "ethereum",
  userOpHash: result.userOpHash,
});`,
      }}
    />
  );
};

export default HanzoBundler;
