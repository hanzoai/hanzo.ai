'use client'

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@hanzo/ui";
import { Search, ChevronDown, ExternalLink, Sparkles, Code, Zap, Eye, MessageSquare, Terminal, ArrowRight } from "lucide-react";
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

const zenModels = [
  {
    name: "Zen4 Max",
    tag: "Frontier",
    description: "Most capable — reasoning, analysis, agentic coding",
    icon: Sparkles,
    href: "https://cloud.hanzo.ai",
  },
  {
    name: "Zen4 Coder",
    tag: "Code",
    description: "Code generation, review, and debugging",
    icon: Code,
    href: "https://cloud.hanzo.ai",
  },
  {
    name: "Zen4 Mini",
    tag: "Free",
    description: "Ultra-fast — $5 free credit on signup",
    icon: Zap,
    href: "https://cloud.hanzo.ai",
  },
  {
    name: "Zen3 Omni",
    tag: "Multimodal",
    description: "Text, vision, audio in one model",
    icon: Eye,
    href: "https://cloud.hanzo.ai",
  },
];

const products = [
  { label: "Hanzo Chat", description: "Chat with Zen + 100+ models", href: "https://hanzo.chat", icon: MessageSquare, external: true },
  { label: "Hanzo Dev", description: "AI coding agent for your IDE", href: "/dev", icon: Terminal, external: false },
  { label: "API Console", description: "Keys, usage, billing", href: "https://console.hanzo.ai", icon: Code, external: true },
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
              className="absolute right-0 mt-2 w-[400px] bg-secondary/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden z-[100]"
            >
              {/* Zen Models */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Zen AI Models
                  </span>
                  <Link
                    href="/zen"
                    onClick={() => setIsDropdownOpen(false)}
                    className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    All models →
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-1.5">
                  {zenModels.map((model) => {
                    const ModelIcon = model.icon;
                    return (
                      <a
                        key={model.name}
                        href={model.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                        className="group flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-accent transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-neutral-800/80 flex items-center justify-center flex-shrink-0 group-hover:bg-neutral-700/80 transition-colors">
                          <ModelIcon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[13px] font-medium text-foreground">{model.name}</span>
                            <span className="text-[9px] font-semibold tracking-wider uppercase text-muted-foreground bg-neutral-800/60 px-1 py-px rounded">
                              {model.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{model.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-border" />

              {/* Products */}
              <div className="p-3">
                <div className="px-1 mb-1.5">
                  <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                    Products
                  </span>
                </div>
                {products.map((item) => {
                  const ItemIcon = item.icon;
                  const content = (
                    <div className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg hover:bg-accent transition-colors">
                      <ItemIcon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-[13px] font-medium text-foreground">{item.label}</span>
                        <span className="text-[11px] text-muted-foreground ml-2">{item.description}</span>
                      </div>
                      {item.external && <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0" />}
                    </div>
                  );

                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link key={item.label} href={item.href} onClick={() => setIsDropdownOpen(false)}>
                      {content}
                    </Link>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="p-3 pt-0">
                <a
                  href="https://console.hanzo.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                >
                  Get API Key — $5 free credit
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthButtons;
