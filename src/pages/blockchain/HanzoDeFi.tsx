import React from "react";
import {
  TrendingUp,
  Coins,
  ArrowLeftRight,
  Percent,
  Shield,
  Zap,
  BarChart3,
  Wallet,
  Gift,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoDeFi = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo DeFi"
      tagline="DeFi building blocks for any application"
      description="Modular DeFi infrastructure for staking, lending, swapping, and yield aggregation. Gasless transactions, stablecoin APIs, and pre-built strategies—all on the Lux Network."
      icon={TrendingUp}
      accentColor="#f97316"
      features={[
        {
          icon: Coins,
          title: "Staking APIs",
          description: "Enable token staking with customizable lock periods and reward distributions.",
        },
        {
          icon: Percent,
          title: "Lending & Borrowing",
          description: "Integrate money market protocols for lending, borrowing, and collateralization.",
        },
        {
          icon: ArrowLeftRight,
          title: "Swap Aggregation",
          description: "Find best swap rates across DEXs with single API call.",
        },
        {
          icon: TrendingUp,
          title: "Yield Strategies",
          description: "Pre-built yield optimization strategies. Auto-compound and rebalance.",
        },
        {
          icon: Zap,
          title: "Gasless Transactions",
          description: "Sponsor gas for your users. Pay in stablecoins, settle on-chain.",
        },
        {
          icon: Shield,
          title: "Risk Management",
          description: "Position monitoring, liquidation alerts, and automated risk controls.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          description: "Track TVL, APY, user positions, and protocol health in real-time.",
        },
        {
          icon: Wallet,
          title: "Portfolio APIs",
          description: "Query user positions, historical returns, and performance across protocols.",
        },
        {
          icon: Gift,
          title: "Rewards Distribution",
          description: "Distribute tokens, points, or NFTs as rewards. Merkle drop support.",
        },
      ]}
      useCases={[
        {
          title: "Yield Aggregators",
          description: "Build auto-compounding vaults that find the best yield across DeFi protocols.",
        },
        {
          title: "Staking Platforms",
          description: "Launch token staking with customizable rewards and governance integration.",
        },
        {
          title: "Trading Apps",
          description: "Integrate swap and limit orders with best-execution routing.",
        },
        {
          title: "Portfolio Trackers",
          description: "Show users their DeFi positions, earnings, and historical performance.",
        },
      ]}
      chains={[
        "Lux",
        "Ethereum",
        "Polygon",
        "Arbitrum",
        "Avalanche",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "YieldVault.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@hanzo/defi/IHanzoRouter.sol";
import "@hanzo/defi/IHanzoStaking.sol";
import "@hanzo/defi/IHanzoLending.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract YieldOptimizer {
    IHanzoRouter public router;
    IHanzoStaking public staking;
    IHanzoLending public lending;

    constructor(address _router, address _staking, address _lending) {
        router = IHanzoRouter(_router);
        staking = IHanzoStaking(_staking);
        lending = IHanzoLending(_lending);
    }

    // Swap tokens using best route
    function swap(
        address tokenIn,
        address tokenOut,
        uint256 amountIn,
        uint256 minAmountOut
    ) external returns (uint256 amountOut) {
        IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
        IERC20(tokenIn).approve(address(router), amountIn);

        amountOut = router.swapExactTokensForTokens(
            tokenIn, tokenOut, amountIn, minAmountOut, msg.sender
        );
    }

    // Stake tokens for yield
    function stake(address pool, uint256 amount, uint256 lockPeriod) external {
        IERC20(staking.stakingToken(pool)).transferFrom(msg.sender, address(this), amount);
        staking.stake(pool, amount, lockPeriod, msg.sender);
    }

    // Supply to lending market
    function supply(address market, uint256 amount) external {
        address asset = lending.marketAsset(market);
        IERC20(asset).transferFrom(msg.sender, address(this), amount);
        IERC20(asset).approve(address(lending), amount);
        lending.supply(market, amount, msg.sender);
    }

    // Get best yield across protocols
    function getBestYield(address token) external view returns (
        uint256 stakingAPY,
        uint256 lendingAPY
    ) {
        stakingAPY = staking.getAPY(token);
        lendingAPY = lending.getSupplyRate(token);
    }
}`,
        },
        {
          language: "Node",
          filename: "defi.ts",
          code: `import { HanzoDeFi } from "@hanzo/blockchain";

const defi = new HanzoDeFi({
  apiKey: process.env.HANZO_API_KEY,
});

// Get best swap quote across DEXs
const quote = await defi.swap.getQuote({
  fromToken: "ETH",
  toToken: "USDC",
  amount: "1000000000000000000", // 1 ETH
  chainId: 1,
});

// Execute gasless swap (user pays in USDC)
const tx = await defi.swap.execute({
  quote,
  wallet: userWallet,
  gasless: true,
});

// Stake tokens with lock period
await defi.staking.stake({
  pool: "0x...",
  amount: "1000000000000000000",
  lockPeriod: 30 * 24 * 60 * 60, // 30 days
  wallet: userWallet,
});

// Get user's DeFi positions across protocols
const positions = await defi.portfolio.getPositions({
  address: "0x...",
  protocols: ["aave", "compound", "uniswap"],
});`,
        },
        {
          language: "Python",
          filename: "defi.py",
          code: `from hanzo.blockchain import DeFi
import os

defi = DeFi(api_key=os.environ["HANZO_API_KEY"])

# Get best swap quote across DEXs
quote = defi.swap.get_quote(
    from_token="ETH",
    to_token="USDC",
    amount="1000000000000000000",  # 1 ETH
    chain_id=1,
)

# Execute gasless swap (user pays in USDC)
tx = defi.swap.execute(
    quote=quote,
    wallet=user_wallet,
    gasless=True,
)

# Stake tokens with lock period
defi.staking.stake(
    pool="0x...",
    amount="1000000000000000000",
    lock_period=30 * 24 * 60 * 60,  # 30 days
    wallet=user_wallet,
)

# Get user's DeFi positions across protocols
positions = defi.portfolio.get_positions(
    address="0x...",
    protocols=["aave", "compound", "uniswap"],
)`,
        },
        {
          language: "Go",
          filename: "defi.go",
          code: `package main

import (
    "os"
    "github.com/hanzoai/blockchain-go/defi"
)

func main() {
    client := defi.NewClient(os.Getenv("HANZO_API_KEY"))

    // Get best swap quote across DEXs
    quote, _ := client.Swap.GetQuote(&defi.QuoteRequest{
        FromToken: "ETH",
        ToToken:   "USDC",
        Amount:    "1000000000000000000", // 1 ETH
        ChainID:   1,
    })

    // Execute gasless swap (user pays in USDC)
    tx, _ := client.Swap.Execute(&defi.ExecuteRequest{
        Quote:   quote,
        Wallet:  userWallet,
        Gasless: true,
    })

    // Stake tokens with lock period
    client.Staking.Stake(&defi.StakeRequest{
        Pool:       "0x...",
        Amount:     "1000000000000000000",
        LockPeriod: 30 * 24 * 60 * 60, // 30 days
        Wallet:     userWallet,
    })

    // Get user's DeFi positions across protocols
    positions, _ := client.Portfolio.GetPositions(&defi.PositionsRequest{
        Address:   "0x...",
        Protocols: []string{"aave", "compound", "uniswap"},
    })
}`,
        },
        {
          language: "Rust",
          filename: "defi.rs",
          code: `use hanzo_blockchain::defi::{DeFi, QuoteRequest, StakeRequest};
use std::env;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = DeFi::new(&env::var("HANZO_API_KEY")?);

    // Get best swap quote across DEXs
    let quote = client.swap.get_quote(QuoteRequest {
        from_token: "ETH".into(),
        to_token: "USDC".into(),
        amount: "1000000000000000000".into(), // 1 ETH
        chain_id: 1,
    }).await?;

    // Execute gasless swap (user pays in USDC)
    let tx = client.swap.execute(quote, user_wallet, true).await?;

    // Stake tokens with lock period
    client.staking.stake(StakeRequest {
        pool: "0x...".into(),
        amount: "1000000000000000000".into(),
        lock_period: 30 * 24 * 60 * 60, // 30 days
        wallet: user_wallet,
    }).await?;

    // Get user's DeFi positions across protocols
    let positions = client.portfolio.get_positions(
        "0x...",
        vec!["aave", "compound", "uniswap"],
    ).await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "defi.c",
          code: `#include <hanzo/blockchain/defi.h>
#include <stdlib.h>

int main() {
    hanzo_defi_t *defi = hanzo_defi_new(getenv("HANZO_API_KEY"));

    // Get best swap quote across DEXs
    hanzo_quote_t *quote = hanzo_swap_get_quote(defi,
        "ETH",                      // from_token
        "USDC",                     // to_token
        "1000000000000000000",      // amount (1 ETH)
        1                           // chain_id
    );

    // Execute gasless swap (user pays in USDC)
    hanzo_tx_t *tx = hanzo_swap_execute(defi,
        quote,
        user_wallet,
        1  // gasless = true
    );

    // Stake tokens with lock period
    hanzo_staking_stake(defi,
        "0x...",                    // pool
        "1000000000000000000",      // amount
        30 * 24 * 60 * 60,          // lock_period (30 days)
        user_wallet
    );

    // Get user's DeFi positions across protocols
    const char *protocols[] = {"aave", "compound", "uniswap", NULL};
    hanzo_positions_t *positions = hanzo_portfolio_get_positions(
        defi, "0x...", protocols
    );

    hanzo_defi_free(defi);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "defi.cpp",
          code: `#include <hanzo/blockchain/defi.hpp>
#include <cstdlib>

int main() {
    auto defi = hanzo::DeFi(std::getenv("HANZO_API_KEY"));

    // Get best swap quote across DEXs
    auto quote = defi.swap.get_quote({
        .from_token = "ETH",
        .to_token = "USDC",
        .amount = "1000000000000000000", // 1 ETH
        .chain_id = 1,
    });

    // Execute gasless swap (user pays in USDC)
    auto tx = defi.swap.execute({
        .quote = quote,
        .wallet = user_wallet,
        .gasless = true,
    });

    // Stake tokens with lock period
    defi.staking.stake({
        .pool = "0x...",
        .amount = "1000000000000000000",
        .lock_period = 30 * 24 * 60 * 60, // 30 days
        .wallet = user_wallet,
    });

    // Get user's DeFi positions across protocols
    auto positions = defi.portfolio.get_positions(
        "0x...",
        {"aave", "compound", "uniswap"}
    );

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "defi.rb",
          code: `require 'hanzo/blockchain'

defi = Hanzo::Blockchain::DeFi.new(
  api_key: ENV['HANZO_API_KEY']
)

# Get best swap quote across DEXs
quote = defi.swap.get_quote(
  from_token: 'ETH',
  to_token: 'USDC',
  amount: '1000000000000000000', # 1 ETH
  chain_id: 1
)

# Execute gasless swap (user pays in USDC)
tx = defi.swap.execute(
  quote: quote,
  wallet: user_wallet,
  gasless: true
)

# Stake tokens with lock period
defi.staking.stake(
  pool: '0x...',
  amount: '1000000000000000000',
  lock_period: 30 * 24 * 60 * 60, # 30 days
  wallet: user_wallet
)

# Get user's DeFi positions across protocols
positions = defi.portfolio.get_positions(
  address: '0x...',
  protocols: %w[aave compound uniswap]
)`,
        },
      ]}
    />
  );
};

export default HanzoDeFi;
