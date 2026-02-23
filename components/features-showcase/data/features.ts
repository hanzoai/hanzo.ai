
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
    description: "High-performance API for frontier AI models, optimized for production workloads with millisecond latency.",
    icon: Brain,
    color: "bg-gradient-to-br from-[#ffffff] to-[#ff6b6b]",
    link: "/ai",
    category: "ai-cloud"
  },
  {
    title: "Vector Engine",
    description: "High-performance vector database for semantic search, RAG applications, and AI-powered information retrieval.",
    icon: Database,
    color: "bg-gradient-to-br from-[#ffffff] to-rose-700",
    link: "/vector",
    category: "ai-cloud"
  },
  {
    title: "Chat",
    description: "Build custom AI assistants with personalized knowledge and capabilities for your users and teams.",
    icon: MessageSquare,
    color: "bg-gradient-to-br from-[#ff6b6b] to-[#ffffff]",
    link: "/teamchat",
    category: "ai-cloud"
  },
  {
    title: "Datastore",
    description: "Scalable data storage with built-in AI capabilities for intelligent data analysis and management.",
    icon: HardDrive,
    color: "bg-gradient-to-br from-orange-500 to-cyan-700",
    link: "/datastore",
    category: "ai-cloud"
  },
  {
    title: "Edge Functions",
    description: "Run AI-powered code at the edge, closer to your users for faster response times and better experiences.",
    icon: Zap,
    color: "bg-gradient-to-br from-amber-600 to-orange-700",
    link: "/edge",
    category: "ai-cloud"
  },
  {
    title: "Observability",
    description: "Full visibility into your AI systems with comprehensive logging, monitoring, and analytics tools.",
    icon: Eye,
    color: "bg-gradient-to-br from-orange-500 to-orange-700",
    link: "/observability",
    category: "ai-cloud"
  }
];

// DX Platform features
const dxPlatformFeatures: Feature[] = [
  {
    title: "Code",
    description: "AI-powered code editor with pair programming capabilities that understands your codebase and helps you write better code.",
    icon: Code2,
    color: "bg-gradient-to-br from-[#ffffff] to-rose-700",
    link: "/hanzocode",
    category: "dx-platform"
  },
  {
    title: "App",
    description: "Visual AI application builder with drag-and-drop workflows to create sophisticated AI experiences without code.",
    icon: Monitor,
    color: "bg-gradient-to-br from-[#ffffff] to-[#ff6b6b]",
    link: "/app",
    category: "dx-platform"
  },
  {
    title: "Dev",
    description: "Your AI engineer for complex development tasks, capable of understanding requirements and implementing solutions.",
    icon: Terminal,
    color: "bg-gradient-to-br from-[#ff6b6b] to-rose-700",
    link: "/dev",
    category: "dx-platform"
  },
  {
    title: "Bot",
    description: "Build autonomous AI agents that can reason about problems and take actions on your behalf with human-like intelligence.",
    icon: Bot,
    color: "bg-gradient-to-br from-[#ffffff] to-pink-700",
    link: "/bot",
    category: "dx-platform"
  },
  {
    title: "Operative",
    description: "Framework for AI to operate computers like humans, enabling automation of complex workflows and tasks.",
    icon: Workflow,
    color: "bg-gradient-to-br from-rose-600 to-red-700",
    link: "/operative",
    category: "dx-platform"
  },
  {
    title: "Extension",
    description: "AI-powered browser and editor extensions that enhance your development workflow and productivity.",
    icon: ExternalLink,
    color: "bg-gradient-to-br from-amber-600 to-yellow-700",
    link: "/extension",
    category: "dx-platform"
  }
];

// Explore Platform feature
const explorePlatform: Feature = {
  title: "Explore Platform",
  description: "Discover the full potential of the Hanzo AI platform and how it can transform your development workflow.",
  icon: ArrowRight,
  color: "bg-gradient-to-r from-[#ffffff] to-[#ff6b6b]",
  link: "/platform"
};

// Export features and categories
export const features: Feature[] = [
  ...aiCloudFeatures,
  ...dxPlatformFeatures,
  explorePlatform
];

export const aiCloudFeatures_export = aiCloudFeatures;
export const dxPlatformFeatures_export = dxPlatformFeatures;
