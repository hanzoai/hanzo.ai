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

interface Agent {
  name: string;
  role: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

interface AgentDetailModalProps {
  agent: Agent | null;
  isOpen: boolean;
  onClose: () => void;
}

const BRAND_COLOR = "#fd4444";

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
            className="bg-card border border-border rounded-2xl max-w-lg w-full p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${agent.gradient} mr-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">{agent.name}</h3>
                  <p className="text-muted-foreground">{agent.role}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground">{agent.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <h4 className="text-lg font-medium text-foreground mb-2">Expertise</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground">
                    <span className="mr-2" style={{ color: BRAND_COLOR }}>•</span>
                    Machine learning & data processing
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="mr-2" style={{ color: BRAND_COLOR }}>•</span>
                    Neural network optimization
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <span className="mr-2" style={{ color: BRAND_COLOR }}>•</span>
                    Natural language processing
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                <h4 className="text-lg font-medium text-foreground mb-2">Integration</h4>
                <p className="text-muted-foreground">
                  Works seamlessly with human teams via natural language interfaces,
                  and integrates with all major productivity tools and platforms.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link
                to={`/team/${agent.name.toLowerCase()}`}
                className="inline-flex items-center px-4 py-2 rounded-xl text-white"
                style={{ backgroundColor: BRAND_COLOR }}
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
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAgentDetail = (agent: Agent) => {
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
      gradient: "from-[#fd4444] to-[#ff6b6b]"
    },
    {
      name: "Dev",
      role: "Software Engineer",
      description: "Your expert AI developer, specializing in full-stack development and system architecture.",
      icon: Code,
      gradient: "from-[#fd4444] to-[#ff6b6b]"
    },
    {
      name: "Des",
      role: "Designer",
      description: "Your creative AI designer, crafting beautiful and intuitive user experiences.",
      icon: Palette,
      gradient: "from-[#ff6b6b] to-rose-400"
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
      gradient: "from-[#fd4444] to-[#ff6b6b]"
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
      gradient: "from-[#fd4444] to-rose-500"
    }
  ];
  
  const businessAgents = [
    {
      name: "Mark",
      role: "Marketing Director",
      description: "Your AI marketing strategist, crafting compelling campaigns and driving engagement.",
      icon: MessagesSquare,
      gradient: "from-[#fd4444] to-rose-500"
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
      gradient: "from-orange-500 to-amber-500"
    },
    {
      name: "Cal",
      role: "Calculator",
      description: "Your expert AI calculator, processing complex computations with precision.",
      icon: Calculator,
      gradient: "from-[#fd4444] to-[#ff6b6b]"
    }
  ];

  const creativeAgents = [
    {
      name: "Art",
      role: "Artist",
      description: "Your creative AI artist, bringing imagination to life through digital artistry.",
      icon: Palette,
      gradient: "from-[#ff6b6b] to-[#fd4444]"
    },
    {
      name: "Mu",
      role: "Musician",
      description: "Your creative AI musician, composing and producing original music.",
      icon: Music,
      gradient: "from-rose-500 to-[#fd4444]"
    },
    {
      name: "Data",
      role: "Data Scientist",
      description: "Your expert AI data scientist, unlocking insights from complex datasets.",
      icon: LineChart,
      gradient: "from-[#fd4444] to-rose-500"
    },
    {
      name: "Chat",
      role: "Conversation Expert",
      description: "Your expert AI conversation specialist, facilitating natural communication.",
      icon: MessageCircle,
      gradient: "from-[#fd4444] to-[#ff6b6b]"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex p-2 rounded-full mb-4"
            style={{ backgroundColor: `${BRAND_COLOR}20`, borderColor: `${BRAND_COLOR}30`, color: BRAND_COLOR, border: '1px solid' }}
          >
            <Bot className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Your AI Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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