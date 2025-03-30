
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WebinarCard = ({ title, partner, image, logos = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden group hover:border-gray-700 transition-colors"
    >
      <div className="h-48 bg-gray-800 relative">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
          {title}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-neutral-500">{partner}</div>
        </div>
        <Button className="w-full bg-gray-800 hover:bg-gray-700">
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

const HanzoAppWebinars = () => {
  const webinars = [
    {
      title: "How to Build No-Code SQL Chatbots using Hanzo AI",
      partner: "SingleStore",
      logos: ["SingleStore"],
      image: "/webinar-placeholder-1.jpg" // Added image property
    },
    {
      title: "LlamaIndex Webinar: Build No-Code RAG with Hanzo AI",
      partner: "Milvus",
      logos: ["Milvus"],
      image: "/webinar-placeholder-2.jpg" // Added image property
    },
    {
      title: "How to Build a NoCode AWS Bedrock LLM App on Hanzo AI",
      partner: "AWS",
      logos: ["SingleStore", "AWS"],
      image: "/webinar-placeholder-3.jpg" // Added image property
    },
    {
      title: "Drag and Drop LLMs: Simplifying RAG with Hanzo AI and Milvus",
      partner: "Milvus",
      logos: ["Milvus"],
      image: "/webinar-placeholder-4.jpg" // Added image property
    },
    {
      title: "LangChain Weekly Webinar - Low-Code/No-Code LLM",
      partner: "Langchain",
      logos: ["Langchain"],
      image: "/webinar-placeholder-5.jpg" // Added image property
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Webinars</h2>
          <p className="text-xl text-neutral-300">
            Learn how to use Hanzo AI from different webinar series with our partners
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <WebinarCard 
              key={index}
              title={webinar.title}
              partner={webinar.partner}
              logos={webinar.logos}
              image={webinar.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HanzoAppWebinars;
