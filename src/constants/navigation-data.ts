import {
  Activity,
  AlertTriangle,
  AppWindow,
  BarChart3,
  Bell,
  Bot,
  Brain,
  Braces,
  Building2,
  Car,
  Cloud,
  Code,
  Container,
  Cpu,
  CreditCard,
  Database,
  DollarSign,
  Factory,
  FileCode,
  FileText,
  Gauge,
  GitBranch,
  Globe,
  HardDrive,
  Key,
  KeyRound,
  Landmark,
  Laptop,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  Leaf,
  LineChart,
  ListTodo,
  Lock,
  LucideIcon,
  MessageSquare,
  MonitorSmartphone,
  Network,
  PieChart,
  Plane,
  PlayCircle,
  Plug,
  Radio,
  Rocket,
  Route,
  ScrollText,
  Search,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  Upload,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<any>;
  featured?: boolean;
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

// New 9-category products navigation matching Hanzo Cloud catalog
export const productsNav: NavSection[] = [
  {
    title: "AI & Agents",
    items: [
      { title: "Models", href: "/products/ml/zen", icon: Brain, featured: true },
      { title: "Agent", href: "/products/apps/agent", icon: Bot, featured: true },
      { title: "MCP", href: "/products/apps/mcp", icon: Plug },
      { title: "Router", href: "/products/ml/serving", icon: Route },
      { title: "Notebooks", href: "/products/ml/notebooks", icon: FileText },
      { title: "Pipelines", href: "/products/ml/pipelines", icon: GitBranch },
      { title: "Training", href: "/products/ml/training", icon: Cpu },
      { title: "Serving", href: "/products/ml/serving", icon: Rocket },
    ]
  },
  {
    title: "Developer Tools",
    items: [
      { title: "Dev", href: "/dev", icon: Terminal, featured: true },
      { title: "CLI", href: "/docs/cli", icon: Terminal },
      { title: "Console", href: "/products/apps/console", icon: LayoutDashboard },
      { title: "SDKs", href: "/docs/sdk", icon: Code },
      { title: "Templates", href: "/docs/templates", icon: FileCode },
      { title: "Flow", href: "/products/async/flow", icon: Workflow },
      { title: "Local", href: "/docs/local", icon: Laptop },
      { title: "Inspector", href: "/docs/inspector", icon: Search },
    ]
  },
  {
    title: "App Platform",
    items: [
      { title: "Base", href: "/products/apps/base", icon: Layers },
      { title: "Auth", href: "/products/platform/iam", icon: Lock },
      { title: "Functions", href: "/products/compute/functions", icon: Zap, featured: true },
      { title: "Runtime", href: "/products/compute/runtime", icon: PlayCircle },
      { title: "Machines", href: "/products/compute/machines", icon: Server },
      { title: "API", href: "/docs/api", icon: Braces },
      { title: "Realtime", href: "/realtime", icon: Radio },
      { title: "Commerce", href: "/products/apps/commerce", icon: ShoppingCart },
    ]
  },
  {
    title: "Cloud Infrastructure",
    items: [
      { title: "Edge", href: "/products/platform/edge", icon: Globe },
      { title: "Gateway", href: "/products/compute/gateway", icon: Network },
      { title: "HKE", href: "/products/platform/hke", icon: Container },
      { title: "Networking", href: "/products/platform/networking", icon: Network },
      { title: "DNS", href: "/products/platform/dns", icon: Globe },
      { title: "Tunnel", href: "/products/platform/tunnel", icon: Route },
      { title: "Proxy", href: "/products/platform/edge", icon: Shield },
      { title: "Registry", href: "/products/ml/registry", icon: Database },
    ]
  },
  {
    title: "Databases & Search",
    items: [
      { title: "SQL", href: "/products/data/sql", icon: Database },
      { title: "SQL Vector", href: "/products/data/sql-vector", icon: Sparkles },
      { title: "DocumentDB", href: "/products/data/documentdb", icon: FileText },
      { title: "KV", href: "/products/data/kv", icon: Key },
      { title: "Vector", href: "/products/data/vector", icon: Sparkles, featured: true },
      { title: "Storage", href: "/products/data/storage", icon: HardDrive },
      { title: "Search", href: "/products/data/search", icon: Search },
      { title: "Datastore", href: "/products/data/datastore", icon: Database },
    ]
  },
  {
    title: "Integrations",
    items: [
      { title: "Automations", href: "/products/async/auto", icon: PlayCircle },
      { title: "Connectors", href: "/products/integrations", icon: Plug },
      { title: "Webhooks", href: "/docs/webhooks", icon: Zap },
      { title: "Event Routing", href: "/products/async/pubsub", icon: Radio },
      { title: "API Gateway", href: "/products/compute/gateway", icon: Network },
      { title: "ETL", href: "/products/async/flow", icon: GitBranch },
      { title: "MQ", href: "/products/async/mq", icon: ListTodo },
      { title: "Tasks", href: "/products/async/tasks", icon: ListTodo },
    ]
  },
  {
    title: "Security",
    items: [
      { title: "IAM", href: "/products/platform/iam", icon: UserCheck, featured: true },
      { title: "Policy", href: "/products/platform/guard", icon: Shield },
      { title: "KMS", href: "/products/platform/kms", icon: KeyRound },
      { title: "Audit", href: "/docs/audit", icon: ScrollText },
      { title: "Approvals", href: "/docs/approvals", icon: ShieldCheck },
      { title: "Orgs & Teams", href: "/docs/orgs", icon: Users },
      { title: "Billing", href: "/pricing", icon: CreditCard },
      { title: "Admin", href: "/products/apps/console", icon: Settings },
    ]
  },
  {
    title: "Observability",
    items: [
      { title: "Telemetry", href: "/products/observability/telemetry", icon: Activity },
      { title: "Metrics", href: "/products/observability/metrics", icon: BarChart3 },
      { title: "Logs", href: "/products/observability/logs", icon: ScrollText },
      { title: "Traces", href: "/products/observability/traces", icon: Route },
      { title: "Dashboards", href: "/products/observability/metrics", icon: PieChart },
      { title: "Alerts", href: "/docs/alerts", icon: Bell },
      { title: "LLM Observability", href: "/products/apps/console", icon: Brain },
      { title: "Incidents", href: "/docs/incidents", icon: AlertTriangle },
    ]
  },
  {
    title: "Hosting",
    items: [
      { title: "Deploy", href: "/products/platform/platform", icon: Upload },
      { title: "Containers", href: "/products/platform/hke", icon: Container },
      { title: "Static Hosting", href: "/products/platform/edge", icon: Globe },
      { title: "CDN", href: "/products/platform/edge", icon: Globe },
      { title: "Domains", href: "/products/platform/dns", icon: Globe },
      { title: "TLS", href: "/products/platform/edge", icon: Lock },
      { title: "Load Balancing", href: "/products/platform/networking", icon: Gauge },
      { title: "Environments", href: "/docs/environments", icon: Layers },
    ]
  }
];

// Featured products for quick access
export const featuredProducts: NavItem[] = [
  { title: "Hanzo Dev", href: "/dev", icon: Terminal, description: "Multi-agent coding workspace", featured: true },
  { title: "Models", href: "/products/ml/zen", icon: Brain, description: "100+ LLMs via unified API", featured: true },
  { title: "Agent", href: "/products/apps/agent", icon: Bot, description: "Multi-agent SDK", featured: true },
  { title: "Vector", href: "/products/data/vector", icon: Sparkles, description: "High-performance vector DB", featured: true },
  { title: "Functions", href: "/products/compute/functions", icon: Zap, description: "Serverless compute", featured: true },
  { title: "Base", href: "/products/apps/base", icon: Layers, description: "Backend-as-a-Service", featured: true },
  { title: "Cloud", href: "/cloud", icon: Cloud, description: "AI Cloud infrastructure", featured: true },
  { title: "IAM", href: "/products/platform/iam", icon: UserCheck, description: "Identity & access", featured: true },
];

export const capabilitiesNav: NavSection[] = [
  {
    title: "Capabilities",
    items: [
      { title: "Cloud", href: "/solutions/cloud", icon: Globe },
      { title: "Cybersecurity", href: "/solutions/cybersecurity", icon: Shield },
      { title: "Data and AI", href: "/solutions/data-ai", icon: Brain },
      { title: "Engineering", href: "/solutions/engineering", icon: Code },
      { title: "Emerging Tech", href: "/solutions/emerging-tech", icon: Rocket },
      { title: "Partners", href: "/solutions/partners", icon: Network },
      { title: "Finance", href: "/solutions/finance", icon: DollarSign },
      { title: "Infrastructure", href: "/solutions/infrastructure", icon: Building2 },
    ]
  }
];

export const industriesNav: NavSection[] = [
  {
    title: "Industries",
    items: [
      { title: "Aerospace & Defense", href: "/industries/aerospace", icon: Plane },
      { title: "Automotive", href: "/industries/automotive", icon: Car },
      { title: "Banking", href: "/industries/banking", icon: Landmark },
      { title: "Capital Markets", href: "/industries/capital-markets", icon: Globe },
      { title: "Chemicals", href: "/industries/chemicals", icon: Factory },
      { title: "Communications", href: "/industries/communications", icon: Laptop },
      { title: "Consumer", href: "/industries/consumer", icon: ShoppingCart },
      { title: "Energy", href: "/industries/energy", icon: Leaf },
    ]
  }
];

export const resourcesNav: NavSection[] = [
  {
    title: "Documentation",
    items: [
      { title: "Getting Started", href: "/docs/getting-started", description: "Quick start guides", icon: Braces },
      { title: "API Reference", href: "/docs/api", description: "API documentation", icon: Code },
      { title: "Tutorials", href: "/docs/tutorials", description: "Step-by-step guides", icon: AppWindow }
    ]
  },
  {
    title: "Community",
    items: [
      { title: "Discord", href: "https://discord.gg/hanzo", description: "Join our Discord", icon: MessageSquare },
      { title: "GitHub", href: "https://github.com/hanzoai", description: "Open-source projects", icon: Code },
      { title: "Support", href: "/support", description: "Get help", icon: Users }
    ]
  },
  {
    title: "Company",
    items: [
      { title: "Team", href: "/team", description: "Meet the team", icon: Users },
      { title: "Security", href: "/security", description: "Security practices", icon: ShieldCheck },
      { title: "Philosophy", href: "/philosophy", description: "Our principles", icon: Zap }
    ]
  }
];

export type MainNavItem = {
  title: string;
  href?: string;
  sections?: NavSection[];
};

export const mainNav: MainNavItem[] = [
  { title: "Products", sections: productsNav },
  { title: "Solutions", sections: [...capabilitiesNav, ...industriesNav] },
  { title: "Resources", sections: resourcesNav },
  { title: "Pricing", href: "/pricing" }
];

export const footerNav = [
  {
    title: "Products",
    items: [
      { title: "Hanzo Dev", href: "/dev" },
      { title: "Models", href: "/products/ml/zen" },
      { title: "Agent", href: "/products/apps/agent" },
      { title: "Vector DB", href: "/products/data/vector" },
      { title: "Functions", href: "/products/compute/functions" }
    ]
  },
  {
    title: "Platform",
    items: [
      { title: "Cloud", href: "/products/apps/cloud" },
      { title: "Edge", href: "/products/platform/edge" },
      { title: "IAM", href: "/products/platform/iam" },
      { title: "Console", href: "/products/apps/console" }
    ]
  },
  {
    title: "Resources",
    items: [
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/docs/api" },
      { title: "GitHub", href: "https://github.com/hanzoai" },
      { title: "Support", href: "/support" }
    ]
  },
  {
    title: "Company",
    items: [
      { title: "Team", href: "/team" },
      { title: "Security", href: "/security" },
      { title: "Philosophy", href: "/philosophy" },
      { title: "Zen Models", href: "/zen" },
      { title: "Careers", href: "/careers" }
    ]
  }
];

export const utilityNav = {
  search: { title: "Search", href: "/search", icon: Search },
  chat: { title: "Chat with AI", href: "/chat", icon: MessageSquare }
};
