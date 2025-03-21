
import React from "react";
import { Bot, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const ChatHeader: React.FC = () => {
  return (
    <div className="bg-gray-900/70 p-4 border-b border-gray-800 flex items-center">
      <div className="bg-purple-600 h-8 w-8 rounded-full flex items-center justify-center mr-3">
        <Bot className="h-4 w-4 text-white" />
      </div>
      <div>
        <h3 className="font-medium">Hanzo Assistant</h3>
        <p className="text-xs text-gray-400">Powered by GPT-4o</p>
      </div>
      <Button variant="ghost" size="icon" className="ml-auto text-gray-400 hover:text-white">
        <Settings className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default ChatHeader;
