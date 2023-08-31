import type { Meta, StoryObj } from '@storybook/react'

import { MultiSelectInput } from './MultiSelectInput'
import centerOfInterests from '@/mocks/center-of-interests'

const meta: Meta<typeof MultiSelectInput> = {
    title: 'Form/MultiSelectInput',
    component: MultiSelectInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MultiSelectInput>

export const Default: Story = {
    args: {
        id: 'school-field',
        label: 'Niveau scolaire acquis',
        placeholder: 'Veuillez entrer une description',
        options: centerOfInterests,
    },
}

export const Error: Story = {
    args: {
        ...Default.args,
        errorMessage: 'Veuillez choisir une valeur.',
    },
}

export const Multi: Story = {
    args: {
        options: centerOfInterests,
        isMulti: true,
    },
}

export const WithFreeInput: Story = {
    args: {
        options: centerOfInterests,
        hasFreeValue: true,
        value: '',
    },
}
