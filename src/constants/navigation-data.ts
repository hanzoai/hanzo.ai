import { 
  AppWindow, 
  Braces, 
  Cloud, 
  Code, 
  Database, 
  LucideIcon, 
  MessageSquare, 
  Search, 
  Server, 
  ShieldCheck, 
  Sparkles, 
  Users, 
  Zap
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
        description: "Build, deploy, and manage AI applications",
        icon: Sparkles,
        featured: true
      },
      {
        title: "Vector Database",
        href: "/vector",
        description: "High-performance vector database for AI",
        icon: Database
      },
      {
        title: "Cloud Compute",
        href: "/cloud",
        description: "Scalable infrastructure for AI workloads",
        icon: Cloud
      },
      {
        title: "AI Studio",
        href: "/ai-studio",
        description: "Visual development environment for AI",
        icon: AppWindow
      }
    ]
  },
  {
    title: "DX Platform",
    items: [
      {
        title: "Developer Platform",
        href: "/platform",
        description: "Complete platform for app development",
        icon: Code,
        featured: true
      },
      {
        title: "Edge Compute",
        href: "/edge",
        description: "Global edge computing network",
        icon: Server
      },
      {
        title: "Open Source",
        href: "/open-source",
        description: "Free and open source components",
        icon: Braces
      },
      {
        title: "Operative",
        href: "/operative",
        description: "AI-powered DevOps automation",
        icon: Zap
      }
    ]
  }
];

export const solutionsNav: NavSection[] = [
  {
    title: "By Capability",
    items: [
      {
        title: "Enterprise AI",
        href: "/solutions/enterprise-ai",
        description: "AI solutions for large organizations"
      },
      {
        title: "Data Engineering",
        href: "/solutions/data-engineering",
        description: "Build scalable data pipelines"
      },
      {
        title: "API Development",
        href: "/solutions/api-development",
        description: "Design and build robust APIs"
      },
      {
        title: "Cybersecurity",
        href: "/solutions/cybersecurity",
        description: "Secure your applications and data"
      }
    ]
  },
  {
    title: "By Industry",
    items: [
      {
        title: "Finance",
        href: "/solutions/finance",
        description: "Solutions for financial services"
      },
      {
        title: "Healthcare",
        href: "/solutions/healthcare",
        description: "HIPAA-compliant healthcare solutions"
      },
      {
        title: "E-commerce",
        href: "/solutions/ecommerce",
        description: "Scale your online retail business"
      },
      {
        title: "SaaS",
        href: "/solutions/saas",
        description: "Build successful SaaS applications"
      }
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
    sections: solutionsNav
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
