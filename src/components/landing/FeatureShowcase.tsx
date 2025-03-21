
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Database, MessageSquare, HardDrive, Bot, Code2, Monitor } from "lucide-react";

const TabButton = ({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) => (
  <button
    className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
      active ? "bg-purple-600 text-white" : "bg-transparent text-gray-400 hover:text-white"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "cloud" | "platform">("all");

  const cloudProducts = [
    {
      icon: <Database className="h-6 w-6 text-blue-400" />,
      title: "Datastore",
      description: "Scalable data storage for AI applications with integrated vector capabilities."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
      title: "Chat",
      description: "Build custom AI assistants with personalized knowledge and capabilities."
    },
    {
      icon: <HardDrive className="h-6 w-6 text-blue-400" />,
      title: "Vector Engine",
      description: "High-performance vector database for semantic search, RAG applications, and more."
    }
  ];

  const platformProducts = [
    {
      icon: <Bot className="h-6 w-6 text-purple-400" />,
      title: "Bot",
      description: "Agentic framework for building advanced AI assistants and automation."
    },
    {
      icon: <Code2 className="h-6 w-6 text-purple-400" />,
      title: "Code",
      description: "AI-powered code editor and generator with deep project understanding."
    },
    {
      icon: <Monitor className="h-6 w-6 text-purple-400" />,
      title: "App",
      description: "AI app builder with drag-and-drop workflows and no-code integration."
    }
  ];

  const displayedProducts = 
    activeTab === "all" ? [...cloudProducts, ...platformProducts] : 
    activeTab === "cloud" ? cloudProducts : 
    platformProducts;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              Open Source AI Engineering
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build the Future with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              A complete platform for developers to build, deploy, and scale AI
              applications with unprecedented speed and complete control.
            </p>
          </motion.div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/30 rounded-full p-1.5 flex">
              <TabButton
                active={activeTab === "all"}
                label="All"
                onClick={() => setActiveTab("all")}
              />
              <TabButton
                active={activeTab === "cloud"}
                label="AI Cloud"
                onClick={() => setActiveTab("cloud")}
              />
              <TabButton
                active={activeTab === "platform"}
                label="DX Platform"
                onClick={() => setActiveTab("platform")}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
