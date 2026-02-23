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

const BRAND_COLOR = "#ffffff";

const leaders = [
  {
    name: "Michael Kelling",
    title: "Chief Executive Officer",
    bio: "As CEO, Michael leads Hanzo's mission to democratize access to AI with a focus on sustainable, responsible technology that empowers developers worldwide.",
    tags: [
      { icon: Briefcase, text: "20+ years experience", color: "#ffffff" },
      { icon: Database, text: "AI Infrastructure", color: "#f97316" },
      { icon: BookOpen, text: "3x Startup Founder", color: "#22c55e" }
    ],
    social: {
      linkedin: "https://linkedin.com/company/hanzo-ai",
      twitter: "https://twitter.com/hanzoai",
      github: "https://github.com/hanzoai"
    }
  },
  {
    name: "Sarah Chen",
    title: "Chief Technology Officer",
    bio: "Sarah drives Hanzo's technical vision and engineering culture, bringing expertise from her background at leading AI research labs and tech companies.",
    tags: [
      { icon: Briefcase, text: "15+ years experience", color: "#ffffff" },
      { icon: Database, text: "ML Systems", color: "#f97316" },
      { icon: BookOpen, text: "Ph.D. in Computer Science", color: "#22c55e" }
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
  { value: "100+", label: "Team Members" },
  { value: "30+", label: "Countries" },
  { value: "260+", label: "Open Source Projects" }
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
                background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
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
                style={{ backgroundColor: `${BRAND_COLOR}20`, color: BRAND_COLOR }}
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
                <span className="text-white">Our</span>
                <br />
                <span className="text-neutral-400">Leadership.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-neutral-400 leading-relaxed mb-8 max-w-3xl mx-auto"
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
                    className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-neutral-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Cards */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-neutral-900/30">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 hover:border-[#ffffff]/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                    <div
                      className="w-24 h-24 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Users className="w-12 h-12" style={{ color: BRAND_COLOR }} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">{leader.name}</h2>
                      <p className="text-neutral-400 font-medium mb-4">{leader.title}</p>
                      <p className="text-neutral-300">{leader.bio}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {leader.tags.map((tag) => {
                      const Icon = tag.icon;
                      return (
                        <div
                          key={tag.text}
                          className="flex items-center text-sm px-3 py-1 bg-neutral-800/50 rounded-full border border-neutral-700"
                        >
                          <Icon className="h-4 w-4 mr-2" style={{ color: tag.color }} />
                          <span className="text-neutral-300">{tag.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={leader.social.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors border border-neutral-700"
                    >
                      <Linkedin className="h-5 w-5 text-neutral-300" />
                    </a>
                    <a
                      href={leader.social.twitter || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors border border-neutral-700"
                    >
                      <Twitter className="h-5 w-5 text-neutral-300" />
                    </a>
                    <a
                      href={leader.social.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 transition-colors border border-neutral-700"
                    >
                      <Github className="h-5 w-5 text-neutral-300" />
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
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
                    className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-[#ffffff]/30 transition-colors text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-sm text-neutral-400">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/30 to-black relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ffffff]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#ffffff]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Join Our Team
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto"
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
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-neutral-700 bg-transparent hover:bg-neutral-900 text-base text-white"
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
