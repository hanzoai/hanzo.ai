
import React from "react";
import { 
  AppWindow, Database, Code, Terminal, PuzzlePiece, 
  Cpu, Bot, Layers, Plus, ExternalLink
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
      description: "Build and deploy modern applications with ease.",
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
      description: "The complete backend platform in one SDK.",
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
      description: "AI-powered coding assistant and IDE integration.",
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
      description: "Developer experience toolkit for productive teams.",
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
      description: "Extend platform capabilities with custom components.",
      icon: PuzzlePiece,
      features: [
        "Plugin system for core platform functionality",
        "Custom integrations with third-party services",
        "Visual extension marketplace",
        "Extension development SDK with built-in testing"
      ],
      color: "amber"
    },
    {
      id: "runtime",
      title: "Runtime",
      description: "High-performance execution environment for code.",
      icon: Cpu,
      features: [
        "Optimized runtimes for multiple programming languages",
        "Serverless execution with cold-start optimization",
        "Automatic scaling based on demand",
        "Resource-efficient execution with minimal overhead"
      ],
      color: "teal"
    },
    {
      id: "operator",
      title: "Operator",
      description: "Self-operating computer framework for automation.",
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
      id: "platform",
      title: "Platform",
      description: "The unified experience across all Hanzo DX tools.",
      icon: Layers,
      features: [
        "Consistent interface across all platform products",
        "Unified authentication and authorization",
        "Centralized team management and permissions",
        "Integrated monitoring and observability"
      ],
      color: "cyan"
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

  // For mobile view, only show the first 8 items
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
