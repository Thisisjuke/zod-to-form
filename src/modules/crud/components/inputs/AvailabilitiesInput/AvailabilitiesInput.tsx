import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Trash } from 'lucide-react'
import type { Availability } from '@/lib/interfaces/availability'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/lib/primitives/SimpleSelect'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/lib/primitives/Form'
import { Button } from '@/lib/primitives/Button'
import { Input } from '@/lib/primitives/Input'
import { weekDays } from '@/modules/crud/utils/format-availabilties-by-day'

type FormAvailability = Pick<Availability, 'day' | 'from' | 'to'>

interface AvailabilitiesAdminInputProps {
    value: Array<FormAvailability>
    onChange: (data: Record<string, any>) => void
}

export const AvailabilitiesInput: React.FC<AvailabilitiesAdminInputProps> = ({ value, onChange }) => {
    const form = useForm()
    const [inputValues, setInputValues] = useState(value || [])

    useEffect(() => {
        onChange(inputValues)
    }, [inputValues, onChange])

    const addToValues = (availability: FormAvailability) => {
        setInputValues(prevInputValue => ([...prevInputValue, availability]))
    }

    const removeFromValues = (indexToRemove: number) => {
        setInputValues((prevInputValue) => {
            const updatedValues = [...prevInputValue]
            updatedValues.splice(indexToRemove, 1)
            return updatedValues
        })
    }

    return (
        <div className={'w-full'}>
            {inputValues.map((v, index) => (
                <section key={index} className={'flex flex-col gap-y-2 divide-Y'}>
                    <div className={'flex items-center justify-between py-2'}>
                        <div className={'flex items-center space-x-2'}>
                            <span className={'font-semibold'}>{weekDays[v.day]}:</span>
                            <span>{v.from} - {v.to}</span>
                        </div>
                        <Button size={'sm'} variant={'outline'} onClick={() => removeFromValues(index)}>
                            <Trash className={'h-3.5 w-3.5 mx-1'} />
                        </Button>
                    </div>
                </section>
            ))}
            <form className={'w-full flex flex-col gap-y-2 mt-4'}>
                <FormField
                    control={form.control}
                    name={'day'}
                    rules={{ required: { value: true, message: 'Champ Obligatoire' } }}
                    render={({ field }) => (
                        <FormItem className={'w-full'}>
                            <FormControl>
                                <Select onValueChange={field.onChange}>
                                    <SelectTrigger>
                                        <SelectValue placeholder={'Jour de la semaine'}/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.keys(weekDays).map(day => (
                                            <SelectItem key={day}
                                                value={day}>{weekDays[day as keyof typeof weekDays]}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className={'flex flex-row gap-x-4'}>
                    <FormField
                        control={form.control}
                        name={'from'}
                        rules={{ required: { value: true, message: 'Champ Obligatoire' } }}
                        render={({ field }) => (
                            <FormItem className={'w-1/2'}>
                                <FormLabel>Début*</FormLabel>
                                <FormControl>
                                    <Input className={'mt-1'} placeholder={'09:00'} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={'to'}
                        rules={{ required: { value: true, message: 'Champ Obligatoire' } }}
                        render={({ field }) => (
                            <FormItem className={'w-1/2'}>
                                <FormLabel>Fin*</FormLabel>
                                <FormControl>
                                    <Input className={'mt-1'} placeholder={'10:00'} {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className={'w-full'}>
                    <Button
                        variant={'outline'}
                        className={'w-full'}
                        onClick={form.handleSubmit((data) => {
                            addToValues(data as any)
                            form.reset()
                        })}
                    >
                        Ajouter cet horaire</Button>
                </div>
            </form>
        </div>
    )
}
