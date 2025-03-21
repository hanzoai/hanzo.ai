
import React from "react";
import { motion } from "framer-motion";
import ChromeText from "@/components/ui/chrome-text";

const DemoSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            See it in Action
          </ChromeText>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From idea to production in minutes, not months
          </p>
        </motion.div>
        
        <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-white/10 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-sm text-gray-400">terminal@hanzo.cloud</div>
          </div>
          
          <motion.div 
            className="p-6 font-mono text-sm overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-green-400">$</span> <span className="text-blue-300">hanzo</span> <span className="text-purple-300">init</span> <span className="text-gray-400">my-ai-app</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-2"
            >
              <span className="text-gray-400">Initializing new AI project...</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mt-2"
            >
              <span className="text-gray-400">✓ Created project directory</span><br />
              <span className="text-gray-400">✓ Initialized Git repository</span><br />
              <span className="text-gray-400">✓ Set up project configuration</span><br />
              <span className="text-gray-400">✓ Installed dependencies</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.7 }}
              className="mt-4"
            >
              <span className="text-green-400">$</span> <span className="text-blue-300">hanzo</span> <span className="text-purple-300">deploy</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="mt-2"
            >
              <span className="text-gray-400">Deploying to Hanzo Cloud...</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.7 }}
              className="mt-2"
            >
              <span className="text-gray-400">✓ Built application</span><br />
              <span className="text-gray-400">✓ Uploaded assets</span><br />
              <span className="text-gray-400">✓ Deployed functions</span><br />
              <span className="text-gray-400">✓ Configured AI endpoints</span><br />
              <span className="text-gray-400">✓ Deployment complete!</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 3.2 }}
              className="mt-4"
            >
              <span className="text-gray-400">Your app is live at:</span> <span className="text-blue-400 underline">https://my-ai-app.hanzo.cloud</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
