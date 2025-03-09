
import React from "react";
import { motion } from "framer-motion";
import { NodeType, ConnectionType } from "./types";

interface ConnectionLinesProps {
  connections: ConnectionType[];
  nodes: NodeType[];
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ connections, nodes }) => {
  // Helper to find node by id
  const findNodeById = (id: string) => {
    return nodes.find(node => node.id === id);
  };

  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none">
      {connections.map(connection => {
        const sourceNode = findNodeById(connection.source);
        const targetNode = findNodeById(connection.target);
        
        if (!sourceNode || !targetNode) return null;
        
        // Calculate connection line coordinates
        const x1 = `${sourceNode.position.x}%`;
        const y1 = `${sourceNode.position.y}%`;
        const x2 = `${targetNode.position.x}%`;
        const y2 = `${targetNode.position.y}%`;
        
        // Determine colors based on node types or status
        let strokeColor = "rgba(140, 140, 160, 0.3)"; // Default to neutral gray
        
        // Adjust color based on connection status
        if (connection.active) {
          const sourceType = sourceNode.type;
          const targetType = targetNode.type;
          
          // Use yellow for network connections
          if (sourceType === 'network' || targetType === 'network') {
            // Use brighter yellow for public network, softer yellow for private
            if (sourceNode.id === 'network-public' || targetNode.id === 'network-public') {
              strokeColor = "rgba(250, 204, 21, 0.5)"; // Bright yellow for public network
            } else {
              strokeColor = "rgba(234, 179, 8, 0.4)"; // Softer yellow for private network
            }
          } else if (sourceType === 'database' || targetType === 'database') {
            strokeColor = "rgba(100, 180, 160, 0.4)"; // Teal for database connections
          } else if (sourceType === 'github') {
            strokeColor = "rgba(150, 150, 150, 0.4)"; // Gray for github connections
          }
        }

        return (
          <motion.path
            key={`${connection.source}-${connection.target}`}
            d={`M ${x1} ${y1} L ${x2} ${y2}`}
            stroke={strokeColor}
            strokeWidth="2"
            strokeDasharray="4 2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: connection.active ? 1 : 0,
              opacity: connection.active ? 1 : 0
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        );
      })}
    </svg>
  );
};

export default ConnectionLines;
