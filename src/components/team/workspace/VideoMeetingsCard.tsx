
import React from "react";
import { motion } from "framer-motion";
import { Video, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BRAND_COLOR = "#fd4444";

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
        <Video className="h-5 w-5 mr-2" style={{ color: BRAND_COLOR }} />
        <span className="font-medium text-foreground">Video Meetings</span>
        <Badge
          variant="outline"
          className="ml-auto"
          style={{ backgroundColor: `${BRAND_COLOR}30`, borderColor: `${BRAND_COLOR}50`, color: BRAND_COLOR }}
        >
          Zoom-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-secondary/50 rounded-lg p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-foreground">Weekly Sprint Planning</h3>
            <Badge className="bg-green-600/30 text-green-400 border-green-500/30">Live</Badge>
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
              style={{ backgroundColor: `${BRAND_COLOR}30`, border: `1px solid ${BRAND_COLOR}50` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="h-10 w-10" style={{ color: BRAND_COLOR }} />
              </div>
              <div
                className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs text-white"
                style={{ backgroundColor: `${BRAND_COLOR}80` }}
              >
                DevBot
              </div>
            </div>
            <div
              className="aspect-video rounded-md relative"
              style={{ backgroundColor: `${BRAND_COLOR}30`, border: `1px solid ${BRAND_COLOR}50` }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="h-10 w-10" style={{ color: BRAND_COLOR }} />
              </div>
              <div
                className="absolute bottom-2 left-2 px-2 py-1 rounded text-xs text-white"
                style={{ backgroundColor: `${BRAND_COLOR}80` }}
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
