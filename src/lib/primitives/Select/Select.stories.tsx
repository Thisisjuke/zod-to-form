import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta: Meta<typeof Select> = {
    title: 'Primitives/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
    args: {
        options: [
            { label: 'CPGE1', value: 'CPGE1' },
            { label: 'CPGE2', value: 'CPGE2' },
            { label: 'BTS', value: 'BTS' },
            { label: 'DUT', value: 'DUT' },
            { label: 'BUT', value: 'BUT' },
            { label: 'Licence 1', value: 'LICENCE1' },
            { label: 'Licence 2', value: 'LICENCE2' },
            { label: 'Licence 3', value: 'LICENCE3' },
            { label: 'Master', value: 'MASTER' },
        ],
    },
}

export const Multi: Story = {
    args: {
        isMulti: true,
        options: [
            { label: 'CPGE1', value: 'CPGE1' },
            { label: 'CPGE2', value: 'CPGE2' },
            { label: 'BTS', value: 'BTS' },
            { label: 'DUT', value: 'DUT' },
            { label: 'BUT', value: 'BUT' },
            { label: 'Licence 1', value: 'LICENCE1' },
            { label: 'Licence 2', value: 'LICENCE2' },
            { label: 'Licence 3', value: 'LICENCE3' },
            { label: 'Master', value: 'MASTER' },
        ],
    },
}
