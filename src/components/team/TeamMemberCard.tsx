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
      className="relative group h-full border border-gray-800 overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm cursor-pointer"
      onClick={onClick}
    >
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 ease-in-out -z-10 ${gradient}`} />
      <div className="flex flex-col h-full">
        <div className="block p-8 relative z-10 flex-grow">
          <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-4`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neutral-300 transition-colors">{name}</h3>
          <p className="text-neutral-400 font-medium mb-3">{role}</p>
          <p className="text-neutral-400 mb-4">{description}</p>
        </div>

        <div className="px-8 pb-8 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors group-hover:border-purple-500/30"
          >
            <Info className="h-5 w-5 text-purple-400 mr-2" />
            <span className="text-white">View Details</span>
          </motion.div>
        </div>
      </div>

      {/* Hover effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
        initial={false}
        whileHover={{ opacity: 0.3 }}
      />
    </motion.div>
  );
};

export default TeamMemberCard;