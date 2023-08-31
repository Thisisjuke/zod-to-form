import type { ClientParams } from '@/client'
import client from '@/client'

export function getUserById({ id }: ClientParams = {}) {
    return client().get(`api/v1/users/${id}`)
}

export function deleteUser({ id }: ClientParams = {}) {
    return client().delete(`api/v1/users/${id}`)
}

export function patchUserById({ id, data }: ClientParams = {}) {
    return client().patch(`api/v1/users/${id}`, {
        json: data,
    })
}

export function refuseUserById({ id, data }: ClientParams = {}) {
    return client().post(`api/v1/users/${id}/validate`, {
        json: data,
    })
}

export function validateUserById({ id, data }: ClientParams = {}) {
    return client().post(`api/v1/users/${id}/refuse`, {
        json: data,
    })
}
