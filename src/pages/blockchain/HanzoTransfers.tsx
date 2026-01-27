import React from "react";
import {
  ArrowLeftRight,
  Clock,
  Search,
  Database,
  Globe,
  Bell,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoTransfers = () => {
  return (
    <BlockchainProductLayout
      name="Transfers API"
      tagline="Track token & NFT transfers in real-time"
      description="Monitor and query all token transfers across chains. Get transfer history, pending transactions, and real-time notifications for any address or contract."
      icon={ArrowLeftRight}
      accentColor="#06b6d4"
      features={[
        {
          icon: ArrowLeftRight,
          title: "All Transfer Types",
          description: "Native tokens, ERC-20, ERC-721, and ERC-1155 transfers.",
        },
        {
          icon: Clock,
          title: "Historical Data",
          description: "Query transfer history from genesis to present.",
        },
        {
          icon: Bell,
          title: "Real-time Alerts",
          description: "Webhooks for instant transfer notifications.",
        },
        {
          icon: Search,
          title: "Advanced Filtering",
          description: "Filter by token, address, amount, or time range.",
        },
        {
          icon: Database,
          title: "Decoded Data",
          description: "Human-readable transfer details with token metadata.",
        },
        {
          icon: Globe,
          title: "Multi-chain",
          description: "Unified API for transfers across 100+ chains.",
        },
        {
          icon: Zap,
          title: "Low Latency",
          description: "Sub-second transfer detection and notification.",
        },
        {
          icon: Shield,
          title: "Internal Transfers",
          description: "Track internal transactions and contract interactions.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          description: "Aggregate transfer volume and flow analytics.",
        },
      ]}
      useCases={[
        {
          title: "Transaction Monitoring",
          description: "Track deposits, withdrawals, and suspicious activity.",
        },
        {
          title: "Portfolio Updates",
          description: "Real-time balance updates as transfers happen.",
        },
        {
          title: "Compliance Tools",
          description: "AML monitoring and transaction screening.",
        },
        {
          title: "Notification Services",
          description: "Alert users on incoming transfers and NFT activity.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Scroll", "Linea",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "TransferMonitor.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/// @title TransferMonitor - Track and log transfers for indexing
contract TransferMonitor {
    // Indexed transfer events for efficient querying
    event TokenTransfer(
        address indexed token,
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 timestamp
    );

    event NFTTransfer(
        address indexed collection,
        uint256 indexed tokenId,
        address indexed from,
        address to,
        uint256 timestamp
    );

    event NativeTransfer(
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 indexed blockNumber
    );

    // Log ERC20 transfer with metadata
    function logTokenTransfer(
        address token,
        address from,
        address to,
        uint256 amount
    ) external {
        emit TokenTransfer(token, from, to, amount, block.timestamp);
    }

    // Log NFT transfer
    function logNFTTransfer(
        address collection,
        uint256 tokenId,
        address from,
        address to
    ) external {
        emit NFTTransfer(collection, tokenId, from, to, block.timestamp);
    }

    // Transfer ETH and emit event
    function transferWithLog(address payable to) external payable {
        to.transfer(msg.value);
        emit NativeTransfer(msg.sender, to, msg.value, block.number);
    }

    // Batch transfer ERC20 tokens
    function batchTransfer(
        address token,
        address[] calldata recipients,
        uint256[] calldata amounts
    ) external {
        require(recipients.length == amounts.length, "Length mismatch");
        for (uint256 i = 0; i < recipients.length; i++) {
            IERC20(token).transferFrom(msg.sender, recipients[i], amounts[i]);
            emit TokenTransfer(token, msg.sender, recipients[i], amounts[i], block.timestamp);
        }
    }
}`,
        },
        {
          language: "Node",
          filename: "transfers.ts",
          code: `import { HanzoTransfers } from "@hanzo/blockchain";

const transfers = new HanzoTransfers({
  apiKey: process.env.HANZO_API_KEY,
});

// Get transfer history for an address
const history = await transfers.getHistory({
  address: "0x...",
  chains: ["ethereum", "polygon"],
  type: ["native", "erc20"],
  limit: 100,
});

// Subscribe to real-time transfers
transfers.subscribe({
  address: "0x...",
  chains: ["ethereum"],
  onTransfer: (transfer) => {
    console.log(\`\${transfer.from} -> \${transfer.to}: \${transfer.value}\`);
  },
});

// Get pending transfers
const pending = await transfers.getPending({
  address: "0x...",
  chain: "ethereum",
});`,
        },
        {
          language: "Python",
          filename: "transfers.py",
          code: `from hanzo_blockchain import HanzoTransfers

transfers = HanzoTransfers(api_key=os.environ["HANZO_API_KEY"])

# Get transfer history for an address
history = transfers.get_history(
    address="0x...",
    chains=["ethereum", "polygon"],
    type=["native", "erc20"],
    limit=100,
)

# Subscribe to real-time transfers
def on_transfer(transfer):
    print(f"{transfer.from_addr} -> {transfer.to_addr}: {transfer.value}")

transfers.subscribe(
    address="0x...",
    chains=["ethereum"],
    on_transfer=on_transfer,
)

# Get pending transfers
pending = transfers.get_pending(address="0x...", chain="ethereum")`,
        },
        {
          language: "Go",
          filename: "transfers.go",
          code: `package main

import (
    "fmt"
    "os"
    hanzo "github.com/hanzoai/blockchain-go"
)

func main() {
    client := hanzo.NewTransfersClient(os.Getenv("HANZO_API_KEY"))

    // Get transfer history for an address
    history, _ := client.GetHistory(&hanzo.HistoryParams{
        Address: "0x...",
        Chains:  []string{"ethereum", "polygon"},
        Type:    []string{"native", "erc20"},
        Limit:   100,
    })

    // Subscribe to real-time transfers
    client.Subscribe(&hanzo.SubscribeParams{
        Address: "0x...",
        Chains:  []string{"ethereum"},
        OnTransfer: func(t *hanzo.Transfer) {
            fmt.Printf("%s -> %s: %s\\n", t.From, t.To, t.Value)
        },
    })

    // Get pending transfers
    pending, _ := client.GetPending("0x...", "ethereum")
}`,
        },
        {
          language: "Rust",
          filename: "transfers.rs",
          code: `use hanzo_blockchain::{TransfersClient, HistoryParams, SubscribeParams};
use std::env;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = TransfersClient::new(env::var("HANZO_API_KEY")?);

    // Get transfer history for an address
    let history = client.get_history(HistoryParams {
        address: "0x...".to_string(),
        chains: vec!["ethereum", "polygon"],
        transfer_type: vec!["native", "erc20"],
        limit: 100,
    }).await?;

    // Subscribe to real-time transfers
    client.subscribe(SubscribeParams {
        address: "0x...".to_string(),
        chains: vec!["ethereum"],
        on_transfer: |transfer| {
            println!("{} -> {}: {}", transfer.from, transfer.to, transfer.value);
        },
    }).await?;

    // Get pending transfers
    let pending = client.get_pending("0x...", "ethereum").await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "transfers.c",
          code: `#include <stdio.h>
#include <stdlib.h>
#include "hanzo_blockchain.h"

void on_transfer(hanzo_transfer_t *transfer) {
    printf("%s -> %s: %s\\n", transfer->from, transfer->to, transfer->value);
}

int main() {
    hanzo_transfers_t *client = hanzo_transfers_new(getenv("HANZO_API_KEY"));

    // Get transfer history for an address
    const char *chains[] = {"ethereum", "polygon"};
    const char *types[] = {"native", "erc20"};
    hanzo_history_t *history = hanzo_get_history(client, &(hanzo_history_params_t){
        .address = "0x...",
        .chains = chains,
        .chains_len = 2,
        .type = types,
        .type_len = 2,
        .limit = 100
    });

    // Subscribe to real-time transfers
    hanzo_subscribe(client, &(hanzo_subscribe_params_t){
        .address = "0x...",
        .chains = (const char*[]){"ethereum"},
        .chains_len = 1,
        .on_transfer = on_transfer
    });

    // Get pending transfers
    hanzo_pending_t *pending = hanzo_get_pending(client, "0x...", "ethereum");

    hanzo_transfers_free(client);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "transfers.cpp",
          code: `#include <iostream>
#include <hanzo/blockchain.hpp>

int main() {
    auto client = hanzo::TransfersClient(std::getenv("HANZO_API_KEY"));

    // Get transfer history for an address
    auto history = client.getHistory({
        .address = "0x...",
        .chains = {"ethereum", "polygon"},
        .type = {"native", "erc20"},
        .limit = 100
    });

    // Subscribe to real-time transfers
    client.subscribe({
        .address = "0x...",
        .chains = {"ethereum"},
        .onTransfer = [](const hanzo::Transfer& transfer) {
            std::cout << transfer.from << " -> " << transfer.to
                      << ": " << transfer.value << std::endl;
        }
    });

    // Get pending transfers
    auto pending = client.getPending("0x...", "ethereum");

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "transfers.rb",
          code: `require 'hanzo/blockchain'

client = Hanzo::Transfers.new(api_key: ENV['HANZO_API_KEY'])

# Get transfer history for an address
history = client.get_history(
  address: '0x...',
  chains: ['ethereum', 'polygon'],
  type: ['native', 'erc20'],
  limit: 100
)

# Subscribe to real-time transfers
client.subscribe(
  address: '0x...',
  chains: ['ethereum']
) do |transfer|
  puts "#{transfer.from} -> #{transfer.to}: #{transfer.value}"
end

# Get pending transfers
pending = client.get_pending(address: '0x...', chain: 'ethereum')`,
        },
      ]}
    />
  );
};

export default HanzoTransfers;
