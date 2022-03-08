import service from '../axios-ins'

export const create = (payload) => service.post('status', payload)

export const update = (id, payload) => service.put(`status/${id}`, payload)

export const delStatus = (id) => service.delete(`status/${id}`)

export const getById = (id) => service.get(`status/${id}`)

export const getStatusList = (params) => service.get(`status`, {params}) // when we fetch status list it should be under a categoryid thats what we define here