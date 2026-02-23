'use client'

import Link from 'next/link'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@hanzo/ui";
import { Copy, Check, Gift, Users, Share2, DollarSign } from "lucide-react";

import { toast } from "sonner";
import { GridLines } from "@/components/ui/architectural-elements";
import ChromeText from "@/components/ui/chrome-text";

const Referrals = () => {
  const [copied, setCopied] = useState(false);

  // Example referral link
  const referralLink = "https://hanzo.ai/signup?ref=YOUR_USERNAME";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);

    toast("Link copied!", {
      description: "Your referral link has been copied to the clipboard",
    });

    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] relative overflow-hidden">
            
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <GridLines spacing={100} opacity={0.07} />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      
      
      <main className="pt-20 pb-24">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-block p-3 rounded-full bg-primary/20 border border-white/30 text-foreground mb-6">
                <Gift className="h-8 w-8" />
              </div>
              <ChromeText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
                Hanzo Referral Program
              </ChromeText>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Share Hanzo with friends and colleagues to earn rewards. For every person who signs up and starts using our platform, you'll receive $5 in credits.
              </p>
            </motion.div>
            
            {/* Referral Link Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl mx-auto bg-gray-900/30 border border-gray-800 rounded-xl p-8 mb-16"
            >
              <h2 className="text-2xl font-bold mb-4">Your Referral Link</h2>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex-1 bg-gray-800 p-4 rounded-lg text-foreground/80 font-mono text-sm overflow-hidden">
                  {referralLink}
                </div>
                <Button
                  onClick={copyToClipboard}
                  className="flex-shrink-0 bg-primary hover:bg-primary/20"
                >
                  {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="flex gap-2 border-gray-700 hover:bg-gray-800"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Check out Hanzo AI!&url=${encodeURIComponent(referralLink)}`, '_blank')}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Share on Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex gap-2 border-gray-700 hover:bg-gray-800"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`, '_blank')}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Share on LinkedIn
                </Button>
                <Button
                  variant="outline"
                  className="flex gap-2 border-gray-700 hover:bg-gray-800"
                  onClick={() => window.open(`mailto:?subject=Check out Hanzo AI&body=I've been using Hanzo AI and thought you might be interested. Use my referral link to sign up: ${referralLink}`, '_blank')}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Share via Email
                </Button>
              </div>
            </motion.div>
            
            {/* How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Share2 className="h-8 w-8 text-foreground" />,
                    title: "Share Your Link",
                    description: "Send your unique referral link to friends and colleagues."
                  },
                  {
                    icon: <Users className="h-8 w-8 text-foreground" />,
                    title: "Friends Sign Up",
                    description: "They create an account using your referral link and start using Hanzo."
                  },
                  {
                    icon: <DollarSign className="h-8 w-8 text-foreground" />,
                    title: "Earn Rewards",
                    description: "You receive $5 in credits for each successful referral, automatically added to your account."
                  }
                ].map((step, index) => (
                  <div key={index} className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 border border-border flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "Is there a limit to how many people I can refer?",
                    answer: "No, there's no limit! You can refer as many people as you want and earn $5 for each successful referral."
                  },
                  {
                    question: "When do I receive my referral credits?",
                    answer: "Credits are added to your account automatically once your referred friend completes their signup and starts using their account."
                  },
                  {
                    question: "Do my referred friends get anything?",
                    answer: "Yes! Everyone who signs up gets $5 in free credits to start using Hanzo, whether they came through a referral or not."
                  },
                  {
                    question: "What can I use the credits for?",
                    answer: "Credits can be used for any Hanzo services, including AI compute, vector database usage, cloud deployments, and more."
                  },
                  {
                    question: "How do I track my referrals?",
                    answer: "You can track all your referrals and rewards from your account dashboard under the 'Referrals' tab."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-gray-900/20 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                    <p className="text-foreground/80">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-white/10 to-white/10 rounded-xl border border-border p-10 text-center">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Ready to Start Earning?
            </ChromeText>
            <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto">
              Sign up for a Hanzo account today, get your referral link, and start sharing with friends to earn rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/20 px-8">
                <Link href="/signup">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800 px-8">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      
    </div>
  );
};

export default Referrals;
