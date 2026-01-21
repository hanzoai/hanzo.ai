import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  MapPin,
  MessageSquare,
  Github,
  Linkedin,
  ArrowRight,
  Building2,
  Zap,
  Users,
  Clock,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#fd4444";

const ENTERPRISE_BENEFITS = [
  {
    icon: Building2,
    title: "Custom AI Solutions",
    description: "Work with our team to build AI solutions tailored to your business needs."
  },
  {
    icon: Zap,
    title: "Dedicated Infrastructure",
    description: "Private cloud deployments with dedicated compute and priority support."
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Direct access to our AI engineers and solution architects."
  },
  {
    icon: Clock,
    title: "Priority Support",
    description: "24/7 enterprise support with guaranteed response times."
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Contact Sales - Hanzo AI</title>
        <meta
          name="description"
          content="Get in touch with the Hanzo AI team. Schedule a call, request a demo, or learn about enterprise solutions."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section - Compact */}
        <section className="relative pt-24 pb-8 px-4 md:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4"
            >
              <span className="text-white">Talk to Sales</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto"
            >
              Book a call to discuss your needs. We'll help you find the right solution for your team.
            </motion.p>
          </div>
        </section>

        {/* Cal.com Embed Section - At Top */}
        <section className="pb-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900/50"
            >
              <iframe
                src="https://cal.com/hanzo?embed=true&theme=dark"
                width="100%"
                height="650"
                frameBorder="0"
                className="w-full"
                title="Schedule a call with Hanzo"
              />
            </motion.div>
          </div>
        </section>

        {/* Quick Contact Options */}
        <section className="py-12 px-4 md:px-8 lg:px-12 border-t border-neutral-800/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <motion.a
                href="mailto:enterprise@hanzo.ai"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center group-hover:bg-[#fd4444]/20 transition-colors">
                  <Mail className="w-5 h-5 text-neutral-400 group-hover:text-[#fd4444] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="text-white font-medium">enterprise@hanzo.ai</p>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900/50"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Location</p>
                  <p className="text-white font-medium">995 Market St, San Francisco</p>
                </div>
              </motion.div>

              {/* Discord */}
              <motion.a
                href="https://discord.gg/hanzo"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-center gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center group-hover:bg-[#5865F2]/20 transition-colors">
                  <MessageSquare className="w-5 h-5 text-neutral-400 group-hover:text-[#5865F2] transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Community</p>
                  <p className="text-white font-medium">Join Discord</p>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-600 ml-auto" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Enterprise Benefits */}
        <section className="py-16 px-4 md:px-8 lg:px-12 bg-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Enterprise Solutions
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Transform your business with our enterprise AI platform featuring 100+ models,
                dedicated infrastructure, and expert support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENTERPRISE_BENEFITS.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/50"
                  >
                    <Icon className="w-8 h-8 text-[#fd4444] mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-sm text-neutral-400">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-xl font-semibold text-white mb-2">Connect With Us</h2>
              <p className="text-neutral-500 text-sm">Follow us for updates and announcements</p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/hanzoai" },
                { icon: () => (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ), label: "X / Twitter", href: "https://x.com/hanzoai" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/company/hanzoai" },
                { icon: MessageSquare, label: "Discord", href: "https://discord.gg/hanzo" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-700 transition-all text-neutral-300 hover:text-white"
                  >
                    {typeof Icon === "function" ? <Icon /> : <Icon className="w-5 h-5" />}
                    <span className="text-sm font-medium">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-12 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-900/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                Start building with Hanzo today. Free tier available with no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-[#fd4444] text-white hover:bg-[#fd4444]/90"
                  asChild
                >
                  <a href="https://cloud.hanzo.ai/signup">
                    Start Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-white hover:bg-neutral-800"
                  asChild
                >
                  <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                    View Documentation
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
