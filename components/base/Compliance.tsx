'use client'


import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Server } from "lucide-react";
import { Button } from "@hanzo/ui";
import Link from "next/link";
import { HanzoLogo } from "@hanzo/logo/react";

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
                <Shield className="h-6 w-6 text-foreground mr-3" />
                <h2 className="text-2xl font-semibold text-[var(--white)]">Secure & Compliant</h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center bg-primary/10 border border-white/30 rounded-md px-3 py-1">
                  <Lock className="h-4 w-4 text-foreground mr-2" />
                  <span className="text-foreground/70 text-sm">SOC 2 Audit in Progress</span>
                </div>
                <div className="flex items-center bg-primary/10 border border-white/30 rounded-md px-3 py-1">
                  <Lock className="h-4 w-4 text-foreground mr-2" />
                  <span className="text-foreground/70 text-sm">HIPAA BAA Available</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="h-12 w-12 mr-4">
                <HanzoLogo variant="white" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--white)]">Hanzo Base</h3>
                <p className="text-muted-foreground">Secure. Scalable. Open Source.</p>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-white/10 to-white/10 rounded-xl p-6 border border-white/30"
          >
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-foreground mr-3" />
              <h3 className="text-xl font-semibold text-[var(--white)]">Global High-Performance Edge</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-primary/10 border border-white/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground/70 mb-2">15+ Regions</h4>
                <p className="text-foreground/80 text-sm mb-1">Global Coverage</p>
                <p className="text-muted-foreground text-xs">Deploy close to your users worldwide</p>
              </div>

              <div className="bg-primary/10 border border-white/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground/70 mb-2">Auto-scaling</h4>
                <p className="text-foreground/80 text-sm mb-1">Scale to Zero</p>
                <p className="text-muted-foreground text-xs">Pay only for what you use</p>
              </div>

              <div className="bg-primary/10 border border-white/30 rounded-lg p-4">
                <h4 className="font-medium text-foreground/70 mb-2">Data Residency</h4>
                <p className="text-foreground/80 text-sm mb-1">You Choose</p>
                <p className="text-muted-foreground text-xs">Control where your data lives</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="bg-primary/20 border-white/50 hover:bg-primary/30 text-[var(--white)]">
                <Link href="/security">Learn More About Our Security</Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compliance;
