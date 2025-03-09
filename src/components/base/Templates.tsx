
import React from "react";
import { motion } from "framer-motion";
import { CreditCard, MessageSquare, Globe, Phone, RefreshCw, Code } from "lucide-react";

const Templates = () => {
  const templates = [
    {
      title: "Stripe Subscriptions Starter",
      description: "Complete SaaS subscription management with Stripe integration",
      icon: CreditCard,
      color: "from-purple-500 to-purple-700"
    },
    {
      title: "Next.js App Router with Authentication",
      description: "Secure, fast Next.js application with built-in authentication",
      icon: Globe,
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "AI Chatbot Template",
      description: "Intelligent chatbot with natural language processing capabilities",
      icon: MessageSquare,
      color: "from-green-500 to-green-700"
    },
    {
      title: "LangChain and Next.js Starter",
      description: "LLM-powered application with LangChain and Next.js integration",
      icon: RefreshCw,
      color: "from-amber-500 to-amber-700"
    },
    {
      title: "Flutter User Management",
      description: "Cross-platform Flutter app with complete user management",
      icon: Phone,
      color: "from-cyan-500 to-cyan-700"
    },
    {
      title: "Expo React Native Starter",
      description: "Mobile-first React Native application with Expo framework",
      icon: Code,
      color: "from-rose-500 to-rose-700"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready-to-Use Templates</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jump-start your development with production-ready templates
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-colors group"
            >
              <div className={`h-2 bg-gradient-to-r ${template.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <template.icon className="w-6 h-6 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-semibold text-white">{template.title}</h3>
                </div>
                <p className="text-gray-300">{template.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;
