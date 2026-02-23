'use client'

import React from "react";
import {
  Radio,
  Zap,
  Clock,
  Globe,
  Shield,
  RefreshCw,
  Database,
  Activity,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoWebsockets = () => {
  return (
    <BlockchainProductLayout
      name="Websockets"
      tagline="Live blockchain data streaming"
      description="Real-time bidirectional communication with blockchain networks. Subscribe to blocks, transactions, logs, and pending transactions with persistent WebSocket connections."
      icon={Radio}
      accentColor="#a855f7"
      features={[
        {
          icon: Radio,
          title: "Persistent Connections",
          description: "Long-lived WebSocket connections with automatic reconnection.",
        },
        {
          icon: Zap,
          title: "Real-time Streaming",
          description: "Instant delivery of blocks, transactions, and events.",
        },
        {
          icon: Activity,
          title: "Pending Transactions",
          description: "Subscribe to mempool for pending transaction visibility.",
        },
        {
          icon: Clock,
          title: "Low Latency",
          description: "Sub-100ms latency for time-sensitive applications.",
        },
        {
          icon: Globe,
          title: "Multi-chain Streams",
          description: "Stream from multiple chains on a single connection.",
        },
        {
          icon: Shield,
          title: "Authenticated Sessions",
          description: "Secure connections with API key authentication.",
        },
        {
          icon: RefreshCw,
          title: "Auto-reconnect",
          description: "Automatic reconnection with message replay on disconnect.",
        },
        {
          icon: Database,
          title: "Filtered Subscriptions",
          description: "Subscribe to specific addresses, topics, or event types.",
        },
        {
          icon: BarChart3,
          title: "Connection Metrics",
          description: "Monitor connection health and message throughput.",
        },
      ]}
      useCases={[
        {
          title: "Trading Applications",
          description: "Real-time price feeds and order book updates for DEXs.",
        },
        {
          title: "Mempool Monitoring",
          description: "Track pending transactions for MEV and arbitrage.",
        },
        {
          title: "Live Dashboards",
          description: "Real-time blockchain activity and network stats.",
        },
        {
          title: "Bot Infrastructure",
          description: "High-frequency trading and automated strategies.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Scroll", "Linea",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "EventEmitter.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title EventEmitter - Structured events for WebSocket streaming
/// @notice Emit indexed events for efficient WebSocket subscriptions
contract EventEmitter {
    // Indexed events for real-time streaming via WebSockets
    event BlockProcessed(
        uint256 indexed blockNumber,
        bytes32 indexed blockHash,
        uint256 timestamp,
        uint256 gasUsed
    );

    event TransactionDetected(
        bytes32 indexed txHash,
        address indexed from,
        address indexed to,
        uint256 value,
        uint256 gasPrice
    );

    event ContractEvent(
        address indexed contractAddress,
        bytes32 indexed eventSignature,
        bytes data,
        uint256 indexed logIndex
    );

    // Emit block processing event for indexers
    function emitBlockProcessed(
        uint256 _blockNumber,
        bytes32 _blockHash,
        uint256 _gasUsed
    ) external {
        emit BlockProcessed(_blockNumber, _blockHash, block.timestamp, _gasUsed);
    }

    // Emit transaction event for mempool tracking
    function emitTransaction(
        bytes32 _txHash,
        address _from,
        address _to,
        uint256 _value,
        uint256 _gasPrice
    ) external {
        emit TransactionDetected(_txHash, _from, _to, _value, _gasPrice);
    }

    // Emit contract event for log subscriptions
    function emitContractEvent(
        address _contract,
        bytes32 _eventSig,
        bytes calldata _data,
        uint256 _logIndex
    ) external {
        emit ContractEvent(_contract, _eventSig, _data, _logIndex);
    }
}`,
        },
        {
          language: "Node",
          filename: "websockets.ts",
          code: `import { HanzoWebsocket } from "@hanzo/blockchain";

const ws = new HanzoWebsocket({
  apiKey: process.env.HANZO_API_KEY,
});

// Subscribe to new blocks
ws.subscribe("newHeads", { chain: "ethereum" }, (block) => {
  console.log("New block:", block.number);
});

// Subscribe to pending transactions
ws.subscribe("pendingTransactions", { chain: "ethereum" }, (tx) => {
  console.log("Pending:", tx.hash);
});

// Subscribe to contract events
ws.subscribe("logs", {
  chain: "ethereum",
  address: "0x...",
  topics: ["0x..."],
}, (log) => {
  console.log("Event:", log);
});`,
        },
        {
          language: "Python",
          filename: "websockets.py",
          code: `import asyncio
from hanzo.blockchain import HanzoWebsocket

async def main():
    ws = HanzoWebsocket(api_key=os.environ["HANZO_API_KEY"])

    # Subscribe to new blocks
    async def on_block(block):
        print(f"New block: {block['number']}")

    await ws.subscribe("newHeads", {"chain": "ethereum"}, on_block)

    # Subscribe to pending transactions
    async def on_pending(tx):
        print(f"Pending: {tx['hash']}")

    await ws.subscribe("pendingTransactions", {"chain": "ethereum"}, on_pending)

    # Subscribe to contract events
    async def on_log(log):
        print(f"Event: {log}")

    await ws.subscribe("logs", {
        "chain": "ethereum",
        "address": "0x...",
        "topics": ["0x..."],
    }, on_log)

    # Keep connection alive
    await ws.run_forever()

asyncio.run(main())`,
        },
        {
          language: "Go",
          filename: "websockets.go",
          code: `package main

import (
    "fmt"
    "os"

    "github.com/hanzoai/blockchain-go"
)

func main() {
    ws := blockchain.NewWebsocket(blockchain.Config{
        APIKey: os.Getenv("HANZO_API_KEY"),
    })

    // Subscribe to new blocks
    ws.Subscribe("newHeads", blockchain.Params{
        "chain": "ethereum",
    }, func(block blockchain.Block) {
        fmt.Printf("New block: %d\\n", block.Number)
    })

    // Subscribe to pending transactions
    ws.Subscribe("pendingTransactions", blockchain.Params{
        "chain": "ethereum",
    }, func(tx blockchain.Transaction) {
        fmt.Printf("Pending: %s\\n", tx.Hash)
    })

    // Subscribe to contract events
    ws.Subscribe("logs", blockchain.Params{
        "chain":   "ethereum",
        "address": "0x...",
        "topics":  []string{"0x..."},
    }, func(log blockchain.Log) {
        fmt.Printf("Event: %+v\\n", log)
    })

    ws.RunForever()
}`,
        },
        {
          language: "Rust",
          filename: "websockets.rs",
          code: `use hanzo_blockchain::{HanzoWebsocket, Config, Subscription};
use std::env;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let ws = HanzoWebsocket::new(Config {
        api_key: env::var("HANZO_API_KEY")?,
    }).await?;

    // Subscribe to new blocks
    ws.subscribe("newHeads", serde_json::json!({
        "chain": "ethereum"
    }), |block| {
        println!("New block: {}", block["number"]);
    }).await?;

    // Subscribe to pending transactions
    ws.subscribe("pendingTransactions", serde_json::json!({
        "chain": "ethereum"
    }), |tx| {
        println!("Pending: {}", tx["hash"]);
    }).await?;

    // Subscribe to contract events
    ws.subscribe("logs", serde_json::json!({
        "chain": "ethereum",
        "address": "0x...",
        "topics": ["0x..."]
    }), |log| {
        println!("Event: {:?}", log);
    }).await?;

    ws.run_forever().await
}`,
        },
        {
          language: "C",
          filename: "websockets.c",
          code: `#include <stdio.h>
#include <stdlib.h>
#include <hanzo/blockchain.h>

void on_block(hanzo_block_t *block) {
    printf("New block: %llu\\n", block->number);
}

void on_pending(hanzo_transaction_t *tx) {
    printf("Pending: %s\\n", tx->hash);
}

void on_log(hanzo_log_t *log) {
    printf("Event: %s\\n", log->data);
}

int main() {
    hanzo_ws_t *ws = hanzo_ws_new(getenv("HANZO_API_KEY"));

    // Subscribe to new blocks
    hanzo_ws_subscribe(ws, "newHeads",
        "{\\"chain\\": \\"ethereum\\"}", on_block);

    // Subscribe to pending transactions
    hanzo_ws_subscribe(ws, "pendingTransactions",
        "{\\"chain\\": \\"ethereum\\"}", on_pending);

    // Subscribe to contract events
    hanzo_ws_subscribe(ws, "logs",
        "{\\"chain\\": \\"ethereum\\", "
        "\\"address\\": \\"0x...\\", "
        "\\"topics\\": [\\"0x...\\"]}",
        on_log);

    hanzo_ws_run_forever(ws);
    hanzo_ws_free(ws);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "websockets.cpp",
          code: `#include <iostream>
#include <hanzo/blockchain.hpp>

int main() {
    auto ws = hanzo::Websocket({
        .api_key = std::getenv("HANZO_API_KEY")
    });

    // Subscribe to new blocks
    ws.subscribe("newHeads", {{"chain", "ethereum"}},
        [](const hanzo::Block& block) {
            std::cout << "New block: " << block.number << std::endl;
        });

    // Subscribe to pending transactions
    ws.subscribe("pendingTransactions", {{"chain", "ethereum"}},
        [](const hanzo::Transaction& tx) {
            std::cout << "Pending: " << tx.hash << std::endl;
        });

    // Subscribe to contract events
    ws.subscribe("logs", {
        {"chain", "ethereum"},
        {"address", "0x..."},
        {"topics", {"0x..."}}
    }, [](const hanzo::Log& log) {
        std::cout << "Event: " << log << std::endl;
    });

    ws.run_forever();
    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "websockets.rb",
          code: `require 'hanzo/blockchain'

ws = Hanzo::Websocket.new(api_key: ENV['HANZO_API_KEY'])

# Subscribe to new blocks
ws.subscribe('newHeads', chain: 'ethereum') do |block|
  puts "New block: #{block['number']}"
end

# Subscribe to pending transactions
ws.subscribe('pendingTransactions', chain: 'ethereum') do |tx|
  puts "Pending: #{tx['hash']}"
end

# Subscribe to contract events
ws.subscribe('logs',
  chain: 'ethereum',
  address: '0x...',
  topics: ['0x...']
) do |log|
  puts "Event: #{log}"
end

ws.run_forever`,
        },
      ]}
    />
  );
};

export default HanzoWebsockets;
