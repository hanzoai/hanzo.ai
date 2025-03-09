
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
        
        // Determine colors based on node types or status - more subtle
        let strokeColor = "rgba(140, 140, 160, 0.15)"; // Reduced opacity
        
        // Adjust color based on connection status
        if (connection.active) {
          const sourceType = sourceNode.type;
          const targetType = targetNode.type;
          
          // Use yellow for network connections with reduced opacity
          if (sourceType === 'network' || targetType === 'network') {
            // Use brighter yellow for public network, softer yellow for private
            if (sourceNode.id === 'network-public' || targetNode.id === 'network-public') {
              strokeColor = "rgba(250, 204, 21, 0.25)"; // Reduced opacity
            } else {
              strokeColor = "rgba(234, 179, 8, 0.2)"; // Reduced opacity
            }
          } else if (sourceType === 'database' || targetType === 'database') {
            strokeColor = "rgba(100, 180, 160, 0.2)"; // Reduced opacity
          } else if (sourceType === 'github') {
            strokeColor = "rgba(150, 150, 150, 0.2)"; // Reduced opacity
          }
        }

        return (
          <motion.path
            key={`${connection.source}-${connection.target}`}
            d={`M ${x1} ${y1} L ${x2} ${y2}`}
            stroke={strokeColor}
            strokeWidth="1.5" // Slightly thinner
            strokeDasharray="4 3" // Shorter dashes
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: connection.active ? 1 : 0,
              opacity: connection.active ? 1 : 0
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }} // Slower animation
            style={{ willChange: "stroke-dashoffset" }} // Performance optimization
          />
        );
      })}
    </svg>
  );
};

export default ConnectionLines;
