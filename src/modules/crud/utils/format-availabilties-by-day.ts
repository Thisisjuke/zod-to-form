export const weekDays = {
    monday: 'Lundi',
    tuesday: 'Mardi',
    wednesday: 'Mercredi',
    thursday: 'Jeudi',
    friday: 'Vendredi',
    saturday: 'Samedi',
    sunday: 'Dimanche',
}

export function formatAvailabilitiesByDay(userFormObject: Record<string, any>): Record<string, any> {
    const formattedAvailability: Record<string, { from: string; to: string }[]> = {}

    Object.keys(weekDays).forEach(day => formattedAvailability[weekDays[day as keyof typeof weekDays]] = [])

    return userFormObject.reduce((availability: Record<string, { from: string; to: string }[]>, entry: Record<string, any>) => {
        const { day, from, to } = entry
        const frenchDay = weekDays[day as keyof typeof weekDays]
        availability[frenchDay].push({ from, to })

        return availability
    }, formattedAvailability)
}
