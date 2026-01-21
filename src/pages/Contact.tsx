import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Mail,
  MapPin,
  MessageSquare,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Building2,
  Zap,
  Users,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BRAND_COLOR = "#fd4444";

const CONTACT_OPTIONS = [
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a 30-minute call with our team to discuss your needs.",
    action: "Book Now",
    href: "#schedule"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a message and we'll respond within 24 hours.",
    action: "enterprise@hanzo.ai",
    href: "mailto:enterprise@hanzo.ai"
  },
  {
    icon: MessageSquare,
    title: "Join Discord",
    description: "Get help from the community and our developer advocates.",
    action: "Join Community",
    href: "https://discord.gg/hanzo"
  }
];

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
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Contact Sales - Hanzo AI</title>
        <meta
          name="description"
          content="Get in touch with the Hanzo AI team. Schedule a call, request a demo, or learn about enterprise solutions."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
              style={{
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
                filter: "blur(100px)",
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Talk to Sales
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-white">Let's build</span>
                <br />
                <span className="text-neutral-400">something great.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                Whether you're exploring AI for the first time or scaling enterprise solutions,
                our team is here to help you succeed.
              </motion.p>

              {/* Contact Options */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
              >
                {CONTACT_OPTIONS.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <a
                      key={option.title}
                      href={option.href}
                      className="group p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-[#fd4444]/50 hover:bg-neutral-900 transition-all"
                    >
                      <Icon className="w-8 h-8 text-neutral-400 group-hover:text-[#fd4444] transition-colors mb-4" />
                      <h3 className="text-lg font-semibold text-white mb-2">{option.title}</h3>
                      <p className="text-sm text-neutral-400 mb-4">{option.description}</p>
                      <span className="inline-flex items-center text-sm font-medium text-[#fd4444]">
                        {option.action}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cal.com Embed Section */}
        <section id="schedule" className="py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Schedule a Call
              </h2>
              <p className="text-neutral-400">
                Book a time that works for you. We'll discuss your needs and how Hanzo can help.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-neutral-800 overflow-hidden bg-neutral-900/50"
            >
              <iframe
                src="https://cal.com/hanzo?embed=true&theme=dark"
                width="100%"
                height="600"
                frameBorder="0"
                className="w-full"
                title="Schedule a call with Hanzo"
              />
            </motion.div>
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

        {/* Contact Info & Social */}
        <section className="py-16 px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/50"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-neutral-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <a href="mailto:enterprise@hanzo.ai" className="text-white hover:text-[#fd4444] transition-colors">
                        enterprise@hanzo.ai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-neutral-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-neutral-500">Location</p>
                      <p className="text-white">Kansas City, MO</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-xl border border-neutral-800 bg-neutral-900/50"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Connect With Us</h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/hanzoai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-neutral-400 group-hover:text-white mr-3" />
                    <span className="text-neutral-300 group-hover:text-white">GitHub</span>
                  </a>
                  <a
                    href="https://twitter.com/hanloai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors group"
                  >
                    <Twitter className="w-5 h-5 text-neutral-400 group-hover:text-white mr-3" />
                    <span className="text-neutral-300 group-hover:text-white">Twitter</span>
                  </a>
                  <a
                    href="https://linkedin.com/company/hanzo-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-white mr-3" />
                    <span className="text-neutral-300 group-hover:text-white">LinkedIn</span>
                  </a>
                  <a
                    href="https://discord.gg/hanzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-neutral-800/50 hover:bg-neutral-800 transition-colors group"
                  >
                    <MessageSquare className="w-5 h-5 text-neutral-400 group-hover:text-white mr-3" />
                    <span className="text-neutral-300 group-hover:text-white">Discord</span>
                  </a>
                </div>
              </motion.div>
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
                  <a href="https://hanzo.ai/signup">
                    Start Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-neutral-700 text-white hover:bg-neutral-800"
                  asChild
                >
                  <a href="/docs">
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
