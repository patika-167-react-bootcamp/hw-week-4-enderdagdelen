


import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link, NavLink } from 'react-router-dom';

export default function ColorToggleButton(props) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      /* setLogged = {props.setLogged} */
    >
    <ToggleButton value="Login"><Link to='/login'>Log-In</Link></ToggleButton>
    <ToggleButton value="Home"><Link to='/' >Home</Link></ToggleButton>
    <ToggleButton value="Register"><Link to='/register'>Register</Link></ToggleButton>
    </ToggleButtonGroup>
  );
}


