
import { useEffect } from "react";
import { useDeploymentEntities } from "./useDeploymentEntities";
import { useScanPoints } from "./useScanPoints";
import { useNotifications } from "../utils/notificationUtils";
import { sequenceTimings } from "../data/deploymentSequence";

export const useDeploymentSequence = () => {
  const { 
    nodes, connections, initializeNodes, addNode, 
    updateNodeStatus, updateNodePosition, addConnection 
  } = useDeploymentEntities();
  
  const { scanPoints, activateScanPoints, activateAllScanPoints } = useScanPoints();
  const { notifications, addNotification, removeNotification } = useNotifications();

  // Create deployment sequence
  useEffect(() => {
    // Initialize with cloud node
    initializeNodes();

    // Deployment sequence
    const sequence = [
      // First create nodes
      {
        delay: sequenceTimings.importGithub,
        action: () => {
          addNode({
            id: "github-1",
            type: "github",
            position: { x: 25, y: 18 },
            iconType: "github",
            iconProps: { className: "h-5 w-5 text-gray-300" },
            label: "backend",
            active: true,
            status: "pending",
            statusMessage: "Importing from GitHub"
          });
          
          // Activate first wave of scan points
          activateScanPoints(5);
          
          addNotification("Deployment Started", "Importing backend from GitHub repository");
        }
      },
      {
        delay: sequenceTimings.deployGithub,
        action: () => {
          updateNodeStatus(
            "github-1", 
            "deployed", 
            "Backend service deployed"
          );
          
          addNotification("Backend Ready", "Backend service successfully deployed");
        }
      },
      {
        delay: sequenceTimings.createPrivateNetwork,
        action: () => {
          // Add private network
          addNode({
            id: "network-1",
            type: "network",
            position: { x: 50, y: 30 },
            iconType: "network",
            iconProps: { className: "h-5 w-5 text-blue-300" },
            label: "private-network",
            active: true,
            status: "deployed",
            statusMessage: "Private network active"
          });
          
          addConnection({
            id: "conn-net-1",
            source: "github-1",
            target: "network-1",
            active: true
          });
          
          addNotification("Network Ready", "Private network established");
        }
      },
      {
        delay: sequenceTimings.createRedis,
        action: () => {
          addNode({
            id: "redis-1",
            type: "redis",
            position: { x: 75, y: 25 },
            iconType: "database",
            iconProps: { className: "h-5 w-5 text-red-400" },
            label: "redis",
            active: true,
            status: "pending",
            statusMessage: "Initializing Redis"
          });
          
          addConnection({
            id: "conn-1",
            source: "network-1",
            target: "redis-1",
            active: true
          });
          
          addNotification("Service Creating", "Provisioning Redis cache service");
        }
      },
      {
        delay: sequenceTimings.deployRedis,
        action: () => {
          // Set Redis as deployed
          updateNodeStatus(
            "redis-1", 
            "deployed", 
            "Redis service active"
          );
          
          // Activate more scan points
          activateScanPoints(12);
          
          addNotification("Redis Ready", "Redis cache service deployed and running");
        }
      },
      {
        delay: sequenceTimings.createRedisVolume,
        action: () => {
          // Add storage volume that will slide into Redis
          addNode({
            id: "redis-volume",
            type: "volume",
            position: { x: 85, y: 40 },
            iconType: "hardDrive",
            iconProps: { className: "h-5 w-5 text-green-300" },
            label: "redis-data",
            active: true,
            status: "pending",
            statusMessage: "Preparing persistent storage"
          });
        }
      },
      {
        delay: sequenceTimings.attachRedisVolume,
        action: () => {
          // Move volume closer to Redis to simulate "sliding in"
          updateNodePosition("redis-volume", { x: 77, y: 32 });
          updateNodeStatus(
            "redis-volume", 
            "deployed", 
            "Volume attached to Redis"
          );
          
          addConnection({
            id: "conn-2",
            source: "redis-1",
            target: "redis-volume",
            active: true
          });
          
          addNotification("Storage Ready", "Persistent volume attached to Redis");
        }
      },
      {
        delay: sequenceTimings.createPostgres,
        action: () => {
          addNode({
            id: "postgres-1",
            type: "postgres",
            position: { x: 30, y: 70 },
            iconType: "database",
            iconProps: { className: "h-5 w-5 text-blue-300" },
            label: "postgres",
            active: true,
            status: "pending",
            statusMessage: "Initializing PostgreSQL"
          });
          
          addConnection({
            id: "conn-3",
            source: "network-1",
            target: "postgres-1",
            active: true
          });
          
          addNotification("Database Creating", "Provisioning PostgreSQL database");
        }
      },
      {
        delay: sequenceTimings.deployPostgres,
        action: () => {
          // Set Postgres as deployed
          updateNodeStatus(
            "postgres-1", 
            "deployed", 
            "PostgreSQL database active"
          );
          
          // Activate all remaining scan points
          activateAllScanPoints();
          
          addNotification("Database Ready", "PostgreSQL database is now available");
        }
      },
      {
        delay: sequenceTimings.createPostgresVolume,
        action: () => {
          // Add storage volume that will slide into Postgres
          addNode({
            id: "pg-data",
            type: "volume",
            position: { x: 20, y: 85 },
            iconType: "hardDrive",
            iconProps: { className: "h-5 w-5 text-green-300" },
            label: "pg-data",
            active: true,
            status: "pending",
            statusMessage: "Preparing persistent storage"
          });
        }
      },
      {
        delay: sequenceTimings.attachPostgresVolume,
        action: () => {
          // Move volume closer to Postgres to simulate "sliding in"
          updateNodePosition("pg-data", { x: 30, y: 78 });
          updateNodeStatus(
            "pg-data", 
            "deployed", 
            "Volume attached to PostgreSQL"
          );
          
          addConnection({
            id: "conn-4",
            source: "postgres-1",
            target: "pg-data",
            active: true
          });
          
          addNotification("Storage Ready", "Persistent volume attached to PostgreSQL");
        }
      },
      {
        delay: sequenceTimings.createPublicNetwork,
        action: () => {
          // Add external network for public access
          addNode({
            id: "network-public",
            type: "network",
            position: { x: 18, y: 40 },
            iconType: "link",
            iconProps: { className: "h-5 w-5 text-yellow-300" },
            label: "public-network",
            active: true,
            status: "pending",
            statusMessage: "Configuring public access"
          });
          
          addConnection({
            id: "conn-net-2",
            source: "github-1",
            target: "network-public",
            active: true
          });
        }
      },
      {
        delay: sequenceTimings.deployPublicNetwork,
        action: () => {
          // Deploy the public network
          updateNodeStatus(
            "network-public", 
            "deployed", 
            "Public network configured"
          );
          
          addNotification("Network Ready", "Public access configured with port 443 exposed");
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
  }, []);

  return {
    nodes,
    connections,
    scanPoints,
    notifications,
    removeNotification
  };
};
