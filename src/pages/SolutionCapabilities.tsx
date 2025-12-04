
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
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Brain,
  Code,
  Rocket,
  Network,
  DollarSign,
  Building2,
  Server,
  Lock,
  Database,
  GitBranch,
  Bot,
  Sparkles,
  TrendingUp,
  Zap,
  BarChart
} from "lucide-react";
import { getIcon } from "@/constants/iconMappings";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/zen/SectionHeader";
import ChromeText from "@/components/ui/chrome-text";

const SolutionCapabilities: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, number>>({});

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: (prev[title] || 8) + 8 // Show 8 more items each time
    }));
  };

  // Get capabilities from the solutions array - filter to only show ones with detail pages
  const allCapabilities = solutions.find(s => s.title === "Capabilities")?.items || [];
  const capabilities = allCapabilities.filter(cap =>
    ["Cloud", "Cybersecurity", "Data and Artificial Intelligence", "Digital Engineering and Manufacturing",
     "Emerging Technology", "Ecosystem Partners", "Finance and Risk Management",
     "Infrastructure and Capital Projects"].includes(cap)
  );

  // Map full names to short names
  const capabilityNameMap: Record<string, string> = {
    "Cloud": "Cloud",
    "Cybersecurity": "Cybersecurity",
    "Data and Artificial Intelligence": "Data & AI",
    "Digital Engineering and Manufacturing": "Engineering",
    "Emerging Technology": "Emerging Tech",
    "Ecosystem Partners": "Partners",
    "Finance and Risk Management": "Finance",
    "Infrastructure and Capital Projects": "Infrastructure"
  };

  // Detailed capability data extracted from individual pages
  const capabilityDetails = {
    "Cloud": {
      icon: Globe,
      color: "purple",
      tagline: "Transform your infrastructure with enterprise-grade cloud solutions",
      description: "Deploy faster, scale smarter, and innovate without limits with multi-cloud infrastructure and enterprise security.",
      features: [
        { name: "Multi-Cloud Infrastructure", desc: "Deploy across AWS, Azure, and GCP with unified management" },
        { name: "Enterprise Security", desc: "Built-in security controls and automated threat detection" },
        { name: "Auto-Scaling", desc: "Intelligent resource allocation based on demand patterns" },
        { name: "Cost Optimization", desc: "Real-time cost monitoring and ROI maximization" }
      ],
      benefits: [
        "Reduce infrastructure costs by up to 40%",
        "Deploy applications 60% faster with automated CI/CD",
        "Achieve 99.99% uptime with multi-region redundancy",
        "Scale instantly to handle traffic spikes"
      ],
      stats: { value: "40%", label: "Cost Reduction" }
    },
    "Cybersecurity": {
      icon: Shield,
      color: "red",
      tagline: "Protect your business with enterprise-grade security solutions",
      description: "Stay ahead of threats with AI-powered detection, zero trust architecture, and expert support available 24/7.",
      features: [
        { name: "Zero Trust Architecture", desc: "Comprehensive security models across infrastructure" },
        { name: "Threat Intelligence", desc: "Real-time detection powered by AI and machine learning" },
        { name: "Incident Response", desc: "24/7 SOC with rapid incident response capabilities" },
        { name: "Compliance Management", desc: "Automated monitoring for SOC 2, ISO 27001, HIPAA" }
      ],
      benefits: [
        "Reduce security incidents by 85%",
        "Achieve compliance certification 3x faster",
        "Military-grade encryption and access controls",
        "Detect and respond to threats in under 5 minutes"
      ],
      stats: { value: "85%", label: "Fewer Incidents" }
    },
    "Data & AI": {
      icon: Brain,
      color: "blue",
      tagline: "Unlock the full potential of your data with enterprise AI",
      description: "Transform raw data into strategic insights and intelligent automation with end-to-end AI and analytics solutions.",
      features: [
        { name: "Data Engineering", desc: "Build robust data pipelines that scale with your business" },
        { name: "Advanced Analytics", desc: "Extract actionable insights with predictive analytics" },
        { name: "Generative AI", desc: "Deploy cutting-edge AI for content creation and automation" },
        { name: "ML Operations", desc: "Streamline model deployment and lifecycle management" }
      ],
      benefits: [
        "Accelerate time-to-insight by 70%",
        "Increase revenue by 25% with predictive analytics",
        "Reduce operational costs by 40%",
        "Deploy AI models 10x faster with automated MLOps"
      ],
      stats: { value: "70%", label: "Faster Insights" }
    },
    "Engineering": {
      icon: Code,
      color: "green",
      tagline: "Build the future with modern engineering practices",
      description: "From ideation to deployment, accelerate digital transformation with agile methodologies and cloud-native technologies.",
      features: [
        { name: "DevOps Excellence", desc: "CI/CD pipelines for faster, reliable deployments" },
        { name: "Microservices Architecture", desc: "Scalable, maintainable microservices-based apps" },
        { name: "Agile Development", desc: "Modern agile methodologies and best practices" },
        { name: "Quality Assurance", desc: "Comprehensive automated and performance testing" }
      ],
      benefits: [
        "Deploy 50x more frequently with automated CI/CD",
        "Reduce development costs by 35%",
        "Improve code quality with 90% test coverage",
        "Accelerate time-to-market by 60%"
      ],
      stats: { value: "50x", label: "Deploy Frequency" }
    },
    "Emerging Tech": {
      icon: Rocket,
      color: "indigo",
      tagline: "Explore and implement tomorrow's technologies today",
      description: "Stay ahead of the curve with cutting-edge innovations from AI agents to quantum computing, with expert guidance.",
      features: [
        { name: "Advanced AI Agents", desc: "Autonomous agents that reason, plan, and execute tasks" },
        { name: "Generative AI", desc: "Leverage cutting-edge AI for content creation" },
        { name: "Web3 & Blockchain", desc: "Build decentralized applications and integrate blockchain" },
        { name: "Edge Computing", desc: "Ultra-low latency processing at the edge" }
      ],
      benefits: [
        "Stay ahead of competitors with early adoption",
        "Reduce time-to-market by 50% with rapid prototyping",
        "Access expert guidance on emerging tech",
        "Build future-proof solutions that adapt"
      ],
      stats: { value: "50%", label: "Faster Innovation" }
    },
    "Partners": {
      icon: Network,
      color: "cyan",
      tagline: "Leverage our global network of technology partners",
      description: "Access our worldwide ecosystem of strategic alliances, certified experts, and technology providers for complete solutions.",
      features: [
        { name: "Technology Partners", desc: "Collaborate with leading technology providers" },
        { name: "Strategic Alliances", desc: "Partnerships that amplify capabilities and reach" },
        { name: "Global Network", desc: "Worldwide ecosystem of partners and service providers" },
        { name: "Certified Experts", desc: "Work with certified professionals across platforms" }
      ],
      benefits: [
        "Access to 500+ certified technology partners",
        "Reduce implementation time by 40%",
        "Expand market reach through global ecosystem",
        "Joint go-to-market strategies with vendors"
      ],
      stats: { value: "500+", label: "Tech Partners" }
    },
    "Finance": {
      icon: DollarSign,
      color: "yellow",
      tagline: "Transform finance operations with intelligent automation",
      description: "Reduce risk, ensure compliance, and drive strategic financial decisions with AI-powered analytics and automation.",
      features: [
        { name: "Financial Planning", desc: "Strategic planning with AI-powered insights" },
        { name: "Risk Management", desc: "Identify and mitigate risks with advanced analytics" },
        { name: "Portfolio Management", desc: "Optimize investments with real-time market analysis" },
        { name: "Regulatory Compliance", desc: "Ensure compliance with automated monitoring" }
      ],
      benefits: [
        "Reduce financial risk exposure by 60%",
        "Improve forecasting accuracy by 85%",
        "Automate 70% of routine financial operations",
        "Detect fraud with 99.7% accuracy"
      ],
      stats: { value: "85%", label: "Better Forecasting" }
    },
    "Infrastructure": {
      icon: Building2,
      color: "orange",
      tagline: "Build resilient, scalable infrastructure that powers your business",
      description: "From data centers to networks, design and manage enterprise infrastructure with world-class reliability.",
      features: [
        { name: "Infrastructure Design", desc: "Scalable, resilient architectures for critical systems" },
        { name: "Network Engineering", desc: "High-performance networks with advanced optimization" },
        { name: "Compute Optimization", desc: "Optimize for performance, cost, and efficiency" },
        { name: "Infrastructure as Code", desc: "Automate provisioning with IaC best practices" }
      ],
      benefits: [
        "Reduce infrastructure costs by 45%",
        "Achieve 99.99% uptime with HA architectures",
        "Scale infrastructure 10x faster",
        "Improve performance by 60%"
      ],
      stats: { value: "99.99%", label: "Uptime SLA" }
    }
  };

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
              const mappedName = capabilityNameMap[item] || item;
              const details = capabilityDetails[mappedName as keyof typeof capabilityDetails];

              // Skip if no details available
              if (!details) return null;

              const colorClasses = {
                purple: "from-purple-500/10 to-blue-500/10 border-purple-500/40 text-purple-400",
                red: "from-red-500/10 to-orange-500/10 border-red-500/40 text-red-400",
                blue: "from-blue-500/10 to-cyan-500/10 border-blue-500/40 text-blue-400",
                green: "from-green-500/10 to-emerald-500/10 border-green-500/40 text-green-400",
                indigo: "from-indigo-500/10 to-purple-500/10 border-indigo-500/40 text-indigo-400",
                cyan: "from-cyan-500/10 to-blue-500/10 border-cyan-500/40 text-cyan-400",
                yellow: "from-yellow-500/10 to-orange-500/10 border-yellow-500/40 text-yellow-400",
                orange: "from-orange-500/10 to-red-500/10 border-orange-500/40 text-orange-400"
              };
              const colorClass = colorClasses[details?.color as keyof typeof colorClasses] || colorClasses.purple;

              return (
                <Link
                  key={item}
                  to={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="relative group rounded-xl border border-gray-800 bg-[var(--black)]/50 p-6 backdrop-blur-sm overflow-hidden h-full"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]}`}>
                          <Icon className={`h-6 w-6 ${colorClass.split(' ')[2]}`} strokeWidth={1.5} />
                        </div>
                        <ArrowRight className={`h-5 w-5 text-neutral-500 group-hover:${colorClass.split(' ')[2]} transition-colors`} />
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 group-hover:${colorClass.split(' ')[2]} transition-colors`}>
                        {item}
                      </h3>
                      <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
                        {details?.description || `Comprehensive ${item.toLowerCase()} solutions for your business.`}
                      </p>

                      {details?.stats && (
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <div className="flex items-baseline gap-2">
                            <span className={`text-2xl font-bold ${colorClass.split(' ')[2]}`}>{details.stats.value}</span>
                            <span className="text-xs text-neutral-500">{details.stats.label}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Link>
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
              className="inline-flex items-center px-6 py-3 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-colors"
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
            <span className="text-xs px-2 py-1 bg-purple-900/40 rounded-full text-purple-300 border border-purple-500/30">
              {industry}
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[var(--white)]">{title}</h3>
          <p className="text-neutral-300 mb-6">{description}</p>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-neutral-400">Reduced development time by 40% through AI-powered automation</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-neutral-400">Improved customer satisfaction scores by 35% with new digital experiences</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-neutral-400">Achieved 99.99% uptime with Hanzo's enterprise-grade infrastructure</p>
            </div>
          </div>
          
          <Button asChild className="flex items-center gap-2 bg-[var(--white)] text-black hover:bg-gray-200">
            <Link to="/contact">Read Full Case Study <ArrowRight size={16} /></Link>
          </Button>
        </div>
        <div className="col-span-2 bg-gradient-to-br from-purple-900/40 to-blue-900/40 flex items-center justify-center p-8">
          <div className="flex flex-col items-center text-center">
            <Award className="h-16 w-16 text-purple-300 mb-4" />
            <div className="text-4xl font-bold text-[var(--white)] mb-2">200%</div>
            <div className="text-purple-300">Return on Investment</div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  // Featured capabilities section showcasing top solutions
  const renderFeaturedCapabilities = () => {
    const featured = ["Data & AI", "Cloud", "Cybersecurity"];

    return (
      <div className="mb-20">
        <SectionHeader
          title="Featured Capabilities"
          description="Explore our most popular enterprise solutions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featured.map((capName, index) => {
            const details = capabilityDetails[capName as keyof typeof capabilityDetails];
            if (!details) return null;
            const Icon = details.icon;

            return (
              <motion.div
                key={capName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-8 hover:border-purple-500/40 transition-colors group"
              >
                <div className="mb-6">
                  <div className="h-14 w-14 rounded-lg bg-purple-900/40 flex items-center justify-center mb-4 group-hover:bg-purple-900/60 transition-colors">
                    <Icon className="h-8 w-8 text-purple-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{capName}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{details.tagline}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {details.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-neutral-400 text-sm">{feature.name}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-800 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-purple-400">{details.stats.value}</span>
                    <span className="text-sm text-neutral-500">{details.stats.label}</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link to={`/solutions/${capName.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            );
          })}
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
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-8 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--white)]">Case Studies</h3>
          <p className="text-neutral-300 mb-6">
            See how we've helped organizations like yours achieve their goals through innovative solutions.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-[var(--white)]">Financial Services Digital Transformation</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-[var(--white)]">Healthcare AI Implementation</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-purple-400 mr-3" />
                <span className="text-[var(--white)]">Retail Analytics Platform</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10">
              View all case studies <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 p-8 rounded-xl border border-blue-500/20">
          <h3 className="text-2xl font-bold mb-4 text-[var(--white)]">White Papers</h3>
          <p className="text-neutral-300 mb-6">
            Access our thought leadership and research on the latest industry trends and technologies.
          </p>
          <div className="space-y-4">
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-[var(--white)]">The Future of AI in Enterprise</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-[var(--white)]">Cloud Security Best Practices</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
            </a>
            <a href="#" className="flex items-center justify-between p-3 rounded-lg bg-[var(--black)]/40 hover:bg-[var(--black)]/60 transition-colors">
              <div className="flex items-center">
                <BookOpen className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-[var(--white)]">Digital Transformation Playbook</span>
              </div>
              <ExternalLink className="h-4 w-4 text-neutral-400" />
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
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-[var(--white)] font-medium transition-colors"
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
      </main>

      <Footer />
    </div>
  );
};

export default SolutionCapabilities;
