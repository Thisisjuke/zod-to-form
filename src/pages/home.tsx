import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Github } from 'lucide-react'
import DemoPicture from '@/assets/placeholder.png'
import Logo from '@/assets/logo.png'

function HomePage() {
    return (
        <main className={'bg-gradient-to-b from-blue-100/20'}>
            <nav className={'bg-white w-full mx-auto border-gray-200 py-4 px-12 md:px-24'}>
                <div className={'flex flex-wrap justify-between items-center mx-auto'}>
                    <div className={'flex gap-x-4 items-center cursor-default'}>
                        <img src={Logo} className={'h-6 sm:h-9'} alt={'Logo'} />
                        <span className={'text-xl font-semibold whitespace-nowrap underline decoration-4 decoration-purple-400'}>zod-to-form</span>
                    </div>
                    <a
                        href={'https://github.com/Thisisjuke/zod-to-form'}
                        target={'_blank'}
                        className={'flex items-center rounded-full border-2 border-black p-1.5 cursor-pointer hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-blue-300 hover:to-purple-400'}
                    >
                        <Github />
                    </a>
                </div>
            </nav>
            <div className={'relative overflow-hidden'}>
                <div className={'flex flex-col md:flex-row pb-24'}>
                    <div className={'md:w-1/2 mt-4 px-6 lg:px-0 lg:pt-4'}>
                        <div className={'mx-auto max-w-2xl p-8'}>
                            <div className={'max-w-xl'}>
                                <span className={'mt-12 rounded-full bg-orange-600/10 px-3 py-1 text-xs font-semibold leading-6 text-orange-500 ring-1 ring-inset ring-blue-600/10'}>
                                    ⚠️ Still a proof of concept at the moment.
                                </span>
                                <h1 className={'mt-4 text-4xl tracking-tight text-gray-900 sm:text-5xl !leading-[1.2]'}>
                                        Generate Shadcn-ui <span className={'font-bold text-blue-700 underline decoration-4'}>Display Table</span> & <span className={'font-bold text-blue-700 underline decoration-4'}>Edit Forms</span> using Zod Schemas
                                </h1>
                                <p className={'mt-6 text-lg leading-8 text-gray-600'}>
                                        Admin dashboard oriented: Use a simple object containing Zod schema to display, edit and validate your resource data.
                                </p>
                                <div className={'mt-10 flex items-center gap-x-6'}>
                                    <a
                                        href={'/demo'}
                                        className={'rounded-md bg-violet-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'}
                                    >
                                            Go to the demo
                                    </a>
                                    <a href={'https://github.com/Thisisjuke/zod-to-form'} target={'_blank'} className={'text-sm font-semibold leading-6 text-gray-900'}>
                                            View on GitHub <span aria-hidden={'true'}>→</span>
                                    </a>
                                </div>
                                <img
                                    src={DemoPicture}
                                    alt={'Demo picture'}
                                    className={'w-full rounded-2xl object-cover mt-12 border-2 border-gray-200'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={'md:w-1/2 mt-8 md:mx-auto'}>
                        <div className={'shadow-lg md:rounded-tl-xl md:rounded-bl-xl bg-gradient-to-tr from-blue-300 to-purple-400'}>
                            <div className={'relative py-12 pl-12 w-full'}>
                                <div className={'mx-auto'}>
                                    <div className={'w-full bg-gray-900'}>
                                        <div className={'flex bg-gray-800/40 ring-1 ring-white/5'}>
                                            <div className={'-mb-px flex text-sm font-medium leading-6 text-gray-400'}>
                                                <div className={'border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white'}>
                                                        user-information.tsx
                                                </div>
                                                <div className={'border-r border-gray-600/10 px-4 py-2'}>App.tsx</div>
                                            </div>
                                        </div>
                                        <SyntaxHighlighter language={'typescript'} style={darcula} className={'!bg-transparent !text-[0.9rem]'}>
                                            {`
export const userInformationSchema = ({ genders }: { [key: string]: SelectableFields }) => {
    const GENDERS_ENUM = toTypedZodEnum(genders);

    return ({
        'contact.firstName': z.string().optional().describe(JSON.stringify({
            label: 'Prénom',
        })),
        'contact.lastName': z.string().optional().describe(JSON.stringify({
            label: 'Nom de Famille',
        })),
        'genders': z.enum(GENDERS_ENUM).describe(JSON.stringify({
            label: 'Genre',
            data: genders,
        })),
        'contact.phone': z.string().optional().describe(JSON.stringify({
            label: 'Numéro de Téléphone',
        })),
        'contact.email': z.string().optional().describe(JSON.stringify({
            label: 'Adresse e-mail',
        })),
        'residenceAddress': z.object({
            address1: z.string(),
            address2: z.string(),
            zipcode: z.string(),
            city: z.string(),
            countryCode: z.string(),
            state: z.string(),
            placeId: z.string(),
        }).optional().describe(JSON.stringify({
            label: 'Adresse de résidence',
            customType: 'address',
        })),

    })
}

export const userInformationSchemaFormatter = (userId: string, data: any) => {
    return patchUserById({
        id: userId,
        data,
    })
}
                                                `}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage
