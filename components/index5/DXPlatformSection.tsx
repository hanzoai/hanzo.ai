'use client'


import React from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Cpu, Rocket, Server, Zap, ArrowRight } from "lucide-react";
import { Button } from "@hanzo/ui";
import { useRouter } from "next/navigation";
import ChromeText from "@/components/ui/chrome-text";

const DXPlatformSection: React.FC = () => {
  const router = useRouter();
  
  const features = [
    { icon: <Code className="h-6 w-6 text-foreground" />, title: "Hanzo Code", description: "AI-powered code generation and intelligent autocomplete" },
    { icon: <Terminal className="h-6 w-6 text-foreground" />, title: "Hanzo Dev", description: "AI engineering assistant for accelerated development" },
    { icon: <Cpu className="h-6 w-6 text-foreground" />, title: "Hanzo App", description: "Low-code platform for building AI applications" },
    { icon: <Rocket className="h-6 w-6 text-foreground" />, title: "Hanzo Bot", description: "Framework for building advanced AI agents and assistants" },
    { icon: <Server className="h-6 w-6 text-foreground" />, title: "Operative", description: "AI agents that automate your development workflow" },
    { icon: <Zap className="h-6 w-6 text-foreground" />, title: "Extension", description: "Browser and IDE plugins for native integration" }
  ];
  
  return (
    <section className="py-24 px-4 relative" id="dx-platform">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-white/30 text-foreground/70 text-sm font-medium">
              Developer Experience
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
              DX Platform
            </ChromeText>
            
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Build better, ship faster with AI-powered developer tools and frameworks
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
              className="bg-gradient-to-br from-white/20 to-white/5 p-6 rounded-xl border border-border hover:border-white/40 transition-all duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--white)]">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
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
            className="text-lg px-8 py-6 bg-primary hover:bg-[#cccccc]"
            onClick={() => router.push('/platform')}
          >
            Explore DX Platform <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DXPlatformSection;
