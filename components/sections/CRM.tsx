'use client'


import { motion } from "framer-motion";
import { Users, MessageSquare, BarChart, Calendar } from "lucide-react";
import { Button } from "@hanzo/ui";

const CRM = () => {
  return (
    <section className="py-24 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-background/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-[var(--white)] mb-4"
          >
            Hanzo CRM
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Streamline your customer relationships with AI-powered insights and automation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl ring-1 ring-border hover:ring-border transition-all duration-300"
          >
            <Users className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Contact Management</h3>
            <p className="text-muted-foreground">Organize and track customer interactions with AI-enhanced contact profiles</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl ring-1 ring-border hover:ring-border transition-all duration-300"
          >
            <MessageSquare className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Smart Communication</h3>
            <p className="text-muted-foreground">Automated messaging and follow-ups powered by contextual AI understanding</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl ring-1 ring-border hover:ring-border transition-all duration-300"
          >
            <BarChart className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Analytics Dashboard</h3>
            <p className="text-muted-foreground">Real-time insights and predictive analytics to optimize customer relationships</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl ring-1 ring-border hover:ring-border transition-all duration-300"
          >
            <Calendar className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-[var(--white)] mb-2">Smart Scheduling</h3>
            <p className="text-muted-foreground">AI-powered meeting scheduling and follow-up management</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-[var(--white)] text-primary-foreground hover:bg-gray-100"
          >
            <a href="https://console.hanzo.ai/crm">Try Hanzo CRM</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CRM;
