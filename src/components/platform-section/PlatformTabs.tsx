
import React from "react";
import { motion } from "framer-motion";

interface PlatformTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PlatformTabs: React.FC<PlatformTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex space-x-2 border-b border-gray-800 pb-2 overflow-x-auto">
      <button
        onClick={() => setActiveTab("platform")}
        className={`px-4 py-2 rounded-t-lg whitespace-nowrap ${
          activeTab === "platform"
            ? "text-white border-b-2 border-purple-500"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Platform Vision
      </button>
      <button
        onClick={() => setActiveTab("capabilities")}
        className={`px-4 py-2 rounded-t-lg whitespace-nowrap ${
          activeTab === "capabilities"
            ? "text-white border-b-2 border-purple-500"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Core Capabilities
      </button>
      <button
        onClick={() => setActiveTab("solutions")}
        className={`px-4 py-2 rounded-t-lg whitespace-nowrap ${
          activeTab === "solutions"
            ? "text-white border-b-2 border-purple-500"
            : "text-gray-400 hover:text-white"
        }`}
      >
        Enterprise Solutions
      </button>
    </div>
  );
};

export default PlatformTabs;
