
import { LucideIcon, Brain, Database, FileCode, Server, Eye, Shield, Activity, BarChart, Monitor, Cloud, ArrowRight, Code2, Bot, MessageSquare, Cpu, Zap, HardDrive, Box, ExternalLink, Workflow, Terminal } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
  category?: 'ai-cloud' | 'dx-platform';
}

// AI Cloud features
const aiCloudFeatures: Feature[] = [
  {
    title: "Inference API",
    description: "Unified access to frontier AI models via a simple API.",
    icon: Brain,
    color: "bg-purple-600",
    link: "/ai",
    category: "ai-cloud"
  },
  {
    title: "Vector Engine",
    description: "High-performance vector database for semantic search and RAG.",
    icon: Database,
    color: "bg-blue-600",
    link: "/vector",
    category: "ai-cloud"
  },
  {
    title: "Chat",
    description: "Interactive chat experiences with custom AI assistants.",
    icon: MessageSquare,
    color: "bg-indigo-600",
    link: "/teamchat",
    category: "ai-cloud"
  },
  {
    title: "Datastore",
    description: "Scalable data storage with built-in AI capabilities.",
    icon: HardDrive,
    color: "bg-cyan-600",
    link: "/datastore",
    category: "ai-cloud"
  },
  {
    title: "Edge Functions",
    description: "Deploy serverless functions to global edge locations.",
    icon: Zap,
    color: "bg-amber-600",
    link: "/edge",
    category: "ai-cloud"
  },
  {
    title: "Observability",
    description: "Comprehensive monitoring of all AI systems.",
    icon: Eye,
    color: "bg-cyan-600",
    link: "/observability",
    category: "ai-cloud"
  }
];

// DX Platform features
const dxPlatformFeatures: Feature[] = [
  {
    title: "Code",
    description: "AI-powered code editor with pair programming experience.",
    icon: Code2,
    color: "bg-emerald-600",
    link: "/hanzocode",
    category: "dx-platform"
  },
  {
    title: "App",
    description: "No-code AI application builder with visual workflows.",
    icon: Monitor,
    color: "bg-blue-600",
    link: "/app",
    category: "dx-platform"
  },
  {
    title: "Dev",
    description: "Your AI engineer for complex development tasks.",
    icon: Terminal,
    color: "bg-indigo-600",
    link: "/dev",
    category: "dx-platform"
  },
  {
    title: "Bot",
    description: "Build autonomous AI agents that reason and take actions.",
    icon: Bot,
    color: "bg-purple-600",
    link: "/bot",
    category: "dx-platform"
  },
  {
    title: "Operative",
    description: "Framework for AI to operate computers like humans.",
    icon: Workflow,
    color: "bg-rose-600",
    link: "/operative",
    category: "dx-platform"
  },
  {
    title: "Extension",
    description: "Browser and editor extensions for AI-assisted development.",
    icon: ExternalLink,
    color: "bg-amber-600",
    link: "/extension",
    category: "dx-platform"
  }
];

// Combine and export all features
export const features: Feature[] = [
  ...aiCloudFeatures,
  ...dxPlatformFeatures,
  {
    title: "Explore Platform",
    description: "Discover all the capabilities and services available in the Hanzo AI platform.",
    icon: ArrowRight,
    color: "bg-gradient-to-r from-purple-600 to-blue-600",
    link: "/platform"
  }
];

// Export categories for filtering
export const aiCloudFeatures_export = aiCloudFeatures;
export const dxPlatformFeatures_export = dxPlatformFeatures;
