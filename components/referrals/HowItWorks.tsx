
import React from 'react'

const HowItWorks = () => {
  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-medium mb-4">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-900/50 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 text-foreground flex items-center justify-center mr-3">
              1
            </div>
            <h3 className="font-medium">Share Your Link</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Share your unique referral link or the <span className="font-mono text-white">TRYFREE</span> coupon code with friends and colleagues
          </p>
        </div>

        <div className="p-4 bg-gray-900/50 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 text-foreground flex items-center justify-center mr-3">
              2
            </div>
            <h3 className="font-medium">They Get Rewards</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            New users get a free $5/mo Hanzo Bot trial and $5 in compute credits on Hanzo Console
          </p>
        </div>

        <div className="p-4 bg-gray-900/50 rounded-lg">
          <div className="flex items-center mb-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 text-foreground flex items-center justify-center mr-3">
              3
            </div>
            <h3 className="font-medium">You Earn Credits</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            You receive $5 in credits for each successful referral that converts to a paid plan
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
