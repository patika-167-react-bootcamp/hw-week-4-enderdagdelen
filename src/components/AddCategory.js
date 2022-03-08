import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Preview } from '@mui/icons-material';
import {create} from '../services/category/endpoints'
import axios from 'axios';


export default function AddCategory({onSave,...props}) {
  const [newCategory, setNewCategory] = React.useState({})

  const handleOnChange = (e) => {
      //console.log(e.target.value);
      const newCat = e.target.value
      setNewCategory(()=> ({"title":`${newCat}`}))
  }

   const handleClick = () => {
        //console.log(newCategory);

        const token = document.cookie.split("token=")[1]
        const config = {headers: {Authorization:`Bearer ${token}`}}
        const url = 'http://localhost:80/category/'
        //create(newCategory, config)
        axios.post(url,newCategory, config)
        .then((response) => {
          console.log(response)
          onSave(response.data)  
        })
        .catch(error => console.log(error.response))
   }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="New Category" variant="outlined" 
      onChange = {handleOnChange}/>
      <div>
        <Stack spacing={2} direction="row">
        
            <Button variant="contained" onClick = {()=>handleClick(newCategory)}>Add Category</Button>
      
        </Stack>
        </div>

    </Box>
    
  );
}


