'use client'


import { useState, useEffect } from "react";
import { NodeType, ConnectionType } from "../types";
import { initialNodes, sequenceTimings } from "../data/deploymentSequence";
import { 
  createGithubNode,
  deployGithubNode,
  createPrivateNetwork,
  createRedisNode,
  deployRedisNode,
  createRedisVolume,
  attachRedisVolume,
  createPostgresNode,
  deployPostgresNode,
  createPostgresVolume,
  attachPostgresVolume,
  createPublicNetwork,
  deployPublicNetwork
} from "../data/sequenceActions";
import { removeNotification as removeNotificationUtil } from "../utils/notificationUtils";
import { useScanPoints } from "./useScanPoints";

export const useDeploymentSequence = () => {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [connections, setConnections] = useState<ConnectionType[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  
  // Use the refactored useScanPoints hook with default parameters
  const { scanPoints } = useScanPoints();

  useEffect(() => {
    setNodes(initialNodes);

    // Create the sequence of actions
    const sequence = [
      { 
        delay: sequenceTimings.importGithub,
        action: () => createGithubNode(setNodes, setNotifications)
      },
      { 
        delay: sequenceTimings.deployGithub,
        action: () => deployGithubNode(setNodes, setNotifications)
      },
      { 
        delay: sequenceTimings.createPrivateNetwork,
        action: () => createPrivateNetwork(setNodes, setConnections, setNotifications)
      },
      { 
        delay: sequenceTimings.createRedis,
        action: () => createRedisNode(setNodes, setConnections, setNotifications)
      },
      { 
        delay: sequenceTimings.deployRedis,
        action: () => deployRedisNode(setNodes, setNotifications)
      },
      { 
        delay: sequenceTimings.createRedisVolume,
        action: () => createRedisVolume(setNodes)
      },
      { 
        delay: sequenceTimings.attachRedisVolume,
        action: () => attachRedisVolume(setNodes, setConnections, setNotifications)
      },
      { 
        delay: sequenceTimings.createPostgres,
        action: () => createPostgresNode(setNodes, setConnections, setNotifications)
      },
      { 
        delay: sequenceTimings.deployPostgres,
        action: () => deployPostgresNode(setNodes, setNotifications)
      },
      { 
        delay: sequenceTimings.createPostgresVolume,
        action: () => createPostgresVolume(setNodes)
      },
      { 
        delay: sequenceTimings.attachPostgresVolume,
        action: () => attachPostgresVolume(setNodes, setConnections, setNotifications)
      },
      { 
        delay: sequenceTimings.createPublicNetwork,
        action: () => createPublicNetwork(setNodes, setConnections)
      },
      { 
        delay: sequenceTimings.deployPublicNetwork,
        action: () => deployPublicNetwork(setNodes, setNotifications)
      },
    ];

    // Execute sequence
    const timeouts: NodeJS.Timeout[] = [];
    sequence.forEach(item => {
      const timeout = setTimeout(item.action, item.delay);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  // Remove notification
  const removeNotification = (id: string) => {
    removeNotificationUtil(setNotifications, id);
  };

  return {
    nodes,
    connections,
    scanPoints,
    notifications,
    removeNotification
  };
};
