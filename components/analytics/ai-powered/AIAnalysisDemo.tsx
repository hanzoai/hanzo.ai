'use client'


import React from "react";
import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

const AIAnalysisDemo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-gradient-to-r from-gray-900 to-gray-900/50 rounded-xl p-6 border border-gray-800 shadow-xl overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <LineChart className="h-6 w-6 text-[#ffffff] mr-3" />
          <h3 className="text-2xl font-bold">AI Analysis in Action</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-[var(--black)]/50 rounded-lg p-5 border border-gray-800">
              <h4 className="text-lg font-medium mb-4">Traffic Anomaly Detection</h4>
              <div className="h-60 relative">
                {/* Base line chart */}
                <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <motion.path
                    d="M0,80 C25,70 50,65 75,60 C100,55 125,50 150,55 C175,60 200,80 225,50 C250,20 275,35 300,30"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                  
                  {/* Anomaly area */}
                  <motion.path
                    d="M200,80 C206,65 212,40 218,20 C224,30 230,45 236,50"
                    fill="none"
                    stroke="#FF5733"
                    strokeWidth="3"
                    strokeDasharray="2,2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                  />
                  
                  {/* Anomaly circle */}
                  <motion.circle
                    cx="218"
                    cy="20"
                    r="5"
                    fill="#FF5733"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 2 }}
                  />
                </svg>
                
                {/* Anomaly detection popup */}
                <motion.div
                  className="absolute top-4 right-8 bg-red-900/80 text-[var(--white)] text-xs rounded px-3 py-2 border border-red-700"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 2.2 }}
                >
                  <div className="font-bold mb-1">Anomaly Detected</div>
                  <div>Unusual traffic spike</div>
                  <div>Confidence: 98.7%</div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-[var(--black)]/50 rounded-lg p-5 border border-gray-800">
              <h4 className="text-lg font-medium mb-3">AI Insights</h4>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 2.4 }}
                className="space-y-3"
              >
                <div className="text-sm">
                  <div className="font-medium text-red-400">Traffic Anomaly</div>
                  <div className="text-neutral-400">Unusual spike detected at 14:32 UTC</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-green-400">Conversion Opportunity</div>
                  <div className="text-neutral-400">Checkout abandonment 23% higher on mobile</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-[#ff6b6b]">Performance Alert</div>
                  <div className="text-neutral-400">API latency increased by 150ms</div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.6 }}
              className="bg-[#ffffff]/10 rounded-lg p-5 border border-[#ffffff]/20"
            >
              <h4 className="text-lg font-medium mb-2">AI Recommendation</h4>
              <p className="text-sm text-neutral-300">
                Based on the traffic pattern analysis, we recommend scaling your infrastructure in the US-West region for the next 3 hours.
              </p>
              <button className="mt-3 text-sm bg-[#ffffff] hover:bg-[#cccccc] text-[var(--white)] px-3 py-1 rounded">
                Apply Recommendation
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AIAnalysisDemo;
