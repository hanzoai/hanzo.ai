
import React from 'react';
import { Button } from "@hanzo/ui";

const MachinesCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            background: `linear-gradient(to right, var(--primary)15, var(--primary)10)`,
            border: "1px solid color-mix(in srgb, var(--primary) 25%, transparent)"
          }}
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Power Your AI Workloads</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get started with Hanzo Machines today and experience high-performance AI infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="text-primary-foreground px-8 py-6 text-lg"

              >
                Sign Up Free
              </Button>
              <Button
                variant="outline"
                className="text-foreground px-8 py-6 text-lg"
                style={{ borderColor: "color-mix(in srgb, var(--primary) 30%, transparent)" }}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinesCTA;
