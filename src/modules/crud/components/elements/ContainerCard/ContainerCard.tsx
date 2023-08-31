import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn.ts'

export interface ContainerCardProps {
    title?: string
    subtitle?: string
    className?: string
    children?: ReactNode
    ctaElement?: ReactNode
}

export function ContainerCard({ title, subtitle, className, ctaElement, children }: ContainerCardProps) {
    return (
        <div className={cn(
            'bg-white rounded-lg border border-gray-200',
            className,
        )}>
            <div className={'border-b border-gray-200 px-4 py-2'}>
                <div className={'-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap'}>
                    <div className={'ml-4 mt-4'}>
                        {title && <h3 className={'text-sm font-semibold leading-6 text-carbon'}>{title}</h3>}
                        {subtitle && <p className={'text-sm text-gray-500'}>{subtitle}</p>}
                    </div>
                    {ctaElement && (
                        <div className={'ml-4 mt-4 flex-shrink-0'}>
                            {ctaElement}
                        </div>
                    )}
                </div>
            </div>
            <div className={'flex flex-col gap-y-4 px-4 py-5 sm:px-6'}>
                {children}
            </div>
        </div>
    )
}
