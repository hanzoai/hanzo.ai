'use client'

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
      codeExamples={[
        {
          language: "Solidity",
          filename: "IndexedContract.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@hanzo/indexer/IHanzoIndexer.sol";

/// @title IndexedContract - Emit events optimized for Hanzo Indexer
/// @notice Structured events for efficient GraphQL querying
contract IndexedContract {
    // Indexed events for efficient GraphQL queries
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId,
        uint256 amount,
        uint256 timestamp
    );

    event Swap(
        address indexed pair,
        address indexed sender,
        uint256 amount0In,
        uint256 amount1In,
        uint256 amount0Out,
        uint256 amount1Out,
        uint256 indexed blockNumber
    );

    event PriceUpdate(
        address indexed token,
        uint256 price,
        uint256 indexed timestamp
    );

    // Log transfer for indexing
    function logTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 amount
    ) external {
        emit Transfer(from, to, tokenId, amount, block.timestamp);
    }

    // Log swap for DEX indexing
    function logSwap(
        address pair,
        uint256 amount0In,
        uint256 amount1In,
        uint256 amount0Out,
        uint256 amount1Out
    ) external {
        emit Swap(
            pair,
            msg.sender,
            amount0In,
            amount1In,
            amount0Out,
            amount1Out,
            block.number
        );
    }

    // Log price for oracle indexing
    function logPriceUpdate(address token, uint256 price) external {
        emit PriceUpdate(token, price, block.timestamp);
    }
}`,
        },
        {
          language: "Node",
          filename: "indexer.ts",
          code: `import { HanzoIndexer } from "@hanzo/blockchain";

const indexer = new HanzoIndexer({ apiKey: process.env.HANZO_API_KEY });

// Query token transfers
const transfers = await indexer.query(\`
  query GetTransfers($address: String!) {
    transfers(where: { from: $address }, first: 100) {
      id, from, to, value
      token { symbol, decimals }
    }
  }
\`, { address: "0x..." });

// Subscribe to DEX swaps
indexer.subscribe("swaps", { pair: "ETH/USDC" }, (swap) => {
  console.log("Swap:", swap.amount0In, "->", swap.amount1Out);
});`,
        },
        {
          language: "Python",
          filename: "indexer.py",
          code: `from hanzo import HanzoIndexer

indexer = HanzoIndexer(api_key=os.environ["HANZO_API_KEY"])

# Query token transfers
transfers = await indexer.query("""
  query GetTransfers($address: String!) {
    transfers(where: { from: $address }, first: 100) {
      id, from, to, value
      token { symbol, decimals }
    }
  }
""", {"address": "0x..."})

# Subscribe to DEX swaps
async for swap in indexer.subscribe("swaps", pair="ETH/USDC"):
    print(f"Swap: {swap['amount0In']} -> {swap['amount1Out']}")`,
        },
        {
          language: "Go",
          filename: "indexer.go",
          code: `package main

import "github.com/hanzoai/hanzo-go/blockchain"

func main() {
    indexer := blockchain.NewIndexer(os.Getenv("HANZO_API_KEY"))

    // Query token transfers
    var transfers []Transfer
    indexer.Query(ctx, &transfers, \`
      query GetTransfers($address: String!) {
        transfers(where: { from: $address }, first: 100) {
          id, from, to, value
        }
      }
    \`, map[string]any{"address": "0x..."})

    // Subscribe to DEX swaps
    sub := indexer.Subscribe(ctx, "swaps", blockchain.Filter{Pair: "ETH/USDC"})
    for swap := range sub.Events() {
        fmt.Printf("Swap: %s -> %s\\n", swap.Amount0In, swap.Amount1Out)
    }
}`,
        },
        {
          language: "Rust",
          filename: "indexer.rs",
          code: `use hanzo_blockchain::Indexer;

#[tokio::main]
async fn main() -> Result<()> {
    let indexer = Indexer::new(std::env::var("HANZO_API_KEY")?);

    // Query token transfers
    let transfers: Vec<Transfer> = indexer.query(r#"
      query GetTransfers($address: String!) {
        transfers(where: { from: $address }, first: 100) {
          id, from, to, value
        }
      }
    "#, json!({"address": "0x..."})).await?;

    // Subscribe to DEX swaps
    let mut stream = indexer.subscribe("swaps", Filter::pair("ETH/USDC")).await?;
    while let Some(swap) = stream.next().await {
        println!("Swap: {} -> {}", swap.amount0_in, swap.amount1_out);
    }
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "indexer.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_indexer_t *idx = hanzo_indexer_new(getenv("HANZO_API_KEY"));

    // Query token transfers
    const char *query = "query { transfers(first: 100) { id from to value } }";
    hanzo_result_t *result = hanzo_indexer_query(idx, query, NULL);

    // Subscribe to DEX swaps
    hanzo_sub_t *sub = hanzo_indexer_subscribe(idx, "swaps", "ETH/USDC");
    hanzo_event_t event;
    while (hanzo_sub_next(sub, &event)) {
        printf("Swap: %s -> %s\\n", event.amount0_in, event.amount1_out);
    }

    hanzo_indexer_free(idx);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "indexer.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    auto indexer = hanzo::Indexer(std::getenv("HANZO_API_KEY"));

    // Query token transfers
    auto transfers = indexer.query<std::vector<Transfer>>(R"(
      query { transfers(first: 100) { id from to value } }
    )");

    // Subscribe to DEX swaps
    indexer.subscribe("swaps", {{"pair", "ETH/USDC"}}, [](auto swap) {
        std::cout << "Swap: " << swap.amount0_in << " -> " << swap.amount1_out << std::endl;
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "indexer.rb",
          code: `require 'hanzo/blockchain'

indexer = Hanzo::Indexer.new(api_key: ENV['HANZO_API_KEY'])

# Query token transfers
transfers = indexer.query(<<~GRAPHQL, address: '0x...')
  query GetTransfers($address: String!) {
    transfers(where: { from: $address }, first: 100) {
      id, from, to, value
    }
  }
GRAPHQL

# Subscribe to DEX swaps
indexer.subscribe('swaps', pair: 'ETH/USDC') do |swap|
  puts "Swap: #{swap[:amount0_in]} -> #{swap[:amount1_out]}"
end`,
        },
      ]}
    />
  );
};

export default HanzoIndexer;
