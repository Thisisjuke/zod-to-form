import type { ZodObject } from 'zod'

export function getBaseType(schema: ZodObject<any>): string {
    if ('innerType' in schema._def) {
        return getBaseType(schema._def.innerType as ZodObject<any>)
    }
    if ('schema' in schema._def) {
        return getBaseType(schema._def.schema as ZodObject<any>)
    }
    return schema._def.typeName
}
