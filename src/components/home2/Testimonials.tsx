
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Hanzo AI has cut our development time in half. The platform is incredibly intuitive and powerful.",
    author: "Sarah Chen",
    title: "CTO, TechVision Inc."
  },
  {
    quote: "We've tried many AI platforms, but nothing compares to the reliability and performance of Hanzo.",
    author: "Michael Rodriguez",
    title: "Lead Engineer, DataStream"
  },
  {
    quote: "The support team is phenomenal. Any issues we've had were resolved quickly and efficiently.",
    author: "David Kim",
    title: "AI Director, FutureLabs"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Teams
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our customers are saying about our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
            >
              <div className="mb-6">
                <svg className="h-8 w-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mt-20">
          {['Acme Inc', 'GlobalTech', 'FutureCorp', 'DataStream', 'TechVision'].map((company, index) => (
            <div key={index} className="text-gray-400 text-xl font-bold opacity-70">{company}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
