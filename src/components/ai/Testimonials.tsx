
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Hanzo's AI Engineering Platform has completely transformed how we build and deploy AI applications. What used to take us weeks now takes days.",
      author: "Sarah Chen",
      title: "CTO, Quantum Innovations",
      image: "/placeholder.svg"
    },
    {
      quote: "The unified approach to model deployment, monitoring, and scaling has allowed our team to focus on building great AI experiences instead of wrestling with infrastructure.",
      author: "James Wilson",
      title: "Head of AI, GlobalTech",
      image: "/placeholder.svg"
    },
    {
      quote: "We evaluated several AI platforms, but Hanzo stood out for its developer experience and comprehensive observability features. It's made monitoring our AI in production so much easier.",
      author: "Maria Rodriguez",
      title: "Principal Engineer, TechFlow",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-64 -right-32 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experiences from Our Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from engineering teams who are building the next generation of AI-powered applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 hover:bg-gray-900/30 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 h-6 w-6 text-purple-500/40" />
              <p className="text-gray-300 mb-8 mt-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-purple-900/30 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="h-full w-full object-cover opacity-70" 
                  />
                </div>
                <div className="ml-4">
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gray-900/30 border border-gray-800 rounded-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8 md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-4">
                The AI Engineering Community
              </h3>
              <p className="text-gray-300 mb-6">
                Join thousands of AI engineers and developers building the future of intelligent applications. 
                Share experiences, get support, and collaborate on best practices.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-gray-300 text-sm">4,500+ community members</span>
                </div>
                <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-gray-300 text-sm">Weekly office hours</span>
                </div>
                <div className="flex items-center bg-gray-800/50 rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-gray-300 text-sm">Dedicated support team</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="flex -space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-12 w-12 rounded-full bg-purple-900/50 border-2 border-gray-900 flex items-center justify-center text-purple-300 text-sm font-medium"
                  >
                    {["JS", "MK", "AL", "TN", "RW"][i]}
                  </div>
                ))}
                <div className="h-12 w-12 rounded-full bg-purple-600/30 border-2 border-gray-900 flex items-center justify-center text-white text-sm font-medium">
                  +2.5k
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
