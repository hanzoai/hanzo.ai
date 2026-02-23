import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  FolderKanban,
  Rocket,
  Bot,
  Database,
  Key,
  Shield,
  Link2,
  Settings,
  Bell,
  Layers,
  Activity,
  Brain
} from "lucide-react";

// Brand color
const BRAND_COLOR = "#fd4444";

// Proof chips data - communicates the vertical stack
const PROOF_CHIPS = [
  { label: "Agents", icon: Bot },
  { label: "Models", icon: Brain },
  { label: "Vector/SQL/KV", icon: Database },
  { label: "Deploy anywhere", icon: Rocket },
  { label: "IAM/KMS", icon: Shield },
  { label: "Audit", icon: Activity },
  { label: "OSS", icon: Layers },
];

// Dashboard nav items
const DASHBOARD_NAV = [
  { label: "Projects", icon: FolderKanban, active: true },
  { label: "Deployments", icon: Rocket },
  { label: "Models", icon: Bot },
  { label: "Vector", icon: Database },
  { label: "Agents", icon: Bot },
  { label: "IAM", icon: Shield },
  { label: "KMS", icon: Key },
  { label: "Audit", icon: Activity },
  { label: "Chains", icon: Link2 },
  { label: "Settings", icon: Settings },
];

// Terminal lines - demonstrates the vertical stack in one story
const TERMINAL_LINES = [
  { text: "$ curl -fsSL hanzo.sh | bash", type: "command" },
  { text: "$ hanzo team create acme", type: "command" },
  { text: "$ hanzo login", type: "command" },
  { text: "$ hanzo iam role bind --role engineer --to dev@acme.com", type: "command" },
  { text: "$ hanzo kms key create dev-secrets", type: "command" },
  { text: '$ hanzo dev "Ship a RAG API for ./docs. Expose /chat. Write tests."', type: "command" },
  { text: "✓ Plan created • policy=engineer • kms=dev-secrets", type: "success" },
  { text: "✓ Implemented: api/ tests/", type: "success" },
  { text: "✓ Ready to deploy as docs-api → target=k8s", type: "success" },
  { text: "? Approve deploy? (y/N) y", type: "prompt" },
  { text: "✓ Live: https://docs-api.acme.dev", type: "success", highlight: true },
];

// Mobile view tabs
type MobileTab = "dashboard" | "terminal" | "mobile";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileTab, setMobileTab] = useState<MobileTab>("dashboard");
  const [terminalStep, setTerminalStep] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setTerminalStep((prev) => {
        if (prev < TERMINAL_LINES.length) return prev + 1;
        return prev;
      });
    }, 600);
    return () => clearInterval(timer);
  }, [mounted]);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -fsSL hanzo.sh | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Dashboard Mock Component
  const DashboardMock = ({ className = "" }: { className?: string }) => (
    <div className={`rounded-xl border border-neutral-700 bg-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl ${className}`}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-neutral-800 bg-neutral-900">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-4">
          <div className="bg-neutral-800 rounded-md px-3 py-1 text-xs text-neutral-400 text-center max-w-[200px] mx-auto">
            cloud.hanzo.ai
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="flex min-h-[320px]">
        {/* Left nav */}
        <div className="w-[140px] lg:w-[160px] border-r border-neutral-800 bg-neutral-950 p-2 hidden sm:block">
          <div className="flex items-center gap-2 px-2 py-2 mb-3">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#fd4444] to-[#fd4444]/60 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">H</span>
            </div>
            <span className="text-white text-xs font-medium">Hanzo</span>
          </div>
          <nav className="space-y-0.5">
            {DASHBOARD_NAV.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] cursor-pointer transition-colors ${
                  item.active
                    ? "bg-[#fd4444]/20 text-[#fd4444]"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300"
                }`}
              >
                <item.icon className="w-3 h-3" />
                {item.label}
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 bg-neutral-950">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-sm font-medium">Project Overview</h3>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded-md bg-green-500/20 text-green-400 text-[10px] flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                All systems operational
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800">
              <div className="flex items-center gap-2 mb-1">
                <Rocket className="w-3 h-3 text-neutral-500" />
                <span className="text-[10px] text-neutral-500">Deployments</span>
              </div>
              <div className="text-lg font-semibold text-white">24</div>
              <div className="text-[10px] text-green-400">+3 this week</div>
            </div>
            <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800">
              <div className="flex items-center gap-2 mb-1">
                <Bot className="w-3 h-3 text-neutral-500" />
                <span className="text-[10px] text-neutral-500">Agent Runs</span>
              </div>
              <div className="text-lg font-semibold text-white">1.2K</div>
              <div className="text-[10px] text-neutral-400">Today</div>
            </div>
            <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800">
              <div className="flex items-center gap-2 mb-1">
                <Database className="w-3 h-3 text-neutral-500" />
                <span className="text-[10px] text-neutral-500">Vector Indexes</span>
              </div>
              <div className="text-lg font-semibold text-white">8</div>
              <div className="text-[10px] text-neutral-400">2.4M vectors</div>
            </div>
            <div className="bg-neutral-900 rounded-lg p-3 border border-neutral-800">
              <div className="flex items-center gap-2 mb-1">
                <Key className="w-3 h-3 text-neutral-500" />
                <span className="text-[10px] text-neutral-500">Keys/Secrets</span>
              </div>
              <div className="text-lg font-semibold text-white">47</div>
              <div className="text-[10px] text-neutral-400">Encrypted</div>
            </div>
          </div>

          {/* Recent deployments */}
          <div className="space-y-2">
            <div className="text-[11px] text-neutral-500 mb-2">Recent Deployments</div>
            {[
              { name: "docs-api", status: "live", region: "us-east-1", time: "2m ago" },
              { name: "chat-service", status: "live", region: "eu-west-1", time: "1h ago" },
              { name: "ml-pipeline", status: "building", region: "us-west-2", time: "now" },
            ].map((deploy) => (
              <div key={deploy.name} className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${deploy.status === "live" ? "bg-green-500" : "bg-yellow-500 animate-pulse"}`} />
                  <span className="text-sm text-white">{deploy.name}</span>
                  <span className="text-[10px] text-neutral-500 px-1.5 py-0.5 bg-neutral-800 rounded">{deploy.region}</span>
                </div>
                <span className="text-xs text-neutral-500">{deploy.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Terminal Mock Component - fixed height with scrolling content
  const TerminalMock = ({ className = "" }: { className?: string }) => (
    <div className={`rounded-xl border border-neutral-700 bg-neutral-900/95 backdrop-blur-sm overflow-hidden shadow-2xl ${className}`}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-neutral-800 bg-neutral-900 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-[10px] text-neutral-500 font-mono">terminal</span>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1 rounded hover:bg-neutral-800 transition-colors"
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-500" />
            ) : (
              <Copy className="h-3 w-3 text-neutral-500" />
            )}
          </button>
        </div>
      </div>
      {/* Terminal content - fixed height with scroll */}
      <div className="p-4 font-mono text-xs bg-neutral-950 h-[220px] overflow-y-auto">
        {TERMINAL_LINES.slice(0, terminalStep).map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className={`mb-1 ${
              line.type === "command" ? "text-neutral-300" :
              line.type === "success" ? "text-neutral-400" :
              line.type === "prompt" ? "text-yellow-400" : "text-neutral-400"
            }`}
          >
            {line.type === "success" && (
              <span className="text-green-500">✓ </span>
            )}
            {line.type === "prompt" && (
              <span className="text-yellow-500">? </span>
            )}
            <span className={line.highlight ? "text-[#fd4444]" : ""}>
              {line.text.replace(/^[✓?]\s*/, "")}
            </span>
          </motion.div>
        ))}
        {terminalStep < TERMINAL_LINES.length && (
          <div className="flex items-center gap-1">
            <span className="text-neutral-500">$</span>
            <span className="w-2 h-4 bg-white/80 animate-pulse" />
          </div>
        )}
        {terminalStep >= TERMINAL_LINES.length && (
          <div className="flex items-center gap-1 mt-2">
            <span className="text-neutral-500">$</span>
            <span className="w-2 h-4 bg-white/80 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );

  // Mobile Device Mock Component - iPhone 15 Pro dimensions (71.6mm x 146.6mm = ~2.05:1 ratio)
  // Using w-[150px] = h-[308px] for proper iPhone proportions
  const MobileDeviceMock = ({ className = "" }: { className?: string }) => (
    <div className={`w-[150px] h-[308px] rounded-[32px] border-[3px] border-neutral-600 bg-neutral-900 overflow-hidden shadow-2xl flex flex-col ${className}`}>
      {/* Dynamic Island */}
      <div className="bg-neutral-950 pt-2 pb-1 flex justify-center shrink-0">
        <div className="w-[60px] h-[18px] bg-black rounded-full" />
      </div>
      {/* App content */}
      <div className="bg-neutral-950 p-2.5 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-[#fd4444] flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">H</span>
            </div>
            <span className="text-white text-[10px] font-medium">Hanzo</span>
          </div>
          <Bell className="w-3.5 h-3.5 text-neutral-500" />
        </div>

        {/* Push notification style */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.3 }}
          className="bg-neutral-900 rounded-lg p-2 border border-neutral-800 mb-2 shrink-0"
        >
          <div className="flex items-center gap-1.5 mb-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[9px] text-green-400 font-medium">Deploy Complete</span>
          </div>
          <div className="text-[10px] text-white">docs-api is now live</div>
          <div className="text-[8px] text-neutral-500 mt-0.5 truncate">https://docs-api.acme.dev</div>
        </motion.div>

        <div className="space-y-1.5 flex-1 overflow-hidden">
          <div className="bg-neutral-900 rounded-lg p-1.5 border border-neutral-800">
            <div className="text-[8px] text-neutral-500">Status</div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[9px] text-green-400">All systems operational</span>
            </div>
          </div>
          <div className="bg-neutral-900 rounded-lg p-1.5 border border-neutral-800">
            <div className="text-[8px] text-neutral-500">Active Deployments</div>
            <div className="text-[10px] text-white">24 services</div>
          </div>
        </div>
      </div>
      {/* Home indicator */}
      <div className="bg-neutral-950 py-1.5 flex justify-center shrink-0">
        <div className="w-[40px] h-[4px] bg-neutral-600 rounded-full" />
      </div>
    </div>
  );

  // Mobile Tab Selector
  const MobileTabSelector = () => (
    <div className="flex bg-neutral-900 rounded-lg p-1 border border-neutral-800">
      {(["dashboard", "terminal", "mobile"] as MobileTab[]).map((tab) => (
        <button
          key={tab}
          onClick={() => setMobileTab(tab)}
          className={`flex-1 px-3 py-2 text-xs font-medium rounded-md transition-colors capitalize ${
            mobileTab === tab
              ? "bg-[#fd4444] text-white"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  return (
    <section className="pt-20 pb-8 px-4 md:px-8 lg:px-12">
      {/* Main Hero Container */}
      <div className="relative mx-auto w-full max-w-[1400px] min-h-[700px] rounded-2xl border border-neutral-800 overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">

        {/* Background gradients - z-0 */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Red accent glow - center */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 0.15 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
              filter: "blur(100px)",
            }}
          />
          {/* Secondary red glow - top right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 0.1 : 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
              filter: "blur(80px)",
            }}
          />
          {/* Subtle white glow - bottom left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 0.04 : 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, #ffffff 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Content - z-10 */}
        <div className="relative z-10 h-full px-6 md:px-10 lg:px-12 py-10 lg:py-12">

          {/* Desktop Layout: Two-column grid */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 h-full">

            {/* Left Column: Copy */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <p
                  className="inline-flex text-xs font-medium rounded-full px-4 py-2 border w-fit mb-6"
                  style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}40` }}
                >
                  Open-source AI Cloud for builders.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Main Headline */}
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
                  <span className="text-white">A vertically integrated</span>
                  <br />
                  <span style={{ color: BRAND_COLOR }}>AI platform.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {/* Subhead */}
                <p className="text-base xl:text-lg text-neutral-400 leading-relaxed mb-8 max-w-[500px]">
                  Agents, models, data, and deployment—with Team, IAM, KMS, and Audit built in. One platform from identity to production.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-row items-center gap-4 flex-wrap mb-8"
              >
                <Link
                  to="/products"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full font-medium tracking-tight transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: '#ffffff' }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="https://docs.hanzo.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full font-medium tracking-tight transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 hover:border-neutral-600 text-sm"
                >
                  Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>

              {/* Proof Chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap gap-2"
              >
                {PROOF_CHIPS.map((chip) => (
                  <div
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400"
                  >
                    <chip.icon className="w-3 h-3" />
                    {chip.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Demo Stack */}
            <div className="relative flex flex-col justify-center">
              {/* Dashboard - Primary/Large */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative z-20"
              >
                <DashboardMock />
              </motion.div>

              {/* Terminal - Below dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-20 mt-4 w-full max-w-[400px]"
              >
                <TerminalMock />
              </motion.div>

              {/* Mobile Device - Floating/overlapping right */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 20, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30"
              >
                <MobileDeviceMock />
              </motion.div>
            </div>
          </div>

          {/* Tablet Layout (md): Stack vertically */}
          <div className="hidden md:flex lg:hidden flex-col gap-8">
            {/* Copy section */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="inline-flex text-xs font-medium rounded-full px-4 py-2 border w-fit mb-6"
                  style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}40` }}
                >
                  Open-source AI Cloud for builders.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-4xl font-medium tracking-tight leading-[1.1] mb-6">
                  <span className="text-white">A vertically integrated</span>
                  <br />
                  <span style={{ color: BRAND_COLOR }}>AI platform.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p className="text-base text-neutral-400 leading-relaxed mb-6 max-w-[500px] mx-auto">
                  Agents, models, data, and deployment—with Team, IAM, KMS, and Audit built in.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-row items-center justify-center gap-4 flex-wrap mb-6"
              >
                <Link
                  to="/products"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full font-medium tracking-tight transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: '#ffffff' }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="https://docs.hanzo.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full font-medium tracking-tight transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 hover:border-neutral-600 text-sm"
                >
                  Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>

              {/* Proof Chips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {PROOF_CHIPS.map((chip) => (
                  <div
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-400"
                  >
                    <chip.icon className="w-3 h-3" />
                    {chip.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Demo stack - tablet */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <DashboardMock />
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <TerminalMock />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <MobileDeviceMock />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Layout (sm): Segmented control */}
          <div className="md:hidden flex flex-col gap-6">
            {/* Copy section */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p
                  className="inline-flex text-[11px] font-medium rounded-full px-3 py-1.5 border w-fit mb-4"
                  style={{ color: BRAND_COLOR, borderColor: `${BRAND_COLOR}40` }}
                >
                  Open-source AI Cloud for builders.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-2xl font-medium tracking-tight leading-[1.1] mb-4">
                  <span className="text-white">A vertically integrated</span>
                  <br />
                  <span style={{ color: BRAND_COLOR }}>AI platform.</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  Agents, models, data, and deployment—with Team, IAM, KMS, and Audit built in.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center gap-3 mb-4"
              >
                <Link
                  to="/products"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full font-medium tracking-tight transition-all hover:opacity-90 text-sm w-full max-w-[200px]"
                  style={{ backgroundColor: BRAND_COLOR, color: '#ffffff' }}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href="https://docs.hanzo.ai"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-full font-medium tracking-tight transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 hover:border-neutral-600 text-sm w-full max-w-[200px]"
                >
                  Documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>

              {/* Proof Chips - scrollable on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap justify-center gap-2"
              >
                {PROOF_CHIPS.slice(0, 4).map((chip) => (
                  <div
                    key={chip.label}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[10px] text-neutral-400"
                  >
                    <chip.icon className="w-2.5 h-2.5" />
                    {chip.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Mobile Tab Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <MobileTabSelector />
            </motion.div>

            {/* Tab Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="min-h-[300px]"
            >
              <AnimatePresence mode="wait">
                {mobileTab === "dashboard" && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DashboardMock />
                  </motion.div>
                )}
                {mobileTab === "terminal" && (
                  <motion.div
                    key="terminal"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TerminalMock />
                  </motion.div>
                )}
                {mobileTab === "mobile" && (
                  <motion.div
                    key="mobile"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-center"
                  >
                    <MobileDeviceMock />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
