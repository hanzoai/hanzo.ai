
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    company: "Arcol",
    quote: "Hanzo is where we host all of our backend services along with our databases. It's been an integral part of our infrastructure since the very beginning.",
    author: "Paul O'Carroll",
    role: "Founder & CEO at Arcol",
    avatar: "/placeholder.svg"
  },
  {
    company: "Resend",
    quote: "Hanzo is a game changer for us. We're currently serving more than 80,000 developers with a small team... every minute spent on infrastructure is a minute we're not building the best email product in the world. If it wasn't for Hanzo, I don't think we would be able to grow as fast as we are today.",
    author: "Zeno Rocha",
    role: "Founder & CEO at Resend",
    avatar: "/placeholder.svg"
  },
  {
    company: "Drifting in Space",
    quote: "Even though we already have an internal Kubernetes cluster and infrastructure-as-code setup, we decided to go with Hanzo so that we weren't spending time writing YAML files when we could be working on the product.",
    author: "Paul Butler",
    role: "Founder, Drifting in Space",
    avatar: "/placeholder.svg"
  },
  {
    company: "Paloma",
    quote: "The flexibility and ability for automation with Hanzo helps us move fast and continuously deploy to production with confidence.",
    author: "Saurabh Bhatia",
    role: "Engineering Manager at Paloma Group",
    avatar: "/placeholder.svg"
  }
];

const TrustedBy = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Trusted by the best in business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hanzo supports great software teams wherever they are. Hear from some of the teams building their products on Hanzo.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold">{testimonial.company}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
