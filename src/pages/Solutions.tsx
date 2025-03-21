
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/constants/navigation";
import { 
  ChevronRight, 
  FileText, 
  ExternalLink, 
  Mail, 
  Phone, 
  Users, 
  BookOpen, 
  Link as LinkIcon,
  Shield 
} from "lucide-react";
import { getIcon } from "@/constants/iconMappings";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/zen/SectionHeader";
import ChromeText from "@/components/ui/chrome-text";

const Solutions: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, number>>({});
  const { solutionId } = useParams<{ solutionId?: string }>();
  const [activeTab, setActiveTab] = useState<string>("capabilities");
  
  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: (prev[title] || 6) + 6 // Show 6 more items each time
    }));
  };
  
  // Get capabilities and industries from the solutions array
  const capabilities = solutions.find(s => s.title === "Capabilities")?.items || [];
  const industries = solutions.find(s => s.title === "Industries")?.items || [];

  const renderSolutionGrid = (items: string[], sectionTitle: string) => {
    const displayCount = expandedSections[sectionTitle] || 9;
    const displayItems = items.slice(0, displayCount);
    const hasMore = items.length > displayCount;

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
                  className="relative group rounded-xl border border-gray-800 bg-black/50 p-6 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-6 w-6 text-purple-400" strokeWidth={1.5} />
                      <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                      {item}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Explore our solutions for {item.toLowerCase()} and discover how we can 
                      help transform your business.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Link to={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-xs flex items-center text-purple-400 hover:text-purple-300">
                        <LinkIcon className="h-3 w-3 mr-1" /> Learn more
                      </Link>
                      <a href="#" className="text-xs flex items-center text-blue-400 hover:text-blue-300">
                        <FileText className="h-3 w-3 mr-1" /> Case study
                      </a>
                      <a href="#" className="text-xs flex items-center text-green-400 hover:text-green-300">
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
              onClick={() => toggleSection(sectionTitle)}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors"
            >
              View More {sectionTitle}
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  const renderExpertiseSection = (title: string, description: string) => (
    <div className="mb-20">
      <SectionHeader 
        title={title}
        description={description}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 text-white">Case Studies</h3>
          <p className="text-gray-300 mb-6">
            See how we've helped organizations like yours achieve their goals through innovative solutions.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-black/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-white">Financial Services Digital Transformation</span>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-black/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-white">Healthcare AI Implementation</span>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-black/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-white">Retail Analytics Platform</span>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10">
              View all case studies <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 p-8 rounded-xl border border-blue-500/20">
          <h3 className="text-2xl font-bold mb-4 text-white">White Papers</h3>
          <p className="text-gray-300 mb-6">
            Access our thought leadership and research on the latest industry trends and technologies.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-black/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-white">The Future of AI in Enterprise</span>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-black/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-white">Cloud Security Best Practices</span>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-black/40 hover:bg-black/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-white">Digital Transformation Playbook</span>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-400" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-blue-500/40 text-blue-400 hover:bg-blue-500/10">
              View all white papers <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
  
  const renderPartnerSection = () => (
    <div className="mb-20 bg-gradient-to-br from-gray-900/70 to-black/90 p-10 rounded-2xl border border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-6 bg-gradient-to-br from-purple-900/50 to-blue-900/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <div className="p-3 rounded-lg bg-purple-500/20 self-start inline-block mb-4">
            <Users className="h-6 w-6 text-purple-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Hanzo Agency</h3>
          <p className="text-gray-300 mb-5">
            Our AI-powered creative agency helps brands transform their digital presence with cutting-edge design, 
            content, and marketing strategies powered by artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://hanzo.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-md text-white transition-colors"
            >
              <span>Visit Hanzo Agency</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href="/contact" 
              className="flex items-center gap-2 px-5 py-2.5 border border-purple-500/40 hover:border-purple-500 rounded-md text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Contact us</span>
              <Mail size={14} />
            </a>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-green-900/50 to-teal-900/30 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
          <div className="p-3 rounded-lg bg-green-500/20 self-start inline-block mb-4">
            <Shield className="h-6 w-6 text-green-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Sensei Group</h3>
          <p className="text-gray-300 mb-5">
            Our collective of fractional CXOs and industry experts help enterprises implement transformative 
            technology solutions and drive strategic growth initiatives.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://sensei.group" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 rounded-md text-white transition-colors"
            >
              <span>Visit Sensei Group</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 px-5 py-2.5 border border-green-500/40 hover:border-green-500 rounded-md text-green-400 hover:text-green-300 transition-colors"
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
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ChromeText as="h1" className="text-4xl sm:text-5xl font-bold mb-6">
              Solutions for Every Industry
            </ChromeText>
            <p className="text-gray-400 text-lg">
              Explore our comprehensive suite of solutions designed to transform businesses 
              across industries and capabilities.
            </p>
          </div>

          {/* Tab navigation */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 rounded-lg bg-gray-900/60 backdrop-blur">
              <button
                onClick={() => setActiveTab("capabilities")}
                className={`px-8 py-2.5 rounded-md font-medium transition-colors ${
                  activeTab === "capabilities" 
                    ? "bg-purple-600 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Capabilities
              </button>
              <button
                onClick={() => setActiveTab("industries")}
                className={`px-8 py-2.5 rounded-md font-medium transition-colors ${
                  activeTab === "industries" 
                    ? "bg-purple-600 text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Industries
              </button>
            </div>
          </div>

          {activeTab === "capabilities" && (
            <div className="space-y-24">
              <div>
                <SectionHeader 
                  title="Capabilities" 
                  description="Our technical capabilities span across a wide range of disciplines, empowering your organization to stay at the forefront of innovation." 
                />
                {renderSolutionGrid(capabilities, "Capabilities")}
              </div>
              
              {renderExpertiseSection(
                "Technical Expertise", 
                "Our team brings deep expertise across multiple technical domains, helping you implement solutions that drive real business results."
              )}
              
              {renderPartnerSection()}
              
              <div className="mt-20 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
                  <p className="text-gray-400 mb-8">
                    Connect with our team to learn how our capabilities can help you achieve your goals.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                    >
                      Get Started
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </a>
                    <a
                      href="tel:+1234567890"
                      className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors"
                    >
                      Schedule a Call
                      <Phone className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "industries" && (
            <div className="space-y-24">
              <div>
                <SectionHeader 
                  title="Industries" 
                  description="We deliver specialized solutions across a wide range of industries, tailored to address your unique challenges and opportunities." 
                />
                {renderSolutionGrid(industries, "Industries")}
              </div>
              
              {renderExpertiseSection(
                "Industry Insights", 
                "Gain a competitive edge with our industry-specific expertise and proven methodologies tailored to your sector's unique challenges."
              )}
              
              {renderPartnerSection()}
              
              <div className="mt-20 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6">Industry-Specific Solutions</h2>
                  <p className="text-gray-400 mb-8">
                    Discover how our tailored industry solutions can address your specific challenges and opportunities.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-colors"
                    >
                      Get Started
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </a>
                    <a
                      href="mailto:solutions@hanzo.ai"
                      className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors"
                    >
                      Email Us
                      <Mail className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
