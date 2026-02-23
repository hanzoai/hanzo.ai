
import React from "react";
import { Button } from "@hanzo/ui";
import { CostItem } from "./models/project";

interface ProjectCostSectionProps {
  costs: CostItem[];
  currentCost: string;
}

const ProjectCostSection = ({ costs, currentCost }: ProjectCostSectionProps) => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h4 className="font-medium">Project Cost</h4>
        <Button 
          variant="ghost" 
          size="sm"
          className="text-[#ffffff] hover:text-[#ff6b6b] hover:bg-red-900/20"
        >
          View Cost by Service
        </Button>
      </div>
      
      <div className="space-y-4">
        {costs.map((cost, index) => (
          <div key={index} className="flex justify-between">
            <div>
              <div className="font-medium">{cost.name}</div>
              <div className="text-xs text-neutral-400">{cost.usage}</div>
              <div className="text-xs text-neutral-400">{cost.rate}</div>
            </div>
            <div className="font-medium">{cost.cost}</div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-gray-800 flex justify-between">
          <div className="text-sm">Metrics are shown as minutely accumulated values</div>
          <div className="font-bold">{currentCost}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCostSection;
