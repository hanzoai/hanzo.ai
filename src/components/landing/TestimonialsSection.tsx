
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-6 shadow-lg"
    >
      <Quote className="h-8 w-8 text-purple-400 mb-4" />
      <p className="text-gray-300 text-lg mb-6">{quote}</p>
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Hanzo has completely transformed how we build and deploy AI applications. The developer experience is unmatched.",
      name: "Sarah Chen",
      title: "CTO, TechVision AI"
    },
    {
      quote: "The open-source nature of Hanzo gives us the confidence to build our entire product on top of it. We control our destiny.",
      name: "Marcus Johnson",
      title: "Lead Engineer, DataFusion"
    },
    {
      quote: "We've cut our AI development time in half since switching to Hanzo. The integration between tools is seamless.",
      name: "Priya Sharma",
      title: "AI Product Lead, InnovateX"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by Leading AI Teams
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from developers and teams who are building the future with Hanzo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
