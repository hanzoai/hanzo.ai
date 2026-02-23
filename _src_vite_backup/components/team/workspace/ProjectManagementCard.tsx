
import React from "react";
import { motion } from "framer-motion";
import { Kanban, CheckCircle, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BRAND_COLOR = "#fd4444";

const ProjectManagementCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-xl"
    >
      <div className="border-b border-border p-3 flex items-center">
        <Kanban className="h-5 w-5 mr-2" style={{ color: BRAND_COLOR }} />
        <span className="font-medium text-foreground">Project Management</span>
        <Badge
          variant="outline"
          className="ml-auto"
          style={{ backgroundColor: `${BRAND_COLOR}30`, borderColor: `${BRAND_COLOR}50`, color: BRAND_COLOR }}
        >
          Linear-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <h3 className="font-medium text-foreground">Website Redesign</h3>
              <Badge className="ml-2 bg-[#fd4444]/20 text-[#fd4444] border-[#fd4444]/30">In Progress</Badge>
            </div>
            <div className="flex space-x-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: BRAND_COLOR }}>AI</div>
              <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs text-muted-foreground">JD</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center p-2 bg-secondary/50 rounded-md border border-border">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-foreground">Create wireframes</span>
              <div className="ml-auto flex items-center space-x-1">
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-xs text-muted-foreground">JD</div>
              </div>
            </div>
            <div className="flex items-center p-2 bg-secondary/50 rounded-md border border-border">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-foreground">Design homepage</span>
              <div className="ml-auto flex items-center space-x-1">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs text-white" style={{ backgroundColor: BRAND_COLOR }}>AI</div>
              </div>
            </div>
            <div
              className="flex items-center p-2 rounded-md"
              style={{ backgroundColor: `${BRAND_COLOR}20`, border: `1px solid ${BRAND_COLOR}50` }}
            >
              <Bot className="h-4 w-4 mr-2" style={{ color: BRAND_COLOR }} />
              <span className="text-sm text-foreground">AI working: Implementing frontend code</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectManagementCard;
