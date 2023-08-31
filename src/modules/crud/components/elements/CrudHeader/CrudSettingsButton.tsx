import { Settings } from 'lucide-react'
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/lib/primitives/DropdownMenu'
import { Button } from '@/lib/primitives/Button'
import { SidePanel } from '@/modules/crud/components/elements/SidePanel/SidePanel.tsx'
import { deleteUser } from '@/modules/crud/queries/user.ts'
import type { User } from '@/lib/interfaces/user.ts'

export interface CrudSettingsButtonProps {
    user: User
}

export function CrudSettingsButton({ user }: CrudSettingsButtonProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    const onOpen = () => {
        setIsDropdownOpen(false)
        setIsSheetOpen(true)
    }

    return (
        <>
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant={'outline'} className={'px-4'}>
                        <Settings className={'h-5 w-5 text-slate-500'} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align={'end'}>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={'cursor-pointer'} onClick={onOpen}>
                        Supprimer cet utilisateur
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <SidePanel
                title={'Suppression'}
                isOpen={isSheetOpen}
                setIsOpen={setIsSheetOpen}
            >
                <div className={'flex flex-col gap-y-2'}>
                    <span>Vous allez supprimer l'utilisateur suivant:</span>
                    <span className={'underline font-semibold'}>{user.contact.lastName.toUpperCase()} {user.contact.firstName}</span>
                    <div className={'font-semibold underline'}>Cet utilisateur sera définitivement supprimé et ne sera plus comptabilisé dans les statistiques de la plateforme.</div>
                    <div className={'flex items-center gap-x-4 mt-4'}>
                        <Button
                            type={'submit'}
                            variant={'destructive'}
                            onClick={() => {
                                deleteUser({ id: user.id }).then(() => {
                                    setIsSheetOpen(false)
                                    // TODO: add a real redirection
                                    window.location.href = '/'
                                })
                            }}
                        >
                            Supprimer
                        </Button>
                        <Button
                            variant={'light'}
                            onClick={() => setIsSheetOpen(false)}
                        >
                            Annuler
                        </Button>
                    </div>
                </div>
            </SidePanel>
        </>
    )
}
