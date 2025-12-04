
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MachinesHero = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1 inline-block mb-4">
            <span className="text-green-400 text-sm font-medium">High-Performance Computing</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Hanzo Machines
          </h1>
          <p className="text-xl text-neutral-300 mb-8">
            Dedicated AI compute infrastructure optimized for machine learning and high-performance workloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-[var(--white)] px-8 py-6 text-lg">
              <a href="https://hanzo.computer" target="_blank" rel="noopener noreferrer">Get Started</a>
            </Button>
            <Button asChild variant="outline" className="border-green-500/30 text-[var(--white)] hover:bg-green-900/20 px-8 py-6 text-lg">
              <a href="https://hanzo.computer" target="_blank" rel="noopener noreferrer">View Documentation</a>
            </Button>
          </div>
        </div>
        
        {/* Hero Hardware Visualization */}
        <div className="relative bg-green-900/20 border border-green-500/20 rounded-xl p-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--black)]/50 border border-green-500/20 rounded-lg p-4">
              <h3 className="font-medium text-green-400 mb-2">NVIDIA H100</h3>
              <p className="text-sm text-neutral-300 mb-3">Dedicated GPU instances for AI/ML training</p>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">VRAM</span>
                  <span className="font-medium text-green-400">80GB HBM3</span>
                </div>
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">Cores</span>
                  <span className="font-medium text-green-400">16,896 CUDA</span>
                </div>
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">Tensor Cores</span>
                  <span className="font-medium text-green-400">528 TCs</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--black)]/50 border border-green-500/20 rounded-lg p-4">
              <h3 className="font-medium text-green-400 mb-2">AMD EPYC 7763</h3>
              <p className="text-sm text-neutral-300 mb-3">High-core count CPU instances</p>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">Cores</span>
                  <span className="font-medium text-green-400">64 Cores</span>
                </div>
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">Threads</span>
                  <span className="font-medium text-green-400">128 Threads</span>
                </div>
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">Memory</span>
                  <span className="font-medium text-green-400">Up to 2TB</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--black)]/50 border border-green-500/20 rounded-lg p-4">
              <h3 className="font-medium text-green-400 mb-2">Storage Options</h3>
              <p className="text-sm text-neutral-300 mb-3">Ultra-fast NVMe and persistent storage</p>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">Local NVMe</span>
                  <span className="font-medium text-green-400">Up to 8TB</span>
                </div>
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">Network Storage</span>
                  <span className="font-medium text-green-400">Unlimited</span>
                </div>
                <div className="bg-gray-800 rounded-md p-2 flex justify-between items-center">
                  <span className="text-sm">I/O Performance</span>
                  <span className="font-medium text-green-400">7GB/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinesHero;
