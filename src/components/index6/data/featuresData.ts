
import { ArrowRight } from "lucide-react";
import { ReactElement } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
}

// Feature data
export const features: Feature[] = [
  {
    title: "AI Engineering",
    description: "Build, deploy, and operate AI applications with developer-first tools that make AI development a breeze.",
    icon: ArrowRight,
    bgColor: "bg-purple-900/20",
    iconColor: "text-purple-400"
  },
  {
    title: "Cloud Infrastructure",
    description: "Serverless, scalable cloud infrastructure designed for AI workloads with global distribution.",
    icon: ArrowRight,
    bgColor: "bg-blue-900/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Developer Experience",
    description: "Tools and workflows that streamline AI development for individuals and teams.",
    icon: ArrowRight,
    bgColor: "bg-green-900/20",
    iconColor: "text-green-400"
  },
  {
    title: "Production-Ready",
    description: "Enterprise-grade security, compliance, and reliability features for mission-critical AI systems.",
    icon: ArrowRight,
    bgColor: "bg-amber-900/20",
    iconColor: "text-amber-400"
  },
  {
    title: "Rapid Prototyping",
    description: "Go from idea to prototype in minutes with intuitive tools and pre-built templates.",
    icon: ArrowRight,
    bgColor: "bg-pink-900/20",
    iconColor: "text-pink-400"
  },
  {
    title: "AI Ecosystem",
    description: "Access to a growing ecosystem of AI models, tools, and services built on Hanzo.",
    icon: ArrowRight,
    bgColor: "bg-teal-900/20",
    iconColor: "text-teal-400"
  }
];
