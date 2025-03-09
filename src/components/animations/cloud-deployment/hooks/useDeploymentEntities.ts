
import { useState } from "react";
import { NodeType, ConnectionType } from "../types";
import { initialNodes } from "../data/deploymentSequence";

export const useDeploymentEntities = () => {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [connections, setConnections] = useState<ConnectionType[]>([]);

  const initializeNodes = () => {
    setNodes(initialNodes);
  };

  const addNode = (node: NodeType) => {
    setNodes(prev => [...prev, node]);
  };

  const updateNodeStatus = (nodeId: string, status: "deployed" | "pending" | "failed", statusMessage?: string) => {
    setNodes(prev => prev.map(node => 
      node.id === nodeId 
        ? { ...node, status, ...(statusMessage ? { statusMessage } : {}) } 
        : node
    ));
  };

  const updateNodePosition = (nodeId: string, position: { x: number, y: number }) => {
    setNodes(prev => 
      prev.map(node => 
        node.id === nodeId ? { 
          ...node, 
          position
        } : node
      )
    );
  };

  const addConnection = (connection: ConnectionType) => {
    setConnections(prev => [...prev, connection]);
  };

  return {
    nodes,
    connections,
    initializeNodes,
    addNode,
    updateNodeStatus,
    updateNodePosition,
    addConnection
  };
};
