'use client'
import { useEffect } from 'react'

export default function Redirect({ to }: { to: string }) {
  useEffect(() => {
    if (to.startsWith('http')) {
      window.location.href = to
    } else {
      window.location.replace(to)
    }
  }, [to])
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="text-white/50 text-sm">Redirecting...</p>
    </div>
  )
}
