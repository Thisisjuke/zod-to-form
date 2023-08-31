import genders from '@/mocks/genders'
import centerOfInterests from '@/mocks/center-of-interests'

import { ContainerCard } from '@/modules/crud/components/elements/ContainerCard'
import { EditButtonWithValidationPanel } from '@/modules/crud/components/elements/EditButtonWithPanel'
import { AdminForm } from '@/modules/crud/components/form/AdminForm'
import {
    userInformationSchema,
    userInformationSchemaFormatter,
} from '@/modules/crud/schemas/user-information'
import {
    userAdditionalSchema,
    userAdditionalSchemaFormatter,
} from '@/modules/crud/schemas/user-additional'
import {
    userAvailabilitiesSchema,
    userAvailabilitiesSchemaFormatter,
} from '@/modules/crud/schemas/user-availabilities'
import { ProfileResume } from '@/modules/crud/components/elements/ProfileResume'
import { CrudHeader } from '@/modules/crud/components/elements/CrudHeader'
import user from '@/mocks/user.ts'

function DemoPage() {
    const enums = { centerOfInterests, genders }
    const refetch = () => console.log('fake refetch triggered.')

    return (
        <section className={'flex flex-col gap-y-4 p-2 md:p-4'}>
            <CrudHeader user={user} refetch={refetch} />
            <ProfileResume user={user} />
            <ContainerCard
                title={'Fiche de l\'utilisateur'}
                className={'shadow'}
            >
                <ContainerCard
                    title={'Informations générales'}
                    ctaElement={(
                        <EditButtonWithValidationPanel
                            onSubmit={data => userInformationSchemaFormatter(user.id, data).then(() => refetch())}
                        >
                            <AdminForm schema={userInformationSchema(enums)} values={user}/>
                        </EditButtonWithValidationPanel>
                    )}
                >
                    <AdminForm schema={userInformationSchema(enums)} values={user} editable={false} />
                </ContainerCard>
                <ContainerCard
                    title={'Disponibilités'}
                    ctaElement={
                        <EditButtonWithValidationPanel
                            onSubmit={data => userAvailabilitiesSchemaFormatter(user.id, data).then(() => refetch())}
                        >
                            <AdminForm schema={userAvailabilitiesSchema(enums)} values={user}/>
                        </EditButtonWithValidationPanel>
                    }
                >
                    <AdminForm schema={userAvailabilitiesSchema(enums)} values={user} editable={false} />
                </ContainerCard>
                <ContainerCard
                    title={'Autres informations'}
                    ctaElement={
                        <EditButtonWithValidationPanel
                            onSubmit={data => userAdditionalSchemaFormatter(user.id, data).then(() => refetch())}
                        >
                            <AdminForm schema={userAdditionalSchema(enums)} values={user}/>
                        </EditButtonWithValidationPanel>
                    }
                >
                    <AdminForm schema={userAdditionalSchema(enums)} values={user} editable={false} />
                </ContainerCard>
            </ContainerCard>
        </section>
    )
}

export default DemoPage
