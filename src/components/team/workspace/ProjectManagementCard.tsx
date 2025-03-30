
import React from "react";
import { motion } from "framer-motion";
import { Kanban, CheckCircle, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProjectManagementCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-purple-900/20 rounded-xl overflow-hidden shadow-xl"
    >
      <div className="border-b border-gray-800 p-3 flex items-center">
        <Kanban className="h-5 w-5 text-purple-400 mr-2" />
        <span className="font-medium">Project Management</span>
        <Badge variant="outline" className="ml-auto bg-purple-900/30 border-purple-500/30 text-purple-300">
          Linear-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-[var(--black)]/60 rounded-lg p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <h3 className="font-medium text-[var(--white)]">Website Redesign</h3>
              <Badge className="ml-2 bg-blue-600/20 text-blue-400 border-blue-500/30">In Progress</Badge>
            </div>
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-xs font-bold">AI</div>
              <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs">JD</div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center p-2 bg-gray-800/40 rounded-md border border-gray-700/50">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">Create wireframes</span>
              <div className="ml-auto flex items-center space-x-1">
                <div className="w-5 h-5 rounded-full bg-gray-600 flex items-center justify-center text-xs">JD</div>
              </div>
            </div>
            <div className="flex items-center p-2 bg-gray-800/40 rounded-md border border-gray-700/50">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm">Design homepage</span>
              <div className="ml-auto flex items-center space-x-1">
                <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-xs">AI</div>
              </div>
            </div>
            <div className="flex items-center p-2 bg-purple-900/20 rounded-md border border-purple-700/50">
              <Bot className="h-4 w-4 text-purple-400 mr-2" />
              <span className="text-sm">AI working: Implementing frontend code</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectManagementCard;
