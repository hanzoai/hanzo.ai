import React from "react";
import {
  Search,
  Database,
  Zap,
  Code,
  Webhook,
  BarChart3,
  Layers,
  Filter,
  Globe,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoIndexer = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Indexer"
      tagline="Query blockchain data with GraphQL"
      description="Index and query on-chain data at scale. Deploy custom subgraphs, access real-time indexed data, and build powerful blockchain analytics—all through a simple GraphQL API."
      icon={Search}
      accentColor="#10b981"
      features={[
        {
          icon: Code,
          title: "GraphQL API",
          description: "Query indexed blockchain data with a powerful, flexible GraphQL interface.",
        },
        {
          icon: Layers,
          title: "Custom Subgraphs",
          description: "Deploy your own indexing logic with custom subgraph definitions.",
        },
        {
          icon: Zap,
          title: "Real-Time Indexing",
          description: "Data indexed within seconds of on-chain confirmation.",
        },
        {
          icon: Database,
          title: "Historical Aggregation",
          description: "Pre-computed aggregations and time-series data for analytics.",
        },
        {
          icon: Globe,
          title: "Cross-Chain Unification",
          description: "Unified data model across multiple chains for easy cross-chain queries.",
        },
        {
          icon: Webhook,
          title: "Webhooks",
          description: "Push notifications for indexed events to your backend.",
        },
        {
          icon: Filter,
          title: "Token & Portfolio APIs",
          description: "Pre-built APIs for token balances, transfers, and portfolio tracking.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Monitor indexing status, query performance, and data freshness.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Dashboards",
          description: "Build trading dashboards with real-time price, volume, and liquidity data from DEXs.",
        },
        {
          title: "NFT Analytics",
          description: "Track NFT sales, floor prices, holder distributions, and collection statistics.",
        },
        {
          title: "Token Explorers",
          description: "Create token explorers with transfer history, holder analytics, and supply metrics.",
        },
        {
          title: "Protocol Monitoring",
          description: "Monitor protocol health, TVL, user activity, and governance participation.",
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
        filename: "query.graphql",
        code: `# Query token transfers for an address
query GetTransfers($address: String!) {
  transfers(
    where: { from: $address }
    orderBy: timestamp
    orderDirection: desc
    first: 100
  ) {
    id
    from
    to
    value
    token {
      symbol
      decimals
    }
    transaction {
      hash
      blockNumber
    }
    timestamp
  }
}

# Subscribe to new swaps on a DEX
subscription OnSwap($pair: String!) {
  swaps(where: { pair: $pair }) {
    amount0In
    amount1Out
    sender
    timestamp
  }
}`,
      }}
    />
  );
};

export default HanzoIndexer;
