
import React from "react";
import { motion } from "framer-motion";
import { GitPullRequest, MessageSquare, Shield, Clock } from "lucide-react";

const PRAgent = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#fd4444]/10 border border-[#fd4444]/30 rounded-full px-4 py-1 inline-flex items-center mb-6">
              <GitPullRequest className="h-4 w-4 mr-2 text-[#fd4444]" />
              <span className="text-sm font-medium text-[#ff6b6b]">PR Agent</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Resolve Pull Requests 10x Faster.
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Bring-in @hanzo-dev into any conversation on GitHub to automatically resolve feedback in the speed.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#fd4444]/10 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-[#fd4444]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Fast revisions.</h3>
                  <p className="text-neutral-300">
                    Skip the back-and-forth. Mention @hanzo-dev in a review comment to automatically resolve feedback in the speed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#fd4444]/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-[#fd4444]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Acclerate not just your product development, but your code quality.</h3>
                  <p className="text-neutral-300">
                    Automatically solve conflicts, add tests, docs, and more. Everything you need to ship better code, faster.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#fd4444]/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-[#fd4444]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">AI Agents You Can Trust.</h3>
                  <p className="text-neutral-300">
                    With complete oversight of every thought and step you are always in full control. Provide feedback and and roll-back in one click if you need to.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg overflow-hidden">
              <div className="p-4 bg-gray-900/70 border-b border-gray-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-6">
                <div className="bg-gray-900/70 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                    <div>
                      <div className="font-medium">Senior Developer</div>
                      <div className="text-neutral-400 text-sm">2 hours ago</div>
                      <div className="mt-2 p-3 bg-gray-800 rounded-lg">
                        <p>Could you add error handling to this component and improve the accessibility?</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fd4444] flex items-center justify-center text-xs font-bold">H</div>
                    <div>
                      <div className="font-medium">Hanzo Dev</div>
                      <div className="text-neutral-400 text-sm">1 hour ago</div>
                      <div className="mt-2 p-3 bg-gray-800 rounded-lg">
                        <p>I've added comprehensive error handling with try/catch blocks and implemented proper ARIA attributes to improve accessibility. The changes have been committed to the PR.</p>
                      </div>
                      <div className="bg-gray-800/70 rounded mt-3 p-2 text-sm border border-gray-700">
                        <div className="text-green-400">+ 15 lines added</div>
                        <div className="text-red-400">- 3 lines removed</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black">✓</div>
                    <span className="text-green-400">Changes approved</span>
                  </div>
                  <div className="text-neutral-400">Ready to merge</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#fd4444]/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#ff6b6b]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PRAgent;
