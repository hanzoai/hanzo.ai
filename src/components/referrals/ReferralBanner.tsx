
import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ReferralBanner = () => {
  const navigate = useNavigate();

  const handleReferralClick = () => {
    navigate('/referrals');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-blue-900/10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <Gift className="h-8 w-8 text-purple-400 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">Join Our Referral Program</h2>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Get <span className="text-purple-400 font-semibold">$5 in credit</span> every time a friend signs up and pays for any plan. 
                Share the power of Hanzo AI with your network and earn rewards!
              </p>
            </div>
            
            <Button 
              onClick={handleReferralClick}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-6 shadow-lg hover:shadow-xl transition-all text-lg"
            >
              Start Referring <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralBanner;
