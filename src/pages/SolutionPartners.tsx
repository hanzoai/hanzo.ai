
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChromeText from "@/components/ui/chrome-text";
import { Button } from "@/components/ui/button";
import {
  Network,
  ArrowRight,
  CheckCircle,
  Users,
  Handshake,
  Globe,
  Award,
  Target,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const SolutionPartners = () => {
  const features = [
    {
      icon: Users,
      title: "Technology Partners",
      description: "Collaborate with leading technology providers for integrated solutions."
    },
    {
      icon: Handshake,
      title: "Strategic Alliances",
      description: "Form strategic partnerships that amplify capabilities and market reach."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Access our worldwide ecosystem of partners, vendors, and service providers."
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Work with certified professionals across major technology platforms."
    },
    {
      icon: Target,
      title: "Co-Innovation",
      description: "Jointly develop innovative solutions that address market needs."
    },
    {
      icon: TrendingUp,
      title: "Growth Programs",
      description: "Partner programs designed to accelerate mutual growth and success."
    }
  ];

  const benefits = [
    "Access to 500+ certified technology partners and integration specialists",
    "Reduce implementation time by 40% with pre-built partner integrations",
    "Expand market reach through our global partner ecosystem",
    "Joint go-to-market strategies with leading technology vendors",
    "Preferential pricing and support from strategic technology partners",
    "Co-innovation opportunities with cutting-edge technology providers"
  ];

  const partnerTypes = [
    {
      title: "Cloud Providers",
      description: "Deep partnerships with AWS, Azure, and GCP for seamless cloud integration.",
      results: "Premier tier partnerships"
    },
    {
      title: "ISV Partners",
      description: "Integrate with leading independent software vendors for complete solutions.",
      results: "200+ certified integrations"
    },
    {
      title: "System Integrators",
      description: "Collaborate with global SIs for enterprise-scale implementations.",
      results: "Worldwide delivery capability"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Ecosystem Partners - Hanzo AI</title>
        <meta name="description" content="Partner with the best. Access our global network of technology partners, strategic alliances, and certified experts." />
      </Helmet>

      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <Network className="h-16 w-16 text-purple-400" strokeWidth={1.5} />
            </div>
            <ChromeText as="h1" className="text-5xl sm:text-6xl font-bold mb-6" gradient="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500">
              Ecosystem Partners
            </ChromeText>
            <p className="text-xl text-neutral-300 mb-8">
              Leverage our global network of technology partners and strategic alliances.
              Together, we deliver complete solutions that drive business value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
                <Link to="/contact">Become a Partner</Link>
              </Button>
              <Button asChild variant="outline" className="border-purple-500/40 text-purple-400 hover:bg-purple-500/10 px-8 py-6 text-lg">
                <Link to="/solutions">View Solutions</Link>
              </Button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partner Ecosystem Benefits</h2>
              <p className="text-neutral-400 text-lg">
                Comprehensive partner programs designed for mutual success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6 hover:border-purple-500/40 transition-colors"
                >
                  <feature.icon className="h-10 w-10 text-purple-400 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl border border-purple-500/20 p-10"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Join Our Partner Network</h2>
              <p className="text-neutral-400 text-lg">
                Accelerate growth through strategic partnerships
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-neutral-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partner Types Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Partner Categories</h2>
              <p className="text-neutral-400 text-lg">
                Diverse partnership opportunities across the technology ecosystem
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900/70 to-black/90 rounded-xl border border-gray-800 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-neutral-400 mb-4">{type.description}</p>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-sm text-purple-400 font-semibold">{type.results}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-neutral-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our ecosystem and unlock new opportunities for growth and innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg">
                <Link to="/contact">
                  Apply to Partner Program <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SolutionPartners;
