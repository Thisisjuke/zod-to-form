import { useForm } from 'react-hook-form'
import type { ZodObject } from 'zod'
import type { ReactElement, ReactNode } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import {
    Form,
    FormField,
} from '@/lib/primitives/Form'
import { FormMapper } from '@/modules/crud/components/form/FormMapper'
import { cn } from '@/lib/utils/cn'
import { customResolver } from '@/modules/crud/utils/resolver'
import { filterValuesByCustomSchema } from '@/modules/crud/utils/filter-values-by-zod-schema'
import { getBaseType } from '@/modules/crud/utils/object-to-schema'

export interface AdminFormProps {
    isEmbedded?: boolean
    values: Record<string, any>
    children?: ReactNode
    editable?: boolean
    onSubmit: (...args: any[]) => void
    schema: Record<string, ZodObject<any, any>>
}

export const AdminForm: any = ({ values, editable = true, isEmbedded = false, children, schema, onSubmit }: AdminFormProps) => {
    const form = useForm({
        resolver: customResolver(schema),
        defaultValues: filterValuesByCustomSchema(schema, values),
    })

    // TODO: handle the change of values in a better way to avoid window refresh.
    useUpdateEffect(() => {
        window.location.reload()
    }, [values])

    const Container = isEmbedded ? 'div' : Form

    return (
        <Container {...form}>
            <form className={cn(
                'w-full flex flex-col items-center p-1',
                editable ? 'gap-y-4' : 'divide-y divide-gray-200',
            )}
            onSubmit={!isEmbedded ? form.handleSubmit(() => onSubmit(form.getValues())) : undefined}>
                {Object.keys(schema).map((propertyName) => {
                    const propertyType = getBaseType(schema[propertyName])

                    return (
                        <FormField
                            key={propertyName}
                            control={form.control}
                            name={propertyName}
                            render={({ field }) => {
                                return FormMapper(field, schema[propertyName], propertyType, editable) as ReactElement
                            }}
                        />
                    )
                })}
                {children}
            </form>
        </Container>
    )
}
