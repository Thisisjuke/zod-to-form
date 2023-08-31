import * as React from 'react'

import { cn } from '@/lib/utils/cn'
import { CommonInputVariants } from '@/lib/primitives/common'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, errorMessage, ...props }, ref) => {
        return (
            <input
                className={cn(
                    'h-10',
                    CommonInputVariants({ error: !!errorMessage }),
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)
Input.displayName = 'Input'

export { Input }
