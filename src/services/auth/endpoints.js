import service from '../axios-ins'; // axios instace 

//login

export const login = (payload) => // payload is simple json with username and password as in postman collection
    service.post('auth/login',payload) // the service just contains the compulsary url string. we need to add what is necessary. That's why we added 'uath/token' 
            .then((response)=>{
                service.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
                return response // if we do not return promise then when we call this method in another page we can not continue to process the response, which is sent from api
            })




//register


export const register = (payload) => 
    
    service.post('auth/register', payload)
            .then((response)=>{
                service.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
                return response
            })
            