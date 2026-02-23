'use client'


import React from "react";
import { motion } from "framer-motion";
import { Video, Bot } from "lucide-react";
import { Badge } from "@hanzo/ui";

const VideoMeetingsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-card border border-border rounded-xl overflow-hidden shadow-xl"
    >
      <div className="border-b border-border p-3 flex items-center">
        <Video className="h-5 w-5 mr-2" />
        <span className="font-medium text-foreground">Video Meetings</span>
        <Badge
          variant="outline"
          className="ml-auto"
          style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)", color: "var(--primary)" }}
        >
          Zoom-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-foreground">Weekly Sprint Planning</h3>
            <Badge className="bg-primary/10 text-foreground/70 border-border">Live</Badge>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="aspect-video bg-secondary rounded-md relative">
              <div className="absolute bottom-2 left-2 bg-background/60 px-2 py-1 rounded text-xs text-foreground">Sarah Johnson</div>
            </div>
            <div className="aspect-video bg-secondary rounded-md relative">
              <div className="absolute bottom-2 left-2 bg-background/60 px-2 py-1 rounded text-xs text-foreground">John Doe</div>
            </div>
            <div
              className="aspect-video rounded-md relative"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="h-10 w-10" />
              </div>
              <div
                className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs text-foreground"
                style={{ backgroundColor: "color-mix(in srgb, var(--primary) 50%, transparent)" }}
              >
                DevBot
              </div>
            </div>
            <div
              className="aspect-video rounded-md relative"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 20%, transparent)", border: "1px solid color-mix(in srgb, var(--primary) 30%, transparent)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="h-10 w-10" />
              </div>
              <div
                className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs text-foreground"
                style={{ backgroundColor: "color-mix(in srgb, var(--primary) 50%, transparent)" }}
              >
                AnalyticsBot
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-muted-foreground py-1">
            AI agents are learning from this meeting and will automatically implement the discussed tasks
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoMeetingsCard;
