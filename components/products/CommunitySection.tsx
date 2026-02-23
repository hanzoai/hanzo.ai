'use client'

import { motion } from "framer-motion";
import { ExternalLink, Github, MessageCircle, Users, BookOpen, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";

interface CommunityLink {
  type: "discord" | "github" | "docs" | "discussions" | "twitter" | "slack" | "events" | "forum";
  url: string;
  label?: string;
  internal?: boolean;
}

interface CommunitySectionProps {
  productName: string;
  links: CommunityLink[];
  contributors?: number;
  stars?: string;
}

const iconMap = {
  discord: MessageCircle,
  github: Github,
  docs: BookOpen,
  discussions: MessageSquare,
  events: Calendar,
  forum: Users,
  twitter: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  slack: () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  ),
};

const labelMap = {
  discord: "Join Discord",
  github: "Star on GitHub",
  docs: "Read Docs",
  discussions: "Discuss on GitHub",
  events: "Meetups & Events",
  forum: "Community Forum",
  twitter: "Follow on X",
  slack: "Join Slack",
};

const colorMap = {
  discord: "hover:bg-primary/20 hover:border-white/50",
  github: "hover:bg-neutral-700",
  docs: "hover:bg-primary/10 hover:border-border",
  discussions: "hover:bg-primary/10 hover:border-border",
  events: "hover:bg-primary/10 hover:border-border",
  forum: "hover:bg-primary/10 hover:border-border",
  twitter: "hover:bg-neutral-700",
  slack: "hover:bg-primary/10 hover:border-border",
};

export function CommunitySection({ productName, links, contributors, stars }: CommunitySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-5 h-5 text-foreground" />
          <span className="text-sm font-medium text-foreground uppercase tracking-wider">
            Community
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Join the {productName} Community
        </h2>
        <p className="text-muted-foreground mb-8">
          Get help, share ideas, and contribute to the project
        </p>

        {/* Stats */}
        {(contributors || stars) && (
          <div className="flex gap-6 mb-8">
            {stars && (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">{stars}</span>
                <span className="text-muted-foreground">GitHub Stars</span>
              </div>
            )}
            {contributors && (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">{contributors}+</span>
                <span className="text-muted-foreground">Contributors</span>
              </div>
            )}
          </div>
        )}

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, index) => {
            const Icon = iconMap[link.type];
            const label = link.label || labelMap[link.type];
            const colorClass = colorMap[link.type];

            const content = (
              <>
                <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                  {typeof Icon === "function" ? <Icon /> : <Icon className="w-5 h-5 text-foreground/80" />}
                </div>
                <div className="flex-1">
                  <span className="font-medium text-foreground">{label}</span>
                </div>
                {!link.internal && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
              </>
            );

            if (link.internal) {
              return (
                <motion.div
                  key={link.type}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.url || "#"}
                    className={`flex items-center gap-3 p-4 bg-secondary/50 border border-border rounded-xl transition-all ${colorClass}`}
                  >
                    {content}
                  </Link>
                </motion.div>
              );
            }

            return (
              <motion.a
                key={link.type}
                href={link.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center gap-3 p-4 bg-secondary/50 border border-border rounded-xl transition-all ${colorClass}`}
              >
                {content}
              </motion.a>
            );
          })}
        </div>

        {/* Contribute CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-white/10 to-transparent border border-border rounded-xl">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Want to Contribute?
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            We welcome contributions of all kinds: bug reports, feature requests, documentation improvements, and code contributions.
          </p>
          <a
            href={links.find(l => l.type === "github")?.url + "/blob/main/CONTRIBUTING.md" || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 text-sm font-medium transition-colors"
          >
            Read our Contributing Guide
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default CommunitySection;
