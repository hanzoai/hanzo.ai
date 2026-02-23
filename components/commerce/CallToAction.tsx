'use client'

import React from "react";
import { Button } from "@hanzo/ui";
import { ArrowRight, ShoppingCart, Book, Code } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your E-commerce Experience?</h2>
          <p className="text-lg text-neutral-300 mb-8">
            Join thousands of businesses that trust Hanzo Commerce to power their online stores.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center">
              <ShoppingCart className="h-12 w-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Start Selling</h3>
              <p className="text-neutral-400 mb-4 text-center">Launch your store with our easy-to-use platform</p>
              <Button 
                className="mt-auto bg-amber-500 hover:bg-amber-600 text-black"
                onClick={() => window.open('https://console.hanzo.ai', '_blank')}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center">
              <Book className="h-12 w-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-neutral-400 mb-4 text-center">Explore our guides and API references</p>
              <Button 
                className="mt-auto bg-amber-500 hover:bg-amber-600 text-black"
                onClick={() => window.open('https://docs.hanzo.ai/commerce', '_blank')}
              >
                View Docs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center">
              <Code className="h-12 w-12 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">For Developers</h3>
              <p className="text-neutral-400 mb-4 text-center">Integrate our APIs into your applications</p>
              <Button 
                className="mt-auto bg-amber-500 hover:bg-amber-600 text-black"
                onClick={() => window.open('https://docs.hanzo.ai/api', '_blank')}
              >
                API Reference <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Need a Custom Solution?</h3>
          <p className="text-neutral-300 mb-6">
            Our team of experts can help you design and implement a tailored e-commerce solution for your unique business needs.
          </p>
          <Button 
            variant="outline" 
            className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
            onClick={() => window.open('https://hanzo.ai/contact', '_blank')}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
