'use client'


import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Users, BookOpen, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/zen/SectionHeader";

const UnifiedAICloud: React.FC = () => {
  return (
    <div className="mb-24">
      <SectionHeader 
        title="Unified AI Cloud" 
        description="One platform to build, deploy, and scale your AI applications" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-white/20 to-white/5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
        >
          <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Enterprise Infrastructure</h3>
          <p className="text-neutral-300">
            Scalable, secure infrastructure designed for enterprise AI workloads, with global availability, 
            compliance-ready security, and managed services.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-br from-white/15 to-white/5 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
        >
          <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Developer Experience</h3>
          <p className="text-neutral-300">
            Comprehensive tooling and frameworks that accelerate development, simplify deployments, and reduce 
            time-to-market for AI-powered applications.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-br from-white/20 to-white/10 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
        >
          <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-white/70" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-[var(--white)]">Expert Services</h3>
          <p className="text-neutral-300">
            Access to industry and technical experts who help you strategize, implement, and optimize your AI 
            initiatives for maximum business impact.
          </p>
        </motion.div>
      </div>
      
      <div className="text-center">
        <Button asChild size="lg" className="bg-white hover:bg-[#cccccc]">
          <Link href="/cloud">
            Explore Our AI Cloud Platform <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default UnifiedAICloud;
