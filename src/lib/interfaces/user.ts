import type { Availability } from './availability'
import type { Address } from './address'

export interface User {
    id: string
    createdAt: Date
    updatedAt: Date
    contact: Contact
    birthDate: Date
    address: Address
    residenceAddress: Address
    gender: string
    centerOfInterests: string[]
    state: 'pending' | 'validated' | 'refused'
    availabilities: Availability[]
}

export interface Contact {
    firstName: string
    lastName: string
    phone: string
    email: string
}
