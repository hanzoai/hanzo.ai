
import React from "react";
import { motion } from "framer-motion";
import { Video, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const VideoMeetingsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-900/30 border border-purple-900/20 rounded-xl overflow-hidden shadow-xl"
    >
      <div className="border-b border-gray-800 p-3 flex items-center">
        <Video className="h-5 w-5 text-purple-400 mr-2" />
        <span className="font-medium">Video Meetings</span>
        <Badge variant="outline" className="ml-auto bg-purple-900/30 border-purple-500/30 text-purple-300">
          Zoom-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-[var(--black)]/60 rounded-lg p-4">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-medium text-[var(--white)]">Weekly Sprint Planning</h3>
            <Badge className="bg-green-600/30 text-green-400 border-green-500/30">Live</Badge>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="aspect-video bg-gray-800 rounded-md relative">
              <div className="absolute bottom-2 left-2 bg-[var(--black)]/60 px-2 py-1 rounded text-xs">Sarah Johnson</div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-md relative">
              <div className="absolute bottom-2 left-2 bg-[var(--black)]/60 px-2 py-1 rounded text-xs">John Doe</div>
            </div>
            <div className="aspect-video bg-purple-900/30 rounded-md relative border border-purple-700/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="h-10 w-10 text-purple-400" />
              </div>
              <div className="absolute bottom-2 left-2 bg-purple-900/60 px-2 py-1 rounded text-xs">DevBot</div>
            </div>
            <div className="aspect-video bg-purple-900/30 rounded-md relative border border-purple-700/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="h-10 w-10 text-purple-400" />
              </div>
              <div className="absolute bottom-2 left-2 bg-purple-900/60 px-2 py-1 rounded text-xs">AnalyticsBot</div>
            </div>
          </div>

          <div className="text-center text-xs text-neutral-400 py-1">
            AI agents are learning from this meeting and will automatically implement the discussed tasks
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoMeetingsCard;
