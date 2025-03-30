
import React from "react";
import { motion } from "framer-motion";
import { FileText, Calendar, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const KnowledgeBaseCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-gray-900/30 border border-purple-900/20 rounded-xl overflow-hidden shadow-xl"
    >
      <div className="border-b border-gray-800 p-3 flex items-center">
        <FileText className="h-5 w-5 text-purple-400 mr-2" />
        <span className="font-medium">Knowledge Base</span>
        <Badge variant="outline" className="ml-auto bg-purple-900/30 border-purple-500/30 text-purple-300">
          Notion-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-[var(--black)]/60 rounded-lg p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-[var(--white)]">Company Wiki</h3>
            <div className="flex items-center space-x-2">
              <div className="text-xs text-green-400 flex items-center">
                <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-xs mr-1">AI</div>
                <span>Updating</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="p-2 bg-gray-800/40 rounded-md border border-gray-700/50">
              <div className="flex items-center mb-1">
                <Calendar className="h-4 w-4 text-purple-400 mr-2" />
                <span className="font-medium">Onboarding Process</span>
              </div>
              <p className="text-xs text-neutral-400">
                Step-by-step guide for new employees, updated automatically by HR Bot.
              </p>
            </div>
            
            <div className="p-2 bg-gray-800/40 rounded-md border border-gray-700/50">
              <div className="flex items-center mb-1">
                <FileText className="h-4 w-4 text-purple-400 mr-2" />
                <span className="font-medium">Technical Documentation</span>
              </div>
              <p className="text-xs text-neutral-400">
                API references and architectural diagrams maintained by DevBot.
              </p>
            </div>
            
            <div className="p-2 bg-purple-900/20 rounded-md border border-purple-700/50">
              <div className="flex items-center mb-1">
                <Bot className="h-4 w-4 text-purple-400 mr-2" />
                <span className="font-medium">AI Activity: Adding Marketing Guidelines</span>
              </div>
              <div className="flex items-center text-xs text-purple-300">
                <span>ContentBot is updating brand guidelines based on latest team meeting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KnowledgeBaseCard;
