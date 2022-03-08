import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function AddStatus({categoryList,...props}) {
  const [newStatus, setNewStatus] = React.useState({})

  const handleOnChange = (e) => {
      console.log(e.target.value);
      const newSat = e.currentTarget.value
      setNewStatus((prev)=> ({...prev,"title":`${newSat}`}))
  }

  //select category
  //const [categoryId, setCategoryId] = React.useState('');

  /* const handleCategoryChange = (event) => {
    setCategoryId(event.target.value);
    console.log(event.target.value)

    const value = event.target.value
    const name = event.target.name

    setNewStatus((prev)=>({...prev,"categoryId":value}))
  }; */
  //select color
  //const [color, setColor] = React.useState('');

  const handleChange = (event) => {
    //setColor(event.target.value);
    //console.log(event.target.value); 
    const value = event.target.value
    const name = event.target.name
    console.log(name)
    setNewStatus((prev)=>({...prev,[name]:value}))
  };


   const handleClick = () => {
        console.log(newStatus);

        const token = document.cookie.split("token=")[1]
        const config = {headers: {Authorization:`Bearer ${token}`}}
        const url = 'http://localhost:80/status/'
        //create(newCategory, config)
        axios.post(url, newStatus, config)
        .then((response) => {
          console.log(response)
          //onSave(response.data)  
        })
        .catch(error => console.log(error.response)) 
   }

   /*
{
    "title":"Status Adı",
    "categoryId":1,
    "color":"purple"
}
   */

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="New Status" variant="outlined" 
      onChange = {handleOnChange}/>

      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={""}
          label="Category"
          onChange={handleChange}
          name="categoryId"
        >
        {categoryList[0]?.map((item) => (
          <MenuItem value={item.id} key={item.id}>
            {item.title}
          </MenuItem>
        ))}
        </Select>
        <br></br>
        </FormControl>
        
        <FormControl fullWidth>
          
        {/* color picker */}
        <InputLabel id="demo-simple-select-label-color">Color</InputLabel>
        <Select
          labelId="demo-simple-select-label-color"
          id="demo-simple-select-color"
          value={''}
          label="color"
          onChange={handleChange}
          name="color"
        >
          <MenuItem value={"black"}>Black</MenuItem>
          <MenuItem value={"white"}>White</MenuItem>
          <MenuItem value={"red"}>Red</MenuItem>
          <MenuItem value={"lime"}>Lime</MenuItem>
          <MenuItem value={"blue"}>Blue</MenuItem>
          <MenuItem value={"yellow"}>Yellow</MenuItem>
          <MenuItem value={"cyan"}>Cyan</MenuItem>
          <MenuItem value={"magenta"}>Magenta</MenuItem>
          <MenuItem value={"silver"}>Silver</MenuItem>
          <MenuItem value={"gray"}>Gray</MenuItem>
          <MenuItem value={"maroon"}>Maroon</MenuItem>
          <MenuItem value={"live"}>Olive</MenuItem>
          <MenuItem value={"green"}>Green</MenuItem>
          <MenuItem value={"purple"}>Purple</MenuItem>
          <MenuItem value={"navy"}>Navy</MenuItem>
        </Select>

      </FormControl>
    </Box> 
      <div>
        <Stack spacing={2} direction="row">
        
            <Button variant="contained" onClick = {()=>handleClick(newStatus)}>Add Status</Button>
      
        </Stack>
      </div>
    </Box>
    
  );
}



