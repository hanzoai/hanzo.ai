
import React from "react";
import { motion } from "framer-motion";

interface Product {
  name: string;
  description: string;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bgClass?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  title,
  subtitle,
  products,
  bgClass = "bg-gradient-to-br from-purple-900/20 to-indigo-900/20"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl ${bgClass} p-8 backdrop-blur-sm border border-white/10`}
    >
      <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
      {subtitle && <p className="text-gray-300 mb-6">{subtitle}</p>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => {
          // Handle products in format "Name – Description"
          let name, description;
          if (product.description.includes(" – ")) {
            [name, description] = product.description.split(" – ");
          } else {
            name = product.name;
            description = product.description;
          }
          
          return (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-black/30 p-4 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-colors"
            >
              <h4 className="text-lg font-semibold text-purple-400 mb-1">{name}</h4>
              <p className="text-gray-300 text-sm">{description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProductSection;
