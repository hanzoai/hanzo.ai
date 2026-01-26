
import React from "react";
import { motion } from "framer-motion";
import { Rocket, HelpCircle, BookOpen, GraduationCap, Folder, Star, List, Book } from "lucide-react";

const Documentation = () => {
  const docs = [
    {
      title: "Getting Started",
      icon: Rocket,
      items: ["Quick Start", "FAQ", "CHANGELOG", "Tutorials"]
    },
    {
      title: "Core Concepts",
      icon: BookOpen,
      items: ["Overview", "Character Files", "Clients", "Agent Runtime", "Plugins", "Providers", "Actions", "Evaluators", "Database Adapters"]
    },
    {
      title: "Guides",
      icon: Book,
      items: ["Configuration", "Deployment", "Fine-tuning", "Secrets Management", "Memory Management", "WSL Setup"]
    },
    {
      title: "Advanced Topics",
      icon: GraduationCap,
      items: ["Trust Engine", "Autonomous Trading", "Hanzo in TEE", "Verified Inference"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">Documentation</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Comprehensive guides to help you build, deploy, and manage your agents
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {docs.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <section.icon className="h-5 w-5 text-[#fd4444] mr-2" />
                <h3 className="text-lg font-semibold text-[var(--white)]">{section.title}</h3>
              </div>
              
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-neutral-400 hover:text-[#fd4444] transition-colors flex items-center py-1"
                    >
                      <div className="w-1 h-1 bg-gray-600 rounded-full mr-2"></div>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center text-[#fd4444] hover:text-[#ff6b6b]"
          >
            <Book className="h-5 w-5 mr-2" />
            View Complete Documentation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Documentation;
