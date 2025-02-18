
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const TeamMemberCard = ({ name, role, description, icon: Icon, gradient }: TeamMemberCardProps) => {
  const memberRoute = name.toLowerCase();
  
  const handleForkBot = () => {
    window.open('https://github.com/hanzoai/bot', '_blank');
  };
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative group rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-sm overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out" />
      <div className="block mb-4">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2 hover:text-purple-400 transition-colors">{name}</h3>
        <p className="text-purple-400 font-medium mb-3">{role}</p>
        <p className="text-gray-400 mb-4">{description}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Link 
          to={`/team/${memberRoute}`}
          className="w-full"
        >
          <Button 
            variant="outline" 
            size="sm"
            className="w-full"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        <Button 
          variant="outline" 
          size="sm"
          onClick={handleForkBot}
          className="w-full"
        >
          Fork Bot
          <Github className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
