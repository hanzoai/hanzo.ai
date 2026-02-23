'use client'


import React, { useState } from "react";
import { Button } from "@hanzo/ui";
import { Bot, Activity, Database, Settings, PlayCircle, StopCircle, Brain, Zap, PlusCircle, Search, List, LayoutGrid } from "lucide-react";
import { Input } from "@hanzo/ui";
import { Progress } from "@hanzo/ui/progress";
import { DummyAgentData, Agent } from "./data";
import { cn } from "@/lib/utils";
import AgentDetail from "./AgentDetail";
import { toast } from "sonner";

interface AgentsListProps {
  viewMode?: "list" | "grid";
}

const AgentsList = ({ viewMode = "grid" }: AgentsListProps) => {
  const [agents, setAgents] = useState<Agent[]>(DummyAgentData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [displayMode, setDisplayMode] = useState<"list" | "grid">(viewMode);

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusColors = {
    idle: "bg-gray-500",
    running: "bg-green-500",
    paused: "bg-yellow-500",
    error: "bg-red-500"
  };

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const handleAgentClick = (agent: Agent) => {
    setSelectedAgent(agent);
  };

  const handleAgentUpdate = (updatedAgent: Agent) => {
    const updatedAgents = agents.map(agent => 
      agent.id === updatedAgent.id ? updatedAgent : agent
    );
    setAgents(updatedAgents);
    setSelectedAgent(null);
    toast.success(`Agent ${updatedAgent.name} updated successfully`);
  };

  const handleStatusToggle = (agent: Agent, e: React.MouseEvent) => {
    e.stopPropagation();
    const newStatus = agent.status === "running" ? "paused" : "running";
    const updatedAgent = { ...agent, status: newStatus as "running" | "paused" };
    
    const updatedAgents = agents.map(a => 
      a.id === agent.id ? updatedAgent : a
    );
    
    setAgents(updatedAgents);
    toast.success(`Agent ${agent.name} ${newStatus === "running" ? "started" : "paused"}`);
  };

  const toggleDisplayMode = () => {
    setDisplayMode(prev => prev === "grid" ? "list" : "grid");
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-neutral-500" />
          <Input 
            placeholder="Search agents..." 
            className="bg-[var(--black)] border-gray-800 pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="ghost" 
            className="border border-gray-800" 
            onClick={toggleDisplayMode}
            title={displayMode === "grid" ? "Switch to List View" : "Switch to Grid View"}
          >
            {displayMode === "grid" ? <List className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
          </Button>
          <Button className="bg-[var(--black)] hover:bg-gray-900 border border-gray-800">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Agent
          </Button>
        </div>
      </div>
      
      {displayMode === "grid" ? (
        <div className="border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--black)] text-left">
                <th className="px-4 py-3 font-medium text-neutral-400">Name</th>
                <th className="px-4 py-3 font-medium text-neutral-400">Status</th>
                <th className="px-4 py-3 font-medium text-neutral-400">Type</th>
                <th className="px-4 py-3 font-medium text-neutral-400">Model</th>
                <th className="px-4 py-3 font-medium text-neutral-400">Tasks</th>
                <th className="px-4 py-3 font-medium text-neutral-400">Memory</th>
                <th className="px-4 py-3 font-medium text-neutral-400">Tokens</th>
                <th className="px-4 py-3 font-medium text-neutral-400">Cost</th>
                <th className="px-4 py-3 font-medium text-neutral-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredAgents.map((agent) => (
                <tr 
                  key={agent.id} 
                  className="bg-[var(--black)] hover:bg-gray-900/60 cursor-pointer"
                  onClick={() => handleAgentClick(agent)}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-md bg-red-900/30 border border-red-800/50 flex items-center justify-center mr-3">
                        <Bot className="h-4 w-4 text-[#ffffff]" />
                      </div>
                      <div>
                        <div className="font-medium">{agent.name}</div>
                        <div className="text-xs text-neutral-500">Last active: {agent.lastActive}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className={`h-2 w-2 rounded-full ${statusColors[agent.status]} mr-2`}></div>
                      {getStatusText(agent.status)}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      {agent.type === "Research" && <Database className="h-4 w-4 mr-1 text-[#ffffff]" />}
                      {agent.type === "Coding" && <Brain className="h-4 w-4 mr-1 text-[#ff6b6b]" />}
                      {agent.type === "Assistant" && <Activity className="h-4 w-4 mr-1 text-green-400" />}
                      {agent.type}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-neutral-300">{agent.model}</td>
                  <td className="px-4 py-3">{agent.tasks}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <Progress 
                        value={agent.memory} 
                        className="h-1.5 w-16 mr-2 bg-gray-800" 
                        style={{
                          '--progress-background': agent.memory > 80 ? 'bg-red-500' : 
                            agent.memory > 60 ? 'bg-yellow-500' : 
                            'bg-[#ffffff]'
                        } as React.CSSProperties}
                      />
                      <span>{agent.memory}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{agent.tokens.toLocaleString()}</td>
                  <td className="px-4 py-3">${agent.cost.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <div className="flex space-x-1" onClick={(e) => e.stopPropagation()}>
                      {agent.status === "running" ? (
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-[var(--white)]" onClick={(e) => handleStatusToggle(agent, e)}>
                          <StopCircle className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-[var(--white)]" onClick={(e) => handleStatusToggle(agent, e)}>
                          <PlayCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-[var(--white)]">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAgents.map((agent) => (
            <div 
              key={agent.id}
              className="bg-[var(--black)] border border-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-900/20 transition-colors"
              onClick={() => handleAgentClick(agent)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-md bg-red-900/30 border border-red-800/50 flex items-center justify-center mr-3">
                    <Bot className="h-4 w-4 text-[#ffffff]" />
                  </div>
                  <div>
                    <div className="font-medium">{agent.name}</div>
                    <div className="text-xs text-neutral-500">Last active: {agent.lastActive}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`h-2 w-2 rounded-full ${statusColors[agent.status]} mr-2`}></div>
                  <span className="text-sm">{getStatusText(agent.status)}</span>
                </div>
              </div>
              
              <div className="mb-3 text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-neutral-400">Type:</span>
                  <span className="flex items-center">
                    {agent.type === "Research" && <Database className="h-3 w-3 mr-1 text-[#ffffff]" />}
                    {agent.type === "Coding" && <Brain className="h-3 w-3 mr-1 text-[#ff6b6b]" />}
                    {agent.type === "Assistant" && <Activity className="h-3 w-3 mr-1 text-green-400" />}
                    {agent.type}
                  </span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-neutral-400">Model:</span>
                  <span>{agent.model}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-neutral-400">Tasks:</span>
                  <span>{agent.tasks}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-neutral-400">Tokens:</span>
                  <span>{agent.tokens.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Cost:</span>
                  <span>${agent.cost.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm">
                  <span className="text-neutral-400 mr-2">Memory:</span>
                  <Progress 
                    value={agent.memory} 
                    className="h-1.5 w-16 mr-2 bg-gray-800" 
                    style={{
                      '--progress-background': agent.memory > 80 ? 'bg-red-500' : 
                        agent.memory > 60 ? 'bg-yellow-500' : 
                        'bg-[#ffffff]'
                    } as React.CSSProperties}
                  />
                  <span>{agent.memory}%</span>
                </div>
                
                <div className="flex space-x-1" onClick={(e) => e.stopPropagation()}>
                  {agent.status === "running" ? (
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-[var(--white)]" onClick={(e) => handleStatusToggle(agent, e)}>
                      <StopCircle className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-[var(--white)]" onClick={(e) => handleStatusToggle(agent, e)}>
                      <PlayCircle className="h-4 w-4" />
                    </Button>
                  )}
                  <Button size="icon" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-[var(--white)]">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedAgent && (
        <AgentDetail
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
          onUpdate={handleAgentUpdate}
        />
      )}
    </div>
  );
};

export default AgentsList;
