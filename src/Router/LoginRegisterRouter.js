import React from "react";
import { BrowserRouter,
            Switch,
            Route,
        } from "react-router-dom";


import EditCategory from "../components/EditCategory";
import AddToDo from "../components/AddToDo";
import NotFountPage from "../components/NotFoundPage";
import Login from "../components/Login";
import Register from "../components/Register";
import LoginRegisterButtons from "../components/Login-Register";

let a = true

const LoginRegister = () => (

    

    <BrowserRouter>
    
        <LoginRegisterButtons />
        <Switch> 
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register} />
        </Switch>
    
    </BrowserRouter>

)


export default LoginRegister;