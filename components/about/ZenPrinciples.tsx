'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  Users, Database, Share2, RefreshCcw, Heart, BookOpen
} from "lucide-react";
import { Button } from "@hanzo/ui";
import Link from "next/link";

const BRAND_COLOR = "#ffffff";

const principles = [
  {
    title: "Empower the Underdog",
    description: "Enable others to win. Democratize technology so small businesses and startups can compete with industry giants.",
    icon: <Users className="h-10 w-10 text-white" />,
  },
  {
    title: "Data-Driven Everything",
    description: "Let data be your guide. Embrace analytics and AI as the foundation of decision-making.",
    icon: <Database className="h-10 w-10 text-white" />,
  },
  {
    title: "Open Innovation",
    description: "Be open, share often. Openness accelerates growth—both for the company and its community.",
    icon: <Share2 className="h-10 w-10 text-white" />,
  },
  {
    title: "Adaptability",
    description: "Pivot with purpose. There is no failure, only feedback. Move quickly and strike in new directions when opportunity calls.",
    icon: <RefreshCcw className="h-10 w-10 text-white" />,
  },
  {
    title: "Customer-Centric Growth",
    description: "Coach clients like a sensei. Treat each client as a long-term partner and guide them to success.",
    icon: <Heart className="h-10 w-10 text-white" />,
  },
  {
    title: "First Principles Thinking",
    description: "See the invisible, do the impossible. Boil problems down to their essence and solve them in fundamentally better ways.",
    icon: <BookOpen className="h-10 w-10 text-white" />,
  }
];

const ZenPrinciples = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Zen of Hanzo</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
              className="bg-card backdrop-blur-sm border border-border rounded-lg p-8 h-full"
            >
              <div className="mb-6">{principle.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{principle.title}</h3>
              <p className="text-muted-foreground">{principle.description}</p>
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
            className="px-8 py-6 rounded-full text-lg font-medium"
            style={{ backgroundColor: BRAND_COLOR, color: "#000000" }}
          >
            <Link href="/philosophy" className="flex items-center">
              Explore The Full Zen Manifesto
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ZenPrinciples;
