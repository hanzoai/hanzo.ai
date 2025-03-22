
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-gray-900/20 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all"
    >
      <div className="w-16 h-16 rounded-xl bg-blue-900/20 flex items-center justify-center mb-4">
        {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8" })}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default ProductCard;
