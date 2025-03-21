
import { LucideIcon, Settings, Cloud, Lock, Eye, Code, Shield, Users, Sparkles, Hand, Smile, Layout } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link: string;
}

export const features: Feature[] = [
  {
    title: "Customizable",
    description: "Tailor your AI experience from pre-training to implementation with adjustable parameters and flexible architecture designs.",
    icon: Settings,
    color: "bg-purple-600",
    link: "/ai"
  },
  {
    title: "Private",
    description: "Keep your data secure with our privacy-focused solutions that prioritize your information security.",
    icon: Lock,
    color: "bg-blue-600",
    link: "/security"
  },
  {
    title: "Deploy Anywhere",
    description: "Flexible deployment options for any environment - cloud, on-premises, hybrid, or edge computing scenarios.",
    icon: Cloud,
    color: "bg-cyan-600",
    link: "/cloud"
  },
  {
    title: "Transparent",
    description: "Understand how your AI works with full transparency into model decisions and processing methods.",
    icon: Eye,
    color: "bg-emerald-600",
    link: "/ai"
  },
  {
    title: "Open-Source Focused",
    description: "Built on and contributing to open-source technologies, ensuring compatibility and community support.",
    icon: Code,
    color: "bg-green-600",
    link: "/open-source"
  },
  {
    title: "Trustworthy",
    description: "Reliable AI systems designed with safety, ethics, and responsible AI principles at their core.",
    icon: Shield,
    color: "bg-amber-600",
    link: "/security"
  },
  {
    title: "Human-Centered AI",
    description: "Technology that enhances human capabilities and adapts to human needs rather than replacing them.",
    icon: Users,
    color: "bg-orange-600",
    link: "/ai"
  },
  {
    title: "Engaging",
    description: "Interactive and intuitive AI experiences that keep users involved and productive throughout their journey.",
    icon: Sparkles,
    color: "bg-rose-600",
    link: "/platform"
  },
  {
    title: "Hands-On Solutions",
    description: "Practical, ready-to-implement tools and frameworks that solve real-world problems immediately.",
    icon: Hand,
    color: "bg-pink-600",
    link: "/solutions"
  },
  {
    title: "Delightful",
    description: "AI experiences that surprise and delight users with thoughtful design and unexpected capabilities.",
    icon: Smile,
    color: "bg-indigo-600",
    link: "/ai"
  },
  {
    title: "Beautiful Interfaces",
    description: "Stunning, intuitive user interfaces that make complex AI interactions simple and enjoyable.",
    icon: Layout,
    color: "bg-violet-600",
    link: "/platform"
  }
];
