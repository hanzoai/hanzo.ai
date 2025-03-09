
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface AITunnelContentProps {
  title: string;
  subtitle: string;
  showButtons: boolean;
}

const AITunnelContent: React.FC<AITunnelContentProps> = ({
  title,
  subtitle,
  showButtons
}) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        
        {/* Glowing underline */}
        <motion.div 
          className="h-[2px] bg-gradient-to-r from-purple-500/0 via-purple-500 to-purple-500/0 mx-auto"
          style={{ width: '60%' }}
          animate={{
            opacity: [0.5, 1, 0.5],
            width: ['40%', '60%', '40%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl"
      >
        {subtitle}
      </motion.p>

      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg"
            className="text-lg px-8 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 border-none"
          >
            Start Building
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 text-white border-white/20 bg-white/5 hover:bg-white/10"
          >
            <span className="mr-2">Explore</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default AITunnelContent;
