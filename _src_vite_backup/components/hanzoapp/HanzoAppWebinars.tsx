
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WebinarCard = ({ title, partner }: { title: string; partner: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden group hover:border-gray-700 transition-colors"
    >
      <div className="h-48 bg-gradient-to-br from-[#fd4444]/25 via-black/40 to-[#ff6b6b]/20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-sm uppercase tracking-widest text-neutral-400">Webinar</div>
          <div className="text-lg font-semibold text-[var(--white)] mt-1 line-clamp-2">
            {title}
          </div>
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
      partner: "SingleStore"
    },
    {
      title: "LlamaIndex Webinar: Build No-Code RAG with Hanzo AI",
      partner: "Milvus"
    },
    {
      title: "How to Build a NoCode AWS Bedrock LLM App on Hanzo AI",
      partner: "AWS"
    },
    {
      title: "Drag and Drop LLMs: Simplifying RAG with Hanzo AI and Milvus",
      partner: "Milvus"
    },
    {
      title: "LangChain Weekly Webinar - Low-Code/No-Code LLM",
      partner: "Langchain"
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HanzoAppWebinars;
