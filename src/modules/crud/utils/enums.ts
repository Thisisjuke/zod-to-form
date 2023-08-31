import type { SelectableField } from '@/lib/interfaces/selectable-field'

export function getValueFromEnum(enumeration: Record<string, any>, value: string) {
    const matchingItem = enumeration?.find((item: any) => item.value === value)
    return matchingItem ? matchingItem.label : ''
}

export function getLabelFromEnum(enumeration: Record<string, any>, value: string): string | null {
    const item = enumeration.find((item: SelectableField) => item.value === value)
    return item ? item.label : null
}

export function getArrayFromValue(enumeration: Record<string, any>, values: string[]): string[] | null {
    const resultArray = values
        .map(value => enumeration.find((item: SelectableField) => item.value === value))
        .filter(item => item !== undefined)

    return resultArray.length > 0 ? resultArray : null
}

export function toTypedZodEnum<T extends { value: string }>(items: T[]) {
    type Property = typeof items[number]['value']

    return [items[0].value, ...items.slice(1).map(p => p.value)] as [Property, ...Property[]]
}
