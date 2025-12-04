
import React from 'react';
import { motion } from "framer-motion";
import { Laptop, Radio, Smartphone, Video, MessageSquare, TrendingUp, Users, Wifi } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { Link } from "react-router-dom";

const IndustryCommunications = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar themeColor="pink" />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-pink-400 text-sm font-medium">Communications and Media</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">
              AI for Next-Gen Media & Communications
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Transform content creation, delivery, and audience engagement with intelligent media solutions and 5G infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-pink-600 hover:bg-pink-700 text-[var(--white)] px-8 py-6 text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-pink-500/30 text-[var(--white)] hover:bg-pink-900/20 px-8 py-6 text-lg">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-pink-900/20 border border-pink-500/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-pink-500/30">
                <Video className="h-10 w-10 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Content Intelligence</h3>
                <p className="text-center text-neutral-300">AI-powered content creation, curation, and personalization</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-pink-500/30">
                <Radio className="h-10 w-10 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Network Optimization</h3>
                <p className="text-center text-neutral-300">Smart infrastructure for 5G and next-gen connectivity</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-pink-500/30">
                <Users className="h-10 w-10 text-pink-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Audience Analytics</h3>
                <p className="text-center text-neutral-300">Deep insights into viewer behavior and engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-pink-400 to-rose-400">
              Industry Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Comprehensive AI capabilities for media and communications companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6"
            >
              <Video className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Content Generation</h3>
              <p className="text-neutral-300">
                AI-assisted content creation, editing, and production for video, audio, and text media.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6"
            >
              <TrendingUp className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Recommendation Engine</h3>
              <p className="text-neutral-300">
                Personalized content recommendations that increase engagement and viewer retention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6"
            >
              <Wifi className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Network Intelligence</h3>
              <p className="text-neutral-300">
                AI-driven network optimization for improved quality of service and reduced latency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6"
            >
              <MessageSquare className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sentiment Analysis</h3>
              <p className="text-neutral-300">
                Real-time social listening and sentiment tracking across platforms and channels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6"
            >
              <Smartphone className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile Experience</h3>
              <p className="text-neutral-300">
                Optimize mobile apps and streaming services with edge computing and adaptive delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6"
            >
              <Laptop className="h-10 w-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Ad Optimization</h3>
              <p className="text-neutral-300">
                Maximize ad revenue with AI-powered targeting, placement, and yield optimization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-pink-400 to-rose-400">
              Industry Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Transforming media and communications with AI innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-900/10 border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Streaming Video Platforms</h3>
              <p className="text-neutral-300 mb-4">
                Build next-generation OTT platforms with intelligent content delivery and personalization.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Adaptive bitrate streaming and quality optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>AI-powered content tagging and metadata generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Personalized recommendation algorithms at scale</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-900/10 border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Telecommunications Optimization</h3>
              <p className="text-neutral-300 mb-4">
                Enhance network performance and customer experience with predictive analytics.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Predictive network maintenance and fault detection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Intelligent traffic routing and bandwidth allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Customer churn prediction and retention strategies</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-900/10 border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">News and Publishing</h3>
              <p className="text-neutral-300 mb-4">
                Accelerate journalism and publishing with AI-assisted writing and curation.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Automated content summarization and headline generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Real-time fact-checking and source verification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Audience segmentation and personalized news feeds</span>
                </li>
              </ul>
            </div>

            <div className="bg-pink-900/10 border border-pink-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Social Media Platforms</h3>
              <p className="text-neutral-300 mb-4">
                Scale engagement and moderation with intelligent content management systems.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Automated content moderation and safety enforcement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Trend detection and viral content prediction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-400 mr-2">•</span>
                  <span>Personalized feed ranking and engagement optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-900/20 to-rose-900/20 rounded-2xl p-8 md:p-12 border border-pink-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Media Operations</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Partner with Hanzo to build intelligent, scalable media and communications platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-pink-600 hover:bg-pink-700 text-[var(--white)] px-8 py-6 text-lg">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-pink-500/30 text-[var(--white)] hover:bg-pink-900/20 px-8 py-6 text-lg">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustryCommunications;
