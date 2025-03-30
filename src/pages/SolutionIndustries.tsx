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
  Shield,
  Building,
  Briefcase,
  Heart,
  ShoppingBag,
  ServerCrash,
  CheckCircle,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";
import { getIcon } from "@/constants/iconMappings";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/zen/SectionHeader";
import ChromeText from "@/components/ui/chrome-text";

const SolutionIndustries: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, number>>({});
  const [activeIndustry, setActiveIndustry] = useState<string>("Financial Services");
  
  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: (prev[title] || 8) + 8 // Show 8 more items each time
    }));
  };
  
  // Get industries from the solutions array
  const industries = solutions.find(s => s.title === "Industries")?.items || [];

  const renderIndustryGrid = () => {
    const displayCount = expandedSections["Industries"] || 8;
    const displayItems = industries.slice(0, displayCount);
    const hasMore = industries.length > displayCount;

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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-6 w-6 text-blue-400" strokeWidth={1.5} />
                      <ChevronRight className="h-5 w-5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {item}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">
                      Explore our specialized solutions for the {item.toLowerCase()} industry, designed to address 
                      your sector's unique challenges.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      <button 
                        onClick={() => setActiveIndustry(item)}
                        className="text-xs flex items-center text-blue-400 hover:text-blue-300"
                      >
                        <LinkIcon className="h-3 w-3 mr-1" /> Learn more
                      </button>
                      <a href="#" className="text-xs flex items-center text-purple-400 hover:text-purple-300">
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
              onClick={() => toggleSection("Industries")}
              className="inline-flex items-center px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors"
            >
              View More Industries
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        )}
      </div>
    );
  };

  const renderIndustryContent = () => {
    const industryData: Record<string, {
      icon: React.ReactNode,
      color: string,
      description: string,
      challenges: string[],
      solutions: string[],
      caseStudy: {
        title: string,
        description: string,
        results: string[]
      }
    }> = {
      "Financial Services": {
        icon: <Building className="h-10 w-10 text-blue-400" />,
        color: "blue",
        description: "We help banks, insurance companies, and investment firms transform their digital infrastructure, improve security, and deliver innovative customer experiences.",
        challenges: [
          "Legacy system modernization",
          "Regulatory compliance",
          "Digital customer experience",
          "Fraud detection and prevention",
          "Data security and privacy"
        ],
        solutions: [
          "Core banking system modernization",
          "AI-powered fraud detection",
          "Open banking API platforms",
          "Customer data platforms",
          "Regulatory reporting automation"
        ],
        caseStudy: {
          title: "Digital Transformation for Global Bank",
          description: "We helped a Fortune 500 bank modernize their legacy systems and implement AI-powered customer experiences, resulting in 45% faster transaction processing and improved satisfaction.",
          results: [
            "45% faster transaction processing",
            "68% improvement in customer satisfaction",
            "30% reduction in operational costs",
            "99.99% system uptime"
          ]
        }
      },
      "Healthcare": {
        icon: <Heart className="h-10 w-10 text-pink-400" />,
        color: "pink",
        description: "Our healthcare solutions help providers, payers, and life sciences companies improve patient outcomes, optimize operations, and ensure security and compliance.",
        challenges: [
          "Interoperability of health data",
          "Patient data security and HIPAA compliance",
          "Clinical workflow optimization",
          "Remote patient monitoring",
          "Population health management"
        ],
        solutions: [
          "Healthcare data platforms",
          "Telemedicine solutions",
          "Clinical decision support systems",
          "Medical device integration",
          "Healthcare analytics and reporting"
        ],
        caseStudy: {
          title: "AI-Powered Patient Care Platform",
          description: "We developed a secure, HIPAA-compliant platform that uses AI to analyze patient data and provide real-time clinical decision support, improving outcomes and reducing costs.",
          results: [
            "22% improvement in clinical outcomes",
            "35% reduction in readmission rates",
            "40% time savings for clinical staff",
            "100% HIPAA compliance maintained"
          ]
        }
      },
      "Retail": {
        icon: <ShoppingBag className="h-10 w-10 text-green-400" />,
        color: "green",
        description: "We help retailers create seamless omnichannel experiences, optimize supply chains, and leverage data for personalized customer engagement.",
        challenges: [
          "Omnichannel customer experience",
          "Supply chain optimization",
          "Inventory management",
          "Customer analytics and personalization",
          "E-commerce platform performance"
        ],
        solutions: [
          "Unified commerce platforms",
          "AI-driven demand forecasting",
          "Customer data and analytics solutions",
          "In-store digital experiences",
          "Intelligent inventory management"
        ],
        caseStudy: {
          title: "Omnichannel Transformation for Global Retailer",
          description: "We helped a global retailer unify their online and offline shopping experiences while implementing AI-powered customer analytics, resulting in significant sales growth.",
          results: [
            "28% increase in online sales",
            "15% increase in in-store conversions",
            "42% improvement in inventory accuracy",
            "3x faster website performance"
          ]
        }
      },
      "Technology": {
        icon: <ServerCrash className="h-10 w-10 text-indigo-400" />,
        color: "indigo",
        description: "We help technology companies innovate faster, scale efficiently, and deliver secure, high-performance products and services.",
        challenges: [
          "Accelerating innovation cycles",
          "Scaling infrastructure efficiently",
          "Security and compliance",
          "Developer productivity",
          "Product analytics and telemetry"
        ],
        solutions: [
          "DevOps automation platforms",
          "Scalable cloud architectures",
          "AI-powered development tools",
          "Product analytics frameworks",
          "Security and compliance automation"
        ],
        caseStudy: {
          title: "AI-Powered Development Platform for SaaS Provider",
          description: "We created a development acceleration platform that helped a leading SaaS provider reduce development cycles and improve product quality while maintaining security.",
          results: [
            "60% faster development cycles",
            "40% reduction in bugs and issues",
            "85% improvement in developer productivity",
            "30% reduction in infrastructure costs"
          ]
        }
      }
    };

    const industry = industryData[activeIndustry] || industryData["Financial Services"];
    const colorClasses = {
      blue: "from-blue-900/30 to-blue-900/10 border-blue-500/20",
      pink: "from-pink-900/30 to-pink-900/10 border-pink-500/20",
      green: "from-green-900/30 to-green-900/10 border-green-500/20",
      indigo: "from-indigo-900/30 to-indigo-900/10 border-indigo-500/20"
    };
    
    return (
      <motion.div
        key={activeIndustry}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-20"
      >
        <div className={`bg-gradient-to-br ${colorClasses[industry.color as keyof typeof colorClasses]} rounded-xl p-8 mb-10`}>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="bg-[var(--white)]/10 rounded-full p-6 inline-flex">
              {industry.icon}
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{activeIndustry} Solutions</h3>
              <p className="text-neutral-300">{industry.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-gray-800 rounded-full h-8 w-8 inline-flex items-center justify-center mr-3 text-sm">1</span>
              Industry Challenges
            </h4>
            <ul className="space-y-4">
              {industry.challenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-[var(--black)]/40 p-4 rounded-lg border border-gray-800">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-gray-800 rounded-full h-8 w-8 inline-flex items-center justify-center mr-3 text-sm">2</span>
              Our Solutions
            </h4>
            <ul className="space-y-4">
              {industry.solutions.map((solution, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-[var(--black)]/40 p-4 rounded-lg border border-gray-800">
                  <ArrowRight className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-300">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900/50 to-black/90 rounded-xl border border-gray-800 p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h4 className="text-xl font-semibold mb-4">Case Study: {industry.caseStudy.title}</h4>
              <p className="text-neutral-300 mb-6">{industry.caseStudy.description}</p>
              <Button className="mb-8">Read Full Case Study <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {industry.caseStudy.results.map((result, idx) => (
                  <div key={idx} className="bg-[var(--black)]/40 p-4 rounded-lg border border-gray-800">
                    <CheckCircle className="h-5 w-5 text-green-400 mb-2" />
                    <p className="text-neutral-300">{result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2 flex items-center justify-center">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700 flex flex-col items-center">
                <Briefcase className="h-16 w-16 text-blue-400 mb-4" />
                <span className="text-3xl font-bold text-[var(--white)] mb-2">25+</span>
                <span className="text-blue-300">{activeIndustry} Clients</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="#" 
            className="block p-6 bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-5 w-5 text-blue-400" />
              <h4 className="font-medium">White Paper</h4>
            </div>
            <p className="text-neutral-400">
              Download our industry trends report: The Future of {activeIndustry} Technology
            </p>
            <div className="mt-4 text-blue-400 flex items-center gap-1.5">
              Download Now <ArrowRight size={16} />
            </div>
          </a>
          
          <a 
            href="#" 
            className="block p-6 bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="h-5 w-5 text-purple-400" />
              <h4 className="font-medium">Webinar</h4>
            </div>
            <p className="text-neutral-400">
              Register for our upcoming webinar: Digital Transformation in {activeIndustry}
            </p>
            <div className="mt-4 text-purple-400 flex items-center gap-1.5">
              Register Now <ArrowRight size={16} />
            </div>
          </a>
        </div>
      </motion.div>
    );
  };

  const renderExpertiseSection = () => (
    <div className="mb-20">
      <SectionHeader 
        title="Industry Insights"
        description="Gain a competitive edge with our industry-specific expertise and proven methodologies tailored to your sector's unique challenges."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 p-8 rounded-xl border border-blue-500/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--white)]">Case Studies</h3>
          <p className="text-neutral-300 mb-6">
            See how we've helped organizations like yours achieve their goals through innovative solutions.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-[var(--white)]">Financial Services Digital Transformation</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-[var(--white)]">Healthcare AI Implementation</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-[var(--white)]">Retail Analytics Platform</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-blue-500/40 text-blue-400 hover:bg-blue-500/10">
              View all case studies <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 p-8 rounded-xl border border-indigo-500/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--white)]">White Papers</h3>
          <p className="text-neutral-300 mb-6">
            Access our thought leadership and research on the latest industry trends and technologies.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-indigo-400 mr-3" />
                <span className="text-[var(--white)]">The Future of AI in Financial Services</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-indigo-400 mr-3" />
                <span className="text-[var(--white)]">Healthcare Interoperability Challenges</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-indigo-400 mr-3" />
                <span className="text-[var(--white)]">Digital Transformation in Retail</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10">
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
        <div className="p-6 bg-gradient-to-br from-purple-900/50 to-blue-900/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <div className="p-3 rounded-lg bg-purple-500/20 self-start inline-block mb-4">
            <Users className="h-6 w-6 text-purple-400" strokeWidth={1.5} />
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
              className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-md text-[var(--white)] transition-colors"
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
              className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 rounded-md text-[var(--white)] transition-colors"
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
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <Link to="/solutions" className="text-sm text-neutral-400 hover:text-[var(--white)] flex items-center gap-1">
                <ChevronRight className="h-4 w-4 rotate-180" /> Back to Solutions
              </Link>
            </div>
            <ChromeText as="h1" className="text-4xl sm:text-5xl font-bold mb-6">
              Industry Solutions
            </ChromeText>
            <p className="text-neutral-400 text-lg">
              We deliver specialized solutions across a wide range of industries, tailored to address your unique 
              challenges and opportunities.
            </p>
          </div>

          <div className="mb-12">
            <div className="flex overflow-x-auto pb-4 scrollbar-hide gap-2 justify-center">
              {["Financial Services", "Healthcare", "Retail", "Technology"].map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeIndustry === industry
                      ? "bg-blue-600 text-[var(--white)]"
                      : "bg-gray-900 text-neutral-300 hover:bg-gray-800"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Active Industry Section */}
          {renderIndustryContent()}
          
          {/* All Industries Grid */}
          <div className="mb-20">
            <SectionHeader 
              title="Explore All Industries" 
              description="Comprehensive solutions for every sector"
            />
            {renderIndustryGrid()}
          </div>
          
          {/* Resources Section */}
          {renderExpertiseSection()}
          
          {/* Partner Section */}
          {renderPartnerSection()}
          
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Industry-Specific Solutions</h2>
              <p className="text-neutral-400 mb-8">
                Discover how our tailored industry solutions can address your specific challenges and opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-[var(--white)] font-medium transition-colors"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="mailto:solutions@hanzo.ai"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500/10 transition-colors"
                >
                  Email Us
                  <Mail className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionIndustries;
