
import React from "react";
import { motion } from "framer-motion";
import { Search, Image, FileText, Brain, MessageSquare, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  const useCases = [
    {
      icon: Search,
      title: "Semantic Search",
      description: "Build powerful search experiences that understand user intent beyond keywords.",
      cta: "Try Now",
      color: "blue"
    },
    {
      icon: FileText,
      title: "RAG Applications",
      description: "Create retrieval-augmented generation systems for grounded AI responses.",
      cta: "Try Now",
      color: "indigo"
    },
    {
      icon: Image,
      title: "Image Search",
      description: "Find visually similar images based on content rather than metadata alone.",
      cta: "Try Now",
      color: "purple"
    },
    {
      icon: Brain,
      title: "Hybrid Search",
      description: "Combine vector and keyword search for comprehensive information retrieval.",
      cta: "Try Now",
      color: "teal"
    },
    {
      icon: MessageSquare,
      title: "Conversational Memory",
      description: "Store conversation history as embeddings for more contextual AI interactions.",
      cta: "Try Now",
      color: "cyan"
    },
    {
      icon: FileCode,
      title: "Code Search",
      description: "Find similar code snippets and patterns across your codebase.",
      cta: "Try Now",
      color: "amber"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string, text: string }> = {
      blue: { bg: "bg-blue-900/30", text: "text-blue-400" },
      indigo: { bg: "bg-indigo-900/30", text: "text-indigo-400" },
      purple: { bg: "bg-purple-900/30", text: "text-purple-400" },
      teal: { bg: "bg-teal-900/30", text: "text-teal-400" },
      cyan: { bg: "bg-cyan-900/30", text: "text-cyan-400" },
      amber: { bg: "bg-amber-900/30", text: "text-amber-400" }
    };

    return colorMap[color] || colorMap.indigo;
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Building Your GenAI App
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore use cases with guided notebooks developed by our team and community
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const { bg, text } = getColorClasses(useCase.color);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/50 transition-colors"
              >
                <div className={`h-16 w-16 ${bg} rounded-xl flex items-center justify-center mb-6`}>
                  <useCase.icon className={`h-8 w-8 ${text}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <Button variant="outline" className={`${text} border-gray-700 hover:bg-gray-800`}>
                  {useCase.cta}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
