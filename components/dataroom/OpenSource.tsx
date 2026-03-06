'use client'

import React from "react";
import { Github, Heart, ExternalLink } from "lucide-react";
import { Button } from "@hanzo/ui";

const OpenSource = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-6 w-6 text-[#fd4444]" />
              <h3 className="text-xl font-semibold">Built on Open Source</h3>
            </div>
            <p className="text-foreground/80 mb-6">
              Hanzo Dataroom is built on{" "}
              <a href="https://www.papermark.io" target="_blank" rel="noopener noreferrer" className="text-[var(--white)] underline underline-offset-4 hover:text-[#fd4444] transition-colors">
                Papermark
              </a>
              , the open-source DocSend alternative. We contribute back to the community
              and extend it with Hanzo IAM integration, multi-tenant workspaces, and enterprise features.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="border-gray-700 text-foreground/80 hover:bg-gray-800"
                onClick={() => window.open('https://github.com/hanzoai/dataroom', '_blank')}
              >
                <Github className="mr-2 h-4 w-4" />
                hanzoai/dataroom
              </Button>
              <Button
                variant="outline"
                className="border-gray-700 text-foreground/80 hover:bg-gray-800"
                onClick={() => window.open('https://github.com/mfts/papermark', '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Upstream: mfts/papermark
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
