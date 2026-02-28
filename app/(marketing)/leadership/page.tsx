'use client'

import Link from "next/link";

import React from "react";
import { motion } from "framer-motion";

import { Button } from "@hanzo/ui";
import {
  Users,
  Briefcase,
  Database,
  BookOpen,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
  Award,
  Rocket
} from "lucide-react";
import { Toaster } from "@hanzo/ui";

const leaders = [
  {
    name: "Zach Kelling",
    title: "Founding CTO",
    bio: "Zach drives Hanzo's technical vision and engineering culture, architecting the AI infrastructure platform from the ground up.",
    tags: [
      { icon: Briefcase, text: "Founding Team", color: "#ffffff" },
      { icon: Database, text: "AI Infrastructure", color: "#f97316" },
      { icon: BookOpen, text: "Systems Architecture", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Dave Lorenzini",
    title: "Chief Strategy Officer",
    bio: "Dave leads Hanzo's strategic direction, bringing decades of experience in technology strategy and business development.",
    tags: [
      { icon: Briefcase, text: "Strategy & Growth", color: "#ffffff" },
      { icon: Database, text: "Business Development", color: "#f97316" },
      { icon: BookOpen, text: "Technology Strategy", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Michael Kelling",
    title: "President",
    bio: "As President, Michael leads Hanzo's mission to democratize access to AI with a focus on sustainable, responsible technology that empowers developers worldwide.",
    tags: [
      { icon: Briefcase, text: "Executive Leadership", color: "#ffffff" },
      { icon: Database, text: "AI Infrastructure", color: "#f97316" },
      { icon: BookOpen, text: "Startup Founder", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Antje Worring",
    title: "Chief Operating Officer",
    bio: "Antje oversees Hanzo's day-to-day operations, ensuring the company delivers on its promise of world-class AI infrastructure at scale.",
    tags: [
      { icon: Briefcase, text: "Operations", color: "#ffffff" },
      { icon: Database, text: "Scaling Organizations", color: "#f97316" },
      { icon: BookOpen, text: "Process Excellence", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Vincent Butta",
    title: "Chief Revenue Officer",
    bio: "Vincent leads Hanzo's revenue strategy and go-to-market efforts, driving enterprise adoption of the AI platform.",
    tags: [
      { icon: Briefcase, text: "Revenue & Sales", color: "#ffffff" },
      { icon: Database, text: "Enterprise Growth", color: "#f97316" },
      { icon: BookOpen, text: "Go-to-Market", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: 'Major "Dream" Williams',
    title: "Chief Visionary Officer",
    bio: "Dream shapes Hanzo's long-term vision, bridging the gap between cutting-edge AI research and real-world impact.",
    tags: [
      { icon: Briefcase, text: "Vision & Innovation", color: "#ffffff" },
      { icon: Database, text: "AI Strategy", color: "#f97316" },
      { icon: BookOpen, text: "Future Technologies", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Danielle Savage",
    title: "Chief Business Officer",
    bio: "Danielle leads Hanzo's business development and partnership strategy, expanding the platform's reach across industries.",
    tags: [
      { icon: Briefcase, text: "Business Development", color: "#ffffff" },
      { icon: Database, text: "Partnerships", color: "#f97316" },
      { icon: BookOpen, text: "Strategic Growth", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Ashley Kathleen Christie",
    title: "Chief of Staff",
    bio: "Ashley coordinates cross-functional initiatives and ensures organizational alignment across Hanzo's global operations.",
    tags: [
      { icon: Briefcase, text: "Operations", color: "#ffffff" },
      { icon: Database, text: "Cross-functional", color: "#f97316" },
      { icon: BookOpen, text: "Program Management", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Anastasia Zacharaoff",
    title: "VP Engineering",
    bio: "Anastasia leads engineering teams building Hanzo's core AI platform, driving technical excellence and innovation.",
    tags: [
      { icon: Briefcase, text: "Engineering Leadership", color: "#ffffff" },
      { icon: Database, text: "Platform Engineering", color: "#f97316" },
      { icon: BookOpen, text: "Technical Management", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Rob Ruiz",
    title: "VP Strategy",
    bio: "Rob drives Hanzo's strategic planning and market positioning, identifying opportunities for growth and differentiation.",
    tags: [
      { icon: Briefcase, text: "Strategy", color: "#ffffff" },
      { icon: Database, text: "Market Analysis", color: "#f97316" },
      { icon: BookOpen, text: "Strategic Planning", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Marcus White",
    title: "VP Research",
    bio: "Marcus leads Hanzo's research initiatives, pushing the boundaries of AI and machine learning capabilities.",
    tags: [
      { icon: Briefcase, text: "Research", color: "#ffffff" },
      { icon: Database, text: "AI/ML Research", color: "#f97316" },
      { icon: BookOpen, text: "Frontier Models", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Jackson Mori",
    title: "VP Engineering",
    bio: "Jackson leads engineering efforts across Hanzo's product portfolio, ensuring reliable and scalable AI infrastructure.",
    tags: [
      { icon: Briefcase, text: "Engineering", color: "#ffffff" },
      { icon: Database, text: "Product Engineering", color: "#f97316" },
      { icon: BookOpen, text: "Scalable Systems", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Ole Brereton",
    title: "Executive VP",
    bio: "Ole provides executive leadership across Hanzo's operations, supporting growth and organizational development.",
    tags: [
      { icon: Briefcase, text: "Executive Leadership", color: "#ffffff" },
      { icon: Database, text: "Operations", color: "#f97316" },
      { icon: BookOpen, text: "Organizational Growth", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  }
];

const stats = [
  { value: "2017", label: "Techstars" },
  { value: "700+", label: "Open Source Repos" },
  { value: "6", label: "GitHub Orgs" },
  { value: "MIT/Apache", label: "Open License" }
];

const Leadership = () => {
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
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, #ffffff 0%, transparent 70%)`,
                filter: "blur(80px)",
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
                <Award className="w-3.5 h-3.5" />
                Techstars
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-foreground">Our</span>
                <br />
                <span className="text-muted-foreground">Leadership.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto"
              >
                Meet the team behind Hanzo AI, dedicated to democratizing access to
                Amazon-level AI infrastructure for everyone.
              </motion.p>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-secondary/50 border border-border rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Cards */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-neutral-900/30">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary/50 border border-border rounded-xl p-8 hover:border-white/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div
                      className="w-24 h-24 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}
                    >
                      <Users className="w-12 h-12" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-1">{leader.name}</h2>
                      <p className="text-muted-foreground font-medium mb-4">{leader.title}</p>
                      <p className="text-foreground/80">{leader.bio}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {leader.tags.map((tag) => {
                      const Icon = tag.icon;
                      return (
                        <div
                          key={tag.text}
                          className="flex items-center text-sm px-3 py-1 bg-neutral-800/50 rounded-full border border-border"
                        >
                          <Icon className="h-4 w-4 mr-2" style={{ color: tag.color }} />
                          <span className="text-foreground/80">{tag.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={leader.social.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors border border-border"
                    >
                      <Linkedin className="h-5 w-5 text-foreground/80" />
                    </a>
                    <a
                      href={leader.social.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors border border-border"
                    >
                      <Twitter className="h-5 w-5 text-foreground/80" />
                    </a>
                    <a
                      href={leader.social.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors border border-border"
                    >
                      <Github className="h-5 w-5 text-foreground/80" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Hanzo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Innovation First",
                  description: "We push boundaries and challenge the status quo to create breakthrough AI technology."
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  description: "We believe in open collaboration and building technology that empowers developers worldwide."
                },
                {
                  icon: Award,
                  title: "Excellence Always",
                  description: "We maintain the highest standards in everything from code quality to customer support."
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-secondary/50 border border-border rounded-xl p-6 hover:border-white/30 transition-colors text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: "color-mix(in srgb, var(--primary) 10%, transparent)" }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-background relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Join Our Team
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              We're always looking for talented individuals who are passionate about AI
              and building the future of technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/careers"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base bg-primary text-primary-foreground"

              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-secondary text-base text-foreground"
              >
                Learn About Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      
      <Toaster />
    </div>
  );
};

export default Leadership;
