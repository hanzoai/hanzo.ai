import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowRight,
  Terminal,
  Brain,
  Bot,
  Database,
  Zap,
  Shield,
  Cloud,
  Code,
  Server,
  Globe,
  CreditCard,
  Users,
  FileText,
  Settings,
  HelpCircle,
  ExternalLink,
  Command,
} from "lucide-react";

const BRAND_COLOR = "#fd4444";

interface CommandItem {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon: React.ElementType;
  category: string;
  external?: boolean;
  keywords?: string[];
}

const commands: CommandItem[] = [
  // Products
  { id: "dev", title: "Hanzo Dev", description: "Multi-agent coding workspace", href: "/dev", icon: Terminal, category: "Products", keywords: ["code", "coding", "agent"] },
  { id: "ai", title: "AI & Models", description: "Foundation models API", href: "/ai", icon: Brain, category: "Products", keywords: ["llm", "gpt", "model"] },
  { id: "operative", title: "Operative", description: "AI agents and automation", href: "/operative", icon: Bot, category: "Products", keywords: ["agent", "automation"] },
  { id: "base", title: "Hanzo Base", description: "Backend-as-a-Service", href: "/base", icon: Database, category: "Products", keywords: ["backend", "database"] },
  { id: "functions", title: "Functions", description: "Serverless compute", href: "/functions", icon: Zap, category: "Products", keywords: ["serverless", "lambda"] },
  { id: "vector", title: "Vector DB", description: "Vector database for AI", href: "/vector", icon: Database, category: "Products", keywords: ["embeddings", "rag"] },
  { id: "identity", title: "Identity", description: "Authentication & SSO", href: "/identity", icon: Shield, category: "Products", keywords: ["auth", "login", "sso"] },
  { id: "realtime", title: "Realtime", description: "WebSocket & live sync", href: "/realtime", icon: Globe, category: "Products", keywords: ["websocket", "sync"] },

  // Platform
  { id: "cloud", title: "Hanzo Cloud", description: "Complete cloud platform", href: "/cloud", icon: Cloud, category: "Platform", keywords: ["hosting", "deploy"] },
  { id: "platform", title: "Hanzo Platform", description: "Open source PaaS", href: "/platform", icon: Server, category: "Platform", keywords: ["self-host", "open source"] },
  { id: "blockchain", title: "Blockchain", description: "Web3 infrastructure", href: "/blockchain", icon: Code, category: "Platform", keywords: ["web3", "crypto"] },
  { id: "edge", title: "Edge", description: "Edge computing", href: "/edge", icon: Globe, category: "Platform", keywords: ["cdn", "edge"] },

  // Resources
  { id: "docs", title: "Documentation", description: "API docs and guides", href: "https://docs.hanzo.ai", icon: FileText, category: "Resources", external: true, keywords: ["api", "guide", "tutorial"] },
  { id: "pricing", title: "Pricing", description: "Plans and pricing", href: "/pricing", icon: CreditCard, category: "Resources", keywords: ["cost", "price", "plan"] },
  { id: "status", title: "Status", description: "System status", href: "/status", icon: Settings, category: "Resources", keywords: ["uptime", "health"] },
  { id: "contact", title: "Contact", description: "Get in touch", href: "/contact", icon: Users, category: "Resources", keywords: ["support", "help"] },

  // Company
  { id: "team", title: "Team", description: "Meet the team", href: "/team", icon: Users, category: "Company", keywords: ["about", "people"] },
  { id: "security", title: "Security", description: "Security practices", href: "/security", icon: Shield, category: "Company", keywords: ["compliance", "soc2"] },
  { id: "zen", title: "Zen of Hanzo", description: "Our principles", href: "/zen", icon: HelpCircle, category: "Company", keywords: ["philosophy", "values"] },
  { id: "enterprise", title: "Enterprise", description: "Enterprise solutions", href: "/enterprise", icon: Server, category: "Company", keywords: ["business", "sales"] },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Filter commands based on search
  const filteredCommands = search
    ? commands.filter(
        (cmd) =>
          cmd.title.toLowerCase().includes(search.toLowerCase()) ||
          cmd.description?.toLowerCase().includes(search.toLowerCase()) ||
          cmd.keywords?.some((k) => k.toLowerCase().includes(search.toLowerCase()))
      )
    : commands;

  // Group by category
  const groupedCommands = filteredCommands.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  // Flatten for keyboard navigation
  const flatCommands = Object.values(groupedCommands).flat();

  // Reset selection when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setSearch("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % flatCommands.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + flatCommands.length) % flatCommands.length);
          break;
        case "Enter":
          e.preventDefault();
          if (flatCommands[selectedIndex]) {
            const cmd = flatCommands[selectedIndex];
            if (cmd.external) {
              window.open(cmd.href, "_blank");
            } else {
              navigate(cmd.href);
            }
            onClose();
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    },
    [flatCommands, selectedIndex, navigate, onClose]
  );

  // Global keyboard shortcut
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (cmd: CommandItem) => {
    if (cmd.external) {
      window.open(cmd.href, "_blank");
    } else {
      navigate(cmd.href);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Command palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[101]"
          >
            <div className="bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-800">
                <Search className="w-5 h-5 text-neutral-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages, products, docs..."
                  className="flex-1 bg-transparent text-white text-sm placeholder-neutral-500 outline-none"
                />
                <kbd className="px-2 py-1 text-[10px] font-mono bg-neutral-800 rounded text-neutral-500">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[400px] overflow-y-auto py-2">
                {Object.keys(groupedCommands).length === 0 ? (
                  <div className="px-4 py-8 text-center text-neutral-500 text-sm">
                    No results found for "{search}"
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([category, items]) => (
                    <div key={category}>
                      <div className="px-4 py-2 text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">
                        {category}
                      </div>
                      {items.map((cmd) => {
                        const Icon = cmd.icon;
                        const index = flatCommands.findIndex((c) => c.id === cmd.id);
                        const isSelected = index === selectedIndex;

                        return (
                          <button
                            key={cmd.id}
                            onClick={() => handleSelect(cmd)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                              isSelected
                                ? "bg-neutral-800 text-white"
                                : "text-neutral-300 hover:bg-neutral-800/50"
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isSelected ? "bg-[#fd4444]/20" : "bg-neutral-800"
                              }`}
                            >
                              <Icon
                                className={`w-4 h-4 ${
                                  isSelected ? "text-[#fd4444]" : "text-neutral-500"
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium truncate">
                                  {cmd.title}
                                </span>
                                {cmd.external && (
                                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                                )}
                              </div>
                              {cmd.description && (
                                <div className="text-xs text-neutral-500 truncate">
                                  {cmd.description}
                                </div>
                              )}
                            </div>
                            {isSelected && (
                              <ArrowRight className="w-4 h-4 text-neutral-500" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-4 text-[10px] text-neutral-500">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↑</kbd>
                    <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-neutral-800 rounded">↵</kbd>
                    Select
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-neutral-500">
                  <Command className="w-3 h-3" />
                  <span>K to toggle</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
