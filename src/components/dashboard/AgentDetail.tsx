
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/radix-dialog";
import { 
  Bot, Activity, Database, 
  FileText, Globe, Trash2, 
  PlusCircle, ChevronRight,
  ArrowUpDown, Settings, 
  PlayCircle, StopCircle,
  Save, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Agent } from "./data";

interface AgentDetailProps {
  agent: Agent | null;
  onClose: () => void;
  onUpdate: (agent: Agent) => void;
}

interface RagSource {
  id: string;
  name: string;
  type: "database" | "vector" | "file" | "api";
  connection: string;
}

const AgentDetail: React.FC<AgentDetailProps> = ({ agent, onClose, onUpdate }) => {
  const [editedAgent, setEditedAgent] = useState<Agent | null>(agent);
  const [activeTab, setActiveTab] = useState<"overview" | "rag" | "settings">("overview");
  const [selectedRagSource, setSelectedRagSource] = useState<RagSource | null>(null);

  if (!editedAgent) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedAgent(prev => {
      if (!prev) return null;
      return { ...prev, [name]: value };
    });
  };

  const handleSave = () => {
    if (editedAgent) {
      onUpdate(editedAgent);
    }
  };

  const handleAddRagSource = () => {
    const newSource: RagSource = {
      id: `rs-${Date.now()}`,
      name: "New Source",
      type: "database",
      connection: ""
    };
    
    setEditedAgent(prev => {
      if (!prev) return null;
      return {
        ...prev,
        ragSources: [...(prev.ragSources || []), newSource]
      };
    });
    
    setSelectedRagSource(newSource);
  };

  const handleRagSourceChange = (source: RagSource) => {
    setEditedAgent(prev => {
      if (!prev || !prev.ragSources) return prev;
      return {
        ...prev,
        ragSources: prev.ragSources.map(s => 
          s.id === source.id ? source : s
        )
      };
    });
  };

  const handleRemoveRagSource = (sourceId: string) => {
    setEditedAgent(prev => {
      if (!prev || !prev.ragSources) return prev;
      return {
        ...prev,
        ragSources: prev.ragSources.filter(s => s.id !== sourceId)
      };
    });
    
    if (selectedRagSource?.id === sourceId) {
      setSelectedRagSource(null);
    }
  };

  return (
    <Dialog open={!!agent} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <div className="w-8 h-8 rounded-md bg-red-900/30 border border-red-800/50 flex items-center justify-center mr-3">
              <Bot className="h-4 w-4 text-[#fd4444]" />
            </div>
            <Input 
              name="name"
              value={editedAgent.name}
              onChange={handleInputChange}
              className="text-xl font-semibold bg-transparent border-none focus:ring-0 px-0 h-auto"
            />
          </DialogTitle>
        </DialogHeader>

        <div className="flex border-b border-gray-800 mt-2">
          <button 
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'overview' ? 'text-[var(--white)] border-b-2 border-[#fd4444]' : 'text-neutral-400 hover:text-[var(--white)]'}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'rag' ? 'text-[var(--white)] border-b-2 border-[#fd4444]' : 'text-neutral-400 hover:text-[var(--white)]'}`}
            onClick={() => setActiveTab('rag')}
          >
            RAG Sources
          </button>
          <button 
            className={`px-4 py-2 text-sm font-medium ${activeTab === 'settings' ? 'text-[var(--white)] border-b-2 border-[#fd4444]' : 'text-neutral-400 hover:text-[var(--white)]'}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className="flex-1 overflow-auto py-4">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-1">Description</label>
                <Textarea 
                  name="description"
                  value={editedAgent.description || ""}
                  onChange={handleInputChange}
                  placeholder="Agent description..."
                  className="min-h-24 bg-gray-900 border-gray-800"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">Status</label>
                  <div className="flex items-center justify-between p-3 bg-gray-900 border border-gray-800 rounded-md">
                    <div className="flex items-center">
                      <div className={`h-2 w-2 rounded-full mr-2 ${
                        editedAgent.status === 'running' ? 'bg-green-500' : 
                        editedAgent.status === 'paused' ? 'bg-yellow-500' : 
                        editedAgent.status === 'error' ? 'bg-red-500' : 'bg-gray-500'
                      }`}></div>
                      <span>{
                        editedAgent.status.charAt(0).toUpperCase() + editedAgent.status.slice(1)
                      }</span>
                    </div>
                    {editedAgent.status === 'running' ? (
                      <Button size="sm" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-[var(--white)]">
                        <StopCircle className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" className="h-8 w-8 text-neutral-400 hover:text-[var(--white)]">
                        <PlayCircle className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-1">Model</label>
                  <div className="flex items-center p-3 bg-gray-900 border border-gray-800 rounded-md">
                    <Input 
                      name="model"
                      value={editedAgent.model}
                      onChange={handleInputChange}
                      className="bg-transparent border-none p-0 focus:ring-0"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-400 mb-2">Resource Usage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-neutral-400">CPU</span>
                      <span className="text-sm">{editedAgent.cpu || 0}%</span>
                    </div>
                    <Progress value={editedAgent.cpu || 0} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-neutral-400">GPU</span>
                      <span className="text-sm">{editedAgent.gpu || 0}%</span>
                    </div>
                    <Progress value={editedAgent.gpu || 0} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-neutral-400">Memory</span>
                      <span className="text-sm">{editedAgent.memory}%</span>
                    </div>
                    <Progress value={editedAgent.memory} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-neutral-400">Storage</span>
                      <span className="text-sm">{editedAgent.storage || 0}%</span>
                    </div>
                    <Progress value={editedAgent.storage || 0} className="h-2" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-400 mb-2">Usage Statistics</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-md p-3">
                    <h4 className="text-xs text-neutral-500 mb-1">Tokens Used</h4>
                    <p className="text-lg font-medium">{editedAgent.tokens.toLocaleString()}</p>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-md p-3">
                    <h4 className="text-xs text-neutral-500 mb-1">Cost</h4>
                    <p className="text-lg font-medium">${editedAgent.cost.toFixed(2)}</p>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-md p-3">
                    <h4 className="text-xs text-neutral-500 mb-1">Tasks Assigned</h4>
                    <p className="text-lg font-medium">{editedAgent.tasks}</p>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-md p-3">
                    <h4 className="text-xs text-neutral-500 mb-1">Last Active</h4>
                    <p className="text-lg font-medium">{editedAgent.lastActive}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rag' && (
            <div className="grid grid-cols-3 gap-6 h-[400px]">
              <div className="col-span-1 border-r border-gray-800 pr-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium">Knowledge Sources</h3>
                  <Button size="sm" variant="ghost" onClick={handleAddRagSource}>
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-1">
                  {editedAgent.ragSources?.map(source => (
                    <div 
                      key={source.id}
                      className={`p-2 rounded flex items-center justify-between cursor-pointer ${
                        selectedRagSource?.id === source.id ? 'bg-gray-800' : 'hover:bg-gray-900'
                      }`}
                      onClick={() => setSelectedRagSource(source)}
                    >
                      <div className="flex items-center">
                        {source.type === 'database' && <Database className="h-4 w-4 text-[#fd4444] mr-2" />}
                        {source.type === 'vector' && <Activity className="h-4 w-4 text-[#ff6b6b] mr-2" />}
                        {source.type === 'file' && <FileText className="h-4 w-4 text-yellow-400 mr-2" />}
                        {source.type === 'api' && <Globe className="h-4 w-4 text-green-400 mr-2" />}
                        <span className="text-sm truncate">{source.name}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-neutral-500" />
                    </div>
                  ))}
                  {!editedAgent.ragSources?.length && (
                    <div className="text-sm text-neutral-500 p-2">
                      No knowledge sources added
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-2">
                {selectedRagSource ? (
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium">Source Details</h3>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="text-red-400 hover:text-red-300"
                        onClick={() => handleRemoveRagSource(selectedRagSource.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Name</label>
                      <Input 
                        value={selectedRagSource.name}
                        onChange={(e) => {
                          const updated = { ...selectedRagSource, name: e.target.value };
                          handleRagSourceChange(updated);
                          setSelectedRagSource(updated);
                        }}
                        className="bg-gray-900 border-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Type</label>
                      <div className="grid grid-cols-4 gap-2">
                        {(['database', 'vector', 'file', 'api'] as const).map(type => (
                          <div 
                            key={type}
                            className={`p-2 border rounded flex flex-col items-center justify-center cursor-pointer ${
                              selectedRagSource.type === type 
                                ? 'border-[#fd4444] bg-red-900/20' 
                                : 'border-gray-800 hover:border-gray-700'
                            }`}
                            onClick={() => {
                              const updated = { ...selectedRagSource, type };
                              handleRagSourceChange(updated);
                              setSelectedRagSource(updated);
                            }}
                          >
                            {type === 'database' && <Database className="h-5 w-5 text-[#fd4444] mb-1" />}
                            {type === 'vector' && <Activity className="h-5 w-5 text-[#ff6b6b] mb-1" />}
                            {type === 'file' && <FileText className="h-5 w-5 text-yellow-400 mb-1" />}
                            {type === 'api' && <Globe className="h-5 w-5 text-green-400 mb-1" />}
                            <span className="text-xs capitalize">{type}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">Connection String</label>
                      <Input 
                        value={selectedRagSource.connection}
                        onChange={(e) => {
                          const updated = { ...selectedRagSource, connection: e.target.value };
                          handleRagSourceChange(updated);
                          setSelectedRagSource(updated);
                        }}
                        className="bg-gray-900 border-gray-800 font-mono text-xs"
                        placeholder={
                          selectedRagSource.type === 'database' ? 'postgres://user:pass@host/db' :
                          selectedRagSource.type === 'vector' ? 'pinecone://index' :
                          selectedRagSource.type === 'file' ? '/path/to/document.pdf' :
                          'https://api.example.com/endpoint'
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-neutral-500 text-sm">
                    Select a knowledge source or add a new one
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-1">Agent Type</label>
                <Input 
                  name="type"
                  value={editedAgent.type}
                  onChange={handleInputChange}
                  className="bg-gray-900 border-gray-800"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-neutral-400 mb-2">Advanced Settings</h3>
                <div className="space-y-4 bg-gray-900 border border-gray-800 rounded-md p-4">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Memory Limit (%)</label>
                    <Input 
                      type="number"
                      name="memory"
                      value={editedAgent.memory}
                      onChange={handleInputChange}
                      min="0"
                      max="100"
                      className="bg-gray-900 border-gray-800"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Execution Priority</label>
                    <select className="w-full bg-gray-900 border-gray-800 rounded-md p-2 text-sm">
                      <option>Normal</option>
                      <option>High</option>
                      <option>Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Execution Mode</label>
                    <select className="w-full bg-gray-900 border-gray-800 rounded-md p-2 text-sm">
                      <option>Automatic</option>
                      <option>Manual</option>
                      <option>Scheduled</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-gray-800 mt-4">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Agent
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgentDetail;
