
import React from "react";
import { motion } from "framer-motion";
import { 
  Video, 
  Monitor, 
  MessageSquare, 
  Lightbulb, 
  Workflow,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HumanAIIntegration = () => {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-purple-400" />,
      title: "Train via Zoom",
      description: "Simply have a Zoom call with your AI agents. They learn by watching and listening, just like a human team member would."
    },
    {
      icon: <Monitor className="h-10 w-10 text-purple-400" />,
      title: "Watch Them Work",
      description: "View your AI agents' work in real-time through a virtual desktop. Provide feedback and guidance as needed."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-400" />,
      title: "Seamless Communication",
      description: "Chat with your AI team members through your existing communication channels like Slack, Teams, or email."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-purple-400" />,
      title: "Proactive Suggestions",
      description: "AI agents will proactively offer insights and suggestions based on their observations of your workflow."
    },
    {
      icon: <Workflow className="h-10 w-10 text-purple-400" />,
      title: "Workflow Automation",
      description: "Agents learn your repetitive tasks and offer to automate them, saving you time for more creative work."
    },
    {
      icon: <Users className="h-10 w-10 text-purple-400" />,
      title: "Human Escalation",
      description: "When tasks require human judgment, agents automatically escalate to the appropriate team member."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex p-2 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Human-AI Integration
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Our AI agents are designed to work alongside your human team, 
              creating a seamless integration that enhances productivity and creativity.
            </p>
            
            <div className="relative aspect-video rounded-xl overflow-hidden border border-purple-500/20 bg-[var(--black)]/50">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* This would be a real video in production */}
                <div className="text-center p-8">
                  <Video className="h-16 w-16 text-purple-400 mx-auto mb-4 opacity-70" />
                  <p className="text-neutral-400">Interactive demo video would be here</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-[var(--black)]/40 border border-purple-900/20 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="bg-purple-900/20 p-3 rounded-lg inline-flex mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-neutral-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HumanAIIntegration;
