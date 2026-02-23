'use client'


import { motion } from "framer-motion";
import { Database, Lock, Zap, Cloud, Settings, Globe } from "lucide-react";
import { Button } from "@hanzo/ui";

const Base = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#000a00]/0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[var(--white)]/10 px-4 py-1 rounded-full mb-6">
            <Database className="h-4 w-4 text-neutral-400" />
            <span className="text-sm text-neutral-400">The Modern Backend Platform</span>
          </div>
          <h2 className="text-4xl font-display text-[var(--white)] mb-4">Everything You Need to Build at Scale</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A complete backend platform with authentication, database, file storage, and serverless functions—all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="bg-gradient-to-br from-gray-900/20 to-transparent p-8 rounded-xl ring-1 ring-white/10"
          >
            <h3 className="text-2xl font-semibold text-[var(--white)] mb-6">One-Line Backend</h3>
            <div className="bg-[var(--black)]/50 p-6 rounded-lg mb-6">
              <pre className="text-sm text-neutral-300">
                <code>{`import { createClient } from '@hanzo/base';

// Complete backend in one line
const client = createClient();`}</code>
              </pre>
            </div>
            <p className="text-neutral-300">Get a complete backend with just one line of code. Includes database, auth, storage, and more.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10">
              <Lock className="h-8 w-8 text-neutral-400 mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Authentication</h4>
              <p className="text-neutral-300">Multi-provider auth with social logins and enterprise SSO</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10">
              <Database className="h-8 w-8 text-neutral-400 mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Database</h4>
              <p className="text-neutral-300">Real-time database with powerful querying and indexing</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10">
              <Cloud className="h-8 w-8 text-neutral-400 mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Storage</h4>
              <p className="text-neutral-300">Secure file storage with CDN and image transformations</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10">
              <Settings className="h-8 w-8 text-neutral-400 mb-4" />
              <h4 className="text-lg font-semibold text-[var(--white)] mb-2">Functions</h4>
              <p className="text-neutral-300">Serverless functions with automatic scaling</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="bg-gradient-to-r from-gray-900/20 via-black to-gray-900/20 rounded-xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--white)] mb-4">Built for Scale</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-neutral-400 mt-1" />
                  <div>
                    <h4 className="text-[var(--white)] font-semibold">Global by Default</h4>
                    <p className="text-neutral-300">Multi-region deployments with automatic failover</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-neutral-400 mt-1" />
                  <div>
                    <h4 className="text-[var(--white)] font-semibold">Enterprise Ready</h4>
                    <p className="text-neutral-300">Enterprise security with GDPR and privacy controls</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Settings className="h-6 w-6 text-neutral-400 mt-1" />
                  <div>
                    <h4 className="text-[var(--white)] font-semibold">Full Control</h4>
                    <p className="text-neutral-300">Custom domains, edge functions, and more</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-neutral-300 mb-2">Starting at</p>
                <div className="text-4xl font-bold text-[var(--white)] mb-2">$49</div>
                <p className="text-neutral-400 mb-4">per month</p>
                <p className="text-sm text-neutral-400">Unlimited users & storage</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <Button className="bg-gray-600 hover:bg-gray-700 text-[var(--white)] px-8 py-6 text-lg rounded-xl">
            Start Building with Base
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Base;
