
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Privacy Policy - Hanzo Industries</title>
        <meta 
          name="description" 
          content="Hanzo Industries privacy policy - how we protect your data and respect your privacy." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              At Hanzo Industries, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our products and services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you use our services, 
              including personal information such as your name, email address, and payment information.
              We also collect usage data and analytics to improve our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services,
              process transactions, send communications, and develop new products and services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Sharing Your Information</h2>
            <p>
              We may share your information with third-party service providers to help us operate our business
              and provide our services. We may also share information if required by law or to protect our rights.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
              However, no method of transmission over the Internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Choices</h2>
            <p>
              You can access, update, or delete your account information at any time by
              logging into your account or contacting us directly.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at
              privacy@hanzo.ai.
            </p>
            
            <p className="mt-8 text-neutral-400">
              Last updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
