'use client'


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
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto mb-24 px-4"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
      >
        Watch Our Team in Action
      </motion.h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="rounded-xl border border-gray-800 bg-[var(--black)]/50 backdrop-blur-sm overflow-hidden"
      >
        <div className="grid grid-cols-4">
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-1 border-r border-gray-800 p-4"
          >
            <div className="flex items-center justify-between p-2 mb-4">
              <h3 className="text-red-400 font-semibold">Hanzo Team</h3>
              <ChevronDown className="w-4 h-4 text-neutral-400" />
            </div>
            <div className="space-y-2">
              {channels.map((channel, idx) => (
                <motion.div
                  key={channel}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + (idx * 0.1) }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 p-2 rounded hover:bg-[var(--white)]/5 cursor-pointer"
                >
                  <Hash className="w-4 h-4 text-neutral-400" />
                  <span className="text-neutral-300 text-sm">{channel}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Chat Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-3 p-4"
          >
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex items-center gap-4 p-4 border-b border-gray-800 mb-4"
            >
              <Hash className="w-5 h-5 text-neutral-400" />
              <span className="text-[var(--white)] font-medium">general</span>
            </motion.div>
            <div className="space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + (idx * 0.2) }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-red-500 flex items-center justify-center text-[var(--white)] text-sm">
                    {msg.user[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[var(--white)]">{msg.user}</span>
                      <span className="text-xs text-neutral-400">{msg.time}</span>
                    </div>
                    <p className="text-neutral-300">{msg.message}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamSlack;
