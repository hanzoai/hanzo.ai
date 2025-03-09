
import { useState, useEffect } from "react";
import { NodeType, ConnectionType, NotificationType, ScanPointType } from "../types";

export const useDeploymentSequence = () => {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [connections, setConnections] = useState<ConnectionType[]>([]);
  const [scanPoints, setScanPoints] = useState<ScanPointType[]>([]);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  // Add notification
  const addNotification = (title: string, message: string, type: "success" | "error" | "info" = "success") => {
    const newNotification = {
      id: `notification-${Date.now()}`,
      title,
      message,
      type,
      timestamp: new Date()
    };
    
    setNotifications(prev => [newNotification, ...prev].slice(0, 3));
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 5000);
  };

  // Remove notification
  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Initialize grid points for the scanning effect
  useEffect(() => {
    const points = [];
    const gridSize = 8;
    const cellSize = 100 / gridSize;
    
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        // Skip some points to create a less uniform pattern
        if (Math.random() > 0.6) continue;
        
        points.push({
          x: x * cellSize + (Math.random() * cellSize * 0.6),
          y: y * cellSize + (Math.random() * cellSize * 0.6),
          active: false
        });
      }
    }
    
    setScanPoints(points);
  }, []);

  // Create deployment sequence
  useEffect(() => {
    // Initial cloud node
    const initialNodes: NodeType[] = [
      {
        id: "cloud-1",
        type: "app",
        position: { x: 50, y: 50 },
        iconType: "cloud",
        iconProps: { className: "h-7 w-7 text-purple-400" },
        label: "Hanzo Cloud",
        active: true,
        status: "deployed",
        statusMessage: "Cloud environment ready"
      }
    ];
    
    setNodes(initialNodes);

    // Deployment sequence
    const sequence = [
      // First create nodes
      {
        delay: 1000,
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
          
          // Activate first wave of scan points
          setScanPoints(prev => 
            prev.map((point, idx) => ({
              ...point,
              active: idx < 5 ? true : point.active
            }))
          );
          
          addNotification("Deployment Started", "Importing backend from GitHub repository");
        }
      },
      {
        delay: 2500,
        action: () => {
          setNodes(prev => prev.map(node => 
            node.id === "github-1" 
              ? { ...node, status: "deployed", statusMessage: "Backend service deployed" } 
              : node
          ));
          
          addNotification("Backend Ready", "Backend service successfully deployed");
        }
      },
      {
        delay: 3000,
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
          
          addNotification("Network Ready", "Private network established");
        }
      },
      {
        delay: 4000,
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
          
          addNotification("Service Creating", "Provisioning Redis cache service");
        }
      },
      {
        delay: 5500,
        action: () => {
          // Set Redis as deployed
          setNodes(prev => prev.map(node => 
            node.id === "redis-1" 
              ? { ...node, status: "deployed", statusMessage: "Redis service active" } 
              : node
          ));
          
          // Activate more scan points
          setScanPoints(prev => 
            prev.map((point, idx) => ({
              ...point,
              active: idx < 12 ? true : point.active
            }))
          );
          
          addNotification("Redis Ready", "Redis cache service deployed and running");
        }
      },
      {
        delay: 6000,
        action: () => {
          // Add storage volume that will slide into Redis
          setNodes(prev => [
            ...prev,
            {
              id: "redis-volume",
              type: "volume",
              position: { x: 85, y: 40 },
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
        delay: 6500,
        action: () => {
          // Move volume closer to Redis to simulate "sliding in"
          setNodes(prev => 
            prev.map(node => 
              node.id === "redis-volume" ? { 
                ...node, 
                position: { x: 77, y: 32 },
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
          
          addNotification("Storage Ready", "Persistent volume attached to Redis");
        }
      },
      {
        delay: 7500,
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
          
          addNotification("Database Creating", "Provisioning PostgreSQL database");
        }
      },
      {
        delay: 9000,
        action: () => {
          // Set Postgres as deployed
          setNodes(prev => prev.map(node => 
            node.id === "postgres-1" 
              ? { ...node, status: "deployed", statusMessage: "PostgreSQL database active" } 
              : node
          ));
          
          // Activate all remaining scan points
          setScanPoints(prev => 
            prev.map(point => ({
              ...point,
              active: true
            }))
          );
          
          addNotification("Database Ready", "PostgreSQL database is now available");
        }
      },
      {
        delay: 9500,
        action: () => {
          // Add storage volume that will slide into Postgres
          setNodes(prev => [
            ...prev,
            {
              id: "pg-data",
              type: "volume",
              position: { x: 20, y: 85 },
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
        delay: 10000,
        action: () => {
          // Move volume closer to Postgres to simulate "sliding in"
          setNodes(prev => 
            prev.map(node => 
              node.id === "pg-data" ? { 
                ...node, 
                position: { x: 30, y: 78 },
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
          
          addNotification("Storage Ready", "Persistent volume attached to PostgreSQL");
        }
      },
      {
        delay: 11000,
        action: () => {
          // Add external network for public access
          setNodes(prev => [
            ...prev,
            {
              id: "network-public",
              type: "network",
              position: { x: 18, y: 40 },
              iconType: "link",
              iconProps: { className: "h-5 w-5 text-yellow-300" },
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
        delay: 12000,
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
