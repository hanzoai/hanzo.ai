'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Server,
  Wallet,
  Database,
  Radio,
  Zap,
  Check,
  X,
  ExternalLink,
  ChevronDown,
  Layers,
  ArrowLeftRight,
} from "lucide-react";

type ChainCategory = "l1" | "l2" | "rollup" | "lux" | "cosmos" | "other";

interface Chain {
  name: string;
  id: string;
  category: ChainCategory;
  chainId?: number | string;
  rpcEndpoint: string;
  wsEndpoint?: string;
  explorer?: string;
  github?: string;
  faucet?: string;
  docs?: string;
  testnet?: boolean;
  support: {
    rpc: boolean;
    archive: boolean;
    websockets: boolean;
    indexer: boolean;
    tokens: boolean;
    nft: boolean;
    webhooks: boolean;
    smartWallets: boolean;
    dex: boolean;
    prices: boolean;
  };
}

const CHAINS: Chain[] = [
  // L1s
  {
    name: "Ethereum",
    id: "ethereum",
    category: "l1",
    chainId: 1,
    rpcEndpoint: "https://eth.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://eth.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://etherscan.io",
    github: "https://github.com/ethereum",
    docs: "https://ethereum.org/developers",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Solana",
    id: "solana",
    category: "l1",
    rpcEndpoint: "https://solana.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://solana.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://solscan.io",
    github: "https://github.com/solana-labs",
    docs: "https://docs.solana.com",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: false, dex: true, prices: true },
  },
  {
    name: "Bitcoin",
    id: "bitcoin",
    category: "l1",
    rpcEndpoint: "https://btc.hanzo.ai/v1/{API_KEY}",
    explorer: "https://mempool.space",
    github: "https://github.com/bitcoin/bitcoin",
    docs: "https://developer.bitcoin.org",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: false, nft: false, webhooks: true, smartWallets: false, dex: false, prices: true },
  },
  {
    name: "Avalanche C-Chain",
    id: "avalanche",
    category: "l1",
    chainId: 43114,
    rpcEndpoint: "https://avax.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://avax.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://snowtrace.io",
    github: "https://github.com/ava-labs",
    docs: "https://docs.avax.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "BNB Chain",
    id: "bnb",
    category: "l1",
    chainId: 56,
    rpcEndpoint: "https://bnb.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://bnb.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://bscscan.com",
    github: "https://github.com/bnb-chain",
    docs: "https://docs.bnbchain.org",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  // L2s & Rollups
  {
    name: "Arbitrum One",
    id: "arbitrum",
    category: "l2",
    chainId: 42161,
    rpcEndpoint: "https://arb.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://arb.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://arbiscan.io",
    github: "https://github.com/OffchainLabs",
    docs: "https://docs.arbitrum.io",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Optimism",
    id: "optimism",
    category: "l2",
    chainId: 10,
    rpcEndpoint: "https://opt.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://opt.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://optimistic.etherscan.io",
    github: "https://github.com/ethereum-optimism",
    docs: "https://docs.optimism.io",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Base",
    id: "base",
    category: "l2",
    chainId: 8453,
    rpcEndpoint: "https://base.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://base.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://basescan.org",
    github: "https://github.com/base-org",
    docs: "https://docs.base.org",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Polygon PoS",
    id: "polygon",
    category: "l2",
    chainId: 137,
    rpcEndpoint: "https://polygon.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://polygon.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://polygonscan.com",
    github: "https://github.com/maticnetwork",
    docs: "https://docs.polygon.technology",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "zkSync Era",
    id: "zksync",
    category: "rollup",
    chainId: 324,
    rpcEndpoint: "https://zksync.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://zksync.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://explorer.zksync.io",
    github: "https://github.com/matter-labs",
    docs: "https://docs.zksync.io",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Scroll",
    id: "scroll",
    category: "rollup",
    chainId: 534352,
    rpcEndpoint: "https://scroll.hanzo.ai/v1/{API_KEY}",
    explorer: "https://scrollscan.com",
    github: "https://github.com/scroll-tech",
    docs: "https://docs.scroll.io",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Linea",
    id: "linea",
    category: "rollup",
    chainId: 59144,
    rpcEndpoint: "https://linea.hanzo.ai/v1/{API_KEY}",
    explorer: "https://lineascan.build",
    github: "https://github.com/Consensys/linea",
    docs: "https://docs.linea.build",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  // Lux Ecosystem
  {
    name: "Lux P-Chain",
    id: "lux-pchain",
    category: "lux",
    rpcEndpoint: "https://lux-p.hanzo.ai/v1/{API_KEY}",
    explorer: "https://explorer.lux.network/p-chain",
    github: "https://github.com/luxfi/node",
    docs: "https://docs.lux.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: false, nft: false, webhooks: true, smartWallets: false, dex: false, prices: false },
  },
  {
    name: "Lux C-Chain",
    id: "lux-cchain",
    category: "lux",
    chainId: 96369,
    rpcEndpoint: "https://lux-c.hanzo.ai/v1/{API_KEY}",
    wsEndpoint: "wss://lux-c.hanzo.ai/ws/v1/{API_KEY}",
    explorer: "https://explorer.lux.network",
    github: "https://github.com/luxfi/node",
    docs: "https://docs.lux.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Lux D-Chain (DEX)",
    id: "lux-dchain",
    category: "lux",
    rpcEndpoint: "https://lux-d.hanzo.ai/v1/{API_KEY}",
    explorer: "https://explorer.lux.network/d-chain",
    github: "https://github.com/luxfi/node",
    docs: "https://docs.lux.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: false, webhooks: true, smartWallets: false, dex: true, prices: true },
  },
  {
    name: "Lux A-Chain",
    id: "lux-achain",
    category: "lux",
    rpcEndpoint: "https://lux-a.hanzo.ai/v1/{API_KEY}",
    explorer: "https://explorer.lux.network/a-chain",
    github: "https://github.com/luxfi/node",
    docs: "https://docs.lux.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: false, dex: false, prices: false },
  },
  {
    name: "Lux Z-Chain",
    id: "lux-zchain",
    category: "lux",
    rpcEndpoint: "https://lux-z.hanzo.ai/v1/{API_KEY}",
    explorer: "https://explorer.lux.network/z-chain",
    github: "https://github.com/luxfi/node",
    docs: "https://docs.lux.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: false, nft: false, webhooks: true, smartWallets: false, dex: false, prices: false },
  },
  {
    name: "Hanzo Network",
    id: "hanzo-network",
    category: "lux",
    chainId: 1088,
    rpcEndpoint: "https://rpc.hanzo.network/v1/{API_KEY}",
    wsEndpoint: "wss://ws.hanzo.network/v1/{API_KEY}",
    explorer: "https://explorer.hanzo.network",
    github: "https://github.com/hanzoai",
    docs: "https://docs.hanzo.ai/network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Zoo Network",
    id: "zoo-network",
    category: "lux",
    chainId: 2001,
    rpcEndpoint: "https://rpc.zoo.network/v1/{API_KEY}",
    wsEndpoint: "wss://ws.zoo.network/v1/{API_KEY}",
    explorer: "https://explorer.zoo.network",
    github: "https://github.com/zoo-labs",
    docs: "https://docs.zoo.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: true, prices: true },
  },
  {
    name: "Pars Network",
    id: "pars-network",
    category: "lux",
    rpcEndpoint: "https://rpc.pars.network/v1/{API_KEY}",
    explorer: "https://explorer.pars.network",
    docs: "https://docs.pars.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: true, dex: false, prices: true },
  },
  // Other Networks
  {
    name: "Cosmos Hub",
    id: "cosmos",
    category: "cosmos",
    rpcEndpoint: "https://cosmos.hanzo.ai/v1/{API_KEY}",
    explorer: "https://mintscan.io/cosmos",
    github: "https://github.com/cosmos/gaia",
    docs: "https://docs.cosmos.network",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: false, webhooks: true, smartWallets: false, dex: true, prices: true },
  },
  {
    name: "Aptos",
    id: "aptos",
    category: "other",
    rpcEndpoint: "https://aptos.hanzo.ai/v1/{API_KEY}",
    explorer: "https://explorer.aptoslabs.com",
    github: "https://github.com/aptos-labs",
    docs: "https://aptos.dev",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: false, dex: true, prices: true },
  },
  {
    name: "Sui",
    id: "sui",
    category: "other",
    rpcEndpoint: "https://sui.hanzo.ai/v1/{API_KEY}",
    explorer: "https://suiexplorer.com",
    github: "https://github.com/MystenLabs/sui",
    docs: "https://docs.sui.io",
    support: { rpc: true, archive: true, websockets: true, indexer: true, tokens: true, nft: true, webhooks: true, smartWallets: false, dex: true, prices: true },
  },
];

const CATEGORIES: { id: ChainCategory; name: string; icon: any }[] = [
  { id: "l1", name: "L1s", icon: Globe },
  { id: "l2", name: "L2s", icon: Layers },
  { id: "rollup", name: "Rollups", icon: Layers },
  { id: "lux", name: "Lux Ecosystem", icon: Zap },
  { id: "cosmos", name: "Cosmos", icon: Globe },
  { id: "other", name: "Other", icon: Server },
];

const PRODUCTS = [
  { key: "rpc", name: "RPC", icon: Server },
  { key: "archive", name: "Archive", icon: Database },
  { key: "websockets", name: "WebSockets", icon: Radio },
  { key: "indexer", name: "Indexer", icon: Search },
  { key: "tokens", name: "Tokens", icon: Database },
  { key: "nft", name: "NFT", icon: Layers },
  { key: "webhooks", name: "Webhooks", icon: Radio },
  { key: "smartWallets", name: "Wallets", icon: Wallet },
  { key: "dex", name: "DEX", icon: ArrowLeftRight },
  { key: "prices", name: "Prices", icon: Database },
];

const ChainDirectory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ChainCategory | "all">("all");
  const [expandedChain, setExpandedChain] = useState<string | null>(null);

  const filteredChains = CHAINS.filter((chain) => {
    const matchesSearch = chain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chain.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || chain.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 mb-6">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Chain Resource Directory</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">100+ Chains.</span>{" "}
              <span className="text-neutral-400">One API.</span>
            </h1>

            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
              RPC endpoints, chain IDs, WebSockets, explorers, and Hanzo product support for every network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="px-4 md:px-8 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
              <input
                type="text"
                placeholder="Search chains..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:border-white/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-white text-white"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-neutral-700"
                }`}
              >
                All
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-white text-white"
                      : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product Support Legend */}
          <div className="flex flex-wrap gap-4 mb-8 p-4 rounded-lg bg-neutral-900/50 border border-neutral-800">
            <span className="text-sm text-neutral-500">Hanzo Products:</span>
            {PRODUCTS.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.key} className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <Icon className="w-3.5 h-3.5" />
                  {product.name}
                </div>
              );
            })}
          </div>

          {/* Chains List */}
          <div className="space-y-3">
            {filteredChains.map((chain, index) => (
              <motion.div
                key={chain.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 overflow-hidden"
              >
                {/* Chain Header */}
                <button
                  onClick={() => setExpandedChain(expandedChain === chain.id ? null : chain.id)}
                  className="w-full p-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-white">{chain.name}</h3>
                      <div className="flex items-center gap-3 text-xs text-neutral-500">
                        {chain.chainId && <span>Chain ID: {chain.chainId}</span>}
                        <span className="capitalize">{chain.category === "lux" ? "Lux Ecosystem" : chain.category.toUpperCase()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Product Support Icons */}
                    <div className="hidden md:flex items-center gap-1">
                      {PRODUCTS.map((product) => {
                        const supported = chain.support[product.key as keyof typeof chain.support];
                        return (
                          <div
                            key={product.key}
                            className={`w-6 h-6 rounded flex items-center justify-center ${
                              supported ? "bg-white/10 text-white/70" : "bg-neutral-800 text-neutral-600"
                            }`}
                            title={product.name}
                          >
                            {supported ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                          </div>
                        );
                      })}
                    </div>
                    <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform ${expandedChain === chain.id ? "rotate-180" : ""}`} />
                  </div>
                </button>

                {/* Expanded Details */}
                {expandedChain === chain.id && (
                  <div className="px-4 pb-4 border-t border-neutral-800">
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      {/* Endpoints */}
                      <div>
                        <h4 className="text-sm font-medium text-neutral-400 mb-3">Endpoints</h4>
                        <div className="space-y-2">
                          <div className="p-3 rounded-lg bg-neutral-950 font-mono text-xs">
                            <span className="text-neutral-500">RPC:</span>{" "}
                            <span className="text-white">{chain.rpcEndpoint}</span>
                          </div>
                          {chain.wsEndpoint && (
                            <div className="p-3 rounded-lg bg-neutral-950 font-mono text-xs">
                              <span className="text-neutral-500">WS:</span>{" "}
                              <span className="text-white">{chain.wsEndpoint}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Resources */}
                      <div>
                        <h4 className="text-sm font-medium text-neutral-400 mb-3">Resources</h4>
                        <div className="flex flex-wrap gap-2">
                          {chain.explorer && (
                            <a
                              href={chain.explorer || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 text-xs text-neutral-300 hover:bg-neutral-700"
                            >
                              Explorer <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          {chain.github && (
                            <a
                              href={chain.github || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 text-xs text-neutral-300 hover:bg-neutral-700"
                            >
                              GitHub <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          {chain.docs && (
                            <a
                              href={chain.docs || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 text-xs text-neutral-300 hover:bg-neutral-700"
                            >
                              Docs <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          {chain.faucet && (
                            <a
                              href={chain.faucet || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 text-xs text-neutral-300 hover:bg-neutral-700"
                            >
                              Faucet <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Product Support Grid (Mobile) */}
                    <div className="md:hidden mt-4">
                      <h4 className="text-sm font-medium text-neutral-400 mb-3">Product Support</h4>
                      <div className="grid grid-cols-5 gap-2">
                        {PRODUCTS.map((product) => {
                          const supported = chain.support[product.key as keyof typeof chain.support];
                          const Icon = product.icon;
                          return (
                            <div
                              key={product.key}
                              className={`p-2 rounded-lg text-center ${
                                supported ? "bg-white/5 text-white/70" : "bg-neutral-800 text-neutral-600"
                              }`}
                            >
                              <Icon className="w-4 h-4 mx-auto mb-1" />
                              <span className="text-[10px]">{product.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredChains.length === 0 && (
            <div className="text-center py-12 text-neutral-500">
              No chains found matching your search.
            </div>
          )}
        </div>
      </section>

      
    </div>
  );
};

export default ChainDirectory;
