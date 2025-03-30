
import React from "react";
import { motion } from "framer-motion";
import { Activity, Terminal, ChartLine } from "lucide-react";

const ObservabilityView = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-[var(--white)]">AI Observability Dashboard</h3>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-purple-600/40 rounded-md text-xs text-purple-200 flex items-center">
            <Activity className="w-3 h-3 mr-1" />
            Real-time
          </button>
          <button className="px-2 py-1 bg-gray-800 rounded-md text-xs text-neutral-400 flex items-center">
            <Terminal className="w-3 h-3 mr-1" />
            Logs
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-neutral-400 mb-1">Requests</div>
          <div className="text-lg font-medium text-[var(--white)]">3,452</div>
          <div className="mt-1 text-xs text-green-400 flex items-center">
            <ChartLine className="w-3 h-3 mr-1" />
            +18% from yesterday
          </div>
        </div>
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-neutral-400 mb-1">Avg. Latency</div>
          <div className="text-lg font-medium text-[var(--white)]">94ms</div>
          <div className="mt-1 text-xs text-green-400 flex items-center">
            <ChartLine className="w-3 h-3 mr-1" />
            -12ms from yesterday
          </div>
        </div>
        <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
          <div className="text-xs text-neutral-400 mb-1">Error Rate</div>
          <div className="text-lg font-medium text-[var(--white)]">0.4%</div>
          <div className="mt-1 text-xs text-green-400 flex items-center">
            <ChartLine className="w-3 h-3 mr-1" />
            -0.2% from yesterday
          </div>
        </div>
      </div>

      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3 mb-4">
        <div className="text-xs text-neutral-400 mb-2">Response Time Trend</div>
        <div className="h-24 flex items-end space-x-1">
          {[35, 42, 38, 30, 45, 55, 47, 40, 48, 60, 53, 41, 48, 50, 58, 45, 43, 49, 55, 62].map((value, index) => (
            <motion.div
              key={index}
              className="bg-purple-500/70 rounded-t w-full"
              style={{ height: `${value}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1 text-xs text-neutral-500">
          <span>00:00</span>
          <span>12:00</span>
          <span>23:59</span>
        </div>
      </div>

      <div className="bg-gray-800/40 border border-gray-700/40 rounded-lg p-3">
        <div className="text-xs text-neutral-400 mb-2">Recent Traces</div>
        <div className="space-y-2">
          {[
            { id: "t1", model: "GPT-4o", time: "2m ago", status: "success", duration: "92ms" },
            { id: "t2", model: "Llama 3", time: "5m ago", status: "success", duration: "84ms" },
            { id: "t3", model: "Claude 3", time: "12m ago", status: "error", duration: "176ms" },
            { id: "t4", model: "Mixtral", time: "18m ago", status: "success", duration: "78ms" },
          ].map((trace) => (
            <div key={trace.id} className="flex items-center justify-between text-xs p-1.5 rounded hover:bg-gray-700/30">
              <div className="flex items-center">
                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${trace.status === "success" ? "bg-green-500" : "bg-red-500"}`}></div>
                <span className="text-neutral-300">{trace.model}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-neutral-400">{trace.time}</span>
                <span className={`${trace.status === "success" ? "text-blue-400" : "text-red-400"}`}>{trace.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ObservabilityView;
