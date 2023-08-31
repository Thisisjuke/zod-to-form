import type { ControllerRenderProps } from 'react-hook-form'
import type { ZodObject } from 'zod'
import { DescriptionListRow } from '@/modules/crud/components/elements/DescriptionList'
import { FormControl, FormItem, FormLabel } from '@/lib/primitives/Form'
import { Switch } from '@/lib/primitives/Switch'
import { Textarea } from '@/lib/primitives/Textarea.tsx'
import { Input } from '@/lib/primitives/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/lib/primitives/SimpleSelect'
import { getArrayFromValue, getLabelFromEnum, getValueFromEnum } from '@/modules/crud/utils/enums.ts'
import { Checkbox } from '@/lib/primitives/CheckBox'
import { Tag } from '@/modules/crud/components/elements/Tag'
import { formatAvailabilitiesByDay } from '@/modules/crud/utils/format-availabilties-by-day'
import { AvailabilitiesInput } from '@/modules/crud/components/inputs/AvailabilitiesInput'
import { addressToTextFormatter } from '@/lib/utils/formatters/address'
import type { SelectableFields } from '@/lib/interfaces/selectable-field'
import { MultiSelectInput } from '@/modules/crud/components/inputs/MultiSelectInput'

export const FormMapper: (field: ControllerRenderProps<any, any>, schema: ZodObject<any, any>, propertyType: unknown, editable: boolean) => (JSX.Element | null) = (field: ControllerRenderProps<any, any>, schema: ZodObject<any, any>, propertyType: unknown, editable: boolean) => {
    const objectMetadata = schema?._def?.description ? JSON.parse(schema?._def?.description) : {}

    const label = objectMetadata?.label || 'NO LABEL'

    if (objectMetadata.customType) {
        propertyType = objectMetadata.customType
    }

    if (propertyType === 'ZodBoolean') {
        if (!editable) {
            return (
                <DescriptionListRow
                    label={label}
                    value={
                        <Checkbox
                            className={'disabled:opacity-80 disabled:cursor-auto'}
                            disabled={true}
                            checked={!!field.value}
                        />
                    }
                />
            )
        }
        return (
            <FormItem className={'w-full flex flex-row items-center justify-between rounded-lg border p-4'}>
                <div className={'space-y-0.5'}>
                    <FormLabel className={'text-base'}>
                        {label}
                    </FormLabel>
                </div>
                <FormControl>
                    <Switch
                        checked={!!field.value}
                        defaultChecked={!!field.value}
                        defaultValue={field.value}
                        value={field.value}
                        onCheckedChange={field.onChange}
                        onChange={field.onChange}
                    />
                </FormControl>
            </FormItem>
        )
    }
    if (propertyType === 'ZodString') {
        if (!editable) {
            return (
                <DescriptionListRow
                    label={label}
                    value={(
                        <Input
                            className={'resize-none mt-1 disabled:opacity-80 disabled:cursor-auto'}
                            value={field.value || '-'}
                            disabled={true}
                        />
                    )}
                />
            )
        }
        return (
            <FormItem className={'w-full'}>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Textarea
                        className={'resize-none mt-1 disabled:opacity-80 disabled:cursor-auto'}
                        {...field}
                        value={field.value || ''}
                    />
                </FormControl>
            </FormItem>
        )
    }

    if (propertyType === 'ZodEnum') {
        const enumValues = objectMetadata.data as SelectableFields

        if (!editable) {
            return (
                <DescriptionListRow label={label} value={getValueFromEnum(enumValues, field.value)} />
            )
        }
        return (
            <FormItem className={'w-full'}>
                <FormLabel>{label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger className={'mt-2'}>
                            <SelectValue placeholder={'Sélectionner une valeur'} />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {enumValues.map(item => (
                            <SelectItem key={`item_${item.value}`} value={item.value}>{item.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </FormItem>
        )
    }
    if (propertyType === 'ZodArray') {
        const enumValues = objectMetadata.data as SelectableFields
        if (!editable) {
            return (
                <DescriptionListRow label={label} value={field.value.map((val: string) => <Tag key={val}>{getLabelFromEnum(enumValues, val)}</Tag>)} />
            )
        }

        return (
            <FormItem className={'w-full'}>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <MultiSelectInput
                        className={'mt-2'}
                        id={field.name}
                        isMulti={true}
                        hasFreeValue={false}
                        value={field.value}
                        defaultValue={getArrayFromValue(enumValues, field.value)}
                        options={enumValues}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        placeholder={undefined}
                    />
                </FormControl>
            </FormItem>
        )
    }

    if (propertyType === 'availabilities') {
        if (!editable) {
            const formattedAvailabilities = formatAvailabilitiesByDay(field.value)

            return (
                <>
                    {Object.keys(formattedAvailabilities).map(availability => (
                        <DescriptionListRow
                            key={availability}
                            label={availability}
                            value={formattedAvailabilities[availability].length > 0
                                ? (
                                    formattedAvailabilities[availability].map((av: any, index: number) => (
                                        <div key={index}>{av.from} - {av.to}</div>
                                    ))
                                )
                                : (
                                    <span>-</span>
                                )}
                        />
                    ))}
                </>
            )
        }
        return (
            <FormItem className={'w-full flex flex-col gap-y-2'}>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <AvailabilitiesInput
                        value={field.value}
                        onChange={field.onChange}
                    />
                </FormControl>
            </FormItem>
        )
    }

    if (propertyType === 'address') {
        if (!editable) {
            return (
                <DescriptionListRow
                    label={label}
                    value={(
                        <Input
                            className={'resize-none mt-1 disabled:opacity-80 disabled:cursor-auto'}
                            value={addressToTextFormatter(field.value)}
                            disabled={true}
                        />
                    )}
                />
            )
        }

        // TODO: Should use a custom AddressInput Component
        return (
            <FormItem className={'w-full'}>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Textarea
                        className={'resize-none mt-1 disabled:opacity-80 disabled:cursor-auto'}
                        {...field}
                        value={JSON.stringify(field.value) || ''}
                    />
                </FormControl>
            </FormItem>
        )
    }

    return null
}
