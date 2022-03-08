import service from '../axios-ins'; // axios instace 


//Create a category
export const create = (payload) => service.post("category/",payload)


//Delete a category by id
export const delCategory = (id) => service.delete(`category/${id}`) // the service contains only compulsary string we need to add the rest of the string url according to our purpose


//Update a category by id
export const update = (id, payload) => service.put(`category/${id}`, payload)


//Cet a single category by id 
export const getById = (id) => service.get(`category/${id}`)


//Get the list of all categories
export const list = () => service.get(`category`)