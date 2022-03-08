import * as React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { login } from '../services/auth/endpoints';
import axios from 'axios';


export default function LoginForm(props) {



  const [loginData, setLoginData] = React.useState({})
  let history=useHistory()


  // one function for setting loggin informations 
  const handleLoginInfo = (e) => {
    const value = e.target.value
    const key = e.target.name

    setLoginData((prevState)=>({...prevState, [key]:value}))
  }

  const handleLogin = ({setLogged}) => {

    if(loginData.username?.length > 3 && loginData.password?.length > 3){
      
      login(loginData)

      .then(response => /* console.log(response) */ 
      {
        document.cookie = `token=${response.data.token}`
        history.push('/')
      })
      
      .catch(error=>{
        if(error.response){
          console.log(error.response.data);
        }
      })

      
      

    }
    /*  Before Using EndPoints 
    axios.post('http://localhost:80/auth/login', loginData)
    .then(response =>  
    document.cookie = `token=${response.data.token}`)
    .them(props.setLogged(true))
    .catch(error=>{
      if(error.response){
        console.log(error.response.data);
      }
    })
    */
  }




  return (
    <div>
        <div>
            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >

            <TextField id="standard-basic" name="username" label="Name" variant="standard" onChange={handleLoginInfo} />
            <TextField id="standard-basic" name="password" label="Password" variant="standard" onChange={handleLoginInfo}/>

            </Box>
        </div>
        <div>
            <button id="button" onClick={handleLogin}>Log In</button>
        </div>
        <Link to='/'>home</Link>
    </div>
    
  );
}