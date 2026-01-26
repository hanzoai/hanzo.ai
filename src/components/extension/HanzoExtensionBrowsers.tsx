
import React from "react";
import { motion } from "framer-motion";
import { Chrome, Compass, LayoutGrid, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrowserCard = ({ icon: Icon, title, description, buttonText }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 flex flex-col"
    >
      <div className="mb-4">
        <Icon className="h-12 w-12 text-[#fd4444] mb-4" />
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-300 mb-6">{description}</p>
      </div>
      
      <div className="mt-auto">
        <Button className="w-full bg-[#fd4444] hover:bg-[#e03e3e]">
          {buttonText}
        </Button>
      </div>
    </motion.div>
  );
};

const HanzoExtensionBrowsers = () => {
  return (
    <section id="browsers" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--black)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Available on All Major Browsers</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Install the Hanzo Extension on your preferred browser
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BrowserCard 
            icon={Chrome}
            title="Chrome"
            description="Perfect integration with Google Chrome browser with all features supported."
            buttonText="Add to Chrome"
          />
          
          <BrowserCard 
            icon={Globe}
            title="Firefox"
            description="Fully compatible with Mozilla Firefox for privacy-conscious users."
            buttonText="Get Firefox Add-on"
          />
          
          <BrowserCard 
            icon={Compass}
            title="Edge"
            description="Enhanced experience on Microsoft Edge with optimized performance."
            buttonText="Add to Edge"
          />
          
          <BrowserCard 
            icon={LayoutGrid}
            title="More Browsers"
            description="Safari, Opera, and other Chromium-based browsers are also supported."
            buttonText="View All Browsers"
          />
        </div>
      </div>
    </section>
  );
};

export default HanzoExtensionBrowsers;
