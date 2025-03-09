
import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

const securityFeatures = [
  "SOC 2 Type II", 
  "ISO 27001 certified", 
  "GDPR compliant", 
  "HIPAA compliant", 
  "End-to-end encryption", 
  "Secure data residency options", 
  "Role-based access control", 
  "Audit logs"
];

const Security = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent opacity-70"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center mb-6 bg-green-900/30 p-3 rounded-full">
              <Shield className="h-7 w-7 text-green-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise-Grade Security & Compliance</h2>
            <p className="text-lg text-gray-300 mb-8">
              Hanzo Observability is engineered with enterprise-grade security, compliance, and privacy at its foundation.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl blur opacity-75"></div>
            <div className="relative bg-black rounded-xl border border-gray-800 p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-900/30 rounded-md mr-4">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Data Encryption</h3>
                    <p className="text-gray-400 text-sm">All data encrypted at rest and in transit</p>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="mb-3 text-sm text-gray-400">Security Certifications</div>
                  <div className="grid grid-cols-2 gap-3">
                    {["SOC 2", "ISO 27001", "GDPR", "HIPAA"].map((cert, idx) => (
                      <div key={idx} className="bg-gray-800/50 p-2 rounded flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-sm">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4">
                  <div className="mb-3 text-sm text-gray-400">Data Privacy Controls</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data Retention</span>
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-5/6 h-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Access Controls</span>
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Audit Logging</span>
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-5/6 h-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;
