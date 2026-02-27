'use client'

import React, { useState } from 'react'
import { Copy, Check, Ticket, Bot, Cpu, ExternalLink } from 'lucide-react'
import { Button } from '@hanzo/ui'
import { toast } from 'sonner'
import { redeemCoupon } from '@/lib/hanzo/referrals'

const COUPON_CODE = 'TRYFREE'

const TryFreeCoupon = () => {
  const [copied, setCopied] = useState(false)
  const [redeeming, setRedeeming] = useState(false)
  const [redeemed, setRedeemed] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(COUPON_CODE)
    setCopied(true)
    toast.success('Coupon code copied!')
    setTimeout(() => setCopied(false), 3000)
  }

  const handleRedeem = async () => {
    try {
      setRedeeming(true)
      const result = await redeemCoupon(COUPON_CODE)
      if (result.success) {
        setRedeemed(true)
        toast.success('Coupon redeemed! Check your accounts for credits.')
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to redeem coupon')
    } finally {
      setRedeeming(false)
    }
  }

  return (
    <div className="bg-gradient-to-r from-white/5 to-white/[0.02] border border-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
            <Ticket className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-medium">Try Hanzo Free</h2>
            <p className="text-sm text-muted-foreground">
              Use code <span className="font-mono font-bold text-white">TRYFREE</span> to get started
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="h-8 w-8 rounded bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium mb-1">$5/mo Hanzo Bot Trial</h3>
              <p className="text-sm text-muted-foreground">
                Free month of Hanzo Bot — AI assistant for your team with full tool access
              </p>
              <a
                href="https://hanzo.bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white mt-2"
              >
                hanzo.bot <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
            <div className="h-8 w-8 rounded bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cpu className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-medium mb-1">$5 Compute Credits</h3>
              <p className="text-sm text-muted-foreground">
                Credits for AI inference, model hosting, and API calls on Hanzo Console
              </p>
              <a
                href="https://console.hanzo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-white/60 hover:text-white mt-2"
              >
                console.hanzo.ai <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2.5 font-mono text-lg tracking-wider">
            <span className="select-all">{COUPON_CODE}</span>
            <button onClick={handleCopy} className="text-muted-foreground hover:text-white transition-colors">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <Button
            onClick={handleRedeem}
            disabled={redeeming || redeemed}
            className="px-6"
          >
            {redeemed ? 'Redeemed' : redeeming ? 'Redeeming...' : 'Redeem Coupon'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TryFreeCoupon
