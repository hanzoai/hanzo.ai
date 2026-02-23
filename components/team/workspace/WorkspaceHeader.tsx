'use client'


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
      <div
        className="inline-flex p-2 rounded-full mb-4"
        style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)", color: "var(--primary)" }}
      >
        <FolderKanban className="h-6 w-6" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        One Workspace for Humans & AI
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Seamlessly integrate your AI team members into your existing workflows with our
        unified workspace platform, featuring project management, chat, video calls, and
        knowledge base tools.
      </p>
    </motion.div>
  );
};

export default WorkspaceHeader;
