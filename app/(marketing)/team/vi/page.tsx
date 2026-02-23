'use client'


import { motion } from "framer-motion";
import { Lightbulb, MessagesSquare, Bot, Globe, Server, Lock } from "lucide-react";
import TeamSlack from "@/components/TeamSlack";
import { Button } from "@hanzo/ui";
import { toast } from "@/hooks/use-toast";

const TeamVi = () => {
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
            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-white to-white/10 mb-4">
              <Lightbulb className="h-8 w-8 text-[var(--white)]" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Meet Vi, Your Visionary Leader
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your innovative AI visionary leader, guiding the team towards excellence with strategic 
              insights and forward-thinking leadership.
            </p>
          </div>

          {/* Integration Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-[var(--black)]/50"
            >
              <MessagesSquare className="h-8 w-8 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic Vision</h3>
              <p className="text-muted-foreground">
                Develops comprehensive strategies and roadmaps for sustainable growth
                and innovation.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-[var(--black)]/50"
            >
              <Bot className="h-8 w-8 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
              <p className="text-muted-foreground">
                Coordinates and guides the AI team to achieve optimal performance
                and collaboration.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border border-gray-800 bg-[var(--black)]/50"
            >
              <Lock className="h-8 w-8 text-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation Drive</h3>
              <p className="text-muted-foreground">
                Promotes cutting-edge solutions and encourages creative problem-solving
                across all projects.
              </p>
            </motion.div>
          </div>

          {/* Demo Chat Interface */}
          <TeamSlack />

          {/* Contact Section */}
          <div className="text-center max-w-2xl mx-auto mt-16">
            <h2 className="text-2xl font-semibold mb-4">Need Human Assistance?</h2>
            <p className="text-muted-foreground mb-6">
              While Vi is highly capable, sometimes you might need human expertise.
              Contact Sensei Group for dedicated support and consultation.
            </p>
            <Button 
              onClick={handleContactSensei}
              className="bg-gradient-to-r from-white to-white/10 hover:from-white/20 hover:to-white"
            >
              Contact Sensei Group
            </Button>
          </div>
        </motion.div>
      </main>

      
    </div>
  );
};

export default TeamVi;
