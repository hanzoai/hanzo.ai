'use client'


import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Users, Edit, GamepadIcon, ChartBar, Code, Heart, ArrowRight } from "lucide-react";
import { Button } from "@hanzo/ui";

interface UseCaseCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-gradient-to-br from-gray-900 to-background border border-gray-800 rounded-xl p-6 hover:border-white/30 transition-colors"
    >
      <div className="bg-primary/10 h-10 w-10 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 text-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-[var(--white)] mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

const UseCases = () => {
  const useCases = [
    {
      icon: MessageSquare,
      title: "Chat Applications",
      description: "Build messaging apps with real-time delivery, typing indicators, and read receipts."
    },
    {
      icon: Users,
      title: "Collaborative Workspaces",
      description: "Create shared workspaces where multiple users can collaborate simultaneously."
    },
    {
      icon: Edit,
      title: "Collaborative Editing",
      description: "Implement Google Docs-like collaborative document editing with conflict resolution."
    },
    {
      icon: GamepadIcon,
      title: "Multiplayer Games",
      description: "Develop low-latency multiplayer games with synchronized game state across players."
    },
    {
      icon: ChartBar,
      title: "Live Dashboards",
      description: "Build dashboards that update in real-time as new data becomes available."
    },
    {
      icon: Code,
      title: "Dev Tooling",
      description: "Create collaborative coding environments with real-time changes and execution."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-white/30 mb-6">
            <Heart className="h-4 w-4 text-foreground mr-2" />
            <span className="text-sm text-foreground/70">Popular Use Cases</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-4">
            Build Interactive Experiences
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Hanzo Realtime powers a wide range of applications that demand immediate data updates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Button className="bg-primary hover:bg-[#cccccc]">
            Explore All Use Cases <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
