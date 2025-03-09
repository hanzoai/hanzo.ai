
import React from "react";
import { motion } from "framer-motion";

const clients = [
  { name: "AMD", delay: 0 },
  { name: "Accenture", delay: 0.1 },
  { name: "GM", delay: 0.2 },
  { name: "ESPN", delay: 0.3 },
  { name: "Siemens", delay: 0.4 },
  { name: "Intel", delay: 0.5 },
  { name: "Hulu", delay: 0.6 },
  { name: "VSP", delay: 0.7 }
];

const TrustedBy = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-medium text-gray-400">Trusted by Industry Leaders</h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 px-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: client.delay }}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent"
            >
              {client.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
