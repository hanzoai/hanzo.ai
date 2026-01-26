
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/signup');
  };
  
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-[#fd4444]/10 relative overflow-hidden">
      {/* Background animation elements */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, #fd4444 0%, transparent 20%), radial-gradient(circle at 70% 50%, #ff6b6b 0%, transparent 20%)",
          backgroundSize: "100% 100%",
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl font-bold mb-6 text-[var(--white)] leading-tight"
        >
          Ready to Transform Your AI Development?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg text-neutral-300 mb-10 leading-relaxed"
        >
          Join thousands of developers and companies building the future with Hanzo AI.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              className="bg-[#fd4444] hover:bg-[#e03e3e] text-[var(--white)] px-8 py-6 text-lg relative overflow-hidden group rounded-full"
              onClick={handleGetStarted}
            >
              <span className="relative z-10 flex items-center py-1 leading-relaxed">
                Get Started for Free 
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut", repeatDelay: 1 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#fd4444] to-[#e03e3e] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
