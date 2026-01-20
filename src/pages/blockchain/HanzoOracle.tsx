import React from "react";
import {
  Radio,
  TrendingUp,
  Dice6,
  CloudSun,
  Link2,
  Shield,
  Clock,
  Database,
  Zap,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoOracle = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Oracle"
      tagline="Bring real-world data on-chain"
      description="A comprehensive oracle service providing price feeds, randomness, weather data, and custom attestations for smart contracts. Built on Lux's OracleVM with Chainlink integration."
      icon={Radio}
      accentColor="#a855f7"
      features={[
        {
          icon: TrendingUp,
          title: "Price Feeds",
          description: "Real-time and historical price data for crypto, forex, commodities, and stocks.",
        },
        {
          icon: Dice6,
          title: "VRF (Randomness)",
          description: "Verifiable random numbers for gaming, NFT mints, and fair selection.",
        },
        {
          icon: CloudSun,
          title: "Weather Data",
          description: "On-chain weather data for parametric insurance and prediction markets.",
        },
        {
          icon: Link2,
          title: "Custom Data Feeds",
          description: "Bring any API data on-chain with custom oracle configurations.",
        },
        {
          icon: Shield,
          title: "Cryptographic Proofs",
          description: "Every data point includes cryptographic proof of authenticity.",
        },
        {
          icon: Clock,
          title: "Scheduled Updates",
          description: "Configure update frequency from seconds to daily, based on your needs.",
        },
        {
          icon: Database,
          title: "Historical Data",
          description: "Access historical oracle data for backtesting and analysis.",
        },
        {
          icon: Zap,
          title: "Low Latency",
          description: "Sub-second updates for time-sensitive applications.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Protocols",
          description: "Power lending, derivatives, and synthetic assets with reliable price feeds.",
        },
        {
          title: "Gaming & NFTs",
          description: "Generate provably fair random numbers for loot boxes, mints, and gameplay.",
        },
        {
          title: "Insurance",
          description: "Trigger parametric insurance payouts based on weather, flight, or event data.",
        },
        {
          title: "Prediction Markets",
          description: "Settle markets with verified outcomes from trusted data sources.",
        },
      ]}
      chains={[
        "Lux",
        "Ethereum",
        "Polygon",
        "Arbitrum",
        "Avalanche",
        "BNB Chain",
      ]}
      codeExample={{
        filename: "oracle.sol",
        code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@hanzo/oracle/PriceFeed.sol";
import "@hanzo/oracle/VRF.sol";

contract MyDeFiProtocol {
    HanzoPriceFeed public priceFeed;
    HanzoVRF public vrf;

    constructor(address _priceFeed, address _vrf) {
        priceFeed = HanzoPriceFeed(_priceFeed);
        vrf = HanzoVRF(_vrf);
    }

    function getEthPrice() public view returns (uint256) {
        // Get latest ETH/USD price (8 decimals)
        return priceFeed.getLatestPrice("ETH/USD");
    }

    function mintRandomNFT() external returns (uint256) {
        // Request random number for NFT traits
        uint256 requestId = vrf.requestRandomness();
        // Callback will be called with random number
        return requestId;
    }

    function fulfillRandomness(
        uint256 requestId,
        uint256 randomness
    ) internal override {
        uint256 rarity = randomness % 100;
        // Mint NFT with deterministic traits
    }
}`,
      }}
    />
  );
};

export default HanzoOracle;
