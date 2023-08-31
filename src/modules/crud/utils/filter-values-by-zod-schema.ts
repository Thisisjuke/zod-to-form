import type { ZodObject, ZodTypeAny } from 'zod'

type ZodInfer<T extends ZodTypeAny> = T['_output']

type FilteredValues<T extends ZodTypeAny> = ZodInfer<T>

function getNestedValue(keys: string[], obj: any): any {
    let value = obj
    for (const key of keys) {
        value = value && value[key]
        if (value === undefined)
            break
    }
    return value
}

export function filterValuesByCustomSchema(
    schema: Record<string, ZodObject<any>>,
    values: Record<string, any>,
): FilteredValues< ZodObject<any>> {
    const validKeys = Object.keys(schema)

    const filteredValues: Partial<Record<string, any>> = {}

    validKeys.forEach((key) => {
        const nestedKeys = key.split('.')
        const value = getNestedValue(nestedKeys, values)

        if (value !== undefined) {
            let nestedObject = filteredValues
            for (const nestedKey of nestedKeys.slice(0, -1)) {
                nestedObject[nestedKey] = nestedObject[nestedKey] || {}
                nestedObject = nestedObject[nestedKey]
            }
            const lastKey = nestedKeys[nestedKeys.length - 1]
            nestedObject[lastKey] = value
        }
    })

    return filteredValues as FilteredValues<ZodObject<any>>
}
