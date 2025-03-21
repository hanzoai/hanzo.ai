
import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TeamChatCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-gray-900/30 border border-purple-900/20 rounded-xl overflow-hidden shadow-xl"
    >
      <div className="border-b border-gray-800 p-3 flex items-center">
        <MessageSquare className="h-5 w-5 text-purple-400 mr-2" />
        <span className="font-medium">Team Chat</span>
        <Badge variant="outline" className="ml-auto bg-purple-900/30 border-purple-500/30 text-purple-300">
          Slack-style
        </Badge>
      </div>
      <div className="p-4">
        <div className="bg-black/60 rounded-lg p-4">
          <div className="mb-4">
            <h3 className="font-medium text-white">#project-website</h3>
            <div className="text-xs text-gray-400">3 humans, 2 AI agents</div>
          </div>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-xs mr-3">JD</div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium">John Doe</span>
                  <span className="text-xs text-gray-400 ml-2">10:45 AM</span>
                </div>
                <p className="text-sm text-gray-300">Can someone help review the landing page design?</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-xs mr-3">AI</div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium">DesignBot</span>
                  <span className="text-xs text-gray-400 ml-2">10:47 AM</span>
                </div>
                <p className="text-sm text-gray-300">I'll review it right away. I see a few opportunities to improve the visual hierarchy and call-to-action placement.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-xs mr-3">AI</div>
              <div>
                <div className="flex items-center">
                  <span className="font-medium">DesignBot</span>
                  <span className="text-xs text-gray-400 ml-2">10:49 AM</span>
                </div>
                <div className="bg-gray-800/70 p-2 rounded-md text-sm text-gray-300 border border-gray-700/50">
                  <p>I've created some alternative layouts based on our brand guidelines. You can view them here:</p>
                  <div className="bg-purple-900/20 text-purple-300 p-1 mt-1 rounded flex items-center text-xs">
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
