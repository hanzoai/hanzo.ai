'use client'


import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText } from "lucide-react";
import { Badge } from "@hanzo/ui";

const TeamChatCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-xl"
    >
      <div className="border-b border-border p-3 flex items-center">
        <MessageSquare className="h-5 w-5 mr-2" />
        <span className="font-medium text-foreground">Team Chat</span>
        <Badge
          variant="outline"
          className="ml-auto"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)", color: "var(--primary)" }}
        >
          Slack-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="mb-4">
            <h3 className="font-medium text-foreground">#project-website</h3>
            <div className="text-xs text-muted-foreground">3 humans, 2 AI agents</div>
          </div>

          <div className="space-y-4">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0 flex items-center justify-center text-xs text-muted-foreground mr-3">JD</div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium text-foreground">John Doe</span>
                  <span className="text-xs text-muted-foreground ml-2">10:45 AM</span>
                </div>
                <p className="text-sm text-muted-foreground">Can someone help review the landing page design?</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-primary-foreground mr-3">AI</div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium text-foreground">DesignBot</span>
                  <span className="text-xs text-muted-foreground ml-2">10:47 AM</span>
                </div>
                <p className="text-sm text-muted-foreground">I'll review it right away. I see a few opportunities to improve the visual hierarchy and call-to-action placement.</p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs text-primary-foreground mr-3">AI</div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium text-foreground">DesignBot</span>
                  <span className="text-xs text-muted-foreground ml-2">10:49 AM</span>
                </div>
                <div className="bg-secondary/70 p-2 rounded-md text-sm text-muted-foreground border border-border">
                  <p>I've created some alternative layouts based on our brand guidelines. You can view them here:</p>
                  <div
                    className="p-1 mt-1 rounded flex items-center text-xs"
                    style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
                  >
                    <FileText className="h-3 w-3 mr-1" />
                    design-alternatives.figma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamChatCard;
