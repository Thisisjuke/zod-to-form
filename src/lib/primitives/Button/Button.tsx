import * as React from 'react'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import type { Ref } from 'react'
import { cn } from '@/lib/utils/cn'

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium no-underline transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 hover:underline dark:hover:text-slate-100 dark:focus:ring-slate-400 disabled:ring-gray-400 disabled:border-gray-400 disabled:text-gray-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
    {
        variants: {
            variant: {
                primary:
                        'bg-transparent text-pink dark:bg-pink border border-pink rounded-lg font-bold ',
                secondary:
                        'bg-grey-brightest text-carbon dark:bg-pink border border-carbon rounded-full font-bold',
                destructive:
                        'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
                validate:
                        'bg-green-500 text-white hover:bg-green-600 dark:hover:bg-green-600',
                outline:
                        'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
                light:
                        'bg-white text-carbon border border-carbon rounded-md font-bold',
                dark:
                        'bg-carbon text-black border border-black rounded-md font-bold',
                ghost:
                        'hover:bg-accent hover:text-accent-foreground',
                link:
                        'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
            },
            size: {
                default: 'h-10 py-3 px-6',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-11 px-8 rounded-md',
            },
        },
        defaultVariants: {
            variant: 'primary',
            size: 'default',
        },
    },
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    href?: string
    disabled?: boolean
    target?: string
    rel?: string
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ className, variant, size, href, disabled = false, ...props }, ref) => {
        const p = props as any
        let Element = null

        if (disabled) {
            Element = 'button'
            href = undefined
            p.onClick = undefined
        }
        else if (href) {
            // Reminder: If using Next-js, replace this `a` by `Link` coming from `next/link`.
            Element = 'a'
        }
        else {
            Element = 'button'
        }

        return (
            <Element
                href={href}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref as Ref<HTMLAnchorElement>}
                disabled={disabled}
                {...p}
            />
        )
    },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
