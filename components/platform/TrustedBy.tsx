'use client'


import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    company: "Damon Motorcycles",
    quote: "Hanzo has revolutionized our approach to electric motorcycle development. Their platform gives us the tools to innovate at a pace that would be impossible with traditional infrastructure.",
    author: "Jay Giraud",
    role: "Founder & CEO at Damon Motorcycles"
  },
  {
    company: "SKULLY",
    quote: "Working with Hanzo has transformed our ability to create the highest successfully funded Indiegogo project in history. Their DX platform streamlines our development processes while maintaining the highest standards of quality and safety.",
    author: "Marcus Weller",
    role: "CEO at SKULLY"
  },
  {
    company: "Bellabeat",
    quote: "As a company focused on women's health technology, we need partners who understand both tech and human needs. Hanzo has been instrumental in helping us scale our infrastructure while maintaining the personal touch our customers expect.",
    author: "Sandro Mur",
    role: "Co-founder & CEO at Bellabeat"
  },
  {
    company: "Karma",
    quote: "Hanzo's platform revolutionized our growth strategy and catalyzed sales for our crowdfunding campaign. Their AI-driven insights helped us connect with our audience in ways we never thought possible, making our latest collection launch our most successful to date.",
    author: "Antje Worring",
    role: "CEO at Karma Fashion"
  },
  {
    company: "Triller",
    quote: "With Trillerfest reaching over 169M people, Hanzo's platform has been essential to our success. Their scalable solutions have allowed us to deliver exceptional user experiences at a global scale.",
    author: "Vincent Butta",
    role: "Board Member at Triller"
  },
  {
    company: "Lifemed AI",
    quote: "Hanzo's AI Cloud and DX Platform have been transformative for our healthcare AI initiatives. Their solution enables us to deploy sophisticated ML models with confidence while meeting strict compliance requirements.",
    author: "Matthew Joynes",
    role: "Co-founder at Lifemed AI"
  }
];

const getInitials = (name: string) => name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();

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
    <section 
      ref={containerRef} 
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--black)]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-3xl md:text-4xl font-medium mb-6 chrome-text"
            style={{
              backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
            }}
          >
            Trusted by the best in business
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
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
              className="bg-[var(--black)]/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-800/20"
            >
              <div className="mb-4">
                <h3 
                  className="text-xl font-medium chrome-text"
                  style={{
                    backgroundPosition: `${(mousePosition.x / (containerRef.current?.offsetWidth || 1)) * 100}% ${(mousePosition.y / (containerRef.current?.offsetHeight || 1)) * 100}%`,
                  }}
                >
                  {testimonial.company}
                </h3>
              </div>
              
              <p className="text-neutral-300 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-[#ffffff]/20 border border-[#ffffff]/30 text-[var(--white)] flex items-center justify-center font-semibold">
                    {getInitials(testimonial.author)}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--white)]">{testimonial.author}</h4>
                  <p className="text-sm text-neutral-400">{testimonial.role}</p>
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
