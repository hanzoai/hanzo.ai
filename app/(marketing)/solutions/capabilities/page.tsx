'use client'

import Link from 'next/link'

import React, { useState } from "react";
import { solutions } from "@/lib/constants/navigation";
import { 
  ChevronRight, 
  FileText, 
  ExternalLink, 
  Mail, 
  Phone, 
  Users, 
  BookOpen, 
  Link as LinkIcon,
  Shield,
  CheckCircle,
  ArrowRight,
  Award
} from "lucide-react";
import { getIcon } from "@/lib/constants/iconMappings";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/zen/SectionHeader";
import { cloudServiceData } from "@/components/index3/cloud-services/cloudServiceData";
import ChromeText from "@/components/ui/chrome-text";

const SolutionCapabilities: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, number>>({});
  
  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: (prev[title] || 8) + 8 // Show 8 more items each time
    }));
  };
  
  // Get capabilities and industries from the solutions array
  const capabilities = solutions.find(s => s.title === "Capabilities")?.items || [];

  const renderCapabilityGrid = () => {
    const displayCount = expandedSections["Capabilities"] || 8;
    const displayItems = capabilities.slice(0, displayCount);
    const hasMore = capabilities.length > displayCount;

    return (
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence initial={false}>
            {displayItems.map((item, index) => {
              const Icon = getIcon(item);
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative group rounded-xl border border-gray-800 bg-[var(--black)]/50 p-6 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                      <ChevronRight className="h-5 w-5 text-neutral-500 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                      {item}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      Our specialists deliver comprehensive {item.toLowerCase()} solutions tailored to your 
                      organization's unique challenges and goals.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Link href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs flex items-center text-white hover:text-white/70">
                        <LinkIcon className="h-3 w-3 mr-1" /> Learn more
                      </Link>
                      <a href="#" className="text-xs flex items-center text-white hover:text-white/70">
                        <FileText className="h-3 w-3 mr-1" /> Case study
                      </a>
                      <a href="#" className="text-xs flex items-center text-white/70 hover:text-white">
                        <BookOpen className="h-3 w-3 mr-1" /> White paper
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        {hasMore && (
          <motion.div 
            className="text-center mt-8"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => toggleSection("Capabilities")}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-white text-white hover:bg-white/10 transition-colors"
            >
              View More Capabilities
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  const renderCaseStudy = (title: string, industry: string, description: string, image: string = "") => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-gradient-to-br from-gray-900/70 to-black/80 rounded-xl border border-gray-800 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-3 p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-neutral-400">Case Study</span>
            <span className="w-1 h-1 rounded-full bg-gray-500"></span>
            <span className="text-xs px-2 py-1 bg-white/20 rounded-full text-white border border-white/30">
              {industry}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[var(--white)]">{title}</h3>
          <p className="text-neutral-300 mb-6">{description}</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
              <p className="text-neutral-400">Reduced development time by 40% through AI-powered automation</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
              <p className="text-neutral-400">Improved customer satisfaction scores by 35% with new digital experiences</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
              <p className="text-neutral-400">Achieved 99.999% uptime with Hanzo's enterprise-grade infrastructure</p>
            </div>
          </div>
          
          <Button className="flex items-center gap-2 bg-[var(--white)] text-black hover:bg-gray-200">
            Read Full Case Study <ArrowRight size={16} />
          </Button>
        </div>
        <div className="col-span-2 bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center p-8">
          <div className="flex flex-col items-center text-center">
            <Award className="h-16 w-16 text-white mb-4" />
            <div className="text-4xl font-bold text-[var(--white)] mb-2">200%</div>
            <div className="text-white">Return on Investment</div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Generate a featured capability section using cloudServiceData
  const renderFeaturedCapability = () => {
    // Use AI as a featured capability
    const featuredService = cloudServiceData.find(s => s.id === "ai") || cloudServiceData[0];
    const Icon = featuredService.icon;
    
    return (
      <div className="mb-20">
        <SectionHeader 
          title="AI & Machine Learning" 
          description="Transform your business with our enterprise-grade AI solutions"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl border border-white/20 p-8">
            <div className="mb-6">
              <div className="h-16 w-16 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise AI Solutions</h3>
              <p className="text-neutral-300">
                Deploy, manage, and scale AI models with unmatched performance and security. Our AI platform
                provides seamless access to frontier models, private model customization, and robust security for
                enterprise deployments.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {featuredService.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-neutral-300">{feature}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white hover:bg-white/20">
                <Link href="/ai">Explore AI Solutions</Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10">
                <a href="#">Request Demo</a>
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6">
              <h4 className="text-lg font-semibold mb-3">Case Study: Financial Services</h4>
              <p className="text-neutral-400 mb-4">
                How a leading investment firm used Hanzo's AI platform to analyze market trends and automate 
                investment decisions, resulting in a 32% increase in portfolio performance.
              </p>
              <a href="#" className="text-white hover:text-white/70 flex items-center gap-1.5">
                Read case study <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6">
              <h4 className="text-lg font-semibold mb-3">White Paper: Enterprise AI Adoption</h4>
              <p className="text-neutral-400 mb-4">
                Download our comprehensive guide to implementing AI across large organizations, addressing
                challenges around security, compliance, and organizational change.
              </p>
              <a href="#" className="text-white hover:text-white/70 flex items-center gap-1.5">
                Download white paper <ArrowRight size={16} />
              </a>
            </div>

            <div className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6">
              <h4 className="text-lg font-semibold mb-3">Webinar: The Future of GenAI in Enterprise</h4>
              <p className="text-neutral-400 mb-4">
                Join our expert panel discussing how generative AI is transforming enterprise operations and
                creating new business opportunities across industries.
              </p>
              <a href="#" className="text-white/70 hover:text-white flex items-center gap-1.5">
                Register now <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderExpertiseSection = () => (
    <div className="mb-20">
      <SectionHeader 
        title="Technical Expertise"
        description="Our team brings deep expertise across multiple technical domains, helping you implement solutions that drive real business results."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div className="bg-gradient-to-br from-white/20 to-white/10 p-8 rounded-xl border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--white)]">Case Studies</h3>
          <p className="text-neutral-300 mb-6">
            See how we've helped organizations like yours achieve their goals through innovative solutions.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-white mr-3" />
                <span className="text-[var(--white)]">Financial Services Digital Transformation</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-white mr-3" />
                <span className="text-[var(--white)]">Healthcare AI Implementation</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-white mr-3" />
                <span className="text-[var(--white)]">Retail Analytics Platform</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">
              View all case studies <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/20 to-white/10 p-8 rounded-xl border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--white)]">White Papers</h3>
          <p className="text-neutral-300 mb-6">
            Access our thought leadership and research on the latest industry trends and technologies.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-white/70 mr-3" />
                <span className="text-[var(--white)]">The Future of AI in Enterprise</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-white/70 mr-3" />
                <span className="text-[var(--white)]">Cloud Security Best Practices</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-white/70 mr-3" />
                <span className="text-[var(--white)]">Digital Transformation Playbook</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-white/40 text-white/70 hover:bg-white/10">
              View all white papers <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderPartnerSection = () => (
    <div className="mb-20 bg-gradient-to-br from-gray-900/70 to-black/90 p-10 rounded-2xl border border-gray-800">
      <SectionHeader 
        title="Expert Partners" 
        description="Access our specialized agencies and expert talent to accelerate your success"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-6 bg-gradient-to-br from-white/30 to-white/10 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
          <div className="p-3 rounded-lg bg-white/20 self-start inline-block mb-4">
            <Users className="h-6 w-6 text-white" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-[var(--white)] mb-3">Hanzo Agency</h3>
          <p className="text-neutral-300 mb-5">
            Our AI-powered creative agency helps brands transform their digital presence with cutting-edge design,
            content, and marketing strategies powered by artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://hanzo.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-white/20 rounded-md text-[var(--white)] transition-colors"
            >
              <span>Visit Hanzo Agency</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/40 hover:border-white/30 rounded-md text-white hover:text-white/70 transition-colors"
            >
              <span>Contact us</span>
              <Mail size={14} />
            </a>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-white/20 to-white/10 rounded-xl border border-white/20 hover:border-white/40 transition-colors">
          <div className="p-3 rounded-lg bg-white/20 self-start inline-block mb-4">
            <Shield className="h-6 w-6 text-white/70" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-[var(--white)] mb-3">Sensei Group</h3>
          <p className="text-neutral-300 mb-5">
            Our collective of fractional CXOs and industry experts help enterprises implement transformative
            technology solutions and drive strategic growth initiatives.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://sensei.group"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white rounded-md text-[var(--white)] transition-colors"
            >
              <span>Visit Sensei Group</span>
              <ExternalLink size={14} />
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/40 hover:border-white/20 rounded-md text-white/70 hover:text-white transition-colors"
            >
              <span>Schedule a call</span>
              <Phone size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <Link href="/solutions" className="text-sm text-neutral-400 hover:text-[var(--white)] flex items-center gap-1">
                <ChevronRight className="h-4 w-4 rotate-180" /> Back to Solutions
              </Link>
            </div>
            <ChromeText as="h1" className="text-4xl sm:text-5xl font-bold mb-6">
              Technical Capabilities
            </ChromeText>
            <p className="text-neutral-400 text-lg">
              Our comprehensive technical capabilities span across a wide range of disciplines, empowering your 
              organization to stay at the forefront of innovation.
            </p>
          </div>

          {/* Featured Capability Section (AI) */}
          {renderFeaturedCapability()}
          
          {/* Case Study */}
          <div className="mb-20">
            <SectionHeader 
              title="Success Stories" 
              description="Real-world results from our enterprise clients"
            />
            
            <div className="space-y-8">
              {renderCaseStudy(
                "Digital Transformation for Global Financial Institution", 
                "Financial Services",
                "We helped a Fortune 500 financial services company modernize their legacy systems and implement AI-powered customer experiences, resulting in 45% faster transaction processing and 68% improved customer satisfaction."
              )}
              
              {renderCaseStudy(
                "Cloud Migration & Modernization for Healthcare Provider", 
                "Healthcare",
                "Our team migrated a healthcare provider's critical patient systems to a secure, compliant cloud infrastructure while implementing real-time analytics for improved patient outcomes and operational efficiency."
              )}
            </div>
          </div>
          
          {/* All Capabilities Grid */}
          <div className="mb-20">
            <SectionHeader 
              title="Explore Our Capabilities" 
              description="Comprehensive technical expertise to transform your business"
            />
            {renderCapabilityGrid()}
          </div>
          
          {/* Resources Section */}
          {renderExpertiseSection()}
          
          {/* Partner Section */}
          {renderPartnerSection()}
          
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-neutral-400 mb-8">
                Connect with our team to learn how our capabilities can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white hover:bg-white/20 text-[var(--white)] font-medium transition-colors"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-white text-white hover:bg-white/10 transition-colors"
                >
                  Schedule a Call
                  <Phone className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default SolutionCapabilities;
