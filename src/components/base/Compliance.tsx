
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Compliance = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-[#fd4444] mr-3" />
                <h2 className="text-2xl font-semibold text-[var(--white)]">Secure & Compliant</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center bg-[#fd4444]/10 border border-[#fd4444]/30 rounded-md px-3 py-1">
                  <Lock className="h-4 w-4 text-[#fd4444] mr-2" />
                  <span className="text-[#ff6b6b] text-sm">SOC 2 Audit in Progress</span>
                </div>
                <div className="flex items-center bg-[#fd4444]/10 border border-[#fd4444]/30 rounded-md px-3 py-1">
                  <Lock className="h-4 w-4 text-[#fd4444] mr-2" />
                  <span className="text-[#ff6b6b] text-sm">HIPAA BAA Available</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-12 mr-4 text-[var(--white)]">
                <svg viewBox="0 0 67 67" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Hanzo Logo" role="img">
                  <path d="M22.21 67V44.6369H0V67H22.21Z" fill="currentColor" />
                  <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="#DDDDDD" />
                  <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill="currentColor" />
                  <path d="M22.21 0H0V22.3184H22.21V0Z" fill="currentColor" />
                  <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill="currentColor" />
                  <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="#DDDDDD" />
                  <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill="currentColor" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">Hanzo Base</h3>
                <p className="text-neutral-400">Secure. Scalable. Open Source.</p>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-[#fd4444]/10 to-[#ff6b6b]/10 rounded-xl p-6 border border-[#fd4444]/30"
          >
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-[#fd4444] mr-3" />
              <h3 className="text-xl font-semibold text-[var(--white)]">Global High-Performance Edge</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-[#fd4444]/10 border border-[#fd4444]/30 rounded-lg p-4">
                <h4 className="font-medium text-[#ff6b6b] mb-2">15+ Regions</h4>
                <p className="text-neutral-300 text-sm mb-1">Global Coverage</p>
                <p className="text-neutral-400 text-xs">Deploy close to your users worldwide</p>
              </div>

              <div className="bg-[#fd4444]/10 border border-[#fd4444]/30 rounded-lg p-4">
                <h4 className="font-medium text-[#ff6b6b] mb-2">Auto-scaling</h4>
                <p className="text-neutral-300 text-sm mb-1">Scale to Zero</p>
                <p className="text-neutral-400 text-xs">Pay only for what you use</p>
              </div>

              <div className="bg-[#fd4444]/10 border border-[#fd4444]/30 rounded-lg p-4">
                <h4 className="font-medium text-[#ff6b6b] mb-2">Data Residency</h4>
                <p className="text-neutral-300 text-sm mb-1">You Choose</p>
                <p className="text-neutral-400 text-xs">Control where your data lives</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="bg-[#fd4444]/20 border-[#fd4444]/50 hover:bg-[#fd4444]/30 text-[var(--white)]">
                <Link to="/security">Learn More About Our Security</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compliance;
