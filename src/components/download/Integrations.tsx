
import React from "react";
import { motion } from "framer-motion";
import { Github, CalendarDays, FileEdit, Trello, MessageSquare, Code } from "lucide-react";

const IntegrationCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex items-start space-x-4 p-6 rounded-xl border border-gray-800 bg-gray-900/50">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const Integrations = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Connect your own tools & datasources
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <IntegrationCard 
            icon={<Github className="h-8 w-8 text-purple-500" />}
            title="GitHub"
            description="Automatically manage development work and more"
          />
          
          <IntegrationCard 
            icon={<FileEdit className="h-8 w-8 text-purple-500" />}
            title="Notion"
            description="Seamlessly sync notes and tasks with your Notion workspace"
          />
          
          <IntegrationCard 
            icon={<CalendarDays className="h-8 w-8 text-purple-500" />}
            title="Google Calendar"
            description="Connect your calendar to automate meeting workflows"
          />
          
          <IntegrationCard 
            icon={<Trello className="h-8 w-8 text-purple-500" />}
            title="Linear"
            description="Create Linear issues directly from any context"
          />
          
          <IntegrationCard 
            icon={<MessageSquare className="h-8 w-8 text-purple-500" />}
            title="Slack"
            description="Summarize channels and post meeting notes to Slack"
          />
          
          <IntegrationCard 
            icon={<Code className="h-8 w-8 text-purple-500" />}
            title="MCP"
            description="Add your own tooling securely using Model Context Protocol"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Integrations;
