
import React from "react";
import { motion } from "framer-motion";
import DXPlatformCard from "./DXPlatformCard";
import { dxPlatformData } from "./dxPlatformData";
import { Link } from "react-router-dom";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";

interface DXPlatformGridProps {
  isHovered: string | null;
  setIsHovered: (id: string | null) => void;
}

const DXPlatformGrid: React.FC<DXPlatformGridProps> = ({ isHovered, setIsHovered }) => {
  return (
    <div className="space-y-8">
      {/* Enhanced Platform Visual with Grid Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="relative h-80 w-full bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-purple-900/10"></div>
          
          {/* Background grid pattern with enhanced visibility */}
          <div className="absolute inset-0 grid grid-cols-16 grid-rows-8 gap-4 p-4 opacity-30">
            {Array(16 * 8).fill(0).map((_, i) => (
              <div key={i} className="border border-indigo-500/20 rounded-sm"></div>
            ))}
          </div>
          
          {/* Central platform hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/40 flex items-center justify-center">
              <span className="text-xl font-bold text-white">Hanzo DX</span>
            </div>
            
            {/* Connection lines to product categories */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
              {dxPlatformData.slice(0, 12).map((platform, index) => {
                const angle = (index / 12) * Math.PI * 2;
                const distance = 180;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                return (
                  <React.Fragment key={platform.id}>
                    <div 
                      className="absolute w-0.5 bg-gradient-to-b from-indigo-500/20 to-purple-500/40"
                      style={{
                        height: distance,
                        transform: `rotate(${angle + Math.PI/2}rad)`,
                        transformOrigin: 'top',
                        top: 0,
                        left: '50%'
                      }}
                    />
                    <div 
                      className="absolute p-2 rounded-lg bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/30 flex items-center justify-center"
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
        </div>
      </motion.div>
      
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {/* Display all platform cards */}
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

        {/* Updated "Explore More" card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          onMouseEnter={() => setIsHovered("more")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Link to="/platform" className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 group hover:bg-gray-900/30 transition-colors h-full flex flex-col">
            <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 bg-indigo-900/30 group-hover:bg-indigo-600/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
            <ChromeText as="h3" className="text-xl font-bold mb-2">
              Explore More
            </ChromeText>
            <p className="text-gray-300 mb-4 text-sm">
              Discover our complete DX Platform and developer tools ecosystem
            </p>
            <div className="mt-auto">
              <Button 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white w-full"
                radius="full"
              >
                View All Tools
              </Button>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Get Started Free Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 p-8 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-xl border border-indigo-500/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <ChromeText as="h2" className="text-2xl md:text-3xl font-bold mb-4">
            Start Building Today, Risk-Free
          </ChromeText>
          <p className="text-lg text-gray-300 mb-6">
            Sign up now and receive $5 in free credits. Earn an additional $5 credit for every friend who joins through your referral link.
          </p>
          <Button 
            asChild
            size="lg"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium shadow-lg transition-all duration-300"
            radius="full"
          >
            <Link to="/signup">Get Started Free</Link>
          </Button>
          <p className="mt-4 text-sm text-gray-400">
            No credit card required. <Link to="/referrals" className="text-indigo-400 hover:text-indigo-300 underline">Learn more</Link> about our referral program.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DXPlatformGrid;
