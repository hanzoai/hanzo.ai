
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Globe, Clock, MapPin, Users, Sparkles } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";
import { Toaster } from "@/components/ui/toaster";

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
    icon: <Globe className="h-6 w-6 text-purple-400" />,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with our distributed team."
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-400" />,
    title: "Flexible Hours",
    description: "Set your own schedule and work when you're most productive."
  },
  {
    icon: <Users className="h-6 w-6 text-green-400" />,
    title: "Collaborative Environment",
    description: "Work with talented individuals from diverse backgrounds."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-amber-400" />,
    title: "Cutting-Edge Tech",
    description: "Access to the latest AI technologies and resources."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-[var(--black)]">
      <Helmet>
        <title>Careers - Hanzo AI</title>
        <meta name="description" content="Join the Hanzo AI team and help build the future of AI. Explore current job openings and benefits." />
      </Helmet>
      <Navbar />
      <main>
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple-900/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
                Join Our Team
              </div>
              <ChromeText 
                as="h1" 
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Build the Future of AI
              </ChromeText>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Join a team passionate about democratizing access to AI and creating technology that empowers developers worldwide.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-purple-900/20">
                        <Briefcase className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <span className="inline-flex items-center text-sm text-neutral-400">
                            <MapPin className="h-4 w-4 mr-1" /> {job.location}
                          </span>
                          <span className="inline-flex items-center text-sm text-neutral-400">
                            <Clock className="h-4 w-4 mr-1" /> {job.type}
                          </span>
                          <span className="inline-flex items-center text-sm text-neutral-400">
                            <Users className="h-4 w-4 mr-1" /> {job.department}
                          </span>
                        </div>
                        <p className="text-neutral-300 mb-4">{job.description}</p>
                        <Button variant="outline" className="text-[var(--white)] border-white/20 bg-[var(--white)]/5 hover:bg-[var(--white)]/10">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-neutral-400 mb-4">Don't see a position that fits your skills?</p>
                <Button 
                  variant="outline" 
                  className="text-[var(--white)] border-white/20 bg-[var(--white)]/5 hover:bg-[var(--white)]/10"
                >
                  Submit Open Application
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-24"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Benefits & Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                    className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-full bg-gray-800/50 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-neutral-400">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center bg-gray-900/20 border border-gray-800 rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4">Our Hiring Process</h2>
              <p className="text-neutral-300 mb-6 max-w-3xl mx-auto">
                We've designed our hiring process to be straightforward, respectful of your time, and focused on finding the right match for both you and Hanzo.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mb-3 mx-auto">
                    <span className="text-[var(--white)] font-medium">1</span>
                  </div>
                  <h3 className="font-medium mb-1">Application Review</h3>
                  <p className="text-sm text-neutral-400">We review your resume and application materials</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mb-3 mx-auto">
                    <span className="text-[var(--white)] font-medium">2</span>
                  </div>
                  <h3 className="font-medium mb-1">Initial Interview</h3>
                  <p className="text-sm text-neutral-400">Get to know you and your experience</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mb-3 mx-auto">
                    <span className="text-[var(--white)] font-medium">3</span>
                  </div>
                  <h3 className="font-medium mb-1">Technical Assessment</h3>
                  <p className="text-sm text-neutral-400">Showcase your skills (no whiteboarding)</p>
                </div>
                <div className="p-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center mb-3 mx-auto">
                    <span className="text-[var(--white)] font-medium">4</span>
                  </div>
                  <h3 className="font-medium mb-1">Final Interview</h3>
                  <p className="text-sm text-neutral-400">Meet the team and discuss next steps</p>
                </div>
              </div>
              <Button 
                className="bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400"
              >
                <a href="#open-positions">Browse Open Positions</a>
              </Button>
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
