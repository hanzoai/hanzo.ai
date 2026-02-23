
import { Brain, Search, Database, Sparkles } from "lucide-react";
import React from "react";

export interface AIFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  featurePoints: { text: string }[];
  delay: number;
  iconBgClass: string;
  iconTextClass: string;
  bulletColor: string;
}

export const featureData: AIFeature[] = [
  {
    icon: React.createElement(Brain, { className: "h-6 w-6" }),
    title: "Model Integration",
    description: "Seamlessly integrate with OpenAI, Hugging Face, and other machine learning platforms. Deploy and serve custom ML models with built-in scaling and monitoring.",
    featurePoints: [
      { text: "One-click API connections to popular ML services" },
      { text: "Simple deployment of custom models with containerization" },
      { text: "Performance optimization for inference workloads" }
    ],
    delay: 0.1,
    iconBgClass: "bg-primary/20",
    iconTextClass: "text-foreground",
    bulletColor: "text-foreground"
  },
  {
    icon: React.createElement(Search, { className: "h-6 w-6" }),
    title: "Vector Search",
    description: "High-performance vector database capabilities for semantic search, RAG applications, and similarity matching across billions of vectors.",
    featurePoints: [
      { text: "Advanced indexing for fast k-NN and ANN queries" },
      { text: "Built-in embeddings generation from text and images" },
      { text: "Hybrid search combining vector and traditional queries" }
    ],
    delay: 0.2,
    iconBgClass: "bg-primary/20",
    iconTextClass: "text-foreground/70",
    bulletColor: "text-foreground/70"
  },
  {
    icon: React.createElement(Database, { className: "h-6 w-6" }),
    title: "Data Processing",
    description: "Specialized data processing pipelines for cleaning, transforming, and enriching training data for machine learning models.",
    featurePoints: [
      { text: "Automated ETL workflows for AI data preparation" },
      { text: "Data versioning and lineage tracking" },
      { text: "Scalable batch and stream processing" }
    ],
    delay: 0.3,
    iconBgClass: "bg-primary/10",
    iconTextClass: "text-foreground/70",
    bulletColor: "text-foreground/70"
  },
  {
    icon: React.createElement(Sparkles, { className: "h-6 w-6" }),
    title: "AI-Enhanced Features",
    description: "Ready-to-use AI capabilities that can be integrated into applications with minimal configuration.",
    featurePoints: [
      { text: "Content generation and summarization" },
      { text: "Image and video analysis with computer vision" },
      { text: "Real-time anomaly detection and predictive analytics" }
    ],
    delay: 0.4,
    iconBgClass: "bg-primary/10",
    iconTextClass: "text-foreground/60",
    bulletColor: "text-foreground/60"
  }
];
