'use client'

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const MainCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-white/30 to-white/10 rounded-2xl border border-white/20 overflow-hidden"
      >
        <div className="h-64 bg-gradient-to-r from-white/30 to-white/10 flex items-center justify-center">
          <ChromeText as="h2" className="text-3xl font-bold">
            Capabilities
          </ChromeText>
        </div>
        <div className="p-8">
          <p className="text-neutral-300 mb-6">
            Discover our comprehensive suite of technical capabilities that empower your organization to innovate
            and transform. From AI and cloud infrastructure to custom development solutions, we provide everything
            you need to stay ahead.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white border border-white/30">
              AI Engineering
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/70 border border-white/30">
              Cloud Infrastructure
            </span>
            <span className="px-3 py-1 bg-white/15 rounded-full text-sm text-white border border-white/25">
              Data Analytics
            </span>
            <span className="px-3 py-1 bg-white/15 rounded-full text-sm text-white/70 border border-white/25">
              Digital Experiences
            </span>
          </div>
          <Button asChild className="w-full bg-white hover:bg-[#cccccc]">
            <Link href="/solutions/capabilities">
              Explore Our Capabilities <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20 overflow-hidden"
      >
        <div className="h-64 bg-gradient-to-r from-white/20 to-white/30 flex items-center justify-center">
          <ChromeText as="h2" className="text-3xl font-bold">
            Industries
          </ChromeText>
        </div>
        <div className="p-8">
          <p className="text-neutral-300 mb-6">
            Our industry-specific expertise helps organizations across sectors overcome unique challenges and seize
            opportunities. We combine deep domain knowledge with cutting-edge technology to deliver tailored
            solutions for your business.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white/70 border border-white/30">
              Financial Services
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white border border-white/30">
              Healthcare
            </span>
            <span className="px-3 py-1 bg-white/15 rounded-full text-sm text-white/70 border border-white/25">
              Retail
            </span>
            <span className="px-3 py-1 bg-white/15 rounded-full text-sm text-white border border-white/25">
              Technology
            </span>
          </div>
          <Button asChild className="w-full bg-white/10 hover:bg-white">
            <Link href="/solutions/industries">
              Explore Our Industry Solutions <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default MainCards;
