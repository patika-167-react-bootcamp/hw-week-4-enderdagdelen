import * as React from 'react';
import { NavLink } from 'react-router-dom';
import AddToDo from './AddToDo';
import ToDo from './ToDo';
import AddCategory from './AddCategory';
import AddStatus from './AddStatus';
// mui imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import { list } from '../services/category/endpoints';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};


const UserUI = () => {

  // Related With Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Add Status modal
  const [open_, setOpen_] = React.useState(false);
  const handleOpen_ = () => setOpen_(true);
  const handleClose_ = () => setOpen_(false);
  //Related With App
  const [categoryNames, setCategoryNames] = React.useState([])

  React.useEffect(()=>{
    const token = document.cookie.split("token=")[1]
    const config = {headers: {Authorization:`Bearer ${token}`}}

    axios.get('http://localhost:80/category', config)
    .then(response=>response.data)
    .then((data)=>{
      setCategoryNames([...categoryNames, data])
      console.log(categoryNames);
    })
    .catch((error)=> console.log(error.response))
  },[])


  const handleAddCategory = (newCategoryData) => {
    setCategoryNames([...categoryNames, newCategoryData])
  }


  //Related With App
  return (
    <div>
    <h1>Save Your Tasks to Your ToDo'S</h1>
      <hr></hr>
      <div >
        <div className="modal_container">
        {/* modal for category*/}
        <div>
          <Button className="modalButton" onClick={handleOpen}>Add Category</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Type The Category You Want To Add
              </Typography>
              <div id="modal-modal-description" sx={{ mt: 2 }}>
                <AddCategory onSave = {handleAddCategory}/>
              </div>
            </Box>
          </Modal>
      
        </div>
        {/* modal for status*/}

        <div>
          <Button className="modalButton" onClick={handleOpen_}>Add Status</Button>
          <Modal
            open={open_}
            onClose={handleClose_}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Status To A Category
              </Typography>
              <div id="modal-modal-description" sx={{ mt: 2 }}>
                <AddStatus categoryList = {categoryNames} />
              </div>
            </Box>
          </Modal>
        </div>
        </div>


        <NavLink className="navlinks" style={{'margin':'10px'}} to='editcategory'>Edit Category</NavLink>
        <NavLink className="navlinks" style={{'margin':'10px'}} to='editcategory'>Edit Status</NavLink>
        <NavLink className="navlinks" style={{'margin':'10px'}} to='editcategory'>Filter</NavLink>
      </div>
      
      <hr></hr>

      <div style={{'marginTop':'50px'}}>
        <ToDo/>
      </div>

      <AddToDo categoryList = {categoryNames}/>
    </div>
    
     
  );
};
export default UserUI;

