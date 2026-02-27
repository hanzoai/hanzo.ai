
import React from 'react'
import { Gift } from 'lucide-react'

const ReferralHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-white/20 to-neutral-900/30 p-8 rounded-xl border border-border">
      <div className="flex items-center gap-6">
        <div className="h-16 w-16 rounded-full bg-primary/10 border border-white/30 flex items-center justify-center flex-shrink-0">
          <Gift className="h-8 w-8 text-foreground" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Referral Program</h1>
          <p className="text-lg text-foreground/80">
            Earn $5 per referral. New users get a free Hanzo Bot trial + $5 compute credits with code{' '}
            <span className="font-mono font-bold text-white">TRYFREE</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ReferralHeader
