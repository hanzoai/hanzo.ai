
import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { NodeType } from "./types";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/radix-tooltip";
import { renderIcon } from "./utils/iconUtils";

interface DeploymentNodeProps {
  node: NodeType;
  onClick: (node: NodeType) => void;
}

const DeploymentNode: React.FC<DeploymentNodeProps> = ({ node, onClick }) => {
  const getNodeBackgroundClass = () => {
    switch(node.type) {
      case 'app': return 'bg-purple-500/20 border border-purple-500/30';
      case 'redis': return 'bg-red-500/20 border border-red-500/30';
      case 'postgres': return 'bg-blue-500/20 border border-blue-500/30';
      case 'github': return 'bg-gray-500/20 border border-gray-500/30';
      case 'volume': return 'bg-green-500/20 border border-green-500/30';
      case 'network': 
        return node.id === 'network-public' 
          ? 'bg-yellow-500/20 border border-yellow-500/30'
          : 'bg-blue-500/20 border border-blue-500/30';
      default: return 'bg-purple-500/20 border border-purple-500/30';
    }
  };

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center cursor-pointer"
      style={{ 
        left: `${node.position.x}%`, 
        top: `${node.position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: node.active ? 1 : 0,
        opacity: node.active ? 1 : 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 0.5
      }}
      onClick={() => onClick(node)}
    >
      <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${getNodeBackgroundClass()}`}>
        {renderIcon(node.iconType, node.iconProps)}
        {node.status && (
          <div className="absolute -right-1 -bottom-1 rounded-full bg-gray-800 border border-gray-700 p-0.5">
            {node.status === 'deployed' && <Check className="h-3 w-3 text-green-400" />}
            {node.status === 'pending' && (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <svg className="h-3 w-3 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            )}
            {node.status === 'failed' && <X className="h-3 w-3 text-red-400" />}
          </div>
        )}
      </div>
      <span className="mt-2 text-xs text-gray-300 whitespace-nowrap">{node.label}</span>
    </motion.div>
  );
};

// Wrapped version with tooltip
const DeploymentNodeWithTooltip: React.FC<DeploymentNodeProps> = (props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span>
          <DeploymentNode {...props} />
        </span>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>{props.node.label}</p>
        {props.node.statusMessage && <p className="text-xs opacity-80">{props.node.statusMessage}</p>}
      </TooltipContent>
    </Tooltip>
  );
};

export default DeploymentNodeWithTooltip;
