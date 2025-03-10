
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Server, Memory, HardDrive, Globe } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

interface Project {
  id: string;
  name: string;
  currentCost: string;
  estimatedCost: string;
  expanded: boolean;
  resources: {
    cpu: {
      usage: number; // 0-100
      value: string;
      maxValue: string;
    };
    memory: {
      usage: number; // 0-100
      value: string;
      maxValue: string;
    };
    network: {
      usage: number; // 0-100
      value: string;
      maxValue: string;
    };
    storage: {
      usage: number; // 0-100
      value: string;
      maxValue: string;
    };
  };
  costs: {
    name: string;
    usage: string;
    rate: string;
    cost: string;
  }[];
}

const ProjectUsage = () => {
  // Mock data for projects
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "efficient-appreciation",
      currentCost: "$0.0279",
      estimatedCost: "$0.08",
      expanded: false,
      resources: {
        cpu: {
          usage: 20,
          value: "0.1 vCPU",
          maxValue: "0.5 vCPU"
        },
        memory: {
          usage: 50,
          value: "250 MB",
          maxValue: "500 MB"
        },
        network: {
          usage: 10,
          value: "10 MB",
          maxValue: "100 MB"
        },
        storage: {
          usage: 30,
          value: "150 MB",
          maxValue: "500 MB"
        }
      },
      costs: [
        {
          name: "Memory",
          usage: "116.14 minutely GB",
          rate: "$0.00000231 / GB / Minute",
          cost: "$0.0269"
        },
        {
          name: "CPU",
          usage: "1.02 minutely vCPU",
          rate: "$0.0000463 / vCPU / Minute",
          cost: "$0.0005"
        },
        {
          name: "Egress",
          usage: "0.00 total GB",
          rate: "$0.10 / GB",
          cost: "$0.0000"
        },
        {
          name: "Volume",
          usage: "102.51 minutely GB",
          rate: "$0.00000579 / GB / Minute",
          cost: "$0.0006"
        }
      ]
    },
    {
      id: "2",
      name: "cooperative-intuition",
      currentCost: "$0.0121",
      estimatedCost: "$0.03",
      expanded: false,
      resources: {
        cpu: {
          usage: 15,
          value: "0.1 vCPU",
          maxValue: "0.5 vCPU"
        },
        memory: {
          usage: 40,
          value: "200 MB",
          maxValue: "500 MB"
        },
        network: {
          usage: 5,
          value: "5 MB",
          maxValue: "100 MB"
        },
        storage: {
          usage: 20,
          value: "100 MB",
          maxValue: "500 MB"
        }
      },
      costs: [
        {
          name: "Memory",
          usage: "56.24 minutely GB",
          rate: "$0.00000231 / GB / Minute",
          cost: "$0.0110"
        },
        {
          name: "CPU",
          usage: "0.56 minutely vCPU",
          rate: "$0.0000463 / vCPU / Minute",
          cost: "$0.0003"
        },
        {
          name: "Egress",
          usage: "0.00 total GB",
          rate: "$0.10 / GB",
          cost: "$0.0000"
        },
        {
          name: "Volume",
          usage: "42.31 minutely GB",
          rate: "$0.00000579 / GB / Minute",
          cost: "$0.0002"
        }
      ]
    }
  ]);

  const toggleExpand = (projectId: string) => {
    setProjects(prevProjects =>
      prevProjects.map(project =>
        project.id === projectId
          ? { ...project, expanded: !project.expanded }
          : project
      )
    );
  };

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <motion.div 
          key={project.id}
          variants={cardAnimation}
          className="rounded-xl border border-gray-800 bg-gray-900/20 overflow-hidden"
        >
          <div 
            className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-800/30"
            onClick={() => toggleExpand(project.id)}
          >
            <div className="flex items-center gap-4">
              {project.expanded ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
              <span className="font-medium">{project.name}</span>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-sm text-gray-400">Current Cost</div>
                <div className="font-medium">{project.currentCost}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Estimated</div>
                <div className="font-medium">{project.estimatedCost}</div>
              </div>
            </div>
          </div>
          
          {project.expanded && (
            <div className="p-6 border-t border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium mb-4">Resource Usage</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Server className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">CPU</span>
                        </div>
                        <span className="text-sm">{project.resources.cpu.value}</span>
                      </div>
                      <Progress value={project.resources.cpu.usage} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Memory className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">RAM</span>
                        </div>
                        <span className="text-sm">{project.resources.memory.value}</span>
                      </div>
                      <Progress value={project.resources.memory.usage} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">Network Egress</span>
                        </div>
                        <span className="text-sm">{project.resources.network.value}</span>
                      </div>
                      <Progress value={project.resources.network.usage} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <HardDrive className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">Volume</span>
                        </div>
                        <span className="text-sm">{project.resources.storage.value}</span>
                      </div>
                      <Progress value={project.resources.storage.usage} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-4">
                    <h4 className="font-medium">Project Cost</h4>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/20"
                    >
                      View Cost by Service
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {project.costs.map((cost, index) => (
                      <div key={index} className="flex justify-between">
                        <div>
                          <div className="font-medium">{cost.name}</div>
                          <div className="text-xs text-gray-400">{cost.usage}</div>
                          <div className="text-xs text-gray-400">{cost.rate}</div>
                        </div>
                        <div className="font-medium">{cost.cost}</div>
                      </div>
                    ))}
                    
                    <div className="pt-4 border-t border-gray-800 flex justify-between">
                      <div className="text-sm">Metrics are shown as minutely accumulated values</div>
                      <div className="font-bold">{project.currentCost}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectUsage;
