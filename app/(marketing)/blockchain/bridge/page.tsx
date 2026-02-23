'use client'

import React from "react";
import {
  ArrowLeftRight,
  Shield,
  Zap,
  Globe,
  Lock,
  RefreshCw,
  Activity,
  FileCheck,
  Layers,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoBridge = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Bridge"
      tagline="Cross-chain asset transfers, simplified"
      description="Bridge assets between Lux and major blockchain networks securely. Built-in compliance checks, optimized routes, and enterprise-grade reliability."
      icon={ArrowLeftRight}
      accentColor="#06b6d4"
      features={[
        {
          icon: Globe,
          title: "Multi-Chain Bridging",
          description: "Transfer assets between Lux, Ethereum, Polygon, Avalanche, and more.",
        },
        {
          icon: Zap,
          title: "Fast Finality",
          description: "Optimized routes for fastest possible cross-chain settlement.",
        },
        {
          icon: Shield,
          title: "Compliance Checks",
          description: "Built-in screening for sanctioned addresses and suspicious activity.",
        },
        {
          icon: Lock,
          title: "Secure Messaging",
          description: "Verified cross-chain message passing with cryptographic proofs.",
        },
        {
          icon: RefreshCw,
          title: "Automatic Retries",
          description: "Failed transactions automatically retried with gas optimization.",
        },
        {
          icon: Activity,
          title: "Real-Time Tracking",
          description: "Track bridge transactions across chains in real-time.",
        },
        {
          icon: Layers,
          title: "Protocol Integrations",
          description: "Built on Wormhole, LayerZero, and native bridges for best execution.",
        },
        {
          icon: FileCheck,
          title: "Audit Trail",
          description: "Complete history of all bridge transactions for compliance.",
        },
      ]}
      useCases={[
        {
          title: "DeFi Aggregation",
          description: "Access liquidity across chains. Find the best rates and lowest slippage.",
        },
        {
          title: "Portfolio Rebalancing",
          description: "Move assets between chains for yield optimization and risk management.",
        },
        {
          title: "Cross-Chain DAOs",
          description: "Manage treasury assets across multiple chains from a single interface.",
        },
        {
          title: "Exchange Integration",
          description: "Enable deposits and withdrawals from any supported chain.",
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
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "CrossChainVault.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@hanzo/bridge/IHanzoBridge.sol";
import "@hanzo/bridge/IBridgeReceiver.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract CrossChainVault is IBridgeReceiver {
    IHanzoBridge public bridge;
    mapping(bytes32 => bool) public processedMessages;

    constructor(address _bridge) {
        bridge = IHanzoBridge(_bridge);
    }

    // Bridge tokens to another chain
    function bridgeTokens(
        address token,
        uint256 amount,
        uint16 destChainId,
        address recipient
    ) external payable returns (bytes32 messageId) {
        IERC20(token).transferFrom(msg.sender, address(this), amount);
        IERC20(token).approve(address(bridge), amount);

        messageId = bridge.sendTokens{value: msg.value}(
            token,
            amount,
            destChainId,
            abi.encode(recipient)
        );
    }

    // Get bridge quote for fees
    function getBridgeQuote(
        address token,
        uint256 amount,
        uint16 destChainId
    ) external view returns (uint256 fee, uint256 estimatedTime) {
        return bridge.getQuote(token, amount, destChainId);
    }

    // Receive bridged tokens (callback from bridge)
    function onBridgeReceive(
        bytes32 messageId,
        uint16 srcChainId,
        address token,
        uint256 amount,
        bytes calldata payload
    ) external override {
        require(msg.sender == address(bridge), "Only bridge");
        require(!processedMessages[messageId], "Already processed");
        processedMessages[messageId] = true;

        address recipient = abi.decode(payload, (address));
        IERC20(token).transfer(recipient, amount);
    }
}`,
        },
        {
          language: "Node",
          filename: "bridge.ts",
          code: `import { HanzoBridge } from "@hanzo/blockchain";

const bridge = new HanzoBridge({ apiKey: process.env.HANZO_API_KEY });

// Get a quote for bridging
const quote = await bridge.getQuote({
  fromChain: "ethereum",
  toChain: "lux",
  token: "USDC",
  amount: "1000000000", // 1000 USDC
});

console.log(quote.estimatedTime); // "~2 minutes"
console.log(quote.fees); // { bridge: "0.1%", gas: "~$2" }

// Execute the bridge transfer
const tx = await bridge.transfer({
  quoteId: quote.id,
  recipient: "0x...",
  wallet: userWallet,
});

// Track progress
bridge.onStatusChange(tx.id, (status) => {
  console.log(status); // "pending" -> "confirming" -> "completed"
});`,
        },
        {
          language: "Python",
          filename: "bridge.py",
          code: `from hanzo import HanzoBridge
import os

bridge = HanzoBridge(api_key=os.environ["HANZO_API_KEY"])

# Get a quote for bridging
quote = await bridge.get_quote(
    from_chain="ethereum",
    to_chain="lux",
    token="USDC",
    amount="1000000000"  # 1000 USDC
)

print(f"Estimated time: {quote.estimated_time}")
print(f"Fees: {quote.fees}")

# Execute the bridge transfer
tx = await bridge.transfer(
    quote_id=quote.id,
    recipient="0x...",
    wallet=user_wallet
)

# Track progress
async for status in bridge.track_status(tx.id):
    print(f"Status: {status}")  # pending -> confirming -> completed`,
        },
        {
          language: "Go",
          filename: "bridge.go",
          code: `package main

import "github.com/hanzoai/hanzo-go/blockchain"

func main() {
    bridge := blockchain.NewBridge(os.Getenv("HANZO_API_KEY"))

    // Get a quote for bridging
    quote, _ := bridge.GetQuote(ctx, &blockchain.QuoteRequest{
        FromChain: "ethereum",
        ToChain:   "lux",
        Token:     "USDC",
        Amount:    "1000000000", // 1000 USDC
    })

    fmt.Printf("Est. time: %s, Fees: %v\\n", quote.EstimatedTime, quote.Fees)

    // Execute the bridge transfer
    tx, _ := bridge.Transfer(ctx, &blockchain.TransferRequest{
        QuoteID:   quote.ID,
        Recipient: "0x...",
        Wallet:    userWallet,
    })

    // Track progress
    for status := range bridge.TrackStatus(ctx, tx.ID) {
        fmt.Printf("Status: %s\\n", status)
    }
}`,
        },
        {
          language: "Rust",
          filename: "bridge.rs",
          code: `use hanzo_blockchain::Bridge;

#[tokio::main]
async fn main() -> Result<()> {
    let bridge = Bridge::new(std::env::var("HANZO_API_KEY")?);

    // Get a quote for bridging
    let quote = bridge.get_quote(QuoteRequest {
        from_chain: "ethereum",
        to_chain: "lux",
        token: "USDC",
        amount: "1000000000", // 1000 USDC
    }).await?;

    println!("Est. time: {}, Fees: {:?}", quote.estimated_time, quote.fees);

    // Execute the bridge transfer
    let tx = bridge.transfer(TransferRequest {
        quote_id: quote.id,
        recipient: "0x...".into(),
        wallet: user_wallet,
    }).await?;

    // Track progress
    let mut stream = bridge.track_status(tx.id).await?;
    while let Some(status) = stream.next().await {
        println!("Status: {}", status);
    }
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "bridge.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_bridge_t *bridge = hanzo_bridge_new(getenv("HANZO_API_KEY"));

    // Get a quote for bridging
    hanzo_quote_t quote;
    hanzo_bridge_get_quote(bridge, &quote, "ethereum", "lux", "USDC", "1000000000");

    printf("Est. time: %s, Fees: %s\\n", quote.estimated_time, quote.fees);

    // Execute the bridge transfer
    hanzo_tx_t tx;
    hanzo_bridge_transfer(bridge, &tx, quote.id, "0x...");

    // Track progress
    hanzo_status_t status;
    while (hanzo_bridge_track(bridge, tx.id, &status)) {
        printf("Status: %s\\n", status.state);
    }

    hanzo_bridge_free(bridge);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "bridge.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    auto bridge = hanzo::Bridge(std::getenv("HANZO_API_KEY"));

    // Get a quote for bridging
    auto quote = bridge.get_quote({
        .from_chain = "ethereum",
        .to_chain = "lux",
        .token = "USDC",
        .amount = "1000000000"  // 1000 USDC
    });

    std::cout << "Est. time: " << quote.estimated_time << std::endl;

    // Execute the bridge transfer
    auto tx = bridge.transfer({
        .quote_id = quote.id,
        .recipient = "0x..."
    });

    // Track progress
    bridge.track_status(tx.id, [](auto status) {
        std::cout << "Status: " << status << std::endl;
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "bridge.rb",
          code: `require 'hanzo/blockchain'

bridge = Hanzo::Bridge.new(api_key: ENV['HANZO_API_KEY'])

# Get a quote for bridging
quote = bridge.get_quote(
  from_chain: 'ethereum',
  to_chain: 'lux',
  token: 'USDC',
  amount: '1000000000'  # 1000 USDC
)

puts "Est. time: #{quote.estimated_time}, Fees: #{quote.fees}"

# Execute the bridge transfer
tx = bridge.transfer(
  quote_id: quote.id,
  recipient: '0x...',
  wallet: user_wallet
)

# Track progress
bridge.track_status(tx.id) do |status|
  puts "Status: #{status}"  # pending -> confirming -> completed
end`,
        },
      ]}
    />
  );
};

export default HanzoBridge;
