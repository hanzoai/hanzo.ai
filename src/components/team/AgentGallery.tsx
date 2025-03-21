
import React from "react";
import { motion } from "framer-motion";
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
  HelpCircle
} from "lucide-react";
import TeamGroup from "./TeamGroup";
import { teamMembers } from "@/constants/team-members";

const AgentGallery = () => {
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI team members can handle a wide range of tasks across leadership, engineering, 
            business, and creative functions. Each agent is specialized and 
            trained to excel in their domain.
          </p>
        </motion.div>

        <TeamGroup title="Leadership & Core Team" members={coreTeamMembers} />
        <TeamGroup title="Engineering Team" members={engineeringAgents} />
        <TeamGroup title="Business Team" members={businessAgents} />
        <TeamGroup title="Creative Team" members={creativeAgents} />
      </div>
    </section>
  );
};

export default AgentGallery;
