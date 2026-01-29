import React from "react";
import {
  Shield,
  Users,
  Key,
  Lock,
  FileCheck,
  History,
  Bell,
  Settings,
  Fingerprint,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoSafe = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Safe"
      tagline="Multi-signature custody with quantum-safe security"
      description="Enterprise-grade multi-sig and threshold-signature wallets built on quantum-resistant cryptography. Secure your treasury with customizable policies, recovery mechanisms, and comprehensive audit trails."
      icon={Shield}
      accentColor="#fd4444"
      features={[
        {
          icon: Users,
          title: "Multi-Sig Wallets",
          description: "Require multiple signatures for transactions. 2-of-3, 3-of-5, or custom configurations.",
        },
        {
          icon: Key,
          title: "Threshold Signatures",
          description: "TSS-based signing that never reconstructs the full private key.",
        },
        {
          icon: Lock,
          title: "Quantum-Safe Custody",
          description: "Post-quantum cryptographic algorithms protect against future threats.",
        },
        {
          icon: FileCheck,
          title: "Policy Engine",
          description: "Define spending limits, time locks, and approval workflows.",
        },
        {
          icon: History,
          title: "Audit Trail",
          description: "Complete history of all actions, approvals, and transactions.",
        },
        {
          icon: Bell,
          title: "Notifications",
          description: "Real-time alerts for pending approvals, transactions, and policy changes.",
        },
        {
          icon: Fingerprint,
          title: "Hardware Key Support",
          description: "Integrate Ledger, Trezor, and other hardware wallets as signers.",
        },
        {
          icon: Settings,
          title: "Recovery Mechanisms",
          description: "Social recovery, time-delayed recovery, and emergency contacts.",
        },
      ]}
      useCases={[
        {
          title: "DAO Treasury",
          description: "Manage community funds with multi-sig governance. Require council approval for large transactions.",
        },
        {
          title: "Corporate Treasury",
          description: "Secure company crypto assets with board-level approval workflows and audit compliance.",
        },
        {
          title: "Investment Funds",
          description: "Manage fund assets with partner signatures, compliance checks, and institutional-grade security.",
        },
        {
          title: "Protocol Governance",
          description: "Secure protocol admin keys with time locks, multi-sig, and emergency pause capabilities.",
        },
      ]}
      chains={[
        "Lux",
        "Ethereum",
        "Polygon",
        "Arbitrum",
        "Optimism",
        "Avalanche",
        "BNB Chain",
      ]}
      codeExamples={[
        {
          language: "Solidity",
          filename: "TreasurySafe.sol",
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@hanzo/safe/IHanzoSafe.sol";
import "@hanzo/safe/ISafeModule.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TreasuryModule is ISafeModule {
    IHanzoSafe public safe;
    uint256 public dailyLimit;
    uint256 public spentToday;
    uint256 public lastSpendDate;

    mapping(address => bool) public allowedRecipients;

    constructor(address _safe, uint256 _dailyLimit) {
        safe = IHanzoSafe(_safe);
        dailyLimit = _dailyLimit;
    }

    // Execute transaction through Safe with daily limit check
    function executeWithLimit(
        address to,
        uint256 value,
        bytes calldata data
    ) external returns (bool success) {
        require(allowedRecipients[to], "Recipient not allowed");

        // Reset daily limit if new day
        if (block.timestamp / 1 days > lastSpendDate) {
            spentToday = 0;
            lastSpendDate = block.timestamp / 1 days;
        }

        require(spentToday + value <= dailyLimit, "Daily limit exceeded");
        spentToday += value;

        // Execute through Safe
        success = safe.execTransactionFromModule(to, value, data, 0);
    }

    // Propose multi-sig transaction
    function proposeTransaction(
        address to,
        uint256 value,
        bytes calldata data
    ) external returns (bytes32 proposalId) {
        proposalId = safe.proposeTransaction(to, value, data, msg.sender);
    }

    // Sign/approve a proposal
    function approveProposal(bytes32 proposalId) external {
        safe.approveTransaction(proposalId, msg.sender);
    }

    // Execute when threshold reached
    function executeProposal(bytes32 proposalId) external {
        require(safe.getApprovalCount(proposalId) >= safe.threshold(), "Threshold not met");
        safe.executeTransaction(proposalId);
    }
}`,
        },
        {
          language: "Node",
          filename: "safe.ts",
          code: `import { HanzoSafe } from "@hanzo/blockchain";

// Create a 2-of-3 multi-sig safe
const safe = await HanzoSafe.create({
  owners: ["0xAlice...", "0xBob...", "0xCharlie..."],
  threshold: 2,
  chainId: 1,
});

// Propose a transaction
const proposal = await safe.proposeTransaction({
  to: "0x...",
  value: "5000000000000000000", // 5 ETH
  data: "0x",
});

// Other owners can approve
await safe.approveTransaction(proposal.id, { signer: aliceWallet });

// Execute when threshold is met
await safe.executeTransaction(proposal.id);`,
        },
        {
          language: "Python",
          filename: "safe.py",
          code: `from hanzo import HanzoSafe

# Create a 2-of-3 multi-sig safe
safe = await HanzoSafe.create(
    owners=["0xAlice...", "0xBob...", "0xCharlie..."],
    threshold=2,
    chain_id=1
)

# Propose a transaction
proposal = await safe.propose_transaction(
    to="0x...",
    value="5000000000000000000",  # 5 ETH
    data="0x"
)

# Other owners can approve
await safe.approve_transaction(proposal.id, signer=alice_wallet)

# Execute when threshold is met
await safe.execute_transaction(proposal.id)`,
        },
        {
          language: "Go",
          filename: "safe.go",
          code: `package main

import "github.com/hanzoai/hanzo-go/blockchain"

func main() {
    // Create a 2-of-3 multi-sig safe
    safe, _ := blockchain.CreateSafe(ctx, blockchain.SafeOpts{
        Owners:    []string{"0xAlice...", "0xBob...", "0xCharlie..."},
        Threshold: 2,
        ChainID:   1,
    })

    // Propose a transaction
    proposal, _ := safe.ProposeTransaction(ctx, blockchain.TxProposal{
        To:    "0x...",
        Value: "5000000000000000000",
        Data:  "0x",
    })

    // Other owners can approve
    safe.ApproveTransaction(ctx, proposal.ID, aliceWallet)

    // Execute when threshold is met
    safe.ExecuteTransaction(ctx, proposal.ID)
}`,
        },
        {
          language: "Rust",
          filename: "safe.rs",
          code: `use hanzo_blockchain::{Safe, SafeOpts, TxProposal};

#[tokio::main]
async fn main() -> Result<()> {
    // Create a 2-of-3 multi-sig safe
    let safe = Safe::create(SafeOpts {
        owners: vec!["0xAlice...", "0xBob...", "0xCharlie..."],
        threshold: 2,
        chain_id: 1,
    }).await?;

    // Propose a transaction
    let proposal = safe.propose_transaction(TxProposal {
        to: "0x...".into(),
        value: "5000000000000000000".into(),
        data: "0x".into(),
    }).await?;

    // Other owners can approve
    safe.approve_transaction(&proposal.id, &alice_wallet).await?;

    // Execute when threshold is met
    safe.execute_transaction(&proposal.id).await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "safe.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    // Create a 2-of-3 multi-sig safe
    const char *owners[] = {"0xAlice...", "0xBob...", "0xCharlie..."};
    hanzo_safe_t *safe = hanzo_safe_create(owners, 3, 2, 1);

    // Propose a transaction
    hanzo_proposal_t *proposal = hanzo_safe_propose(
        safe, "0x...", "5000000000000000000", "0x"
    );

    // Other owners can approve
    hanzo_safe_approve(safe, proposal->id, alice_wallet);

    // Execute when threshold is met
    hanzo_safe_execute(safe, proposal->id);

    hanzo_safe_free(safe);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "safe.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    // Create a 2-of-3 multi-sig safe
    auto safe = hanzo::Safe::create({
        .owners = {"0xAlice...", "0xBob...", "0xCharlie..."},
        .threshold = 2,
        .chainId = 1
    });

    // Propose a transaction
    auto proposal = safe.proposeTransaction({
        .to = "0x...",
        .value = "5000000000000000000",
        .data = "0x"
    });

    // Other owners can approve
    safe.approveTransaction(proposal.id, aliceWallet);

    // Execute when threshold is met
    safe.executeTransaction(proposal.id);

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "safe.rb",
          code: `require 'hanzo/blockchain'

# Create a 2-of-3 multi-sig safe
safe = Hanzo::Safe.create(
  owners: ['0xAlice...', '0xBob...', '0xCharlie...'],
  threshold: 2,
  chain_id: 1
)

# Propose a transaction
proposal = safe.propose_transaction(
  to: '0x...',
  value: '5000000000000000000',  # 5 ETH
  data: '0x'
)

# Other owners can approve
safe.approve_transaction(proposal.id, signer: alice_wallet)

# Execute when threshold is met
safe.execute_transaction(proposal.id)`,
        },
      ]}
    />
  );
};

export default HanzoSafe;
