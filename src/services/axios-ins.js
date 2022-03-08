import axios from "axios";

/*
here we are defining an instance which consists the static part of url.
 we will use this instance just like below

 axios.post('url, asda) = instance.post 

*/



const instance = axios.create(
    {
        baseURL:'http://localhost:80/'
    }
)

export default instance