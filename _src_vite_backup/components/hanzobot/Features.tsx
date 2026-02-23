
import React from "react";
import { motion } from "framer-motion";
import { Bot, Braces, Users, Database, FileText, Image, Code, Layers } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Platform Integration",
      description: "Clients for Discord, X (Twitter), Telegram, and many other platforms"
    },
    {
      icon: Braces,
      title: "Flexible Model Support",
      description: "Use Deepseek, Ollama, Grok, OpenAI, Anthropic, Gemini, LLama, and more"
    },
    {
      icon: Users,
      title: "Character System",
      description: "Create diverse agents using characterfiles with unique personalities"
    },
    {
      icon: Layers,
      title: "Multi-Agent Architecture",
      description: "Manage multiple unique AI personalities simultaneously"
    },
    {
      icon: Database,
      title: "Memory Management",
      description: "Easily ingest and interact with documents using RAG for better context"
    },
    {
      icon: Image,
      title: "Media Processing",
      description: "PDF, URLs, Audio, Video, Image analysis, and Conversation summarization"
    },
    {
      icon: Code,
      title: "Technical Foundation",
      description: "100% TypeScript implementation with modular, extensible architecture"
    },
    {
      icon: FileText,
      title: "Comprehensive API",
      description: "Well-documented interfaces for extending and customizing behavior"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">Key Features</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Designed with flexibility and extensibility in mind to power the next generation of AI agents
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:bg-gray-900/30 hover:border-[#fd4444]/30 transition-colors"
            >
              <feature.icon className="h-10 w-10 text-[#fd4444] mb-4" />
              <h3 className="text-xl font-semibold text-[var(--white)] mb-2">{feature.title}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
