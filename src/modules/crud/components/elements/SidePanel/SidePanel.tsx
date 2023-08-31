import type { ButtonHTMLAttributes, ComponentType, ReactNode } from 'react'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/lib/primitives/Sheet'
import { Button } from '@/lib/primitives/Button'
import { ScrollArea } from '@/lib/primitives/ScrollArea'

export function isPromise(value: any): value is Promise<unknown> {
    return (
        !!value
        && (typeof value === 'object' || typeof value === 'function')
        && typeof value.then === 'function'
    )
}

export function ensurePromise<T>(value: T | Promise<T>): Promise<T> {
    return isPromise(value) ? value : Promise.resolve(value)
}

export interface SidePanelProps {
    title?: ReactNode
    children?: ReactNode
    isOpen: boolean
    setIsOpen: (arg: boolean) => void
}

export function SidePanel({ title, isOpen, setIsOpen, children }: SidePanelProps) {
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className={'overflow-y-scroll'}>
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription asChild={true}>
                        <div className={'flex flex-col gap-y-2'}>
                            {children}
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export interface ValidationPanelProps {
    variant?: 'delete' | 'edit'
    children?: ReactNode
    trigger: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>
    onConfirm?: () => void
    onSubmit?: (args: unknown) => void
    title?: string
    validateButtonText?: string
}

export function ValidationPanel({ children, trigger, onConfirm, onSubmit, title, validateButtonText, variant = 'edit' }: ValidationPanelProps) {
    const TriggerElement = trigger
    const [isOpen, setIsOpen] = useState(false)
    const isValid = React.isValidElement(children)

    const Buttons = ({ shouldClose = true }) => (
        <div className={'w-full flex items-center gap-x-4 mt-4'}>
            <Button
                type={'submit'}
                variant={variant === 'edit' ? 'validate' : 'destructive'}
                onClick={() => {
                    onConfirm && onConfirm()
                    shouldClose && setTimeout(() => setIsOpen(false), 300)
                }}
            >
                {!validateButtonText && (variant === 'edit' ? 'Enregistrer' : 'Supprimer')}
                {validateButtonText}
            </Button>
            <Button variant={'light'} onClick={() => setIsOpen(false)}>
                Annuler
            </Button>
        </div>
    )

    const onFormSubmit = (data: Record<string, any>) => {
        ensurePromise(onSubmit && onSubmit(data)).then(() => {
            setIsOpen(false)
        })
    }

    return (
        <>
            <SidePanel isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
                {isValid
                    ? (
                        <ScrollArea className={'h-[calc(100vh-8rem)] flex flex-col items-between'}>
                            {React.cloneElement(children, { onSubmit: onFormSubmit } as any, <Buttons shouldClose={false} />)}
                        </ScrollArea>
                    )
                    : (
                        <>
                            <ScrollArea className={'h-[calc(100vh-8rem)]'}>{children}</ScrollArea>
                            <Buttons />
                        </>
                    )}
            </SidePanel>
            <TriggerElement onClick={() => setIsOpen(true)} />
        </>
    )
}
