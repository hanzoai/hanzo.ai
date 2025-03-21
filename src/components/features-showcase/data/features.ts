
import { LucideIcon, Brain, Database, FileCode, Server, Eye, Shield, Activity, BarChart, Monitor, Cloud, ArrowRight } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

export const features: Feature[] = [
  {
    title: "Inference API",
    description: "Flexible inference API across all ML models with a single unified interface.",
    icon: Brain,
    color: "bg-purple-600",
    link: "/ai"
  },
  {
    title: "Vector Engine",
    description: "Blazing fast similarity searches across billions of vectors.",
    icon: Database,
    color: "bg-blue-600",
    link: "/vector"
  },
  {
    title: "AI Code Engine",
    description: "Code generation, editing, and analysis powered by LLMs.",
    icon: FileCode,
    color: "bg-cyan-600",
    link: "/hanzocode"
  },
  {
    title: "Agent Framework",
    description: "Build autonomous AI agents that can reason and take actions.",
    icon: Server,
    color: "bg-emerald-600",
    link: "/ai"
  },
  {
    title: "Reasoning",
    description: "Context-aware reasoning with logic, math, and spatial understanding.",
    icon: Brain,
    color: "bg-purple-600",
    link: "/ai"
  },
  {
    title: "Observability",
    description: "Comprehensive monitoring and tracing of AI system performance.",
    icon: Eye,
    color: "bg-cyan-600",
    link: "/observability"
  },
  {
    title: "Safety & Ethics",
    description: "Ensure responsible AI with content moderation and bias detection.",
    icon: Shield,
    color: "bg-amber-600",
    link: "/security"
  },
  {
    title: "Distributed Tracing",
    description: "End-to-end request tracing for complex AI application flows.",
    icon: Activity,
    color: "bg-rose-600",
    link: "/observability"
  },
  {
    title: "AI Analytics",
    description: "Rich insights into usage patterns and model performance metrics.",
    icon: BarChart,
    color: "bg-blue-600",
    link: "/analytics"
  },
  {
    title: "Real-time Monitoring",
    description: "Live dashboards showing AI system health and performance.",
    icon: Monitor,
    color: "bg-indigo-600",
    link: "/observability"
  },
  {
    title: "Edge Deployment",
    description: "Deploy AI models to edge locations for reduced latency.",
    icon: Cloud,
    color: "bg-emerald-600",
    link: "/edge"
  },
  {
    title: "Explore Platform",
    description: "Discover all the capabilities and services available in the Hanzo AI platform.",
    icon: ArrowRight,
    color: "bg-gradient-to-r from-purple-600 to-blue-600",
    link: "/platform"
  }
];
