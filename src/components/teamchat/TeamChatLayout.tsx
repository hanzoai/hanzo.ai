
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamChatHero from "./TeamChatHero";
import ChatInterface from "./ChatInterface";
import ChatFeatures from "./ChatFeatures";

const TeamChatLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex flex-col pt-16">
        <TeamChatHero />
        <ChatInterface />
        <ChatFeatures />
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamChatLayout;
