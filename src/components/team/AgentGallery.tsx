
import React from "react";
import { motion } from "framer-motion";
import { 
  Bot, 
  Briefcase, 
  Code, 
  MessagesSquare, 
  LineChart, 
  Pencil, 
  ShieldCheck, 
  Database,
  Terminal 
} from "lucide-react";
import TeamGroup from "./TeamGroup";

const AgentGallery = () => {
  const engineeringAgents = [
    {
      name: "DevBot",
      role: "Software Engineer",
      description: "Writes clean, maintainable code in multiple languages. Specializes in full-stack development and API integrations.",
      icon: Code,
      gradient: "from-blue-600 to-blue-400"
    },
    {
      name: "SecOpsBot",
      role: "Security Engineer",
      description: "Continuously scans for vulnerabilities, performs code reviews for security issues, and ensures compliance.",
      icon: ShieldCheck,
      gradient: "from-red-600 to-red-400"
    },
    {
      name: "DBBot",
      role: "Database Engineer",
      description: "Optimizes database queries, designs schemas, and manages data migrations with minimal downtime.",
      icon: Database,
      gradient: "from-green-600 to-green-400"
    },
    {
      name: "TerminalBot",
      role: "DevOps Engineer",
      description: "Automates deployment pipelines, manages infrastructure, and optimizes system performance.",
      icon: Terminal,
      gradient: "from-yellow-600 to-yellow-400"
    }
  ];
  
  const businessAgents = [
    {
      name: "AnalyticsBot",
      role: "Data Analyst",
      description: "Processes large datasets, creates visualizations, and delivers actionable business insights.",
      icon: LineChart,
      gradient: "from-purple-600 to-purple-400"
    },
    {
      name: "SupportBot",
      role: "Customer Support",
      description: "Handles customer inquiries 24/7, resolves common issues, and escalates complex problems to humans.",
      icon: MessagesSquare,
      gradient: "from-cyan-600 to-cyan-400"
    },
    {
      name: "ContentBot",
      role: "Content Creator",
      description: "Generates blog posts, social media content, and marketing copy aligned with your brand voice.",
      icon: Pencil,
      gradient: "from-pink-600 to-pink-400"
    },
    {
      name: "BizDevBot",
      role: "Business Developer",
      description: "Identifies growth opportunities, analyzes market trends, and assists with strategic planning.",
      icon: Briefcase,
      gradient: "from-orange-600 to-orange-400"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex p-2 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 mb-4">
            <Bot className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI Agents for Every Role
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI team members can handle a wide range of tasks across engineering, 
            design, analytics, and business functions. Each agent is specialized and 
            trained to excel in their domain.
          </p>
        </motion.div>

        <TeamGroup title="Engineering Team" members={engineeringAgents} />
        <TeamGroup title="Business Team" members={businessAgents} />
      </div>
    </section>
  );
};

export default AgentGallery;
