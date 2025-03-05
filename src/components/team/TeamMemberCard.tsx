
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const TeamMemberCard = ({ name, role, description, icon: Icon, gradient }: TeamMemberCardProps) => {
  const memberRoute = name.toLowerCase();
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out -z-10" />
      <div className="block mb-4 relative z-10">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-purple-400 transition-colors">{name}</h3>
        <p className="text-purple-400 font-medium mb-3">{role}</p>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 relative z-10">
        <a 
          href={`https://hanzo.ai/bot/${memberRoute}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button 
            variant="outline" 
            size="sm"
            className="w-full"
          >
            Deploy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>

        <a 
          href="https://github.com/hanzoai/bot"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button 
            variant="outline" 
            size="sm"
            className="w-full"
          >
            Fork
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
