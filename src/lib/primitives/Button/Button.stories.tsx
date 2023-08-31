import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
    title: 'Primitives/Button',
    component: Button,
    argTypes: {
        onClick: {
            action: 'clicked',
        },
    },
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Click me!',
    },
}

export const PrimaryDisabled: Story = {
    args: {
        children: 'Disabled !',
        disabled: true,
    },
}

export const PrimaryAsLink: Story = {
    args: {
        children: 'I am a Link!',
        href: '/test',
    },
}

export const TextAsLink: Story = {
    args: {
        children: 'I am a Link and displayed as text!',
        href: '/test',
        variant: 'link',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Secondary',
        variant: 'secondary',
    },
}

export const SecondaryDisabled: Story = {
    args: {
        children: 'Disabled !',
        variant: 'secondary',
        disabled: true,
    },
}

export const Destructive: Story = {
    args: {
        children: 'Delete',
        variant: 'destructive',
    },
}

export const Validate: Story = {
    args: {
        children: 'Validate',
        variant: 'validate',
    },
}

export const Outline: Story = {
    args: {
        children: 'Outline',
        variant: 'outline',
    },
}

export const Dark: Story = {
    args: {
        children: 'Dark',
        variant: 'dark',
    },
}

export const Light: Story = {
    args: {
        children: 'Light',
        variant: 'light',
    },
}
