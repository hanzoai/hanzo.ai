import { motion } from "framer-motion";
import { BarChart, LineChart, PieChart, Activity, Users, Globe, Zap, Brain, CheckCircle2 } from "lucide-react";
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

  // User Insights section animation variants
  const userInsightsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const userInsightItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
    }
  };

  // AI Analytics section animation variants
  const aiAnalyticsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const aiAnalyticsItemVariants = {
    hidden: { opacity: 0, x: -15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 14 
      }
    }
  };

  // Animation variants for the milestone progress
  const milestoneLineVariants = {
    hidden: { width: 0 },
    visible: (custom: number) => ({
      width: `${custom}%`,
      transition: { 
        duration: 1.5,
        delay: custom === 50 ? 2.5 : custom === 100 ? 5 : 0,
        ease: "easeInOut"
      }
    })
  };

  const milestoneCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: custom === 1 ? 0 : custom === 2 ? 2.5 : 5,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    })
  };

  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.3,
        delay: custom === 1 ? 0.5 : custom === 2 ? 3 : 5.5,
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    })
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

        {/* Milestone Progress Indicator - Moved to appear directly above the feature grid */}
        <div className="relative mb-4 flex justify-center">
          <div className="relative w-full max-w-4xl">
            {/* Background line */}
            <div className="absolute top-6 left-0 w-full h-1 bg-gray-800 rounded-full"></div>
            
            {/* Animated progress line */}
            <motion.div
              className="absolute top-6 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full origin-left"
              variants={milestoneLineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={50}
            ></motion.div>
            
            <motion.div
              className="absolute top-6 left-[50%] h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full origin-left"
              variants={milestoneLineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={50}
            ></motion.div>
            
            {/* Milestone Points */}
            <div className="flex justify-between relative">
              {/* First Milestone */}
              <div className="text-center relative">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gray-900 border-2 border-purple-400 flex items-center justify-center mx-auto relative"
                  variants={milestoneCircleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={1}
                >
                  <motion.div
                    variants={checkmarkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={1}
                  >
                    <Activity className="h-6 w-6 text-purple-400" />
                  </motion.div>
                </motion.div>
                <p className="mt-2 font-medium text-white">Real-time Events</p>
              </div>
              
              {/* Second Milestone */}
              <div className="text-center relative">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gray-900 border-2 border-blue-400 flex items-center justify-center mx-auto"
                  variants={milestoneCircleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={2}
                >
                  <motion.div
                    variants={checkmarkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={2}
                  >
                    <Users className="h-6 w-6 text-blue-400" />
                  </motion.div>
                </motion.div>
                <p className="mt-2 font-medium text-white">User Insights</p>
              </div>
              
              {/* Third Milestone */}
              <div className="text-center relative">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-gray-900 border-2 border-cyan-400 flex items-center justify-center mx-auto"
                  variants={milestoneCircleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  custom={3}
                >
                  <motion.div
                    variants={checkmarkVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    custom={3}
                  >
                    <Brain className="h-6 w-6 text-cyan-400" />
                  </motion.div>
                </motion.div>
                <p className="mt-2 font-medium text-white">AI Analytics</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-10"
        >
          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <p className="text-gray-300">Track user behavior, system events, and business metrics in real-time with millisecond latency.</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl transition-all duration-300 flex flex-col items-center text-center"
          >
            <p className="text-gray-300">Understand user journeys, cohorts, and behavior patterns with AI-powered analytics.</p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover="hover"
            whileTap="tap"
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl transition-all duration-300 flex flex-col items-center text-center"
          >
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
                <pre className="text-sm text-gray-300 overflow-x-auto whitespace-pre">
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

        {/* User Insights Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
          className="mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-semibold text-white text-center mb-12"
          >
            Powerful User Insights for Growth
          </motion.h2>

          <motion.div 
            variants={userInsightsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={userInsightItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/30 to-transparent rounded-xl p-6 ring-1 ring-white/10 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-purple-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Cohort Analysis</h3>
              <p className="text-gray-300">Group users by common characteristics and behaviors to discover usage patterns.</p>
            </motion.div>

            <motion.div 
              variants={userInsightItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/30 to-transparent rounded-xl p-6 ring-1 ring-white/10 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <LineChart className="h-7 w-7 text-blue-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">User Journeys</h3>
              <p className="text-gray-300">Visualize and optimize the complete user journey from acquisition to conversion.</p>
            </motion.div>

            <motion.div 
              variants={userInsightItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/30 to-transparent rounded-xl p-6 ring-1 ring-white/10 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                <PieChart className="h-7 w-7 text-cyan-300" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Engagement Metrics</h3>
              <p className="text-gray-300">Capture and analyze key engagement metrics to improve user retention.</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* AI Analytics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 85 }}
          className="bg-gradient-to-r from-gray-900/20 via-black to-gray-900/20 rounded-xl p-8 mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-semibold text-white text-center mb-10"
          >
            AI-Powered Analytics
          </motion.h2>

          <motion.div
            variants={aiAnalyticsVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div 
              variants={aiAnalyticsItemVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/40 to-black/20 rounded-lg p-5 ring-1 ring-white/5 flex items-start space-x-4"
            >
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-lg p-3">
                <Brain className="h-6 w-6 text-indigo-300" />
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-lg font-medium text-white mb-2">Predictive Analysis</h3>
                <p className="text-gray-300">Forecast future trends and user behaviors with advanced machine learning algorithms.</p>
              </div>
            </motion.div>

            <motion.div 
              variants={aiAnalyticsItemVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/40 to-black/20 rounded-lg p-5 ring-1 ring-white/5 flex items-start space-x-4"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-lg p-3">
                <Activity className="h-6 w-6 text-blue-300" />
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-lg font-medium text-white mb-2">Anomaly Detection</h3>
                <p className="text-gray-300">Automatically identify unusual patterns and potential issues in your application.</p>
              </div>
            </motion.div>

            <motion.div 
              variants={aiAnalyticsItemVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/40 to-black/20 rounded-lg p-5 ring-1 ring-white/5 flex items-start space-x-4"
            >
              <div className="bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-lg p-3">
                <BarChart className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-lg font-medium text-white mb-2">Intelligent Recommendations</h3>
                <p className="text-gray-300">Get actionable insights and recommendations to optimize your business metrics.</p>
              </div>
            </motion.div>
          </motion.div>
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
