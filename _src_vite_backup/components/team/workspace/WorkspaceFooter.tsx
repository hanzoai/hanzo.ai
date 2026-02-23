
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const BRAND_COLOR = "#fd4444";

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
          style={{ backgroundColor: `${BRAND_COLOR}30`, borderColor: `${BRAND_COLOR}50`, color: BRAND_COLOR }}
        >
          Real-time collaboration
        </Badge>
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: `${BRAND_COLOR}30`, borderColor: `${BRAND_COLOR}50`, color: BRAND_COLOR }}
        >
          Full audit history
        </Badge>
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: `${BRAND_COLOR}30`, borderColor: `${BRAND_COLOR}50`, color: BRAND_COLOR }}
        >
          Seamless integrations
        </Badge>
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: `${BRAND_COLOR}30`, borderColor: `${BRAND_COLOR}50`, color: BRAND_COLOR }}
        >
          Human oversight
        </Badge>
        <Badge
          className="px-3 py-2"
          style={{ backgroundColor: `${BRAND_COLOR}30`, borderColor: `${BRAND_COLOR}50`, color: BRAND_COLOR }}
        >
          Enterprise security
        </Badge>
      </div>
    </motion.div>
  );
};

export default WorkspaceFooter;
