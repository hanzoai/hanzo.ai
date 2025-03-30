
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, Lock, Globe, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            Integrated Global Payments Platform
          </span>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
            Hanzo Payments
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto mb-8">
            Effortlessly accept payments, manage subscriptions, and scale globally.
          </p>
          <p className="text-neutral-300 max-w-3xl mx-auto mb-10">
            Hanzo Payments is a unified financial infrastructure that simplifies and automates payments, 
            subscriptions, and global financial compliance. From innovative startups to enterprise giants, 
            Hanzo Payments delivers customizable checkout experiences, seamless integrations, and powerful 
            analytics to drive revenue growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-600 text-[var(--white)] hover:bg-gray-800"
            >
              Explore APIs
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { icon: <CreditCard className="h-6 w-6 text-purple-400" />, title: "200+ Currencies", text: "Accept payments in local currencies worldwide" },
            { icon: <Lock className="h-6 w-6 text-purple-400" />, title: "Automatic Compliance", text: "Global tax and regulatory compliance built-in" },
            { icon: <Globe className="h-6 w-6 text-purple-400" />, title: "Global Reach", text: "Scale your business to new markets instantly" },
            { icon: <Zap className="h-6 w-6 text-purple-400" />, title: "Instant Setup", text: "Go live with payments in minutes" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-gray-900/50 p-6 rounded-lg border border-gray-800"
            >
              <div className="bg-gray-800/50 p-3 rounded-full w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-400">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
