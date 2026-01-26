
import React from "react";
import { motion } from "framer-motion";
import { Code, Zap, MessageSquare, Globe, Bot, FileCode, Infinity, Network } from "lucide-react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 h-full"
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          {icon}
          <h3 className="text-2xl font-semibold mt-4 mb-2">{title}</h3>
          <p className="text-neutral-300 mb-4">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const HanzoCodeFeatures = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Beyond Other AI Editors</h2>
          <p className="text-xl text-neutral-300">
            Capabilities that leave Cursor, Windsurf, and other AI editors far behind
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Holistic Understanding"
            description="Unlike others, we analyze your entire codebase, not just the current file or context window"
            icon={<Code className="h-10 w-10 text-[#fd4444]" />}
          />
          
          <FeatureCard 
            title="Parallel Execution"
            description="Run multiple autonomous agents simultaneously to solve different parts of your project"
            icon={<Zap className="h-10 w-10 text-[#fd4444]" />}
          />
          
          <FeatureCard 
            title="Advanced Reasoning"
            description="Complex problem solving with multi-step reasoning that other AI tools can't match"
            icon={<MessageSquare className="h-10 w-10 text-[#fd4444]" />}
          />
          
          <FeatureCard 
            title="Multi-repo Context"
            description="Understand dependencies across multiple repositories and codebases simultaneously"
            icon={<Globe className="h-10 w-10 text-[#fd4444]" />}
          />
          
          <FeatureCard 
            title="Complete Autonomy"
            description="Agents can work independently, making decisions without constant human guidance"
            icon={<Bot className="h-10 w-10 text-[#fd4444]" />}
          />
          
          <FeatureCard 
            title="Full System Access"
            description="Agents have controlled access to your file system, dev environment, and tooling"
            icon={<FileCode className="h-10 w-10 text-[#fd4444]" />}
          />
          
          <FeatureCard 
            title="Unlimited Context"
            description="No token limits or context windows - process entire codebases at once"
            icon={<Infinity className="h-10 w-10 text-[#fd4444]" />}
          />
          
          <FeatureCard 
            title="Agent Collaboration"
            description="Multiple agents working together with different roles and responsibilities"
            icon={<Network className="h-10 w-10 text-[#fd4444]" />}
          />
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeFeatures;
