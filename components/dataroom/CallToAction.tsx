'use client'

import React from "react";
import { Button } from "@hanzo/ui";
import { ArrowRight, FolderLock, Book, Code } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-6">Ready to Share Documents Securely?</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Join teams that trust Hanzo Dataroom to manage their fundraising and due diligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center">
              <FolderLock className="h-12 w-12 text-foreground/60 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Start Sharing</h3>
              <p className="text-muted-foreground mb-4 text-center">Share documents with real-time analytics</p>
              <Button
                className="mt-auto bg-primary/10 hover:bg-primary/10 text-primary-foreground"
                onClick={() => window.open('https://dataroom.hanzo.ai', '_blank')}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center">
              <Book className="h-12 w-12 text-foreground/60 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-muted-foreground mb-4 text-center">Explore our guides and API references</p>
              <Button
                className="mt-auto bg-primary/10 hover:bg-primary/10 text-primary-foreground"
                onClick={() => window.open('https://docs.hanzo.ai/docs/services/dataroom', '_blank')}
              >
                View Docs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 flex flex-col items-center">
              <Code className="h-12 w-12 text-foreground/60 mb-4" />
              <h3 className="text-xl font-semibold mb-2">For Developers</h3>
              <p className="text-muted-foreground mb-4 text-center">Integrate document sharing into your apps</p>
              <Button
                className="mt-auto bg-primary/10 hover:bg-primary/10 text-primary-foreground"
                onClick={() => window.open('https://github.com/hanzoai/dataroom', '_blank')}
              >
                View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 border border-border rounded-lg p-6 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Need a Custom Solution?</h3>
          <p className="text-foreground/80 mb-6">
            Our team can help you design a tailored data room setup for your fundraising or due diligence needs.
          </p>
          <Button
            variant="outline"
            className="border-border text-foreground/60 hover:bg-primary/5"
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
