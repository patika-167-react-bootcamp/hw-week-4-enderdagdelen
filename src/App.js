import logo from './logo.svg';
import './App.css';
import React from 'react';

import AppRouter from './Router/AppRouter';
import LoginRegister from './Router/LoginRegisterRouter';






function App() {


  const [isLogged, setLogged] = React.useState(false)

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
   React.useEffect(()=>{
    const cookie = getCookie('token')
    
    cookie ? setLogged(()=>true):setLogged(()=>false)
  
  },[document.cookie]) 

  


  
  return (
    <div className="App">
      {isLogged===true ? <AppRouter/>:<LoginRegister/>}
    </div>
  );
}

export default App;
