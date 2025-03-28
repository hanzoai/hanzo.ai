
import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Database, Share2, RefreshCcw, Heart, BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const principles = [
  {
    title: "Empower the Underdog",
    description: "Enable others to win. Democratize technology so small businesses and startups can compete with industry giants.",
    icon: <Users className="h-10 w-10 text-purple-400" />,
  },
  {
    title: "Data-Driven Everything",
    description: "Let data be your guide. Embrace analytics and AI as the foundation of decision-making.",
    icon: <Database className="h-10 w-10 text-blue-400" />,
  },
  {
    title: "Open Innovation",
    description: "Be open, share often. Openness accelerates growth—both for the company and its community.",
    icon: <Share2 className="h-10 w-10 text-green-400" />,
  },
  {
    title: "Adaptability",
    description: "Pivot with purpose. There is no failure, only feedback. Move quickly and strike in new directions when opportunity calls.",
    icon: <RefreshCcw className="h-10 w-10 text-yellow-400" />,
  },
  {
    title: "Customer-Centric Growth",
    description: "Coach clients like a sensei. Treat each client as a long-term partner and guide them to success.",
    icon: <Heart className="h-10 w-10 text-red-400" />,
  },
  {
    title: "First Principles Thinking",
    description: "See the invisible, do the impossible. Boil problems down to their essence and solve them in fundamentally better ways.",
    icon: <BookOpen className="h-10 w-10 text-indigo-400" />,
  }
];

const ZenPrinciples = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-purple-950/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Zen of Hanzo</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our guiding philosophy - a set of first principles and laws that act as our north star.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 h-full"
            >
              <div className="mb-6">{principle.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
              <p className="text-gray-300">{principle.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-lg text-lg font-medium"
          >
            <Link to="/zen" className="flex items-center">
              Explore The Full Zen Manifesto
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ZenPrinciples;
