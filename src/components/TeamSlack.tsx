
import { motion } from "framer-motion";
import { MessageSquare, Hash, Users, Search, ChevronDown } from "lucide-react";

const TeamSlack = () => {
  const channels = [
    "general", "design-ideas", "dev-chat", "marketing", "project-updates"
  ];

  const messages = [
    { user: "Dev", message: "Just pushed the new feature to staging ✨", time: "10:30 AM" },
    { user: "Des", message: "The UI looks amazing! Great work team!", time: "10:31 AM" },
    { user: "Mark", message: "Engagement metrics are through the roof 📈", time: "10:32 AM" },
    { user: "Vi", message: "Outstanding progress everyone!", time: "10:33 AM" }
  ];

  return (
    <div className="max-w-6xl mx-auto mb-24 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Watch Our Team in Action</h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="rounded-xl border border-gray-800 bg-black/50 backdrop-blur-sm overflow-hidden"
      >
        <div className="grid grid-cols-4">
          {/* Sidebar */}
          <div className="col-span-1 border-r border-gray-800 p-4">
            <div className="flex items-center justify-between p-2 mb-4">
              <h3 className="text-purple-400 font-semibold">Hanzo Team</h3>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
            <div className="space-y-2">
              {channels.map((channel) => (
                <motion.div
                  key={channel}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 p-2 rounded hover:bg-white/5 cursor-pointer"
                >
                  <Hash className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300 text-sm">{channel}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="col-span-3 p-4">
            <div className="flex items-center gap-4 p-4 border-b border-gray-800 mb-4">
              <Hash className="w-5 h-5 text-gray-400" />
              <span className="text-white font-medium">general</span>
            </div>
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center text-white text-sm">
                    {msg.user[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">{msg.user}</span>
                      <span className="text-xs text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-gray-300">{msg.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamSlack;
