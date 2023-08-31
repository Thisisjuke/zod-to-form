export interface Availability {
    id: string
    createdAt: Date
    updatedAt: Date
    day:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday'
    from: string
    to: string
}
