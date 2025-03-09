
import React from "react";
import { 
  Brain, Database, Server, ShoppingCart, UserCircle, CreditCard, Workflow,
  Cloud, Network, HardDrive, Activity, ExternalLink, Share, Box, Plus,
  Cpu, BarChart, LineChart
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
      id: "database",
      title: "Database",
      description: "Real-time analytics DB optimized for AI, global replication, fault-tolerant.",
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
      id: "edge",
      title: "Edge",
      description: "Instant global edge deployments, ultra-low latency compute and distributed serverless compute.",
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
      id: "machines",
      title: "Machines",
      description: "Instantly scalable GPU and CPU compute optimized for AI workloads.",
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
      id: "metrics",
      title: "Metrics",
      description: "Planetary-scale monitoring, observability, predictive analytics.",
      icon: BarChart,
      features: [
        "Real-time monitoring and alerting across all services",
        "AI-powered anomaly detection and predictive insights",
        "Comprehensive logging and distributed tracing",
        "Custom dashboards and visualization tools"
      ],
      color: "indigo"
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
      color: "amber"
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
      id: "works",
      title: "Works",
      description: "Workflow automation and orchestration platform for AI-driven processes.",
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

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {serviceData.map((service) => (
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
