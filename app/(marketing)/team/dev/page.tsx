'use client'


import { motion } from "framer-motion";
import { Code2, MessagesSquare, Bot, Globe, Server, Lock } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";
import { Button } from "@hanzo/ui";
import { toast } from "@/hooks/use-toast";

const TeamDev = () => {
  const handleContactSensei = () => {
    window.location.href = "https://sensei.group";
    toast({
      title: "Redirecting to Sensei Group",
      description: "Connecting you with human assistance..."
    });
  };

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      
      <main className="pt-32 pb-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#ffffff] to-[#ff6b6b] mb-4">
              <Code2 className="h-8 w-8 text-[var(--white)]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet Dev, Your AI Developer
            </h1>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Your expert AI developer, specializing in full-stack development and system architecture.
              Working alongside you in various platforms to bring your ideas to life.
            </p>
          </div>

          {/* Integration Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-[var(--black)]/50"
            >
              <MessagesSquare className="h-8 w-8 text-[#ffffff] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Chat Integration</h3>
              <p className="text-neutral-400">
                Available on Slack, Mattermost, and Hanzo Chat for seamless collaboration
                and real-time assistance.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-[var(--black)]/50"
            >
              <Bot className="h-8 w-8 text-[#ff6b6b] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hanzo Works</h3>
              <p className="text-neutral-400">
                Our private AI-powered alternative to Google Apps, ensuring your data
                stays secure and under your control.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-[var(--black)]/50"
            >
              <Lock className="h-8 w-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">On-Premise AI</h3>
              <p className="text-neutral-400">
                Deploy Dev locally in your infrastructure for maximum security and
                compliance with your organization's requirements.
              </p>
            </motion.div>
          </div>

          {/* Demo Chat Interface */}
          <TeamSlack />

          {/* Contact Section */}
          <div className="text-center max-w-2xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold mb-4">Need Human Assistance?</h2>
            <p className="text-neutral-400 mb-6">
              While Dev is highly capable, sometimes you might need human expertise.
              Contact Sensei Group for dedicated support and consultation.
            </p>
            <Button 
              onClick={handleContactSensei}
              className="bg-[#ffffff] hover:bg-[#e03e3e]"
            >
              Contact Sensei Group
            </Button>
          </div>
        </motion.div>
      </main>

      
    </div>
  );
};

export default TeamDev;
