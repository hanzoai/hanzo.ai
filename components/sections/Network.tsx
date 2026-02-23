'use client'


import { motion } from "framer-motion";
import { Globe, Server, Shield, Zap } from "lucide-react";
import { Button } from "@hanzo/ui";

const Network = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[var(--white)]/10 px-4 py-1 rounded-full mb-6">
            <Globe className="h-4 w-4 text-[var(--white)]" />
            <span className="text-sm text-[var(--white)]">Decentralized Network</span>
          </div>
          <h2 className="text-4xl font-display text-[var(--white)] mb-4">The Hanzo Network</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join the decentralized AI network powering the next generation of autonomous applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-xl ring-1 ring-border"
          >
            <h3 className="text-2xl font-semibold text-[var(--white)] mb-6">Connect to Network</h3>
            <div className="bg-[var(--black)]/50 p-6 rounded-lg mb-6">
              <pre className="text-sm text-foreground/80">
                <code>{`import { connectNode } from '@hanzo/network';

// Join the network with one line
const node = connectNode();`}</code>
              </pre>
            </div>
            <p className="text-foreground/80">Join the network with just one line of code. Access distributed computing and storage.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl ring-1 ring-border">
              <Globe className="h-8 w-8 text-[var(--white)] mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Global</h4>
              <p className="text-foreground/80">Distributed across 100+ countries</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl ring-1 ring-border">
              <Server className="h-8 w-8 text-[var(--white)] mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Reliable</h4>
              <p className="text-foreground/80">99.999% uptime guarantee</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl ring-1 ring-border">
              <Shield className="h-8 w-8 text-[var(--white)] mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Secure</h4>
              <p className="text-foreground/80">End-to-end encryption</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl ring-1 ring-border">
              <Zap className="h-8 w-8 text-[var(--white)] mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Fast</h4>
              <p className="text-foreground/80">Sub-second response times</p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-[var(--white)]/5 hover:bg-[var(--white)]/10 text-[var(--white)] px-8 py-6 text-lg rounded-xl border border-border hover:border-border"
          >
            Join the Network
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Network;
