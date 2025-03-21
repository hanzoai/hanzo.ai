
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
}

const TeamMemberCard = ({ name, role, description, icon: Icon, gradient }: TeamMemberCardProps) => {
  const memberRoute = name.toLowerCase();
  const { getRoundingClass, getGlassClass, isDarkMode } = useTheme();
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative group h-full border ${isDarkMode ? "border-gray-800" : "border-gray-200"} overflow-hidden ${getRoundingClass()} ${getGlassClass()}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out -z-10 ${gradient}`} />
      <div className="flex flex-col h-full">
        <div className="block p-8 relative z-10 flex-grow">
          <div className={`inline-flex p-3 ${getRoundingClass()} bg-gradient-to-br ${gradient} mb-4`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? "hover:text-gray-400" : "hover:text-gray-600"} transition-colors`}>{name}</h3>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} font-medium mb-3`}>{role}</p>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} mb-4`}>{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 px-8 pb-8 relative z-10 mt-auto">
          <Link to={`/team/${memberRoute}`} className="w-full">
            <Button 
              variant="outline" 
              size="sm"
              className={`w-full ${getRoundingClass()} ${
                isDarkMode 
                  ? "bg-transparent border-gray-700 hover:bg-white/10 text-gray-300" 
                  : "bg-transparent border-gray-300 hover:bg-gray-100 text-gray-700"
              }`}
            >
              View Profile
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <a 
            href={`https://github.com/hanzoai/bot`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button 
              variant="outline" 
              size="sm"
              className={`w-full ${getRoundingClass()} ${
                isDarkMode 
                  ? "bg-transparent border-gray-700 hover:bg-white/10 text-gray-300" 
                  : "bg-transparent border-gray-300 hover:bg-gray-100 text-gray-700"
              }`}
            >
              Fork
              <Github className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
