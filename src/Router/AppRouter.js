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
import UserUI from "../components/UserUI";
import ToDo from "../components/ToDo";

const AppRouter = () => (

    
    <BrowserRouter>

        <Switch> 
            <Route path='/' component={UserUI} exact={true}/>
            <Route path='/editcategory' component={EditCategory} />
            <Route path='/addtodo' component={AddToDo}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register} />
            <Route path='/todo' component ={ToDo} />
            <Route component ={NotFountPage}/>
        </Switch>
    
    </BrowserRouter>

)


export default AppRouter;