import type { Meta, StoryObj } from '@storybook/react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './DropdownMenu'
import { Button } from '@/lib/primitives/Button'

const meta: Meta<typeof DropdownMenu> = {
    title: 'Primitives/DropdownMenu',
    component: DropdownMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
    render: args => (
        <DropdownMenu {...args} >
            <DropdownMenuTrigger>
                <Button>Ouvrir le Dropdown</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sous-menu A</DropdownMenuItem>
                <DropdownMenuItem>Sous-menu B</DropdownMenuItem>
                <DropdownMenuItem>Sous-menu C</DropdownMenuItem>
                <DropdownMenuItem>Sous-menu D</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ),
    args: {},
}
