import type { Meta, StoryObj } from '@storybook/react'

import { Tag } from './Tag.tsx'

const meta: Meta<typeof Tag> = {
    title: 'Library/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tag>

export const Primary: Story = {
    args: {
        children: 'Catégorie',
    },
}

export const Secondary: Story = {
    args: {
        ...Primary.args,
        variant: 'secondary',
    },
}

export const Warning: Story = {
    args: {
        ...Primary.args,
        variant: 'warning',
    },
}

export const Destructive: Story = {
    args: {
        ...Primary.args,
        variant: 'destructive',
    },
}

export const Validate: Story = {
    args: {
        ...Primary.args,
        variant: 'validate',
    },
}

export const Danger: Story = {
    args: {
        ...Primary.args,
        variant: 'danger',
    },
}
