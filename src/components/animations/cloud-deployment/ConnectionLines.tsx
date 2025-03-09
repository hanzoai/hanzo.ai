
import React from "react";
import { motion } from "framer-motion";
import { NodeType, ConnectionType } from "./types";

interface ConnectionLinesProps {
  connections: ConnectionType[];
  nodes: NodeType[];
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ connections, nodes }) => {
  return (
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
  );
};

export default ConnectionLines;
