
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Infinity, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JapaneseWave from "@/components/zen/JapaneseWave";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ZenOfHanzo = () => {
  const principles = [
    {
      number: "1",
      title: "Orthogonality",
      japaneseSymbol: "直交性",
      description: "Every tool does one thing exceptionally well. No overlap. No redundancy. Pure clarity."
    },
    {
      number: "2",
      title: "Smallness",
      japaneseSymbol: "小型",
      description: "Minimal components, maximum flexibility. Composable units unlock limitless creativity."
    },
    {
      number: "3",
      title: "Completeness",
      japaneseSymbol: "完全性",
      description: "\"Batteries included.\" Robust solutions, fully integrated and ready for immediate use."
    },
    {
      number: "4",
      title: "Dimensionality",
      japaneseSymbol: "次元性",
      description: "Abstraction without loss of power. Accessible simplicity backed by hidden depth."
    },
    {
      number: "5",
      title: "Clarity",
      japaneseSymbol: "明晰",
      description: "Clear code, concise design, intuitive APIs. No fluff, no friction—just effectiveness."
    },
    {
      number: "6",
      title: "Composability",
      japaneseSymbol: "構成性",
      description: "Design for recombination. Our tools amplify each other, creating exponential outcomes."
    },
    {
      number: "7",
      title: "Accessibility",
      japaneseSymbol: "アクセス性",
      description: "Open innovation is fastest innovation. Shared data, open code, and transparent practices empower exponential growth."
    },
    {
      number: "8",
      title: "Longevity",
      japaneseSymbol: "長寿",
      description: "Build things that last. Think decades, not quarters—robust solutions scale and evolve gracefully."
    },
    {
      number: "9",
      title: "Interoperability",
      japaneseSymbol: "相互運用性",
      description: "Seamlessly connect with existing systems. We integrate, never isolate—enabling frictionless collaboration."
    },
    {
      number: "10",
      title: "Concurrency",
      japaneseSymbol: "並行性",
      description: "Autonomy and collaboration in balance. Fewer roadblocks, no bureaucracy—maximum productivity through trust."
    },
    {
      number: "11",
      title: "Adaptability",
      japaneseSymbol: "適応性",
      description: "Pivot purposefully. Failure is feedback. Rapid experimentation and fearless iteration forge progress."
    },
    {
      number: "12",
      title: "Customer-centrism",
      japaneseSymbol: "顧客中心主義",
      description: "Coach clients like a Sensei. Our success is measured by the success we unlock for others."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>The Zen of Hanzo - AI Engineering Manifesto</title>
        <meta name="description" content="Our battle-tested principles that guide everything we build at Hanzo. Simplicity, clarity, elegance—our AI engineering manifesto." />
      </Helmet>
      
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-gray-900/20"></div>
        <JapaneseWave 
          color="#9b87f5" 
          height={600} 
          opacity={0.02} 
          speed={45} 
          className="absolute bottom-0"
        />
        <JapaneseWave 
          color="#6E59A5" 
          height={600} 
          delay={2} 
          opacity={0.015} 
          speed={50} 
          className="absolute bottom-40"
        />
      </div>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Zen of <span className="text-purple-400">Hanzo</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We are Hanzo. Founded in Kansas City in 2013, forged through a hundred groundbreaking launches, 
              Techstars-funded, and proven in the fires of rapid iteration—our principles shape the future we build.
            </p>
          </motion.div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 space-y-4"
            >
              <p className="text-gray-300 md:text-lg leading-relaxed">
                Hanzo began as Crowdstart, a small, hungry team driving explosive product launches—most notably, 
                the record-breaking SKULLY Technologies AR-1 helmet on Indiegogo, raising millions and demonstrating 
                the immense power of data-driven innovation. That success signaled we were onto something special.
              </p>
              
              <p className="text-gray-300 md:text-lg leading-relaxed">
                We soon evolved into Hanzo AI, incubated by Techstars, pioneering intelligent e-commerce, 
                AI-driven marketing, and blockchain innovation. Our tools democratized technology previously 
                reserved for giants, enabling startups and enterprises alike to scale beyond expectation. 
                Under the leadership of co-founders Zach Kelling (Founding CTO) and Michael Kelling 
                (original co-founder, current CEO), Hanzo became synonymous with turning ambitious ideas into reality.
              </p>
              
              <p className="text-gray-300 md:text-lg leading-relaxed">
                Today, as Hanzo Industries, we fuse AI and engineering discipline to build powerful platforms, 
                open-source tools, and autonomous AI solutions—fueling the next generation of innovation.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Manifesto */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/50 to-purple-900/10">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Manifesto</h2>
              <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
              <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
                The Zen of Hanzo is not just philosophy—it's our operating system. Our guiding principles 
                are practical laws born from rigorous experimentation, engineered to create profound impact 
                and exponential growth.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6"
                >
                  <div className="flex items-center mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 mr-3">
                      {principle.number}
                    </div>
                    <h3 className="text-xl text-white font-bold">{principle.title}</h3>
                  </div>
                  <div className="text-sm text-purple-400 font-mono mb-2">{principle.japaneseSymbol}</div>
                  <p className="text-gray-300">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* The Sensei Method */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Sensei Method</h2>
              <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-black/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-8 mb-10"
            >
              <p className="text-gray-300 md:text-lg leading-relaxed mb-6">
                Our principles come alive through the Sensei Method, a repeatable framework distilled from our 
                experience launching over 100 high-impact products. It combines scientific rigor, rapid iteration, 
                and disciplined execution to scale businesses and deliver tangible growth.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="https://sensei.group" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-md text-white transition-colors"
                >
                  <span>Explore case studies</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Final Quote */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block p-8 bg-gradient-to-br from-black/40 to-gray-900/40 backdrop-blur-sm border border-purple-500/20 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">The Zen of Hanzo</h3>
                <p className="text-gray-300 md:text-lg leading-relaxed">
                  These principles shaped our journey from a small town startup to a global AI powerhouse, 
                  and they continue to guide our relentless pursuit of innovation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ZenOfHanzo;
