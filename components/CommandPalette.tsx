'use client'

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
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
  Layers,
  Coins,
  Wallet,
  ArrowLeftRight,
  Bell,
  Radio,
  Boxes,
  Fuel,
  Fingerprint,
  GitBranch,
  BarChart3,
  HardDrive,
  Trophy,
  Lock,
  Network,
  Image,
  Activity,
  Cpu,
  Package,
  Briefcase,
  Newspaper,
  Building,
  Heart,
  Palette,
  Download,
  ShoppingCart,
  Plug,
  MessageSquare,
  Music,
  PenTool,
  TrendingUp,
  Calculator,
  Eye,
  Sparkles
} from "lucide-react";

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
  // Core Products
  { id: "dev", title: "Hanzo Dev", description: "Multi-agent coding workspace", href: "/dev", icon: Terminal, category: "Products", keywords: ["code", "coding", "agent", "ide"] },
  { id: "ai", title: "AI & Models", description: "Foundation models API", href: "/ai", icon: Brain, category: "Products", keywords: ["llm", "gpt", "model", "api"] },
  { id: "operative", title: "Operative", description: "AI agents and automation", href: "/operative", icon: Bot, category: "Products", keywords: ["agent", "automation", "computer use"] },
  { id: "base", title: "Hanzo Base", description: "Backend-as-a-Service", href: "/base", icon: Database, category: "Products", keywords: ["backend", "database", "baas"] },
  { id: "functions", title: "Functions", description: "Serverless compute", href: "/functions", icon: Zap, category: "Products", keywords: ["serverless", "lambda", "edge"] },
  { id: "vector", title: "Vector DB", description: "Vector database for AI", href: "/vector", icon: Database, category: "Products", keywords: ["embeddings", "rag", "search"] },
  { id: "identity", title: "Identity", description: "Authentication & SSO", href: "/identity", icon: Shield, category: "Products", keywords: ["auth", "login", "sso", "oauth"] },
  { id: "realtime", title: "Realtime", description: "WebSocket & live sync", href: "/realtime", icon: Radio, category: "Products", keywords: ["websocket", "sync", "live"] },
  { id: "analytics", title: "Analytics", description: "Product analytics", href: "/analytics", icon: BarChart3, category: "Products", keywords: ["metrics", "tracking", "events"] },
  { id: "payments", title: "Payments", description: "Payment processing", href: "/payments", icon: CreditCard, category: "Products", keywords: ["stripe", "billing", "subscription"] },
  { id: "machines", title: "Machines", description: "GPU compute infrastructure", href: "/machines", icon: Cpu, category: "Products", keywords: ["gpu", "compute", "training"] },
  { id: "automations", title: "Automations", description: "Workflow automation", href: "/automations", icon: Activity, category: "Products", keywords: ["workflow", "triggers", "actions"] },
  { id: "ai-studio", title: "AI Studio", description: "Model training & fine-tuning", href: "/ai-studio", icon: Sparkles, category: "Products", keywords: ["training", "finetune", "studio"] },
  { id: "datastore", title: "Datastore", description: "Managed data storage", href: "/datastore", icon: HardDrive, category: "Products", keywords: ["storage", "database", "nosql"] },
  { id: "commerce", title: "Commerce", description: "E-commerce platform", href: "/commerce", icon: ShoppingCart, category: "Products", keywords: ["shop", "ecommerce", "store"] },
  { id: "mcp", title: "MCP", description: "Model Context Protocol", href: "/mcp", icon: Plug, category: "Products", keywords: ["context", "protocol", "tools"] },
  { id: "extension", title: "Extension", description: "Browser extension", href: "/extension", icon: Package, category: "Products", keywords: ["chrome", "browser", "addon"] },
  { id: "zap", title: "Zap", description: "Instant API generation", href: "/zap", icon: Zap, category: "Products", keywords: ["api", "instant", "generate"] },
  { id: "bot", title: "Hanzo Bot", description: "Chatbot builder", href: "/bot", icon: MessageSquare, category: "Products", keywords: ["chat", "bot", "conversational"] },
  { id: "code", title: "Hanzo Code", description: "Code generation", href: "/code", icon: Code, category: "Products", keywords: ["codegen", "generation", "autocomplete"] },
  { id: "app", title: "Hanzo App", description: "Mobile app builder", href: "/app", icon: Globe, category: "Products", keywords: ["mobile", "ios", "android"] },
  { id: "download", title: "Download", description: "Desktop apps", href: "/download", icon: Download, category: "Products", keywords: ["desktop", "mac", "windows"] },

  // Platform
  { id: "cloud", title: "Hanzo Cloud", description: "Complete cloud platform", href: "/cloud", icon: Cloud, category: "Platform", keywords: ["hosting", "deploy", "infrastructure"] },
  { id: "platform", title: "Hanzo Platform", description: "Open source PaaS", href: "/platform", icon: Server, category: "Platform", keywords: ["self-host", "open source", "paas"] },
  { id: "edge", title: "Edge", description: "Edge computing", href: "/edge", icon: Globe, category: "Platform", keywords: ["cdn", "edge", "global"] },
  { id: "nodes", title: "Nodes", description: "Distributed compute nodes", href: "/nodes", icon: Network, category: "Platform", keywords: ["nodes", "distributed", "compute"] },
  { id: "defi", title: "DeFi Stack", description: "DeFi infrastructure", href: "/defi", icon: Coins, category: "Platform", keywords: ["defi", "finance", "protocol"] },

  // Blockchain
  { id: "blockchain", title: "Blockchain Hub", description: "Web3 infrastructure", href: "/blockchain", icon: Layers, category: "Blockchain", keywords: ["web3", "crypto", "chain"] },
  { id: "chains", title: "Chains", description: "Multi-chain support", href: "/blockchain/chains", icon: Network, category: "Blockchain", keywords: ["multichain", "evm", "networks"] },
  { id: "indexer", title: "Indexer", description: "Blockchain indexing", href: "/blockchain/indexer", icon: Database, category: "Blockchain", keywords: ["index", "query", "subgraph"] },
  { id: "wallets", title: "Smart Wallets", description: "Account abstraction", href: "/blockchain/wallets", icon: Wallet, category: "Blockchain", keywords: ["aa", "erc4337", "smart account"] },
  { id: "rollups", title: "Rollups", description: "L2 scaling", href: "/blockchain/rollups", icon: Layers, category: "Blockchain", keywords: ["l2", "layer2", "scaling"] },
  { id: "tokens", title: "Tokens", description: "Token API", href: "/blockchain/tokens", icon: Coins, category: "Blockchain", keywords: ["erc20", "token", "balance"] },
  { id: "nft", title: "NFT API", description: "NFT metadata & ownership", href: "/blockchain/nft", icon: Image, category: "Blockchain", keywords: ["nft", "erc721", "erc1155"] },
  { id: "transfers", title: "Transfers", description: "Transfer tracking", href: "/blockchain/transfers", icon: ArrowLeftRight, category: "Blockchain", keywords: ["transfer", "history", "tracking"] },
  { id: "webhooks", title: "Webhooks", description: "Event notifications", href: "/blockchain/webhooks", icon: Bell, category: "Blockchain", keywords: ["webhook", "notification", "event"] },
  { id: "websockets", title: "Websockets", description: "Real-time streaming", href: "/blockchain/websockets", icon: Radio, category: "Blockchain", keywords: ["stream", "realtime", "subscribe"] },
  { id: "bundler", title: "Bundler", description: "ERC-4337 bundler", href: "/blockchain/bundler", icon: Boxes, category: "Blockchain", keywords: ["bundler", "userops", "erc4337"] },
  { id: "gas", title: "Gas", description: "Gas estimation & sponsorship", href: "/blockchain/gas", icon: Fuel, category: "Blockchain", keywords: ["gas", "paymaster", "sponsor"] },
  { id: "pay", title: "Pay", description: "Crypto payments", href: "/blockchain/pay", icon: CreditCard, category: "Blockchain", keywords: ["payment", "checkout", "crypto"] },
  { id: "id", title: "Hanzo ID", description: "Decentralized identity", href: "/blockchain/id", icon: Fingerprint, category: "Blockchain", keywords: ["did", "identity", "credential"] },
  { id: "bridge", title: "Bridge", description: "Cross-chain bridge", href: "/blockchain/bridge", icon: GitBranch, category: "Blockchain", keywords: ["bridge", "crosschain", "transfer"] },
  { id: "defi-api", title: "DeFi API", description: "DeFi integrations", href: "/blockchain/defi", icon: TrendingUp, category: "Blockchain", keywords: ["swap", "liquidity", "yield"] },
  { id: "oracle", title: "Oracle", description: "Price feeds & data", href: "/blockchain/oracle", icon: Eye, category: "Blockchain", keywords: ["oracle", "price", "feed"] },
  { id: "storage", title: "Storage", description: "IPFS & decentralized storage", href: "/blockchain/storage", icon: HardDrive, category: "Blockchain", keywords: ["ipfs", "arweave", "filecoin"] },
  { id: "explorer", title: "Explorer", description: "Block explorer", href: "/blockchain/explorer", icon: Search, category: "Blockchain", keywords: ["explorer", "scan", "transactions"] },
  { id: "quest", title: "Quest", description: "Gamified engagement", href: "/blockchain/quest", icon: Trophy, category: "Blockchain", keywords: ["quest", "rewards", "gamification"] },
  { id: "mpc", title: "MPC Wallets", description: "Multi-party computation", href: "/blockchain/mpc", icon: Lock, category: "Blockchain", keywords: ["mpc", "custody", "keyshare"] },
  { id: "exchange", title: "Exchange", description: "DEX infrastructure", href: "/blockchain/exchange", icon: ArrowLeftRight, category: "Blockchain", keywords: ["dex", "swap", "exchange"] },
  { id: "ipfs", title: "IPFS", description: "IPFS pinning service", href: "/blockchain/ipfs", icon: Globe, category: "Blockchain", keywords: ["ipfs", "pin", "cid"] },
  { id: "graph", title: "Graph", description: "Subgraph indexing", href: "/blockchain/graph", icon: Network, category: "Blockchain", keywords: ["graph", "subgraph", "query"] },
  { id: "directory", title: "Chain Directory", description: "Chain catalog", href: "/blockchain/directory", icon: FileText, category: "Blockchain", keywords: ["chains", "directory", "catalog"] },

  // AI Team
  { id: "team-dev", title: "Dev (AI)", description: "AI Developer agent", href: "/team/dev", icon: Terminal, category: "AI Team", keywords: ["dev", "developer", "coding"] },
  { id: "team-vi", title: "Vi (AI)", description: "AI Video agent", href: "/team/vi", icon: Eye, category: "AI Team", keywords: ["vi", "video", "visual"] },
  { id: "team-opera", title: "Opera (AI)", description: "AI Operative agent", href: "/team/opera", icon: Bot, category: "AI Team", keywords: ["opera", "operative", "automation"] },
  { id: "team-chat", title: "Chat (AI)", description: "AI Chat agent", href: "/team/chat", icon: MessageSquare, category: "AI Team", keywords: ["chat", "conversation", "assistant"] },
  { id: "team-db", title: "Db (AI)", description: "AI Database agent", href: "/team/db", icon: Database, category: "AI Team", keywords: ["db", "database", "sql"] },
  { id: "team-su", title: "Su (AI)", description: "AI Admin agent", href: "/team/su", icon: Shield, category: "AI Team", keywords: ["su", "admin", "superuser"] },
  { id: "team-art", title: "Art (AI)", description: "AI Art agent", href: "/team/art", icon: Palette, category: "AI Team", keywords: ["art", "image", "generation"] },
  { id: "team-mu", title: "Mu (AI)", description: "AI Music agent", href: "/team/mu", icon: Music, category: "AI Team", keywords: ["mu", "music", "audio"] },
  { id: "team-data", title: "Data (AI)", description: "AI Data agent", href: "/team/data", icon: BarChart3, category: "AI Team", keywords: ["data", "analytics", "insights"] },
  { id: "team-core", title: "Core (AI)", description: "AI Core agent", href: "/team/core", icon: Cpu, category: "AI Team", keywords: ["core", "system", "infrastructure"] },
  { id: "team-fin", title: "Fin (AI)", description: "AI Finance agent", href: "/team/fin", icon: TrendingUp, category: "AI Team", keywords: ["fin", "finance", "accounting"] },
  { id: "team-sec", title: "Sec (AI)", description: "AI Security agent", href: "/team/sec", icon: Shield, category: "AI Team", keywords: ["sec", "security", "audit"] },
  { id: "team-algo", title: "Algo (AI)", description: "AI Algorithm agent", href: "/team/algo", icon: Code, category: "AI Team", keywords: ["algo", "algorithm", "optimization"] },
  { id: "team-des", title: "Des (AI)", description: "AI Design agent", href: "/team/des", icon: PenTool, category: "AI Team", keywords: ["des", "design", "ui", "ux"] },
  { id: "team-mark", title: "Mark (AI)", description: "AI Marketing agent", href: "/team/mark", icon: TrendingUp, category: "AI Team", keywords: ["mark", "marketing", "growth"] },
  { id: "team-cal", title: "Cal (AI)", description: "AI Calendar agent", href: "/team/cal", icon: Calculator, category: "AI Team", keywords: ["cal", "calendar", "scheduling"] },

  // Company
  { id: "about", title: "About", description: "About Hanzo", href: "/about", icon: Building, category: "Company", keywords: ["about", "company", "mission"] },
  { id: "team", title: "Team", description: "Meet the team", href: "/team", icon: Users, category: "Company", keywords: ["team", "people", "leadership"] },
  { id: "leadership", title: "Leadership", description: "Executive team", href: "/leadership", icon: Users, category: "Company", keywords: ["leadership", "executives", "founders"] },
  { id: "careers", title: "Careers", description: "Join the team", href: "/careers", icon: Briefcase, category: "Company", keywords: ["jobs", "hiring", "careers"] },
  { id: "press", title: "Press", description: "News and media", href: "/press", icon: Newspaper, category: "Company", keywords: ["news", "press", "media"] },
  { id: "brand", title: "Brand", description: "Brand assets", href: "/brand", icon: Palette, category: "Company", keywords: ["logo", "brand", "assets"] },
  { id: "security", title: "Security", description: "Security practices", href: "/security", icon: Shield, category: "Company", keywords: ["compliance", "soc2", "security"] },
  { id: "contact", title: "Contact", description: "Get in touch", href: "/contact", icon: Users, category: "Company", keywords: ["support", "help", "contact"] },
  { id: "contact-sales", title: "Contact Sales", description: "Talk to sales", href: "/contact/sales", icon: Briefcase, category: "Company", keywords: ["sales", "demo", "enterprise"] },
  { id: "enterprise", title: "Enterprise", description: "Enterprise solutions", href: "/enterprise", icon: Building, category: "Company", keywords: ["enterprise", "business", "custom"] },
  { id: "solutions", title: "Solutions", description: "Industry solutions", href: "/solutions", icon: Layers, category: "Company", keywords: ["solutions", "industries", "use cases"] },
  { id: "philosophy", title: "Zen of Hanzo", description: "Our principles", href: "/philosophy", icon: Heart, category: "Company", keywords: ["philosophy", "values", "zen"] },
  { id: "open-source", title: "Open Source", description: "OSS projects", href: "/open-source", icon: Code, category: "Company", keywords: ["oss", "github", "open source"] },
  { id: "referrals", title: "Referrals", description: "Referral program", href: "/referrals", icon: Users, category: "Company", keywords: ["refer", "affiliate", "rewards"] },

  // Resources
  { id: "docs", title: "Documentation", description: "API docs and guides", href: "https://docs.hanzo.ai", icon: FileText, category: "Resources", external: true, keywords: ["api", "guide", "tutorial", "docs"] },
  { id: "pricing", title: "Pricing", description: "Plans and pricing", href: "/pricing", icon: CreditCard, category: "Resources", keywords: ["cost", "price", "plan", "tier"] },
  { id: "status", title: "Status", description: "System status", href: "/status", icon: Activity, category: "Resources", keywords: ["uptime", "health", "status"] },
  { id: "zen", title: "Zen", description: "Zen AI models", href: "/zen", icon: Brain, category: "Resources", keywords: ["zen", "models", "ai"] },
  { id: "zen-models", title: "Zen Models", description: "Model catalog", href: "/zen/models", icon: Brain, category: "Resources", keywords: ["models", "llm", "catalog"] },
  { id: "products", title: "All Products", description: "Product catalog", href: "/products", icon: Package, category: "Resources", keywords: ["products", "all", "catalog"] },
  { id: "integrations", title: "Integrations", description: "Third-party integrations", href: "/products/integrations", icon: Plug, category: "Resources", keywords: ["integrations", "connect", "apps"] },
];

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
              router.push(cmd.href);
            }
            onClose();
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    },
    [flatCommands, selectedIndex, router, onClose]
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
      router.push(cmd.href);
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
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[100]"
          />

          {/* Command palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] max-w-xl mx-auto z-[101]"
          >
            <div className="bg-secondary border border-border rounded-xl shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages, products, blockchain..."
                  className="flex-1 bg-transparent text-foreground text-sm placeholder-muted-foreground outline-none"
                />
                <kbd className="px-2 py-1 text-[10px] font-mono bg-neutral-800 rounded text-muted-foreground">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="max-h-[400px] overflow-y-auto py-2">
                {Object.keys(groupedCommands).length === 0 ? (
                  <div className="px-4 py-8 text-center text-muted-foreground text-sm">
                    No results found for "{search}"
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([category, items]) => (
                    <div key={category}>
                      <div className="px-4 py-2 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
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
                                ? "bg-neutral-800 text-foreground"
                                : "text-foreground/80 hover:bg-accent/50"
                            }`}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isSelected ? "bg-primary/20" : "bg-neutral-800"
                              }`}
                            >
                              <Icon
                                className={`w-4 h-4 ${
                                  isSelected ? "text-foreground" : "text-muted-foreground"
                                }`}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium truncate">
                                  {cmd.title}
                                </span>
                                {cmd.external && (
                                  <ExternalLink className="w-3 h-3 text-muted-foreground" />
                                )}
                              </div>
                              {cmd.description && (
                                <div className="text-xs text-muted-foreground truncate">
                                  {cmd.description}
                                </div>
                              )}
                            </div>
                            {isSelected && (
                              <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-4 text-[10px] text-muted-foreground">
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
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
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
