'use client'

import Link from 'next/link'
import { HanzoLogo } from '@hanzo/logo/react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { logo: 'h-6 w-6', text: 'text-lg' },
  md: { logo: 'h-8 w-8', text: 'text-xl' },
  lg: { logo: 'h-10 w-10', text: 'text-2xl' },
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center space-x-3 group', className)}>
      <HanzoLogo variant="white" className={cn(sizes[size].logo, 'transition-all duration-300')} />
      {showText && (
        <span className={cn(
          'font-semibold transition-colors duration-300',
          sizes[size].text,
          'text-foreground group-hover:text-foreground/90'
        )}>
          Hanzo
        </span>
      )}
    </Link>
  )
}
