'use client'


import React from "react";
import { motion } from "framer-motion";
import { FileText, Calendar, Bot } from "lucide-react";
import { Badge } from "@hanzo/ui";

const BRAND_COLOR = "#ffffff";

const KnowledgeBaseCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-xl"
    >
      <div className="border-b border-border p-3 flex items-center">
        <FileText className="h-5 w-5 mr-2" style={{ color: BRAND_COLOR }} />
        <span className="font-medium text-foreground">Knowledge Base</span>
        <Badge
          variant="outline"
          className="ml-auto"
          style={{ backgroundColor: `${BRAND_COLOR}30`, borderColor: `${BRAND_COLOR}50`, color: BRAND_COLOR }}
        >
          Notion-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-foreground">Company Wiki</h3>
            <div className="flex items-center space-x-2">
              <div className="text-xs text-green-400 flex items-center">
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs mr-1 text-white" style={{ backgroundColor: BRAND_COLOR }}>AI</div>
                <span>Updating</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-2 bg-secondary/50 rounded-md border border-border">
              <div className="flex items-center mb-1">
                <Calendar className="h-4 w-4 mr-2" style={{ color: BRAND_COLOR }} />
                <span className="font-medium text-foreground">Onboarding Process</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Step-by-step guide for new employees, updated automatically by HR Bot.
              </p>
            </div>

            <div className="p-2 bg-secondary/50 rounded-md border border-border">
              <div className="flex items-center mb-1">
                <FileText className="h-4 w-4 mr-2" style={{ color: BRAND_COLOR }} />
                <span className="font-medium text-foreground">Technical Documentation</span>
              </div>
              <p className="text-xs text-muted-foreground">
                API references and architectural diagrams maintained by DevBot.
              </p>
            </div>

            <div
              className="p-2 rounded-md"
              style={{ backgroundColor: `${BRAND_COLOR}20`, border: `1px solid ${BRAND_COLOR}50` }}
            >
              <div className="flex items-center mb-1">
                <Bot className="h-4 w-4 mr-2" style={{ color: BRAND_COLOR }} />
                <span className="font-medium text-foreground">AI Activity: Adding Marketing Guidelines</span>
              </div>
              <div className="flex items-center text-xs" style={{ color: BRAND_COLOR }}>
                <span>ContentBot is updating brand guidelines based on latest team meeting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KnowledgeBaseCard;
