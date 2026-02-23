'use client'

import React from "react";
import { PanelLeft, MessageSquare, Layers, Terminal, Save, Play, Share2, Download, Settings } from "lucide-react";
import { Button } from "@hanzo/ui";

interface ToolbarProps {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Toolbar = ({ 
  showSidebar, 
  setShowSidebar, 
  activeTab, 
  setActiveTab 
}: ToolbarProps) => {
  return (
    <div className="bg-gray-900/70 p-2 border-b border-gray-800 flex items-center">
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setShowSidebar(!showSidebar)}
        className="text-muted-foreground hover:text-[var(--white)] mr-2"
      >
        <PanelLeft className="h-5 w-5" />
      </Button>
      
      <div className="flex space-x-1 mx-2">
        <Button 
          variant={activeTab === "chat" ? "secondary" : "ghost"} 
          size="sm"
          onClick={() => setActiveTab("chat")}
          className="text-sm"
        >
          <MessageSquare className="h-4 w-4 mr-1" /> Chat
        </Button>
        <Button 
          variant={activeTab === "playground" ? "secondary" : "ghost"}
          size="sm" 
          onClick={() => setActiveTab("playground")}
          className="text-sm"
        >
          <Layers className="h-4 w-4 mr-1" /> Playground
        </Button>
        <Button 
          variant={activeTab === "terminal" ? "secondary" : "ghost"} 
          size="sm"
          onClick={() => setActiveTab("terminal")}
          className="text-sm"
        >
          <Terminal className="h-4 w-4 mr-1" /> Terminal
        </Button>
      </div>
      
      <div className="ml-auto flex items-center space-x-1">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-[var(--white)]">
          <Save className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-[var(--white)]">
          <Play className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-[var(--white)]">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-[var(--white)]">
          <Download className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-[var(--white)]">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
