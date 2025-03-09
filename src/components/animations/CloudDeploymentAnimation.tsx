
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Database, Github, Server, HardDrive, Boxes, Box } from "lucide-react";

interface NodeType {
  id: string;
  type: "app" | "database" | "github" | "volume" | "container";
  position: { x: number; y: number };
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

interface ConnectionType {
  id: string;
  source: string;
  target: string;
  active: boolean;
}

const CloudDeploymentAnimation = () => {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [connections, setConnections] = useState<ConnectionType[]>([]);
  const [scanPoints, setScanPoints] = useState<Array<{ x: number; y: number; active: boolean }>>([]);
  
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
        icon: <Cloud className="h-7 w-7 text-purple-400" />,
        label: "Hanzo Cloud",
        active: true
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
              icon: <Github className="h-5 w-5 text-purple-300" />,
              label: "Repository",
              active: true
            }
          ]);
          
          // Activate first wave of scan points
          setScanPoints(prev => 
            prev.map((point, idx) => ({
              ...point,
              active: idx < 5 ? true : point.active
            }))
          );
        }
      },
      {
        delay: 1500,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "app-1",
              type: "app",
              position: { x: 70, y: 25 },
              icon: <Box className="h-5 w-5 text-blue-400" />,
              label: "Web App",
              active: false
            }
          ]);
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-1",
              source: "github-1",
              target: "app-1",
              active: false
            }
          ]);
        }
      },
      {
        delay: 2000,
        action: () => {
          // Activate the app and its connection
          setNodes(prev => 
            prev.map(node => 
              node.id === "app-1" ? { ...node, active: true } : node
            )
          );
          
          setConnections(prev => 
            prev.map(conn => 
              conn.id === "conn-1" ? { ...conn, active: true } : conn
            )
          );
          
          // Activate more scan points
          setScanPoints(prev => 
            prev.map((point, idx) => ({
              ...point,
              active: idx < 12 ? true : point.active
            }))
          );
        }
      },
      {
        delay: 2500,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "db-1",
              type: "database",
              position: { x: 75, y: 75 },
              icon: <Database className="h-5 w-5 text-blue-300" />,
              label: "PostgreSQL",
              active: false
            }
          ]);
        }
      },
      {
        delay: 3000,
        action: () => {
          // Activate the database
          setNodes(prev => 
            prev.map(node => 
              node.id === "db-1" ? { ...node, active: true } : node
            )
          );
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-2",
              source: "app-1",
              target: "db-1",
              active: true
            }
          ]);
          
          // Activate more scan points
          setScanPoints(prev => 
            prev.map((point, idx) => ({
              ...point,
              active: idx < 20 ? true : point.active
            }))
          );
        }
      },
      {
        delay: 3500,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "redis-1",
              type: "database",
              position: { x: 30, y: 70 },
              icon: <Database className="h-5 w-5 text-red-400" />,
              label: "Redis",
              active: false
            },
            {
              id: "volume-1",
              type: "volume",
              position: { x: 20, y: 40 },
              icon: <HardDrive className="h-5 w-5 text-purple-300" />,
              label: "Volume",
              active: false
            }
          ]);
        }
      },
      {
        delay: 4000,
        action: () => {
          // Activate redis and volume
          setNodes(prev => 
            prev.map(node => 
              (node.id === "redis-1" || node.id === "volume-1") ? { ...node, active: true } : node
            )
          );
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-3",
              source: "app-1",
              target: "redis-1",
              active: true
            },
            {
              id: "conn-4",
              source: "db-1",
              target: "volume-1",
              active: true
            }
          ]);
          
          // Activate all remaining scan points
          setScanPoints(prev => 
            prev.map(point => ({
              ...point,
              active: true
            }))
          );
        }
      },
      {
        delay: 4500,
        action: () => {
          setNodes(prev => [
            ...prev,
            {
              id: "container-1",
              type: "container",
              position: { x: 55, y: 40 },
              icon: <Boxes className="h-5 w-5 text-blue-300" />,
              label: "Docker",
              active: false
            }
          ]);
        }
      },
      {
        delay: 5000,
        action: () => {
          // Activate container
          setNodes(prev => 
            prev.map(node => 
              node.id === "container-1" ? { ...node, active: true } : node
            )
          );
          
          setConnections(prev => [
            ...prev,
            {
              id: "conn-5",
              source: "container-1",
              target: "app-1",
              active: true
            }
          ]);
        }
      },
    ];

    // Execute sequence
    sequence.forEach(item => {
      setTimeout(item.action, item.delay);
    });

    // Reset the animation after completion
    const animationDuration = 8000;
    const resetTimer = setTimeout(() => {
      setNodes(initialNodes);
      setConnections([]);
      setScanPoints(prev => prev.map(point => ({ ...point, active: false })));
      
      // Restart the animation
      sequence.forEach(item => {
        setTimeout(item.action, item.delay + animationDuration);
      });
    }, animationDuration);

    return () => clearTimeout(resetTimer);
  }, []);

  return (
    <div className="relative h-80 w-full overflow-hidden rounded-xl bg-black/40 border border-gray-800">
      {/* Background grid points */}
      {scanPoints.map((point, idx) => (
        <motion.div
          key={`point-${idx}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-purple-500/40"
          style={{ 
            left: `${point.x}%`, 
            top: `${point.y}%` 
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: point.active ? [0, 0.7, 0.5] : 0,
            scale: point.active ? [0, 1.2, 1] : 0
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
      {nodes.map(node => (
        <motion.div
          key={node.id}
          className={`absolute flex flex-col items-center justify-center`}
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
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
            node.type === 'app' ? 'bg-blue-500/20 border border-blue-500/30' :
            node.type === 'database' ? 'bg-purple-500/20 border border-purple-500/30' :
            node.type === 'github' ? 'bg-gray-500/20 border border-gray-500/30' :
            node.type === 'volume' ? 'bg-green-500/20 border border-green-500/30' :
            'bg-purple-500/20 border border-purple-500/30'
          }`}>
            {node.icon}
          </div>
          <span className="mt-1 text-xs text-gray-300 whitespace-nowrap">{node.label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default CloudDeploymentAnimation;
