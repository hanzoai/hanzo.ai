import React from "react";
import { motion } from "framer-motion";
import { NodeType, ConnectionType } from "./types";

interface ConnectionLinesProps {
  connections: ConnectionType[];
  nodes: NodeType[];
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ connections, nodes }) => {
  // We're keeping the SVG container but not rendering any lines
  return (
    <svg className="absolute inset-0 h-full w-full">
      {/* No lines will be rendered */}
    </svg>
  );
};

export default ConnectionLines;
