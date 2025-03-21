
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
import { ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReferralBanner from "@/components/referrals/ReferralBanner";

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
        <title>Hanzo AI - Accelerating AI for a Better Future</title>
        <meta name="description" content="Your AI future belongs in your hands. With Hanzo, pioneer a new era of intelligence with customizable, private, transparent, and trusted AI solutions." />
      </Helmet>
      
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <div className="flex justify-center mt-8 mb-8">
          <Button 
            size="lg" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full leading-relaxed"
            onClick={handleSignUp}
          >
            <span className="py-1">Get Started for Free</span> <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Rearranged sections as requested */}
        <AIPlatformSection />
        <CloudServices />
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
        
        {/* Referral Banner moved to bottom before footer */}
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
