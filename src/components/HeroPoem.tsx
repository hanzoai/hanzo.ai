
import { motion } from "framer-motion";

const HeroPoem = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto mb-16 space-y-6"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight text-white leading-tight relative z-50 text-center">
        In the age of endless dreams,
        <span className="block bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent py-1 leading-relaxed">
          Ideas take flight on digital wings
        </span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed text-center">
        Through circuits of light and streams of code,<br />
        Hanzo weaves your visions into reality untold.<br />
        With algorithms crafted and AI refined,<br />
        We transform the dreams of your design.
      </p>
    </motion.div>
  );
};

export default HeroPoem;
