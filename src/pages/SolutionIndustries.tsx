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
  ArrowUpRight,
  Plane,
  Car,
  Landmark,
  TrendingUp,
  Beaker,
  Radio,
  Leaf
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
      detailedSolutions: Array<{ title: string; description: string }>,
      caseStudy: {
        title: string,
        description: string,
        results: string[]
      },
      link?: string
    }> = {
      "Aerospace": {
        icon: <Plane className="h-10 w-10 text-indigo-400" />,
        color: "indigo",
        description: "Transform aerospace and defense operations with secure, reliable AI infrastructure built for mission-critical applications including predictive maintenance, secure communications, and autonomous systems.",
        challenges: [
          "Mission-critical system reliability and uptime",
          "Defense-grade security and compliance requirements",
          "Complex supply chain and logistics management",
          "Predictive maintenance for aircraft and equipment",
          "Integration of autonomous systems and AI decision support"
        ],
        solutions: [
          "Predictive maintenance for aircraft fleets",
          "Secure communications for classified operations",
          "Mission data analytics and real-time processing",
          "Digital manufacturing and quality control",
          "Autonomous systems for UAVs and navigation"
        ],
        detailedSolutions: [
          { title: "Predictive Maintenance", description: "AI-driven analytics to predict equipment failures before they occur, reducing downtime and maintenance costs." },
          { title: "Secure Communications", description: "Encrypted, compliant communication systems for classified operations and sensitive data transmission." },
          { title: "Mission Data Analytics", description: "Real-time processing and analysis of mission-critical data with AI-powered insights." }
        ],
        caseStudy: {
          title: "Aircraft Maintenance Optimization",
          description: "Reduced unscheduled maintenance and improved aircraft availability through predictive analytics and real-time sensor data analysis.",
          results: [
            "35% reduction in unscheduled maintenance",
            "42% improvement in aircraft availability",
            "28% decrease in maintenance costs",
            "Real-time failure detection capability"
          ]
        },
        link: "/industry/aerospace"
      },
      "Automotive": {
        icon: <Car className="h-10 w-10 text-orange-400" />,
        color: "orange",
        description: "Drive the future of mobility with AI solutions for autonomous vehicles, connected cars, and smart manufacturing. Enable next-generation automotive innovation.",
        challenges: [
          "Autonomous vehicle development and testing",
          "Connected car platform scalability",
          "Battery performance and lifecycle optimization",
          "Manufacturing quality control and efficiency",
          "Over-the-air update infrastructure"
        ],
        solutions: [
          "Autonomous systems for self-driving vehicles",
          "Battery intelligence and optimization",
          "Connected car platforms and V2X communication",
          "Predictive maintenance and vehicle health monitoring",
          "Manufacturing excellence with AI quality control"
        ],
        detailedSolutions: [
          { title: "Autonomous Systems", description: "Advanced perception, planning, and control systems for autonomous vehicle development." },
          { title: "Battery Intelligence", description: "Optimize battery performance and lifecycle with AI-powered analytics and predictive models." },
          { title: "In-Vehicle AI", description: "Edge AI deployment for real-time processing in vehicle compute platforms." }
        ],
        caseStudy: {
          title: "Autonomous Vehicle Development",
          description: "Accelerated AV development with scalable AI infrastructure for training and simulation, enabling massive-scale sensor data processing.",
          results: [
            "50% faster model training cycles",
            "75% reduction in simulation time",
            "Petabyte-scale data processing",
            "Real-time scenario testing capability"
          ]
        },
        link: "/industry/automotive"
      },
      "Banking": {
        icon: <Landmark className="h-10 w-10 text-emerald-400" />,
        color: "emerald",
        description: "Transform customer experiences, enhance security, and drive operational efficiency with enterprise-grade AI solutions for digital banking, fraud detection, and personalized services.",
        challenges: [
          "Real-time fraud detection and prevention",
          "Credit risk assessment and lending decisions",
          "Regulatory compliance and AML monitoring",
          "Digital customer experience and personalization",
          "Legacy system modernization"
        ],
        solutions: [
          "AI-powered fraud prevention systems",
          "Credit risk analytics and underwriting automation",
          "Conversational AI for 24/7 customer service",
          "Document processing for faster approvals",
          "AML and compliance automation"
        ],
        detailedSolutions: [
          { title: "Fraud Prevention", description: "Advanced ML models for real-time fraud detection across all transaction channels." },
          { title: "Risk Analytics", description: "AI-driven credit risk assessment, portfolio optimization, and regulatory compliance." },
          { title: "Digital Assistant", description: "Conversational AI for customer service, account management, and financial advice." }
        ],
        caseStudy: {
          title: "Intelligent Fraud Detection",
          description: "Protected customers and reduced losses with AI-powered fraud detection, behavioral biometrics, and automated case management.",
          results: [
            "87% reduction in fraud losses",
            "Real-time transaction monitoring",
            "95% accuracy in anomaly detection",
            "60% faster investigation workflows"
          ]
        },
        link: "/industry/banking"
      },
      "Capital Markets": {
        icon: <TrendingUp className="h-10 w-10 text-blue-400" />,
        color: "blue",
        description: "Transform trading, investment, and risk management with ultra-low latency AI infrastructure and advanced analytics for algorithmic trading and portfolio optimization.",
        challenges: [
          "Ultra-low latency execution requirements",
          "Real-time risk analytics and monitoring",
          "Quantitative model development and backtesting",
          "Alternative data integration and analysis",
          "Regulatory compliance and reporting"
        ],
        solutions: [
          "High-frequency algorithmic trading platforms",
          "Quantitative research infrastructure",
          "Real-time market surveillance and compliance",
          "Alternative data intelligence and NLP",
          "Portfolio optimization and risk management"
        ],
        detailedSolutions: [
          { title: "Algorithmic Trading", description: "Deploy high-frequency trading strategies with microsecond-level execution." },
          { title: "Quantitative Research", description: "Accelerate alpha discovery with scalable compute for backtesting and model development." },
          { title: "Market Surveillance", description: "AI-powered monitoring for market manipulation and regulatory compliance." }
        ],
        caseStudy: {
          title: "Real-Time Risk Analytics",
          description: "Monitor and manage portfolio risk exposure with millisecond-level precision, including real-time VaR and stress testing.",
          results: [
            "Microsecond-level latency achieved",
            "Real-time cross-asset risk aggregation",
            "Automated limit monitoring",
            "30% improvement in risk-adjusted returns"
          ]
        },
        link: "/industry/capital-markets"
      },
      "Chemicals": {
        icon: <Beaker className="h-10 w-10 text-violet-400" />,
        color: "violet",
        description: "Accelerate R&D, optimize production, and ensure safety with AI-powered solutions for molecular design, process control, and environmental compliance.",
        challenges: [
          "Accelerating drug and materials discovery",
          "Process optimization and yield improvement",
          "Quality assurance and batch consistency",
          "Environmental compliance and safety monitoring",
          "Supply chain complexity and optimization"
        ],
        solutions: [
          "AI-driven molecular design and discovery",
          "Real-time process control and optimization",
          "Computer vision for quality assurance",
          "Predictive safety and risk assessment",
          "Sustainability analytics and emissions tracking"
        ],
        detailedSolutions: [
          { title: "Materials Discovery", description: "Accelerate novel material discovery with AI-powered molecular modeling and simulation." },
          { title: "Process Control", description: "Optimize chemical processes with real-time AI control systems and predictive maintenance." },
          { title: "Quality Assurance", description: "Automated quality control with computer vision and advanced analytics." }
        ],
        caseStudy: {
          title: "Accelerated Drug Discovery",
          description: "Reduced time-to-market for pharmaceutical compounds with AI-driven molecular design and in silico screening.",
          results: [
            "3x faster compound discovery",
            "60% reduction in lab experiments",
            "Millions of molecules screened daily",
            "Optimized synthesis pathways"
          ]
        },
        link: "/industry/chemicals"
      },
      "Communications": {
        icon: <Radio className="h-10 w-10 text-pink-400" />,
        color: "pink",
        description: "Transform content creation, delivery, and audience engagement with intelligent media solutions and 5G infrastructure for next-generation communications.",
        challenges: [
          "Content personalization at scale",
          "Network optimization for 5G and streaming",
          "Ad revenue optimization and targeting",
          "Content moderation and safety",
          "Audience analytics and engagement"
        ],
        solutions: [
          "AI-assisted content generation and editing",
          "Personalized recommendation engines",
          "Network intelligence and optimization",
          "Real-time sentiment analysis and social listening",
          "Adaptive streaming and mobile experience"
        ],
        detailedSolutions: [
          { title: "Content Generation", description: "AI-assisted content creation, editing, and production for video, audio, and text." },
          { title: "Recommendation Engine", description: "Personalized content recommendations that increase engagement and retention." },
          { title: "Network Intelligence", description: "AI-driven network optimization for improved quality of service." }
        ],
        caseStudy: {
          title: "Streaming Video Platform",
          description: "Built next-generation OTT platform with intelligent content delivery and personalization at scale.",
          results: [
            "45% increase in viewer engagement",
            "35% improvement in content discovery",
            "Adaptive bitrate optimization",
            "AI-powered metadata generation"
          ]
        },
        link: "/industry/communications"
      },
      "Consumer": {
        icon: <ShoppingBag className="h-10 w-10 text-amber-400" />,
        color: "amber",
        description: "Transform retail, e-commerce, and consumer services with personalized experiences and intelligent operations for enhanced customer satisfaction and loyalty.",
        challenges: [
          "E-commerce personalization at scale",
          "Omnichannel inventory management",
          "Customer service automation and scaling",
          "Demand forecasting and pricing optimization",
          "Visual search and product discovery"
        ],
        solutions: [
          "Hyper-personalization and dynamic recommendations",
          "AI-driven demand forecasting",
          "Customer intelligence and lifetime value analytics",
          "Inventory optimization and replenishment",
          "Visual search and AR experiences"
        ],
        detailedSolutions: [
          { title: "Hyper-Personalization", description: "Deliver individualized experiences with AI-driven product recommendations." },
          { title: "Demand Forecasting", description: "Predict consumer demand with ML models trained on sales and trends." },
          { title: "Customer Intelligence", description: "Gain deep insights into customer behavior and preferences." }
        ],
        caseStudy: {
          title: "E-Commerce Personalization",
          description: "Increased conversions and average order value with AI-powered personalization and real-time recommendations.",
          results: [
            "32% increase in conversion rate",
            "28% higher average order value",
            "50% improvement in click-through rates",
            "Personalized experiences at scale"
          ]
        },
        link: "/industry/consumer"
      },
      "Energy": {
        icon: <Leaf className="h-10 w-10 text-green-400" />,
        color: "green",
        description: "Transform energy operations with AI-driven optimization, renewable integration, and smart grid management for a sustainable future.",
        challenges: [
          "Renewable energy forecasting and integration",
          "Grid stability and demand management",
          "Asset performance and predictive maintenance",
          "Energy trading and market optimization",
          "Carbon reduction and sustainability tracking"
        ],
        solutions: [
          "Solar and wind generation forecasting",
          "Smart grid management and optimization",
          "Energy storage and battery management",
          "Demand response and load balancing",
          "Asset management and predictive maintenance"
        ],
        detailedSolutions: [
          { title: "Solar Forecasting", description: "AI-powered solar generation prediction for optimal energy planning." },
          { title: "Wind Power Analytics", description: "Advanced wind pattern analysis and turbine optimization." },
          { title: "Energy Storage", description: "Intelligent battery management for peak load management." }
        ],
        caseStudy: {
          title: "Renewable Energy Optimization",
          description: "Enhanced renewable operations with AI-powered forecasting and optimization for solar and wind facilities.",
          results: [
            "25% improvement in forecast accuracy",
            "18% increase in energy yield",
            "40% reduction in grid curtailment",
            "Real-time performance optimization"
          ]
        },
        link: "/industry/energy"
      }
    };

    const industry = industryData[activeIndustry] || industryData["Aerospace"];
    const colorClasses = {
      blue: "from-blue-900/30 to-blue-900/10 border-blue-500/20",
      pink: "from-pink-900/30 to-pink-900/10 border-pink-500/20",
      green: "from-green-900/30 to-green-900/10 border-green-500/20",
      indigo: "from-indigo-900/30 to-indigo-900/10 border-indigo-500/20",
      emerald: "from-emerald-900/30 to-emerald-900/10 border-emerald-500/20",
      orange: "from-orange-900/30 to-orange-900/10 border-orange-500/20",
      violet: "from-violet-900/30 to-violet-900/10 border-violet-500/20",
      amber: "from-amber-900/30 to-amber-900/10 border-amber-500/20"
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

        {/* Detailed Solutions Section */}
        <div className="mb-10">
          <h4 className="text-xl font-semibold mb-6 flex items-center">
            <span className="bg-gray-800 rounded-full h-8 w-8 inline-flex items-center justify-center mr-3 text-sm">3</span>
            Key Solutions Spotlight
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.detailedSolutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-black/90 rounded-xl border border-gray-800 p-6 hover:border-blue-500/30 transition-colors"
              >
                <h5 className="text-lg font-semibold mb-3 text-blue-400">{solution.title}</h5>
                <p className="text-neutral-300 text-sm">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-900/50 to-black/90 rounded-xl border border-gray-800 p-8 mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-gray-800 rounded-full h-8 w-8 inline-flex items-center justify-center mr-3 text-sm">4</span>
                Case Study: {industry.caseStudy.title}
              </h4>
              <p className="text-neutral-300 mb-6">{industry.caseStudy.description}</p>
              {industry.link && (
                <Link to={industry.link}>
                  <Button className="mb-8">View Full Industry Page <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              )}

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
              {["Aerospace", "Automotive", "Banking", "Capital Markets", "Chemicals", "Communications", "Consumer", "Energy"].map((industry) => (
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
