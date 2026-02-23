
import React from "react";
import { Server, CircuitBoard, HardDrive, Globe } from "lucide-react";
import { Progress } from "@hanzo/ui/progress";
import { ProjectResources } from "./models/project";

interface ResourceUsageSectionProps {
  resources: ProjectResources;
}

const ResourceUsageSection = ({ resources }: ResourceUsageSectionProps) => {
  return (
    <div>
      <h4 className="font-medium mb-4">Resource Usage</h4>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <Server className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-400">CPU</span>
            </div>
            <span className="text-sm">{resources.cpu.value}</span>
          </div>
          <Progress value={resources.cpu.usage} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <CircuitBoard className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-400">RAM</span>
            </div>
            <span className="text-sm">{resources.memory.value}</span>
          </div>
          <Progress value={resources.memory.usage} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-400">Network Egress</span>
            </div>
            <span className="text-sm">{resources.network.value}</span>
          </div>
          <Progress value={resources.network.usage} className="h-2" />
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <div className="flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-neutral-400" />
              <span className="text-sm text-neutral-400">Volume</span>
            </div>
            <span className="text-sm">{resources.storage.value}</span>
          </div>
          <Progress value={resources.storage.usage} className="h-2" />
        </div>
      </div>
    </div>
  );
};

export default ResourceUsageSection;
