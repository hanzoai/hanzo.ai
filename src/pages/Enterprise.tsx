import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Shield, Users, Zap, Globe, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Enterprise = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-400" />,
      title: "Enterprise Security",
      description: "SOC 2, GDPR, CCPA compliance with advanced encryption and audit logging"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-400" />,
      title: "User Management",
      description: "SCIM provisioning, SSO integration, and role-based access control"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-400" />,
      title: "Global Infrastructure",
      description: "Multi-region deployment with 99.99% uptime SLA and dedicated support"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      title: "Custom AI Resources",
      description: "Tailored AI credits, custom models, and dedicated compute infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Helmet>
        <title>Enterprise Solutions - Hanzo AI Platform</title>
        <meta name="description" content="Scale your business with enterprise-grade AI solutions. Dedicated support, custom integrations, and advanced security features for large organizations." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <Building2 className="h-16 w-16 text-blue-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
              Enterprise AI Solutions
            </h1>
            
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Scale your business with enterprise-grade AI solutions. Get dedicated support, 
              custom integrations, and advanced security features designed for large organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
                <a href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Sales
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                <a href="/pricing">View Pricing</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Enterprise Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Enterprise Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Hanzo Enterprise?</h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-semibold mb-4">Dedicated Support</h3>
                <p className="text-neutral-300 text-lg">
                  Get priority support with dedicated account managers, guaranteed response times, 
                  and direct access to our engineering team for critical issues.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-xl p-8 border border-green-500/20">
                <h3 className="text-2xl font-semibold mb-4">Custom Integrations</h3>
                <p className="text-neutral-300 text-lg">
                  Seamlessly integrate with your existing infrastructure, identity providers, 
                  and business systems with our custom integration services.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-semibold mb-4">Flexible Deployment</h3>
                <p className="text-neutral-300 text-lg">
                  Deploy on our cloud, your cloud, or on-premises. We support hybrid deployments 
                  to meet your security and compliance requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-neutral-400 mb-6 text-lg">
                Contact our enterprise sales team for a personalized demo and custom pricing 
                that meets your organization's unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
                  <a href="mailto:enterprise@hanzo.ai" className="flex items-center">
                    Schedule Demo
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Enterprise;