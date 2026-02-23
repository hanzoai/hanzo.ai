
import React from "react";
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

  // We're returning an empty SVG container without rendering any lines
  // This effectively removes all network lines from the canvas demo
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none">
      {/* Connection lines have been removed */}
    </svg>
  );
};

export default ConnectionLines;
