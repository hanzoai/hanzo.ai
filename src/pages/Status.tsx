
import React from 'react';
import { CheckCircle, Server } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection, { AnimatedHeading } from '@/components/ui/animated-section';

const StatusPage = () => {
  // Simulated status data
  const services = [
    { name: 'API', status: 'operational', uptime: '99.99%' },
    { name: 'Authentication', status: 'operational', uptime: '99.98%' },
    { name: 'Database', status: 'operational', uptime: '99.95%' },
    { name: 'Storage', status: 'operational', uptime: '99.99%' },
    { name: 'Compute', status: 'operational', uptime: '99.97%' },
    { name: 'CDN', status: 'operational', uptime: '100%' },
    { name: 'Monitoring', status: 'operational', uptime: '99.99%' },
  ];

  return (
    <div className="min-h-screen bg-[var(--black)] text-[var(--white)]">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <AnimatedHeading>System Status</AnimatedHeading>
            
            <div className="flex items-center mt-2 mb-8">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-green-500 font-medium">All systems operational</span>
            </div>
            
            <div className="mt-8 space-y-6">
              <div className="backdrop-blur-xl bg-[var(--black)]/40 border border-white/5 rounded-xl p-6">
                <h2 className="text-xl font-medium mb-4">Services Status</h2>
                <div className="divide-y divide-gray-800">
                  {services.map((service, index) => (
                    <div key={index} className="py-4 flex items-center justify-between">
                      <div className="flex items-center">
                        <Server className="h-5 w-5 text-neutral-400 mr-3" />
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-neutral-300 mr-4">Operational</span>
                        <span className="text-neutral-500">{service.uptime} uptime</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="backdrop-blur-xl bg-[var(--black)]/40 border border-white/5 rounded-xl p-6">
                <h2 className="text-xl font-medium mb-4">Recent Incidents</h2>
                <p className="text-neutral-400">No incidents reported in the last 90 days.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StatusPage;
