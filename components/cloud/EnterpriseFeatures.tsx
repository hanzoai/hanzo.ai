'use client'


import React from "react";
import { motion } from "framer-motion";

const EnterpriseFeatures = () => {
  return (
    <section id="infra-log" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:30px_30px]" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="rounded-lg bg-gradient-to-br from-gray-900 to-background border border-gray-800 overflow-hidden shadow-2xl">
              <div className="bg-gray-800 py-2 px-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/10"></div>
                </div>
                <div className="text-muted-foreground text-sm">infrastructure.log</div>
              </div>
              <div className="p-4 font-mono text-sm text-foreground/80 max-h-[400px] overflow-y-auto">
                <div className="text-muted-foreground"># Hanzo Infrastructure Log</div>
                <div className="text-foreground/70">[INFO] Sydney region: 12 new CPU machines online</div>
                <div className="text-foreground">[SCALING] Tokyo region: GPU cluster expanding</div>
                <div className="text-foreground/70">[NETWORK] Frankfurt: New 100Gbps uplink active</div>
                <div className="text-foreground/60">[UPDATE] Global: System update scheduled for May 15</div>
                <div className="text-foreground/70">[INFO] Amsterdam: Storage cluster expansion complete</div>
                <div className="text-foreground">[SCALING] São Paulo: 8 new CPU machines online</div>
                <div className="text-foreground/70">[NETWORK] New York: DDoS protection enhanced</div>
                <div className="text-foreground/70">[INFO] Singapore: New edge region now available</div>
                <div className="text-foreground/60">[UPDATE] Global: Network routes optimized</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Use the Tech You Love
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Build with your favorite framework. No Dockerfile? No problem: our CLI generates containers for most popular frameworks, including Rails, Phoenix, Django, Node, Laravel, and .NET.
            </p>
            <motion.a
              href="#learn-more"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-white to-white/10 text-[var(--white)] font-medium hover:shadow-lg hover:shadow-[#ffffff]/20 transition-all"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
