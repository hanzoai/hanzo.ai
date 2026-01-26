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
  Layers,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoChains = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Chains"
      tagline="Multi-chain RPC infrastructure for every network"
      description="Access 100+ blockchain networks through a unified API. High-availability managed nodes with archive data access, WebSocket subscriptions, and enterprise-grade reliability. From Ethereum and Solana to Lux ecosystem chains (Hanzo Network, Zoo Network, Pars Network), EVM L2s, and Cosmos chains."
      icon={Server}
      accentColor="#3b82f6"
      features={[
        {
          icon: Globe,
          title: "100+ Chains Supported",
          description: "Full Lux ecosystem (P/C/A/B/Z/T/K/Q/D chains), EVM L2s, Solana, Cosmos, and more.",
        },
        {
          icon: Database,
          title: "Archive Node Access",
          description: "Query historical blockchain state from genesis. Full archive data included.",
        },
        {
          icon: Wifi,
          title: "WebSocket Streams",
          description: "Real-time subscriptions for blocks, transactions, and contract events.",
        },
        {
          icon: Zap,
          title: "Ultra-Low Latency",
          description: "Global edge distribution with sub-50ms response times worldwide.",
        },
        {
          icon: Shield,
          title: "99.9% Uptime SLA",
          description: "Enterprise reliability with automatic failover across regions.",
        },
        {
          icon: Activity,
          title: "Rate Limiting Built-in",
          description: "Intelligent rate limiting, request queuing, and load balancing.",
        },
        {
          icon: RefreshCw,
          title: "Auto-Scaling",
          description: "Handles traffic spikes automatically without configuration.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Monitor usage, latency metrics, and error rates in real-time.",
        },
        {
          icon: Layers,
          title: "L2 & Rollup Support",
          description: "Native support for Arbitrum, Optimism, Base, zkSync, and more.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Applications",
          description: "Build DEXs, lending protocols, and yield aggregators with reliable chain data.",
        },
        {
          title: "NFT Marketplaces",
          description: "Power NFT minting, trading, and metadata with fast node infrastructure.",
        },
        {
          title: "Multi-chain Wallets",
          description: "Fetch balances and broadcast transactions across 100+ chains.",
        },
        {
          title: "Analytics Platforms",
          description: "Query historical data for portfolio tracking and market intelligence.",
        },
      ]}
      chains={[
        // L1s
        "Ethereum", "Solana", "Bitcoin", "Avalanche", "BNB Chain", "Cosmos",
        // L2s & Rollups
        "Arbitrum", "Optimism", "Base", "Polygon", "zkSync", "Scroll", "Linea", "Blast", "Mode", "Mantle",
        // Lux Ecosystem - Full Chain Support
        "Lux P-Chain", "Lux C-Chain", "Lux A-Chain", "Lux B-Chain", "Lux Z-Chain",
        "Lux T-Chain", "Lux K-Chain", "Lux Q-Chain", "Lux D-Chain (DEX)",
        "Hanzo Network", "Zoo Network", "Pars Network", "Lux Bridge",
        // Other Networks
        "Aptos", "Sui", "Sei", "Berachain", "Monad", "Celestia", "Near",
      ]}
      codeExamples={[
        {
          language: "Node",
          filename: "chains.ts",
          code: `import { HanzoChains } from "@hanzo/blockchain";

const chains = new HanzoChains({
  apiKey: process.env.HANZO_API_KEY,
});

// Get the latest block from Ethereum
const block = await chains.eth.getBlockNumber();

// Subscribe to new blocks on Lux C-Chain
chains.lux.cchain.subscribe("newHeads", (block) => {
  console.log("New block:", block.number);
});

// Multi-chain balance check
const balances = await chains.multiCall([
  { chain: "ethereum", method: "eth_getBalance", params: [address] },
  { chain: "lux-cchain", method: "eth_getBalance", params: [address] },
]);`,
        },
        {
          language: "Python",
          filename: "chains.py",
          code: `from hanzo import HanzoChains

chains = HanzoChains(api_key=os.environ["HANZO_API_KEY"])

# Get the latest block from Ethereum
block = await chains.eth.get_block_number()

# Subscribe to new blocks on Lux C-Chain
async for block in chains.lux.cchain.subscribe("newHeads"):
    print(f"New block: {block['number']}")

# Multi-chain balance check
balances = await chains.multi_call([
    {"chain": "ethereum", "method": "eth_getBalance", "params": [address]},
    {"chain": "lux-cchain", "method": "eth_getBalance", "params": [address]},
])`,
        },
        {
          language: "Go",
          filename: "chains.go",
          code: `package main

import "github.com/hanzoai/hanzo-go/blockchain"

func main() {
    chains := blockchain.NewClient(os.Getenv("HANZO_API_KEY"))

    // Get the latest block from Ethereum
    block, _ := chains.Eth.GetBlockNumber(ctx)

    // Subscribe to new blocks on Lux C-Chain
    sub := chains.Lux.CChain.Subscribe(ctx, "newHeads")
    for block := range sub.Blocks() {
        fmt.Printf("New block: %d\\n", block.Number)
    }

    // Multi-chain balance check
    balances, _ := chains.MultiCall(ctx, []blockchain.Call{
        {Chain: "ethereum", Method: "eth_getBalance", Params: []any{address}},
        {Chain: "lux-cchain", Method: "eth_getBalance", Params: []any{address}},
    })
}`,
        },
        {
          language: "Rust",
          filename: "chains.rs",
          code: `use hanzo_blockchain::HanzoChains;

#[tokio::main]
async fn main() -> Result<()> {
    let chains = HanzoChains::new(std::env::var("HANZO_API_KEY")?);

    // Get the latest block from Ethereum
    let block = chains.eth().get_block_number().await?;

    // Subscribe to new blocks on Lux C-Chain
    let mut stream = chains.lux().cchain().subscribe("newHeads").await?;
    while let Some(block) = stream.next().await {
        println!("New block: {}", block.number);
    }

    // Multi-chain balance check
    let balances = chains.multi_call(vec![
        Call::new("ethereum", "eth_getBalance", vec![address]),
        Call::new("lux-cchain", "eth_getBalance", vec![address]),
    ]).await?;
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "chains.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_chains_t *chains = hanzo_chains_new(getenv("HANZO_API_KEY"));

    // Get the latest block from Ethereum
    uint64_t block = hanzo_eth_get_block_number(chains);

    // Subscribe to new blocks on Lux C-Chain
    hanzo_subscription_t *sub = hanzo_lux_cchain_subscribe(chains, "newHeads");
    hanzo_block_t block;
    while (hanzo_subscription_next(sub, &block)) {
        printf("New block: %llu\\n", block.number);
    }

    // Multi-chain balance check
    hanzo_call_t calls[] = {
        {"ethereum", "eth_getBalance", address},
        {"lux-cchain", "eth_getBalance", address},
    };
    hanzo_multi_call(chains, calls, 2);

    hanzo_chains_free(chains);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "chains.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    auto chains = hanzo::Chains(std::getenv("HANZO_API_KEY"));

    // Get the latest block from Ethereum
    auto block = chains.eth().getBlockNumber();

    // Subscribe to new blocks on Lux C-Chain
    chains.lux().cchain().subscribe("newHeads", [](auto block) {
        std::cout << "New block: " << block.number << std::endl;
    });

    // Multi-chain balance check
    auto balances = chains.multiCall({
        {"ethereum", "eth_getBalance", {address}},
        {"lux-cchain", "eth_getBalance", {address}},
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "chains.rb",
          code: `require 'hanzo/blockchain'

chains = Hanzo::Chains.new(api_key: ENV['HANZO_API_KEY'])

# Get the latest block from Ethereum
block = chains.eth.get_block_number

# Subscribe to new blocks on Lux C-Chain
chains.lux.cchain.subscribe('newHeads') do |block|
  puts "New block: #{block[:number]}"
end

# Multi-chain balance check
balances = chains.multi_call([
  { chain: 'ethereum', method: 'eth_getBalance', params: [address] },
  { chain: 'lux-cchain', method: 'eth_getBalance', params: [address] },
])`,
        },
      ]}
    />
  );
};

export default HanzoChains;
