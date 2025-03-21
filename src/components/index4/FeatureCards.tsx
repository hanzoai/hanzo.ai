
import React from "react";
import { motion } from "framer-motion";
import { Terminal, Code, Database } from "lucide-react";
import { ArchitecturalBox } from "@/components/ui/architectural-elements";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <ArchitecturalBox
      className="backdrop-blur-lg bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-6 hover:border-zinc-700/50 transition-all duration-300"
      showCorners={true}
      cornerColor="rgba(100, 100, 100, 0.2)"
      cornerSize={20}
    >
      <div className="mb-4 p-2 bg-zinc-800/50 rounded-lg w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2 text-white">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">
        {description}
      </p>
    </ArchitecturalBox>
  );
};

const FeatureCards = () => {
  const features = [
    {
      icon: <Terminal className="h-5 w-5 text-zinc-300" />,
      title: "Developer Experience",
      description: "Intuitive CLI and dashboard designed for efficient workflow and rapid development."
    },
    {
      icon: <Code className="h-5 w-5 text-zinc-300" />,
      title: "Instant Deployments",
      description: "From code to production in seconds with automatic builds and zero downtime updates."
    },
    {
      icon: <Database className="h-5 w-5 text-zinc-300" />,
      title: "Global Infrastructure",
      description: "Scale effortlessly with our distributed network optimized for performance and reliability."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto mb-32 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureCards;
