'use client'

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { ArrowRight, Code, Terminal, Download } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const GetStartedSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-background">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ChromeText as="h2" className="text-3xl md:text-5xl font-bold mb-6">
            Start Using Datastore in Minutes
          </ChromeText>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            Get up and running quickly with multiple installation options for MacOS, Linux, Windows, FreeBSD, and Docker.
          </p>

          <div className="flex flex-col items-center justify-center space-y-8 mb-12">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 w-full max-w-2xl">
              <div className="flex items-center mb-3">
                <Terminal className="h-5 w-5 text-foreground/70 mr-2" />
                <span className="text-sm text-muted-foreground">Installation Command</span>
              </div>
              <div className="font-mono text-lg bg-background/40 p-4 rounded-lg text-neutral-200 overflow-x-auto">
                curl https://datastore.hanzo.ai/ | sh
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white/20 to-white/10 hover:from-white/20 hover:to-white/10 text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-border bg-primary/5 hover:bg-primary/10 text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium transition-all flex items-center"
              >
                <Code className="mr-2 h-5 w-5" />
                View Docs
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-white/20 to-white/10 hover:from-white/20 hover:to-white/10 text-[var(--white)] px-8 py-6 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Deploy Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStartedSection;
