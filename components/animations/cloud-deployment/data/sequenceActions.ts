
import { NodeType, ConnectionType } from "../types";
import { addNotification } from "../utils/notificationUtils";

// Type definitions for sequence actions
export interface SequenceAction {
  delay: number;
  action: (
    setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
    setConnections: React.Dispatch<React.SetStateAction<ConnectionType[]>>,
    setNotifications: React.Dispatch<React.SetStateAction<any[]>>
  ) => void;
}

// Create the GitHub node
export const createGithubNode = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setNodes(prev => [
    ...prev,
    {
      id: "github-1",
      type: "github",
      position: { x: 25, y: 18 },
      iconType: "github",
      iconProps: { className: "h-5 w-5 text-foreground/80" },
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
};

// Deploy the GitHub node
export const deployGithubNode = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
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
};

// Create private network
export const createPrivateNetwork = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setConnections: React.Dispatch<React.SetStateAction<ConnectionType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setNodes(prev => [
    ...prev,
    {
      id: "network-1",
      type: "network",
      position: { x: 50, y: 30 },
      iconType: "network",
      iconProps: { className: "h-5 w-5 text-foreground/70" },
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
};

// Create Redis node
export const createRedisNode = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setConnections: React.Dispatch<React.SetStateAction<ConnectionType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setNodes(prev => [
    ...prev,
    {
      id: "redis-1",
      type: "redis",
      position: { x: 75, y: 25 },
      iconType: "database",
      iconProps: { className: "h-5 w-5 text-foreground/70" },
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
};

// Deploy Redis node
export const deployRedisNode = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
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
};

// Create Redis volume
export const createRedisVolume = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>
) => {
  setNodes(prev => [
    ...prev,
    {
      id: "redis-volume",
      type: "volume",
      position: { x: 75, y: 26 },
      iconType: "hardDrive",
      iconProps: { className: "h-5 w-5 text-foreground/70" },
      label: "redis-data",
      active: true,
      status: "pending",
      statusMessage: "Preparing persistent storage"
    }
  ]);
};

// Attach Redis volume
export const attachRedisVolume = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setConnections: React.Dispatch<React.SetStateAction<ConnectionType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setNodes(prev => 
    prev.map(node => 
      node.id === "redis-volume" ? { 
        ...node, 
        position: { x: 75, y: 32 },
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
};

// Create Postgres node
export const createPostgresNode = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setConnections: React.Dispatch<React.SetStateAction<ConnectionType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setNodes(prev => [
    ...prev,
    {
      id: "postgres-1",
      type: "postgres",
      position: { x: 30, y: 70 },
      iconType: "database",
      iconProps: { className: "h-5 w-5 text-foreground/70" },
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
};

// Deploy Postgres node
export const deployPostgresNode = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
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
};

// Create Postgres volume
export const createPostgresVolume = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>
) => {
  setNodes(prev => [
    ...prev,
    {
      id: "pg-data",
      type: "volume",
      position: { x: 30, y: 71 },
      iconType: "hardDrive",
      iconProps: { className: "h-5 w-5 text-foreground/70" },
      label: "pg-data",
      active: true,
      status: "pending",
      statusMessage: "Preparing persistent storage"
    }
  ]);
};

// Attach Postgres volume
export const attachPostgresVolume = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setConnections: React.Dispatch<React.SetStateAction<ConnectionType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
  setNodes(prev => 
    prev.map(node => 
      node.id === "pg-data" ? { 
        ...node, 
        position: { x: 30, y: 77 },
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
};

// Create public network
export const createPublicNetwork = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setConnections: React.Dispatch<React.SetStateAction<ConnectionType[]>>
) => {
  setNodes(prev => [
    ...prev,
    {
      id: "network-public",
      type: "network",
      position: { x: 18, y: 40 },
      iconType: "link2",
      iconProps: { className: "h-5 w-5 text-foreground/60" },
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
};

// Deploy public network
export const deployPublicNetwork = (
  setNodes: React.Dispatch<React.SetStateAction<NodeType[]>>,
  setNotifications: React.Dispatch<React.SetStateAction<any[]>>
) => {
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
};
