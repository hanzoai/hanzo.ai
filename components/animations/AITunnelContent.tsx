'use client'


import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
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
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--white)] mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Glowing underline */}
        <motion.div 
          className="h-[2px] bg-gradient-to-r from-[#ffffff]/0 via-[#ffffff] to-[#ffffff]/0 mx-auto"
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
        className="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl"
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
            radius="full"
            className="text-lg px-8 bg-gradient-to-r from-[#ffffff] to-[#ff6b6b] hover:from-[#cccccc] hover:to-[#ffffff] border-none"
          >
            Start Building
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            radius="full"
            className="text-lg px-8 text-[var(--white)] border-white/20 bg-[var(--white)]/5 hover:bg-[var(--white)]/10"
          >
            <span className="mr-2">Read Docs</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default AITunnelContent;
