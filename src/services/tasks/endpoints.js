import service from '../axios-ins'


export const create = (payload) => service.post(`todo`, payload)

export const delTask = (id) => service.delete(`todo/${id}`)

export const update = (id, payload) => service.put(`todo/${id}`, payload)

export const getById = (id) => service.get(`todo/${id}`)

export const getList = (params) => service.get(`todo`, params)