
import React from "react";
import { motion } from "framer-motion";
import { Brain, MessageSquare, Box, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdditionalFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 border border-purple-500/30 mt-12">
      <h3 className="text-2xl font-bold text-[var(--white)] mb-4">Single API for Everything</h3>
      <p className="text-lg text-neutral-300 mb-8">
        Our unified API provides seamless access to all AI capabilities through a consistent, developer-friendly interface
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[var(--black)]/30 p-4 rounded-lg">
          <Brain className="h-8 w-8 text-purple-400 mb-3" />
          <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Model Routing</h4>
          <p className="text-sm text-neutral-300">
            Smart routing to optimal models based on task, cost, and performance requirements
          </p>
        </div>
        
        <div className="bg-[var(--black)]/30 p-4 rounded-lg">
          <MessageSquare className="h-8 w-8 text-purple-400 mb-3" />
          <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Document Processing</h4>
          <p className="text-sm text-neutral-300">
            Built-in document parsing, chunking, and semantic analysis capabilities
          </p>
        </div>
        
        <div className="bg-[var(--black)]/30 p-4 rounded-lg">
          <Box className="h-8 w-8 text-purple-400 mb-3" />
          <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Vector Search</h4>
          <p className="text-sm text-neutral-300">
            Integrated vector database for semantic search and retrieval augmented generation
          </p>
        </div>
        
        <div className="bg-[var(--black)]/30 p-4 rounded-lg">
          <Database className="h-8 w-8 text-purple-400 mb-3" />
          <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Knowledge Base</h4>
          <p className="text-sm text-neutral-300">
            Create, manage and query custom knowledge bases for your AI applications
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button className="bg-purple-600 hover:bg-purple-700 text-[var(--white)] px-6 py-2 text-lg">
          Explore the API
        </Button>
      </div>
    </div>
  );
};

export default AdditionalFeatures;
