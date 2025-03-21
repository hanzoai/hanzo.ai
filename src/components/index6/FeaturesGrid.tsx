
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  bgColor: string;
  iconColor: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, bgColor, iconColor, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all"
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${bgColor}`}>
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

// Feature data
const features = [
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

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          The Complete AI Engineering Platform
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              bgColor={feature.bgColor}
              iconColor={feature.iconColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
export { features };
