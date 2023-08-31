import { z } from 'zod'
import type { ZodObject, ZodSchema } from 'zod'
import type { DeepMap, FieldError, FieldValues, Resolver } from 'react-hook-form'

interface NestedValues { [key: string]: any }

type FieldErrors<
    TFieldValues extends FieldValues = FieldValues,
> = DeepMap<TFieldValues, FieldError>

function getNestedFieldValue(values: NestedValues, key: string): any {
    const keys = key.split('.')
    let value = values
    for (const k of keys) {
        if (value === undefined || value === null) {
            return undefined
        }
        value = value[k]
    }
    return value
}

export const customResolver: <T extends FieldValues>(schema: Record<string, ZodObject<any>>,) => Resolver<T> = (schema) => {
    return (values, _) => {
        // Validate each field with its corresponding Zod schema
        const fieldErrors: FieldErrors = {}

        for (const key in schema) {
            const fieldValue = getNestedFieldValue(values, key)
            try {
                (schema[key as keyof typeof schema] as unknown as ZodSchema<any>).parse(fieldValue)
            }
            catch (error) {
                if (error instanceof z.ZodError) {
                    fieldErrors[key] = {
                        type: 'validation',
                        message: error.issues[0]?.message || 'Validation error',
                    }
                }
                else {
                    throw error
                }
            }
        }

        return {
            values,
            errors: fieldErrors,
        }
    }
}
