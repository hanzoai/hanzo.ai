
import { Brain, Code2, Bot, Database, ChartBar, Calculator, Scale, User, Server, Globe, Network, Activity, Zap, RefreshCw, ChevronRight, MessageSquare, HardDrive, Box, Cpu, ExternalLink, Workflow, Monitor } from "lucide-react";
import { ProductItem } from "./types";

export const aiCloudItems: ProductItem[] = [
  {
    name: "AI",
    icon: Brain,
    description: "Unified access to frontier AI models",
    link: "/ai"
  },
  {
    name: "Chat",
    icon: MessageSquare,
    description: "Interactive AI chat experiences",
    link: "/cloud#chat"
  },
  {
    name: "Datastore",
    icon: Database,
    description: "Scalable data storage for AI applications",
    link: "/datastore"
  },
  {
    name: "Edge",
    icon: Zap,
    description: "Ultra-low latency edge computing",
    link: "/cloud#edge"
  },
  {
    name: "Functions",
    icon: Code2,
    description: "Serverless function execution",
    link: "/cloud#functions"
  },
  {
    name: "Identity",
    icon: User,
    description: "Scalable identity management",
    link: "/cloud#identity"
  },
  {
    name: "Machines",
    icon: Cpu,
    description: "Dedicated AI compute infrastructure",
    link: "/cloud#machines"
  },
  {
    name: "Payments",
    icon: Calculator,
    description: "Payment processing and subscription billing",
    link: "/payments"
  },
  {
    name: "Realtime",
    icon: Activity,
    description: "Real-time data synchronization",
    link: "/cloud#realtime"
  },
  {
    name: "Storage",
    icon: HardDrive,
    description: "Globally distributed file storage",
    link: "/cloud#storage"
  },
  {
    name: "Vector",
    icon: Box,
    description: "High-performance vector database for AI",
    link: "/vector"
  }
];

export const dxPlatformItems: ProductItem[] = [
  {
    name: "App",
    icon: Monitor,
    description: "AI app builder with drag-and-drop workflows",
    link: "/app"
  },
  {
    name: "Bot",
    icon: Bot,
    description: "Agentic framework for AI assistants",
    link: "/bot"
  },
  {
    name: "Code",
    icon: Code2,
    description: "AI-powered code editor and generator",
    link: "/code"
  },
  {
    name: "Dev",
    icon: Server,
    description: "AI engineer assistant for developers",
    link: "/dev"
  },
  {
    name: "Extension",
    icon: ExternalLink,
    description: "Browser and code editor plugins",
    link: "/extension"
  },
  {
    name: "Runtime",
    icon: Cpu,
    description: "Container runtime for AI applications",
    link: "/platform#runtime"
  },
  {
    name: "Operative",
    icon: Workflow,
    description: "AI-native assistant for automating tasks",
    link: "/operative"
  },
  {
    name: "Studio",
    icon: Monitor,
    description: "Low-code IDE for AI development",
    link: "/platform#studio"
  }
];
