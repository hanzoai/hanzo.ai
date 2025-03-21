
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AIPlatformSection from "@/components/AIPlatformSection";
import CloudServices from "@/components/index3/cloud-services";
import CallToAction from "@/components/index3/CallToAction";
import TrustedBy from "@/components/platform/TrustedBy";
import Footer from "@/components/Footer";
import Karma from "@/components/index3/Karma";
import { Toaster } from "@/components/ui/toaster";
import JapaneseWave from "@/components/zen/JapaneseWave";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Stars, Workflow, Code, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReferralBanner from "@/components/referrals/ReferralBanner";
import FeatureShowcase from "@/components/features-showcase";
import Dev from "@/components/sections/Dev";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Smooth scroll behavior
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Helmet>
        <title>Hanzo AI - For Developers, By Developers</title>
        <meta name="description" content="Open source AI tools and cloud services designed for developers. From cloud infrastructure to IDE plugins, Hanzo provides everything developers need to build AI-powered applications." />
      </Helmet>
      
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        
        {/* Developer-focused CTA */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full leading-relaxed group"
              onClick={handleSignUp}
            >
              <span className="py-1">Get Started for Free</span> 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-white border-gray-700 hover:bg-gray-800 px-8 py-6 text-lg rounded-full leading-relaxed"
            >
              <Github className="mr-2 h-5 w-5" />
              <span className="py-1">Star on GitHub</span>
            </Button>
          </div>
        </div>
        
        {/* Feature Showcase section with tabs */}
        <FeatureShowcase />
        
        {/* Developer-focused section */}
        <Dev />
        
        {/* Remaining sections */}
        <AIPlatformSection />
        <CloudServices />
        
        {/* Open Source Community Section */}
        <section className="py-16 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-4">
                Open Source
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built by Developers, for Developers</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our core tools are open source and free forever. Join our community of contributors and shape the future of AI development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">GitHub</h3>
                <p className="text-gray-300 mb-4">Explore our open source repositories, contribute code, and report issues.</p>
                <Button variant="outline" size="sm" className="text-white border-gray-700">
                  <a href="https://github.com/hanzoai" target="_blank" rel="noopener noreferrer">
                    Visit GitHub
                  </a>
                </Button>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Documentation</h3>
                <p className="text-gray-300 mb-4">Comprehensive guides, tutorials, and API references for all our tools.</p>
                <Button variant="outline" size="sm" className="text-white border-gray-700">
                  <a href="https://docs.hanzo.ai" target="_blank" rel="noopener noreferrer">
                    Read Docs
                  </a>
                </Button>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-300 mb-4">Join our Discord community to connect with other developers and get help.</p>
                <Button variant="outline" size="sm" className="text-white border-gray-700">
                  <a href="https://discord.gg/hanzoai" target="_blank" rel="noopener noreferrer">
                    Join Discord
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <Karma />
        
        {/* Hanzo Team CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-purple-900 p-4 rounded-full">
                <Users className="h-10 w-10 text-purple-300" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2 text-white leading-tight">Hanzo Team Workspace</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Streamline your workflow with our integrated workspace. Collaborate with your team, manage projects, and get more done.
                </p>
              </div>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full"
                size="lg"
              >
                <a href="https://hanzo.team" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <span className="py-1">Visit Hanzo Team</span> <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        <ReferralBanner />
        <CallToAction />
        <TrustedBy />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
