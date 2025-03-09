
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gift, Users } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";

const ReferralBanner = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl border border-purple-500/20 p-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
              <Gift className="h-6 w-6 text-purple-300" />
            </div>
            <div>
              <ChromeText as="h2" className="text-xl md:text-2xl font-bold mb-1">
                Invite Friends, Earn Rewards
              </ChromeText>
              <p className="text-gray-300">
                Get $5 in credits for every friend who signs up and starts using Hanzo
              </p>
            </div>
          </div>
          <Link
            to="/referrals"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors flex items-center gap-2"
          >
            <Users className="h-5 w-5" />
            Join Our Referral Program
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ReferralBanner;
