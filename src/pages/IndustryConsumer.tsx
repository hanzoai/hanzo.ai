
import React from 'react';
import { motion } from "framer-motion";
import { ShoppingCart, TrendingUp, Package, Users, Sparkles, BarChart3, Smartphone, Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";
import { Link } from "react-router-dom";

const IndustryConsumer = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar themeColor="amber" />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-amber-400 text-sm font-medium">Consumer Goods and Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
              AI-Powered Consumer Experiences
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Transform retail, e-commerce, and consumer services with personalized experiences and intelligent operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-[var(--white)] px-8 py-6 text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" className="border-amber-500/30 text-[var(--white)] hover:bg-amber-900/20 px-8 py-6 text-lg">
                <Link to="/pricing">Schedule Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative bg-amber-900/20 border border-amber-500/20 rounded-xl p-8 overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-amber-500/30">
                <ShoppingCart className="h-10 w-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Commerce</h3>
                <p className="text-center text-neutral-300">AI-powered shopping experiences and conversion optimization</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-amber-500/30">
                <Sparkles className="h-10 w-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Personalization</h3>
                <p className="text-center text-neutral-300">Tailored recommendations and individualized customer journeys</p>
              </div>

              <div className="flex flex-col items-center p-4 bg-[var(--black)]/30 rounded-lg border border-amber-500/30">
                <Package className="h-10 w-10 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Supply Chain Intelligence</h3>
                <p className="text-center text-neutral-300">Demand forecasting and inventory optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-amber-400 to-orange-400">
              Industry Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Comprehensive AI capabilities for consumer-focused businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6"
            >
              <Sparkles className="h-10 w-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Hyper-Personalization</h3>
              <p className="text-neutral-300">
                Deliver individualized experiences with AI-driven product recommendations and dynamic content.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6"
            >
              <TrendingUp className="h-10 w-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Demand Forecasting</h3>
              <p className="text-neutral-300">
                Predict consumer demand with machine learning models trained on sales, trends, and external data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6"
            >
              <Users className="h-10 w-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer Intelligence</h3>
              <p className="text-neutral-300">
                Gain deep insights into customer behavior, preferences, and lifetime value with advanced analytics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6"
            >
              <Package className="h-10 w-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Inventory Optimization</h3>
              <p className="text-neutral-300">
                Reduce stockouts and overstock with AI-powered inventory management and replenishment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6"
            >
              <Smartphone className="h-10 w-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mobile Commerce</h3>
              <p className="text-neutral-300">
                Build seamless mobile shopping experiences with progressive web apps and native features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6"
            >
              <BarChart3 className="h-10 w-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pricing Optimization</h3>
              <p className="text-neutral-300">
                Dynamic pricing strategies that maximize revenue and competitiveness with AI-driven analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4" gradient="from-amber-400 to-orange-400">
              Industry Use Cases
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Real-world applications transforming consumer businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">E-Commerce Personalization</h3>
              <p className="text-neutral-300 mb-4">
                Increase conversions and average order value with AI-powered personalization.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Real-time product recommendations based on browsing behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Dynamic homepage and category page personalization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Personalized email campaigns and marketing automation</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Omnichannel Retail</h3>
              <p className="text-neutral-300 mb-4">
                Unify online and offline experiences with intelligent inventory and customer data.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Real-time inventory visibility across all channels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Buy online, pick up in store (BOPIS) optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Unified customer profiles and purchase history</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Customer Service Automation</h3>
              <p className="text-neutral-300 mb-4">
                Scale support operations with AI chatbots and intelligent routing.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>24/7 conversational AI for customer inquiries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Automated order tracking and returns processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Sentiment analysis and priority escalation</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-900/10 border border-amber-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Visual Search and Discovery</h3>
              <p className="text-neutral-300 mb-4">
                Enable customers to find products using images and visual similarity.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Image-based product search and recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>Style matching and visually similar recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span>AR try-on and product visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-2xl p-8 md:p-12 border border-amber-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Transform Your Consumer Business</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Partner with Hanzo to create exceptional customer experiences that drive loyalty and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-[var(--white)] px-8 py-6 text-lg">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-500/30 text-[var(--white)] hover:bg-amber-900/20 px-8 py-6 text-lg">
                  <Link to="/pricing">Contact Sales</Link>
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

export default IndustryConsumer;
