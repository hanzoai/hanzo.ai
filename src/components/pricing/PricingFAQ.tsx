
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "How are users counted in the Team plan?",
      answer: "Users are individuals with login access to your platform workspace. Each team member with access to your workspace counts as one user for billing purposes. End-users of your applications don't count toward this limit unless they need direct platform access."
    },
    {
      question: "What are AI Units and Compute Units?",
      answer: "AI Units represent the allocation of AI processing resources for tasks like model inference and training. Compute Units are server resources allocated to run your deployments, including CPU, memory, and storage. Both can be adjusted based on your needs within the plan limits."
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Yes, you can change your plan at any time. When upgrading, the new features become available immediately and you'll be billed the prorated difference. When downgrading, changes take effect at the end of your current billing period."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial on our Pro plan with no credit card required. You can also start with our Open Source plan which is free forever, then upgrade when you need more resources or features."
    },
    {
      question: "What happens if I exceed my plan's resource limits?",
      answer: "If you reach your resource limits, you'll receive a notification with options to upgrade your plan or adjust your resource allocation. We don't automatically charge for overages, allowing you to make informed decisions about your usage."
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer a 10% discount when you choose annual billing on any of our paid plans. This option is available during signup or from your billing settings."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto my-16 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="border-gray-800">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="border-b border-gray-800"
          >
            <AccordionTrigger className="py-4 text-left text-gray-200 hover:text-white">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-400 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PricingFAQ;
