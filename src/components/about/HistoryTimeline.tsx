
import React from "react";
import { motion } from "framer-motion";
import { Code, Rocket, Stars, Coins, Trophy, Lightbulb, Bot, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const timelineEvents = [
  {
    year: "2014-2016",
    title: "Origins: Verus Media & Crowdstart",
    description: "Zach Kelling founded Verus Media and launched Crowdstart, a platform to harness crowd-driven data and AI to help businesses grow.",
    icon: <Rocket className="text-purple-400" />,
    highlight: "Record-breaking product launches and significant crowdfunding success.",
    link: { text: "Learn about our platform", url: "/platform" }
  },
  {
    year: "2016",
    title: "Reimagining as Hanzo",
    description: "The company formally incorporated as Hanzo AI, Inc., focusing on AI-powered marketing and development platforms.",
    icon: <Stars className="text-blue-400" />,
    highlight: "Helped launch some of the most successful crowdsales in history.",
    link: { text: "View Hanzo AI", url: "/ai" }
  },
  {
    year: "2017",
    title: "Techstars Acceleration",
    description: "Selected for the inaugural Techstars Kansas City accelerator cohort, sharpening focus on e-commerce SaaS.",
    icon: <Trophy className="text-yellow-400" />,
    highlight: "23 beta users and $42M in client sales by Demo Day.",
    link: { text: "Explore Commerce", url: "/commerce" }
  },
  {
    year: "2018-2020",
    title: "AI Marketing & Blockchain",
    description: "Pivoted to AI marketing platform and blockchain technology, supporting tokenized crowdfunding.",
    icon: <Coins className="text-green-400" />,
    highlight: "Co-founded the first SEC-approved crowdfunding token offering.",
    link: { text: "See our analytics", url: "/analytics" }
  },
  {
    year: "2021-2023",
    title: "Product Innovation",
    description: "Launched Hanzo Dev, an AI-powered code editor and app builder translating natural language to live software.",
    icon: <Code className="text-indigo-400" />,
    highlight: "Open-sourced Hanzo Base, a powerful backend framework.",
    link: { text: "Try Hanzo Dev", url: "/dev" }
  },
  {
    year: "2024-Present",
    title: "Strategic Partnerships",
    description: "Formed key alliances like Personas Social Inc. partnership to expand Keek's user base using Hanzo's AI.",
    icon: <User2 className="text-pink-400" />,
    highlight: "Driven over $1B in revenues to clients using AI-powered marketing.",
    link: { text: "Meet Hanzo Bot", url: "/bot" }
  },
];

const TimelineEvent = ({ event, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      <div className="md:w-1/2">
        <div className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 h-full">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full bg-gray-900 mr-4">
              {event.icon}
            </div>
            <div>
              <span className="text-sm text-purple-400 font-semibold">{event.year}</span>
              <h3 className="text-2xl font-bold">{event.title}</h3>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{event.description}</p>
          <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-4 mb-6">
            <p className="text-purple-300 italic">"{event.highlight}"</p>
          </div>
          <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-500/10">
            <a href={event.link.url}>{event.link.text}</a>
          </Button>
        </div>
      </div>
      
      <div className="hidden md:block md:w-1/2 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-full bg-purple-500/30"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HistoryTimeline = () => {
  return (
    <section id="timeline" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey Through Time</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From crowd-powered marketing to AI innovation, explore the key milestones
            that shaped Hanzo Industries.
          </p>
        </motion.div>
        
        <div className="mt-16">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;
