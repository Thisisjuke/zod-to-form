import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './Textarea'

const meta: Meta<typeof Textarea> = {
    title: 'Primitives/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
    args: {},
}

export const Error: Story = {
    args: {
        errorMessage: 'Ce champ ne peut être vide.',
    },
}
