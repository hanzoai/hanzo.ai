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
      codeExamples={[
        {
          language: "Node",
          filename: "storage.ts",
          code: `import { HanzoStorage } from "@hanzo/storage";

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
        },
        {
          language: "Python",
          filename: "storage.py",
          code: `from hanzo_storage import HanzoStorage
import os

storage = HanzoStorage(api_key=os.environ["HANZO_API_KEY"])

# Upload a file to IPFS
with open("nft-image.png", "rb") as f:
    result = storage.upload(
        file=f.read(),
        name="nft-image.png",
        provider="ipfs"  # or "arweave", "filecoin"
    )

print(result.cid)  # "Qm..."
print(result.url)  # "https://ipfs.hanzo.ai/ipfs/Qm..."

# Upload NFT metadata
metadata = storage.upload_json({
    "name": "Cool NFT #1",
    "description": "A very cool NFT",
    "image": result.url,
    "attributes": [
        {"trait_type": "Rarity", "value": "Legendary"}
    ]
})

print(metadata.url)  # Use in tokenURI

# Permanent storage on Arweave
with open("important.pdf", "rb") as f:
    permanent = storage.upload(
        file=f.read(),
        provider="arweave"
    )

print(permanent.arweave_id)  # Transaction ID`,
        },
        {
          language: "Go",
          filename: "storage.go",
          code: `package main

import (
    "fmt"
    "os"

    "github.com/hanzoai/storage-go"
)

func main() {
    client := storage.NewClient(os.Getenv("HANZO_API_KEY"))

    // Upload a file to IPFS
    data, _ := os.ReadFile("nft-image.png")
    result, err := client.Upload(&storage.UploadOptions{
        File:     data,
        Name:     "nft-image.png",
        Provider: storage.ProviderIPFS, // or ProviderArweave
    })
    if err != nil {
        panic(err)
    }

    fmt.Println(result.CID) // "Qm..."
    fmt.Println(result.URL) // "https://ipfs.hanzo.ai/ipfs/Qm..."

    // Upload NFT metadata
    metadata, _ := client.UploadJSON(map[string]interface{}{
        "name":        "Cool NFT #1",
        "description": "A very cool NFT",
        "image":       result.URL,
        "attributes": []map[string]string{
            {"trait_type": "Rarity", "value": "Legendary"},
        },
    })

    fmt.Println(metadata.URL) // Use in tokenURI

    // Permanent storage on Arweave
    doc, _ := os.ReadFile("important.pdf")
    permanent, _ := client.Upload(&storage.UploadOptions{
        File:     doc,
        Provider: storage.ProviderArweave,
    })

    fmt.Println(permanent.ArweaveID) // Transaction ID
}`,
        },
        {
          language: "Rust",
          filename: "storage.rs",
          code: `use hanzo_storage::{Client, Provider, UploadOptions};
use std::fs;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new(std::env::var("HANZO_API_KEY")?);

    // Upload a file to IPFS
    let data = fs::read("nft-image.png")?;
    let result = client.upload(UploadOptions {
        file: data,
        name: Some("nft-image.png".into()),
        provider: Provider::IPFS, // or Provider::Arweave
    }).await?;

    println!("{}", result.cid);  // "Qm..."
    println!("{}", result.url);  // "https://ipfs.hanzo.ai/ipfs/Qm..."

    // Upload NFT metadata
    let metadata = client.upload_json(serde_json::json!({
        "name": "Cool NFT #1",
        "description": "A very cool NFT",
        "image": result.url,
        "attributes": [
            {"trait_type": "Rarity", "value": "Legendary"}
        ]
    })).await?;

    println!("{}", metadata.url);  // Use in tokenURI

    // Permanent storage on Arweave
    let doc = fs::read("important.pdf")?;
    let permanent = client.upload(UploadOptions {
        file: doc,
        name: None,
        provider: Provider::Arweave,
    }).await?;

    println!("{}", permanent.arweave_id);  // Transaction ID
    Ok(())
}`,
        },
        {
          language: "C",
          filename: "storage.c",
          code: `#include <hanzo/storage.h>
#include <stdio.h>
#include <stdlib.h>

int main() {
    hanzo_storage_t *storage = hanzo_storage_new(getenv("HANZO_API_KEY"));

    // Upload a file to IPFS
    FILE *fp = fopen("nft-image.png", "rb");
    fseek(fp, 0, SEEK_END);
    size_t size = ftell(fp);
    fseek(fp, 0, SEEK_SET);

    uint8_t *data = malloc(size);
    fread(data, 1, size, fp);
    fclose(fp);

    hanzo_upload_result_t *result = hanzo_storage_upload(
        storage,
        data, size,
        "nft-image.png",
        HANZO_PROVIDER_IPFS  // or HANZO_PROVIDER_ARWEAVE
    );

    printf("CID: %s\\n", result->cid);  // "Qm..."
    printf("URL: %s\\n", result->url);  // "https://ipfs.hanzo.ai/ipfs/Qm..."

    // Upload NFT metadata
    const char *json = "{\\"name\\":\\"Cool NFT #1\\",\\"image\\":\\"...\\"}";
    hanzo_upload_result_t *metadata = hanzo_storage_upload_json(
        storage, json
    );

    printf("Metadata URL: %s\\n", metadata->url);

    // Permanent storage on Arweave
    hanzo_upload_result_t *permanent = hanzo_storage_upload(
        storage, doc_data, doc_size, NULL, HANZO_PROVIDER_ARWEAVE
    );

    printf("Arweave ID: %s\\n", permanent->arweave_id);

    // Cleanup
    hanzo_result_free(result);
    hanzo_result_free(metadata);
    hanzo_result_free(permanent);
    hanzo_storage_free(storage);
    free(data);

    return 0;
}`,
        },
        {
          language: "C++",
          filename: "storage.cpp",
          code: `#include <hanzo/storage.hpp>
#include <fstream>
#include <iostream>

int main() {
    hanzo::Storage storage(std::getenv("HANZO_API_KEY"));

    // Upload a file to IPFS
    std::ifstream file("nft-image.png", std::ios::binary);
    std::vector<uint8_t> data(
        (std::istreambuf_iterator<char>(file)),
        std::istreambuf_iterator<char>()
    );

    auto result = storage.upload({
        .file = data,
        .name = "nft-image.png",
        .provider = hanzo::Provider::IPFS  // or Arweave
    });

    std::cout << "CID: " << result.cid << std::endl;  // "Qm..."
    std::cout << "URL: " << result.url << std::endl;

    // Upload NFT metadata
    auto metadata = storage.upload_json({
        {"name", "Cool NFT #1"},
        {"description", "A very cool NFT"},
        {"image", result.url},
        {"attributes", {{
            {"trait_type", "Rarity"},
            {"value", "Legendary"}
        }}}
    });

    std::cout << "Metadata: " << metadata.url << std::endl;

    // Permanent storage on Arweave
    std::ifstream doc("important.pdf", std::ios::binary);
    std::vector<uint8_t> doc_data(
        (std::istreambuf_iterator<char>(doc)),
        std::istreambuf_iterator<char>()
    );

    auto permanent = storage.upload({
        .file = doc_data,
        .provider = hanzo::Provider::Arweave
    });

    std::cout << "Arweave ID: " << permanent.arweave_id << std::endl;

    return 0;
}`,
        },
        {
          language: "Ruby",
          filename: "storage.rb",
          code: `require 'hanzo/storage'

storage = Hanzo::Storage.new(api_key: ENV['HANZO_API_KEY'])

# Upload a file to IPFS
result = storage.upload(
  file: File.read('nft-image.png'),
  name: 'nft-image.png',
  provider: :ipfs  # or :arweave, :filecoin
)

puts result.cid  # "Qm..."
puts result.url  # "https://ipfs.hanzo.ai/ipfs/Qm..."

# Upload NFT metadata
metadata = storage.upload_json({
  name: 'Cool NFT #1',
  description: 'A very cool NFT',
  image: result.url,
  attributes: [
    { trait_type: 'Rarity', value: 'Legendary' }
  ]
})

puts metadata.url  # Use in tokenURI

# Permanent storage on Arweave
permanent = storage.upload(
  file: File.read('important.pdf'),
  provider: :arweave
)

puts permanent.arweave_id  # Transaction ID

# Batch upload multiple files
files = Dir.glob('images/*.png').map do |path|
  { file: File.read(path), name: File.basename(path) }
end

results = storage.upload_batch(files, provider: :ipfs)
results.each { |r| puts r.url }`,
        },
      ]}
    />
  );
};

export default HanzoStorage;
