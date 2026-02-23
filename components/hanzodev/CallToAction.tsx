'use client'

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, var(--primary) 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Create what's exciting.
            <br />
            <span>Maintain what's essential.</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Use Hanzo Dev where you work
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="text-primary-foreground text-lg px-8"

              asChild
            >
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-lg px-8"
              asChild
            >
              <a href="https://docs.hanzo.ai/dev" target="_blank" rel="noopener noreferrer">
                Read the documentation
              </a>
            </Button>
          </div>

          {/* Newsletter signup */}
          <div className="border-t border-border pt-12">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Get the developer newsletter
            </h3>
            <p className="text-muted-foreground text-sm mb-6 max-w-lg mx-auto">
              Product updates, how-tos, community spotlights, and more. Delivered monthly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/50"
              />
              <Button
                className="text-primary-foreground px-6"

              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Please provide your email address if you'd like to receive our monthly developer newsletter.
              You can unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
