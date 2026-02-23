'use client'

import React from "react";
import { motion } from "framer-motion";

import { Github, Star, GitFork, Heart, ArrowRight, ExternalLink, Code, Users } from "lucide-react";
import OSSCatalog from "@/components/oss/OSSCatalog";

const stats = [
  { label: "Open Source Projects", value: "260+", icon: Code },
  { label: "GitHub Stars", value: "50K+", icon: Star },
  { label: "Contributors", value: "500+", icon: Users },
  { label: "Forks", value: "10K+", icon: GitFork },
];

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-15"
              style={{
                background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
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
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
                style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)", color: "var(--primary)" }}
              >
                <Github className="w-3.5 h-3.5" />
                Open Source First
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-foreground">Building in the</span>
                <br />
                <span className="text-muted-foreground">open.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                We believe in the power of open source. Our tools, libraries, and infrastructure
                are freely available for the developer community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-12"
              >
                <a
                  href="https://github.com/hanzoai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
                <a
                  href="https://github.com/hanzoai/hanzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-sm text-foreground"
                >
                  <Star className="w-4 h-4 mr-2" />
                  Star Our Repos
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-secondary/50 border border-border rounded-xl p-4"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground mb-2 mx-auto" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* OSS Catalog */}
        <OSSCatalog />

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-background relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-primary/10 text-foreground/70"
            >
              <Heart className="w-3.5 h-3.5" />
              Join the Community
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Contribute to open source
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              We welcome contributions of all kinds - code, documentation, bug reports, and feature requests.
              Join our community of developers building the future of AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="https://github.com/hanzoai/hanzo/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-primary text-primary-foreground"

              >
                Start Contributing
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://discord.gg/hanzo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-base text-foreground"
              >
                Join Discord
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      
    </div>
  );
};

export default OpenSource;
