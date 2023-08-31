import { z } from 'zod'
import { patchUserById } from '@/modules/crud/queries/user'
import type { SelectableFields } from '@/lib/interfaces/selectable-field'

const zodAvailabilityObject = z.object({
    day: z.union([
        z.literal('monday'),
        z.literal('tuesday'),
        z.literal('wednesday'),
        z.literal('thursday'),
        z.literal('friday'),
        z.literal('saturday'),
        z.literal('sunday'),
    ]),
    from: z.string(),
    to: z.string(),
})

export function userAvailabilitiesSchema(_: { [key: string]: SelectableFields }) {
    return ({
        availabilities: z.array(zodAvailabilityObject)
            .optional()
            .describe(JSON.stringify({
                label: 'Disponibilités',
                customType: 'availabilities',
            })),
    })
}

export function userAvailabilitiesSchemaFormatter(userId: string, data: any) {
    return patchUserById({
        id: userId,
        data,
    })
}
