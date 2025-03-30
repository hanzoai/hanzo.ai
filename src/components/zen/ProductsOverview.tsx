
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Cloud, Code, Cpu } from "lucide-react";

const ProductsOverview = () => {
  const products = [
    {
      name: "Hanzo Cloud",
      icon: Cloud,
      description: "Deploy with tranquility. Scale without attachment to infrastructure.",
      principle: "The wise engineer creates form from emptiness.",
      path: "/cloud"
    },
    {
      name: "Hanzo Vector",
      icon: Database,
      description: "Store and query vectors with efficiency and grace.",
      principle: "Knowledge structured becomes wisdom accessible.",
      path: "/vector"
    },
    {
      name: "Hanzo AI",
      icon: Cpu,
      description: "Harness artificial intelligence with mindful purpose.",
      principle: "Let AI amplify intention, not replace discernment.",
      path: "/ai"
    },
    {
      name: "Hanzo Code",
      icon: Code,
      description: "Write code that follows the middle path - neither complex nor simplistic.",
      principle: "Perfect code is not when there is nothing more to add, but when there is nothing left to take away.",
      path: "/hanzocode"
    }
  ];

  return (
    <section className="py-24 px-4 bg-black relative">
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 30%, rgba(25,25,25,1), rgba(0,0,0,1))"
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
            The Way of Building
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Each tool embodies our principles. Together, they form a complete system for enlightened engineering.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/40 to-black border border-white/5 rounded-md p-6 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mr-4">
                  <product.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-white text-lg font-medium">{product.name}</h3>
              </div>
              <p className="text-gray-400 mb-4">{product.description}</p>
              <div className="text-gray-600 text-sm italic mb-6">"{product.principle}"</div>
              <Link 
                to={product.path} 
                className="text-gray-400 hover:text-white text-sm flex items-center transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center border border-white/5 rounded-md p-8 bg-gradient-to-b from-transparent to-gray-900/20"
        >
          <h3 className="text-2xl font-medium mb-4 text-white">Seek guidance from a Sensei</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-6">
            Our masters can guide your team through the principles and practices of enlightened engineering.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-white transition-all duration-300"
          >
            Request Sensei Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsOverview;
