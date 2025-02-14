
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const TeamMemberCard = ({ name, role, description, icon: Icon, gradient }: TeamMemberCardProps) => {
  const subdomain = name.toLowerCase();
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out" />
      <a 
        href={`https://${subdomain}.hanzo.ai`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-purple-400 transition-colors">{name}</h3>
        <p className="text-purple-400 font-medium mb-3">{role}</p>
        <p className="text-gray-400 mb-4">{description}</p>
      </a>
      <a
        href={`https://github.com/hanzo-ai/${subdomain}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors"
      >
        <Github className="h-4 w-4" />
        <span>View on GitHub</span>
      </a>
    </motion.div>
  );
};

export default TeamMemberCard;
