import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-black uppercase tracking-wider transition-all duration-100 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground border-4 border-primary brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_currentColor] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_currentColor]',
        destructive:
          'bg-destructive text-destructive-foreground border-4 border-destructive brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_currentColor]',
        outline:
          'border-4 border-foreground bg-background brutal-shadow hover:bg-accent hover:text-accent-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_currentColor]',
        secondary:
          'bg-secondary text-secondary-foreground border-4 border-secondary brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_currentColor]',
        ghost:
          'hover:bg-accent hover:text-accent-foreground hover:border-4 hover:border-accent',
        link: 'text-primary underline-offset-4 hover:underline font-black',
      },
      size: {
        default: 'h-12 px-6 py-2 has-[>svg]:px-5',
        sm: 'h-10 gap-1.5 px-4 has-[>svg]:px-3',
        lg: 'h-14 px-8 has-[>svg]:px-6',
        icon: 'size-12',
        'icon-sm': 'size-10',
        'icon-lg': 'size-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
