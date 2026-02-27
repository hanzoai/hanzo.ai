'use client'

import React, { useEffect, useState } from 'react'
import { useAccount } from '@/contexts/AccountContext'
import AccountLayout from '@/components/account/AccountLayout'
import ReferralHeader from '@/components/referrals/ReferralHeader'
import ReferralLink from '@/components/referrals/ReferralLink'
import ReferralStatsComponent from '@/components/referrals/ReferralStats'
import ReferralHistory from '@/components/referrals/ReferralHistory'
import HowItWorks from '@/components/referrals/HowItWorks'
import TryFreeCoupon from '@/components/referrals/TryFreeCoupon'
import { ReferralRecord, ReferralStats as ReferralStatsType } from '@/components/referrals/types'
import {
  getUserReferrers,
  getReferralStats,
  getReferralHistory,
  createReferrer,
  generateReferralCode,
} from '@/lib/hanzo/referrals'

const ReferralProgram = () => {
  const { user } = useAccount()

  const [referralCode, setReferralCode] = useState<string>('')
  const [referralLink, setReferralLink] = useState<string>('')
  const [stats, setStats] = useState<ReferralStatsType>({
    totalInvited: 0,
    signedUp: 0,
    creditsEarned: 0,
    pending: 0,
  })
  const [history, setHistory] = useState<ReferralRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user?.id) {
      setLoading(false)
      return
    }

    async function loadReferralData() {
      try {
        setLoading(true)
        setError(null)

        // Fetch or create referral code
        let referrers = await getUserReferrers(user!.id)
        let code: string

        if (referrers.length > 0) {
          code = referrers[0].code
        } else {
          // Create a new referrer with generated code
          const generated = generateReferralCode(user!.id)
          const newReferrer = await createReferrer(generated)
          code = newReferrer.code
        }

        setReferralCode(code)
        setReferralLink(`https://hanzo.ai/signup?ref=${code}`)

        // Fetch stats and history in parallel
        const [fetchedStats, fetchedHistory] = await Promise.all([
          getReferralStats(user!.id),
          getReferralHistory(user!.id),
        ])

        setStats(fetchedStats)
        setHistory(fetchedHistory)
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Failed to load referral data'
        setError(msg)
        console.error('Referral data error:', err)
      } finally {
        setLoading(false)
      }
    }

    loadReferralData()
  }, [user?.id])

  return (
    <AccountLayout>
      <div className="space-y-8">
        <ReferralHeader />

        {error && (
          <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 text-red-300 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 animate-pulse">
                <div className="h-4 bg-gray-800 rounded w-1/3 mb-4" />
                <div className="h-8 bg-gray-800 rounded w-full" />
              </div>
            ))}
          </div>
        ) : (
          <>
            <ReferralLink referralLink={referralLink} referralCode={referralCode} />
            <TryFreeCoupon />
            <ReferralStatsComponent referralStats={stats} />
            {history.length > 0 && <ReferralHistory referralHistory={history} />}
            <HowItWorks />
          </>
        )}
      </div>
    </AccountLayout>
  )
}

export default ReferralProgram
