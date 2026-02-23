'use client'


import React, { useState, useEffect } from "react";
import { X, Plus, LayoutGrid, List, MenuSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export type TabType = {
  id: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
};

interface TabsManagerProps {
  initialTabs: TabType[];
  onAddTab?: () => void;
}

const TabsManager: React.FC<TabsManagerProps> = ({ initialTabs, onAddTab }) => {
  const [tabs, setTabs] = useState<TabType[]>(initialTabs);
  const [activeTabId, setActiveTabId] = useState<string>(initialTabs[0]?.id || "");
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");

  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId);
  };

  const handleCloseTab = (e: React.MouseEvent, tabId: string) => {
    e.stopPropagation();
    if (tabs.length > 1) {
      const newTabs = tabs.filter(tab => tab.id !== tabId);
      setTabs(newTabs);
      
      // If the active tab is being closed, set another tab as active
      if (activeTabId === tabId) {
        setActiveTabId(newTabs[0].id);
      }
    }
  };

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  const toggleViewMode = () => {
    setViewMode(prev => prev === "kanban" ? "list" : "kanban");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b border-gray-800">
        <div className="flex-1 flex overflow-x-auto scrollbar-none">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={cn(
                "flex items-center px-4 py-2 border-r border-gray-800 cursor-pointer group transition-colors",
                activeTabId === tab.id ? "bg-gray-900" : "hover:bg-gray-900/50"
              )}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.icon && <span className="mr-2">{tab.icon}</span>}
              <span className="truncate max-w-[150px]">{tab.title}</span>
              {tabs.length > 1 && (
                <button
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500 hover:text-[var(--white)]"
                  onClick={(e) => handleCloseTab(e, tab.id)}
                >
                  <X size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <button
            onClick={onAddTab}
            className="p-2 hover:bg-gray-800 transition-colors"
            title="New Tab"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={toggleViewMode}
            className="p-2 hover:bg-gray-800 transition-colors"
            title={viewMode === "kanban" ? "Switch to List View" : "Switch to Kanban View"}
          >
            {viewMode === "kanban" ? <List size={16} /> : <LayoutGrid size={16} />}
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden">
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};

export default TabsManager;
