
import React from "react";



import { Mail, MapPin, Phone, MessageSquare, Send, Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@hanzo/ui";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      
      
      
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
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
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-[var(--black)]/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-[var(--black)]/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-[var(--black)]/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
                    placeholder="What is this regarding?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-[var(--black)]/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                
                <Button type="submit" className="w-full flex items-center justify-center bg-primary/10 hover:bg-primary/10" size="sm">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col">
              <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-8 border border-border mb-8">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-foreground/70 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-foreground/80">
                        <a href="mailto:info@hanzo.ai" className="hover:text-foreground/70 transition-colors">
                          info@hanzo.ai
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-foreground/70 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-foreground/80">
                        <a href="tel:+18005551234" className="hover:text-foreground/70 transition-colors">
                          +1 (800) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-foreground/70 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-foreground/80">
                        Kansas City, MO<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-800 flex-grow">
                <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
                <p className="text-foreground/80 mb-6">
                  Follow us on social media or join our community platforms to stay updated
                  on the latest news and engage with other Hanzo users.
                </p>
                
                <div className="space-y-4">
                  <a href="https://discord.gg/XthHQQj" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <MessageSquare className="h-5 w-5 text-foreground/70 mr-3" />
                    <span>Join our Discord Community</span>
                  </a>
                  
                  <a href="https://github.com/hanzoai" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Github className="h-5 w-5 text-foreground/70 mr-3" />
                    <span>Follow us on GitHub</span>
                  </a>
                  
                  <a href="https://twitter.com/hanzoai" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Twitter className="h-5 w-5 text-foreground/70 mr-3" />
                    <span>Follow us on Twitter</span>
                  </a>

                  <a href="https://linkedin.com/company/hanzo-ai" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Linkedin className="h-5 w-5 text-foreground/70 mr-3" />
                    <span>Connect on LinkedIn</span>
                  </a>

                  <a href="https://facebook.com/hanzo-inc" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Facebook className="h-5 w-5 text-foreground/70 mr-3" />
                    <span>Like us on Facebook</span>
                  </a>

                  <a href="https://instagram.com/hanzoai" className="flex items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Instagram className="h-5 w-5 text-foreground/70 mr-3" />
                    <span>Follow us on Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <p className="text-foreground/80 mb-4">
              Can't find what you're looking for? Check our comprehensive FAQ section.
            </p>
            <Button variant="outline" className="border-border text-[var(--white)] hover:bg-primary/10" size="sm">
              <a href="/pricing#faq">View FAQ</a>
            </Button>
          </div>
        </div>
      </main>
      
      
    </div>
  );
};

export default Contact;
