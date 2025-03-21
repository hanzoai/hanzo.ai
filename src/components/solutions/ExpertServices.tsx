
import React from "react";
import { Users, Shield, ExternalLink, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const ExpertServices: React.FC = () => {
  return (
    <div className="mb-24 bg-gradient-to-br from-gray-900/70 to-black/90 p-10 rounded-2xl border border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="p-6 bg-gradient-to-br from-purple-900/50 to-blue-900/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors">
          <div className="p-3 rounded-lg bg-purple-500/20 self-start inline-block mb-4">
            <Users className="h-6 w-6 text-purple-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Hanzo Agency</h3>
          <p className="text-gray-300 mb-5">
            Our AI-powered creative agency helps brands transform their digital presence with cutting-edge design, 
            content, and marketing strategies powered by artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://hanzo.agency" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-md text-white transition-colors"
            >
              <span>Visit Hanzo Agency</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href="/contact" 
              className="flex items-center gap-2 px-5 py-2.5 border border-purple-500/40 hover:border-purple-500 rounded-md text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Contact us</span>
              <Mail size={14} />
            </a>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-green-900/50 to-teal-900/30 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-colors">
          <div className="p-3 rounded-lg bg-green-500/20 self-start inline-block mb-4">
            <Shield className="h-6 w-6 text-green-400" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Sensei Group</h3>
          <p className="text-gray-300 mb-5">
            Our collective of fractional CXOs and industry experts help enterprises implement transformative 
            technology solutions and drive strategic growth initiatives.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://sensei.group" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-500 rounded-md text-white transition-colors"
            >
              <span>Visit Sensei Group</span>
              <ExternalLink size={14} />
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 px-5 py-2.5 border border-green-500/40 hover:border-green-500 rounded-md text-green-400 hover:text-green-300 transition-colors"
            >
              <span>Schedule a call</span>
              <Phone size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertServices;
