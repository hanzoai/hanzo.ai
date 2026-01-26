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
      codeExamples={[
        {
          language: "Node",
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
        },
        {
          language: "Python",
          filename: "identity.py",
          code: `from hanzo import HanzoID
import time

# Create a DID for a user
did = await HanzoID.create_did(
    user_id="user_123",
    method="did:lux"  # or did:ethr, did:key
)

# Issue a verifiable credential
credential = await HanzoID.issue_credential(
    issuer="did:lux:issuer...",
    subject=did,
    type="AgeVerification",
    claims={
        "ageOver": 18,
        "verifiedAt": int(time.time() * 1000)
    }
)

# Verify a credential
result = await HanzoID.verify_credential(credential)
print(f"Valid: {result.valid}")  # True

# Create an on-chain attestation
await HanzoID.attest(
    subject=did,
    schema="0x...",  # EAS schema
    data={"verified": True}
)`,
        },
        {
          language: "Go",
          filename: "identity.go",
          code: `package main

import (
    "fmt"
    "time"
    "github.com/hanzoai/hanzo-go/blockchain"
)

func main() {
    // Create a DID for a user
    did, _ := blockchain.CreateDID(ctx, blockchain.DIDOpts{
        UserID: "user_123",
        Method: "did:lux",
    })

    // Issue a verifiable credential
    credential, _ := blockchain.IssueCredential(ctx, blockchain.CredentialOpts{
        Issuer:  "did:lux:issuer...",
        Subject: did,
        Type:    "AgeVerification",
        Claims: map[string]any{
            "ageOver":    18,
            "verifiedAt": time.Now().UnixMilli(),
        },
    })

    // Verify a credential
    result, _ := blockchain.VerifyCredential(ctx, credential)
    fmt.Printf("Valid: %v\\n", result.Valid)

    // Create an on-chain attestation
    blockchain.Attest(ctx, blockchain.AttestOpts{
        Subject: did,
        Schema:  "0x...",
        Data:    map[string]any{"verified": true},
    })
}`,
        },
        {
          language: "Rust",
          filename: "identity.rs",
          code: `use hanzo_blockchain::{HanzoID, DIDOpts, CredentialOpts};

#[tokio::main]
async fn main() -> Result<()> {
    // Create a DID for a user
    let did = HanzoID::create_did(DIDOpts {
        user_id: "user_123".into(),
        method: "did:lux".into(),
    }).await?;

    // Issue a verifiable credential
    let credential = HanzoID::issue_credential(CredentialOpts {
        issuer: "did:lux:issuer...".into(),
        subject: did.clone(),
        credential_type: "AgeVerification".into(),
        claims: json!({
            "ageOver": 18,
            "verifiedAt": chrono::Utc::now().timestamp_millis()
        }),
    }).await?;

    // Verify a credential
    let result = HanzoID::verify_credential(&credential).await?;
    println!("Valid: {}", result.valid);

    // Create an on-chain attestation
    HanzoID::attest(AttestOpts {
        subject: did,
        schema: "0x...".into(),
        data: json!({"verified": true}),
    }).await?;

    Ok(())
}`,
        },
        {
          language: "C",
          filename: "identity.c",
          code: `#include <hanzo/blockchain.h>
#include <time.h>

int main() {
    // Create a DID for a user
    hanzo_did_t *did = hanzo_create_did("user_123", "did:lux");

    // Issue a verifiable credential
    hanzo_claims_t claims = {
        .age_over = 18,
        .verified_at = time(NULL) * 1000
    };
    hanzo_credential_t *credential = hanzo_issue_credential(
        "did:lux:issuer...",
        did,
        "AgeVerification",
        &claims
    );

    // Verify a credential
    hanzo_verify_result_t result;
    hanzo_verify_credential(credential, &result);
    printf("Valid: %s\\n", result.valid ? "true" : "false");

    // Create an on-chain attestation
    hanzo_attest(did, "0x...", "{\\\"verified\\\": true}");

    hanzo_did_free(did);
    hanzo_credential_free(credential);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "identity.cpp",
          code: `#include <hanzo/blockchain.hpp>
#include <iostream>
#include <chrono>

int main() {
    // Create a DID for a user
    auto did = hanzo::HanzoID::createDID({
        .userId = "user_123",
        .method = "did:lux"
    });

    // Issue a verifiable credential
    auto credential = hanzo::HanzoID::issueCredential({
        .issuer = "did:lux:issuer...",
        .subject = did,
        .type = "AgeVerification",
        .claims = {
            {"ageOver", 18},
            {"verifiedAt", std::chrono::system_clock::now()}
        }
    });

    // Verify a credential
    auto result = hanzo::HanzoID::verifyCredential(credential);
    std::cout << "Valid: " << std::boolalpha << result.valid << std::endl;

    // Create an on-chain attestation
    hanzo::HanzoID::attest({
        .subject = did,
        .schema = "0x...",
        .data = {{"verified", true}}
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "identity.rb",
          code: `require 'hanzo/blockchain'

# Create a DID for a user
did = Hanzo::ID.create_did(
  user_id: 'user_123',
  method: 'did:lux'  # or did:ethr, did:key
)

# Issue a verifiable credential
credential = Hanzo::ID.issue_credential(
  issuer: 'did:lux:issuer...',
  subject: did,
  type: 'AgeVerification',
  claims: {
    ageOver: 18,
    verifiedAt: (Time.now.to_f * 1000).to_i
  }
)

# Verify a credential
result = Hanzo::ID.verify_credential(credential)
puts "Valid: #{result.valid}"  # true

# Create an on-chain attestation
Hanzo::ID.attest(
  subject: did,
  schema: '0x...',  # EAS schema
  data: { verified: true }
)`,
        },
      ]}
    />
  );
};

export default HanzoID;
