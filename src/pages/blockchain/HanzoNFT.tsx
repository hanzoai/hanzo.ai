import React from "react";
import {
  Image,
  Search,
  Database,
  Globe,
  Shield,
  Zap,
  RefreshCw,
  BarChart3,
  Layers,
} from "lucide-react";
import BlockchainProductLayout from "@/components/blockchain/BlockchainProductLayout";

const HanzoNFT = () => {
  return (
    <BlockchainProductLayout
      name="NFT API"
      tagline="NFT metadata, ownership & marketplace data"
      description="Complete NFT data API for ERC-721 and ERC-1155 tokens. Get metadata, ownership history, floor prices, rarity scores, and collection stats across all major chains."
      icon={Image}
      accentColor="#ec4899"
      features={[
        {
          icon: Image,
          title: "Rich Metadata",
          description: "Normalized metadata with images, traits, and attributes.",
        },
        {
          icon: Search,
          title: "Collection Discovery",
          description: "Search and explore NFT collections by name or address.",
        },
        {
          icon: Database,
          title: "Ownership History",
          description: "Track ownership changes, sales, and provenance.",
        },
        {
          icon: BarChart3,
          title: "Floor & Sales Data",
          description: "Real-time floor prices and recent sales from marketplaces.",
        },
        {
          icon: Layers,
          title: "Rarity Scoring",
          description: "Automatic trait rarity calculation for collections.",
        },
        {
          icon: Globe,
          title: "Multi-chain Support",
          description: "ERC-721 and ERC-1155 across Ethereum, Polygon, and more.",
        },
        {
          icon: Shield,
          title: "Spam Filtering",
          description: "Automatic detection and filtering of spam NFTs.",
        },
        {
          icon: Zap,
          title: "Fast Rendering",
          description: "Optimized image proxying and thumbnail generation.",
        },
        {
          icon: RefreshCw,
          title: "Metadata Refresh",
          description: "On-demand metadata refresh for dynamic NFTs.",
        },
      ]}
      useCases={[
        {
          title: "NFT Marketplaces",
          description: "Build trading platforms with rich collection and item data.",
        },
        {
          title: "Wallet Integration",
          description: "Display NFT collections with images and metadata.",
        },
        {
          title: "Gaming Platforms",
          description: "Track in-game assets and player inventories.",
        },
        {
          title: "Analytics Tools",
          description: "Collection analytics, whale tracking, and market trends.",
        },
      ]}
      chains={[
        "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
        "BNB Chain", "Avalanche", "Solana", "Lux",
      ]}
      codeExample={{
        filename: "nft.ts",
        code: `import { HanzoNFT } from "@hanzo/blockchain";

const nft = new HanzoNFT({
  apiKey: process.env.HANZO_API_KEY,
});

// Get all NFTs for an address
const collection = await nft.getNFTs({
  address: "0x...",
  chains: ["ethereum", "polygon"],
  includeMetadata: true,
});

// Get collection stats
const stats = await nft.getCollectionStats({
  contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
  chain: "ethereum",
});

// Search collections
const collections = await nft.searchCollections({
  query: "Bored Ape",
  chains: ["ethereum"],
});`,
      }}
    />
  );
};

export default HanzoNFT;
