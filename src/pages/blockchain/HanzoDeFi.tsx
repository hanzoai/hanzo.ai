import React from "react";
import {
  TrendingUp,
  Coins,
  ArrowLeftRight,
  Percent,
  Shield,
  Zap,
  BarChart3,
  Wallet,
  Gift,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoDeFi = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo DeFi"
      tagline="DeFi building blocks for any application"
      description="Modular DeFi infrastructure for staking, lending, swapping, and yield aggregation. Gasless transactions, stablecoin APIs, and pre-built strategies—all on the Lux Network."
      icon={TrendingUp}
      accentColor="#f97316"
      features={[
        {
          icon: Coins,
          title: "Staking APIs",
          description: "Enable token staking with customizable lock periods and reward distributions.",
        },
        {
          icon: Percent,
          title: "Lending & Borrowing",
          description: "Integrate money market protocols for lending, borrowing, and collateralization.",
        },
        {
          icon: ArrowLeftRight,
          title: "Swap Aggregation",
          description: "Find best swap rates across DEXs with single API call.",
        },
        {
          icon: TrendingUp,
          title: "Yield Strategies",
          description: "Pre-built yield optimization strategies. Auto-compound and rebalance.",
        },
        {
          icon: Zap,
          title: "Gasless Transactions",
          description: "Sponsor gas for your users. Pay in stablecoins, settle on-chain.",
        },
        {
          icon: Shield,
          title: "Risk Management",
          description: "Position monitoring, liquidation alerts, and automated risk controls.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          description: "Track TVL, APY, user positions, and protocol health in real-time.",
        },
        {
          icon: Wallet,
          title: "Portfolio APIs",
          description: "Query user positions, historical returns, and performance across protocols.",
        },
        {
          icon: Gift,
          title: "Rewards Distribution",
          description: "Distribute tokens, points, or NFTs as rewards. Merkle drop support.",
        },
      ]}
      useCases={[
        {
          title: "Yield Aggregators",
          description: "Build auto-compounding vaults that find the best yield across DeFi protocols.",
        },
        {
          title: "Staking Platforms",
          description: "Launch token staking with customizable rewards and governance integration.",
        },
        {
          title: "Trading Apps",
          description: "Integrate swap and limit orders with best-execution routing.",
        },
        {
          title: "Portfolio Trackers",
          description: "Show users their DeFi positions, earnings, and historical performance.",
        },
      ]}
      chains={[
        "Lux",
        "Ethereum",
        "Polygon",
        "Arbitrum",
        "Avalanche",
      ]}
      codeExample={{
        filename: "defi.ts",
        code: `import { HanzoDeFi } from "@hanzo/blockchain";

const defi = new HanzoDeFi({
  apiKey: process.env.HANZO_API_KEY,
});

// Get best swap quote
const quote = await defi.swap.getQuote({
  fromToken: "ETH",
  toToken: "USDC",
  amount: "1000000000000000000", // 1 ETH
  chainId: 1,
});

// Execute gasless swap (user pays in USDC)
const tx = await defi.swap.execute({
  quote,
  wallet: userWallet,
  gasless: true,
});

// Stake tokens
await defi.staking.stake({
  pool: "0x...",
  amount: "1000000000000000000",
  lockPeriod: 30 * 24 * 60 * 60, // 30 days
  wallet: userWallet,
});

// Get user's DeFi positions
const positions = await defi.portfolio.getPositions({
  address: "0x...",
  protocols: ["aave", "compound", "uniswap"],
});`,
      }}
    />
  );
};

export default HanzoDeFi;
