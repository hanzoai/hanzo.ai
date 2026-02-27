'use client'

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Recycle, ThermometerSun } from "lucide-react";
import { Button } from "@hanzo/ui";
import ChromeText from "@/components/ui/chrome-text";
const Karma = () => {
  return <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{
            opacity: 0,
            y: -20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/20 border border-white/30 text-foreground/70 text-sm font-medium">
                AI Engineering Platform
              </span>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
                Sustainable AI for the Future
              </ChromeText>
              <div className="text-xl text-foreground/80 mb-8 space-y-4">
                <p>
                  At Hanzo, we believe AI should serve humanity while respecting our planet. Our commitment to sustainable AI development is reflected in every product we build.
                </p>
                <p>
                  From energy-efficient infrastructure to carbon-neutral operations, we're creating AI that's as sustainable as it is powerful.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.1
            }} className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-900/20 border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Leaf className="h-6 w-6 text-foreground/70" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Carbon Neutral</h3>
                <p className="text-muted-foreground text-sm">Offset all carbon emissions</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.2
            }} className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-900/20 border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <ThermometerSun className="h-6 w-6 text-foreground/70" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Energy Efficient</h3>
                <p className="text-muted-foreground text-sm">90% lower energy usage</p>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.3
            }} className="flex flex-col items-center text-center p-4 rounded-lg bg-gray-900/20 border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <Recycle className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Renewable Focus</h3>
                <p className="text-muted-foreground text-sm">100% renewable data centers</p>
              </motion.div>
            </div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="flex flex-row gap-4">
              <Button variant="outline" className="text-[var(--white)] border-border bg-[var(--white)]/5 hover:bg-[var(--white)]/10">
                <a href="/leadership">Our Leadership</a>
              </Button>
              <Button variant="outline" className="text-[var(--white)] border-border bg-[var(--white)]/5 hover:bg-[var(--white)]/10">
                <a href="/careers">Join Our Team</a>
              </Button>
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-gray-900/20 border border-gray-800 rounded-xl p-8">
            <div className="flex items-start mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-800 mr-4"></div>
              <div>
                <h3 className="text-xl font-bold mb-1">Zach Kelling</h3>
                <p className="text-muted-foreground">CTO, Hanzo AI</p>
              </div>
            </div>
            
            <blockquote className="text-xl text-foreground/80 italic mb-6">
              "Our mission at Hanzo is to democratize access to Amazon-level AI infrastructure while maintaining an unwavering commitment to sustainability. We've achieved incredible growth by providing powerful AI tools that don't compromise our environmental values."
            </blockquote>
            
            <blockquote className="text-xl text-foreground/80 italic">
              "By optimizing our infrastructure and operations, we're proving that frontier AI and environmental responsibility can go hand in hand. This isn't just good karma—it's good business."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Karma;