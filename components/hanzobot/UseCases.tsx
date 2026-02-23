'use client'


import React from "react";
import { motion } from "framer-motion";
import { HeadsetIcon, MessageCircle, BookOpen, FilePlus } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: HeadsetIcon,
      title: "AI Assistants",
      examples: ["Customer support agents", "Community moderators", "Personal assistants"]
    },
    {
      icon: MessageCircle,
      title: "Social Media Personas",
      examples: ["Automated content creators", "Brand representatives", "Influencers"]
    },
    {
      icon: BookOpen,
      title: "Knowledge Workers",
      examples: ["Research assistants", "Content analysts", "Document processors"]
    },
    {
      icon: FilePlus,
      title: "Interactive Characters",
      examples: ["Role-playing characters", "Educational tutors", "Entertainment bots"]
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
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">Use Cases</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Hanzo Bot can be used to create a wide variety of autonomous agents
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-[#ffffff]/30 transition-colors"
            >
              <div className="bg-[#ffffff]/10 p-3 rounded-lg inline-block mb-4">
                <useCase.icon className="h-6 w-6 text-[#ffffff]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--white)] mb-4">{useCase.title}</h3>
              <ul className="space-y-2">
                {useCase.examples.map((example, i) => (
                  <li key={i} className="text-neutral-400 flex items-center">
                    <span className="w-2 h-2 bg-[#ffffff] rounded-full mr-2"></span>
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
