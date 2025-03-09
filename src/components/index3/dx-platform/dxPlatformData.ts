
import { 
  AppWindow, Database, Code, Terminal, Puzzle, 
  Bot, User, Activity, Zap, Star, 
  Monitor, Plus, Blocks
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface DXPlatformItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

export const dxPlatformData: DXPlatformItem[] = [
  {
    id: "app",
    title: "App",
    description: "No-code AI app builder with drag-and-drop workflows.",
    icon: AppWindow,
    features: [
      "Zero-config application deployment",
      "Full stack TypeScript/JavaScript support",
      "Built-in CI/CD pipelines",
      "Automatic scaling and load balancing"
    ],
    color: "indigo"
  },
  {
    id: "base",
    title: "Base",
    description: "All-in-one realtime DB, authentication, file storage in one backend.",
    icon: Database,
    features: [
      "Real-time database, serverless functions, and authentication",
      "Integrated CDN and edge-optimized global storage",
      "Fully open-source with no vendor lock-in",
      "Automatic schema validation and type generation"
    ],
    color: "purple"
  },
  {
    id: "code",
    title: "Code",
    description: "AI-powered VS Code fork for codebase-aware autocomplete and editing.",
    icon: Code,
    features: [
      "Code generation across 80+ programming languages",
      "Intelligent code completion and refactoring",
      "Integration with popular IDEs and code editors",
      "Advanced debugging and code analysis tools"
    ],
    color: "blue"
  },
  {
    id: "dev",
    title: "Dev",
    description: "Autonomous AI-powered software engineering assistant.",
    icon: Terminal,
    features: [
      "Unified development environment setup",
      "Team collaboration tools and pair programming",
      "AI-assisted documentation generation",
      "Integrated testing and profiling tools"
    ],
    color: "green"
  },
  {
    id: "extension",
    title: "Extension",
    description: "Marketplace for AI-powered IDE extensions compatible with VS Code.",
    icon: Puzzle,
    features: [
      "Plugin system for core platform functionality",
      "Custom integrations with third-party services",
      "Visual extension marketplace",
      "Extension development SDK with built-in testing"
    ],
    color: "amber"
  },
  {
    id: "identity",
    title: "Identity",
    description: "Authentication and authorization supporting OAuth, JWT, RBAC.",
    icon: User,
    features: [
      "Multi-factor authentication and biometric verification",
      "Single sign-on (SSO) and user permission management",
      "Compliance with global identity regulations and standards",
      "Identity analytics and anomaly detection"
    ],
    color: "indigo"
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description: "Intelligent tracing, logging, real-time monitoring of AI systems.",
    icon: Activity,
    features: [
      "Comprehensive monitoring of all application components",
      "AI-powered anomaly detection and insights",
      "Distributed tracing and performance profiling",
      "Custom dashboards and visualization tools"
    ],
    color: "teal"
  },
  {
    id: "operator",
    title: "Operator",
    description: "AI-native assistant for automating desktop tasks via natural language.",
    icon: Bot,
    features: [
      "Enable multimodal models to operate computers",
      "Same inputs and outputs as human operators",
      "Advanced task automation for repeated workflows",
      "Compatible with various multimodal AI models"
    ],
    color: "rose"
  },
  {
    id: "runtime",
    title: "Runtime",
    description: "AI-enabled container runtime for unified development environments.",
    icon: Blocks,
    features: [
      "Consistent development environment across teams",
      "AI-assisted configuration and optimization",
      "Pre-configured with development tools and dependencies",
      "Automatic synchronization with cloud environments"
    ],
    color: "blue"
  },
  {
    id: "studio",
    title: "Studio",
    description: "Visual no-code IDE for AI applications and workflows.",
    icon: Monitor,
    features: [
      "Drag-and-drop interface for building AI applications",
      "Visual workflow editor for complex AI pipelines",
      "Built-in templates for common AI use cases",
      "Real-time collaboration for team development"
    ],
    color: "cyan"
  },
  {
    id: "terminal",
    title: "Terminal",
    description: "Intelligent terminal with AI built-in.",
    icon: Terminal,
    features: [
      "AI-powered command suggestions and explanations",
      "Natural language to command translation",
      "Automatic error detection and correction",
      "Context-aware history and command completion"
    ],
    color: "gray"
  },
  {
    id: "zen",
    title: "Zen",
    description: "Simplicity, clarity, elegance—our AI engineering manifesto.",
    icon: Star,
    features: [
      "Design principles for AI-first software development",
      "Methodologies for building intuitive AI interfaces",
      "Best practices for ethical AI implementation",
      "Frameworks for reducing complexity in AI systems"
    ],
    color: "amber"
  }
];
