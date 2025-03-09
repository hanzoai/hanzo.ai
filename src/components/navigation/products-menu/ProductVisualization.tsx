
import { motion } from "framer-motion";
import { ElementType } from "react";
import { ProductItem } from "./types";

interface ProductVisualizationProps {
  items: ProductItem[];
}

const ProductVisualization = ({ items }: ProductVisualizationProps) => {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-md bg-gradient-to-br from-black to-gray-900 mb-6 hidden lg:block">
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(128, 90, 213, 0.08) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="grid grid-cols-3 gap-3 w-4/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {items.slice(0, 6).map((item, i) => {
            return (
              <motion.div 
                key={i}
                className="flex items-center justify-center h-14 w-full rounded-md border border-gray-700 bg-black/80"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1 * i,
                }}
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "rgba(168, 85, 247, 0.5)",
                  backgroundColor: "rgba(20, 20, 20, 0.9)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="text-gray-400"
                  whileHover={{ color: "#a855f7" }}
                >
                  <item.icon className="h-5 w-5" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Connection lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => {
            const startX = 33 + (i * 33);
            
            return (
              <motion.div 
                key={`vline-${i}`}
                className="absolute w-px bg-gray-700/50 top-1/4 h-1/2"
                style={{ left: `${startX}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
              />
            );
          })}
          
          {[...Array(1)].map((_, i) => {
            const startY = 50;
            
            return (
              <motion.div 
                key={`hline-${i}`}
                className="absolute h-px bg-gray-700/50 left-1/4 w-1/2"
                style={{ top: `${startY}%` }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            );
          })}
          
          {/* Active data signals */}
          {[...Array(3)].map((_, i) => {
            return (
              <motion.div 
                key={`signal-${i}`}
                className="absolute h-1.5 w-1.5 rounded-full bg-purple-400"
                style={{ 
                  left: `${33 + ((i % 3) * 33)}%`,
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{
                  y: [0, -30, 30, 0],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductVisualization;
