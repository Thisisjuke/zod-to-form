import { cva } from 'class-variance-authority'

export const CommonInputVariants = cva(
    'w-full min-w-[70px] rounded-md border bg-transparent py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
    {
        variants: {
            error: {
                false:
                    'border-slate-300 placeholder:text-slate-400',
                true:
                    'border-red-300 placeholder:text-red-400',
            },
        },
        defaultVariants: {
            error: false,
        },
    },
)
