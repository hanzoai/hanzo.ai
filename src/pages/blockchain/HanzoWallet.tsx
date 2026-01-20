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
      codeExample={{
        filename: "wallet.ts",
        code: `import { HanzoWallet } from "@hanzo/blockchain";

// Create an embedded wallet for a user
const wallet = await HanzoWallet.createEmbedded({
  userId: "user_123",
  authMethod: "email", // or "google", "passkey"
});

// Sign a transaction
const tx = await wallet.sendTransaction({
  to: "0x...",
  value: "1000000000000000000", // 1 ETH
  chainId: 1,
});

// Or use server wallets for backend
const serverWallet = HanzoWallet.server({
  walletId: "wallet_abc",
});

const signature = await serverWallet.signMessage("Hello, Web3!");`,
      }}
    />
  );
};

export default HanzoWallet;
