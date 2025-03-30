
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const GetStartedSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Start Using Datastore in Minutes
          </ChromeText>
          <p className="text-lg text-neutral-300 mb-10">
            Install Datastore for MacOS, Linux, and FreeBSD.
          </p>
          
          <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 mb-8 inline-block text-left">
            <code className="text-neutral-300 font-mono">curl https://datastore.hanzo.ai/ | sh</code>
          </div>
          
          <p className="text-neutral-400 mb-10">
            Or install for Windows, Docker or see other install options.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
          >
            Deploy Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
