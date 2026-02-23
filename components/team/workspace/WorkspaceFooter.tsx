'use client'


import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@hanzo/ui";

const WorkspaceFooter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center"
    >
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        All workspace tools are fully integrated, allowing AI agents to work across platforms
        seamlessly while maintaining a complete audit trail of all actions.
      </p>

      <div className="inline-flex flex-wrap justify-center gap-4">
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)", color: "var(--primary)" }}
        >
          Real-time collaboration
        </Badge>
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)", color: "var(--primary)" }}
        >
          Full audit history
        </Badge>
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)", color: "var(--primary)" }}
        >
          Seamless integrations
        </Badge>
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)", color: "var(--primary)" }}
        >
          Human oversight
        </Badge>
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)", color: "var(--primary)" }}
        >
          Enterprise security
        </Badge>
      </div>
    </motion.div>
  );
};

export default WorkspaceFooter;
