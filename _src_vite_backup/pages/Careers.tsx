import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Globe,
  Clock,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  Heart,
  Zap,
  Coffee,
  Laptop
} from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const BRAND_COLOR = "#fd4444";

const jobOpenings = [
  {
    title: "AI/ML Research Engineer",
    location: "Remote / SF",
    type: "Full-time",
    department: "AI Research",
    description: "Work on foundational models, fine-tuning, and novel architectures. Experience with transformers, RLHF, and distributed training required."
  },
  {
    title: "Compiler Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description: "Build high-performance inference engines and model compilers. Experience with LLVM, MLIR, or similar frameworks preferred."
  },
  {
    title: "MCP Protocol Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Infrastructure",
    description: "Design and implement Model Context Protocol servers and tooling. Shape the future of AI agent infrastructure."
  },
  {
    title: "Cryptography Engineer (ZKP)",
    location: "Remote",
    type: "Full-time",
    department: "Blockchain",
    description: "Implement zero-knowledge proofs for AI verification and on-chain compute. Experience with SNARKs/STARKs required."
  },
  {
    title: "Quantum Computing Researcher",
    location: "Remote / Research",
    type: "Full-time",
    department: "Research",
    description: "Explore quantum ML algorithms and post-quantum cryptography. PhD or equivalent research experience preferred."
  },
  {
    title: "Robotics Systems Engineer",
    location: "SF Bay Area",
    type: "Full-time",
    department: "Robotics",
    description: "Build AI systems for real-time robotic control. Experience with ROS, computer vision, and embedded systems required."
  },
  {
    title: "Senior Backend Engineer (Go/Rust)",
    location: "Remote",
    type: "Full-time",
    department: "Platform",
    description: "Build scalable, high-performance backend services for our AI platform. Experience with distributed systems required."
  },
  {
    title: "Product Designer",
    location: "Remote / SF",
    type: "Full-time",
    department: "Design",
    description: "Design beautiful, intuitive interfaces for AI products. Experience with developer tools and data visualization a plus."
  }
];

const benefits = [
  {
    icon: Globe,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with our distributed team."
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Set your own schedule and work when you're most productive."
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Work with talented individuals from diverse backgrounds."
  },
  {
    icon: Sparkles,
    title: "Cutting-Edge Tech",
    description: "Access to the latest AI technologies and resources."
  }
];

const hiringSteps = [
  { step: "1", title: "Application Review", description: "We review your resume and application materials" },
  { step: "2", title: "Initial Interview", description: "Get to know you and your experience" },
  { step: "3", title: "Technical Assessment", description: "Showcase your skills (no whiteboarding)" },
  { step: "4", title: "Final Interview", description: "Meet the team and discuss next steps" }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Careers - Hanzo AI</title>
        <meta name="description" content="Join the Hanzo AI team and help build the future of AI. Explore current job openings and benefits." />
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
            <div
              className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, #fd4444 0%, transparent 70%)`,
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
                <Heart className="w-3.5 h-3.5" />
                Join Our Team
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.1] mb-6"
              >
                <span className="text-foreground">Build the future</span>
                <br />
                <span className="text-muted-foreground">of AI.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto"
              >
                Join a team passionate about democratizing access to AI and creating technology
                that empowers developers worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href="#open-positions"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-accent text-sm text-foreground"
                >
                  Learn About Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 md:px-8 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Benefits & Perks</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We take care of our team so they can focus on building amazing things.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-[#fd4444]/30 transition-colors"
                  >
                    <div
                      className="w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: BRAND_COLOR }} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find your next opportunity and help us shape the future of AI.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-[#fd4444]/30 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: `${BRAND_COLOR}15` }}
                    >
                      <Briefcase className="h-6 w-6" style={{ color: BRAND_COLOR }} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#fd4444] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-3">
                        <span className="inline-flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" /> {job.location}
                        </span>
                        <span className="inline-flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" /> {job.type}
                        </span>
                        <span className="inline-flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" /> {job.department}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                      <button
                        className="inline-flex items-center px-4 py-2 rounded-full font-medium transition-all hover:opacity-90 text-sm"
                        style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-muted-foreground mb-4">Don't see a position that fits your skills?</p>
              <button
                className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-accent text-sm text-foreground"
              >
                Submit Open Application
              </button>
            </motion.div>
          </div>
        </section>

        {/* Hiring Process Section */}
        <section className="py-16 px-4 md:px-8 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Hiring Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We've designed our process to be straightforward, respectful of your time,
                and focused on finding the right match.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {hiringSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${BRAND_COLOR}20` }}
                  >
                    <span className="font-bold" style={{ color: BRAND_COLOR }}>{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#fd4444]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#fd4444]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Ready to join us?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              We're always looking for talented individuals who are passionate about
              pushing the boundaries of what's possible with AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="#open-positions"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all hover:opacity-90 text-base"
                style={{ backgroundColor: BRAND_COLOR, color: "#ffffff" }}
              >
                Browse Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:careers@hanzo.ai"
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-colors border border-border bg-transparent hover:bg-accent text-base text-foreground"
              >
                careers@hanzo.ai
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default Careers;
