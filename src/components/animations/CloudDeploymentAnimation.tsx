
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, Database, Github, Server, HardDrive, Boxes, Box, Check, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/radix-dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/radix-tooltip";

interface NodeType {
  id: string;
  type: "app" | "database" | "github" | "volume" | "container" | "redis" | "postgres";
  position: { x: number; y: number };
  icon: React.ReactNode;
  label: string;
  active: boolean;
  status?: "deployed" | "pending" | "failed";
  statusMessage?: string;
}

interface ConnectionType {
  id: string;
  source: string;
  target: string;
  active: boolean;
}

interface NotificationType {
  id: string;
  title: string;
  message: string;
  type: "success" | "error" | "info";
  timestamp: Date;
}

const CloudDeploymentAnimation = () => {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [connections, setConnections] = useState<ConnectionType[]>([]);
  const [scanPoints, setScanPoints] = useState<Array<{ x: number; y: number; active: boolean }>>([]);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
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

  // Create deployment sequence
  useEffect(() => {
    // Initial cloud node
    const initialNodes: NodeType[] = [
      {
        id: "cloud-1",
        type: "app",
        position: { x: 50, y: 50 },
        icon: <Cloud className="h-7 w-7 text-purple-400" />,
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
              icon: <Github className="h-5 w-5 text-gray-300" />,
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
              ? { ...node, status: "deployed", statusMessage: "Just deployed via GitHub" } 
              : node
          ));
          
          addNotification("Backend Ready", "Backend service successfully deployed");
        }
      },
      {
        delay: 3000,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "redis-1",
              type: "redis",
              position: { x: 75, y: 25 },
              icon: <Database className="h-5 w-5 text-red-400" />,
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
              source: "github-1",
              target: "redis-1",
              active: true
            }
          ]);
          
          addNotification("Service Creating", "Provisioning Redis cache service");
        }
      },
      {
        delay: 4500,
        action: () => {
          // Set Redis as deployed
          setNodes(prev => prev.map(node => 
            node.id === "redis-1" 
              ? { ...node, status: "deployed", statusMessage: "Just deployed" } 
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
        delay: 5000,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "redis-volume",
              type: "volume",
              position: { x: 85, y: 40 },
              icon: <HardDrive className="h-5 w-5 text-green-300" />,
              label: "redis-volume",
              active: false,
              status: "pending",
              statusMessage: "Creating volume"
            }
          ]);
        }
      },
      {
        delay: 6000,
        action: () => {
          // Activate the volume
          setNodes(prev => 
            prev.map(node => 
              node.id === "redis-volume" ? { 
                ...node, 
                active: true,
                status: "deployed", 
                statusMessage: "Volume attached" 
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
        delay: 7000,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "postgres-1",
              type: "postgres",
              position: { x: 30, y: 70 },
              icon: <Database className="h-5 w-5 text-blue-300" />,
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
              source: "github-1",
              target: "postgres-1",
              active: true
            }
          ]);
          
          addNotification("Database Creating", "Provisioning PostgreSQL database");
        }
      },
      {
        delay: 8500,
        action: () => {
          // Set Postgres as deployed
          setNodes(prev => prev.map(node => 
            node.id === "postgres-1" 
              ? { ...node, status: "deployed", statusMessage: "Just deployed" } 
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
        delay: 9000,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "pg-data",
              type: "volume",
              position: { x: 20, y: 85 },
              icon: <HardDrive className="h-5 w-5 text-green-300" />,
              label: "pg-data",
              active: false,
              status: "pending",
              statusMessage: "Creating volume"
            }
          ]);
        }
      },
      {
        delay: 10000,
        action: () => {
          // Activate pg-data volume
          setNodes(prev => 
            prev.map(node => 
              node.id === "pg-data" ? { 
                ...node, 
                active: true,
                status: "deployed", 
                statusMessage: "Volume attached" 
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

  // Handle node click
  const handleNodeClick = (node: NodeType) => {
    setSelectedNode(node);
    setIsDialogOpen(true);
  };

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-xl bg-gray-900/80 border border-gray-800 shadow-lg">
      {/* Zoom controls */}
      <div className="absolute left-4 top-4 z-20 flex flex-col gap-2 rounded-md bg-gray-800/70 p-1">
        <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700/70 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
            <path d="M3 9h18" />
          </svg>
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700/70 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700/70 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
          </svg>
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded hover:bg-gray-700/70 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="8" height="8" x="2" y="2" rx="2" />
            <rect width="8" height="8" x="14" y="2" rx="2" />
            <rect width="8" height="8" x="2" y="14" rx="2" />
            <rect width="8" height="8" x="14" y="14" rx="2" />
          </svg>
        </button>
      </div>
      
      {/* Background grid points */}
      {scanPoints.map((point, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute h-1 w-1 rounded-full bg-purple-500/20"
          style={{ 
            left: `${point.x}%`, 
            top: `${point.y}%` 
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: point.active ? [0, 0.5, 0.3] : 0,
            scale: point.active ? [0, 1, 1] : 0
          }}
          transition={{ 
            duration: 2,
            repeat: point.active ? Infinity : 0,
            repeatType: "loop",
            repeatDelay: 3
          }}
        />
      ))}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#9b87f5" />
          </marker>
        </defs>
        {connections.map(connection => {
          const source = nodes.find(n => n.id === connection.source);
          const target = nodes.find(n => n.id === connection.target);
          
          if (!source || !target) return null;
          
          return (
            <motion.line
              key={connection.id}
              x1={`${source.position.x}%`}
              y1={`${source.position.y}%`}
              x2={`${target.position.x}%`}
              y2={`${target.position.y}%`}
              stroke="#9b87f5"
              strokeWidth="1.5"
              strokeDasharray="4"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: connection.active ? 1 : 0,
                opacity: connection.active ? 0.6 : 0
              }}
              transition={{ duration: 0.6 }}
            />
          );
        })}
      </svg>
      
      {/* Nodes */}
      <TooltipProvider>
        {nodes.map(node => (
          <motion.div
            key={node.id}
            className={`absolute flex flex-col items-center justify-center cursor-pointer`}
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
            onClick={() => handleNodeClick(node)}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`flex h-14 w-14 items-center justify-center rounded-lg ${
                  node.type === 'app' ? 'bg-purple-500/20 border border-purple-500/30' :
                  node.type === 'redis' ? 'bg-red-500/20 border border-red-500/30' :
                  node.type === 'postgres' ? 'bg-blue-500/20 border border-blue-500/30' :
                  node.type === 'github' ? 'bg-gray-500/20 border border-gray-500/30' :
                  node.type === 'volume' ? 'bg-green-500/20 border border-green-500/30' :
                  'bg-purple-500/20 border border-purple-500/30'
                }`}>
                  {node.icon}
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
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{node.label}</p>
                {node.statusMessage && <p className="text-xs opacity-80">{node.statusMessage}</p>}
              </TooltipContent>
            </Tooltip>
            <span className="mt-2 text-xs text-gray-300 whitespace-nowrap">{node.label}</span>
            
            {/* Status message */}
            {node.status === 'deployed' && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-xs text-green-400 flex items-center"
              >
                <Check className="h-3 w-3 mr-1" />
                Just deployed
              </motion.div>
            )}
          </motion.div>
        ))}
      </TooltipProvider>
      
      {/* Notifications */}
      <div className="absolute top-2 right-2 z-30 flex flex-col space-y-2 max-w-xs">
        <AnimatePresence>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.95 }}
              className={`rounded-md p-3 shadow-lg ${
                notification.type === 'success' ? 'bg-gray-900/90 border border-gray-700' :
                notification.type === 'error' ? 'bg-red-900/80 border border-red-700' :
                'bg-blue-900/80 border border-blue-700'
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  {notification.type === 'success' && <Check className="h-4 w-4 text-green-400" />}
                  {notification.type === 'error' && <X className="h-4 w-4 text-red-400" />}
                  {notification.type === 'info' && <Cloud className="h-4 w-4 text-blue-400" />}
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium text-gray-100">{notification.title}</p>
                  <p className="text-xs text-gray-300">{notification.message}</p>
                </div>
                <button 
                  className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-300"
                  onClick={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Node details dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedNode?.label}
            </DialogTitle>
            <DialogDescription>
              {selectedNode?.statusMessage}
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-4 bg-gray-800/50 rounded-md mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Service Details</h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <div className="text-gray-400">Status</div>
              <div className="text-gray-200">
                {selectedNode?.status === 'deployed' && <span className="text-green-400">Deployed</span>}
                {selectedNode?.status === 'pending' && <span className="text-blue-400">Pending</span>}
                {selectedNode?.status === 'failed' && <span className="text-red-400">Failed</span>}
              </div>
              
              <div className="text-gray-400">Type</div>
              <div className="text-gray-200">{selectedNode?.type}</div>
              
              <div className="text-gray-400">Created</div>
              <div className="text-gray-200">Just now</div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button 
              className="px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </button>
            <button 
              className="px-3 py-1.5 rounded bg-purple-600 hover:bg-purple-700 text-white text-sm"
              onClick={() => setIsDialogOpen(false)}
            >
              View Details
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CloudDeploymentAnimation;
