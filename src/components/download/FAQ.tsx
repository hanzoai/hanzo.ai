
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What platforms does the Hanzo desktop app support?",
      answer: "Currently, the Hanzo desktop app supports macOS (both Apple Silicon and Intel) and Windows. Mobile support for iOS and Android is coming soon."
    },
    {
      question: "Is my data kept private?",
      answer: "Yes, your data privacy is our priority. Audio transcription and screen captures are processed locally on your device whenever possible, and we maintain strict data protection policies for any cloud processing."
    },
    {
      question: "How do I get started with the desktop app?",
      answer: "Simply download the appropriate version for your operating system, run the installer, and follow the on-screen instructions. The app will guide you through the initial setup process."
    },
    {
      question: "Can I use the desktop app offline?",
      answer: "Some features are available offline, but full functionality requires an internet connection for AI processing and integration with cloud services."
    },
    {
      question: "Do I need a subscription to use the desktop app?",
      answer: "The basic features of the desktop app are free to use. Premium features require a Hanzo subscription, which you can manage through your account settings."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Common Questions
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
