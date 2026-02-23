'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Brain,
  Sparkles,
  Route,
  Bot,
  Puzzle,
  FileCode,
  GitBranch,
  GraduationCap,
  Server,
  Terminal,
  Layout,
  Code,
  Boxes,
  FileJson,
  Workflow,
  Search,
  MonitorCheck,
  Shield,
  Lock,
  Database,
  Key,
  HardDrive,
  Gauge,
  Globe,
  Network,
  Router,
  CloudCog,
  Container,
  Layers,
  Table,
  FileSearch,
  Zap,
  Webhook,
  ArrowLeftRight,
  Filter,
  Store,
  Users,
  FileCheck,
  KeyRound,
  ClipboardCheck,
  AlertTriangle,
  Building,
  CreditCard,
  Settings,
  Activity,
  LineChart,
  ScrollText,
  BarChart3,
  Bell,
  Eye,
  AlertCircle,
  Rocket,
  Box,
  FolderOpen,
  Map,
  ShieldCheck,
  Scale,
  GitMerge,
  Tag,
  ChevronRight
} from "lucide-react";

const BRAND_COLOR = "#ffffff";

interface Product {
  name: string;
  description: string;
  icon: React.ElementType;
  href?: string;
  badge?: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  products: Product[];
}

const CATEGORIES: Category[] = [
  {
    id: "ai-agents",
    name: "AI & Agents",
    description: "Build intelligent applications with foundation models and agent frameworks",
    icon: Brain,
    color: "#ffffff",
    products: [
      { name: "Hanzo Models", description: "Foundation models API", icon: Brain, href: "/ai" },
      { name: "Zen", description: "Multimodal AI engine", icon: Sparkles, href: "/ai" },
      { name: "Router", description: "Intelligent model routing", icon: Route },
      { name: "Agent", description: "Agent orchestration", icon: Bot, href: "/operative" },
      { name: "MCP", description: "Model Context Protocol", icon: Puzzle },
      { name: "Notebooks", description: "Interactive AI notebooks", icon: FileCode, href: "/ai-studio" },
      { name: "Pipelines", description: "ML workflow automation", icon: GitBranch },
      { name: "Training", description: "Fine-tuning infrastructure", icon: GraduationCap },
      { name: "Serving", description: "Model deployment", icon: Server },
    ],
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    description: "Everything you need to build, test, and deploy applications",
    icon: Terminal,
    color: "#d4d4d4",
    products: [
      { name: "Hanzo Dev", description: "AI coding assistant", icon: Terminal, href: "/dev" },
      { name: "CLI", description: "Command line tools", icon: Terminal, href: "/download" },
      { name: "Console", description: "Web dashboard", icon: Layout },
      { name: "SDKs", description: "Client libraries", icon: Code },
      { name: "Templates", description: "Starter projects", icon: Boxes },
      { name: "Flow", description: "Visual workflow builder", icon: Workflow },
      { name: "Local", description: "Local dev environment", icon: HardDrive },
      { name: "Inspector", description: "Debug & inspect tools", icon: Search },
      { name: "Status", description: "Service health", icon: MonitorCheck, href: "/status" },
    ],
  },
  {
    id: "app-platform",
    name: "App Platform",
    description: "Build and scale applications with managed backend services",
    icon: Layers,
    color: "#a3a3a3",
    products: [
      { name: "Hanzo Base", description: "Backend-as-a-Service", icon: Database, href: "/base" },
      { name: "Auth", description: "Authentication & SSO", icon: Shield, href: "/identity" },
      { name: "Functions", description: "Serverless compute", icon: Zap, href: "/functions" },
      { name: "Runtime", description: "Application runtime", icon: Server },
      { name: "Machines", description: "Managed VMs", icon: Server, href: "/machines" },
      { name: "API", description: "API management", icon: FileJson },
      { name: "Realtime", description: "WebSocket & sync", icon: Activity, href: "/realtime" },
      { name: "Secrets", description: "Secret management", icon: Key },
      { name: "Commerce", description: "E-commerce APIs", icon: CreditCard, href: "/commerce" },
    ],
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud Infrastructure",
    description: "Global infrastructure for compute, networking, and storage",
    icon: CloudCog,
    color: "#d4d4d4",
    products: [
      { name: "Edge", description: "Edge computing", icon: Globe, href: "/edge" },
      { name: "Gateway", description: "API gateway", icon: Router },
      { name: "HKE", description: "Kubernetes engine", icon: Container },
      { name: "Networking", description: "Virtual networks", icon: Network },
      { name: "DNS", description: "DNS management", icon: Globe },
      { name: "Tunnel", description: "Secure tunnels", icon: Lock },
      { name: "Proxy", description: "Reverse proxy", icon: ArrowLeftRight },
      { name: "Registry", description: "Container registry", icon: Box },
      { name: "Cloud", description: "IaaS foundation", icon: CloudCog },
    ],
  },
  {
    id: "databases-search",
    name: "Databases & Search",
    description: "Managed databases, vector stores, and search engines",
    icon: Database,
    color: "#a3a3a3",
    products: [
      { name: "SQL", description: "PostgreSQL managed", icon: Table },
      { name: "SQL Vector", description: "pgvector enabled", icon: Table, href: "/vector" },
      { name: "DocumentDB", description: "Document database", icon: FileJson },
      { name: "KV", description: "Key-value store", icon: Key },
      { name: "Vector", description: "Vector database", icon: Gauge, href: "/vector" },
      { name: "Storage", description: "Object storage", icon: HardDrive },
      { name: "Search", description: "Full-text search", icon: Search },
      { name: "Datastore", description: "Multi-model DB", icon: Database, href: "/datastore" },
      { name: "Datastore Vector", description: "Vector-enabled", icon: Database },
    ],
  },
  {
    id: "integrations-automation",
    name: "Integrations & Automation",
    description: "Connect systems and automate workflows across your stack",
    icon: Workflow,
    color: "#d4d4d4",
    products: [
      { name: "Automations", description: "Workflow automation", icon: Workflow, href: "/automations" },
      { name: "Connectors", description: "Pre-built integrations", icon: Puzzle },
      { name: "Webhooks", description: "Event webhooks", icon: Webhook },
      { name: "Event Routing", description: "Event bus", icon: Route },
      { name: "API Gateway", description: "Gateway management", icon: Router },
      { name: "ETL", description: "Data pipelines", icon: GitBranch },
      { name: "CDC", description: "Change data capture", icon: Filter },
      { name: "Marketplace", description: "Integration hub", icon: Store },
      { name: "iPaaS SDK", description: "Build connectors", icon: Code },
    ],
  },
  {
    id: "security-governance",
    name: "Security & Governance",
    description: "Enterprise security, compliance, and access management",
    icon: Shield,
    color: "#a3a3a3",
    products: [
      { name: "IAM", description: "Identity & access", icon: Users },
      { name: "Policy", description: "Policy engine", icon: FileCheck },
      { name: "KMS", description: "Key management", icon: KeyRound },
      { name: "Audit", description: "Audit logging", icon: ClipboardCheck },
      { name: "Approvals", description: "Approval workflows", icon: ShieldCheck },
      { name: "Quotas & Limits", description: "Resource limits", icon: AlertTriangle },
      { name: "Orgs & Teams", description: "Organization mgmt", icon: Building },
      { name: "Billing", description: "Usage & billing", icon: CreditCard },
      { name: "Admin", description: "Admin console", icon: Settings },
    ],
  },
  {
    id: "observability-operations",
    name: "Observability & Operations",
    description: "Monitor, debug, and operate your applications at scale",
    icon: Activity,
    color: "#d4d4d4",
    products: [
      { name: "Telemetry", description: "OpenTelemetry", icon: Activity, href: "/analytics" },
      { name: "Metrics", description: "Time-series metrics", icon: LineChart },
      { name: "Logs", description: "Log aggregation", icon: ScrollText },
      { name: "Traces", description: "Distributed tracing", icon: GitBranch },
      { name: "Dashboards", description: "Custom dashboards", icon: BarChart3 },
      { name: "Alerts", description: "Alerting rules", icon: Bell },
      { name: "LLM Observability", description: "AI monitoring", icon: Eye },
      { name: "Incidents", description: "Incident mgmt", icon: AlertCircle },
      { name: "Status", description: "Status pages", icon: MonitorCheck },
    ],
  },
  {
    id: "hosting-delivery",
    name: "Hosting & Delivery",
    description: "Deploy and deliver applications globally with zero config",
    icon: Rocket,
    color: "#a3a3a3",
    products: [
      { name: "Deploy", description: "Git deployments", icon: Rocket },
      { name: "Containers", description: "Container hosting", icon: Container },
      { name: "Static Hosting", description: "Static sites", icon: FolderOpen },
      { name: "CDN", description: "Content delivery", icon: Globe },
      { name: "Domains", description: "Domain management", icon: Map },
      { name: "TLS", description: "SSL certificates", icon: ShieldCheck },
      { name: "Load Balancing", description: "Traffic distribution", icon: Scale },
      { name: "Environments", description: "Deploy environments", icon: Layers },
      { name: "Releases", description: "Release management", icon: Tag },
    ],
  },
];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete Cloud Platform
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale modern applications.
            90+ managed services, one unified platform.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, index) => {
            const CategoryIcon = category.icon;
            const isExpanded = activeCategory === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`bg-neutral-900/50 border rounded-xl overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "border-neutral-700 ring-1 ring-neutral-700"
                    : "border-neutral-800 hover:border-neutral-700"
                }`}
              >
                {/* Category header */}
                <button
                  onClick={() =>
                    setActiveCategory(isExpanded ? null : category.id)
                  }
                  className="w-full p-6 text-left flex items-start gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <CategoryIcon
                      className="w-6 h-6"
                      style={{ color: category.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">
                        {category.name}
                      </h3>
                      <ChevronRight
                        className={`w-5 h-5 text-neutral-500 transition-transform ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    <p className="text-sm text-neutral-400 mt-1">
                      {category.description}
                    </p>
                    <div className="text-xs text-neutral-500 mt-2">
                      {category.products.length} services
                    </div>
                  </div>
                </button>

                {/* Expanded products list */}
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-neutral-800"
                  >
                    <div className="p-4 grid grid-cols-3 gap-2">
                      {category.products.map((product) => {
                        const ProductIcon = product.icon;
                        const content = (
                          <div className="p-3 rounded-lg bg-neutral-950/50 hover:bg-neutral-800/50 transition-colors text-center group">
                            <ProductIcon
                              className="w-5 h-5 mx-auto mb-2 text-neutral-400 group-hover:text-white transition-colors"
                              style={{
                                color: product.href ? category.color : undefined,
                              }}
                            />
                            <div className="text-xs font-medium text-white truncate">
                              {product.name}
                            </div>
                            <div className="text-[10px] text-neutral-500 truncate">
                              {product.description}
                            </div>
                          </div>
                        );

                        return product.href ? (
                          <Link key={product.name} href={product.href || "#"}>
                            {content}
                          </Link>
                        ) : (
                          <div key={product.name}>{content}</div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-400 mb-6">
            All services available via API, CLI, Console, and SDKs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/pricing"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
              style={{ backgroundColor: BRAND_COLOR, color: "#fff" }}
            >
              View Pricing
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://docs.hanzo.ai/cloud"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
            >
              Read Documentation
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCatalog;
