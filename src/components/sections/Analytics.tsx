
import { motion } from "framer-motion";
import { BarChart, LineChart, PieChart, Activity, Users, Globe, Zap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Analytics = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1 rounded-full mb-6">
            <Activity className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-400">Real-time Analytics</span>
          </div>
          <h2 className="text-4xl font-display text-white mb-4">Scale from Zero to One Billion Users</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade analytics built for the AI era. Track, analyze, and optimize your application with our powerful analytics suite.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10"
          >
            <Activity className="h-8 w-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Events</h3>
            <p className="text-gray-300">Track user behavior, system events, and business metrics in real-time with millisecond latency.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10"
          >
            <Users className="h-8 w-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">User Insights</h3>
            <p className="text-gray-300">Understand user journeys, cohorts, and behavior patterns with AI-powered analytics.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-gradient-to-br from-gray-900/20 to-transparent rounded-xl ring-1 ring-white/10"
          >
            <Brain className="h-8 w-8 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">AI Analytics</h3>
            <p className="text-gray-300">Leverage machine learning to predict trends, detect anomalies, and optimize performance.</p>
          </motion.div>
        </div>

        <div className="bg-gradient-to-r from-gray-900/20 via-black to-gray-900/20 rounded-xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Planetary-Scale Infrastructure</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Global Edge Network</h4>
                    <p className="text-gray-300">200+ data centers worldwide ensuring sub-50ms latency for 99% of users</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Globe className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Infinite Scale</h4>
                    <p className="text-gray-300">Handle billions of events per day with automatic scaling and zero maintenance</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-gray-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">AI-Powered Insights</h4>
                    <p className="text-gray-300">Automatic anomaly detection, trend analysis, and predictive analytics</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="bg-black/50 p-6 rounded-lg">
                <pre className="text-sm text-gray-300">
                  <code>{`// Track events with one line
await analytics.track({
  event: "purchase",
  value: 99.99,
  currency: "USD"
});`}</code>
                </pre>
              </div>
              <div className="text-center">
                <p className="text-gray-300 mb-2">Starting at</p>
                <div className="text-4xl font-bold text-white mb-2">Free</div>
                <p className="text-gray-400 mb-4">Up to 1M events/month</p>
                <p className="text-sm text-gray-400">Then $0.0001 per event</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-6 text-lg rounded-xl"
          >
            Get Started with Analytics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
