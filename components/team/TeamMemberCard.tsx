'use client'

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  onClick?: () => void;
}

const TeamMemberCard = ({ name, role, description, icon: Icon, gradient, onClick }: TeamMemberCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative group h-full border border-border overflow-hidden rounded-2xl bg-card backdrop-blur-sm cursor-pointer"
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out -z-10 ${gradient}`} />
      <div className="flex flex-col h-full">
        <div className="block p-8 relative z-10 flex-grow">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
            <Icon className="h-6 w-6 text-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-muted-foreground transition-colors">{name}</h3>
          <p className="text-muted-foreground font-medium mb-3">{role}</p>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>

        <div className="px-8 pb-8 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center px-4 py-2 bg-secondary/50 border border-border rounded-xl hover:bg-accent transition-colors"
            style={{ '--hover-border-color': `var(--primary)30` } as React.CSSProperties}
          >
            <Info className="h-5 w-5 mr-2" />
            <span className="text-foreground">View Details</span>
          </motion.div>
        </div>
      </div>

      {/* Hover effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
        style={{ background: `linear-gradient(to bottom right, var(--primary)05, var(--primary)05)` }}
        initial={false}
        whileHover={{ opacity: 0.3 }}
      />
    </motion.div>
  );
};

export default TeamMemberCard;
