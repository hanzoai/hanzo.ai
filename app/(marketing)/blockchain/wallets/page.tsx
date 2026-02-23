'use client'

import React from "react";
import {
  Wallet,
  Shield,
  Globe,
  RefreshCw,
  Clock,
  Database,
  Settings,
  Users,
  Key,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoSmartWallets = () => {
  return (
    <BlockchainProductLayout
      name="Smart Wallets"
      tagline="ERC-4337 account abstraction wallets"
      description="Next-generation smart contract wallets with account abstraction. Social recovery, session keys, batch transactions, and gasless experiences out of the box."
      icon={Wallet}
      accentColor="#f59e0b"
      features={[
        {
          icon: Wallet,
          title: "Smart Contract Wallets",
          description: "Upgradeable wallets with programmable logic and security.",
        },
        {
          icon: Shield,
          title: "Social Recovery",
          description: "Recover accounts using trusted guardians, not seed phrases.",
        },
        {
          icon: Key,
          title: "Session Keys",
          description: "Temporary permissions for apps without repeated signing.",
        },
        {
          icon: Users,
          title: "Multi-sig Support",
          description: "Require multiple approvals for high-value transactions.",
        },
        {
          icon: RefreshCw,
          title: "Batch Transactions",
          description: "Execute multiple operations in a single transaction.",
        },
        {
          icon: Globe,
          title: "Multi-chain",
          description: "Same wallet address across all EVM chains.",
        },
        {
          icon: Settings,
          title: "Custom Modules",
          description: "Extend functionality with modular security plugins.",
        },
        {
          icon: Clock,
          title: "Time-locked Actions",
          description: "Schedule transactions and set spending limits.",
        },
        {
          icon: Database,
          title: "Transaction History",
          description: "Complete audit trail of all wallet activity.",
        },
      ]}
      useCases={[
        {
          title: "Consumer Wallets",
          description: "User-friendly wallets without seed phrase management.",
        },
        {
          title: "Gaming",
          description: "Session keys for seamless in-game transactions.",
        },
        {
          title: "Enterprise Treasury",
          description: "Multi-sig controls for corporate crypto management.",
        },
        {
          title: "DeFi Power Users",
          description: "Batch operations and automated strategies.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Linea",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "SmartAccount.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@account-abstraction/contracts/core/BaseAccount.sol";
import "@hanzo/wallet/ISessionKeyManager.sol";
import "@hanzo/wallet/ISocialRecovery.sol";

contract HanzoSmartAccount is BaseAccount, ISocialRecovery {
    address public owner;
    ISessionKeyManager public sessionManager;

    mapping(address => bool) public guardians;
    uint256 public guardianCount;
    uint256 public recoveryThreshold;

    constructor(
        IEntryPoint _entryPoint,
        address _owner,
        address[] memory _guardians,
        uint256 _threshold
    ) BaseAccount(_entryPoint) {
        owner = _owner;
        recoveryThreshold = _threshold;
        for (uint i = 0; i < _guardians.length; i++) {
            guardians[_guardians[i]] = true;
            guardianCount++;
        }
    }

    // Validate UserOperation signature
    function _validateSignature(
        UserOperation calldata userOp,
        bytes32 userOpHash
    ) internal override returns (uint256 validationData) {
        // Check if signed by owner or valid session key
        bytes32 hash = keccak256(abi.encodePacked("\\x19Ethereum Signed Message:\\n32", userOpHash));
        address signer = ECDSA.recover(hash, userOp.signature);

        if (signer == owner) return 0;
        if (sessionManager.isValidSession(signer, userOp.callData)) return 0;

        return SIG_VALIDATION_FAILED;
    }

    // Execute batch of calls
    function executeBatch(
        address[] calldata targets,
        uint256[] calldata values,
        bytes[] calldata datas
    ) external onlyEntryPoint {
        for (uint i = 0; i < targets.length; i++) {
            (bool success,) = targets[i].call{value: values[i]}(datas[i]);
            require(success, "Batch call failed");
        }
    }

    // Social recovery - guardians can recover to new owner
    function executeRecovery(address newOwner, bytes[] calldata signatures) external {
        require(signatures.length >= recoveryThreshold, "Not enough signatures");
        // Verify guardian signatures
        owner = newOwner;
    }
}`,
        },
        {
          language: "Node",
          filename: "smart-wallet.ts",
          code: `import { HanzoSmartWallet } from "@hanzo/blockchain";

const smartWallet = new HanzoSmartWallet({
  apiKey: process.env.HANZO_API_KEY,
});

// Create a new smart wallet
const wallet = await smartWallet.create({
  owner: "0x...", // EOA signer
  chain: "ethereum",
  guardians: ["0x...", "0x..."], // Recovery guardians
  threshold: 2, // Guardians needed for recovery
});

// Create a session key for an app
const session = await wallet.createSessionKey({
  permissions: ["transfer", "approve"],
  allowedContracts: ["0x..."],
  expiresAt: Date.now() + 86400000, // 24 hours
});

// Execute batch transaction
await wallet.executeBatch([
  { to: "0x...", value: "0.1", data: "0x" },
  { to: "0x...", value: "0", data: approveCalldata },
  { to: "0x...", value: "0", data: swapCalldata },
]);`,
        },
        {
          language: "Python",
          filename: "smart_wallet.py",
          code: `from hanzo_blockchain import HanzoSmartWallet
import os

smart_wallet = HanzoSmartWallet(
    api_key=os.environ["HANZO_API_KEY"]
)

# Create a new smart wallet
wallet = smart_wallet.create(
    owner="0x...",  # EOA signer
    chain="ethereum",
    guardians=["0x...", "0x..."],  # Recovery guardians
    threshold=2  # Guardians needed for recovery
)

# Create a session key for an app
session = wallet.create_session_key(
    permissions=["transfer", "approve"],
    allowed_contracts=["0x..."],
    expires_at=int(time.time() * 1000) + 86400000  # 24 hours
)

# Execute batch transaction
wallet.execute_batch([
    {"to": "0x...", "value": "0.1", "data": "0x"},
    {"to": "0x...", "value": "0", "data": approve_calldata},
    {"to": "0x...", "value": "0", "data": swap_calldata},
])`,
        },
        {
          language: "Go",
          filename: "smart_wallet.go",
          code: `package main

import (
    "os"
    "time"
    hanzo "github.com/hanzoai/blockchain-go"
)

func main() {
    client := hanzo.NewSmartWallet(hanzo.Config{
        APIKey: os.Getenv("HANZO_API_KEY"),
    })

    // Create a new smart wallet
    wallet, _ := client.Create(hanzo.CreateWalletParams{
        Owner:     "0x...", // EOA signer
        Chain:     "ethereum",
        Guardians: []string{"0x...", "0x..."}, // Recovery guardians
        Threshold: 2, // Guardians needed for recovery
    })

    // Create a session key for an app
    session, _ := wallet.CreateSessionKey(hanzo.SessionKeyParams{
        Permissions:      []string{"transfer", "approve"},
        AllowedContracts: []string{"0x..."},
        ExpiresAt:        time.Now().Add(24 * time.Hour).UnixMilli(),
    })

    // Execute batch transaction
    wallet.ExecuteBatch([]hanzo.Transaction{
        {To: "0x...", Value: "0.1", Data: "0x"},
        {To: "0x...", Value: "0", Data: approveCalldata},
        {To: "0x...", Value: "0", Data: swapCalldata},
    })
}`,
        },
        {
          language: "Rust",
          filename: "smart_wallet.rs",
          code: `use hanzo_blockchain::{SmartWallet, Config, Transaction};
use std::env;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = SmartWallet::new(Config {
        api_key: env::var("HANZO_API_KEY")?,
    });

    // Create a new smart wallet
    let wallet = client.create(CreateWalletParams {
        owner: "0x...".into(), // EOA signer
        chain: "ethereum".into(),
        guardians: vec!["0x...".into(), "0x...".into()],
        threshold: 2, // Guardians needed for recovery
    }).await?;

    // Create a session key for an app
    let session = wallet.create_session_key(SessionKeyParams {
        permissions: vec!["transfer".into(), "approve".into()],
        allowed_contracts: vec!["0x...".into()],
        expires_at: chrono::Utc::now().timestamp_millis() + 86400000,
    }).await?;

    // Execute batch transaction
    wallet.execute_batch(vec![
        Transaction { to: "0x...", value: "0.1", data: "0x" },
        Transaction { to: "0x...", value: "0", data: &approve_calldata },
        Transaction { to: "0x...", value: "0", data: &swap_calldata },
    ]).await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "smart_wallet.c",
          code: `#include <hanzo/blockchain.h>
#include <stdlib.h>
#include <time.h>

int main() {
    hanzo_client_t *client = hanzo_smart_wallet_new(
        getenv("HANZO_API_KEY")
    );

    // Create a new smart wallet
    const char *guardians[] = {"0x...", "0x..."};
    hanzo_wallet_t *wallet = hanzo_wallet_create(client,
        "0x...",      // owner EOA signer
        "ethereum",   // chain
        guardians, 2, // guardians array and count
        2             // threshold for recovery
    );

    // Create a session key for an app
    const char *permissions[] = {"transfer", "approve"};
    const char *contracts[] = {"0x..."};
    int64_t expires = (time(NULL) * 1000) + 86400000; // 24 hours

    hanzo_session_t *session = hanzo_create_session_key(wallet,
        permissions, 2,
        contracts, 1,
        expires
    );

    // Execute batch transaction
    hanzo_tx_t txs[] = {
        {.to = "0x...", .value = "0.1", .data = "0x"},
        {.to = "0x...", .value = "0", .data = approve_calldata},
        {.to = "0x...", .value = "0", .data = swap_calldata},
    };
    hanzo_execute_batch(wallet, txs, 3);

    hanzo_wallet_free(wallet);
    hanzo_client_free(client);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "smart_wallet.cpp",
          code: `#include <hanzo/blockchain.hpp>
#include <cstdlib>
#include <chrono>

int main() {
    auto client = hanzo::SmartWallet(
        std::getenv("HANZO_API_KEY")
    );

    // Create a new smart wallet
    auto wallet = client.create({
        .owner = "0x...", // EOA signer
        .chain = "ethereum",
        .guardians = {"0x...", "0x..."}, // Recovery guardians
        .threshold = 2 // Guardians needed for recovery
    });

    // Create a session key for an app
    auto now = std::chrono::system_clock::now();
    auto expires = std::chrono::duration_cast<std::chrono::milliseconds>(
        now.time_since_epoch()
    ).count() + 86400000; // 24 hours

    auto session = wallet.create_session_key({
        .permissions = {"transfer", "approve"},
        .allowed_contracts = {"0x..."},
        .expires_at = expires
    });

    // Execute batch transaction
    wallet.execute_batch({
        {.to = "0x...", .value = "0.1", .data = "0x"},
        {.to = "0x...", .value = "0", .data = approve_calldata},
        {.to = "0x...", .value = "0", .data = swap_calldata},
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "smart_wallet.rb",
          code: `require 'hanzo/blockchain'

client = Hanzo::SmartWallet.new(
  api_key: ENV['HANZO_API_KEY']
)

# Create a new smart wallet
wallet = client.create(
  owner: '0x...', # EOA signer
  chain: 'ethereum',
  guardians: ['0x...', '0x...'], # Recovery guardians
  threshold: 2 # Guardians needed for recovery
)

# Create a session key for an app
session = wallet.create_session_key(
  permissions: ['transfer', 'approve'],
  allowed_contracts: ['0x...'],
  expires_at: (Time.now.to_i * 1000) + 86400000 # 24 hours
)

# Execute batch transaction
wallet.execute_batch([
  { to: '0x...', value: '0.1', data: '0x' },
  { to: '0x...', value: '0', data: approve_calldata },
  { to: '0x...', value: '0', data: swap_calldata }
])`,
        },
      ]}
    />
  );
};

export default HanzoSmartWallets;
