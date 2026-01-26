
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, DollarSign, BarChart, Target, Award, Briefcase, BookOpen } from "lucide-react";
import ChromeText from "@/components/ui/chrome-text";
import { GridLines } from "@/components/ui/architectural-elements";
import { Link } from "react-router-dom";

const BRAND_COLOR = "#fd4444";

const Affiliates = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)] relative overflow-hidden">
      <Helmet>
        <title>Affiliate Program - Hanzo AI</title>
        <meta name="description" content="Join Hanzo's Affiliate Program and earn recurring commissions for promoting our AI tools and services to your audience." />
      </Helmet>

      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <GridLines spacing={100} opacity={0.07} />
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#fd4444]/10 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#fd4444]/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <Navbar />

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
              <div className="inline-block p-3 rounded-full bg-[#fd4444]/20 border border-[#fd4444]/30 text-[#fd4444] mb-6">
                <Briefcase className="h-8 w-8" />
              </div>
              <ChromeText as="h1" className="text-4xl md:text-6xl font-bold mb-6">
                Hanzo Affiliate Program
              </ChromeText>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Earn recurring commissions by promoting Hanzo's AI tools and services to your audience. Join our growing network of influencers, content creators, and AI enthusiasts.
              </p>
              <div className="mt-8">
                <Button size="lg" className="px-8" style={{ backgroundColor: BRAND_COLOR }}>
                  Apply Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Commission Structure */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <ChromeText as="h2" className="text-3xl font-bold mb-4">
                Commission Structure
              </ChromeText>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Earn competitive commissions on all Hanzo products and services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <DollarSign className="h-10 w-10 text-[#fd4444]" />,
                  title: "30% First Payment",
                  description: "Earn 30% commission on the first payment made by customers you refer"
                },
                {
                  icon: <BarChart className="h-10 w-10 text-[#fd4444]" />,
                  title: "15% Recurring Revenue",
                  description: "Continue earning 15% on recurring payments for the lifetime of the customer"
                },
                {
                  icon: <Target className="h-10 w-10 text-[#fd4444]" />,
                  title: "90-Day Cookie",
                  description: "Our 90-day cookie tracking ensures you get credit for your referrals"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/20 border border-gray-800 rounded-xl p-8 text-center"
                >
                  <div className="h-20 w-20 rounded-full bg-[#fd4444]/10 border border-[#fd4444]/20 flex items-center justify-center mx-auto mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-300">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-[#fd4444]/15 to-[#fd4444]/10 rounded-xl border border-[#fd4444]/20 p-8"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Revenue Calculator</h3>
                  <p className="text-neutral-300">
                    See how much you could earn as a Hanzo affiliate based on your audience size and conversion rates.
                  </p>
                </div>
                <Button className="px-6" style={{ backgroundColor: BRAND_COLOR }}>
                  Calculate Your Earnings
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <ChromeText as="h2" className="text-3xl font-bold mb-4">
                Why Become an Affiliate
              </ChromeText>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Join forces with a leading AI technology company and earn while helping others discover powerful AI tools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8 text-[#fd4444]" />,
                  title: "Industry-Leading Commissions",
                  description: "Earn some of the highest commission rates in the AI industry with our tiered structure"
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-[#fd4444]" />,
                  title: "Comprehensive Resources",
                  description: "Access marketing materials, banners, product information, and case studies"
                },
                {
                  icon: <DollarSign className="h-8 w-8 text-[#fd4444]" />,
                  title: "Timely Payments",
                  description: "Get paid reliably every month via PayPal, Stripe, or bank transfer"
                },
                {
                  icon: <BarChart className="h-8 w-8 text-[#fd4444]" />,
                  title: "Detailed Analytics",
                  description: "Track your performance with real-time reporting and conversion data"
                },
                {
                  icon: <Target className="h-8 w-8 text-[#fd4444]" />,
                  title: "Dedicated Support",
                  description: "Work with our affiliate manager to optimize your campaigns and maximize earnings"
                },
                {
                  icon: <ExternalLink className="h-8 w-8 text-[#fd4444]" />,
                  title: "High-Converting Landing Pages",
                  description: "Direct your traffic to optimized pages designed to convert visitors into customers"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/20 border border-gray-800 rounded-xl p-6"
                >
                  <div className="h-12 w-12 rounded-lg bg-[#fd4444]/10 border border-[#fd4444]/20 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-neutral-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-900/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <ChromeText as="h2" className="text-3xl font-bold mb-4">
                How It Works
              </ChromeText>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                Get started with Hanzo's Affiliate Program in just a few simple steps
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#fd4444]/50 to-[#fd4444]/20 hidden md:block"></div>

              <div className="space-y-12 relative">
                {[
                  {
                    number: "01",
                    title: "Apply to the Program",
                    description: "Fill out our simple application form to join the Hanzo Affiliate Program"
                  },
                  {
                    number: "02",
                    title: "Get Approved",
                    description: "Our team will review your application and approve your account within 48 hours"
                  },
                  {
                    number: "03",
                    title: "Access Your Dashboard",
                    description: "Get your unique affiliate links and access marketing materials through your dashboard"
                  },
                  {
                    number: "04",
                    title: "Promote Hanzo",
                    description: "Share your affiliate links through your website, social media, newsletter, or other channels"
                  },
                  {
                    number: "05",
                    title: "Track Performance",
                    description: "Monitor your referrals, conversions, and earnings in real-time"
                  },
                  {
                    number: "06",
                    title: "Get Paid",
                    description: "Receive monthly payments for all qualified conversions"
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                  >
                    <div className="md:w-1/2 flex justify-center">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#fd4444] to-[#ff6b6b] flex items-center justify-center text-3xl font-bold z-10">
                        {step.number}
                      </div>
                    </div>
                    <div className="md:w-1/2 bg-gray-900/20 border border-gray-800 rounded-xl p-6">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-neutral-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#fd4444]/15 to-[#fd4444]/10 rounded-xl border border-[#fd4444]/20 p-10 text-center">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Ready to Become an Affiliate?
            </ChromeText>
            <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Join our affiliate program today and start earning commissions by promoting Hanzo's powerful AI tools and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8" style={{ backgroundColor: BRAND_COLOR }}>
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 hover:bg-gray-800 px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Affiliates;
