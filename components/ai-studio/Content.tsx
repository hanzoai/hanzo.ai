
import React from "react";
import Chat from "./Chat";
import Playground from "./Playground";
import Terminal from "./Terminal";
import { MessageInterface } from "./types";

interface ContentProps {
  activeTab: string;
  conversation: MessageInterface[];
  promptText: string;
  setPromptText: (text: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Content = ({ 
  activeTab, 
  conversation, 
  promptText, 
  setPromptText, 
  handleSubmit 
}: ContentProps) => {
  return (
    <div className="flex-1 flex flex-col bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden">
      {activeTab === "chat" && (
        <Chat 
          conversation={conversation}
          promptText={promptText}
          setPromptText={setPromptText}
          handleSubmit={handleSubmit}
        />
      )}
      
      {activeTab === "playground" && <Playground />}
      
      {activeTab === "terminal" && <Terminal />}
    </div>
  );
};

export default Content;
