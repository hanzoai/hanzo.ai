import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-32 px-4 md:px-8 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, #fd4444 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6"
          >
            Ready to{" "}
            <span style={{ color: "#fd4444" }}>build</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl mx-auto"
          >
            Join thousands of developers building the future with Hanzo.
            Start free, scale infinitely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://iam.hanzo.ai/sign-up"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full font-medium text-white text-lg transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#fd4444" }}
            >
              Start Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 rounded-full font-medium text-white text-lg border border-neutral-700 hover:bg-neutral-900 hover:border-neutral-600 transition-all"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Talk to Sales
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600"
          >
            <span>No credit card required</span>
            <span className="hidden sm:inline">-</span>
            <span>Free tier forever</span>
            <span className="hidden sm:inline">-</span>
            <span>Enterprise-grade security</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
