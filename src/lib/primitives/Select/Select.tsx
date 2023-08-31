import type { ClearIndicatorProps, ControlProps, MultiValueRemoveProps } from 'react-select'
import ReactSelect, { components } from 'react-select'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

function ClearIndicator(props: ClearIndicatorProps) {
    return (
        <components.ClearIndicator {...props}>
            <X className={'h-4 w-4'} />
        </components.ClearIndicator>
    )
}

function MultiValueRemove(props: MultiValueRemoveProps) {
    return (
        <components.MultiValueRemove {...props}>
            <X className={'h-4 w-4'} />
        </components.MultiValueRemove>
    )
}

const controlStyles = {
    base: 'flex min-h-10 w-full bg-white items-center justify-between rounded-md border border-input bg-white text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    focus: 'border-primary-600 ring-2 ring-offset-2 ring-slate-400',
    nonFocus: 'border-gray-300 hover:border-gray-400',
    error: '!border-red-300 placeholder:text-red-400',
}

const placeholderStyles = 'text-gray-500 pl-2 py-0.5'
const selectInputStyles = 'pl-2 py-0.5'

const valueContainerStyles = 'px-1 gap-1'

const singleValueStyles = 'leading-7 ml-2'

const multiValueStyles = 'bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5'

const multiValueLabelStyles = 'leading-6 py-0.5'

const multiValueRemoveStyles = 'cursor-pointer border border-gray-200 bg-white hover:bg-red-50 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md'

const indicatorsContainerStyles = 'p-1'

const clearIndicatorStyles = 'cursor-pointer text-gray-500 p-1 rounded-md hover:bg-red-50 hover:text-red-800'

const dropdownIndicatorStyles = 'cursor-pointer p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black'

const menuStyles = 'gap-y-1 p-1 relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 translate-y-1'

const menuListStyles = 'flex flex-col gap-y-1'

const groupHeadingStyles = 'py-1.5 pl-8 pr-2 text-sm font-semibold'

const noOptionsMessageStyles = 'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm'

const indicatorSeparatorStyles = ''

const optionStyles = {
    base: 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    focus: 'bg-gray-100 active:bg-gray-200',
    selected: 'before:content-check before:text-green-500 before:absolute before:left-3 before:mt-[1px] bg-gray-100',
}

function styleProps(onError: boolean) {
    return {
        styles: {
            input: (base: ControlProps) => ({
                ...base,
                'input:focus': {
                    boxShadow: 'none',
                },
            }),
            multiValueLabel: (base: ControlProps) => ({
                ...base,
                whiteSpace: 'normal',
                overflow: 'visible',
            }),
            control: (base: any) => ({
                ...base,
                transition: 'none',
            }),
        },
        components: { ClearIndicator, MultiValueRemove },
        classNames: {
            control: ({ isFocused }: ControlProps) =>
                cn(
                    controlStyles.base,
                    isFocused ? controlStyles.focus : controlStyles.nonFocus,
                    onError && controlStyles.error,
                ),
            placeholder: () => placeholderStyles,
            input: () => selectInputStyles,
            valueContainer: () => valueContainerStyles,
            singleValue: () => singleValueStyles,
            multiValue: () => multiValueStyles,
            multiValueLabel: () => multiValueLabelStyles,
            multiValueRemove: () => multiValueRemoveStyles,
            indicatorsContainer: () => indicatorsContainerStyles,
            clearIndicator: () => clearIndicatorStyles,
            indicatorSeparator: () => indicatorSeparatorStyles,
            dropdownIndicator: () => dropdownIndicatorStyles,
            menu: () => menuStyles,
            menuList: () => menuListStyles,
            groupHeading: () => groupHeadingStyles,
            option: ({ isFocused, isSelected }: ControlProps | any) =>
                cn(
                    isFocused && optionStyles.focus,
                    isSelected && optionStyles.selected,
                    optionStyles.base,
                ),
            noOptionsMessage: () => noOptionsMessageStyles,
        },
    }
}

export interface SelectOptionType {
    label: string
    value: string
}

export interface SelectProps {
    id: string
    placeholder?: string
    isMulti?: boolean
    onError?: boolean
    options?: Array<SelectOptionType>
}

export function Select({ id, placeholder, options, isMulti = false, onError = false, ...props }: SelectProps) {
    const placeholderMessage = placeholder || (
        isMulti ? 'Sélectionner un ou plusieurs choix' : 'Sélectionner une catégorie'
    )
    return (
        <ReactSelect
            id={id}
            instanceId={id}
            options={options}
            placeholder={placeholderMessage}
            isMulti={isMulti}
            closeMenuOnSelect={!isMulti}
            hideSelectedOptions={false}
            unstyled
            {...styleProps(onError) as Record<string, unknown>}
            {...props}
        />
    )
}
