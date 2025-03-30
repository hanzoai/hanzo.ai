
import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-medium mb-4">How It Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-900/50 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-purple-900/30 text-purple-300 flex items-center justify-center mr-3">
              1
            </div>
            <h3 className="font-medium">Share Your Link</h3>
          </div>
          <p className="text-sm text-neutral-400">
            Share your unique referral link with friends and colleagues via email or social media
          </p>
        </div>
        
        <div className="p-4 bg-gray-900/50 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-purple-900/30 text-purple-300 flex items-center justify-center mr-3">
              2
            </div>
            <h3 className="font-medium">Friends Sign Up</h3>
          </div>
          <p className="text-sm text-neutral-400">
            When your friends use your link to sign up and subscribe to any paid plan
          </p>
        </div>
        
        <div className="p-4 bg-gray-900/50 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-purple-900/30 text-purple-300 flex items-center justify-center mr-3">
              3
            </div>
            <h3 className="font-medium">Earn Credits</h3>
          </div>
          <p className="text-sm text-neutral-400">
            You receive $5 in credits for each successful referral that can be used toward your subscription
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
