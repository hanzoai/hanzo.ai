'use client'

import Link from 'next/link'
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
      <div className="relative">
        <svg
          className={cn(sizes[size].logo, 'transition-all duration-300')}
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.21 67V44.6369H0V67H22.21Z" fill="#ffffff" />
          <path d="M0 44.6369L22.21 46.8285V44.6369H0Z" fill="#DDDDDD" />
          <path d="M66.7038 22.3184H22.2534L0.0878906 44.6367H44.4634L66.7038 22.3184Z" fill="#ffffff" />
          <path d="M22.21 0H0V22.3184H22.21V0Z" fill="#ffffff" />
          <path d="M66.7198 0H44.5098V22.3184H66.7198V0Z" fill="#ffffff" />
          <path d="M66.6753 22.3185L44.5098 20.0822V22.3185H66.6753Z" fill="#DDDDDD" />
          <path d="M66.7198 67V44.6369H44.5098V67H66.7198Z" fill="#ffffff" />
        </svg>
      </div>
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
