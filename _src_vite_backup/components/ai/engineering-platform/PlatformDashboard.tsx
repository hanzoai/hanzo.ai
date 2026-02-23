
import React, { useState } from "react";
import { motion } from "framer-motion";
import AIModelsView from "./dashboard/AIModelsView";
import ObservabilityView from "./dashboard/ObservabilityView";
import AnalyticsView from "./dashboard/AnalyticsView";

const PlatformDashboard = () => {
  const [activeSection, setActiveSection] = useState("models");

  return (
    <div className="relative w-full bg-gray-900/70 rounded-xl overflow-hidden border border-gray-800 shadow-xl">
      {/* Dashboard header */}
      <div className="bg-gray-800/90 p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-neutral-400">Hanzo AI Engineering Platform</div>
        </div>
        <div className="flex space-x-3">
          <button 
            className={`px-3 py-1 rounded-md text-xs ${activeSection === "models" ? "bg-[#fd4444]/40 text-[#ff6b6b]" : "bg-gray-800 text-neutral-400"}`} 
            onClick={() => setActiveSection("models")}
          >
            AI Models
          </button>
          <button 
            className={`px-3 py-1 rounded-md text-xs ${activeSection === "observability" ? "bg-[#fd4444]/40 text-[#ff6b6b]" : "bg-gray-800 text-neutral-400"}`} 
            onClick={() => setActiveSection("observability")}
          >
            Observability
          </button>
          <button 
            className={`px-3 py-1 rounded-md text-xs ${activeSection === "analytics" ? "bg-[#fd4444]/40 text-[#ff6b6b]" : "bg-gray-800 text-neutral-400"}`} 
            onClick={() => setActiveSection("analytics")}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 h-[340px] overflow-auto">
        {activeSection === "models" && <AIModelsView />}
        {activeSection === "observability" && <ObservabilityView />}
        {activeSection === "analytics" && <AnalyticsView />}
      </div>
    </div>
  );
};

export default PlatformDashboard;
