import type { Meta, StoryObj } from '@storybook/react'

import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
    title: 'Primitives/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
    args: {},
}
