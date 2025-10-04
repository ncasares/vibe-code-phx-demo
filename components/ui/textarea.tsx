import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-foreground placeholder:text-muted-foreground aria-invalid:border-destructive aria-invalid:text-destructive flex field-sizing-content min-h-20 w-full border-4 bg-background px-4 py-3 text-base font-medium transition-all duration-100 outline-none brutal-shadow focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0px_0px_currentColor] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
