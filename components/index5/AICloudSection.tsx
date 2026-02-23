'use client'


import React from "react";
import { motion } from "framer-motion";
import { Cloud, Server, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@hanzo/ui";
import { useRouter } from "next/navigation";
import ChromeText from "@/components/ui/chrome-text";

const AICloudSection: React.FC = () => {
  const router = useRouter();
  
  const features = [
    { icon: <Cloud className="h-6 w-6 text-[#ff6b6b]" />, title: "Global Infrastructure", description: "Deploy AI models across 35+ regions worldwide" },
    { icon: <Server className="h-6 w-6 text-[#ff6b6b]" />, title: "Compute Scaling", description: "Automatically scale resources based on demand" },
    { icon: <Shield className="h-6 w-6 text-[#ff6b6b]" />, title: "Enterprise Security", description: "Enterprise-grade security with GDPR controls" },
    { icon: <Zap className="h-6 w-6 text-[#ff6b6b]" />, title: "Low Latency", description: "Sub-100ms response times for AI inference" },
    { icon: <Globe className="h-6 w-6 text-[#ff6b6b]" />, title: "Global Edge Network", description: "Serve models from the edge for faster responses" },
    { icon: <Server className="h-6 w-6 text-[#ff6b6b]" />, title: "Model Optimization", description: "Automatic optimization for faster performance" }
  ];
  
  return (
    <section className="py-24 px-4 relative" id="ai-cloud">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#ff6b6b]/20 border border-[#ff6b6b]/30 text-[#ff6b6b] text-sm font-medium">
              Enterprise Scale
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ChromeText 
              as="h2" 
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              AI Cloud Platform
            </ChromeText>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Deploy, manage, and scale AI models with enterprise-grade reliability and security
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#ff6b6b]/20 to-[#ff6b6b]/5 p-6 rounded-xl border border-[#ff6b6b]/20 hover:border-[#ff6b6b]/40 transition-all duration-300"
            >
              <div className="bg-[#ff6b6b]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--white)]">{feature.title}</h3>
              <p className="text-neutral-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <Button 
            className="text-lg px-8 py-6 bg-[#ffffff] hover:bg-[#cccccc]"
            onClick={() => router.push('/cloud')}
          >
            Explore AI Cloud <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AICloudSection;
