
import React from "react";
import { 
  AppWindow, Database, Code, Terminal, Puzzle, 
  Cpu, Bot, Layers, User, Activity, Share, Zap,
  FileCode, Star, Monitor, Plus, ExternalLink
} from "lucide-react";
import DXPlatformCard from "./DXPlatformCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DXPlatformGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const DXPlatformGrid: React.FC<DXPlatformGridProps> = ({ isHovered, setIsHovered }) => {
  const platformData = [
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
      id: "edge",
      title: "Edge",
      description: "Lightweight runtime for global edge-optimized applications.",
      icon: Share,
      features: [
        "Deploy to hundreds of edge locations globally",
        "Minimal footprint for resource-efficient operation",
        "Seamless integration with Hanzo services",
        "Built-in CDN capabilities for static assets"
      ],
      color: "cyan"
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
      id: "functions",
      title: "Functions",
      description: "Scalable, event-driven serverless compute with built-in AI integration.",
      icon: Zap,
      features: [
        "Event-driven execution with zero infrastructure",
        "Integrated with Hanzo AI for intelligent processing",
        "Automatic scaling based on workload",
        "Multiple runtime environments supported"
      ],
      color: "rose"
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
      id: "observability",
      title: "Observability",
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
      id: "virtual-machine",
      title: "Virtual Machine",
      description: "AI-enabled local virtual machine for unified development environments.",
      icon: Monitor,
      features: [
        "Consistent development environment across teams",
        "AI-assisted configuration and optimization",
        "Pre-configured with development tools and dependencies",
        "Automatic synchronization with cloud environments"
      ],
      color: "blue"
    },
    {
      id: "zen",
      title: "Zen",
      description: "Simplicity, clarity, elegance—our AI engineering manifesto guiding every decision we make.",
      icon: Star,
      features: [
        "Design principles for building AI systems",
        "Focus on simplicity, clarity, and elegance",
        "Opinionated best practices for AI engineering",
        "Community-driven philosophy for modern software"
      ],
      color: "amber"
    },
    {
      id: "more",
      title: "More Tools",
      description: "Discover additional developer tools in our ecosystem.",
      icon: Plus,
      features: [
        "Infrastructure management tools",
        "DevSecOps integrations",
        "Design and prototyping utilities",
        "Performance optimization tools"
      ],
      color: "gray"
    }
  ];

  // For mobile view, limit the number of items
  const displayData = window.innerWidth < 1024 ? platformData.slice(0, 8) : platformData;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {displayData.map((platform) => (
          <DXPlatformCard
            key={platform.id}
            id={platform.id}
            title={platform.title}
            description={platform.description}
            features={platform.features}
            icon={platform.icon}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            color={platform.color}
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline" className="group" asChild>
          <Link to="/platform">
            Explore All Platform Tools
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DXPlatformGrid;
