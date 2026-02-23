import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Server, Search, Wallet, Shield, Zap, Bell, Database, Layers } from "lucide-react";

const BlockchainPricing = () => {
  const rpcPricing = [
    {
      name: "Free",
      description: "For hobby projects and testing",
      price: "Free",
      period: "",
      cuRate: "",
      features: [
        "300M compute units/month",
        "All supported chains",
        "Shared endpoints",
        "Community support",
        "Standard rate limits",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      description: "For production applications",
      price: "$49",
      period: "/mo",
      cuRate: "$0.45/M CU overage",
      features: [
        "400M compute units/month",
        "100+ supported chains",
        "Dedicated endpoints",
        "Priority support",
        "Enhanced rate limits",
        "Webhook notifications",
        "Archive data access",
      ],
      highlighted: true,
    },
    {
      name: "Scale",
      description: "For high-volume applications",
      price: "$199",
      period: "/mo",
      cuRate: "$0.45/M CU overage",
      features: [
        "1.5B compute units/month",
        "100+ supported chains",
        "Private clusters",
        "24/7 dedicated support",
        "Custom rate limits",
        "Advanced analytics",
        "Archive data (full)",
        "SLA guarantee (99.9%)",
      ],
      highlighted: false,
    },
    {
      name: "Enterprise",
      description: "For mission-critical infrastructure",
      price: "Custom",
      period: "",
      cuRate: "Volume discounts",
      features: [
        "Unlimited compute units",
        "All supported chains",
        "Dedicated infrastructure",
        "Solution architect",
        "Custom SLA (99.999%)",
        "On-premise option",
        "White-glove onboarding",
        "Committed use discounts",
      ],
      highlighted: false,
    },
  ];

  const apiPricing = [
    {
      name: "Token API",
      icon: Database,
      description: "ERC-20 balances, transfers, prices, metadata",
      pricing: [
        { tier: "Free", requests: "10K/mo", price: "$0" },
        { tier: "Growth", requests: "500K/mo", price: "$29/mo" },
        { tier: "Scale", requests: "5M/mo", price: "$149/mo" },
      ],
    },
    {
      name: "NFT API",
      icon: Layers,
      description: "ERC-721/1155 ownership, metadata, transfers",
      pricing: [
        { tier: "Free", requests: "10K/mo", price: "$0" },
        { tier: "Growth", requests: "500K/mo", price: "$39/mo" },
        { tier: "Scale", requests: "5M/mo", price: "$199/mo" },
      ],
    },
    {
      name: "Wallet API",
      icon: Wallet,
      description: "Portfolio, history, activity across chains",
      pricing: [
        { tier: "Free", requests: "5K/mo", price: "$0" },
        { tier: "Growth", requests: "250K/mo", price: "$49/mo" },
        { tier: "Scale", requests: "2.5M/mo", price: "$249/mo" },
      ],
    },
    {
      name: "Indexer API",
      icon: Search,
      description: "Events, logs, decoded data, custom indexes",
      pricing: [
        { tier: "Free", requests: "10K/mo", price: "$0" },
        { tier: "Growth", requests: "1M/mo", price: "$79/mo" },
        { tier: "Scale", requests: "10M/mo", price: "$399/mo" },
      ],
    },
  ];

  const premiumFeatures = [
    {
      name: "Smart Wallets (ERC-4337)",
      icon: Shield,
      description: "Account abstraction, gasless transactions, social recovery",
      price: "$0.05/UserOp",
      note: "First 1,000 UserOps free/month",
    },
    {
      name: "Gas API",
      icon: Zap,
      description: "Real-time gas estimates, priority fees, EIP-1559 data",
      price: "Included",
      note: "With any paid RPC plan",
    },
    {
      name: "Webhooks",
      icon: Bell,
      description: "Address activity, token transfers, contract events",
      price: "$19/mo",
      note: "Up to 100 webhooks, 1M deliveries",
    },
  ];

  const supportedChains = [
    "Ethereum", "Polygon", "Arbitrum", "Optimism", "Base",
    "Solana", "Avalanche", "BNB Chain", "Lux", "zkSync",
    "Starknet", "Linea", "Scroll", "Fantom", "Moonbeam",
    "Celo", "Gnosis", "Aurora", "Harmony", "Cronos",
  ];

  return (
    <div className="max-w-7xl mx-auto mb-16">
      {/* RPC Plans */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-4">RPC Node Access</h2>
        <p className="text-neutral-400 text-lg mb-8">
          Multi-chain RPC endpoints with 100+ chains, archive data, and enterprise-grade reliability
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {rpcPricing.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 border ${
                plan.highlighted
                  ? "border-[#fd4444] bg-[#fd4444]/5"
                  : "border-gray-800 bg-gray-900/30"
              }`}
            >
              {plan.highlighted && (
                <div className="text-xs font-semibold text-[#fd4444] uppercase tracking-wider mb-2">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-neutral-500 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-neutral-500">{plan.period}</span>
                {plan.cuRate && (
                  <div className="text-xs text-neutral-500 mt-1">{plan.cuRate}</div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-[#fd4444] shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-[#fd4444] hover:bg-[#e03e3e] text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-sm text-neutral-500 text-center">
          All plans include WebSocket support, JSON-RPC & REST APIs, and auto-scaling.
          <a href="/blockchain" className="text-[#fd4444] hover:underline ml-1">Compare all features →</a>
        </p>
      </div>

      {/* Data APIs */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Data APIs</h2>
        <p className="text-neutral-400 text-lg mb-8">
          High-level APIs for tokens, NFTs, wallets, and blockchain indexing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {apiPricing.map((api) => {
            const Icon = api.icon;
            return (
              <div key={api.name} className="rounded-xl p-6 border border-gray-800 bg-gray-900/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#fd4444]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#fd4444]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{api.name}</h3>
                    <p className="text-neutral-500 text-sm">{api.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  {api.pricing.map((tier) => (
                    <div key={tier.tier} className="text-center p-3 rounded-lg bg-black/20">
                      <div className="text-neutral-500 text-xs mb-1">{tier.tier}</div>
                      <div className="font-semibold">{tier.price}</div>
                      <div className="text-xs text-neutral-500">{tier.requests}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Premium Features */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-4">Premium Features</h2>
        <p className="text-neutral-400 text-lg mb-8">
          Advanced capabilities for production applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {premiumFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.name} className="rounded-xl p-6 border border-gray-800 bg-gray-900/30">
                <div className="w-10 h-10 rounded-lg bg-[#fd4444]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#fd4444]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                <p className="text-neutral-500 text-sm mb-4">{feature.description}</p>
                <div className="text-xl font-bold text-white">{feature.price}</div>
                <div className="text-xs text-neutral-500 mt-1">{feature.note}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Supported Chains */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center">100+ Supported Chains</h2>
        <p className="text-neutral-400 text-lg mb-8 text-center">
          EVM, Solana, Cosmos, and more
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {supportedChains.map((chain) => (
            <div
              key={chain}
              className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-sm text-neutral-300"
            >
              {chain}
            </div>
          ))}
          <div className="px-4 py-2 rounded-full border border-[#fd4444]/30 bg-[#fd4444]/10 text-sm text-[#fd4444]">
            +80 more
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to build on Web3?</h2>
        <p className="text-neutral-400 mb-6">
          Start free and scale as you grow. No credit card required.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-[#fd4444] hover:bg-[#e03e3e] text-white px-8">
            Start Building Free
          </Button>
          <Button size="lg" variant="outline" className="border-neutral-700 hover:border-neutral-600">
            Talk to Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlockchainPricing;
