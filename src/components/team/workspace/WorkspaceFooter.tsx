
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const WorkspaceFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center"
    >
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        All workspace tools are fully integrated, allowing AI agents to work across platforms
        seamlessly while maintaining a complete audit trail of all actions.
      </p>
      
      <div className="inline-flex flex-wrap justify-center gap-4">
        <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
          Real-time collaboration
        </Badge>
        <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
          Full audit history
        </Badge>
        <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
          Seamless integrations
        </Badge>
        <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
          Human oversight
        </Badge>
        <Badge className="bg-purple-900/30 text-purple-300 border-purple-500/30 px-3 py-2">
          Enterprise security
        </Badge>
      </div>
    </motion.div>
  );
};

export default WorkspaceFooter;
