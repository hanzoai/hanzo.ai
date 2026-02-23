'use client'


import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import { 
  Search, 
  Bot, 
  LayoutGrid, 
  ChartBar, 
  Settings, 
  PlusCircle, 
  PlayCircle,
  PauseCircle,
  Database,
  RefreshCw,
  Server
} from "lucide-react";
import { DummyAgentData } from "./data";

const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Toggle the command palette with Cmd+K or Ctrl+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
      
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Handle command selection
  const handleSelect = (id: string) => {
    // Close the palette
    setOpen(false);
    
    // Handle the selected command
    switch (id) {
      case "new-agent":
        window.location.href = "/dashboard?action=new-agent";
        break;
      case "new-task":
        window.location.href = "/dashboard?action=new-task";
        break;
      case "view-board":
        window.location.href = "/dashboard?view=board";
        break;
      case "view-agents":
        window.location.href = "/dashboard?view=agents";
        break;
      case "view-analytics":
        window.location.href = "/dashboard?view=analytics";
        break;
      case "settings":
        window.location.href = "/dashboard?view=settings";
        break;
      default:
        if (id.startsWith("toggle-agent-")) {
          window.location.href = `/dashboard?action=toggle-agent&id=${id.replace("toggle-agent-", "")}`;
        }
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--black)]/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]">
      <div className="w-full max-w-2xl bg-[var(--black)] border border-gray-800 rounded-lg shadow-xl overflow-hidden">
        <Command
          className="bg-[var(--black)] text-[var(--white)] border-none"
          filter={(value, search, keywords) => {
            if (value.includes(search.toLowerCase())) return 1;
            if (keywords?.some(keyword => keyword.includes(search.toLowerCase()))) return 1;
            return 0;
          }}
        >
          <div className="border-b border-gray-800 p-2 flex items-center">
            <Search className="ml-2 h-4 w-4 text-neutral-500" />
            <Command.Input 
              value={search}
              onValueChange={setSearch}
              className="w-full bg-transparent border-none focus:outline-none px-2 py-1.5 text-neutral-200 placeholder-gray-500" 
              placeholder="Search commands..." 
              autoFocus
            />
            <kbd className="mr-2 px-1.5 py-0.5 text-xs rounded bg-gray-800 text-neutral-400">
              Esc
            </kbd>
          </div>
          
          <Command.List className="max-h-80 overflow-auto p-2">
            <Command.Empty className="py-6 text-center text-neutral-500">
              No results found.
            </Command.Empty>
            
            <Command.Group heading="Navigation" className="pb-2">
              <Command.Item 
                id="view-board" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["kanban", "board", "tasks"]}
              >
                <LayoutGrid className="h-4 w-4 text-neutral-400" />
                <span>View Kanban Board</span>
              </Command.Item>
              <Command.Item 
                id="view-agents" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["agents", "ai", "list"]}
              >
                <Bot className="h-4 w-4 text-neutral-400" />
                <span>View Agents</span>
              </Command.Item>
              <Command.Item 
                id="view-analytics" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["analytics", "stats", "metrics"]}
              >
                <ChartBar className="h-4 w-4 text-neutral-400" />
                <span>View Analytics</span>
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="Actions" className="pb-2">
              <Command.Item 
                id="new-agent" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["create", "agent", "new", "add"]}
              >
                <PlusCircle className="h-4 w-4 text-neutral-400" />
                <span>Create New Agent</span>
              </Command.Item>
              <Command.Item 
                id="new-task" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["create", "task", "new", "add"]}
              >
                <PlusCircle className="h-4 w-4 text-neutral-400" />
                <span>Create New Task</span>
              </Command.Item>
              <Command.Item 
                id="refresh" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["refresh", "reload", "update"]}
              >
                <RefreshCw className="h-4 w-4 text-neutral-400" />
                <span>Refresh Dashboard</span>
              </Command.Item>
              <Command.Item 
                id="settings" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["settings", "preferences", "config"]}
              >
                <Settings className="h-4 w-4 text-neutral-400" />
                <span>Open Settings</span>
              </Command.Item>
            </Command.Group>
            
            <Command.Group heading="Manage Agents" className="pb-2">
              {DummyAgentData.map((agent) => (
                <Command.Item 
                  key={agent.id}
                  id={`toggle-agent-${agent.id}`}
                  onSelect={handleSelect}
                  className="flex items-center justify-between px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                  keywords={[agent.name, agent.type, agent.status, "toggle", "agent"]}
                >
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4 text-neutral-400" />
                    <span>{agent.name}</span>
                    <span className="text-neutral-500 text-xs">{`(${agent.type})`}</span>
                  </div>
                  {agent.status === "running" ? (
                    <PauseCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <PlayCircle className="h-4 w-4 text-neutral-400" />
                  )}
                </Command.Item>
              ))}
            </Command.Group>
            
            <Command.Group heading="Resources" className="pb-2">
              <Command.Item 
                id="data-sources" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["data", "sources", "database", "vector", "rag"]}
              >
                <Database className="h-4 w-4 text-neutral-400" />
                <span>Manage Data Sources</span>
              </Command.Item>
              <Command.Item 
                id="infrastructure" 
                onSelect={handleSelect} 
                className="flex items-center space-x-2 px-2 py-1.5 rounded cursor-pointer hover:bg-gray-800 text-neutral-200"
                keywords={["infrastructure", "server", "deploy", "resources"]}
              >
                <Server className="h-4 w-4 text-neutral-400" />
                <span>View Infrastructure</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
};

export default CommandPalette;
