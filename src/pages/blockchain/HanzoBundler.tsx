import React from "react";
import {
  Layers,
  Zap,
  Shield,
  Globe,
  RefreshCw,
  Clock,
  Database,
  Settings,
  BarChart3,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoBundler = () => {
  return (
    <BlockchainProductLayout
      name="Bundler API"
      tagline="ERC-4337 UserOperation bundling service"
      description="Production-grade bundler for account abstraction. Submit, simulate, and track UserOperations across all ERC-4337 compatible chains with reliable transaction inclusion."
      icon={Layers}
      accentColor="#14b8a6"
      features={[
        {
          icon: Layers,
          title: "UserOp Bundling",
          description: "Efficiently bundle multiple UserOperations into single transactions.",
        },
        {
          icon: Zap,
          title: "Fast Inclusion",
          description: "Priority transaction submission for quick block inclusion.",
        },
        {
          icon: Shield,
          title: "Simulation",
          description: "Pre-flight simulation to validate operations before submission.",
        },
        {
          icon: Globe,
          title: "Multi-chain Support",
          description: "ERC-4337 bundling across Ethereum, Polygon, Arbitrum, and more.",
        },
        {
          icon: RefreshCw,
          title: "Auto-retry",
          description: "Automatic retry with gas price adjustment for stuck operations.",
        },
        {
          icon: Clock,
          title: "Status Tracking",
          description: "Real-time status updates from submission to confirmation.",
        },
        {
          icon: Database,
          title: "Operation History",
          description: "Query past UserOperations and their execution results.",
        },
        {
          icon: Settings,
          title: "Custom Mempools",
          description: "Support for alternative mempools and private submission.",
        },
        {
          icon: BarChart3,
          title: "Analytics",
          description: "Track success rates, gas usage, and operation metrics.",
        },
      ]}
      useCases={[
        {
          title: "Smart Wallet Apps",
          description: "Power account abstraction wallets with reliable bundling.",
        },
        {
          title: "Gasless Transactions",
          description: "Enable sponsored transactions with paymaster integration.",
        },
        {
          title: "Batch Operations",
          description: "Execute multiple actions in a single user signature.",
        },
        {
          title: "Session Keys",
          description: "Support for temporary permissions and automated actions.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "zkSync", "Linea",
      ]}
      codeExamples={[
        {
          language: "Node",
          filename: "bundler.ts",
          code: `import { HanzoBundler } from "@hanzo/blockchain";

const bundler = new HanzoBundler({
  apiKey: process.env.HANZO_API_KEY,
});

// Submit a UserOperation
const result = await bundler.sendUserOperation({
  chain: "ethereum",
  userOp: {
    sender: "0x...",
    nonce: "0x0",
    initCode: "0x",
    callData: "0x...",
    callGasLimit: "0x...",
    verificationGasLimit: "0x...",
    preVerificationGas: "0x...",
    maxFeePerGas: "0x...",
    maxPriorityFeePerGas: "0x...",
    paymasterAndData: "0x",
    signature: "0x...",
  },
  entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
});

// Track operation status
const status = await bundler.getUserOperationReceipt({
  chain: "ethereum",
  userOpHash: result.userOpHash,
});`,
        },
        {
          language: "Python",
          filename: "bundler.py",
          code: `from hanzo_blockchain import HanzoBundler

bundler = HanzoBundler(api_key=os.environ["HANZO_API_KEY"])

# Submit a UserOperation
result = bundler.send_user_operation(
    chain="ethereum",
    user_op={
        "sender": "0x...",
        "nonce": "0x0",
        "initCode": "0x",
        "callData": "0x...",
        "callGasLimit": "0x...",
        "verificationGasLimit": "0x...",
        "preVerificationGas": "0x...",
        "maxFeePerGas": "0x...",
        "maxPriorityFeePerGas": "0x...",
        "paymasterAndData": "0x",
        "signature": "0x...",
    },
    entry_point="0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
)

# Track operation status
status = bundler.get_user_operation_receipt(
    chain="ethereum",
    user_op_hash=result.user_op_hash,
)`,
        },
        {
          language: "Go",
          filename: "bundler.go",
          code: `package main

import (
    "os"
    hanzo "github.com/hanzoai/blockchain-go"
)

func main() {
    bundler := hanzo.NewBundler(os.Getenv("HANZO_API_KEY"))

    // Submit a UserOperation
    result, err := bundler.SendUserOperation(&hanzo.SendUserOpRequest{
        Chain: "ethereum",
        UserOp: &hanzo.UserOperation{
            Sender:               "0x...",
            Nonce:                "0x0",
            InitCode:             "0x",
            CallData:             "0x...",
            CallGasLimit:         "0x...",
            VerificationGasLimit: "0x...",
            PreVerificationGas:   "0x...",
            MaxFeePerGas:         "0x...",
            MaxPriorityFeePerGas: "0x...",
            PaymasterAndData:     "0x",
            Signature:            "0x...",
        },
        EntryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    })

    // Track operation status
    status, err := bundler.GetUserOperationReceipt(&hanzo.ReceiptRequest{
        Chain:      "ethereum",
        UserOpHash: result.UserOpHash,
    })
}`,
        },
        {
          language: "Rust",
          filename: "bundler.rs",
          code: `use hanzo_blockchain::{Bundler, UserOperation};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let bundler = Bundler::new(std::env::var("HANZO_API_KEY")?);

    // Submit a UserOperation
    let result = bundler.send_user_operation(
        "ethereum",
        UserOperation {
            sender: "0x...".into(),
            nonce: "0x0".into(),
            init_code: "0x".into(),
            call_data: "0x...".into(),
            call_gas_limit: "0x...".into(),
            verification_gas_limit: "0x...".into(),
            pre_verification_gas: "0x...".into(),
            max_fee_per_gas: "0x...".into(),
            max_priority_fee_per_gas: "0x...".into(),
            paymaster_and_data: "0x".into(),
            signature: "0x...".into(),
        },
        "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    ).await?;

    // Track operation status
    let status = bundler.get_user_operation_receipt(
        "ethereum",
        &result.user_op_hash,
    ).await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "bundler.c",
          code: `#include <hanzo/blockchain.h>
#include <stdlib.h>

int main(void) {
    hanzo_bundler_t *bundler = hanzo_bundler_new(getenv("HANZO_API_KEY"));

    // Build UserOperation
    hanzo_user_op_t user_op = {
        .sender = "0x...",
        .nonce = "0x0",
        .init_code = "0x",
        .call_data = "0x...",
        .call_gas_limit = "0x...",
        .verification_gas_limit = "0x...",
        .pre_verification_gas = "0x...",
        .max_fee_per_gas = "0x...",
        .max_priority_fee_per_gas = "0x...",
        .paymaster_and_data = "0x",
        .signature = "0x...",
    };

    // Submit UserOperation
    hanzo_result_t *result = hanzo_bundler_send_user_op(
        bundler, "ethereum", &user_op,
        "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
    );

    // Track operation status
    hanzo_receipt_t *status = hanzo_bundler_get_receipt(
        bundler, "ethereum", result->user_op_hash
    );

    hanzo_receipt_free(status);
    hanzo_result_free(result);
    hanzo_bundler_free(bundler);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "bundler.cpp",
          code: `#include <hanzo/blockchain.hpp>
#include <cstdlib>

int main() {
    auto bundler = hanzo::Bundler(std::getenv("HANZO_API_KEY"));

    // Build UserOperation
    hanzo::UserOperation user_op{
        .sender = "0x...",
        .nonce = "0x0",
        .init_code = "0x",
        .call_data = "0x...",
        .call_gas_limit = "0x...",
        .verification_gas_limit = "0x...",
        .pre_verification_gas = "0x...",
        .max_fee_per_gas = "0x...",
        .max_priority_fee_per_gas = "0x...",
        .paymaster_and_data = "0x",
        .signature = "0x...",
    };

    // Submit UserOperation
    auto result = bundler.send_user_operation(
        "ethereum",
        user_op,
        "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"
    );

    // Track operation status
    auto status = bundler.get_user_operation_receipt(
        "ethereum",
        result.user_op_hash
    );

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "bundler.rb",
          code: `require 'hanzo/blockchain'

bundler = Hanzo::Bundler.new(api_key: ENV['HANZO_API_KEY'])

# Submit a UserOperation
result = bundler.send_user_operation(
  chain: 'ethereum',
  user_op: {
    sender: '0x...',
    nonce: '0x0',
    init_code: '0x',
    call_data: '0x...',
    call_gas_limit: '0x...',
    verification_gas_limit: '0x...',
    pre_verification_gas: '0x...',
    max_fee_per_gas: '0x...',
    max_priority_fee_per_gas: '0x...',
    paymaster_and_data: '0x',
    signature: '0x...',
  },
  entry_point: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
)

# Track operation status
status = bundler.get_user_operation_receipt(
  chain: 'ethereum',
  user_op_hash: result.user_op_hash
)`,
        },
      ]}
    />
  );
};

export default HanzoBundler;
