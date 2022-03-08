import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { register } from '../services/auth/endpoints';


export default function RegisterForm() {
  const [registerData, setRegisterData] = React.useState({})
  const [registerMessage, setRegisterMessage] = React.useState('')
  let history = useHistory()
  const handleRegister = (e) => {
  
    const val= e.target.value
    const key = e.target.name

    setRegisterData((prevState)=>({...prevState,[key]:val}))
  }



  const handleOnClick = () => {

    /* console.log(JSON.stringify(registerData)); */
    
    /* axios.post('http://localhost:80/auth/register', registerData)
    .then(response => document.cookie = `token=${response.data.token}` )
    .catch(function (error) {
      if(error.response){
        console.log(error.response.data);
      }
    }); */

    
      if(
        registerData.username?.length > 3 && 
        registerData.password?.length > 3 &&
        (registerData.passwordConfirm === registerData.password)
      ){
        
        register(registerData)
        .then(response => document.cookie = `token=${response.data.token}`)
        .then((response)=>{
          console.log(response)
          history.push('/') 
          return response})
        .catch(function (error) {
          
          if(error.response){
            
            setRegisterMessage(error.response.data.issues?.message || error.response.data)
          }
        });
      }else{
        
        setRegisterMessage("Your Name And PassWord Should Be Longer Then 3 Chars / Your Passwords Do Not Match")
      } 

  }


  return (
    <div>
        <div>
          {/* Error Messages */}
          <div>
          {registerMessage && (
            <Stack  sx={{width:'80%', margin:'0 auto', marginTop:2}}>
            <Alert
              onClose={() => setRegisterMessage("")}
              sx={{ marginBottom: 2, 
                width: '100%', 
                margin:'0 auto'
                
              }}
              severity="error"
            >
              {registerMessage}
            </Alert>
            </Stack>
          )} 
          
          
          </div>

          {/* Textareas */}
            <Box
              component="form"
              sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              >
              <TextField onChange={handleRegister} id="standard-basic" name="username" label="Name" variant="standard" />
              <TextField onChange = {handleRegister} id="standard-basic" name="password" label="Password" variant="standard" />
              <TextField onChange={handleRegister} id="standard-basic" name="passwordConfirm" label="Verify Password" variant="standard" />

            </Box>
        </div>
        <div>
            <button onClick={handleOnClick} id="button-register">Register</button>
        </div>

    </div>
    
  );
}