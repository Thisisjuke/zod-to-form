import { z } from 'zod'
import type { SelectableFields } from '@/lib/interfaces/selectable-field'
import { patchUserById } from '@/modules/crud/queries/user'

export function userAdditionalSchema({ centerOfInterests }: { [key: string]: SelectableFields }) {
    return ({
        centerOfInterests: z.array(
            z.object({
                label: z.string().refine(name =>
                    centerOfInterests.map(field => field.label).includes(name),
                ),
                value: z.string(),
            }),
        )
            .describe(JSON.stringify({
                label: 'Centres d\'intérets',
                data: centerOfInterests,
            })),
    })
}

export function userAdditionalSchemaFormatter(userId: string, data: any) {
    data.centerOfInterests = data.centerOfInterests.map((item: any) =>
        item.value ? item.value : item,
    )

    return patchUserById({
        id: userId,
        data,
    })
}
