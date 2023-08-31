import * as React from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn.ts'

const tagVariants = cva(
    'text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full',
    {
        variants: {
            variant: {
                primary:
                        'bg-white text-gray-700 border',
                secondary:
                        'bg-pink text-white',
                destructive:
                        'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
                validate:
                        'bg-green-200 text-green-700',
                warning:
                        'bg-orange-200 text-orange-700',
                danger:
                        'bg-red-200 text-red-700',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
)

export interface TagProps extends VariantProps<typeof tagVariants> {
    className?: string
    children?: ReactNode
}

export function Tag({ className, variant, children }: TagProps) {
    return (
        <span className={cn(tagVariants({ variant, className }))}>
            {children}
        </span>
    )
}
