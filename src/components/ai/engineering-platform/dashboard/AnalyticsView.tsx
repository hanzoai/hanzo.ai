
import React from "react";
import { motion } from "framer-motion";
import { BarChart, Terminal } from "lucide-react";

const AnalyticsView = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[var(--white)]">AI Analytics</h3>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-purple-600/40 rounded-md text-xs text-purple-200 flex items-center">
            <BarChart className="w-3 h-3 mr-1" />
            Reports
          </button>
          <button className="px-2 py-1 bg-gray-800 rounded-md text-xs text-neutral-400 flex items-center">
            <Terminal className="w-3 h-3 mr-1" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-neutral-400 mb-1">Model Usage</div>
          <div className="relative h-32 mt-2">
            <div className="absolute inset-0">
              <div className="h-full w-full flex">
                <motion.div 
                  className="h-full bg-purple-600/70 rounded-l"
                  initial={{ width: 0 }}
                  animate={{ width: "42%" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                />
                <motion.div 
                  className="h-full bg-blue-500/70"
                  initial={{ width: 0 }}
                  animate={{ width: "28%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.div 
                  className="h-full bg-indigo-500/70"
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                <motion.div 
                  className="h-full bg-pink-500/70 rounded-r"
                  initial={{ width: 0 }}
                  animate={{ width: "15%" }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-600 mr-2"></div>
              <span className="text-xs text-neutral-300">GPT-4o (42%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-xs text-neutral-300">Claude 3 (28%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
              <span className="text-xs text-neutral-300">Llama 3 (15%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
              <span className="text-xs text-neutral-300">Others (15%)</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-neutral-400 mb-1">Cost Analysis</div>
          <div className="h-32 relative">
            <div className="absolute bottom-0 w-full flex items-end space-x-1">
              {[35, 42, 38, 52, 45, 55, 47, 62, 48, 60, 53, 58].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-purple-600/90 to-purple-400/50 rounded-t w-full"
                  style={{ height: `${value}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-neutral-500">
            <span>Jan</span>
            <span>Jun</span>
            <span>Dec</span>
          </div>
          <div className="mt-1 text-xs text-neutral-300">
            $1,245 spent this month - <span className="text-purple-400">14% under budget</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
        <div className="text-xs text-neutral-400 mb-2">Performance Metrics</div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-neutral-300">Response Quality</span>
              <span className="text-neutral-300">89%</span>
            </div>
            <div className="w-full bg-gray-700/40 rounded-full h-1.5">
              <motion.div 
                className="bg-green-500 h-1.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "89%" }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-neutral-300">User Satisfaction</span>
              <span className="text-neutral-300">94%</span>
            </div>
            <div className="w-full bg-gray-700/40 rounded-full h-1.5">
              <motion.div 
                className="bg-green-500 h-1.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "94%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-neutral-300">System Reliability</span>
              <span className="text-neutral-300">99.8%</span>
            </div>
            <div className="w-full bg-gray-700/40 rounded-full h-1.5">
              <motion.div 
                className="bg-green-500 h-1.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: "99.8%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;
