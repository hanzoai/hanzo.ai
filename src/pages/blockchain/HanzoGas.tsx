import React from "react";
import {
  Zap,
  Shield,
  Globe,
  RefreshCw,
  Clock,
  Database,
  Settings,
  BarChart3,
  Users,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoGas = () => {
  return (
    <BlockchainProductLayout
      name="Gas Manager"
      tagline="Sponsor gas for your users"
      description="Paymaster-as-a-Service for account abstraction. Sponsor gas fees for your users, set spending policies, and create seamless gasless experiences across chains."
      icon={Zap}
      accentColor="#eab308"
      features={[
        {
          icon: Zap,
          title: "Gas Sponsorship",
          description: "Pay gas fees on behalf of your users for frictionless UX.",
        },
        {
          icon: Shield,
          title: "Spending Policies",
          description: "Set limits per user, per operation, or per time period.",
        },
        {
          icon: Users,
          title: "User Whitelisting",
          description: "Control which users can access sponsored transactions.",
        },
        {
          icon: Globe,
          title: "Multi-chain",
          description: "Sponsor gas across Ethereum, Polygon, Arbitrum, and more.",
        },
        {
          icon: Settings,
          title: "Custom Paymasters",
          description: "Deploy custom paymaster logic for advanced use cases.",
        },
        {
          icon: Database,
          title: "ERC-20 Gas Payment",
          description: "Let users pay gas in stablecoins or your app token.",
        },
        {
          icon: Clock,
          title: "Real-time Balance",
          description: "Monitor sponsor balance and usage in real-time.",
        },
        {
          icon: RefreshCw,
          title: "Auto-refill",
          description: "Automatic balance top-up when running low.",
        },
        {
          icon: BarChart3,
          title: "Usage Analytics",
          description: "Track sponsored gas by user, operation, and chain.",
        },
      ]}
      useCases={[
        {
          title: "Onboarding",
          description: "Remove gas friction for new users entering Web3.",
        },
        {
          title: "Gaming",
          description: "Sponsor in-game transactions for seamless gameplay.",
        },
        {
          title: "NFT Minting",
          description: "Cover gas for NFT drops and collection mints.",
        },
        {
          title: "Enterprise Apps",
          description: "Abstract blockchain complexity for business users.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Linea",
      ]}
      codeExamples={[
        {
          language: "Node",
          filename: "gas.ts",
          code: `import { HanzoGasManager } from "@hanzo/blockchain";

const gasManager = new HanzoGasManager({
  apiKey: process.env.HANZO_API_KEY,
});

// Create a gas policy
const policy = await gasManager.createPolicy({
  name: "new-user-onboarding",
  chains: ["ethereum", "polygon"],
  maxGasPerUser: "0.01",
  maxGasPerOperation: "0.001",
  allowedContracts: ["0x..."],
  expiresAt: "2025-12-31",
});

// Sponsor a UserOperation
const sponsorship = await gasManager.sponsorUserOp({
  chain: "ethereum",
  userOp: userOperation,
  policyId: policy.id,
});

// Check balance and usage
const balance = await gasManager.getBalance({ chain: "ethereum" });
const usage = await gasManager.getUsage({ policyId: policy.id });`,
        },
        {
          language: "Python",
          filename: "gas.py",
          code: `from hanzo.blockchain import GasManager
import os

gas_manager = GasManager(api_key=os.environ["HANZO_API_KEY"])

# Create a gas policy
policy = gas_manager.create_policy(
    name="new-user-onboarding",
    chains=["ethereum", "polygon"],
    max_gas_per_user="0.01",
    max_gas_per_operation="0.001",
    allowed_contracts=["0x..."],
    expires_at="2025-12-31",
)

# Sponsor a UserOperation
sponsorship = gas_manager.sponsor_user_op(
    chain="ethereum",
    user_op=user_operation,
    policy_id=policy.id,
)

# Check balance and usage
balance = gas_manager.get_balance(chain="ethereum")
usage = gas_manager.get_usage(policy_id=policy.id)`,
        },
        {
          language: "Go",
          filename: "gas.go",
          code: `package main

import (
    "os"
    "github.com/hanzoai/blockchain-go/gas"
)

func main() {
    manager := gas.NewManager(os.Getenv("HANZO_API_KEY"))

    // Create a gas policy
    policy, _ := manager.CreatePolicy(&gas.PolicyConfig{
        Name:               "new-user-onboarding",
        Chains:             []string{"ethereum", "polygon"},
        MaxGasPerUser:      "0.01",
        MaxGasPerOperation: "0.001",
        AllowedContracts:   []string{"0x..."},
        ExpiresAt:          "2025-12-31",
    })

    // Sponsor a UserOperation
    sponsorship, _ := manager.SponsorUserOp(&gas.SponsorRequest{
        Chain:    "ethereum",
        UserOp:   userOperation,
        PolicyID: policy.ID,
    })

    // Check balance and usage
    balance, _ := manager.GetBalance("ethereum")
    usage, _ := manager.GetUsage(policy.ID)
}`,
        },
        {
          language: "Rust",
          filename: "gas.rs",
          code: `use hanzo_blockchain::gas::{GasManager, PolicyConfig, SponsorRequest};
use std::env;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let manager = GasManager::new(&env::var("HANZO_API_KEY")?);

    // Create a gas policy
    let policy = manager.create_policy(PolicyConfig {
        name: "new-user-onboarding".into(),
        chains: vec!["ethereum".into(), "polygon".into()],
        max_gas_per_user: "0.01".into(),
        max_gas_per_operation: "0.001".into(),
        allowed_contracts: vec!["0x...".into()],
        expires_at: "2025-12-31".into(),
    }).await?;

    // Sponsor a UserOperation
    let sponsorship = manager.sponsor_user_op(SponsorRequest {
        chain: "ethereum".into(),
        user_op: user_operation,
        policy_id: policy.id.clone(),
    }).await?;

    // Check balance and usage
    let balance = manager.get_balance("ethereum").await?;
    let usage = manager.get_usage(&policy.id).await?;
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "gas.c",
          code: `#include <hanzo/blockchain/gas.h>
#include <stdlib.h>

int main() {
    hanzo_gas_manager_t *manager = hanzo_gas_manager_new(
        getenv("HANZO_API_KEY")
    );

    // Create a gas policy
    const char *chains[] = {"ethereum", "polygon", NULL};
    const char *contracts[] = {"0x...", NULL};

    hanzo_gas_policy_t *policy = hanzo_gas_create_policy(manager,
        "new-user-onboarding",  // name
        chains,                  // chains
        "0.01",                  // max_gas_per_user
        "0.001",                 // max_gas_per_operation
        contracts,               // allowed_contracts
        "2025-12-31"             // expires_at
    );

    // Sponsor a UserOperation
    hanzo_sponsorship_t *sponsorship = hanzo_gas_sponsor_user_op(
        manager, "ethereum", user_op, policy->id
    );

    // Check balance and usage
    hanzo_balance_t *balance = hanzo_gas_get_balance(manager, "ethereum");
    hanzo_usage_t *usage = hanzo_gas_get_usage(manager, policy->id);

    hanzo_gas_manager_free(manager);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "gas.cpp",
          code: `#include <hanzo/blockchain/gas.hpp>
#include <cstdlib>

int main() {
    auto manager = hanzo::gas::Manager(std::getenv("HANZO_API_KEY"));

    // Create a gas policy
    auto policy = manager.create_policy({
        .name = "new-user-onboarding",
        .chains = {"ethereum", "polygon"},
        .max_gas_per_user = "0.01",
        .max_gas_per_operation = "0.001",
        .allowed_contracts = {"0x..."},
        .expires_at = "2025-12-31",
    });

    // Sponsor a UserOperation
    auto sponsorship = manager.sponsor_user_op({
        .chain = "ethereum",
        .user_op = user_operation,
        .policy_id = policy.id,
    });

    // Check balance and usage
    auto balance = manager.get_balance("ethereum");
    auto usage = manager.get_usage(policy.id);

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "gas.rb",
          code: `require 'hanzo/blockchain'

manager = Hanzo::Blockchain::GasManager.new(
  api_key: ENV['HANZO_API_KEY']
)

# Create a gas policy
policy = manager.create_policy(
  name: 'new-user-onboarding',
  chains: %w[ethereum polygon],
  max_gas_per_user: '0.01',
  max_gas_per_operation: '0.001',
  allowed_contracts: ['0x...'],
  expires_at: '2025-12-31'
)

# Sponsor a UserOperation
sponsorship = manager.sponsor_user_op(
  chain: 'ethereum',
  user_op: user_operation,
  policy_id: policy.id
)

# Check balance and usage
balance = manager.get_balance(chain: 'ethereum')
usage = manager.get_usage(policy_id: policy.id)`,
        },
      ]}
    />
  );
};

export default HanzoGas;
