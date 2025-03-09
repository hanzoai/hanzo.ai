
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Contact Us - Hanzo Industries</title>
        <meta 
          name="description" 
          content="Get in touch with the Hanzo Industries team for inquiries, support, or partnership opportunities." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or need assistance? Our team is here to help. 
              Reach out to us through any of the channels below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                
                <Button type="submit" className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col">
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-xl p-8 border border-purple-500/20 mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-300">
                        <a href="mailto:info@hanzo.ai" className="hover:text-purple-400 transition-colors">
                          info@hanzo.ai
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-300">
                        <a href="tel:+18005551234" className="hover:text-purple-400 transition-colors">
                          +1 (800) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-purple-400 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-300">
                        Kansas City, MO<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800 flex-grow">
                <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
                <p className="text-gray-300 mb-6">
                  Follow us on social media or join our community platforms to stay updated
                  on the latest news and engage with other Hanzo users.
                </p>
                
                <div className="space-y-4">
                  <a href="https://discord.gg/hanzo" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <MessageSquare className="h-5 w-5 text-purple-400 mr-3" />
                    <span>Join our Discord Community</span>
                  </a>
                  
                  <a href="https://github.com/hanzo-ai" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <svg className="h-5 w-5 text-purple-400 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    <span>Follow us on GitHub</span>
                  </a>
                  
                  <a href="https://twitter.com/hanzo_ai" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <svg className="h-5 w-5 text-purple-400 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                    <span>Follow us on Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-300 mb-4">
              Can't find what you're looking for? Check our comprehensive FAQ section.
            </p>
            <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-900/20">
              <a href="/pricing#faq">View FAQ</a>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
