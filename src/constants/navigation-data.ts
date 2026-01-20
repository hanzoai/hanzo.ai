import {
  AppWindow,
  Bot,
  Brain,
  Braces,
  Building2,
  Car,
  Cloud,
  Code,
  CreditCard,
  Database,
  DollarSign,
  Factory,
  FileCode,
  Globe,
  Landmark,
  Laptop,
  Leaf,
  LucideIcon,
  MessageSquare,
  MonitorSmartphone,
  Network,
  Plane,
  Rocket,
  Search,
  Server,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Terminal,
  Users,
  Zap,
  Container,
  Cpu,
  Clock,
  Activity,
  Layers,
  LayoutGrid,
  Key,
  HardDrive,
  BarChart3,
  ListTodo,
  Radio,
  BookOpen,
  GitBranch,
  LineChart,
  ScrollText,
  Route,
  PieChart,
  UserCheck,
  KeyRound,
  Workflow,
  LayoutDashboard,
  Plug,
  PlayCircle
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

// New taxonomy-based products navigation
export const productsNav: NavSection[] = [
  {
    title: "Data & Compute",
    items: [
      {
        title: "SQL",
        href: "/products/data/sql",
        description: "Managed PostgreSQL",
        icon: Database
      },
      {
        title: "Vector",
        href: "/products/data/vector",
        description: "High-performance vector database",
        icon: Sparkles
      },
      {
        title: "KV",
        href: "/products/data/kv",
        description: "Redis-compatible key-value",
        icon: Key
      },
      {
        title: "Storage",
        href: "/products/data/storage",
        description: "S3-compatible object storage",
        icon: HardDrive
      },
      {
        title: "Functions",
        href: "/products/compute/functions",
        description: "Serverless compute platform",
        icon: Zap
      },
      {
        title: "Machines",
        href: "/products/compute/machines",
        description: "Dedicated AI compute",
        icon: Cpu
      },
      {
        title: "Tasks",
        href: "/products/async/tasks",
        description: "Durable workflow execution",
        icon: ListTodo
      },
      {
        title: "All Products",
        href: "/products",
        description: "View all 40+ products",
        icon: LayoutGrid
      }
    ]
  },
  {
    title: "Automation & ML",
    items: [
      {
        title: "Auto",
        href: "/products/automation/auto",
        description: "Workflow automation platform",
        icon: PlayCircle,
        featured: true
      },
      {
        title: "Flow",
        href: "/products/automation/flow",
        description: "Visual AI/LLM workflow builder",
        icon: Workflow,
        featured: true
      },
      {
        title: "MQ",
        href: "/products/async/mq",
        description: "Message queue for Node.js",
        icon: Radio
      },
      {
        title: "Integrations",
        href: "/products/integrations",
        description: "280+ pre-built connectors",
        icon: Plug,
        featured: true
      },
      {
        title: "Notebooks",
        href: "/products/ml/notebooks",
        description: "Managed Jupyter workspaces",
        icon: BookOpen
      },
      {
        title: "Pipelines",
        href: "/products/ml/pipelines",
        description: "ML workflow orchestration",
        icon: GitBranch
      },
      {
        title: "Serving",
        href: "/products/ml/serving",
        description: "Production model inference",
        icon: Rocket
      },
      {
        title: "Cloud",
        href: "/products/apps/cloud",
        description: "AI infrastructure platform",
        icon: Cloud
      }
    ]
  }
];

export const capabilitiesNav: NavSection[] = [
  {
    title: "Capabilities",
    items: [
      {
        title: "Cloud",
        href: "/solutions/cloud",
        icon: Globe
      },
      {
        title: "Cybersecurity",
        href: "/solutions/cybersecurity",
        icon: Shield
      },
      {
        title: "Data and Artificial Intelligence",
        href: "/solutions/data-ai",
        icon: Brain
      },
      {
        title: "Digital Engineering and Manufacturing",
        href: "/solutions/engineering",
        icon: Code
      },
      {
        title: "Emerging Technology",
        href: "/solutions/emerging-tech",
        icon: Rocket
      },
      {
        title: "Ecosystem Partners",
        href: "/solutions/partners",
        icon: Network
      },
      {
        title: "Finance and Risk Management",
        href: "/solutions/finance",
        icon: DollarSign
      },
      {
        title: "Infrastructure and Capital Projects",
        href: "/solutions/infrastructure",
        icon: Building2
      },
    ]
  }
];

export const industriesNav: NavSection[] = [
  {
    title: "Industries",
    items: [
      {
        title: "Aerospace and Defense",
        href: "/industries/aerospace",
        icon: Plane
      },
      {
        title: "Automotive",
        href: "/industries/automotive",
        icon: Car
      },
      {
        title: "Banking",
        href: "/industries/banking",
        icon: Landmark
      },
      {
        title: "Capital Markets",
        href: "/industries/capital-markets",
        icon: Globe
      },
      {
        title: "Chemicals",
        href: "/industries/chemicals",
        icon: Factory
      },
      {
        title: "Communications and Media",
        href: "/industries/communications",
        icon: Laptop
      },
      {
        title: "Consumer Goods and Services",
        href: "/industries/consumer",
        icon: ShoppingCart
      },
      {
        title: "Energy",
        href: "/industries/energy",
        icon: Leaf
      },
    ]
  }
];

export const resourcesNav: NavSection[] = [
  {
    title: "Documentation",
    items: [
      {
        title: "Getting Started",
        href: "/docs/getting-started",
        description: "Quick start guides and tutorials",
        icon: Braces
      },
      {
        title: "API Reference",
        href: "/docs/api",
        description: "Comprehensive API documentation",
        icon: Code
      },
      {
        title: "Tutorials",
        href: "/docs/tutorials",
        description: "Step-by-step tutorials",
        icon: AppWindow
      }
    ]
  },
  {
    title: "Community",
    items: [
      {
        title: "Discord Community",
        href: "https://discord.gg/hanzo",
        description: "Join our community Discord",
        icon: MessageSquare
      },
      {
        title: "GitHub",
        href: "https://github.com/hanzoai",
        description: "Explore our open-source projects",
        icon: Code
      },
      {
        title: "Support",
        href: "/support",
        description: "Get help with Hanzo products",
        icon: Users
      }
    ]
  },
  {
    title: "Company",
    items: [
      {
        title: "Team",
        href: "/team",
        description: "Meet the Hanzo team",
        icon: Users
      },
      {
        title: "Security",
        href: "/security",
        description: "Our security practices",
        icon: ShieldCheck
      },
      {
        title: "Zen of Hanzo",
        href: "/zen",
        description: "64 principles in 8 classes guiding our philosophy",
        icon: Zap
      }
    ]
  }
];

export type MainNavItem = {
  title: string;
  href?: string;
  sections?: NavSection[];
};

export const mainNav: MainNavItem[] = [
  {
    title: "Products",
    sections: productsNav
  },
  {
    title: "Solutions",
    sections: [
      ...capabilitiesNav,
      ...industriesNav
    ]
  },
  {
    title: "Resources",
    sections: resourcesNav
  },
  {
    title: "Pricing",
    href: "/pricing"
  }
];

export const footerNav = [
  {
    title: "Products",
    items: [
      { title: "AI Cloud", href: "/cloud" },
      { title: "Developer Platform", href: "/platform" },
      { title: "AI Studio", href: "/ai-studio" },
      { title: "Vector DB", href: "/vector" },
      { title: "Edge Compute", href: "/edge" }
    ]
  },
  {
    title: "Solutions",
    items: [
      { title: "Enterprise AI", href: "/solutions/enterprise-ai" },
      { title: "Data Engineering", href: "/solutions/data-engineering" },
      { title: "API Development", href: "/solutions/api-development" },
      { title: "Cybersecurity", href: "/solutions/cybersecurity" }
    ]
  },
  {
    title: "Resources",
    items: [
      { title: "Documentation", href: "/docs" },
      { title: "API Reference", href: "/docs/api" },
      { title: "Community", href: "/community" },
      { title: "Support", href: "/support" }
    ]
  },
  {
    title: "Company",
    items: [
      { title: "Team", href: "/team" },
      { title: "Security", href: "/security" },
      { title: "Zen of Hanzo", href: "/zen" },
      { title: "Careers", href: "/careers" }
    ]
  }
];

export const utilityNav = {
  search: {
    title: "Search",
    href: "/search",
    icon: Search
  },
  chat: {
    title: "Chat with AI",
    href: "/chat",
    icon: MessageSquare
  }
};
