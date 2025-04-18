
import { Brain, Code2, Bot, Database, ChartBar, Calculator, Scale, User, Server, Globe, Network, Activity, Zap, RefreshCw, ChevronRight, MessageSquare, HardDrive, Box, ExternalLink, Workflow, Monitor, Cloud } from "lucide-react";
import { ProductItem } from "./types";

export const aiCloudItems: ProductItem[] = [
  {
    name: "AI",
    icon: Brain,
    description: "Unified access to frontier AI models",
    link: "/ai",
    id: "ai"
  },
  {
    name: "Chat",
    icon: MessageSquare,
    description: "Interactive AI chat experiences",
    link: "/teamchat",
    id: "teamchat"
  },
  {
    name: "Datastore",
    icon: Database,
    description: "Scalable data storage for AI applications",
    link: "/datastore",
    id: "datastore"
  },
  {
    name: "Edge",
    icon: Zap,
    description: "Ultra-low latency edge computing",
    link: "/edge",
    id: "edge"
  },
  {
    name: "Functions",
    icon: Code2,
    description: "Serverless function execution",
    link: "/functions",
    id: "functions"
  },
  {
    name: "Identity",
    icon: User,
    description: "Scalable identity management",
    link: "/identity",
    id: "identity"
  },
  {
    name: "Machines",
    icon: Server,
    description: "Dedicated AI compute infrastructure",
    link: "/machines",
    id: "machines"
  },
  {
    name: "Payments",
    icon: Calculator,
    description: "Payment processing and subscription billing",
    link: "/payments",
    id: "payments"
  },
  {
    name: "Realtime",
    icon: Activity,
    description: "Real-time data synchronization",
    link: "/realtime",
    id: "realtime"
  },
  {
    name: "Storage",
    icon: HardDrive,
    description: "Globally distributed file storage",
    link: "/storage",
    id: "storage"
  },
  {
    name: "Vector",
    icon: Box,
    description: "High-performance vector database for AI",
    link: "/vector",
    id: "vector"
  },
  {
    name: "Cloud",
    icon: Cloud,
    description: "Managed infrastructure for AI applications",
    link: "/cloud",
    id: "cloud"
  },
  {
    name: "Operative",
    icon: Workflow,
    description: "AI-native assistant for automating tasks",
    link: "/operative",
    id: "operative"
  }
];

export const dxPlatformItems: ProductItem[] = [
  {
    name: "App",
    icon: Monitor,
    description: "AI app builder with drag-and-drop workflows",
    link: "/app",
    id: "app"
  },
  {
    name: "Bot",
    icon: Bot,
    description: "Agentic framework for AI assistants",
    link: "/bot",
    id: "bot"
  },
  {
    name: "Code",
    icon: Code2,
    description: "AI-powered code editor and generator",
    link: "/code",
    id: "code"
  },
  {
    name: "Dev",
    icon: Server,
    description: "AI engineer assistant for developers",
    link: "/dev",
    id: "dev"
  },
  {
    name: "Extension",
    icon: ExternalLink,
    description: "Browser and code editor plugins",
    link: "/extension",
    id: "extension"
  },
  {
    name: "Platform",
    icon: Globe,
    description: "Open source AI engineering platform",
    link: "/platform",
    id: "platform"
  },
  {
    name: "Runtime",
    icon: Server,
    description: "Container runtime for AI applications",
    link: "/runtime",
    id: "runtime"
  },
  {
    name: "Studio",
    icon: Monitor,
    description: "Low-code IDE for AI development",
    link: "/ai-studio",
    id: "studio"
  }
];
