'use client'


import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Running with minimal maintenance and config for years",
    rating: 5,
    author: "John C",
    role: "Sr. Software Architect"
  },
  {
    quote: "Fast and powerful reverse proxy with everything you need for your containerized infrastructure",
    rating: 5,
    author: "Dennis M",
    role: "Software Engineer"
  },
  {
    quote: "First thing you install on a fresh Kubernetes cluster",
    rating: 5,
    author: "Steve T",
    role: "DevOps Engineer"
  },
  {
    quote: "The most flexible reverse proxy",
    rating: 4.5,
    author: "Esteban T",
    role: "Development Engineer"
  },
  {
    quote: "The middleware feature makes all the difference",
    rating: 5,
    author: "Werner D",
    role: "Software Architect"
  }
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="text-white/60">★</span>);
  }

  if (halfStar) {
    stars.push(<span key="half" className="text-white/60">★</span>);
  }

  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`} className="text-neutral-500">★</span>);
  }

  return <div className="flex">{stars}</div>;
};

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Users Are Saying</h2>
          <p className="text-xl text-neutral-300">
            Join the growing number of users who trust Hanzo Balancer.
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
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700"
            >
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <StarRating rating={testimonial.rating} />
              <div className="mt-4">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-neutral-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
