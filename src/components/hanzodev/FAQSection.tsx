import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const BRAND_COLOR = "#fd4444";

const faqs = [
  {
    question: "Can I try Hanzo AI Enterprise before committing?",
    answer: "We offer generous credits for teams at large enterprises to experiment with the Hanzo Agent before committing. Contact our sales team to get started with a trial.",
  },
  {
    question: "Can Hanzo AI be deployed on-premise?",
    answer: "Yes, Hanzo AI supports self-hosted and air-gapped deployment options. Our enterprise plan includes on-premise deployment support with full security compliance.",
  },
  {
    question: "What integrations are available?",
    answer: "Hanzo Dev integrates with 500+ tools including GitHub, GitLab, Slack, VS Code, JetBrains IDEs, and all major cloud providers. Check our automations page for the full list.",
  },
  {
    question: "Do you offer volume discounts for large teams?",
    answer: "Yes, we offer competitive volume discounts for teams of 50+ members. Contact our sales team for custom enterprise pricing.",
  },
  {
    question: "What support response times can we expect?",
    answer: "Enterprise customers receive priority support with response times under 4 hours. Pro and Max plan customers receive support within 24 hours.",
  },
  {
    question: "How does Hanzo AI ensure code privacy?",
    answer: "Your code never leaves your environment. Hanzo Dev runs locally with end-to-end encryption. For enterprise deployments, we offer complete data isolation and SOC 2 compliance.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-neutral-800">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg text-white group-hover:text-[#fd4444] transition-colors pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-neutral-500 transition-transform flex-shrink-0 ${
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
            <p className="pb-6 text-neutral-400 leading-relaxed">
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
    <section className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked{" "}
            <span style={{ color: BRAND_COLOR }}>Questions</span>
          </h2>
          <p className="text-neutral-400">
            Looking for something in particular?{" "}
            <Link to="/contact" className="hover:underline" style={{ color: BRAND_COLOR }}>
              Don't hesitate to reach out.
            </Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800"
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
