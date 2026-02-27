'use client'

import React, { useState } from 'react'
import { Copy, Check, Share2, Mail } from 'lucide-react'
import { Button } from '@hanzo/ui'
import { Input } from '@hanzo/ui'
import { Label } from '@hanzo/ui'
import { toast } from 'sonner'
import { sendReferralInvites } from '@/lib/hanzo/referrals'

interface ReferralLinkProps {
  referralLink: string
  referralCode: string
}

const ReferralLink = ({ referralLink, referralCode }: ReferralLinkProps) => {
  const [isCopied, setIsCopied] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [sending, setSending] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setIsCopied(true)
    toast.success('Referral link copied to clipboard!')
    setTimeout(() => setIsCopied(false), 3000)
  }

  const handleSendInvites = async (e: React.FormEvent) => {
    e.preventDefault()
    const emails = emailInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    if (emails.length === 0) {
      toast.error('Please enter at least one email address')
      return
    }

    try {
      setSending(true)
      const result = await sendReferralInvites(emails, referralCode)
      toast.success(`Invitations sent to ${result.sent} contact${result.sent !== 1 ? 's' : ''}!`)
      if (result.failed?.length) {
        toast.error(`Failed to send to: ${result.failed.join(', ')}`)
      }
      setEmailInput('')
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Failed to send invites')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-medium mb-4">Your Referral Link</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            value={referralLink}
            readOnly
            className="pr-12 bg-gray-900 border-gray-700"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full"
            onClick={handleCopyLink}
          >
            {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
        <Button className="flex items-center gap-2" onClick={handleCopyLink}>
          <Share2 className="h-4 w-4" />
          Share Link
        </Button>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <h3 className="text-lg font-medium mb-4">Send Invites via Email</h3>
        <form onSubmit={handleSendInvites} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label htmlFor="emails" className="sr-only">
              Email Addresses
            </Label>
            <Input
              id="emails"
              placeholder="Enter email addresses, separated by commas"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="bg-gray-900 border-gray-700"
              disabled={sending}
            />
          </div>
          <Button type="submit" className="flex items-center gap-2" disabled={sending}>
            <Mail className="h-4 w-4" />
            {sending ? 'Sending...' : 'Send Invites'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ReferralLink
