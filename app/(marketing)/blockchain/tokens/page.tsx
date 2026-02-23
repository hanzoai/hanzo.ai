'use client'

import React from "react";
import {
  Coins,
  Search,
  BarChart3,
  Clock,
  Globe,
  Shield,
  Zap,
  RefreshCw,
  Database,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoTokens = () => {
  return (
    <BlockchainProductLayout
      name="Token API"
      tagline="ERC-20 token data, balances & prices"
      description="Comprehensive token data API for all EVM chains. Get real-time balances, historical prices, token metadata, and ownership across 100+ networks with a single API call."
      icon={Coins}
      accentColor="#22c55e"
      features={[
        {
          icon: Coins,
          title: "Multi-chain Balances",
          description: "Query token balances across all EVM chains in one request.",
        },
        {
          icon: BarChart3,
          title: "Real-time Prices",
          description: "Live token prices from multiple DEXs and aggregators.",
        },
        {
          icon: Database,
          title: "Token Metadata",
          description: "Name, symbol, decimals, logos, and contract info.",
        },
        {
          icon: Clock,
          title: "Historical Data",
          description: "Price history, balance snapshots, and transfer history.",
        },
        {
          icon: Search,
          title: "Token Discovery",
          description: "Search and discover tokens by name, symbol, or address.",
        },
        {
          icon: Shield,
          title: "Spam Detection",
          description: "Automatic filtering of spam tokens and scam contracts.",
        },
        {
          icon: Zap,
          title: "Fast Response",
          description: "Sub-100ms response times with global CDN caching.",
        },
        {
          icon: Globe,
          title: "100+ Chains",
          description: "Support for Ethereum, Polygon, Arbitrum, Base, and more.",
        },
        {
          icon: RefreshCw,
          title: "Webhook Updates",
          description: "Get notified on balance changes and transfers.",
        },
      ]}
      useCases={[
        {
          title: "Portfolio Trackers",
          description: "Build multi-chain portfolio apps with real-time valuations.",
        },
        {
          title: "Wallet Applications",
          description: "Display token balances and transaction history.",
        },
        {
          title: "DeFi Dashboards",
          description: "Track positions, yields, and token performance.",
        },
        {
          title: "Trading Bots",
          description: "Real-time price feeds for automated trading strategies.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "Fantom", "zkSync", "Linea",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "TokenVault.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@hanzo/tokens/ITokenRegistry.sol";

contract MultiTokenVault {
    using SafeERC20 for IERC20;

    ITokenRegistry public registry;
    mapping(address => mapping(address => uint256)) public balances;

    constructor(address _registry) {
        registry = ITokenRegistry(_registry);
    }

    // Deposit any registered token
    function deposit(address token, uint256 amount) external {
        require(registry.isVerified(token), "Token not verified");
        require(!registry.isSpam(token), "Spam token");

        IERC20(token).safeTransferFrom(msg.sender, address(this), amount);
        balances[msg.sender][token] += amount;
    }

    // Get token metadata from registry
    function getTokenInfo(address token) external view returns (
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 price
    ) {
        return registry.getTokenInfo(token);
    }

    // Batch check balances across tokens
    function getPortfolioValue(address user, address[] calldata tokens)
        external view returns (uint256 totalValue)
    {
        for (uint i = 0; i < tokens.length; i++) {
            (,,, uint256 price) = registry.getTokenInfo(tokens[i]);
            totalValue += balances[user][tokens[i]] * price / 1e18;
        }
    }
}`,
        },
        {
          language: "Node",
          filename: "tokens.ts",
          code: `import { HanzoTokens } from "@hanzo/blockchain";

const tokens = new HanzoTokens({
  apiKey: process.env.HANZO_API_KEY,
});

// Get all token balances for an address
const balances = await tokens.getBalances({
  address: "0x...",
  chains: ["ethereum", "polygon", "arbitrum"],
  includeSpam: false,
});

// Get token price with history
const price = await tokens.getPrice({
  token: "0x...",
  chain: "ethereum",
  currency: "USD",
  history: "24h",
});

// Search for tokens
const results = await tokens.search({
  query: "USDC",
  chains: ["ethereum", "polygon"],
});`,
        },
        {
          language: "Python",
          filename: "tokens.py",
          code: `from hanzo import HanzoTokens

tokens = HanzoTokens(api_key=os.environ["HANZO_API_KEY"])

# Get all token balances for an address
balances = await tokens.get_balances(
    address="0x...",
    chains=["ethereum", "polygon", "arbitrum"],
    include_spam=False,
)

# Get token price with history
price = await tokens.get_price(
    token="0x...",
    chain="ethereum",
    currency="USD",
    history="24h",
)

# Search for tokens
results = await tokens.search(
    query="USDC",
    chains=["ethereum", "polygon"],
)`,
        },
        {
          language: "Go",
          filename: "tokens.go",
          code: `package main

import "github.com/hanzoai/hanzo-go/blockchain"

func main() {
    tokens := blockchain.NewTokensClient(os.Getenv("HANZO_API_KEY"))

    // Get all token balances for an address
    balances, _ := tokens.GetBalances(ctx, blockchain.BalanceRequest{
        Address:     "0x...",
        Chains:      []string{"ethereum", "polygon", "arbitrum"},
        IncludeSpam: false,
    })

    // Get token price with history
    price, _ := tokens.GetPrice(ctx, blockchain.PriceRequest{
        Token:    "0x...",
        Chain:    "ethereum",
        Currency: "USD",
        History:  "24h",
    })

    // Search for tokens
    results, _ := tokens.Search(ctx, blockchain.SearchRequest{
        Query:  "USDC",
        Chains: []string{"ethereum", "polygon"},
    })
}`,
        },
        {
          language: "Rust",
          filename: "tokens.rs",
          code: `use hanzo_blockchain::HanzoTokens;

#[tokio::main]
async fn main() -> Result<()> {
    let tokens = HanzoTokens::new(std::env::var("HANZO_API_KEY")?);

    // Get all token balances for an address
    let balances = tokens.get_balances(BalanceRequest {
        address: "0x...".into(),
        chains: vec!["ethereum", "polygon", "arbitrum"],
        include_spam: false,
    }).await?;

    // Get token price with history
    let price = tokens.get_price(PriceRequest {
        token: "0x...".into(),
        chain: "ethereum",
        currency: "USD",
        history: "24h",
    }).await?;

    // Search for tokens
    let results = tokens.search(SearchRequest {
        query: "USDC".into(),
        chains: vec!["ethereum", "polygon"],
    }).await?;
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "tokens.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_tokens_t *tokens = hanzo_tokens_new(getenv("HANZO_API_KEY"));

    // Get all token balances for an address
    const char *chains[] = {"ethereum", "polygon", "arbitrum"};
    hanzo_balances_t *balances = hanzo_tokens_get_balances(
        tokens, "0x...", chains, 3, false
    );

    // Get token price with history
    hanzo_price_t *price = hanzo_tokens_get_price(
        tokens, "0x...", "ethereum", "USD", "24h"
    );

    // Search for tokens
    const char *search_chains[] = {"ethereum", "polygon"};
    hanzo_search_result_t *results = hanzo_tokens_search(
        tokens, "USDC", search_chains, 2
    );

    hanzo_balances_free(balances);
    hanzo_price_free(price);
    hanzo_search_free(results);
    hanzo_tokens_free(tokens);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "tokens.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    auto tokens = hanzo::Tokens(std::getenv("HANZO_API_KEY"));

    // Get all token balances for an address
    auto balances = tokens.getBalances({
        .address = "0x...",
        .chains = {"ethereum", "polygon", "arbitrum"},
        .includeSpam = false,
    });

    // Get token price with history
    auto price = tokens.getPrice({
        .token = "0x...",
        .chain = "ethereum",
        .currency = "USD",
        .history = "24h",
    });

    // Search for tokens
    auto results = tokens.search({
        .query = "USDC",
        .chains = {"ethereum", "polygon"},
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "tokens.rb",
          code: `require 'hanzo/blockchain'

tokens = Hanzo::Tokens.new(api_key: ENV['HANZO_API_KEY'])

# Get all token balances for an address
balances = tokens.get_balances(
  address: '0x...',
  chains: ['ethereum', 'polygon', 'arbitrum'],
  include_spam: false
)

# Get token price with history
price = tokens.get_price(
  token: '0x...',
  chain: 'ethereum',
  currency: 'USD',
  history: '24h'
)

# Search for tokens
results = tokens.search(
  query: 'USDC',
  chains: ['ethereum', 'polygon']
)`,
        },
      ]}
    />
  );
};

export default HanzoTokens;
