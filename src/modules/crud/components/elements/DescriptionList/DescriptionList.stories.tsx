import type { Meta, StoryObj } from '@storybook/react'

import { DescriptionList } from './DescriptionList.tsx'

const meta: Meta<typeof DescriptionList> = {
    title: 'Library/DescriptionList',
    component: DescriptionList,
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DescriptionList>

export const Default: Story = {
    args: {
        data: [
            { label: 'Nom complet', value: 'Margot Foster' },
            { label: 'Poste demandé', value: 'Développeur Backend' },
            { label: 'Adresse e-mail', value: 'margotfoster@example.com' },
            {
                label: 'À propos',
                value:
                    'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.',
            },
        ],
    },
}

export const WithTitles: Story = {
    args: {
        ...Default.args,
        title: 'Disponibilités',
        subtitle: 'Liste des informations',
    },
}
