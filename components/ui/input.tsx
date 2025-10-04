import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-foreground h-12 w-full min-w-0 border-4 bg-background px-4 py-2 text-base font-medium transition-all duration-100 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm brutal-shadow',
        'focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0px_0px_currentColor]',
        'aria-invalid:border-destructive aria-invalid:text-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
