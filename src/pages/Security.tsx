
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, AlertTriangle, CheckCircle, Server } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Security - Hanzo Industries</title>
        <meta 
          name="description" 
          content="How Hanzo Industries secures your data and protects your applications with enterprise-grade security measures." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Security at Hanzo Industries</h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              We take security seriously. Our platform is built with multiple layers of protection to 
              safeguard your data and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-purple-400 mr-4" />
                <h2 className="text-2xl font-semibold">Data Protection</h2>
              </div>
              <p className="text-neutral-300 mb-6">
                All data stored on Hanzo platforms is encrypted both at rest and in transit. We use 
                industry-standard AES-256 encryption and TLS 1.3 protocols to ensure your information
                remains private and secure.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>End-to-end encryption for all data</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Secure key management and rotation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-purple-400 mr-4" />
                <h2 className="text-2xl font-semibold">Authentication & Access</h2>
              </div>
              <p className="text-neutral-300 mb-6">
                We implement robust authentication mechanisms and access controls to ensure that only 
                authorized individuals can access your resources and sensitive information.
              </p>
              <ul className="space-y-2 text-neutral-300">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Multi-factor authentication (MFA)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>Role-based access control (RBAC)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                  <span>JWT with short-lived tokens and secure refresh mechanisms</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-16">
            <div className="flex items-center mb-6">
              <Server className="h-8 w-8 text-purple-400 mr-4" />
              <h2 className="text-2xl font-semibold">Global Data Regions</h2>
            </div>
            <p className="text-neutral-300 mb-6">
              Hanzo Cloud operates across multiple geographic regions to ensure data residency compliance
              and low-latency access for your applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">United States (US)</h3>
                <p className="text-neutral-300 mb-2">MCI - Kansas City</p>
                <p className="text-neutral-400 text-sm">Hanzo Cloud region: us-central-1</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Canada (CA)</h3>
                <p className="text-neutral-300 mb-2">YVR - Vancouver</p>
                <p className="text-neutral-400 text-sm">Hanzo Cloud region: ca-west-1</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-purple-300 mb-3">European Union (EU)</h3>
                <p className="text-neutral-300 mb-2">BCN - Barcelona</p>
                <p className="text-neutral-400 text-sm">Hanzo Cloud region: eu-west-1</p>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-8 mb-16">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-yellow-400 mr-4" />
              <h2 className="text-2xl font-semibold">Vulnerability Management</h2>
            </div>
            <p className="text-neutral-300 mb-6">
              Our security team continuously monitors for vulnerabilities across our infrastructure and 
              dependencies. We maintain a responsible disclosure program and promptly address security 
              issues.
            </p>
            
            <h3 className="text-xl font-medium mb-4">Reporting a Security Issue</h3>
            <p className="text-neutral-300">
              If you believe you've found a security vulnerability in our products or services, 
              please email us at <a href="mailto:security@hanzo.ai" className="text-purple-400 hover:text-purple-300">security@hanzo.ai</a>. 
              We appreciate your assistance in keeping Hanzo and our users secure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <Server className="h-7 w-7 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Infrastructure Security</h3>
              <p className="text-neutral-300">
                Our infrastructure is hosted in SOC 2 compliant data centers with 24/7 physical security, 
                redundant power, and network systems.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <Shield className="h-7 w-7 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Compliance</h3>
              <p className="text-neutral-300">
                We maintain compliance with industry standards and regulations, including GDPR, CCPA, 
                and SOC 2 requirements.
              </p>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <AlertTriangle className="h-7 w-7 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
              <p className="text-neutral-300">
                Our dedicated security team is prepared to respond to incidents 24/7, with established 
                protocols to identify, contain, and remediate security threats.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
