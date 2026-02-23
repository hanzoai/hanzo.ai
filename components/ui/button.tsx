'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@hanzo/ui'
import { cn } from '@/lib/utils'

// Re-export buttonVariants for use with styled links
export { buttonVariants }

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

/**
 * Local Button wrapper that fixes @hanzo/ui Button's asChild bug.
 * The @hanzo/ui Button always passes [null, children] array to Slot,
 * which causes React.Children.only errors in Radix Slot.
 * This version passes children directly as a single element.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button }
