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
      codeExamples={[
        {
          language: "Node",
          filename: "nft.ts",
          code: `import { HanzoNFT } from "@hanzo/blockchain";

const nft = new HanzoNFT({ apiKey: process.env.HANZO_API_KEY });

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
});`,
        },
        {
          language: "Python",
          filename: "nft.py",
          code: `from hanzo import HanzoNFT

nft = HanzoNFT(api_key=os.environ["HANZO_API_KEY"])

# Get all NFTs for an address
collection = await nft.get_nfts(
    address="0x...",
    chains=["ethereum", "polygon"],
    include_metadata=True
)

# Get collection stats
stats = await nft.get_collection_stats(
    contract="0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    chain="ethereum"
)`,
        },
        {
          language: "Go",
          filename: "nft.go",
          code: `package main

import "github.com/hanzoai/hanzo-go/blockchain"

func main() {
    nft := blockchain.NewNFTClient(os.Getenv("HANZO_API_KEY"))

    // Get all NFTs for an address
    collection, _ := nft.GetNFTs(ctx, blockchain.NFTQuery{
        Address: "0x...",
        Chains:  []string{"ethereum", "polygon"},
        IncludeMetadata: true,
    })

    // Get collection stats
    stats, _ := nft.GetCollectionStats(ctx, blockchain.CollectionQuery{
        Contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        Chain:    "ethereum",
    })
}`,
        },
        {
          language: "Rust",
          filename: "nft.rs",
          code: `use hanzo_blockchain::NFTClient;

#[tokio::main]
async fn main() -> Result<()> {
    let nft = NFTClient::new(std::env::var("HANZO_API_KEY")?);

    // Get all NFTs for an address
    let collection = nft.get_nfts(NFTQuery {
        address: "0x...",
        chains: vec!["ethereum", "polygon"],
        include_metadata: true,
    }).await?;

    // Get collection stats
    let stats = nft.get_collection_stats(CollectionQuery {
        contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        chain: "ethereum",
    }).await?;
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "nft.c",
          code: `#include <hanzo/blockchain.h>

int main() {
    hanzo_nft_t *nft = hanzo_nft_new(getenv("HANZO_API_KEY"));

    // Get all NFTs for an address
    const char *chains[] = {"ethereum", "polygon"};
    hanzo_nft_collection_t *collection = hanzo_nft_get_nfts(
        nft, "0x...", chains, 2, true
    );

    // Get collection stats
    hanzo_nft_stats_t *stats = hanzo_nft_get_collection_stats(
        nft, "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d", "ethereum"
    );

    hanzo_nft_free(nft);
    return 0;
}`,
        },
        {
          language: "C++",
          filename: "nft.cpp",
          code: `#include <hanzo/blockchain.hpp>

int main() {
    auto nft = hanzo::NFT(std::getenv("HANZO_API_KEY"));

    // Get all NFTs for an address
    auto collection = nft.getNFTs({
        .address = "0x...",
        .chains = {"ethereum", "polygon"},
        .includeMetadata = true
    });

    // Get collection stats
    auto stats = nft.getCollectionStats({
        .contract = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
        .chain = "ethereum"
    });

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "nft.rb",
          code: `require 'hanzo/blockchain'

nft = Hanzo::NFT.new(api_key: ENV['HANZO_API_KEY'])

# Get all NFTs for an address
collection = nft.get_nfts(
  address: '0x...',
  chains: ['ethereum', 'polygon'],
  include_metadata: true
)

# Get collection stats
stats = nft.get_collection_stats(
  contract: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
  chain: 'ethereum'
)`,
        },
      ]}
    />
  );
};

export default HanzoNFT;
