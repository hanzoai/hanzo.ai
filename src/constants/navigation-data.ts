import { 
  AppWindow, 
  Bot, 
  Braces, 
  Building2, 
  Cloud, 
  Code, 
  CreditCard, 
  Database, 
  FileCode, 
  Globe, 
  LucideIcon, 
  MessageSquare, 
  MonitorSmartphone, 
  Network, 
  Plane, 
  Search, 
  Server, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Users, 
  Zap,
  Container,
  LaptopCode
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

export const productsNav: NavSection[] = [
  {
    title: "AI Cloud",
    items: [
      {
        title: "AI",
        href: "/ai",
        description: "Unified access to frontier AI models",
        icon: Sparkles
      },
      {
        title: "Chat",
        href: "/chat",
        description: "Interactive AI chat experiences",
        icon: MessageSquare
      },
      {
        title: "Datastore",
        href: "/datastore",
        description: "Scalable data storage for AI applications",
        icon: Database
      },
      {
        title: "Edge",
        href: "/edge",
        description: "Ultra-low latency edge computing",
        icon: Zap
      },
      {
        title: "Functions",
        href: "/functions",
        description: "Serverless function execution",
        icon: Code
      },
      {
        title: "Identity",
        href: "/identity",
        description: "Scalable identity management",
        icon: Users
      },
      {
        title: "Machines",
        href: "/machines",
        description: "Dedicated AI compute infrastructure",
        icon: Server
      },
      {
        title: "Payments",
        href: "/payments",
        description: "Payment processing and subscription billing",
        icon: CreditCard
      }
    ]
  },
  {
    title: "DX Platform",
    items: [
      {
        title: "App",
        href: "/app",
        description: "AI app builder with drag-and-drop workflows",
        icon: AppWindow
      },
      {
        title: "Bot",
        href: "/bot",
        description: "Agentic framework for AI assistants",
        icon: Bot
      },
      {
        title: "Code",
        href: "/code",
        description: "AI-powered code editor and generator",
        icon: FileCode
      },
      {
        title: "Dev",
        href: "/dev",
        description: "AI engineer assistant for developers",
        icon: Terminal
      },
      {
        title: "Extension",
        href: "/extension",
        description: "Browser and code editor plugins",
        icon: Braces
      },
      {
        title: "Platform",
        href: "/platform",
        description: "Open source AI engineering platform",
        icon: Globe
      },
      {
        title: "Runtime",
        href: "/runtime",
        description: "Container runtime for AI applications",
        icon: Container
      },
      {
        title: "Studio",
        href: "/studio",
        description: "Low-code IDE for AI development",
        icon: LaptopCode
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
        icon: Cloud
      },
      {
        title: "Cybersecurity",
        href: "/solutions/cybersecurity",
        icon: ShieldCheck
      },
      {
        title: "Data and Artificial Intelligence",
        href: "/solutions/data-ai",
        icon: Database
      },
      {
        title: "Digital Engineering and Manufacturing",
        href: "/solutions/engineering",
        icon: Code
      },
      {
        title: "Emerging Technology",
        href: "/solutions/emerging-tech",
        icon: Sparkles
      },
      {
        title: "Ecosystem Partners",
        href: "/solutions/partners",
        icon: Network
      },
      {
        title: "Finance and Risk Management",
        href: "/solutions/finance",
        icon: CreditCard
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
        icon: Terminal
      },
      {
        title: "Banking",
        href: "/industries/banking",
        icon: CreditCard
      },
      {
        title: "Capital Markets",
        href: "/industries/capital-markets",
        icon: Globe
      },
      {
        title: "Chemicals",
        href: "/industries/chemicals",
        icon: Server
      },
      {
        title: "Communications and Media",
        href: "/industries/communications",
        icon: MonitorSmartphone
      },
      {
        title: "Consumer Goods and Services",
        href: "/industries/consumer",
        icon: Users
      },
      {
        title: "Energy",
        href: "/industries/energy",
        icon: Zap
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
        title: "Principles",
        href: "/zen",
        description: "The Hanzo engineering philosophy",
        icon: Zap
      }
    ]
  }
];

export const mainNav = [
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
    title: "Open Source",
    href: "/open-source"
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
