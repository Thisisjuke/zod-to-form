import type { ReactNode } from 'react'

interface DescriptionItem {
    label: string
    value: ReactNode
}

interface DescriptionListProps {
    title?: string
    subtitle?: string
    data: DescriptionItem[]
}

export function DescriptionListRow({ label, value }: DescriptionItem) {
    return <div className={'w-full px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'}>
        <dt className={'flex items-center text-sm font-medium leading-6 text-gray-700'}>{label}</dt>
        <dd className={'flex items-center text-sm leading-6 text-carbon sm:col-span-2 sm:mt-0 gap-x-2'}>{value}</dd>
    </div>
}

export function DescriptionList({ title, subtitle, data }: DescriptionListProps) {
    return (
        <div>
            {(title || subtitle) && (
                <div className={'px-4 sm:px-0 mb-2'}>
                    {title && <h3 className={'text-base font-semibold text-carbon'}>{title}</h3>}
                    {subtitle && <p className={'max-w-2xl text-sm text-gray-500'}>{subtitle}</p>}
                </div>
            )}
            <dl className={'divide-y divide-gray-200'}>
                {data.map((item, index) => (
                    <DescriptionListRow key={index} label={item.label} value={item.value} />
                ))}
            </dl>
        </div>
    )
}
