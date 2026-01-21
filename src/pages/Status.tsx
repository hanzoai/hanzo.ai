import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Server,
  Activity,
  ArrowRight,
  Clock,
  ExternalLink,
  Bell,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BRAND_COLOR = "#10b981"; // Green for status page

const services = [
  { name: "API Gateway", status: "operational", uptime: "99.99%", latency: "45ms" },
  { name: "Authentication", status: "operational", uptime: "99.98%", latency: "23ms" },
  { name: "LLM Inference", status: "operational", uptime: "99.95%", latency: "120ms" },
  { name: "Vector Database", status: "operational", uptime: "99.99%", latency: "12ms" },
  { name: "Storage", status: "operational", uptime: "99.99%", latency: "8ms" },
  { name: "Edge CDN", status: "operational", uptime: "100%", latency: "15ms" },
  { name: "Monitoring", status: "operational", uptime: "99.99%", latency: "5ms" },
];

const regions = [
  { name: "Americas", code: "americas", status: "operational" },
  { name: "Europe", code: "europe", status: "operational" },
  { name: "Asia Pacific", code: "apac", status: "operational" },
  { name: "Edge Network", code: "edge", status: "operational" },
];

const StatusPage = () => {
  const allOperational = services.every((s) => s.status === "operational");

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>System Status - Hanzo AI</title>
        <meta
          name="description"
          content="Check the current status of Hanzo AI services. Real-time uptime monitoring and incident reports."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
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
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                  allOperational
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                {allOperational ? "All Systems Operational" : "Partial Outage"}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-white">System</span>
                <br />
                <span className="text-neutral-400">Status.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                Real-time status of Hanzo AI infrastructure and services.
                Subscribe to updates or check our incident history.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <button className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all text-sm bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500/30">
                  <Bell className="w-4 h-4 mr-2" />
                  Subscribe to Updates
                </button>
                <a
                  href="https://docs.hanzo.ai/status"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-sm text-white"
                >
                  API Status Endpoint
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Status */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Services</h2>
              <p className="text-neutral-400">Current status of all Hanzo AI services</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/80 border border-neutral-800 rounded-xl overflow-hidden"
            >
              <div className="divide-y divide-neutral-800">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-6 py-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Server className="h-5 w-5 text-neutral-500" />
                      <span className="font-medium text-white">{service.name}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-sm text-neutral-500 hidden sm:block">
                        {service.latency} avg
                      </span>
                      <span className="text-sm text-neutral-400 hidden md:block">
                        {service.uptime} uptime
                      </span>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-400">Operational</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Regions Status */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Global Regions</h2>
              <p className="text-neutral-400">Status across all deployment regions</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {regions.map((region, index) => (
                <motion.div
                  key={region.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-5 w-5 text-neutral-500" />
                    <span className="font-medium text-white">{region.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-500 font-mono">{region.code}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs text-green-400">Active</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Incidents */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-2">Recent Incidents</h2>
              <p className="text-neutral-400">Incident history for the past 90 days</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-8 text-center"
            >
              <Activity className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-white mb-2">No Recent Incidents</h3>
              <p className="text-neutral-400">
                All systems have been operating normally for the past 90 days.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-black relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Need help with an issue?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
            >
              Our support team is available 24/7 to help you resolve any issues.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-green-500 text-white"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="https://docs.hanzo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white"
              >
                View Documentation
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StatusPage;
