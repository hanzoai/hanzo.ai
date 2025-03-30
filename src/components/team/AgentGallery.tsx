import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Briefcase, 
  Code, 
  MessagesSquare, 
  LineChart, 
  Pencil, 
  ShieldCheck, 
  Database,
  Terminal,
  BrainCircuit,
  Music,
  Palette,
  Settings,
  DollarSign,
  Scale,
  Binary,
  Calculator,
  MessageCircle,
  Lightbulb,
  HelpCircle,
  X,
  ArrowRight
} from "lucide-react";
import TeamGroup from "./TeamGroup";
import { teamMembers } from "@/constants/team-members";
import { Link } from "react-router-dom";

interface AgentDetailModalProps {
  agent: {
    name: string;
    role: string;
    description: string;
    icon: any;
    gradient: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const AgentDetailModal: React.FC<AgentDetailModalProps> = ({ agent, isOpen, onClose }) => {
  if (!agent) return null;
  
  const Icon = agent.icon;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className={`bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl max-w-lg w-full p-6 shadow-xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${agent.gradient} mr-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{agent.name}</h3>
                  <p className="text-neutral-400">{agent.role}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-neutral-300">{agent.description}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-2">Expertise</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-neutral-300">
                    <span className="mr-2 text-purple-400">•</span>
                    Machine learning & data processing
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <span className="mr-2 text-purple-400">•</span>
                    Neural network optimization
                  </li>
                  <li className="flex items-center text-neutral-300">
                    <span className="mr-2 text-purple-400">•</span>
                    Natural language processing
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-2">Integration</h4>
                <p className="text-neutral-300">
                  Works seamlessly with human teams via natural language interfaces,
                  and integrates with all major productivity tools and platforms.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link 
                to={`/team/${agent.name.toLowerCase()}`}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white"
              >
                View Full Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const AgentGallery = () => {
  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAgentDetail = (agent: any) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  const closeAgentDetail = () => {
    setIsModalOpen(false);
  };

  const coreTeamMembers = [
    {
      name: "Vi",
      role: "Visionary Leader",
      description: "Your innovative AI visionary leader, guiding the team towards excellence with strategic insights.",
      icon: Lightbulb,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "Dev",
      role: "Software Engineer",
      description: "Your expert AI developer, specializing in full-stack development and system architecture.",
      icon: Code,
      gradient: "from-blue-600 to-blue-400"
    },
    {
      name: "Des",
      role: "Designer",
      description: "Your creative AI designer, crafting beautiful and intuitive user experiences.",
      icon: Palette,
      gradient: "from-purple-600 to-pink-400"
    },
    {
      name: "Opera",
      role: "Operations Engineer",
      description: "Your efficient AI operations engineer, maintaining system reliability and performance.",
      icon: Settings,
      gradient: "from-yellow-600 to-yellow-400"
    }
  ];
  
  const engineeringAgents = [
    {
      name: "DB",
      role: "Database Expert",
      description: "Your expert AI database specialist, managing data infrastructure and optimizing database operations.",
      icon: Database,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      name: "Sec",
      role: "Security Expert",
      description: "Your expert AI security specialist, protecting digital assets and infrastructure.",
      icon: ShieldCheck,
      gradient: "from-red-500 to-orange-500"
    },
    {
      name: "Core",
      role: "Core Engineer",
      description: "Your expert AI core engineer, building robust system foundations and architecture.",
      icon: BrainCircuit,
      gradient: "from-gray-500 to-slate-500"
    },
    {
      name: "Algo",
      role: "Algorithm Expert",
      description: "Your expert AI algorithm specialist, optimizing computational solutions.",
      icon: Binary,
      gradient: "from-cyan-500 to-blue-500"
    }
  ];
  
  const businessAgents = [
    {
      name: "Mark",
      role: "Marketing Director",
      description: "Your AI marketing strategist, crafting compelling campaigns and driving engagement.",
      icon: MessagesSquare,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Su",
      role: "Support Engineer",
      description: "Your dedicated AI support engineer, ensuring smooth operations and user satisfaction.",
      icon: HelpCircle,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Fin",
      role: "Financial Expert",
      description: "Your expert AI financial analyst, providing financial insights and strategy.",
      icon: DollarSign,
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Cal",
      role: "Calculator",
      description: "Your expert AI calculator, processing complex computations with precision.",
      icon: Calculator,
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  const creativeAgents = [
    {
      name: "Art",
      role: "Artist",
      description: "Your creative AI artist, bringing imagination to life through digital artistry.",
      icon: Palette,
      gradient: "from-violet-500 to-indigo-500"
    },
    {
      name: "Mu",
      role: "Musician",
      description: "Your creative AI musician, composing and producing original music.",
      icon: Music,
      gradient: "from-pink-500 to-purple-500"
    },
    {
      name: "Data",
      role: "Data Scientist",
      description: "Your expert AI data scientist, unlocking insights from complex datasets.",
      icon: LineChart,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      name: "Chat",
      role: "Conversation Expert",
      description: "Your expert AI conversation specialist, facilitating natural communication.",
      icon: MessageCircle,
      gradient: "from-blue-500 to-purple-500"
    }
  ];

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
          <div className="inline-flex p-2 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 mb-4">
            <Bot className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Meet Your AI Team
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Our AI team members can handle a wide range of tasks across leadership, engineering, 
            business, and creative functions. Each agent is specialized and 
            trained to excel in their domain.
          </p>
        </motion.div>

        <TeamGroup 
          title="Leadership & Core Team" 
          members={coreTeamMembers} 
          onMemberClick={openAgentDetail}
        />
        <TeamGroup 
          title="Engineering Team" 
          members={engineeringAgents} 
          onMemberClick={openAgentDetail}
        />
        <TeamGroup 
          title="Business Team" 
          members={businessAgents} 
          onMemberClick={openAgentDetail}
        />
        <TeamGroup 
          title="Creative Team" 
          members={creativeAgents} 
          onMemberClick={openAgentDetail}
        />
      </div>

      <AgentDetailModal 
        agent={selectedAgent}
        isOpen={isModalOpen}
        onClose={closeAgentDetail}
      />
    </section>
  );
};

export default AgentGallery;