
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
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex flex-col items-center">
          {/* Fireworks GIF animation positioned directly over members */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-[-5%] z-10" // Negative margin for overlap
          >
            <motion.img 
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnBuZzFlZWxzNnN3dzVzZzBqbTB2eHMxd2IzMjIwMG03eWN3MWZreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/odsNxyQQDb29O/giphy.gif" 
              alt="Fireworks animation"
              className="w-96 h-96 object-cover"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          
          {/* Team members row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 overflow-x-auto"
          >
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
                  <div className="mt-5"> {/* Added 20px top margin to push text down */}
                    <p className="text-white font-medium">{member.name}</p>
                    <p className="text-purple-400 text-sm">{member.role}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LastSupper;
