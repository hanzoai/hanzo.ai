
import React from "react";
import { Send, RefreshCw, Camera, Mic, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MessageInputProps {
  message: string;
  setMessage: (message: string) => void;
  handleSendMessage: (e: React.FormEvent) => void;
  isTyping: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ 
  message, 
  setMessage, 
  handleSendMessage, 
  isTyping 
}) => {
  return (
    <div className="p-4 border-t border-gray-800">
      <form onSubmit={handleSendMessage} className="flex items-center">
        <div className="flex items-center space-x-2 mr-2">
          <Button type="button" variant="ghost" size="icon" className="text-neutral-400 hover:text-[var(--white)]">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button type="button" variant="ghost" size="icon" className="text-neutral-400 hover:text-[var(--white)]">
            <Camera className="h-5 w-5" />
          </Button>
          <Button type="button" variant="ghost" size="icon" className="text-neutral-400 hover:text-[var(--white)]">
            <Mic className="h-5 w-5" />
          </Button>
        </div>
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-gray-800/50 border border-gray-700 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button 
          type="submit" 
          disabled={isTyping}
          className="rounded-l-none bg-blue-600 hover:bg-blue-700 h-[42px]"
        >
          {isTyping ? (
            <RefreshCw className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
        </Button>
      </form>
    </div>
  );
};

export default MessageInput;
