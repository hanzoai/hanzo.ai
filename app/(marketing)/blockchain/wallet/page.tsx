'use client'

import React from "react";
import {
  Wallet,
  Key,
  Shield,
  Smartphone,
  Server,
  Globe,
  Lock,
  Users,
  Fingerprint,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoWallet = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Wallet"
      tagline="Unified wallet infrastructure for Web3"
      description="A complete wallet solution for Lux and EVM chains. Offer embedded wallets for seamless user onboarding or server wallets for programmatic access—all with enterprise-grade key management."
      icon={Wallet}
      accentColor="#f59e0b"
      features={[
        {
          icon: Smartphone,
          title: "Embedded Wallets",
          description: "Non-custodial wallets that live in your app. Social login, passkeys, and email authentication.",
        },
        {
          icon: Server,
          title: "Server Wallets",
          description: "Programmatic wallet access for backend services. Sign transactions server-side securely.",
        },
        {
          icon: Key,
          title: "MPC Key Management",
          description: "Multi-party computation ensures no single point of failure for private keys.",
        },
        {
          icon: Globe,
          title: "Multi-Chain Support",
          description: "One wallet SDK for Lux, Ethereum, Polygon, and all major EVM chains.",
        },
        {
          icon: Shield,
          title: "HSM Integration",
          description: "Hardware Security Module support for enterprise-grade key protection.",
        },
        {
          icon: Lock,
          title: "Transaction Policies",
          description: "Define spending limits, allowlists, and approval workflows.",
        },
        {
          icon: Fingerprint,
          title: "Biometric Auth",
          description: "Support for FaceID, TouchID, and WebAuthn for secure authentication.",
        },
        {
          icon: Users,
          title: "Account Abstraction",
          description: "ERC-4337 support for gasless transactions and session keys.",
        },
      ]}
      useCases={[
        {
          title: "Consumer Apps",
          description: "Onboard users without seed phrases. Email, social, or passkey authentication with instant wallet creation.",
        },
        {
          title: "Gaming",
          description: "Invisible wallets for in-game assets. Players interact with NFTs without crypto complexity.",
        },
        {
          title: "Backend Automation",
          description: "Programmatic signing for bots, treasury management, and automated transactions.",
        },
        {
          title: "Enterprise Treasury",
          description: "Secure key management with HSM integration, audit logs, and policy controls.",
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
        "zkSync",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "WalletFactory.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@hanzo/wallet/IHanzoWallet.sol";
import "@hanzo/wallet/IWalletFactory.sol";
import "@openzeppelin/contracts/proxy/Clones.sol";

/// @title WalletFactory - Deploy Hanzo embedded wallets
contract WalletFactory is IWalletFactory {
    address public immutable walletImplementation;
    mapping(bytes32 => address) public userWallets;

    event WalletCreated(bytes32 indexed userId, address wallet);

    constructor(address _implementation) {
        walletImplementation = _implementation;
    }

    // Create deterministic wallet for user
    function createWallet(
        bytes32 userId,
        address owner,
        address[] calldata guardians
    ) external returns (address wallet) {
        require(userWallets[userId] == address(0), "Wallet exists");

        // Deploy minimal proxy clone
        bytes32 salt = keccak256(abi.encode(userId, owner));
        wallet = Clones.cloneDeterministic(walletImplementation, salt);

        // Initialize the wallet
        IHanzoWallet(wallet).initialize(owner, guardians);

        userWallets[userId] = wallet;
        emit WalletCreated(userId, wallet);
    }

    // Predict wallet address before deployment
    function predictWalletAddress(
        bytes32 userId,
        address owner
    ) external view returns (address) {
        bytes32 salt = keccak256(abi.encode(userId, owner));
        return Clones.predictDeterministicAddress(
            walletImplementation,
            salt,
            address(this)
        );
    }

    // Check if wallet exists for user
    function hasWallet(bytes32 userId) external view returns (bool) {
        return userWallets[userId] != address(0);
    }

    // Get wallet for user
    function getWallet(bytes32 userId) external view returns (address) {
        return userWallets[userId];
    }
}`,
        },
        {
          language: "Node",
          filename: "wallet.ts",
          code: `import { HanzoWallet } from "@hanzo/blockchain";

// Create an embedded wallet for a user
const wallet = await HanzoWallet.createEmbedded({
  userId: "user_123",
  authMethod: "email", // or "google", "passkey"
});

// Sign and send a transaction
const tx = await wallet.sendTransaction({
  to: "0x...",
  value: "1000000000000000000", // 1 ETH
  chainId: 1,
});

// Server wallet for backend automation
const serverWallet = HanzoWallet.server({ walletId: "wallet_abc" });
const signature = await serverWallet.signMessage("Hello, Web3!");`,
        },
        {
          language: "Python",
          filename: "wallet.py",
          code: `from hanzo import HanzoWallet

# Create an embedded wallet for a user
wallet = await HanzoWallet.create_embedded(
    user_id="user_123",
    auth_method="email"  # or "google", "passkey"
)

# Sign and send a transaction
tx = await wallet.send_transaction(
    to="0x...",
    value="1000000000000000000",  # 1 ETH
    chain_id=1
)

# Server wallet for backend automation
server_wallet = HanzoWallet.server(wallet_id="wallet_abc")
signature = await server_wallet.sign_message("Hello, Web3!")`,
        },
        {
          language: "Go",
          filename: "wallet.go",
          code: `package main

import "github.com/hanzoai/hanzo-go/blockchain"

func main() {
    // Create an embedded wallet for a user
    wallet, _ := blockchain.CreateEmbeddedWallet(ctx, blockchain.EmbeddedOpts{
        UserID:     "user_123",
        AuthMethod: "email",
    })

    // Sign and send a transaction
    tx, _ := wallet.SendTransaction(ctx, blockchain.TxRequest{
        To:      "0x...",
        Value:   "1000000000000000000",
        ChainID: 1,
    })

    // Server wallet for backend automation
    serverWallet := blockchain.ServerWallet("wallet_abc")
    sig, _ := serverWallet.SignMessage(ctx, "Hello, Web3!")
}`,
        },
        {
          language: "Rust",
          filename: "wallet.rs",
          code: `use hanzo_blockchain::{Wallet, EmbeddedOpts};

#[tokio::main]
async fn main() -> Result<()> {
    // Create an embedded wallet for a user
    let wallet = Wallet::create_embedded(EmbeddedOpts {
        user_id: "user_123",
        auth_method: "email",
    }).await?;

    // Sign and send a transaction
    let tx = wallet.send_transaction(TxRequest {
        to: "0x...".parse()?,
        value: "1000000000000000000".parse()?,
        chain_id: 1,
    }).await?;

    // Server wallet for backend automation
    let server_wallet = Wallet::server("wallet_abc");
    let sig = server_wallet.sign_message("Hello, Web3!").await?;
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "wallet.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    // Create an embedded wallet for a user
    hanzo_wallet_t *wallet = hanzo_wallet_create_embedded(
        "user_123", "email"
    );

    // Sign and send a transaction
    hanzo_tx_t tx = {
        .to = "0x...",
        .value = "1000000000000000000",
        .chain_id = 1
    };
    hanzo_wallet_send_tx(wallet, &tx);

    // Server wallet for backend automation
    hanzo_wallet_t *server = hanzo_wallet_server("wallet_abc");
    char *sig = hanzo_wallet_sign_message(server, "Hello, Web3!");

    hanzo_wallet_free(wallet);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "wallet.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    // Create an embedded wallet for a user
    auto wallet = hanzo::Wallet::createEmbedded({
        .userId = "user_123",
        .authMethod = "email"
    });

    // Sign and send a transaction
    auto tx = wallet.sendTransaction({
        .to = "0x...",
        .value = "1000000000000000000",
        .chainId = 1
    });

    // Server wallet for backend automation
    auto serverWallet = hanzo::Wallet::server("wallet_abc");
    auto sig = serverWallet.signMessage("Hello, Web3!");

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "wallet.rb",
          code: `require 'hanzo/blockchain'

# Create an embedded wallet for a user
wallet = Hanzo::Wallet.create_embedded(
  user_id: 'user_123',
  auth_method: 'email'  # or 'google', 'passkey'
)

# Sign and send a transaction
tx = wallet.send_transaction(
  to: '0x...',
  value: '1000000000000000000',  # 1 ETH
  chain_id: 1
)

# Server wallet for backend automation
server_wallet = Hanzo::Wallet.server(wallet_id: 'wallet_abc')
signature = server_wallet.sign_message('Hello, Web3!')`,
        },
      ]}
    />
  );
};

export default HanzoWallet;
