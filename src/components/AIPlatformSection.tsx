
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { MasonryGrid, MasonryItem } from "@/components/ui/masonry-grid";
import { ArchitecturalBox, GridLines } from "@/components/ui/architectural-elements";
import AITunnelParticles from "./animations/AITunnelParticles";
import { aiPlatformFeatures } from "./data/ai-platform-data";
import { getColorClasses } from "./utils/tailwind-helpers";

const AIPlatformSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 opacity-40">
        <AITunnelParticles />
      </div>
      
      <GridLines spacing={60} opacity={0.2} color="rgba(147, 51, 234, 0.15)" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            Unified AI Development
          </span>
          <ChromeText as="h2" className="text-4xl md:text-5xl font-bold mb-6">
            AI Engineering Platform
          </ChromeText>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Build powerful AI experiences with our comprehensive platform designed for developers,
            researchers, and enterprises to create, deploy, and scale AI applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MasonryGrid columns={4} gap={20} className="mb-12">
            {aiPlatformFeatures.map((feature, index) => {
              const isFeatureHovered = hovered === index;
              const gradientClasses = getColorClasses(feature.color, 'gradient', isFeatureHovered);
              const borderClasses = getColorClasses(feature.color, 'border', isFeatureHovered);
              const textColorClass = getColorClasses(feature.color, 'text', isFeatureHovered);
              
              return (
                <MasonryItem key={feature.id}>
                  <motion.div
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArchitecturalBox
                      className={`h-full bg-gradient-to-br ${gradientClasses} ${borderClasses} backdrop-blur-sm border p-6 rounded-lg transition-colors duration-300`}
                      showCorners={true}
                      cornerSize={16}
                      cornerColor={isFeatureHovered ? `rgba(147, 51, 234, 0.4)` : "rgba(147, 51, 234, 0.2)"}
                    >
                      <div className="mb-4">
                        {React.createElement(feature.icon, { 
                          size: 32, 
                          className: textColorClass
                        })}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </ArchitecturalBox>
                  </motion.div>
                </MasonryItem>
              );
            })}
          </MasonryGrid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600"
          >
            <a href="/ai" className="flex items-center">
              Explore the Platform <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIPlatformSection;
