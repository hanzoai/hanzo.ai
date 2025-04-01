
import { Brain, Code2, Bot, Database, ChartBar, Calculator, Scale, User, Server, Globe, Network, Activity, Zap, RefreshCw, ChevronRight, MessageSquare, HardDrive, Box, ExternalLink, Workflow, Monitor, Cloud } from "lucide-react";
import { ProductItem } from "./types";

export const aiCloudItems: ProductItem[] = [
  {
    name: "AI",
    icon: Brain,
    description: "Unified access to frontier AI models",
    href: "/ai",
    id: "ai"
  },
  {
    name: "Chat",
    icon: MessageSquare,
    description: "Interactive AI chat experiences",
    href: "/teamchat",
    id: "teamchat"
  },
  {
    name: "Datastore",
    icon: Database,
    description: "Scalable data storage for AI applications",
    href: "/datastore",
    id: "datastore"
  },
  {
    name: "Edge",
    icon: Zap,
    description: "Ultra-low latency edge computing",
    href: "/edge",
    id: "edge"
  },
  {
    name: "Functions",
    icon: Code2,
    description: "Serverless function execution",
    href: "/functions",
    id: "functions"
  },
  {
    name: "Identity",
    icon: User,
    description: "Scalable identity management",
    href: "/identity",
    id: "identity"
  },
  {
    name: "Machines",
    icon: Server,
    description: "Dedicated AI compute infrastructure",
    href: "/machines",
    id: "machines"
  },
  {
    name: "Payments",
    icon: Calculator,
    description: "Payment processing and subscription billing",
    href: "/payments",
    id: "payments"
  },
  {
    name: "Realtime",
    icon: Activity,
    description: "Real-time data synchronization",
    href: "/realtime",
    id: "realtime"
  },
  {
    name: "Storage",
    icon: HardDrive,
    description: "Globally distributed file storage",
    href: "/storage",
    id: "storage"
  },
  {
    name: "Vector",
    icon: Box,
    description: "High-performance vector database for AI",
    href: "/vector",
    id: "vector"
  },
  {
    name: "Cloud",
    icon: Cloud,
    description: "Managed infrastructure for AI applications",
    href: "/cloud",
    id: "cloud"
  },
  {
    name: "Operative",
    icon: Workflow,
    description: "AI-native assistant for automating tasks",
    href: "/operative",
    id: "operative"
  }
];

export const dxPlatformItems: ProductItem[] = [
  {
    name: "App",
    icon: Monitor,
    description: "AI app builder with drag-and-drop workflows",
    href: "/app",
    id: "app"
  },
  {
    name: "Bot",
    icon: Bot,
    description: "Agentic framework for AI assistants",
    href: "/bot",
    id: "bot"
  },
  {
    name: "Code",
    icon: Code2,
    description: "AI-powered code editor and generator",
    href: "/code",
    id: "code"
  },
  {
    name: "Dev",
    icon: Server,
    description: "AI engineer assistant for developers",
    href: "/dev",
    id: "dev"
  },
  {
    name: "Extension",
    icon: ExternalLink,
    description: "Browser and code editor plugins",
    href: "/extension",
    id: "extension"
  },
  {
    name: "Platform",
    icon: Globe,
    description: "Open source AI engineering platform",
    href: "/platform",
    id: "platform"
  },
  {
    name: "Runtime",
    icon: Server,
    description: "Container runtime for AI applications",
    href: "/runtime",
    id: "runtime"
  },
  {
    name: "Studio",
    icon: Monitor,
    description: "Low-code IDE for AI development",
    href: "/ai-studio",
    id: "studio"
  }
];
