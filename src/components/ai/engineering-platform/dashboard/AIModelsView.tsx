
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, BrainCog, Activity, ServerCog, Zap, Terminal } from "lucide-react";
import { aiModels } from "../data/aiModels";

const AIModelsView = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-white">AI Model Registry</h3>
        <div className="flex space-x-2">
          <button className="px-2 py-1 bg-purple-600/40 rounded-md text-xs text-purple-200 flex items-center">
            <BrainCog className="w-3 h-3 mr-1" />
            Deploy Model
          </button>
          <button className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400 flex items-center">
            <Terminal className="w-3 h-3 mr-1" />
            Import
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {aiModels.map((model) => (
          <motion.div
            key={model.id}
            className={`p-3 rounded-lg border ${selectedModel === model.id ? "bg-purple-900/20 border-purple-600/40" : "bg-gray-800/40 border-gray-700/40"} hover:bg-gray-800/60 transition-colors cursor-pointer`}
            onClick={() => setSelectedModel(model.id)}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center">
                  <BrainCircuit className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="font-medium text-white text-sm">{model.name}</span>
                  <span className="ml-2 px-1.5 py-0.5 bg-gray-700/60 rounded text-xs text-gray-300">{model.type}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">Provider: {model.provider}</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-xs text-gray-400">Accuracy</div>
                  <div className="text-sm font-medium text-green-400">{model.accuracy}%</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400">Latency</div>
                  <div className="text-sm font-medium text-blue-400">{model.latency}ms</div>
                </div>
              </div>
            </div>

            {selectedModel === model.id && (
              <motion.div 
                className="mt-3 pt-3 border-t border-gray-700/40 grid grid-cols-3 gap-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <button className="px-2 py-1.5 bg-gray-700/40 rounded text-xs text-gray-300 flex items-center justify-center">
                  <Activity className="w-3 h-3 mr-1.5" />
                  Benchmark
                </button>
                <button className="px-2 py-1.5 bg-gray-700/40 rounded text-xs text-gray-300 flex items-center justify-center">
                  <ServerCog className="w-3 h-3 mr-1.5" />
                  Fine-tune
                </button>
                <button className="px-2 py-1.5 bg-purple-600/30 rounded text-xs text-purple-200 flex items-center justify-center">
                  <Zap className="w-3 h-3 mr-1.5" />
                  Deploy
                </button>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AIModelsView;
