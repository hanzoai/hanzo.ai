import React from "react";
import {
  Fingerprint,
  Shield,
  Key,
  Globe,
  Link2,
  CheckCircle,
  UserCheck,
  FileCheck,
  Wallet,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoID = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo ID"
      tagline="Decentralized identity for Web3"
      description="Extend your IAM to support Web3 identities. DIDs, Verifiable Credentials, and on-chain attestations—with single sign-on across all Hanzo services and your own applications."
      icon={Fingerprint}
      accentColor="#ec4899"
      features={[
        {
          icon: Key,
          title: "Decentralized Identifiers (DIDs)",
          description: "Self-sovereign identity using W3C DID standards. Users own their identity.",
        },
        {
          icon: CheckCircle,
          title: "Verifiable Credentials",
          description: "Issue and verify credentials that users can share across applications.",
        },
        {
          icon: Link2,
          title: "On-Chain Attestations",
          description: "Permanent, verifiable attestations stored on-chain for compliance and reputation.",
        },
        {
          icon: Globe,
          title: "Single Sign-On",
          description: "One identity across all Hanzo services and integrated applications.",
        },
        {
          icon: UserCheck,
          title: "KYC Integration",
          description: "Connect to KYC providers and issue verified identity credentials.",
        },
        {
          icon: Shield,
          title: "Privacy-Preserving",
          description: "Zero-knowledge proofs for selective disclosure. Prove attributes without revealing data.",
        },
        {
          icon: FileCheck,
          title: "Credential Types",
          description: "Built-in schemas for identity, age verification, accreditation, and more.",
        },
        {
          icon: Wallet,
          title: "Wallet Integration",
          description: "Store credentials in Hanzo Wallet. Users control their identity.",
        },
      ]}
      useCases={[
        {
          title: "Compliant DeFi",
          description: "Enable permissioned DeFi with verified identity credentials. Meet regulatory requirements while preserving privacy.",
        },
        {
          title: "Token Gating",
          description: "Gate access to content, communities, or features based on verifiable credentials.",
        },
        {
          title: "Reputation Systems",
          description: "Build on-chain reputation from verified credentials and past interactions.",
        },
        {
          title: "Cross-App Identity",
          description: "Users carry their verified identity and reputation across multiple applications.",
        },
      ]}
      codeExample={{
        filename: "identity.ts",
        code: `import { HanzoID } from "@hanzo/blockchain";

// Create a DID for a user
const did = await HanzoID.createDID({
  userId: "user_123",
  method: "did:lux", // or did:ethr, did:key
});

// Issue a verifiable credential
const credential = await HanzoID.issueCredential({
  issuer: "did:lux:issuer...",
  subject: did,
  type: "AgeVerification",
  claims: {
    ageOver: 18,
    verifiedAt: Date.now(),
  },
});

// Verify a credential
const result = await HanzoID.verifyCredential(credential);
console.log(result.valid); // true

// Create an on-chain attestation
await HanzoID.attest({
  subject: did,
  schema: "0x...", // EAS schema
  data: { verified: true },
});`,
      }}
    />
  );
};

export default HanzoID;
