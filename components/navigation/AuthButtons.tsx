'use client'

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@hanzo/ui";
import { Search, ChevronDown, ExternalLink, Brain, Video, Music, Box, Cpu, Sparkles, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthButtonsProps {
  user: User | null;
  onOpenCommandPalette?: () => void;
}

// Zen model family for dropdown
const zenModels = [
  {
    name: "zen-eco",
    params: "4B",
    description: "Fast general-purpose LLM",
    icon: Brain,
    href: "https://huggingface.co/zenlm/zen-eco-4b-instruct",
    external: true,
  },
  {
    name: "zen-omni",
    params: "8B",
    description: "Multimodal vision + audio",
    icon: Sparkles,
    href: "https://huggingface.co/zenlm/zen-omni-8b",
    external: true,
  },
  {
    name: "zen-director",
    params: "5B",
    description: "Text-to-video generation",
    icon: Video,
    href: "https://huggingface.co/zenlm/zen-director-5b",
    external: true,
  },
  {
    name: "zen-3d",
    params: "3.3B",
    description: "3D asset generation",
    icon: Box,
    href: "https://huggingface.co/zenlm/zen-3d",
    external: true,
  },
];

// Quick access items
const quickAccess = [
  { label: "Hanzo Bot", href: "https://hanzo.bot", external: true },
  { label: "Hanzo Dev", href: "/dev", external: false },
  { label: "Hanzo Cloud", href: "https://cloud.hanzo.ai", external: true },
  { label: "All Zen Models", href: "/zen", external: false },
  { label: "Pricing", href: "/pricing", external: false },
];

// Login items
const loginItems = [
  { label: "Hanzo Chat", href: "https://hanzo.chat", external: true },
  { label: "Hanzo Cloud", href: "https://cloud.hanzo.ai", external: true },
];

const AuthButtons = ({ user, onOpenCommandPalette }: AuthButtonsProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isDropdownOpen]);

  return (
    <div className="hidden md:flex items-center space-x-3">
      {/* Search / Command palette trigger - unified widget */}
      <button
        onClick={onOpenCommandPalette}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-800/50 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-accent hover:border-neutral-600 transition-all text-sm"
        aria-label="Search (⌘K)"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline text-muted-foreground text-xs">Search...</span>
        <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-secondary/80 border border-border/50 rounded text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {/* Contact sales button */}
      <Link href="/contact">
        <Button
          variant="ghost"
          size="sm"
          className="text-foreground/80 hover:text-foreground hover:bg-transparent text-sm font-medium h-9"
        >
          Contact sales
        </Button>
      </Link>

      {/* Log in button */}
      <a
        href="https://app.hanzo.bot"
        className="inline-flex items-center justify-center border border-border hover:bg-accent rounded-full h-9 px-4 text-sm font-medium text-foreground transition-all duration-200"
      >
        Log in
      </a>

      {/* Try Zen dropdown - hover activated */}
      <div
        className="relative"
        ref={dropdownRef}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-accent active:bg-neutral-300 rounded-full h-9 px-4 text-sm font-medium transition-all duration-200"
        >
          Try Zen
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-[420px] bg-secondary/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden z-[100]"
            >
              {/* Zen AI Models - Featured Section */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-foreground/60" />
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Zen AI Models
                    </span>
                  </div>
                  <Link
                    href="/zen"
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    View all →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {zenModels.map((model) => {
                    const ModelIcon = model.icon;
                    return (
                      <a
                        key={model.name}
                        href={model.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                        className="group flex items-start gap-3 p-3 rounded-xl bg-neutral-800/50 hover:bg-accent transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-neutral-700/50 flex items-center justify-center flex-shrink-0">
                          <ModelIcon className="w-4 h-4 text-foreground/80 group-hover:text-foreground transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-foreground">{model.name}</span>
                            <span className="text-[10px] font-mono text-muted-foreground">{model.params}</span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{model.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Quick Access */}
              <div className="py-2">
                <div className="px-4 py-1.5">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                    Quick Access
                  </span>
                </div>
                {quickAccess.map((item) => {
                  const content = (
                    <div className="flex items-center justify-between w-full py-2 px-4 text-foreground hover:bg-accent/50 transition-colors">
                      <span className="text-sm">{item.label}</span>
                      {item.external && <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />}
                    </div>
                  );

                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.href || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link key={item.label} href={item.href || "#"} onClick={() => setIsDropdownOpen(false)}>
                      {content}
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-border" />

              {/* Login Section */}
              <div className="py-2">
                <div className="px-4 py-1.5">
                  <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                    Log in
                  </span>
                </div>
                {loginItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center justify-between w-full py-2 px-4 text-foreground hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-sm">{item.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthButtons;
