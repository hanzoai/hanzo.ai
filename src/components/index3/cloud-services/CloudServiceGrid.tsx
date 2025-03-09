
import React from "react";
import { 
  Brain, Database, Bot, Server, ShoppingCart, UserCircle, CreditCard, Workflow,
  Plus, ExternalLink
} from "lucide-react";
import CloudServiceCard from "./CloudServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CloudServiceGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const CloudServiceGrid: React.FC<CloudServiceGridProps> = ({ isHovered, setIsHovered }) => {
  const serviceData = [
    {
      id: "ai",
      title: "AI",
      description: "The intelligence engine behind every Hanzo product.",
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
      id: "bots",
      title: "Bots",
      description: "Intelligent conversational agents for business automation.",
      icon: Bot,
      features: [
        "Multi-channel bot deployment (web, mobile, messaging platforms)",
        "Natural language understanding and context awareness",
        "Customizable personalities and knowledge bases",
        "Analytics dashboard to monitor performance and engagement"
      ],
      color: "blue"
    },
    {
      id: "compute",
      title: "Compute",
      description: "Instant scaling, GPU-accelerated AI environments.",
      icon: Server,
      features: [
        "High-performance NVIDIA hardware on-demand (H100, DGX)",
        "Scalable AI inference and training infrastructure",
        "Low-latency deployments across global data centers",
        "Optimized containers for popular ML frameworks"
      ],
      color: "green"
    },
    {
      id: "databases",
      title: "Databases",
      description: "High-performance real-time analytics databases.",
      icon: Database,
      features: [
        "Optimized for AI workloads with clickhouse-style performance",
        "Scalable, fault-tolerant architecture with global replication",
        "In-memory caching included, seamlessly integrated with Base",
        "Automatic sharding and partitioning for massive datasets"
      ],
      color: "teal"
    },
    {
      id: "ecommerce",
      title: "Ecommerce",
      description: "Intelligent, next-generation e-commerce platform.",
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
      id: "identity",
      title: "Identity",
      description: "Secure user authentication and identity management.",
      icon: UserCircle,
      features: [
        "Multi-factor authentication and biometric verification",
        "Single sign-on (SSO) and user permission management",
        "Compliance with global identity regulations and standards",
        "Identity analytics and anomaly detection"
      ],
      color: "indigo"
    },
    {
      id: "payments",
      title: "Payments",
      description: "Streamlined payment processing and subscription billing.",
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
      id: "works",
      title: "Works",
      description: "Intelligent workflow automation for complex processes.",
      icon: Workflow,
      features: [
        "No-code workflow builder with AI-assisted automation",
        "Integrations with 300+ popular business applications",
        "Advanced analytics and performance optimization",
        "Scalable execution engine for mission-critical processes"
      ],
      color: "cyan"
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

  // For mobile view, only show the first 8 items
  const displayData = window.innerWidth < 1024 ? serviceData.slice(0, 8) : serviceData;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {displayData.map((service) => (
          <CloudServiceCard
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
            icon={service.icon}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            color={service.color}
          />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <Button variant="outline" className="group" asChild>
          <Link to="/cloud">
            Explore All Cloud Services 
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CloudServiceGrid;
