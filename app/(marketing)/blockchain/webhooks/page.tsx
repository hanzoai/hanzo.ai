'use client'

import React from "react";
import {
  Bell,
  Zap,
  Shield,
  Globe,
  RefreshCw,
  Database,
  Clock,
  Settings,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoWebhooks = () => {
  return (
    <BlockchainProductLayout
      name="Webhooks"
      tagline="Real-time blockchain event notifications"
      description="Get instant notifications for on-chain events. Subscribe to transfers, contract events, address activity, and more with reliable webhook delivery."
      icon={Bell}
      accentColor="#f97316"
      features={[
        {
          icon: Bell,
          title: "Event Subscriptions",
          description: "Subscribe to transfers, logs, contract events, and more.",
        },
        {
          icon: Zap,
          title: "Instant Delivery",
          description: "Sub-second event detection and webhook dispatch.",
        },
        {
          icon: Shield,
          title: "Signed Payloads",
          description: "HMAC signatures for webhook authenticity verification.",
        },
        {
          icon: RefreshCw,
          title: "Automatic Retries",
          description: "Failed deliveries retry with exponential backoff.",
        },
        {
          icon: Globe,
          title: "Multi-chain",
          description: "Monitor events across all supported networks.",
        },
        {
          icon: Settings,
          title: "Filters & Conditions",
          description: "Fine-grained filtering by address, topic, or value.",
        },
        {
          icon: Database,
          title: "Event History",
          description: "Query and replay past webhook deliveries.",
        },
        {
          icon: Clock,
          title: "Block Confirmations",
          description: "Configure confirmation count for finality.",
        },
        {
          icon: BarChart3,
          title: "Delivery Analytics",
          description: "Monitor success rates and latency metrics.",
        },
      ]}
      useCases={[
        {
          title: "Payment Processing",
          description: "Instant confirmation of crypto deposits and payments.",
        },
        {
          title: "DeFi Monitoring",
          description: "Track liquidations, swaps, and position changes.",
        },
        {
          title: "NFT Notifications",
          description: "Alert users on sales, bids, and transfers.",
        },
        {
          title: "Security Alerts",
          description: "Monitor for suspicious contract interactions.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Scroll", "Linea",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "WebhookTrigger.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@hanzo/webhooks/IHanzoWebhooks.sol";

/// @title WebhookTrigger - Emit events for webhook notifications
/// @notice Structured events for reliable webhook delivery
contract WebhookTrigger {
    // Events optimized for webhook subscriptions
    event PaymentReceived(
        address indexed from,
        address indexed token,
        uint256 amount,
        bytes32 indexed orderId,
        uint256 timestamp
    );

    event LiquidationAlert(
        address indexed user,
        address indexed market,
        uint256 collateralValue,
        uint256 debtValue,
        uint256 indexed blockNumber
    );

    event NFTActivity(
        address indexed collection,
        uint256 indexed tokenId,
        address from,
        address to,
        uint256 price,
        string activityType // "sale", "bid", "transfer"
    );

    event SecurityAlert(
        address indexed target,
        bytes32 indexed alertType,
        address triggeredBy,
        bytes data
    );

    // Emit payment for webhook notification
    function emitPayment(
        address token,
        uint256 amount,
        bytes32 orderId
    ) external {
        emit PaymentReceived(msg.sender, token, amount, orderId, block.timestamp);
    }

    // Emit liquidation alert for DeFi monitoring
    function emitLiquidationAlert(
        address user,
        address market,
        uint256 collateralValue,
        uint256 debtValue
    ) external {
        emit LiquidationAlert(user, market, collateralValue, debtValue, block.number);
    }

    // Emit NFT activity for marketplace webhooks
    function emitNFTActivity(
        address collection,
        uint256 tokenId,
        address from,
        address to,
        uint256 price,
        string calldata activityType
    ) external {
        emit NFTActivity(collection, tokenId, from, to, price, activityType);
    }
}`,
        },
        {
          language: "Node",
          filename: "webhooks.ts",
          code: `import { HanzoWebhooks } from "@hanzo/blockchain";

const webhooks = new HanzoWebhooks({
  apiKey: process.env.HANZO_API_KEY,
});

// Create a webhook subscription
const subscription = await webhooks.create({
  url: "https://api.myapp.com/webhook",
  events: ["transfer", "contract_event"],
  chains: ["ethereum", "polygon"],
  filters: {
    address: "0x...",
    minValue: "1000000000000000000", // 1 ETH
  },
  confirmations: 12,
});

// Verify webhook signature
const isValid = webhooks.verifySignature({
  payload: req.body,
  signature: req.headers["x-hanzo-signature"],
  secret: process.env.WEBHOOK_SECRET,
});`,
        },
        {
          language: "Python",
          filename: "webhooks.py",
          code: `from hanzo_blockchain import HanzoWebhooks

webhooks = HanzoWebhooks(api_key=os.environ["HANZO_API_KEY"])

# Create a webhook subscription
subscription = webhooks.create(
    url="https://api.myapp.com/webhook",
    events=["transfer", "contract_event"],
    chains=["ethereum", "polygon"],
    filters={
        "address": "0x...",
        "min_value": "1000000000000000000",  # 1 ETH
    },
    confirmations=12,
)

# Verify webhook signature
is_valid = webhooks.verify_signature(
    payload=request.data,
    signature=request.headers["X-Hanzo-Signature"],
    secret=os.environ["WEBHOOK_SECRET"],
)`,
        },
        {
          language: "Go",
          filename: "webhooks.go",
          code: `package main

import (
    "os"
    hanzo "github.com/hanzoai/blockchain-go"
)

func main() {
    webhooks := hanzo.NewWebhooks(os.Getenv("HANZO_API_KEY"))

    // Create a webhook subscription
    subscription, err := webhooks.Create(&hanzo.WebhookConfig{
        URL:    "https://api.myapp.com/webhook",
        Events: []string{"transfer", "contract_event"},
        Chains: []string{"ethereum", "polygon"},
        Filters: &hanzo.WebhookFilters{
            Address:  "0x...",
            MinValue: "1000000000000000000", // 1 ETH
        },
        Confirmations: 12,
    })

    // Verify webhook signature
    isValid := webhooks.VerifySignature(
        payload,
        r.Header.Get("X-Hanzo-Signature"),
        os.Getenv("WEBHOOK_SECRET"),
    )
}`,
        },
        {
          language: "Rust",
          filename: "webhooks.rs",
          code: `use hanzo_blockchain::{HanzoWebhooks, WebhookConfig, WebhookFilters};
use std::env;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let webhooks = HanzoWebhooks::new(&env::var("HANZO_API_KEY")?);

    // Create a webhook subscription
    let subscription = webhooks.create(WebhookConfig {
        url: "https://api.myapp.com/webhook".into(),
        events: vec!["transfer".into(), "contract_event".into()],
        chains: vec!["ethereum".into(), "polygon".into()],
        filters: Some(WebhookFilters {
            address: Some("0x...".into()),
            min_value: Some("1000000000000000000".into()), // 1 ETH
        }),
        confirmations: 12,
    }).await?;

    // Verify webhook signature
    let is_valid = webhooks.verify_signature(
        &payload,
        &headers["x-hanzo-signature"],
        &env::var("WEBHOOK_SECRET")?,
    );
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "webhooks.c",
          code: `#include <hanzo/blockchain.h>
#include <stdlib.h>

int main() {
    hanzo_webhooks_t *webhooks = hanzo_webhooks_new(getenv("HANZO_API_KEY"));

    // Create a webhook subscription
    hanzo_webhook_config_t config = {
        .url = "https://api.myapp.com/webhook",
        .events = (const char*[]){"transfer", "contract_event"},
        .events_count = 2,
        .chains = (const char*[]){"ethereum", "polygon"},
        .chains_count = 2,
        .filter_address = "0x...",
        .filter_min_value = "1000000000000000000", // 1 ETH
        .confirmations = 12,
    };
    hanzo_subscription_t *subscription = hanzo_webhooks_create(webhooks, &config);

    // Verify webhook signature
    int is_valid = hanzo_webhooks_verify_signature(
        webhooks, payload, signature, getenv("WEBHOOK_SECRET")
    );

    hanzo_subscription_free(subscription);
    hanzo_webhooks_free(webhooks);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "webhooks.cpp",
          code: `#include <hanzo/blockchain.hpp>
#include <cstdlib>

int main() {
    auto webhooks = hanzo::Webhooks(std::getenv("HANZO_API_KEY"));

    // Create a webhook subscription
    auto subscription = webhooks.create({
        .url = "https://api.myapp.com/webhook",
        .events = {"transfer", "contract_event"},
        .chains = {"ethereum", "polygon"},
        .filters = {
            .address = "0x...",
            .min_value = "1000000000000000000", // 1 ETH
        },
        .confirmations = 12,
    });

    // Verify webhook signature
    bool is_valid = webhooks.verify_signature(
        payload,
        headers["X-Hanzo-Signature"],
        std::getenv("WEBHOOK_SECRET")
    );

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "webhooks.rb",
          code: `require 'hanzo/blockchain'

webhooks = Hanzo::Webhooks.new(api_key: ENV['HANZO_API_KEY'])

# Create a webhook subscription
subscription = webhooks.create(
  url: 'https://api.myapp.com/webhook',
  events: ['transfer', 'contract_event'],
  chains: ['ethereum', 'polygon'],
  filters: {
    address: '0x...',
    min_value: '1000000000000000000' # 1 ETH
  },
  confirmations: 12
)

# Verify webhook signature
is_valid = webhooks.verify_signature(
  payload: request.body.read,
  signature: request.headers['X-Hanzo-Signature'],
  secret: ENV['WEBHOOK_SECRET']
)`,
        },
      ]}
    />
  );
};

export default HanzoWebhooks;
