import React from "react";
import {
  Search,
  BarChart3,
  Blocks,
  FileCode,
  Eye,
  Globe,
  Bell,
  Download,
  Zap,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoExplorer = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Explorer"
      tagline="Unified blockchain explorer and analytics"
      description="A comprehensive explorer for Lux and integrated chains. Search transactions, decode contract interactions, and analyze on-chain data with powerful analytics tools."
      icon={Search}
      accentColor="#6366f1"
      features={[
        {
          icon: Globe,
          title: "Multi-Chain Support",
          description: "Explore Lux, Ethereum, Polygon, and all integrated chains from one interface.",
        },
        {
          icon: Blocks,
          title: "Block & Transaction Search",
          description: "Search by address, transaction hash, block number, or ENS name.",
        },
        {
          icon: FileCode,
          title: "Contract Verification",
          description: "Verify and publish contract source code. Read and write to contracts.",
        },
        {
          icon: Eye,
          title: "Transaction Decoding",
          description: "Automatic ABI decoding shows human-readable transaction details.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          description: "Network stats, gas trends, token metrics, and protocol analytics.",
        },
        {
          icon: Bell,
          title: "Alerts & Notifications",
          description: "Set up alerts for address activity, large transfers, and contract events.",
        },
        {
          icon: Download,
          title: "Data Export",
          description: "Export transaction history, token transfers, and analytics to CSV.",
        },
        {
          icon: Zap,
          title: "API Access",
          description: "Full API access to all explorer data for integration.",
        },
      ]}
      useCases={[
        {
          title: "Developer Debugging",
          description: "Debug failed transactions, trace contract calls, and verify deployments.",
        },
        {
          title: "User Transparency",
          description: "Let users verify their transactions and understand contract interactions.",
        },
        {
          title: "Compliance Reporting",
          description: "Export transaction history for tax reporting and audit requirements.",
        },
        {
          title: "Protocol Monitoring",
          description: "Track protocol metrics, TVL, and user activity across chains.",
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
          language: "Node",
          filename: "explorer.ts",
          code: `import { HanzoExplorer } from "@hanzo/blockchain";

const explorer = new HanzoExplorer({
  apiKey: process.env.HANZO_API_KEY,
});

// Get transaction details
const tx = await explorer.getTransaction({
  hash: "0x...",
  chainId: 1,
});

console.log(tx.decoded); // Human-readable method call
console.log(tx.gasUsed);
console.log(tx.status);

// Get address history
const history = await explorer.getAddressHistory({
  address: "0x...",
  chainId: 1,
  page: 1,
  limit: 50,
});

// Search across chains
const results = await explorer.search({
  query: "0x...", // Address, tx hash, or ENS
});`,
        },
        {
          language: "Python",
          filename: "explorer.py",
          code: `from hanzo import HanzoExplorer
import os

explorer = HanzoExplorer(api_key=os.environ["HANZO_API_KEY"])

# Get transaction details
tx = await explorer.get_transaction(
    hash="0x...",
    chain_id=1
)

print(f"Method: {tx.decoded}")
print(f"Gas used: {tx.gas_used}")
print(f"Status: {tx.status}")

# Get address history
history = await explorer.get_address_history(
    address="0x...",
    chain_id=1,
    page=1,
    limit=50
)

# Search across chains
results = await explorer.search(query="0x...")

# Set up alerts
await explorer.create_alert(
    address="0x...",
    event="transfer",
    threshold="1000000000000000000",
    webhook="https://your-app.com/webhook"
)`,
        },
        {
          language: "Go",
          filename: "explorer.go",
          code: `package main

import (
    "fmt"
    "os"
    "github.com/hanzoai/hanzo-go/blockchain"
)

func main() {
    explorer := blockchain.NewExplorer(os.Getenv("HANZO_API_KEY"))

    // Get transaction details
    tx, _ := explorer.GetTransaction(ctx, blockchain.TxQuery{
        Hash:    "0x...",
        ChainID: 1,
    })

    fmt.Printf("Method: %s\\n", tx.Decoded)
    fmt.Printf("Gas used: %d\\n", tx.GasUsed)
    fmt.Printf("Status: %s\\n", tx.Status)

    // Get address history
    history, _ := explorer.GetAddressHistory(ctx, blockchain.HistoryQuery{
        Address: "0x...",
        ChainID: 1,
        Page:    1,
        Limit:   50,
    })

    // Search across chains
    results, _ := explorer.Search(ctx, "0x...")
}`,
        },
        {
          language: "Rust",
          filename: "explorer.rs",
          code: `use hanzo_blockchain::Explorer;

#[tokio::main]
async fn main() -> Result<()> {
    let explorer = Explorer::new(std::env::var("HANZO_API_KEY")?);

    // Get transaction details
    let tx = explorer.get_transaction(TxQuery {
        hash: "0x...".into(),
        chain_id: 1,
    }).await?;

    println!("Method: {}", tx.decoded);
    println!("Gas used: {}", tx.gas_used);
    println!("Status: {}", tx.status);

    // Get address history
    let history = explorer.get_address_history(HistoryQuery {
        address: "0x...".into(),
        chain_id: 1,
        page: 1,
        limit: 50,
    }).await?;

    // Search across chains
    let results = explorer.search("0x...").await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "explorer.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_explorer_t *explorer = hanzo_explorer_new(getenv("HANZO_API_KEY"));

    // Get transaction details
    hanzo_tx_t tx;
    hanzo_explorer_get_tx(explorer, "0x...", 1, &tx);

    printf("Method: %s\\n", tx.decoded);
    printf("Gas used: %llu\\n", tx.gas_used);
    printf("Status: %s\\n", tx.status);

    // Get address history
    hanzo_history_t *history = hanzo_explorer_get_history(
        explorer, "0x...", 1, 1, 50
    );

    // Search across chains
    hanzo_search_result_t *results = hanzo_explorer_search(explorer, "0x...");

    hanzo_explorer_free(explorer);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "explorer.cpp",
          code: `#include <hanzo/blockchain.hpp>
#include <iostream>

int main() {
    auto explorer = hanzo::Explorer(std::getenv("HANZO_API_KEY"));

    // Get transaction details
    auto tx = explorer.getTransaction({
        .hash = "0x...",
        .chainId = 1
    });

    std::cout << "Method: " << tx.decoded << std::endl;
    std::cout << "Gas used: " << tx.gasUsed << std::endl;
    std::cout << "Status: " << tx.status << std::endl;

    // Get address history
    auto history = explorer.getAddressHistory({
        .address = "0x...",
        .chainId = 1,
        .page = 1,
        .limit = 50
    });

    // Search across chains
    auto results = explorer.search("0x...");

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "explorer.rb",
          code: `require 'hanzo/blockchain'

explorer = Hanzo::Explorer.new(api_key: ENV['HANZO_API_KEY'])

# Get transaction details
tx = explorer.get_transaction(
  hash: '0x...',
  chain_id: 1
)

puts "Method: #{tx.decoded}"
puts "Gas used: #{tx.gas_used}"
puts "Status: #{tx.status}"

# Get address history
history = explorer.get_address_history(
  address: '0x...',
  chain_id: 1,
  page: 1,
  limit: 50
)

# Search across chains
results = explorer.search(query: '0x...')

# Set up alerts
explorer.create_alert(
  address: '0x...',
  event: 'transfer',
  threshold: '1000000000000000000',
  webhook: 'https://your-app.com/webhook'
)`,
        },
      ]}
    />
  );
};

export default HanzoExplorer;
