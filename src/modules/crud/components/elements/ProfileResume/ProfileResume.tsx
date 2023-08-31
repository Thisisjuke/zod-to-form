import dayjs from 'dayjs'
import type { User } from '@/lib/interfaces/user.ts'

export interface CrudHeaderProps {
    user: User
}

function StatCard({ label, value }: { label: string; value: string }) {
    return <div className={'flex flex-col items-baseline justify-between gap-x-4 bg-white sm:px-6'}>
        <dt className={'text-sm font-medium text-gray-500'}>{label}</dt>
        <dd className={'w-full flex-none text-md font-medium tracking-tight text-gray-900'}>
            {value}
        </dd>
    </div>
}

export function ProfileResume({ user }: CrudHeaderProps) {
    return (
        <div className={'flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg shadow border border-gray-200'}>
            <div>
                <div className={'flex items-center gap-x-2 font-semibold'}>
                    <span className={'uppercase'}>{user.contact.lastName}</span>
                    <span>{user.contact.firstName}</span>
                </div>
                <span className={'text-sm'}>{`Né(e) le: ${dayjs(user.birthDate).format('DD MMM YYYY')}`}</span>
            </div>
            <dl className={'grid grid-cols-2 md:flex gap-2'}>
                <StatCard label={'Inscrit(e) le:'} value={dayjs(user.createdAt).format('DD MMM YYYY')} />
                <StatCard label={'Statut:'} value={user.state} />
            </dl>
        </div>
    )
}
