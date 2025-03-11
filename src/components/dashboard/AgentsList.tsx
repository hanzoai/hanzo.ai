
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot, Activity, Database, Settings, PlayCircle, StopCircle, Brain, Zap, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { DummyAgentData } from "./dummy-data";

interface Agent {
  id: string;
  name: string;
  status: "idle" | "running" | "paused" | "error";
  type: string;
  model: string;
  tasks: number;
  tokens: number;
  cost: number;
  lastActive: string;
  memory: number;
}

const AgentsList = () => {
  const [agents, setAgents] = useState<Agent[]>(DummyAgentData);
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          <Input 
            placeholder="Search agents..." 
            className="bg-gray-900 border-gray-800 pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button className="bg-black hover:bg-gray-900 border border-gray-800">
          <PlusCircle className="h-4 w-4 mr-2" />
          New Agent
        </Button>
      </div>
      
      <div className="border border-gray-800 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-black text-left">
              <th className="px-4 py-3 font-medium text-gray-400">Name</th>
              <th className="px-4 py-3 font-medium text-gray-400">Status</th>
              <th className="px-4 py-3 font-medium text-gray-400">Type</th>
              <th className="px-4 py-3 font-medium text-gray-400">Model</th>
              <th className="px-4 py-3 font-medium text-gray-400">Tasks</th>
              <th className="px-4 py-3 font-medium text-gray-400">Memory</th>
              <th className="px-4 py-3 font-medium text-gray-400">Tokens</th>
              <th className="px-4 py-3 font-medium text-gray-400">Cost</th>
              <th className="px-4 py-3 font-medium text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filteredAgents.map((agent) => (
              <tr key={agent.id} className="bg-black hover:bg-gray-900/60">
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-md bg-blue-900/30 border border-blue-800/50 flex items-center justify-center mr-3">
                      <Bot className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">{agent.name}</div>
                      <div className="text-xs text-gray-500">Last active: {agent.lastActive}</div>
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
                    {agent.type === "Research" && <Database className="h-4 w-4 mr-1 text-blue-400" />}
                    {agent.type === "Coding" && <Brain className="h-4 w-4 mr-1 text-purple-400" />}
                    {agent.type === "Assistant" && <Activity className="h-4 w-4 mr-1 text-green-400" />}
                    {agent.type}
                  </div>
                </td>
                <td className="px-4 py-3 text-gray-300">{agent.model}</td>
                <td className="px-4 py-3">{agent.tasks}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <Progress value={agent.memory} className="h-1.5 w-16 mr-2 bg-gray-800" indicatorClassName="bg-blue-500" />
                    <span>{agent.memory}%</span>
                  </div>
                </td>
                <td className="px-4 py-3">{agent.tokens.toLocaleString()}</td>
                <td className="px-4 py-3">${agent.cost.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <div className="flex space-x-1">
                    {agent.status === "running" ? (
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-white">
                        <StopCircle className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-white">
                        <PlayCircle className="h-4 w-4" />
                      </Button>
                    )}
                    <Button size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-white">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentsList;
