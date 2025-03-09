
import React from "react";
import { motion } from "framer-motion";
import { NodeType, ConnectionType } from "./types";

interface ConnectionLinesProps {
  connections: ConnectionType[];
  nodes: NodeType[];
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ connections, nodes }) => {
  // SVG container without rendering connection lines
  return (
    <svg className="absolute inset-0 h-full w-full">
      {/* Connection lines will not be rendered */}
    </svg>
  );
};

export default ConnectionLines;
