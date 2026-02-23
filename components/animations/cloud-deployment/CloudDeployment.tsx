'use client'


import React, { useState } from "react";
import { TooltipProvider } from "@hanzo/ui";
import { useDeploymentSequence } from "./hooks/useDeploymentSequence";
import BackgroundGrid from "./BackgroundGrid";
import ZoomControls from "./ZoomControls";
import ConnectionLines from "./ConnectionLines";
import DeploymentNodeWithTooltip from "./DeploymentNode";
import Notifications from "./Notifications";
import NodeDetailsDialog from "./NodeDetailsDialog";
import { NodeType } from "./types";

const CloudDeployment: React.FC = () => {
  const { nodes, connections, scanPoints, notifications, removeNotification } = useDeploymentSequence();
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle node click
  const handleNodeClick = (node: NodeType) => {
    setSelectedNode(node);
    setIsDialogOpen(true);
  };

  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-xl bg-[var(--black)]/90 border border-gray-800 shadow-lg">
      {/* Semi-transparent blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 to-cyan-950/20 pointer-events-none"></div>
      
      {/* Zoom controls */}
      <ZoomControls />
      
      {/* Background grid points */}
      <BackgroundGrid scanPoints={scanPoints} />
      
      {/* Connection lines */}
      <ConnectionLines connections={connections} nodes={nodes} />
      
      {/* Nodes */}
      <TooltipProvider>
        {nodes.map(node => (
          <DeploymentNodeWithTooltip 
            key={node.id} 
            node={node}
            onClick={handleNodeClick}
          />
        ))}
      </TooltipProvider>
      
      {/* Notifications */}
      <Notifications 
        notifications={notifications}
        onDismiss={removeNotification}
      />
      
      {/* Node details dialog */}
      <NodeDetailsDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        selectedNode={selectedNode}
      />
    </div>
  );
};

export default CloudDeployment;
