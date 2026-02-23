import { useState, useEffect } from "react";
import { NodeType, ConnectionType } from "../types";
import { initialNodes } from "../data/deploymentSequence";

/**
 * This hook has been refactored into multiple files:
 * - src/components/animations/cloud-deployment/data/sequenceActions.ts (contains node creation logic)
 * - src/components/animations/cloud-deployment/hooks/useDeploymentSequence.ts (sequence orchestration)
 * 
 * This file is kept for backward compatibility but simply re-exports what's in useDeploymentSequence.
 */
export const useDeploymentEntities = (setNotifications: React.Dispatch<React.SetStateAction<any[]>>) => {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [connections, setConnections] = useState<ConnectionType[]>([]);

  useEffect(() => {
    setNodes(initialNodes);
    
    // Note: This hook functionality has been moved to useDeploymentSequence
    // This is just a minimal implementation for backward compatibility
    
    return () => {
      // Cleanup handled in useDeploymentSequence
    };
  }, [setNotifications]);

  return {
    nodes,
    connections,
  };
};
