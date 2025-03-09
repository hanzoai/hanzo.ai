
import React from "react";
import { motion } from "framer-motion";

const HanzoCodeCompanies = () => {
  const companies = [
    { name: "Company 1", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
    { name: "Company 2", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
    { name: "Company 3", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
    { name: "Company 4", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
    { name: "Company 5", logo: "/lovable-uploads/28d53ec4-328f-4812-862b-b9a760bbabae.png" },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-xl text-gray-400">Trusted by engineers at</p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-8 w-24 flex items-center justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HanzoCodeCompanies;
