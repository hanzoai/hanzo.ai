'use client'

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, MessageCircle } from "lucide-react";

const OpenSource = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 to-neutral-800/50 rounded-xl p-8 md:p-12 border border-border text-center"
        >
          <div className="flex justify-center mb-6">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
            >
              <Github className="w-8 h-8" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Open Source
          </h2>
          <p className="text-xl text-foreground/80 mb-6">
            Inspect, control, contribute
          </p>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The complete plugin is open-source and licensed under Apache-2.0.
            You can see, control, and modify how Hanzo works. Hanzo does not
            have an auto model, so you always know exactly what model is being
            used. No silent context compression or cut-off. You can see the
            context window size on each request, along with the full prompts.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://github.com/hanzoai/hanzo-dev"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm bg-primary text-primary-foreground"

            >
              <Github className="mr-2 h-4 w-4" />
              Star on GitHub
            </a>
            <a
              href="https://discord.gg/hanzo"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-accent text-sm text-foreground"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Join Discord
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Join our community on Discord and contribute to help shape Hanzo's
            future.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OpenSource;
