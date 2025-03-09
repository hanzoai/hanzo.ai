
import React from "react";
import { 
  Cloud, Database, BarChart, Server, Box, Shield, Cpu
} from "lucide-react";
import CloudServiceCard from "./CloudServiceCard";

interface CloudServiceGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const CloudServiceGrid: React.FC<CloudServiceGridProps> = ({ isHovered, setIsHovered }) => {
  const serviceData = [
    {
      id: "ai-compute",
      title: "AI Compute",
      description: "Instant scaling, GPU-accelerated AI environments.",
      icon: Cpu,
      features: [
        "High-performance NVIDIA hardware on-demand (H100, DGX)",
        "Scalable AI inference and training infrastructure",
        "Low-latency deployments across global data centers",
        "Optimized containers for popular ML frameworks"
      ]
    },
    {
      id: "analytics",
      title: "Analytics",
      description: "Precision business intelligence and real-time user insights.",
      icon: BarChart,
      features: [
        "Real-time event tracking and contextual analytics",
        "AI-driven predictive analytics and anomaly detection",
        "Planetary-scale infrastructure (36+ global locations)",
        "Interactive dashboards with no-code visualization tools"
      ]
    },
    {
      id: "security",
      title: "Security",
      description: "Enterprise-grade protection for AI workloads and data.",
      icon: Shield,
      features: [
        "End-to-end encryption for data in transit and at rest",
        "Advanced DDoS protection and intrusion detection",
        "SOC 2, HIPAA, GDPR, and ISO 27001 compliance",
        "Hardware-level isolation for sensitive workloads"
      ]
    },
    {
      id: "base",
      title: "Base",
      description: "A complete backend platform in one line of code (@hanzo/base).",
      icon: Server,
      features: [
        "Real-time database, serverless functions, and authentication",
        "Integrated CDN and edge-optimized global storage",
        "Fully open-source, easy self-hosting and no vendor lock-in",
        "Automatic schema validation and type generation"
      ]
    },
    {
      id: "commerce",
      title: "Commerce",
      description: "Intelligent, next-generation e-commerce platform (@hanzo/commerce).",
      icon: Box,
      features: [
        "One-line store creation with automated checkout and cart",
        "Dynamic pricing, subscription management, and analytics",
        "Seamless Web2 and Web3 payment integrations",
        "AI-powered recommendation engines and inventory forecasting"
      ]
    },
    {
      id: "database",
      title: "Database",
      description: "High-performance real-time analytics database.",
      icon: Database,
      features: [
        "Optimized for AI workloads with clickhouse-style performance",
        "Scalable, fault-tolerant architecture with global replication",
        "In-memory caching included, seamlessly integrated with Base",
        "Automatic sharding and partitioning for massive datasets"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        />
      ))}
    </div>
  );
};

export default CloudServiceGrid;
