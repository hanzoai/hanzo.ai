import React from "react";
import {
  HardDrive,
  Globe,
  Lock,
  Zap,
  Image,
  FileJson,
  RefreshCw,
  Shield,
  Link2,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoStorage = () => {
  return (
    <BlockchainProductLayout
      name="Hanzo Storage"
      tagline="Decentralized storage, simple API"
      description="Store NFT metadata, user content, and application data on IPFS, Arweave, or Filecoin. A simple API abstracts the complexity of decentralized storage."
      icon={HardDrive}
      accentColor="#14b8a6"
      features={[
        {
          icon: Globe,
          title: "Global CDN",
          description: "Content served from edge locations worldwide. Sub-100ms retrieval.",
        },
        {
          icon: HardDrive,
          title: "IPFS Pinning",
          description: "Pin content to IPFS with redundant storage across multiple providers.",
        },
        {
          icon: Lock,
          title: "Permanent Storage",
          description: "Arweave integration for truly permanent, immutable storage.",
        },
        {
          icon: Zap,
          title: "Instant Uploads",
          description: "Upload files and get a content-addressed URL immediately.",
        },
        {
          icon: Image,
          title: "NFT Metadata",
          description: "Optimized for NFT metadata with ERC-721 and ERC-1155 standards.",
        },
        {
          icon: FileJson,
          title: "JSON Storage",
          description: "Store and query JSON documents with automatic indexing.",
        },
        {
          icon: RefreshCw,
          title: "Versioning",
          description: "Track content versions with IPNS for mutable references.",
        },
        {
          icon: Shield,
          title: "Access Control",
          description: "Encrypted storage with token-gated access controls.",
        },
        {
          icon: Link2,
          title: "Gateway URLs",
          description: "Get HTTP gateway URLs for easy integration with any application.",
        },
      ]}
      useCases={[
        {
          title: "NFT Collections",
          description: "Store metadata and images for NFT collections with guaranteed availability.",
        },
        {
          title: "dApp Assets",
          description: "Host frontend assets, documentation, and user-generated content.",
        },
        {
          title: "Data Backup",
          description: "Permanent backup of important documents and records on Arweave.",
        },
        {
          title: "Social Platforms",
          description: "Store user posts, media, and profiles with decentralized ownership.",
        },
      ]}
      codeExample={{
        filename: "storage.ts",
        code: `import { HanzoStorage } from "@hanzo/blockchain";

const storage = new HanzoStorage({
  apiKey: process.env.HANZO_API_KEY,
});

// Upload a file to IPFS
const result = await storage.upload({
  file: imageBuffer,
  name: "nft-image.png",
  provider: "ipfs", // or "arweave", "filecoin"
});

console.log(result.cid); // "Qm..."
console.log(result.url); // "https://ipfs.hanzo.ai/ipfs/Qm..."

// Upload NFT metadata
const metadata = await storage.uploadJSON({
  name: "Cool NFT #1",
  description: "A very cool NFT",
  image: result.url,
  attributes: [
    { trait_type: "Rarity", value: "Legendary" },
  ],
});

console.log(metadata.url); // Use in tokenURI

// Permanent storage on Arweave
const permanent = await storage.upload({
  file: importantDocument,
  provider: "arweave",
});

console.log(permanent.arweaveId); // Transaction ID`,
      }}
    />
  );
};

export default HanzoStorage;
