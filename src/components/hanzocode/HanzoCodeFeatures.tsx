
import React from "react";
import { motion } from "framer-motion";
import { Code, Zap, MessageSquare, Globe } from "lucide-react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 h-full"
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          {icon}
          <h3 className="text-2xl font-semibold mt-4 mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const HanzoCodeFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-xl text-gray-300">
            Boost your productivity with our powerful AI-assisted features
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Smart Completion"
            description="Intelligent code suggestions that learn from your codebase"
            icon={<Code className="h-10 w-10 text-purple-400" />}
          />
          
          <FeatureCard 
            title="Fast Execution"
            description="Lightning fast processing for a seamless development experience"
            icon={<Zap className="h-10 w-10 text-purple-400" />}
          />
          
          <FeatureCard 
            title="Natural Language"
            description="Write code using plain English instructions"
            icon={<MessageSquare className="h-10 w-10 text-purple-400" />}
          />
          
          <FeatureCard 
            title="Multi-language"
            description="Support for all major programming languages and frameworks"
            icon={<Globe className="h-10 w-10 text-purple-400" />}
          />
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeFeatures;
