import type { Meta, StoryObj } from '@storybook/react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './SimpleSelect'

const meta: Meta<typeof Select> = {
    title: 'Primitives/Simple-Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Select>

export const Default: Story = {
    render: args => (
        <Select>
            <SelectTrigger className={'w-[180px]'}>
                <SelectValue placeholder={'Theme'} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value={'light'}>Light</SelectItem>
                <SelectItem value={'dark'}>Dark</SelectItem>
                <SelectItem value={'system'}>System</SelectItem>
            </SelectContent>
        </Select>
    ),
    args: {},
}
