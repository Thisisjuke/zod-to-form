import { Button } from '@/lib/primitives/Button'
import { ValidationPanel } from '@/modules/crud/components/elements/SidePanel/SidePanel.tsx'
import { refuseUserById, validateUserById } from '@/modules/crud/queries/user.ts'
import type { User } from '@/lib/interfaces/user.ts'
import { CrudSettingsButton } from '@/modules/crud/components/elements/CrudHeader/CrudSettingsButton.tsx'

export interface CrudHeaderProps {
    user: User
    refetch: () => void
}

export function CrudHeader({ user, refetch }: CrudHeaderProps) {
    return (
        <header className={'flex flex-col md:flex-row justify-between'}>
            <div className={'flex items-center gap-2'}>
                <a
                    href={'/'}
                    className={'flex items-center cursor-pointer hover:underline'}
                >
                    Accueil
                </a>
                <span>/</span>
                <span>
                    <span className={'uppercase'}>{user.contact.lastName}</span>
                    {' '}
                    <span>{user.contact.firstName}</span>
                </span>
            </div>
            {user.state === 'pending' && (
                <div className={'flex gap-x-2'}>
                    <ValidationPanel
                        validateButtonText={'Valider'}
                        trigger={
                            props => <Button variant={'validate'} {...props}>Valider cet utilisateur</Button>
                        }
                        onConfirm={() => {
                            validateUserById({ id: user.id }).then(() => refetch())
                        }}
                    >
                        Valider cet utilisateur ?
                    </ValidationPanel>
                    <ValidationPanel
                        variant={'delete'}
                        validateButtonText={'Refuser'}
                        trigger={
                            props => <Button variant={'destructive'} {...props}>Refuser cet utilisateur</Button>
                        }
                        onConfirm={() => {
                            refuseUserById({ id: user.id }).then(() => refetch())
                        }}
                    >
                        Refuser cet utilisateur ?
                    </ValidationPanel>
                    <CrudSettingsButton user={user} />
                </div>
            )}
        </header>
    )
}
