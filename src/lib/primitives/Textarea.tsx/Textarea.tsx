import * as React from 'react'

import { cn } from '@/lib/utils/cn'
import { CommonInputVariants } from '@/lib/primitives/common'

export interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    errorMessage?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, errorMessage, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'h-20',
                    CommonInputVariants({ error: !!errorMessage }),
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)
Textarea.displayName = 'Textarea'

export { Textarea }
