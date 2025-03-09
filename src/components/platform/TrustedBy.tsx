
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    company: "Damon Motorcycles",
    quote: "Hanzo has revolutionized our approach to electric motorcycle development. Their platform gives us the tools to innovate at a pace that would be impossible with traditional infrastructure.",
    author: "Jay Giraud",
    role: "Founder & CEO at Damon Motorcycles",
    avatar: "/placeholder.svg"
  },
  {
    company: "SKULLY",
    quote: "Working with Hanzo has transformed our ability to integrate AR technology into our helmets. Their DX platform streamlines our development processes while maintaining the highest standards of quality and safety.",
    author: "Ivan Contreras",
    role: "CEO at SKULLY",
    avatar: "/placeholder.svg"
  },
  {
    company: "Bellabeat",
    quote: "As a company focused on women's health technology, we need partners who understand both tech and human needs. Hanzo has been instrumental in helping us scale our infrastructure while maintaining the personal touch our customers expect.",
    author: "Urška Sršen",
    role: "Co-founder & CEO at Bellabeat",
    avatar: "/placeholder.svg"
  },
  {
    company: "Triller",
    quote: "In the fast-moving world of social media and entertainment, Hanzo gives us the agility we need. Their platform has been key to our ability to scale rapidly while delivering exceptional user experiences.",
    author: "Mahi de Silva",
    role: "CEO at Triller",
    avatar: "/placeholder.svg"
  },
  {
    company: "ZOO",
    quote: "Hanzo's platform has been a game-changer for us at ZOO. The combination of power and flexibility they provide has allowed us to focus on innovation rather than infrastructure concerns.",
    author: "Logan Paul",
    role: "Founder at ZOO",
    avatar: "/placeholder.svg"
  }
];

const TrustedBy = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl font-bold mb-4 text-gradient-steel"
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            Trusted by the best in business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry leaders across various sectors rely on Hanzo for their technological needs. Here's what they have to say.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 
                  className="text-xl font-bold text-gradient-steel"
                  style={{
                    backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
                  }}
                >
                  {testimonial.company}
                </h3>
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

      <style>
        {`
        .text-gradient-steel {
          background: linear-gradient(
            90deg,
            rgb(180, 180, 180),
            rgb(240, 240, 240),
            rgb(180, 180, 180)
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 6s ease infinite;
          transition: background-position 0.3s ease;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </section>
  );
};

export default TrustedBy;
