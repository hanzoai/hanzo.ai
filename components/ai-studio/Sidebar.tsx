'use client'


import React from "react";
import { motion } from "framer-motion";
import { Cpu, MessageSquare, Code, Bot } from "lucide-react";
import { ModelInterface } from "./types";

interface SidebarProps {
  showSidebar: boolean;
  models: ModelInterface[];
  modelSelection: string;
  setModelSelection: (id: string) => void;
}

const Sidebar = ({ 
  showSidebar, 
  models, 
  modelSelection, 
  setModelSelection 
}: SidebarProps) => {
  if (!showSidebar) return null;

  return (
    <motion.div 
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 240, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      className="bg-gray-900/50 border-r border-gray-800 h-full mr-4 p-4 overflow-y-auto"
    >
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">MODELS</h3>
          <div className="space-y-1">
            {models.map((model) => (
              <button
                key={model.id}
                onClick={() => setModelSelection(model.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm flex items-center ${
                  modelSelection === model.id ? "bg-primary/10 text-[var(--white)]" : "text-foreground/80 hover:bg-gray-800"
                }`}
              >
                <Cpu className="w-4 h-4 mr-2" />
                <div>
                  <div>{model.name}</div>
                  <div className="text-xs text-muted-foreground">{model.provider}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">SAVED PROJECTS</h3>
          <div className="space-y-1">
            <button className="w-full text-left px-3 py-2 rounded-md text-sm text-foreground/80 hover:bg-gray-800 flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>Customer Support Bot</span>
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md text-sm text-foreground/80 hover:bg-gray-800 flex items-center">
              <Code className="w-4 h-4 mr-2" />
              <span>Code Generator</span>
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md text-sm text-foreground/80 hover:bg-gray-800 flex items-center">
              <Bot className="w-4 h-4 mr-2" />
              <span>Data Analysis Agent</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
