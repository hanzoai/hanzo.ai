
import React from "react";
import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";

const WorkspaceHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <div className="inline-flex p-2 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 mb-4">
        <FolderKanban className="h-6 w-6" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        One Workspace for Humans & AI
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Seamlessly integrate your AI team members into your existing workflows with our 
        unified workspace platform, featuring project management, chat, video calls, and 
        knowledge base tools.
      </p>
    </motion.div>
  );
};

export default WorkspaceHeader;
