
import React from "react";
import { motion } from "framer-motion";
import { Bot, Cpu, GitBranch, Braces, Users, Brain, Server, Maximize } from "lucide-react";

interface FeatureCardProps {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl p-6"
    >
      <Icon className="h-10 w-10 text-[#fd4444] mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-neutral-300">{description}</p>
    </motion.div>
  );
};

const HanzoCodeAgents: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Autonomous Agentic Control</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Harness the full power of intelligent agents that can operate your editor alongside you
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={Bot}
            title="Superagents"
            description="AI agents that understand your codebase at a deep level and can autonomously edit, refactor, and optimize code"
          />
          
          <FeatureCard 
            icon={Cpu}
            title="Full Environment Control"
            description="Agents can access and control your entire development environment, including terminal commands and external tools"
          />
          
          <FeatureCard 
            icon={GitBranch}
            title="Parallel Work Streams"
            description="Create multiple agents working on different branches simultaneously to tackle complex problems"
          />
          
          <FeatureCard 
            icon={Braces}
            title="Code Generation"
            description="Generate entire modules, components, or services with detailed specifications in plain English"
          />
        </div>
        
        <div className="bg-gradient-to-br from-[#fd4444]/10 to-[#ff6b6b]/10 rounded-2xl p-8 border border-[#fd4444]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Massively Parallel Development</h3>
              <p className="text-lg text-neutral-300 mb-8">
                Hanzo Code can create up to 1,000,000 parallel instances of your development environment, each with its own agent, to tackle the largest and most complex coding challenges.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-[#fd4444] mr-3 mt-1" />
                  <p className="text-neutral-300">True pair programming with agents that have full system access</p>
                </div>
                
                <div className="flex items-start">
                  <Brain className="h-5 w-5 text-[#fd4444] mr-3 mt-1" />
                  <p className="text-neutral-300">Agents learn your coding style and project patterns over time</p>
                </div>
                
                <div className="flex items-start">
                  <Server className="h-5 w-5 text-[#fd4444] mr-3 mt-1" />
                  <p className="text-neutral-300">Scale from a single helper to a massive distributed workforce</p>
                </div>
                
                <div className="flex items-start">
                  <Maximize className="h-5 w-5 text-[#fd4444] mr-3 mt-1" />
                  <p className="text-neutral-300">Tackle enterprise-scale projects that would normally require entire teams</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[var(--black)]/40 rounded-xl p-6 border border-gray-800">
              <div className="text-sm font-mono text-neutral-300 space-y-2">
                <div className="text-[#fd4444]">// Creating a team of agents to refactor an entire codebase</div>
                <div className="text-[var(--white)]">const project = await HanzoCode.createProject('./my-app');</div>
                <div className="text-[var(--white)]">const agents = await project.createAgentTeam({"{"}</div>
                <div className="text-[var(--white)] ml-4">size: 12,</div>
                <div className="text-[var(--white)] ml-4">task: 'Refactor to React 18 with TypeScript',</div>
                <div className="text-[var(--white)] ml-4">coordination: 'hierarchical',</div>
                <div className="text-[var(--white)] ml-4">parallelization: true</div>
                <div className="text-[var(--white)]">{"}"});</div>
                <div className="text-[var(--white)]">await agents.execute();</div>
                <div className="text-[var(--white)]">// Agents will work together, with some focusing on</div>
                <div className="text-[var(--white)]">// component logic, others on types, others on tests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeAgents;
