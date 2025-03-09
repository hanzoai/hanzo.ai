
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { GridLines, BlueprintLine, ArchitecturalBox } from "@/components/ui/architectural-elements";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Helmet>
        <title>404 - Page Not Found | Hanzo AI</title>
        <meta name="description" content="The page you are looking for doesn't exist or has been moved." />
      </Helmet>
      
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative">
        {/* Background grid elements */}
        <GridLines spacing={60} opacity={0.15} />
        <BlueprintLine orientation="horizontal" position="20%" color="rgba(147, 51, 234, 0.3)" />
        <BlueprintLine orientation="horizontal" position="80%" color="rgba(147, 51, 234, 0.3)" />
        <BlueprintLine orientation="vertical" position="20%" color="rgba(37, 99, 235, 0.3)" />
        <BlueprintLine orientation="vertical" position="80%" color="rgba(37, 99, 235, 0.3)" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-[10%] right-[10%] w-64 h-64 bg-purple-800/10 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-blue-800/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.5,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ArchitecturalBox
            className="max-w-2xl mx-auto p-8 bg-black/40 backdrop-blur-lg border border-gray-800/50 rounded-lg"
            showCorners={true}
            cornerSize={30}
            cornerColor="rgba(147, 51, 234, 0.4)"
          >
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-900/20 border border-purple-500/30 mb-6">
                  <span className="text-3xl font-mono text-purple-300">404</span>
                </div>
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Blueprint Not Found
              </motion.h1>
              
              <motion.p
                className="text-lg text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                The page you're looking for has been moved, deleted, or possibly never existed.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button 
                  className="gap-2 bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-600 hover:to-blue-600"
                  size="lg"
                >
                  <Home size={18} />
                  <Link to="/">Return Home</Link>
                </Button>
                
                <Button
                  variant="outline"
                  className="gap-2 border-gray-700 hover:bg-gray-800/50"
                  size="lg"
                >
                  <ArrowLeft size={18} />
                  <Link to="javascript:history.back()">Go Back</Link>
                </Button>
              </motion.div>
            </div>
          </ArchitecturalBox>
          
          <motion.div
            className="mt-12 text-center text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p>Lost? Looking for a specific resource? Check out our <Link to="/resources" className="text-blue-400 hover:text-blue-300">resources page</Link> or <Link to="/contact" className="text-blue-400 hover:text-blue-300">contact us</Link> for help.</p>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
