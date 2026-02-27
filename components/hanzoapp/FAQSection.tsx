'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What's the difference between web and desktop?",
    answer: "The web app runs in your browser with cloud sync, perfect for quick access from any device. The desktop app is a native application with offline support, faster performance, and deeper system integrations like file watchers and terminal access.",
  },
  {
    question: "How does Local AI mode work?",
    answer: "Local AI mode runs models entirely on your machine using your GPU. We support Zen, Llama, Mistral, and other open models. Your code and prompts never leave your computer - perfect for sensitive projects or air-gapped environments.",
  },
  {
    question: "What is Hanzo Node?",
    answer: "Hanzo Node lets you contribute compute to the decentralized network and earn LUX tokens. Your node validates AI inferences and participates in Proof of AI consensus. It's optional - you can use Hanzo without running a node.",
  },
  {
    question: "Can I switch between modes?",
    answer: "Yes! Your workspace syncs across all modes when connected. Start on web, continue on desktop, run sensitive tasks locally, and your history follows you. Node mode runs in the background regardless of which interface you use.",
  },
  {
    question: "What models are supported?",
    answer: "Cloud mode supports 100+ models including Zen, GPT-4o, Claude, Gemini, Mistral, and more. Local mode supports Zen (4B-480B), Llama 3, Mistral, and other open models that run on consumer hardware — fully private, no data leaves your machine.",
  },
  {
    question: "Is my code private?",
    answer: "In Local AI mode, absolutely - nothing leaves your machine. In cloud mode, we never train on your code and offer E2E encryption and enterprise data isolation options.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-border">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg text-foreground group-hover:text-foreground transition-colors pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-neutral-900/50 to-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground">
            Have another question?{" "}
            <Link href="/contact" className="hover:underline">
              Contact us
            </Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
