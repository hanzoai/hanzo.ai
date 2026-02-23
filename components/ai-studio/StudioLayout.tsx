'use client'


import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Content from "./Content";
import { MessageInterface, ModelInterface } from "./types";

interface StudioLayoutProps {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  models: ModelInterface[];
  modelSelection: string;
  setModelSelection: (id: string) => void;
  conversation: MessageInterface[];
  promptText: string;
  setPromptText: (text: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const StudioLayout = ({
  showSidebar,
  setShowSidebar,
  activeTab,
  setActiveTab,
  models,
  modelSelection,
  setModelSelection,
  conversation,
  promptText,
  setPromptText,
  handleSubmit
}: StudioLayoutProps) => {
  return (
    <div className="flex-1 flex overflow-hidden max-w-7xl mx-auto w-full p-4">
      <Sidebar 
        showSidebar={showSidebar}
        models={models}
        modelSelection={modelSelection}
        setModelSelection={setModelSelection}
      />
      
      <div className="flex-1 flex flex-col bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
        <Toolbar 
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <Content 
          activeTab={activeTab}
          conversation={conversation}
          promptText={promptText}
          setPromptText={setPromptText}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default StudioLayout;
