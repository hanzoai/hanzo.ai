import React from "react";
import {
  Server,
  Zap,
  Globe,
  Shield,
  Clock,
  Activity,
  Database,
  Wifi,
  RefreshCw,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoNodes = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Nodes"
      tagline="Managed RPC endpoints for every chain"
      description="Access blockchain data without running your own infrastructure. High-availability nodes for Lux, Ethereum, Polygon, Avalanche, Solana, and more—with realtime subscriptions and historical queries."
      icon={Server}
      accentColor="#3b82f6"
      features={[
        {
          icon: Globe,
          title: "Multi-Chain Support",
          description: "RPC endpoints for Lux, EVM chains, Solana, Cosmos, and more. One API for all networks.",
        },
        {
          icon: Database,
          title: "Archive Nodes",
          description: "Access historical blockchain state and data from genesis. Full archive node access included.",
        },
        {
          icon: Wifi,
          title: "WebSocket Subscriptions",
          description: "Real-time event subscriptions for new blocks, transactions, and contract events.",
        },
        {
          icon: Zap,
          title: "Ultra-Low Latency",
          description: "Global edge distribution ensures sub-50ms response times from anywhere in the world.",
        },
        {
          icon: Shield,
          title: "99.9% Uptime SLA",
          description: "Enterprise-grade reliability with automatic failover and redundancy across regions.",
        },
        {
          icon: Activity,
          title: "Rate Limiting & Load Balancing",
          description: "Built-in rate limiting, request queuing, and intelligent load balancing.",
        },
        {
          icon: RefreshCw,
          title: "Auto-Scaling",
          description: "Automatically scales to handle traffic spikes without configuration.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Monitor RPC usage, latency metrics, and error rates in real-time.",
        },
        {
          icon: Clock,
          title: "Rollup Support",
          description: "Native support for L2s including Arbitrum, Optimism, Base, zkSync, and more.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Applications",
          description: "Build decentralized exchanges, lending protocols, and yield aggregators with reliable blockchain data access.",
        },
        {
          title: "NFT Marketplaces",
          description: "Power NFT minting, trading, and metadata retrieval with fast, reliable node infrastructure.",
        },
        {
          title: "Wallet Applications",
          description: "Fetch balances, transaction history, and broadcast transactions for multi-chain wallets.",
        },
        {
          title: "Analytics Platforms",
          description: "Query historical data for blockchain analytics, portfolio tracking, and market intelligence.",
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
        "Solana",
        "Cosmos",
        "zkSync",
        "Scroll",
      ]}
      codeExamples={[
        {
          language: "Node",
          filename: "nodes.ts",
          code: `import { HanzoNodes } from "@hanzo/blockchain";

const nodes = new HanzoNodes({
  apiKey: process.env.HANZO_API_KEY,
});

// Get the latest block from Ethereum
const block = await nodes.eth.getBlockNumber();

// Subscribe to new blocks on Lux
const subscription = nodes.lux.subscribe("newHeads", (block) => {
  console.log("New block:", block.number);
});

// Call a contract method
const balance = await nodes.eth.call({
  to: "0x...",
  data: "0x70a08231000000000000000000000000...",
});

// Multi-chain balance check
const balances = await nodes.multiCall([
  { chain: "ethereum", method: "eth_getBalance", params: [address] },
  { chain: "lux", method: "eth_getBalance", params: [address] },
]);`,
        },
        {
          language: "Python",
          filename: "nodes.py",
          code: `from hanzo import HanzoNodes
import os

nodes = HanzoNodes(api_key=os.environ["HANZO_API_KEY"])

# Get the latest block from Ethereum
block = await nodes.eth.get_block_number()

# Subscribe to new blocks on Lux
async for block in nodes.lux.subscribe("newHeads"):
    print(f"New block: {block['number']}")

# Call a contract method
balance = await nodes.eth.call(
    to="0x...",
    data="0x70a08231000000000000000000000000..."
)

# Multi-chain balance check
balances = await nodes.multi_call([
    {"chain": "ethereum", "method": "eth_getBalance", "params": [address]},
    {"chain": "lux", "method": "eth_getBalance", "params": [address]},
])`,
        },
        {
          language: "Go",
          filename: "nodes.go",
          code: `package main

import (
    "fmt"
    "os"
    "github.com/hanzoai/hanzo-go/blockchain"
)

func main() {
    nodes := blockchain.NewNodes(os.Getenv("HANZO_API_KEY"))

    // Get the latest block from Ethereum
    block, _ := nodes.Eth.GetBlockNumber(ctx)

    // Subscribe to new blocks on Lux
    sub := nodes.Lux.Subscribe(ctx, "newHeads")
    for block := range sub.Blocks() {
        fmt.Printf("New block: %d\\n", block.Number)
    }

    // Call a contract method
    balance, _ := nodes.Eth.Call(ctx, blockchain.CallOpts{
        To:   "0x...",
        Data: "0x70a08231000000000000000000000000...",
    })

    // Multi-chain balance check
    balances, _ := nodes.MultiCall(ctx, []blockchain.Call{
        {Chain: "ethereum", Method: "eth_getBalance", Params: []any{address}},
        {Chain: "lux", Method: "eth_getBalance", Params: []any{address}},
    })
}`,
        },
        {
          language: "Rust",
          filename: "nodes.rs",
          code: `use hanzo_blockchain::Nodes;

#[tokio::main]
async fn main() -> Result<()> {
    let nodes = Nodes::new(std::env::var("HANZO_API_KEY")?);

    // Get the latest block from Ethereum
    let block = nodes.eth().get_block_number().await?;

    // Subscribe to new blocks on Lux
    let mut stream = nodes.lux().subscribe("newHeads").await?;
    while let Some(block) = stream.next().await {
        println!("New block: {}", block.number);
    }

    // Call a contract method
    let balance = nodes.eth().call(CallOpts {
        to: "0x...".into(),
        data: "0x70a08231000000000000000000000000...".into(),
    }).await?;

    // Multi-chain balance check
    let balances = nodes.multi_call(vec![
        Call::new("ethereum", "eth_getBalance", vec![address]),
        Call::new("lux", "eth_getBalance", vec![address]),
    ]).await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "nodes.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_nodes_t *nodes = hanzo_nodes_new(getenv("HANZO_API_KEY"));

    // Get the latest block from Ethereum
    uint64_t block = hanzo_eth_get_block_number(nodes);

    // Subscribe to new blocks on Lux
    hanzo_subscription_t *sub = hanzo_lux_subscribe(nodes, "newHeads");
    hanzo_block_t blk;
    while (hanzo_subscription_next(sub, &blk)) {
        printf("New block: %llu\\n", blk.number);
    }

    // Call a contract method
    char *balance = hanzo_eth_call(nodes, "0x...",
        "0x70a08231000000000000000000000000...");

    // Multi-chain balance check
    hanzo_call_t calls[] = {
        {"ethereum", "eth_getBalance", address},
        {"lux", "eth_getBalance", address},
    };
    hanzo_multi_call(nodes, calls, 2);

    hanzo_nodes_free(nodes);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "nodes.cpp",
          code: `#include <hanzo/blockchain.hpp>
#include <iostream>

int main() {
    auto nodes = hanzo::Nodes(std::getenv("HANZO_API_KEY"));

    // Get the latest block from Ethereum
    auto block = nodes.eth().getBlockNumber();

    // Subscribe to new blocks on Lux
    nodes.lux().subscribe("newHeads", [](auto block) {
        std::cout << "New block: " << block.number << std::endl;
    });

    // Call a contract method
    auto balance = nodes.eth().call({
        .to = "0x...",
        .data = "0x70a08231000000000000000000000000..."
    });

    // Multi-chain balance check
    auto balances = nodes.multiCall({
        {"ethereum", "eth_getBalance", {address}},
        {"lux", "eth_getBalance", {address}},
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "nodes.rb",
          code: `require 'hanzo/blockchain'

nodes = Hanzo::Nodes.new(api_key: ENV['HANZO_API_KEY'])

# Get the latest block from Ethereum
block = nodes.eth.get_block_number

# Subscribe to new blocks on Lux
nodes.lux.subscribe('newHeads') do |block|
  puts "New block: #{block[:number]}"
end

# Call a contract method
balance = nodes.eth.call(
  to: '0x...',
  data: '0x70a08231000000000000000000000000...'
)

# Multi-chain balance check
balances = nodes.multi_call([
  { chain: 'ethereum', method: 'eth_getBalance', params: [address] },
  { chain: 'lux', method: 'eth_getBalance', params: [address] },
])`,
        },
      ]}
    />
  );
};

export default HanzoNodes;
