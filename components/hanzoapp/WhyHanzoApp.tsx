'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Monitor,
  Cpu,
  Shield,
  Cloud,
  Lock,
  Zap,
  Users,
  HardDrive,
  Coins,
  Wifi,
  RefreshCw,
} from "lucide-react";

const BRAND_COLOR = "#ffffff";

const modes = [
  {
    id: "web",
    icon: Globe,
    title: "Web App",
    tagline: "Build from anywhere",
    description: "Access Hanzo from any browser. Your workspace syncs across devices automatically.",
    features: [
      { icon: Cloud, text: "Cloud-synced workspaces" },
      { icon: Users, text: "Real-time collaboration" },
      { icon: RefreshCw, text: "Auto-save and versioning" },
    ],
    color: "#f97316", // blue
  },
  {
    id: "desktop",
    icon: Monitor,
    title: "Desktop App",
    tagline: "Native performance",
    description: "Full-featured native app for macOS, Windows, and Linux with system integrations.",
    features: [
      { icon: Zap, text: "Native speed and UI" },
      { icon: Wifi, text: "Works offline" },
      { icon: HardDrive, text: "Local file access" },
    ],
    color: "#10b981", // green
  },
  {
    id: "local",
    icon: Cpu,
    title: "Local AI",
    tagline: "Private and offline",
    description: "Run AI models locally on your hardware. Zero data leaves your machine.",
    features: [
      { icon: Lock, text: "Complete privacy" },
      { icon: Cpu, text: "GPU accelerated" },
      { icon: Zap, text: "Zero latency" },
    ],
    color: "#ffffff", // purple
  },
  {
    id: "node",
    icon: Shield,
    title: "Hanzo Node",
    tagline: "Earn while you build",
    description: "Connect to the decentralized network. Contribute compute, earn rewards.",
    features: [
      { icon: Coins, text: "Earn LUX tokens" },
      { icon: Shield, text: "Proof of AI consensus" },
      { icon: Users, text: "Decentralized network" },
    ],
    color: BRAND_COLOR,
  },
];

const WhyHanzoApp = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Four ways to Hanzo
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Choose how you want to work. All modes sync seamlessly when connected.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {modes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${mode.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: mode.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{mode.title}</h3>
                    <p className="text-sm mb-3" style={{ color: mode.color }}>{mode.tagline}</p>
                    <p className="text-sm text-neutral-400 mb-4">{mode.description}</p>
                    <div className="space-y-2">
                      {mode.features.map((feature) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div key={feature.text} className="flex items-center gap-2 text-sm text-neutral-400">
                            <FeatureIcon className="w-4 h-4 text-neutral-500" />
                            <span>{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHanzoApp;
