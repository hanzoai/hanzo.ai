
import { 
  Brain, Database, Server, ShoppingCart, UserCircle, CreditCard, Workflow,
  Cloud, Network, HardDrive, Activity, Share, Box, Plus,
  Cpu, BarChart, LineChart, MessageSquare, Code
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface CloudServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

export const cloudServiceData: CloudServiceItem[] = [
  {
    id: "ai",
    title: "AI",
    description: "Unified access to frontier AI models.",
    icon: Brain,
    features: [
      "Frontier LLMs, vector search, and advanced reasoning models",
      "Autonomous workflows that continuously learn and improve",
      "Accessible via the intuitive @hanzo/ai SDK",
      "Fine-tuning and custom model deployment capabilities"
    ],
    color: "purple"
  },
  {
    id: "chat",
    title: "Chat",
    description: "Interactive AI chat experiences for your applications.",
    icon: MessageSquare,
    features: [
      "Fully customizable chat interface for web and mobile",
      "Memory management and context preservation",
      "Multi-modal support for images, audio, and video",
      "Easy integration with your existing applications"
    ],
    color: "indigo"
  },
  {
    id: "datastore",
    title: "Datastore",
    description: "Scalable data storage optimized for AI applications.",
    icon: Database,
    features: [
      "High-performance data storage with automatic indexing",
      "Optimized for AI workloads with built-in caching",
      "Real-time synchronization across clients",
      "Seamless integration with Hanzo AI services"
    ],
    color: "blue"
  },
  {
    id: "edge",
    title: "Edge",
    description: "Ultra-low latency compute at the network edge.",
    icon: Share,
    features: [
      "Deploy to 200+ edge locations in seconds",
      "Built-in CDN and content optimization",
      "Serverless edge functions with zero cold starts",
      "Integrated with Hanzo AI for edge intelligence"
    ],
    color: "cyan"
  },
  {
    id: "functions",
    title: "Functions",
    description: "Serverless function execution for any workload.",
    icon: Code,
    features: [
      "Execute code in response to events",
      "Automatic scaling based on demand",
      "Support for multiple languages and runtimes",
      "Integrated monitoring and logging"
    ],
    color: "emerald"
  },
  {
    id: "identity",
    title: "Identity",
    description: "Scalable identity and access management.",
    icon: UserCircle,
    features: [
      "Multi-factor authentication and biometric verification",
      "Single sign-on (SSO) and user permission management",
      "Compliance with global identity regulations",
      "Social login integrations and custom flows"
    ],
    color: "violet"
  },
  {
    id: "machines",
    title: "Machines",
    description: "Dedicated AI compute infrastructure optimized for machine learning.",
    icon: Cpu,
    features: [
      "High-performance NVIDIA hardware on-demand (H100, DGX)",
      "Scalable AI inference and training infrastructure",
      "Low-latency deployments across global data centers",
      "Optimized containers for popular ML frameworks"
    ],
    color: "green"
  },
  {
    id: "balancer",
    title: "Balancer",
    description: "AI-native load balancer, LLM router, global CDN, caching, firewall.",
    icon: Network,
    features: [
      "Intelligent traffic routing based on model availability and load",
      "Built-in caching for faster responses and reduced costs",
      "Advanced security features and DDoS protection",
      "Comprehensive monitoring and analytics dashboard"
    ],
    color: "blue"
  },
  {
    id: "commerce",
    title: "Commerce",
    description: "Intelligent e-commerce, dynamic pricing, subscriptions, integrated analytics.",
    icon: ShoppingCart,
    features: [
      "One-line store creation with automated checkout and cart",
      "Dynamic pricing, subscription management, and analytics",
      "Seamless Web2 and Web3 payment integrations",
      "AI-powered recommendation engines and inventory forecasting"
    ],
    color: "amber"
  },
  {
    id: "payments",
    title: "Payments",
    description: "Integrated payments infrastructure with subscriptions and usage-based billing.",
    icon: CreditCard,
    features: [
      "Global payment gateway with support for 135+ currencies",
      "Fraud detection and prevention with AI monitoring",
      "Subscription management and recurring billing automation",
      "Real-time financial reporting and analytics"
    ],
    color: "rose"
  },
  {
    id: "realtime",
    title: "Realtime",
    description: "Real-time data synchronization and messaging across clients.",
    icon: Activity,
    features: [
      "WebSocket and pub/sub messaging for real-time communication",
      "Automatic client state synchronization",
      "Presence and status tracking for users",
      "Collaborative editing and real-time updates"
    ],
    color: "fuchsia"
  },
  {
    id: "storage",
    title: "Storage",
    description: "Edge-optimized, secure global storage, CDN, S3 compatible.",
    icon: HardDrive,
    features: [
      "Global CDN with automatic edge caching",
      "S3-compatible API for easy migration",
      "End-to-end encryption and access controls",
      "Automatic backup and disaster recovery"
    ],
    color: "yellow"
  },
  {
    id: "vector",
    title: "Vector",
    description: "High-performance vector database for semantic search, RAG, embeddings.",
    icon: Box,
    features: [
      "Optimized for storing and querying vector embeddings",
      "Scales to billions of vectors with sub-millisecond query times",
      "Built-in integration with popular embedding models",
      "Sophisticated RAG capabilities for enhanced AI responses"
    ],
    color: "blue"
  },
  {
    id: "more",
    title: "More Services",
    description: "Discover additional cloud services in our ecosystem.",
    icon: Plus,
    features: [
      "Analytics and business intelligence tools",
      "Security and compliance solutions",
      "Edge computing and IoT infrastructure",
      "Developer tools and productivity enhancers"
    ],
    color: "gray"
  }
];
