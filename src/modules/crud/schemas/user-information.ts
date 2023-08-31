import { z } from 'zod'
import { patchUserById } from '@/modules/crud/queries/user'
import type { SelectableFields } from '@/lib/interfaces/selectable-field'
import { toTypedZodEnum } from '@/modules/crud/utils/enums.ts'

export function userInformationSchema({ genders }: { [key: string]: SelectableFields }) {
    const GENDERS_ENUM = toTypedZodEnum(genders)

    return ({
        'contact.firstName': z.string().optional().describe(JSON.stringify({
            label: 'Prénom',
        })),
        'contact.lastName': z.string().optional().describe(JSON.stringify({
            label: 'Nom de Famille',
        })),
        'gender': z.enum(GENDERS_ENUM).describe(JSON.stringify({
            label: 'Genre',
            data: genders,
        })),
        'contact.phone': z.string().optional().describe(JSON.stringify({
            label: 'Numéro de Téléphone',
        })),
        'contact.email': z.string().optional().describe(JSON.stringify({
            label: 'Adresse e-mail',
        })),
        'residenceAddress': z.object({
            address1: z.string(),
            address2: z.string(),
            zipcode: z.string(),
            city: z.string(),
            countryCode: z.string(),
            state: z.string(),
            placeId: z.string(),
        }).optional().describe(JSON.stringify({
            label: 'Adresse de résidence',
            customType: 'address',
        })),

    })
}

export function userInformationSchemaFormatter(userId: string, data: any) {
    return patchUserById({
        id: userId,
        data,
    })
}
