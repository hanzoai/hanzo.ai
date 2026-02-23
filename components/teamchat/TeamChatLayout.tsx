
import React from "react";


import TeamChatHero from "./TeamChatHero";
import ChatInterface from "./ChatInterface";
import ChatFeatures from "./ChatFeatures";

const TeamChatLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] flex flex-col">
      
      
      <main className="flex-1 flex flex-col pt-16">
        <TeamChatHero />
        <ChatInterface />
        <ChatFeatures />
      </main>
      
      
    </div>
  );
};

export default TeamChatLayout;
