
import React from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Cpu, Rocket, Server, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ChromeText from "@/components/ui/chrome-text";

const DXPlatformSection: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    { icon: <Code className="h-6 w-6 text-[#fd4444]" />, title: "Hanzo Code", description: "AI-powered code generation and intelligent autocomplete" },
    { icon: <Terminal className="h-6 w-6 text-[#fd4444]" />, title: "Hanzo Dev", description: "AI engineering assistant for accelerated development" },
    { icon: <Cpu className="h-6 w-6 text-[#fd4444]" />, title: "Hanzo App", description: "Low-code platform for building AI applications" },
    { icon: <Rocket className="h-6 w-6 text-[#fd4444]" />, title: "Hanzo Bot", description: "Framework for building advanced AI agents and assistants" },
    { icon: <Server className="h-6 w-6 text-[#fd4444]" />, title: "Operative", description: "AI agents that automate your development workflow" },
    { icon: <Zap className="h-6 w-6 text-[#fd4444]" />, title: "Extension", description: "Browser and IDE plugins for seamless integration" }
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
            <span className="inline-block px-4 py-1 rounded-full bg-[#fd4444]/20 border border-[#fd4444]/30 text-[#ff6b6b] text-sm font-medium">
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
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
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
              className="bg-gradient-to-br from-[#fd4444]/20 to-[#fd4444]/5 p-6 rounded-xl border border-[#fd4444]/20 hover:border-[#fd4444]/40 transition-all duration-300"
            >
              <div className="bg-[#fd4444]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
            className="text-lg px-8 py-6 bg-[#fd4444] hover:bg-[#e03e3e]"
            onClick={() => navigate('/platform')}
          >
            Explore DX Platform <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DXPlatformSection;
