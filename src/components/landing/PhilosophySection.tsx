
import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Code } from "lucide-react";

interface PhilosophyItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const PhilosophyItem: React.FC<PhilosophyItemProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const PhilosophySection: React.FC = () => {
  const items = [
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Developer-First",
      description: "Built by developers for developers, with a focus on exceptional DX and intuitive APIs."
    },
    {
      icon: <Zap className="h-8 w-8 text-purple-400" />,
      title: "Open Source",
      description: "Complete transparency with our core tools open source and free forever."
    },
    {
      icon: <Code className="h-8 w-8 text-emerald-400" />,
      title: "Complete Control",
      description: "No black boxes. You own your data, models, and infrastructure with full control."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building AI, the Right Way
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe AI should be powerful, transparent, and fully under your control.
            Our platform is built with these principles at its core.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <PhilosophyItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
