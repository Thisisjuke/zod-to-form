import type { User } from '@/lib/interfaces/user'

export default {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    contact: {
        firstName: 'John',
        lastName: 'Doe',
        phone: '123-456-7890',
        email: 'john@example.com',
    },
    birthDate: new Date('1990-01-01'),
    address: {
        address1: '123 Main St',
        address2: 'Apt 4B',
        zipcode: '12345',
        universityZipCode: '54321',
        city: 'Cityville',
        countryCode: 'US',
        state: 'State',
        placeId: null,
    },
    residenceAddress: {
        address1: '456 Elm St',
        address2: 'Unit 7',
        zipcode: '67890',
        universityZipCode: '09876',
        city: 'Townsville',
        countryCode: 'US',
        state: 'State',
        placeId: null,
    },
    gender: 'male',
    centerOfInterests: ['javascript', 'typescript', 'rust'],
    state: 'pending',
    availabilities: [
        {
            id: 'avail123',
            createdAt: new Date(),
            updatedAt: new Date(),
            day: 'monday',
            from: '09:00',
            to: '17:00',
        },
        {
            id: 'avail456',
            createdAt: new Date(),
            updatedAt: new Date(),
            day: 'wednesday',
            from: '08:00',
            to: '16:30',
        },
    ],
} as User