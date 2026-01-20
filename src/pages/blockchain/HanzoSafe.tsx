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
      accentColor="#8b5cf6"
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
      codeExample={{
        filename: "safe.ts",
        code: `import { HanzoSafe } from "@hanzo/blockchain";

// Create a 2-of-3 multi-sig safe
const safe = await HanzoSafe.create({
  owners: [
    "0xAlice...",
    "0xBob...",
    "0xCharlie...",
  ],
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
await safe.approveTransaction(proposal.id, {
  signer: aliceWallet,
});

// Execute when threshold is met
await safe.executeTransaction(proposal.id);`,
      }}
    />
  );
};

export default HanzoSafe;
