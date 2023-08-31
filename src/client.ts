/*
    Client mock and params heavily inspired by: https://github.com/sindresorhus/ky-universal.
    NOTE: In this mocked client, calls with `get` method will always return the mocked user.
*/

import user from '@/mocks/user.ts'

export interface ClientParams {
    options?: Record<string, any>
    [key: string]: string | Record<string, any> | Blob | undefined
}

export interface ClientResponse {
    status: number
    data: any
}

interface ClientInstance {
    get: (url: string, options?: any) => Promise<ClientResponse>
    post: (url: string, options?: any) => Promise<ClientResponse>
    patch: (url: string, options?: any) => Promise<ClientResponse>
    delete: (url: string, options?: any) => Promise<ClientResponse>
}

function client(): ClientInstance {
    const sendRequest = async (method: string, url: string, options: any = {}): Promise<ClientResponse> => {
        console.log(`Mock [${method}] query with this URL: ${url}`, options)
        return {
            status: 200,
            data: method === 'get' ? user : {},
        }
    }

    return {
        get: async (url: string, options?: any) => await sendRequest('get', url, options),
        post: async (url: string, options?: any) => await sendRequest('post', url, options),
        patch: async (url: string, options?: any) => await sendRequest('patch', url, options),
        delete: async (url: string, options?: any) => await sendRequest('delete', url, options),
    }
}

export default client
