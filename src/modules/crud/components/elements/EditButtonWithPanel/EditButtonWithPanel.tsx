import { Edit3 } from 'lucide-react'
import type { ReactNode } from 'react'
import { ValidationPanel } from '@/modules/crud/components/elements/SidePanel/SidePanel.tsx'

export interface EditButtonWithValidationPanelProps {
    children?: ReactNode
    onSubmit?: (...args: any[]) => void | undefined | Promise<any>
}

export function EditButtonWithValidationPanel({ onSubmit, children }: EditButtonWithValidationPanelProps) {
    return (
        <ValidationPanel
            onSubmit={onSubmit}
            trigger={props => (
                <button {...props} className={'flex gap-x-1 hover:underline text-blue-600 cursor-pointer'}>
                    <Edit3 className={'h-4 w-4'} />
                    <span className={'text-sm'}>Modifier</span>
                </button>
            )}
        >
            {children}
        </ValidationPanel>
    )
}
