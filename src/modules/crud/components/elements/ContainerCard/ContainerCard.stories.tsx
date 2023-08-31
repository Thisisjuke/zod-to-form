import type { Meta, StoryObj } from '@storybook/react'

import { ContainerCard } from './ContainerCard.tsx'
import { BlockSkeleton } from '@/modules/crud/components/elements/Skeletons/BlockSkeleton.tsx'

const meta: Meta<typeof ContainerCard> = {
    title: 'Library/ContainerCard',
    component: ContainerCard,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ContainerCard>

export const Default: Story = {
    args: {
        title: 'Disponibilités',
        children: (
            <BlockSkeleton/>
        ),
    },
}

export const WithDescription: Story = {
    args: {
        ...Default.args,
        subtitle: 'Vous trouverez ci-dessous les disponibilités de l\'utilisateur',
    },
}
