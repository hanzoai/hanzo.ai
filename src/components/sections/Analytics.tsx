
import { motion } from "framer-motion";
import { BarChart, LineChart, PieChart, Activity, Users, Globe, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Analytics = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  // Hover animation variants
  const hoverVariants = {
    hover: { 
      scale: 1.03, 
      boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    },
    tap: { 
      scale: 0.98,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 15 
      }
    }
  };

  return <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full mb-6"
          >
            <Activity className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">Real-time Analytics</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-4xl font-display text-white mb-4"
          >
            Scale from Zero to One Billion Users
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto py-0"
          >
            Enterprise-grade analytics built for the AI era. Track, analyze, and optimize your application with our powerful analytics suite.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10 transition-all duration-300"
          >
            <Activity className="h-8 w-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Events</h3>
            <p className="text-gray-300">Track user behavior, system events, and business metrics in real-time with millisecond latency.</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10 transition-all duration-300"
          >
            <Users className="h-8 w-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">User Insights</h3>
            <p className="text-gray-300">Understand user journeys, cohorts, and behavior patterns with AI-powered analytics.</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10 transition-all duration-300"
          >
            <Brain className="h-8 w-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Analytics</h3>
            <p className="text-gray-300">Leverage machine learning to predict trends, detect anomalies, and optimize performance.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="bg-gradient-to-r from-gray-900/20 via-black to-gray-900/20 rounded-xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Planetary-Scale Infrastructure</h3>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.li 
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <Zap className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Global Edge Network</h4>
                    <p className="text-gray-300">200+ data centers worldwide ensuring sub-50ms latency for 99% of users</p>
                  </div>
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <Globe className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Infinite Scale</h4>
                    <p className="text-gray-300">Handle billions of events per day with automatic scaling and zero maintenance</p>
                  </div>
                </motion.li>
                <motion.li 
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <Brain className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">AI-Powered Insights</h4>
                    <p className="text-gray-300">Automatic anomaly detection, trend analysis, and predictive analytics</p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-4"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black/50 p-6 rounded-lg"
              >
                <pre className="text-sm text-gray-300">
                  <code>{`// Track events with one line
await analytics.track({
  event: "purchase",
  value: 99.99,
  currency: "USD"
});`}</code>
                </pre>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="text-center"
              >
                <p className="text-gray-300 mb-2">Starting at</p>
                <div className="text-4xl font-bold text-white mb-2">Free</div>
                <p className="text-gray-400 mb-4">Up to 1M events/month</p>
                <p className="text-sm text-gray-400">Then $0.0001 per event</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-6 text-lg rounded-xl">
              Get Started with Analytics
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};

export default Analytics;
