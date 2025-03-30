
import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "After evaluating multiple vector databases, we chose Hanzo Vector for its impressive performance and scalability. It handles our billion-vector dataset with consistent sub-10ms query times.",
      author: "Sophia Chen",
      position: "VP of AI Engineering",
      company: "TechGlobal"
    },
    {
      quote: "Hanzo Vector's ability to handle hybrid search across both vectors and metadata has been a game-changer for our recommendation system. The integration was seamless and the performance boost was immediate.",
      author: "Michael Rodriguez",
      position: "Senior Data Scientist",
      company: "RecoAI"
    },
    {
      quote: "We migrated from a competitor to Hanzo Vector and saw a 7x performance improvement overnight. The migration tools made the process painless, and the support team was exceptional throughout.",
      author: "Aisha Johnson",
      position: "CTO",
      company: "SearchWave"
    }
  ];

  const companyLogos = [
    "IKEA", "NVIDIA", "SmartNews", "Walmart", "Shopee", 
    "Tokopedia", "Shutterstock", "AT&T", "ZipRecruiter", "IBM", 
    "Bosch", "eBay", "Inflection", "Intuit", "NewRelic"
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)] relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--white)] mb-6">
            Loved by GenAI Developers
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Hear what our users say about building with Hanzo Vector
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 relative"
            >
              <div className="absolute -top-4 left-8 text-5xl text-indigo-500">"</div>
              <p className="text-neutral-300 mb-8 relative z-10 pt-4">
                {testimonial.quote}
              </p>
              <div>
                <h4 className="text-[var(--white)] font-semibold">{testimonial.author}</h4>
                <p className="text-neutral-400 text-sm">{testimonial.position}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-[var(--white)] mb-8">
            Trusted for Production Workloads
          </h3>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {companyLogos.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-neutral-500 font-medium text-lg"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
