
import React from "react";
import { motion } from "framer-motion";
import { FileText, Search, Code, ShoppingCart } from "lucide-react";

const UseCaseCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
    >
      <Icon className="h-10 w-10 text-purple-400 mb-4" />
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </motion.div>
  );
};

const HanzoExtensionUseCases = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Discover how the Hanzo Extension can enhance your daily workflows
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UseCaseCard 
            icon={FileText}
            title="Content Research"
            description="Quickly summarize articles, extract key insights, and save information to your knowledge base while browsing."
          />
          
          <UseCaseCard 
            icon={Search}
            title="Enhanced Web Search"
            description="Get more relevant search results with AI-powered refinements and suggestions based on your context."
          />
          
          <UseCaseCard 
            icon={Code}
            title="Developer Assistance"
            description="Get code explanations, documentation lookups, and debugging suggestions while reviewing technical content."
          />
          
          <UseCaseCard 
            icon={ShoppingCart}
            title="Shopping Assistant"
            description="Compare products, find better deals, and get instant reviews while shopping online."
          />
        </div>
      </div>
    </section>
  );
};

export default HanzoExtensionUseCases;
