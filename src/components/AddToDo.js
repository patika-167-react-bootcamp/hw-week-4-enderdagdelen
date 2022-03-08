import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    minWidth:150,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function AddToDo({categoryList,...props}) {

  const [task, setTask] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [status, setStatus] = React.useState([]);
  const [currentState,setCurrentState] = React.useState('')
  const [newToDo, setNewToDo] = React.useState({})




  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    setNewToDo((prev)=>({...prev,[name]:value}))
  }



  const handleCategoryChange = (event) => {
      //console.log(event.target);
      setCategory(event.target.value)
      const value = event.target.value
      const name = event.target.name
      setCurrentState(event.target.key)
      setNewToDo((prev)=>({...prev, [name]:value}))

      const id = event.target.value
      const token = document.cookie.split("token=")[1]
      const config = {headers: {Authorization:`Bearer ${token}`}}

      //http://localhost:80/status?categoryId=1
      axios.get(`http://localhost:80/status?categoryId=${category}`, config)
        .then((response)=>{
          console.log(response);
          setStatus(response?.data)
          return response
        })
        .catch(error => console.log(error))


  }

  // category değişince statu için değer çekecek burası 
  React.useEffect(()=>{
    axios.get('')
  },[category])
  


  const handleClick=()=>{
    console.log(newToDo);
    const token = document.cookie.split("token=")[1]
    const config = {headers: {Authorization:`Bearer ${token}`}}

    axios.post('http://localhost:80/todo', newToDo, config)
          .then(response => console.log(response))
          .catch(error => console.log(error))

  }
 

  
  return (
    <div id="addtodo-form">

      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox" value={task}>Task</InputLabel>
        <BootstrapInput id="demo-customized-textbox" onChange={handleChange} name="title" />
      </FormControl>

      <FormControl sx={{ m: 1}} variant="standard">
        <InputLabel id="demo-customized-select-label">Category</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={category}
          onChange={handleCategoryChange}
          input={<BootstrapInput />}
          name = "categoryId"
        >
        {categoryList[0]?.map((item) => (
          <MenuItem value={item.id} key={item.id}>
            {item.title}
          </MenuItem>
        ))}

        </Select>

      </FormControl>

      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Status</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={currentState}
          onChange={handleChange}
          input={<BootstrapInput />}
          name="statusId"
        > 
        <option aria-label="None" value="" />
          {status.map((statu)=>(
            <option value={statu.id} key={statu.id}>{statu.title}</option>
          ))}
          

        </NativeSelect>
      </FormControl>

      <br></br><br></br>

      <Stack>
            <Button variant="contained" onClick={handleClick}>Save Task To ToDo List</Button>
            
       </Stack>


    </div>
  );
}


/*
{
  "title":"Ev İsleri",
  "categoryId":1,
  "statusId":1
}
*/