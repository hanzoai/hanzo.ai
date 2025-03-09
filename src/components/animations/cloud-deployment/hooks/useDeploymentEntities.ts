
import { useState, useEffect } from "react";
import { NodeType, ConnectionType } from "../types";
import { initialNodes, sequenceTimings } from "../data/deploymentSequence";
import { addNotification } from "../utils/notificationUtils";

export const useDeploymentEntities = (setNotifications: React.Dispatch<React.SetStateAction<any[]>>) => {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [connections, setConnections] = useState<ConnectionType[]>([]);

  useEffect(() => {
    setNodes(initialNodes);

    // Deployment sequence
    const sequence = [
      // First create nodes
      {
        delay: sequenceTimings.importGithub,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "github-1",
              type: "github",
              position: { x: 25, y: 18 },
              iconType: "github",
              iconProps: { className: "h-5 w-5 text-gray-300" },
              label: "backend",
              active: true,
              status: "pending",
              statusMessage: "Importing from GitHub"
            }
          ]);
          
          addNotification(
            setNotifications,
            "Deployment Started", 
            "Importing backend from GitHub repository"
          );
        }
      },
      {
        delay: sequenceTimings.deployGithub,
        action: () => {
          setNodes(prev => prev.map(node => 
            node.id === "github-1" 
              ? { ...node, status: "deployed", statusMessage: "Backend service deployed" } 
              : node
          ));
          
          addNotification(
            setNotifications,
            "Backend Ready", 
            "Backend service successfully deployed"
          );
        }
      },
      {
        delay: sequenceTimings.createPrivateNetwork,
        action: () => {
          // Add private network
          setNodes(prev => [
            ...prev,
            {
              id: "network-1",
              type: "network",
              position: { x: 50, y: 30 },
              iconType: "network",
              iconProps: { className: "h-5 w-5 text-blue-300" },
              label: "private-network",
              active: true,
              status: "deployed",
              statusMessage: "Private network active"
            }
          ]);
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-net-1",
              source: "github-1",
              target: "network-1",
              active: true
            }
          ]);
          
          addNotification(
            setNotifications,
            "Network Ready", 
            "Private network established"
          );
        }
      },
      {
        delay: sequenceTimings.createRedis,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "redis-1",
              type: "redis",
              position: { x: 75, y: 25 },
              iconType: "database",
              iconProps: { className: "h-5 w-5 text-red-400" },
              label: "redis",
              active: true,
              status: "pending",
              statusMessage: "Initializing Redis"
            }
          ]);
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-1",
              source: "network-1",
              target: "redis-1",
              active: true
            }
          ]);
          
          addNotification(
            setNotifications,
            "Service Creating", 
            "Provisioning Redis cache service"
          );
        }
      },
      {
        delay: sequenceTimings.deployRedis,
        action: () => {
          // Set Redis as deployed
          setNodes(prev => prev.map(node => 
            node.id === "redis-1" 
              ? { ...node, status: "deployed", statusMessage: "Redis service active" } 
              : node
          ));
          
          addNotification(
            setNotifications,
            "Redis Ready", 
            "Redis cache service deployed and running"
          );
        }
      },
      {
        delay: sequenceTimings.createRedisVolume,
        action: () => {
          // Add storage volume positioned underneath Redis initially
          setNodes(prev => [
            ...prev,
            {
              id: "redis-volume",
              type: "volume",
              position: { x: 75, y: 26 }, // Start almost at same position as Redis
              iconType: "hardDrive",
              iconProps: { className: "h-5 w-5 text-green-300" },
              label: "redis-data",
              active: true,
              status: "pending",
              statusMessage: "Preparing persistent storage"
            }
          ]);
        }
      },
      {
        delay: sequenceTimings.attachRedisVolume,
        action: () => {
          // Volume stays in place (partially under Redis)
          setNodes(prev => 
            prev.map(node => 
              node.id === "redis-volume" ? { 
                ...node, 
                position: { x: 75, y: 32 }, // Slight adjustment to show it's "underneath"
                status: "deployed",
                statusMessage: "Volume attached to Redis" 
              } : node
            )
          );
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-2",
              source: "redis-1",
              target: "redis-volume",
              active: true
            }
          ]);
          
          addNotification(
            setNotifications,
            "Storage Ready", 
            "Persistent volume attached to Redis"
          );
        }
      },
      {
        delay: sequenceTimings.createPostgres,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "postgres-1",
              type: "postgres",
              position: { x: 30, y: 70 },
              iconType: "database",
              iconProps: { className: "h-5 w-5 text-blue-300" },
              label: "postgres",
              active: true,
              status: "pending",
              statusMessage: "Initializing PostgreSQL"
            }
          ]);
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-3",
              source: "network-1",
              target: "postgres-1",
              active: true
            }
          ]);
          
          addNotification(
            setNotifications,
            "Database Creating", 
            "Provisioning PostgreSQL database"
          );
        }
      },
      {
        delay: sequenceTimings.deployPostgres,
        action: () => {
          // Set Postgres as deployed
          setNodes(prev => prev.map(node => 
            node.id === "postgres-1" 
              ? { ...node, status: "deployed", statusMessage: "PostgreSQL database active" } 
              : node
          ));
          
          addNotification(
            setNotifications,
            "Database Ready", 
            "PostgreSQL database is now available"
          );
        }
      },
      {
        delay: sequenceTimings.createPostgresVolume,
        action: () => {
          // Add storage volume already positioned under Postgres
          setNodes(prev => [
            ...prev,
            {
              id: "pg-data",
              type: "volume",
              position: { x: 30, y: 71 }, // Start almost at same position as Postgres
              iconType: "hardDrive",
              iconProps: { className: "h-5 w-5 text-green-300" },
              label: "pg-data",
              active: true,
              status: "pending",
              statusMessage: "Preparing persistent storage"
            }
          ]);
        }
      },
      {
        delay: sequenceTimings.attachPostgresVolume,
        action: () => {
          // Move volume slightly to indicate attachment
          setNodes(prev => 
            prev.map(node => 
              node.id === "pg-data" ? { 
                ...node, 
                position: { x: 30, y: 77 }, // Adjust to show it's "underneath"
                status: "deployed", 
                statusMessage: "Volume attached to PostgreSQL" 
              } : node
            )
          );
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-4",
              source: "postgres-1",
              target: "pg-data",
              active: true
            }
          ]);
          
          addNotification(
            setNotifications,
            "Storage Ready", 
            "Persistent volume attached to PostgreSQL"
          );
        }
      },
      {
        delay: sequenceTimings.createPublicNetwork,
        action: () => {
          // Add external network for public access
          setNodes(prev => [
            ...prev,
            {
              id: "network-public",
              type: "network",
              position: { x: 18, y: 40 },
              iconType: "link2",
              iconProps: { className: "h-5 w-5 text-yellow-300" }, // Yellow icon for public network
              label: "public-network",
              active: true,
              status: "pending",
              statusMessage: "Configuring public access"
            }
          ]);
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-net-2",
              source: "github-1",
              target: "network-public",
              active: true
            }
          ]);
        }
      },
      {
        delay: sequenceTimings.deployPublicNetwork,
        action: () => {
          // Deploy the public network
          setNodes(prev => 
            prev.map(node => 
              node.id === "network-public" ? { 
                ...node,
                status: "deployed", 
                statusMessage: "Public network configured" 
              } : node
            )
          );
          
          addNotification(
            setNotifications,
            "Network Ready", 
            "Public access configured with port 443 exposed"
          );
        }
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
  }, [setNotifications]);

  return {
    nodes,
    connections,
  };
};
