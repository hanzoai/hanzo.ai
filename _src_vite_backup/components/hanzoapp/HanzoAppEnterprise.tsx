
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const HanzoAppEnterprise = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Enterprise</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Looking for specific use cases and support?
          </p>
          <Button 
            size="lg"
            className="bg-[#fd4444] hover:bg-[#e03e3e] text-[var(--white)] px-8"
          >
            Let's Chat
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HanzoAppEnterprise;
