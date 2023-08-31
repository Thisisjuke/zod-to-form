import type { Props } from 'react-select'
import { Label } from '@/lib/primitives/Label'
import type { SelectOptionType, SelectProps } from '@/lib/primitives/Select'
import { Select } from '@/lib/primitives/Select'
import { Input } from '@/lib/primitives/Input'
import { cn } from '@/lib/utils/cn'

export interface SelectInputProps extends Props {
    id: string
    label?: string
    placeholder?: string
    required?: boolean
    errorMessage?: string
    isMulti?: boolean
    hasFreeValue?: boolean
    options: SelectProps['options']
    value: SelectOptionType | Array<SelectOptionType> | string
    className?: string
}

export function MultiSelectInput({ id, value, label, placeholder, errorMessage, required, isMulti, hasFreeValue, options, className, ...props }: SelectInputProps) {
    if (!isMulti && hasFreeValue && !options?.find(option => option.value === 'other')) {
        options?.push({ label: 'Autre', value: 'other' })
    }

    const displayFreeInput = hasFreeValue && ((value as SelectOptionType)?.value === 'other' || typeof value === 'string')

    return (
        <div className={cn('grid w-full items-center gap-1.5', className)}>
            {label && <Label htmlFor={id} className={'font-bold'}>{label} {required && '*'}</Label>}
            <Select id={id} placeholder={placeholder} onError={!!errorMessage} isMulti={isMulti} options={options} {...props} />
            {displayFreeInput && (
                <Input
                    id={id}
                    errorMessage={errorMessage}
                    className={'bg-white'}
                    value={typeof value === 'string' ? value : ''}
                    placeholder={'Autre'}
                    {...props as any}
                />
            )}
            {errorMessage && <span className={'text-sm text-muted-foreground text-red-400'}>{errorMessage}</span>}
        </div>
    )
}
