
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon;
  gradient: string;
}

const LastSupper = ({ members }: { members: TeamMember[] }) => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-48 flex items-center justify-center gap-4 overflow-x-auto"
        >
          {/* Fireworks GIF animation in the middle */}
          <div className="absolute z-10">
            <motion.img 
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZocTBtcnY4bGVodG8xeDZidW04MXlmZWUyY2FjaG5iODd3cmdiNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c1R3XcUXVWAFy/giphy.gif" 
              alt="Fireworks animation"
              className="w-24 h-24 object-cover"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          
          {members.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 text-center"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.gradient} p-4 mx-auto mb-2`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                <p className="text-white font-medium">{member.name}</p>
                <p className="text-purple-400 text-sm">{member.role}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default LastSupper;
