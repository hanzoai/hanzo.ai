
import React from "react";
import { motion } from "framer-motion";
import CloudDeploymentAnimation from "@/components/animations/CloudDeploymentAnimation";

const GlobalNetwork: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
      <div className="lg:col-span-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Global Network</h3>
          <p className="text-gray-300 mb-6">
            Deploy AI workloads across our planetary-scale infrastructure with over 36 global locations, ensuring low-latency access and regional data compliance.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <div className="mr-2 mt-1">•</div>
              <span>Instant global scaling with edge-optimized routing</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1">•</div>
              <span>Automatic load-balancing and failover protection</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1">•</div>
              <span>Zero-config private networking between regions</span>
            </li>
          </ul>
        </motion.div>
      </div>
      
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CloudDeploymentAnimation />
        </motion.div>
      </div>
    </div>
  );
};

export default GlobalNetwork;
