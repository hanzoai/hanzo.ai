
import { 
  Code, Database, Bot, Brain, Activity, Workflow, 
  Eye, LineChart, Monitor, Network, Server, Search, Shield
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface AIPlatformFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const aiPlatformFeatures: AIPlatformFeature[] = [
  {
    id: "inference-api",
    title: "Inference API",
    description: "Flexible inference API across all ML models with a single unified interface.",
    icon: Brain,
    color: "purple"
  },
  {
    id: "vector-engine",
    title: "Vector Engine",
    description: "Blazing fast similarity searches across billions of vectors.",
    icon: Database,
    color: "blue"
  },
  {
    id: "code-engine",
    title: "AI Code Engine",
    description: "Code generation, editing, and analysis powered by LLMs.",
    icon: Code,
    color: "indigo"
  },
  {
    id: "agent-framework",
    title: "Agent Framework",
    description: "Build autonomous AI agents that can reason and take actions.",
    icon: Bot,
    color: "cyan"
  },
  {
    id: "reasoning",
    title: "Reasoning",
    description: "Context-aware reasoning with logic, math, and spatial understanding.",
    icon: Brain,
    color: "purple"
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Sequence multiple models with logic to create complete workflows.",
    icon: Workflow,
    color: "indigo"
  },
  {
    id: "observability",
    title: "Observability",
    description: "Comprehensive monitoring and tracing of AI system performance.",
    icon: Eye,
    color: "emerald"
  },
  {
    id: "safety-ethics",
    title: "Safety & Ethics",
    description: "Ensure responsible AI with content moderation and bias detection.",
    icon: Shield,
    color: "amber"
  },
  {
    id: "tracing",
    title: "Distributed Tracing",
    description: "End-to-end request tracing for complex AI application flows.",
    icon: Activity,
    color: "rose"
  },
  {
    id: "analytics",
    title: "AI Analytics",
    description: "Rich insights into usage patterns and model performance metrics.",
    icon: LineChart,
    color: "blue"
  },
  {
    id: "monitoring",
    title: "Real-time Monitoring",
    description: "Live dashboards showing AI system health and performance.",
    icon: Monitor,
    color: "indigo"
  },
  {
    id: "edge-deployment",
    title: "Edge Deployment",
    description: "Deploy AI models to edge locations for reduced latency.",
    icon: Network,
    color: "cyan"
  }
];
