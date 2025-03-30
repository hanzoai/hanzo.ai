
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ChromeText from "@/components/ui/chrome-text";

const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6 mx-auto text-center">
            Start Building Today
          </ChromeText>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto mb-10">
            Join thousands of developers building the future with Hanzo AI Cloud and DX Platform.
            Get started for free and scale as you grow.
          </p>
          
          <Button 
            size="lg"
            className="bg-[var(--white)] hover:bg-gray-100 text-black px-10 py-7 rounded-lg text-xl font-medium shadow-lg hover:shadow-xl transition-all"
            onClick={() => navigate('/signup')}
          >
            Start Building for Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
