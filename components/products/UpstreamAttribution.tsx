'use client'

import { motion } from "framer-motion";
import { ExternalLink, GitFork, Heart, Star } from "lucide-react";

interface UpstreamProject {
  name: string;
  description: string;
  url: string;
  github: string;
  logo?: string;
  license?: string;
  stars?: string;
}

interface UpstreamAttributionProps {
  upstream: UpstreamProject;
  productName: string;
}

export function UpstreamAttribution({ upstream, productName }: UpstreamAttributionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8 border-t border-neutral-800"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <GitFork className="w-5 h-5 text-white" />
          <span className="text-sm font-medium text-neutral-400 uppercase tracking-wider">
            Built on Open Source
          </span>
        </div>

        <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-950 border border-neutral-800 rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Logo/Icon */}
            <div className="flex-shrink-0">
              {upstream.logo ? (
                <img
                  src={upstream.logo}
                  alt={upstream.name}
                  className="w-16 h-16 rounded-lg"
                />
              ) : (
                <div className="w-16 h-16 rounded-lg bg-neutral-800 flex items-center justify-center">
                  <GitFork className="w-8 h-8 text-neutral-400" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-white">
                  Powered by {upstream.name}
                </h3>
                {upstream.stars && (
                  <span className="inline-flex items-center gap-1 text-sm text-white/60">
                    <Star className="w-4 h-4 fill-current" />
                    {upstream.stars}
                  </span>
                )}
              </div>

              <p className="text-neutral-400 mb-4">
                {productName} is built on top of {upstream.name}, an open-source project.
                {upstream.description}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={upstream.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg text-sm font-medium text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>

                <a
                  href={upstream.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-neutral-800 border border-neutral-700 rounded-lg text-sm font-medium text-neutral-300 transition-colors"
                >
                  Visit {upstream.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {upstream.license && (
                <p className="mt-4 text-xs text-neutral-500">
                  Licensed under {upstream.license}
                </p>
              )}
            </div>
          </div>

          {/* Thank you message */}
          <div className="mt-6 pt-6 border-t border-neutral-800">
            <p className="flex items-center gap-2 text-sm text-neutral-400">
              <Heart className="w-4 h-4 text-white" />
              We're grateful to the {upstream.name} maintainers and community for their incredible work.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default UpstreamAttribution;
