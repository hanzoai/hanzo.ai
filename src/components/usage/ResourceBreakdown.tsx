
import React from "react";
import { Cpu, HardDrive, Globe, CircuitBoard } from "lucide-react";
import { motion } from "framer-motion";
import { createAnimationVariant, curves } from "@/components/ui/animation-variants";

const cardAnimation = createAnimationVariant("fadeInBlur", {
  duration: 0.4,
  curve: curves.snappy,
  distance: 15
});

const ResourceBreakdown = () => {
  const resources = [
    {
      name: "Compute (CPU)",
      icon: <Cpu className="h-5 w-5" />,
      description: "CPU cost across all services",
      cost: "$0.0021 per vCPU/hour",
      percentage: 35
    },
    {
      name: "Memory (RAM)",
      icon: <CircuitBoard className="h-5 w-5" />,
      description: "Memory cost across all services",
      cost: "$0.0015 per GB/hour",
      percentage: 45
    },
    {
      name: "Storage",
      icon: <HardDrive className="h-5 w-5" />,
      description: "Persistent volume storage",
      cost: "$0.00015 per GB/hour",
      percentage: 15
    },
    {
      name: "Network Egress",
      icon: <Globe className="h-5 w-5" />,
      description: "Outbound data transfer",
      cost: "$0.10 per GB",
      percentage: 5
    }
  ];

  return (
    <motion.div 
      variants={cardAnimation}
      className="rounded-xl border border-gray-800 bg-gray-900/20 overflow-hidden p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <div 
            key={index} 
            className="bg-[var(--black)]/30 rounded-xl p-5 border border-gray-800"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-neutral-400">
                {resource.icon}
              </div>
              <div className="font-medium">{resource.name}</div>
            </div>
            
            <div className="mb-4">
              <div className="text-sm text-neutral-400 mb-1">{resource.description}</div>
              <div className="font-medium">{resource.cost}</div>
            </div>
            
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div 
                className="bg-[#fd4444] h-2.5 rounded-full" 
                style={{ width: `${resource.percentage}%` }}
              ></div>
            </div>
            <div className="text-sm text-neutral-400 mt-1">
              {resource.percentage}% of total cost
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ResourceBreakdown;
