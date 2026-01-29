
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { User, UserCheck, Shield, Lock, UserCog, Key, Fingerprint, History } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ChromeText from "@/components/ui/chrome-text";

const Identity = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1 inline-block mb-4">
              <span className="text-red-400 text-sm font-medium">Identity Management</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
              Hanzo Identity
            </h1>
            <p className="text-xl text-neutral-300 mb-8">
              Secure, scalable identity and access management for your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-[var(--white)] px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-red-500/30 text-[var(--white)] hover:bg-red-900/20 px-8 py-6 text-lg">
                View Documentation
              </Button>
            </div>
          </div>
          
          {/* Hero Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 bg-red-900/20 border border-red-500/20 rounded-xl p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-red-800/30 flex items-center justify-center mb-4">
                <User className="h-10 w-10 text-red-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">User Authentication</h3>
              <p className="text-neutral-300 text-center">
                Multi-factor authentication, social logins, and passwordless options
              </p>
            </div>
            
            <div className="md:col-span-1 bg-red-900/20 border border-red-500/20 rounded-xl p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-red-800/30 flex items-center justify-center mb-4">
                <Shield className="h-10 w-10 text-red-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Access Control</h3>
              <p className="text-neutral-300 text-center">
                Role-based access control, custom claims, and fine-grained permissions
              </p>
            </div>
            
            <div className="md:col-span-1 bg-red-900/20 border border-red-500/20 rounded-xl p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-red-800/30 flex items-center justify-center mb-4">
                <Lock className="h-10 w-10 text-red-300" />
              </div>
              <h3 className="text-lg font-bold mb-2">Enterprise SSO</h3>
              <p className="text-neutral-300 text-center">
                SAML, OIDC, and enterprise identity provider integrations
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Key Features & Capabilities
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Complete identity management solutions for every authentication and authorization need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-red-900/20 border border-red-500/30 rounded-xl p-6"
            >
              <UserCheck className="h-10 w-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-factor Authentication</h3>
              <p className="text-neutral-300">
                Secure access with SMS, email, authenticator apps, and biometric verification.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-red-900/20 border border-red-500/30 rounded-xl p-6"
            >
              <UserCog className="h-10 w-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">User Management</h3>
              <p className="text-neutral-300">
                Comprehensive tools for user creation, profile management, and account recovery.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-red-900/20 border border-red-500/30 rounded-xl p-6"
            >
              <Key className="h-10 w-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Single Sign-On (SSO)</h3>
              <p className="text-neutral-300">
                Seamless authentication across multiple applications with SAML and OIDC support.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-red-900/20 border border-red-500/30 rounded-xl p-6"
            >
              <Shield className="h-10 w-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Role-Based Access Control</h3>
              <p className="text-neutral-300">
                Define and manage permissions with customizable roles and user groups.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-red-900/20 border border-red-500/30 rounded-xl p-6"
            >
              <Fingerprint className="h-10 w-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Passwordless Authentication</h3>
              <p className="text-neutral-300">
                Secure login options without passwords using magic links, WebAuthn, and biometrics.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-red-900/20 border border-red-500/30 rounded-xl p-6"
            >
              <History className="h-10 w-10 text-red-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Audit & Compliance</h3>
              <p className="text-neutral-300">
                Comprehensive logging and reporting for user activities and access attempts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Enterprise Section */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ChromeText as="h2" className="text-3xl font-bold mb-4">
              Enterprise-Ready Solutions
            </ChromeText>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Secure identity management that meets the highest compliance standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Compliance & Security</h3>
              <p className="text-neutral-300 mb-4">
                Meet regulatory requirements with built-in compliance features.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Enterprise security with GDPR and privacy controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Data residency controls and regional isolation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Automated security assessments</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise Identity</h3>
              <p className="text-neutral-300 mb-4">
                Seamlessly integrate with your existing identity infrastructure.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Active Directory and LDAP integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Enterprise SSO with major identity providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Custom branding and white-labeling</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Customer Identity</h3>
              <p className="text-neutral-300 mb-4">
                Create seamless authentication experiences for your customers.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Social login integrations (Google, Facebook, Apple, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Progressive profiling and user segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Consent management for privacy compliance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Developer Experience</h3>
              <p className="text-neutral-300 mb-4">
                Extensive SDKs and tools for seamless integration.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>SDKs for all major languages and frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Comprehensive API documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Pre-built UI components for auth flows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-900/20 to-red-900/20 rounded-2xl p-8 md:p-12 border border-red-500/30">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Secure Your Applications</h2>
              <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
                Get started with Hanzo Identity today and implement secure authentication in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-[var(--white)] px-8 py-6 text-lg">
                  Sign Up Free
                </Button>
                <Button variant="outline" className="border-red-500/30 text-[var(--white)] hover:bg-red-900/20 px-8 py-6 text-lg">
                  Read Documentation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Identity;
