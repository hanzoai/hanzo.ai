
import React from "react";
import { motion } from "framer-motion";
import DXPlatformCard from "./DXPlatformCard";
import { dxPlatformData } from "./dxPlatformData";

interface DXPlatformGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const DXPlatformGrid: React.FC<DXPlatformGridProps> = ({ isHovered, setIsHovered }) => {
  return (
    <div className="space-y-8">
      {/* Platform Visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative h-64 w-full bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-purple-900/10"></div>
          
          {/* Central platform hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center">
              <span className="text-lg font-bold text-white">Hanzo DX</span>
            </div>
            
            {/* Connection lines to product categories */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {dxPlatformData.slice(0, 8).map((platform, index) => {
                const angle = (index / 8) * Math.PI * 2;
                const distance = 130;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                return (
                  <React.Fragment key={platform.id}>
                    <div 
                      className="absolute w-0.5 bg-gradient-to-b from-indigo-500/10 to-purple-500/30"
                      style={{
                        height: distance,
                        transform: `rotate(${angle + Math.PI/2}rad)`,
                        transformOrigin: 'top',
                        top: 0,
                        left: '50%'
                      }}
                    />
                    <div 
                      className="absolute p-2 rounded-lg bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 flex items-center justify-center"
                      style={{
                        width: '80px',
                        height: '40px',
                        transform: `translate(${x}px, ${y}px)`,
                        top: '50%',
                        left: '50%'
                      }}
                      onMouseEnter={() => setIsHovered(platform.id)}
                      onMouseLeave={() => setIsHovered(null)}
                    >
                      <span className="text-xs font-medium text-white whitespace-nowrap">{platform.title}</span>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          
          {/* Background grid pattern */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 p-4 opacity-20">
            {Array(12 * 6).fill(0).map((_, i) => (
              <div key={i} className="border border-indigo-500/10 rounded-sm"></div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {dxPlatformData.map((platform) => (
          <DXPlatformCard
            key={platform.id}
            id={platform.id}
            title={platform.title}
            description={platform.description}
            features={platform.features}
            icon={platform.icon}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            color={platform.color}
          />
        ))}
      </div>
    </div>
  );
};

export default DXPlatformGrid;
